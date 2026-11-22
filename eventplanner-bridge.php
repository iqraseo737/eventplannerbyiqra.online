<?php
/**
 * Plugin Name: Event Planner Bridge
 * Description: Shows the Event Planner by Iqra design (from the GitHub repo files) on WordPress. Design/code comes from GitHub, text/images/blog from WordPress.
 * Version: 1.0.0
 */
if (!defined('ABSPATH')) exit;
if (defined('EPB_DIR')) return;
define('EPB_DIR', plugin_dir_path(__FILE__));
define('EPB_URL', plugin_dir_url(__FILE__));
define('EPB_SLUGS', 'about|services|gallery|blog|contact|wedding-checklist');
define('EPB_ALL', 'home|about|services|gallery|blog|contact|wedding-checklist');

// Reads one page of the design (index.html, about.html ...) from the repo files
function epb_parse($slug) {
    $file = EPB_DIR . ($slug === 'home' ? 'index.html' : $slug . '.html');
    if (!is_readable($file)) return null;
    $src = file_get_contents($file);
    $r = array('title' => '', 'desc' => '', 'head' => '', 'main' => '', 'scripts' => '', 'header' => '', 'footer' => '');
    if (preg_match('#<head>(.*?)</head>#s', $src, $m)) {
        $head = $m[1];
        if (preg_match('#<title>(.*?)</title>#s', $head, $t)) $r['title'] = html_entity_decode($t[1], ENT_QUOTES, 'UTF-8');
        if (preg_match('#<meta name="description" content="(.*?)">#s', $head, $d)) $r['desc'] = html_entity_decode($d[1], ENT_QUOTES, 'UTF-8');
        $head = preg_replace('#<title>.*?</title>#s', '', $head);
        $head = preg_replace('#<meta name="description"[^>]*>#', '', $head);
        $head = preg_replace('#<meta charset[^>]*>|<meta name="viewport"[^>]*>#', '', $head);
        $r['head'] = $head;
    }
    if (preg_match('#<main id="main">(.*?)</main>#s', $src, $m)) $r['main'] = trim($m[1]);
    if (preg_match_all('#<script src="assets/js/[^"]+"></script>#', $src, $m)) $r['scripts'] = implode("\n", $m[0]);
    if (preg_match('#<header class="site-header">.*?</header>#s', $src, $m)) $r['header'] = $m[0];
    if (preg_match('#<footer class="site-footer">.*?</footer>#s', $src, $m)) $r['footer'] = $m[0];
    return $r;
}

function epb_is_design_page() {
    $id = get_queried_object_id();
    if (!$id) return false;
    $is_page = is_singular('page') || (is_home() && (int) get_option('page_for_posts') === (int) $id);
    if (!$is_page) return false;
    return (bool) preg_match('#^(' . EPB_ALL . ')$#', get_post_field('post_name', $id));
}

add_filter('template_include', function ($template) {
    return epb_is_design_page() ? EPB_DIR . 'template.php' : $template;
});

// Same URLs as before: /about.html, /services.html ... /index.html
add_action('init', function () {
    add_rewrite_rule('^(' . EPB_SLUGS . ')\.html$', 'index.php?pagename=$matches[1]', 'top');
    add_rewrite_rule('^index\.html$', 'index.php', 'top');
});
add_action('init', function () {
    if (get_option('epb_rewrite_v') !== '3') {
        flush_rewrite_rules();
        update_option('epb_rewrite_v', '3');
    }
}, 99);
add_filter('redirect_canonical', function ($redirect, $requested) {
    if (preg_match('#/(' . EPB_SLUGS . '|index)\.html($|\?)#', $requested)) return false;
    return $redirect;
}, 10, 2);
add_filter('page_link', function ($link, $id) {
    $slug = get_post_field('post_name', $id);
    if (preg_match('#^(' . EPB_SLUGS . ')$#', $slug)) return home_url('/' . $slug . '.html');
    return $link;
}, 10, 2);
// A single post opens inside the blog page design (blog.html#post-name)
add_action('template_redirect', function () {
    if (is_singular('post')) {
        wp_redirect(home_url('/blog.html#' . get_post_field('post_name', get_queried_object_id())), 302);
        exit;
    }
}, 5);
add_action('template_redirect', function () {
    $path = trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');
    if (preg_match('#^(' . EPB_SLUGS . ')$#', $path, $m)) {
        wp_redirect(home_url('/' . $m[1] . '.html'), 301);
        exit;
    }
});

