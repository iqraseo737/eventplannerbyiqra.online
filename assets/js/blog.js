(function(){
"use strict";
var WA="923431544775";
var grid=document.getElementById("blogGrid"),search=document.getElementById("search"),empty=document.getElementById("empty");
var listing=document.getElementById("listing"),art=document.getElementById("article");
var cat="All";
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function render(){
 var q=(search.value||"").toLowerCase();
 var list=articles.filter(function(a){return (cat==="All"||a.category===cat)&&(a.title+" "+a.excerpt).toLowerCase().indexOf(q)>-1});
 grid.innerHTML=list.map(function(a){return '<article class="post" tabindex="0" data-id="'+a.id+'"><div class="thumb"><img src="'+a.image+'" alt="'+esc(a.title)+'" loading="lazy"></div><div class="post-body"><small>'+esc(a.category)+'</small><h3>'+esc(a.title)+'</h3><p>'+esc(a.excerpt)+'</p><div class="meta"><span>'+a.minutes+' min read</span><span>Read &rarr;</span></div></div></article>'}).join("");
 empty.style.display=list.length?"none":"block";
}
document.querySelectorAll("[data-cat]").forEach(function(b){b.addEventListener("click",function(){
 document.querySelectorAll("[data-cat]").forEach(function(x){x.classList.remove("on")});b.classList.add("on");cat=b.getAttribute("data-cat");render()})});
search.addEventListener("input",render);
function open(id){
 var a=articles.filter(function(x){return x.id===id})[0];if(!a){close();return}
 document.getElementById("aCat").textContent=a.category+" / Event Inspiration";
 document.getElementById("aTitle").textContent=a.title;
 document.getElementById("aMeta").textContent=a.minutes+" min read | Event Planner by Iqra";
 var im=document.getElementById("aImg");im.src=a.image;im.alt=a.title;
 document.getElementById("aBody").innerHTML=a.content;
 document.getElementById("aWa").href="https://wa.me/"+WA+"?text="+encodeURIComponent("Hello Event Planner by Iqra, I read your article: "+a.title);
 document.title=a.title+" | Event Planner by Iqra";
 listing.style.display="none";art.classList.add("open");window.scrollTo({top:0});
}
function close(){listing.style.display="block";art.classList.remove("open");document.title="Blog | Event Planning & Decoration Ideas | Event Planner by Iqra"}
function route(){var h=decodeURIComponent(location.hash.replace("#","")); if(h)open(h);else close()}
grid.addEventListener("click",function(e){var c=e.target.closest(".post");if(c)location.hash=c.getAttribute("data-id")});
grid.addEventListener("keydown",function(e){if(e.key==="Enter"){var c=e.target.closest(".post");if(c)location.hash=c.getAttribute("data-id")}});
document.getElementById("back").addEventListener("click",function(){history.pushState("",document.title,location.pathname);close()});
window.addEventListener("hashchange",route);
document.getElementById("share").addEventListener("click",function(){
 var d={title:document.title,url:location.href};
 if(navigator.share){navigator.share(d).catch(function(){})}else if(navigator.clipboard){navigator.clipboard.writeText(d.url);this.textContent="Link copied"}
});
render();route();if(window.__applyLang)window.__applyLang();
})();
