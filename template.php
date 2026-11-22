<?php
if (!defined('ABSPATH')) exit;
$id = get_queried_object_id();
$slug = get_post_field('post_name', $id);
$d = epb_parse($slug);
if (!$d) { status_header(500); echo 'Design file missing'; exit; }
$fix = function ($s) {
    return str_replace(array('"assets/', "'assets/"), array('"' . EPB_URL . 'assets/', "'" . EPB_URL . 'assets/'), $s);
};
$links = function ($s) {
    $s = preg_replace('#href="/(' . EPB_SLUGS . ')/#', 'href="$1.html', $s);
    return str_replace('href="/"', 'href="index.html"', $s);
};
$home = epb_parse('home');
$header = $home ? $home['header'] : $d['header'];
$footer = $home ? $home['footer'] : $d['footer'];
$body = do_blocks(get_post_field('post_content', $id));
$header = $links($header); $footer = $links($footer); $body = $links($body);
$file = ($slug === 'home') ? 'index.html' : $slug . '.html';
$header = str_replace(' class="active" aria-current="page"', '', $header);
$header = preg_replace('#(<li><a href="' . preg_quote($file, '#') . '")>#', '$1 class="active" aria-current="page">', $header, 1);
$scripts = $d['scripts'];

// Blog page: WordPress posts are added to the design's article list
if ($slug === 'blog') {
    $skip = array();
    $hw = get_page_by_path('hello-world', OBJECT, 'post');
    if ($hw) $skip[] = $hw->ID;
    $wp_posts = get_posts(array('post_type' => 'post', 'post_status' => 'publish', 'numberposts' => 200, 'post__not_in' => $skip));
    $items = array();
    foreach ($wp_posts as $p) {
        $cats = get_the_category($p->ID);
        $plain = wp_strip_all_tags($p->post_content);
        $items[] = array(
            'id' => $p->post_name,
            'category' => $cats ? $cats[0]->name : 'Blog',
            'title' => html_entity_decode(wp_strip_all_tags(get_the_title($p->ID)), ENT_QUOTES, 'UTF-8'),
            'image' => get_the_post_thumbnail_url($p->ID, 'large') ?: EPB_URL . 'assets/img/logo-mark.svg',
            'excerpt' => html_entity_decode($p->post_excerpt ? wp_strip_all_tags($p->post_excerpt) : wp_trim_words($plain, 30), ENT_QUOTES, 'UTF-8'),
            'minutes' => max(1, (int) ceil(str_word_count($plain) / 200)),
            'content' => apply_filters('the_content', $p->post_content),
        );
    }
    if ($items) {
        $tag = '<script src="assets/js/articles.js"></script>';
        $inject = '<script>articles.unshift.apply(articles,' . wp_json_encode($items, JSON_HEX_TAG | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE) . ');</script>';
        $scripts = str_replace($tag, $tag . "\n" . $inject, $scripts);
    }
}
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?php echo esc_html($d['title']); ?></title>
<meta name="description" content="<?php echo esc_attr($d['desc']); ?>">
<?php echo $fix($d['head']) . "\n"; ?>
<?php wp_head(); ?>
</head>
<body class="ep-page">
<?php echo $fix($header) . "\n"; ?>
<main id="main"><?php echo $fix($body); ?></main>
<?php echo $fix($footer) . "\n"; ?>
<?php echo $fix($scripts) . "\n"; ?>
<?php wp_footer(); ?>
</body>
</html>