// First time only: create the pages (text lives in WordPress after that)
add_action('admin_init', function () {
    if (get_option('epb_seeded_git')) return;
    foreach (explode('|', EPB_ALL) as $slug) {
        if (get_page_by_path($slug, OBJECT, 'page')) continue;
        $p = epb_parse($slug);
        if (!$p) continue;
        wp_insert_post(array(
            'post_type' => 'page',
            'post_status' => 'publish',
            'post_title' => $p['title'],
            'post_name' => $slug,
            'post_content' => "<!-- wp:html -->\n" . $p['main'] . "\n<!-- /wp:html -->",
        ));
    }
    update_option('epb_seeded_git', 1);
});

// One-time import: the original design articles (import-articles.json) become normal WordPress posts,
// so the blog can be fully managed from the WordPress panel.
add_action('admin_init', function () {
    if (get_option('epb_blog_imported')) return;
    $file = EPB_DIR . 'import-articles.json';
    if (!file_exists($file)) return;
    $list = json_decode(file_get_contents($file), true);
    if (!is_array($list)) return;
    if (function_exists('set_time_limit')) @set_time_limit(300);
    require_once ABSPATH . 'wp-admin/includes/media.php';
    require_once ABSPATH . 'wp-admin/includes/file.php';
    require_once ABSPATH . 'wp-admin/includes/image.php';
    foreach ($list as $i => $a) {
        if (get_page_by_path($a['id'], OBJECT, 'post')) continue;
        $cat = wp_create_category($a['category']);
        $when = time() - ($i * DAY_IN_SECONDS);
        $pid = wp_insert_post(array(
            'post_type' => 'post',
            'post_status' => 'publish',
            'post_name' => $a['id'],
            'post_title' => $a['title'],
            'post_excerpt' => $a['excerpt'],
            'post_content' => $a['content'],
            'post_category' => array($cat),
            'post_date' => wp_date('Y-m-d H:i:s', $when),
        ));
        if ($pid && !is_wp_error($pid) && !empty($a['image'])) {
            $img = media_sideload_image($a['image'], $pid, $a['title'], 'id');
            if (!is_wp_error($img)) set_post_thumbnail($pid, $img);
        }
    }
    update_option('epb_blog_imported', 1);
});

// Second step: attach the original images and reading times to the imported posts.
add_action('admin_init', function () {
    if (get_option('epb_blog_imported_v2')) return;
    if (!get_option('epb_blog_imported')) return;
    $file = EPB_DIR . 'import-articles.json';
    if (!file_exists($file)) return;
    $list = json_decode(file_get_contents($file), true);
    if (!is_array($list)) return;
    if (function_exists('set_time_limit')) @set_time_limit(300);
    require_once ABSPATH . 'wp-admin/includes/media.php';
    require_once ABSPATH . 'wp-admin/includes/file.php';
    require_once ABSPATH . 'wp-admin/includes/image.php';
    $ok = true;
    foreach ($list as $a) {
        $p = get_page_by_path($a['id'], OBJECT, 'post');
        if (!$p) continue;
        if (!get_post_meta($p->ID, '_epb_minutes', true)) update_post_meta($p->ID, '_epb_minutes', (int) $a['minutes']);
        if (has_post_thumbnail($p->ID) || empty($a['image'])) continue;
        $tmp = download_url($a['image'], 60);
        if (is_wp_error($tmp)) { $ok = false; continue; }
        $att = media_handle_sideload(array('name' => $a['id'] . '.jpg', 'tmp_name' => $tmp), $p->ID, $a['title']);
        if (is_wp_error($att)) { @unlink($tmp); $ok = false; continue; }
        set_post_thumbnail($p->ID, $att);
    }
    if ($ok) update_option('epb_blog_imported_v2', 1);
});
