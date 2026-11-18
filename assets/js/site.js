(function(){
"use strict";
var WA="923709909747";

/* shared services data */
window.SERVICES=[
 {id:"nikaah",icon:"fa-ring",thumb:"assets/img/t/stage-02.webp",title:"Nikaah Stage Decor",sub:"Timeless wedding elegance",img:"assets/img/g/stage-02.webp",text:"A graceful Nikaah stage designed around your venue, colours and family traditions, with floral styling, draping and warm lighting that photographs beautifully.",list:["Floral backdrops, arches and pillars","Ivory, gold, pastel and custom palettes","Welcome signs and entrance styling"]},
 {id:"mehndi",icon:"fa-palette",thumb:"assets/img/t/mehndi-02.webp",title:"Mehndi Stage Decor",sub:"Colour, music and joy",img:"assets/img/g/mehndi-02.webp",text:"Vibrant, festive Mehndi and Dholki setups with marigold florals, colourful seating, props and lighting that match the energy of the night.",list:["Marigold and floral garlands","Traditional seating, umbrellas and props","Festive lighting and photo corners"]},
 {id:"setting",icon:"fa-couch",thumb:"assets/img/t/seating-01.webp",title:"Stage & Venue Setting",sub:"Complete event setup",img:"assets/img/g/seating-01.webp",text:"End-to-end setting for your venue: stage layout, guest seating, table arrangement, entrance, walkways and lighting, planned so everything flows on the day.",list:["Stage, sofa and seating arrangement","Guest tables, chairs and layout planning","Entrance, walkway and lighting setup"]},
 {id:"food",icon:"fa-utensils",thumb:"assets/img/t/cakes-01.webp",title:"Catering & Food",sub:"Menus for every celebration",img:"assets/img/g/food-menu.webp",text:"Delicious catering arranged for your event size and taste, from traditional Pakistani wedding menus to buffet, live counters and dessert tables.",list:["Barat, Walima and Mehndi menus","Buffet, serving staff and live counters","Desserts, tea and beverage stations"]},
 {id:"qawwali",icon:"fa-microphone-lines",thumb:"assets/img/t/qawwali.webp",title:"Qawwali Night",sub:"Soulful live performance",img:"assets/img/g/qawwali.webp",text:"Bring the magic of a live Qawwali evening to your Mehndi, Dholki or private gathering. We arrange performers, stage and sound to suit your event.",list:["Professional Qawwali groups","Stage, seating and ambience styling","Duration and set list discussed with you"]},
 {id:"sound",icon:"fa-volume-high",thumb:"assets/img/t/dj.webp",title:"Sound System & DJ",sub:"Clear sound, great atmosphere",img:"assets/img/g/dj.webp",text:"Reliable sound for speeches, ceremonies, music and dancing. Speakers, microphones, mixers and DJ support matched to your venue and guest count.",list:["Speakers, microphones and mixers","DJ and music coordination","Indoor and outdoor event sound"]},
 {id:"room",icon:"fa-heart",thumb:"assets/img/t/room-02.webp",title:"Room Decor",sub:"Romantic & special occasions",img:"assets/img/g/room-02.webp",text:"Transform a bedroom or suite for wedding nights, anniversaries and surprises with flowers, candles-style lighting and personalised details.",list:["Wedding night and anniversary themes","Floral and balloon arrangements","LED candles and fairy lights"]},
 {id:"birthday",icon:"fa-cake-candles",thumb:"assets/img/t/birthday-02.webp",title:"Birthday Decor",sub:"Celebrate in style",img:"assets/img/g/birthday-02.webp",text:"Themed birthday set-ups at home or venue for kids and adults, with balloons, backdrops, cake tables and surprise arrangements.",list:["Themed backdrops and balloon art","Cake table and photo corner","Surprise and baby shower setups"]},
 {id:"lighting",icon:"fa-lightbulb",thumb:"assets/img/t/lighting-03.webp",title:"Home Lighting",sub:"Magical lighting design",img:"assets/img/g/lighting-03.webp",text:"Give your home a festive glow for weddings and family functions with decorative facade, courtyard and entrance lighting.",list:["Facade and courtyard lighting","Fairy-light curtains and lanterns","Safe, tidy installation and removal"]},
 {id:"photo",icon:"fa-camera",thumb:"https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=240&q=70",title:"Photography",sub:"Capture beautiful memories",img:"https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1100&q=80",text:"Event photography that keeps the emotion of your day: portraits, family moments and every decorated detail.",list:["Event and couple portraits","Family and group coverage","Edited gallery delivery"]},
 {id:"video",icon:"fa-video",thumb:"https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=240&q=70",title:"Videography",sub:"Your story in motion",img:"https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1100&q=80",text:"Cinematic coverage of your ceremony and celebrations, edited into highlights you will want to watch again.",list:["Full event coverage","Cinematic highlight film","Drone coverage on request"]},
 {id:"car",icon:"fa-car-side",thumb:"assets/img/t/car-01.webp",title:"Car Decor",sub:"Elegant occasion styling",img:"assets/img/g/car-01.webp",text:"Floral bridal car decoration for Barat and Rukhsati, styled to match your wedding palette.",list:["Fresh and artificial floral styling","Colour-matched ribbon and accents","On-time delivery to your venue"]}
];
var NEW_IDS=["setting","food","qawwali","sound"];

function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}

/* home service cards */
var grid=document.getElementById("servicesGrid");
if(grid){
 grid.innerHTML=window.SERVICES.map(function(s){
  return '<article class="card reveal'+(NEW_IDS.indexOf(s.id)>-1?' is-new':'')+'"><div class="ico ph"><img src="'+s.thumb+'" alt="" loading="lazy"'+(s.fb?' onerror="this.onerror=null;this.src=\''+s.fb+'\'"':'')+' width="80" height="80"><i class="fa-solid '+s.icon+'"></i></div><h3>'+esc(s.title)+'</h3><p>'+esc(s.sub+". "+s.text.split(". ")[0].replace(/\.$/,"")+".")+'</p><a class="more" href="services.html#'+s.id+'">Details <i class="fa-solid fa-arrow-right"></i></a></article>';
 }).join("");
}

/* services page rows */
var rows=document.getElementById("serviceRows");
if(rows){
 rows.innerHTML=window.SERVICES.map(function(s,i){
  var media=s.img?'<div class="svc-media"><span class="svc-num">'+String(i+1).padStart(2,"0")+'</span><img src="'+s.img+'" alt="'+esc(s.title)+' in Islamabad" loading="lazy"'+(s.fb?' onerror="this.onerror=null;this.src=\''+s.fb+'\'"':'')+'></div>':'<div class="svc-media panel"><span class="svc-num">'+String(i+1).padStart(2,"0")+'</span><i class="fa-solid '+s.icon+'" aria-hidden="true"></i></div>';
  var msg=encodeURIComponent("Hello Event Planner by Iqra, I would like to inquire about "+s.title+".");
  return '<div class="svc-row reveal" id="'+s.id+'">'+media+'<div class="svc-body"><div class="eyebrow">'+esc(s.sub)+'</div><h2>'+esc(s.title)+'</h2><p>'+esc(s.text)+'</p><ul class="ticks">'+s.list.map(function(l){return '<li><i class="fa-solid fa-check"></i><span>'+esc(l)+'</span></li>'}).join("")+'</ul><a class="btn btn-gold" target="_blank" rel="noopener noreferrer" href="https://wa.me/'+WA+'?text='+msg+'"><i class="fa-brands fa-whatsapp"></i> Inquire Now</a></div></div>';
 }).join("");
 var nav=document.getElementById("svcNav");
 if(nav){nav.innerHTML=window.SERVICES.map(function(s){return '<a href="#'+s.id+'">'+esc(s.title)+'</a>'}).join("")}
}

/* service dropdowns in forms */
document.querySelectorAll("select[data-services]").forEach(function(sel){
 window.SERVICES.forEach(function(s){var o=document.createElement("option");o.textContent=s.title;sel.appendChild(o)});
 var m=document.createElement("option");m.textContent="Multiple Services / Full Event Planning";sel.appendChild(m);
});

/* booking forms -> WhatsApp */
document.querySelectorAll("form[data-booking]").forEach(function(f){
 f.addEventListener("submit",function(e){
  e.preventDefault();
  var d=new FormData(f),L=[];
  L.push("*New Event Inquiry - Event Planner by Iqra*");
  [["name","Name"],["phone","Phone"],["email","Email"],["service","Service"],["city","Location"],["date","Event Date"],["guests","Guests"],["budget","Budget (PKR)"],["message","Details"]].forEach(function(p){
   var v=(d.get(p[0])||"").toString().trim();if(v)L.push(p[1]+": "+v);
  });
  window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(L.join("\n")),"_blank","noopener");
 });
});

/* mobile nav */
var mb=document.getElementById("menuBtn"),nl=document.getElementById("navlinks");
if(mb&&nl){
 mb.addEventListener("click",function(){var o=nl.classList.toggle("open");mb.setAttribute("aria-expanded",o);mb.querySelector("i").className=o?"fa-solid fa-xmark":"fa-solid fa-bars"});
 nl.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){nl.classList.remove("open");mb.setAttribute("aria-expanded","false")})});
}

/* header shadow */
var hd=document.querySelector(".site-header");
if(hd){var t=function(){hd.classList.toggle("scrolled",window.scrollY>10)};t();window.addEventListener("scroll",t,{passive:true})}

/* year */
document.querySelectorAll(".js-year").forEach(function(n){n.textContent=new Date().getFullYear()});

/* gallery filter */
var chips=document.querySelectorAll("[data-gfilter]");
chips.forEach(function(c){c.addEventListener("click",function(){
 chips.forEach(function(x){x.classList.remove("on")});c.classList.add("on");
 var k=c.getAttribute("data-gfilter");
 document.querySelectorAll(".shot").forEach(function(s){s.style.display=(k==="all"||s.getAttribute("data-cat")===k)?"":"none"});
})});

/* reveal on scroll (observe after dynamic content exists) */
function reveal(){
 var els=document.querySelectorAll(".reveal:not(.visible)");
 if(!("IntersectionObserver" in window)){els.forEach(function(e){e.classList.add("visible")});return}
 var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add("visible");io.unobserve(x.target)}})},{threshold:.12});
 els.forEach(function(e){io.observe(e)});
}
reveal();
window.addEventListener("load",reveal);

/* ---- English / Urdu switch ---- */
var RE=/^((?:<i [^>]*><\/i>\s*)*)([\s\S]*?)((?:\s*<i [^>]*><\/i>)*)$/;
var INLINE=/^(EM|BR|I|STRONG|B)$/;
var SKIP=/^(SCRIPT|STYLE|SVG|IFRAME|INPUT|TEXTAREA|SELECT|BUTTON)$/;
var store=[],cur="en";
function norm(h){return h.replace(/\s+/g," ").trim()}
function excluded(el){return !!el.closest("script,style,svg,iframe,.article-body,#aTitle,#aMeta,.post,#langBtn")}
function candidates(){
 return Array.prototype.filter.call(document.querySelectorAll("body *"),function(el){
  if(el.tagName==="BUTTON"&&el.id==="langBtn")return false;
  if(SKIP.test(el.tagName)&&el.tagName!=="BUTTON")return false;
  if(excluded(el))return false;
  if(el.children.length===0)return el.textContent.trim()!=="";
  return Array.prototype.every.call(el.children,function(c){return INLINE.test(c.tagName)})&&el.textContent.trim()!=="";
 });
}
function textNodes(){
 var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null),out=[],n;
 while((n=w.nextNode())){
  var p=n.parentNode;
  if(!n.data.trim()||excluded(p)||/^(SCRIPT|STYLE|OPTION)$/.test(p.tagName)&&false)continue;
  if(p.closest("[data-ur-done]"))continue;
  out.push(n);
 }
 return out;
}
function collect(){
 var k={};
 candidates().forEach(function(el){var m=el.innerHTML.match(RE);var c=norm(m[2]);if(c&&/[A-Za-z]/.test(c))k[c]=1});
 textNodes().forEach(function(n){var c=norm(n.data);if(c&&/[A-Za-z]/.test(c))k["T:"+c]=1});
 document.querySelectorAll("[placeholder]").forEach(function(e){k["P:"+e.placeholder]=1});
 return Object.keys(k);
}
window.__i18nKeys=collect;
function toUrdu(){
 var UR=window.UR||{};
 candidates().forEach(function(el){
  var h=el.innerHTML,m=h.match(RE),u=UR[norm(m[2])];
  if(u!==undefined){
   if(el.tagName==="OPTION"&&!el.hasAttribute("value"))el.setAttribute("value",el.textContent);store.push([el,h]);el.innerHTML=m[1]+u+m[3];el.setAttribute("data-ur-done","1")}
 });
 textNodes().forEach(function(n){
  var c=norm(n.data),u=UR["T:"+c];
  if(u!==undefined){store.push([n,n.data]);n.data=n.data.replace(n.data.trim(),u)}
 });
 document.querySelectorAll("[placeholder]").forEach(function(e){
  var u=UR["P:"+e.placeholder];if(u!==undefined){store.push([e,e.placeholder,"ph"]);e.placeholder=u}
 });
}
function restore(){
 for(var i=store.length-1;i>=0;i--){var p=store[i];
  if(p[2]==="ph")p[0].placeholder=p[1];else if(p[0].nodeType===3)p[0].data=p[1];else{p[0].innerHTML=p[1];p[0].removeAttribute("data-ur-done")}}
 store=[];
}
function setLang(l,save){
 if(cur==="ur")restore();
 cur=l;
 if(l==="ur")toUrdu();
 document.documentElement.lang=l==="ur"?"ur":"en";
 var b=document.getElementById("langBtn");if(b)b.textContent=l==="ur"?"English":"اردو";
 if(save){try{localStorage.setItem("epi-lang",l)}catch(e){}}
}
window.__applyLang=function(){if(cur==="ur"){restore();toUrdu()}};
var lb=document.getElementById("langBtn");
if(lb){lb.addEventListener("click",function(){setLang(cur==="ur"?"en":"ur",true)})}
var saved=null;try{saved=localStorage.getItem("epi-lang")}catch(e){}
if(saved==="ur"&&window.UR&&Object.keys(window.UR).length){setLang("ur",false)}
})();

/* gallery lightbox */
(function(){
  var shots=[].slice.call(document.querySelectorAll('.gallery .shot'));
  if(!shots.length)return;
  var lb=document.createElement('div');lb.className='lb';lb.setAttribute('role','dialog');lb.setAttribute('aria-label','Photo viewer');
  lb.innerHTML='<button class="x" aria-label="Close">&times;</button><button class="pv" aria-label="Previous">&#8249;</button><button class="nx" aria-label="Next">&#8250;</button><img alt=""><div class="lb-cap"></div>';
  document.body.appendChild(lb);
  var im=lb.querySelector('img'),cap=lb.querySelector('.lb-cap'),cur=0;
  function vis(){return shots.filter(function(s){return s.style.display!=='none'&&!s.hidden;});}
  function open(i){var v=vis();cur=(i+v.length)%v.length;var f=v[cur];im.src=f.querySelector('img').currentSrc||f.querySelector('img').src;im.alt=f.querySelector('img').alt;cap.textContent=f.querySelector('figcaption').firstChild.textContent;lb.classList.add('on');}
  shots.forEach(function(s){s.addEventListener('click',function(){open(vis().indexOf(s));});});
  lb.querySelector('.x').onclick=function(){lb.classList.remove('on');};
  lb.querySelector('.pv').onclick=function(e){e.stopPropagation();open(cur-1);};
  lb.querySelector('.nx').onclick=function(e){e.stopPropagation();open(cur+1);};
  lb.addEventListener('click',function(e){if(e.target===lb)lb.classList.remove('on');});
  document.addEventListener('keydown',function(e){if(!lb.classList.contains('on'))return;if(e.key==='Escape')lb.classList.remove('on');if(e.key==='ArrowRight')open(cur+1);if(e.key==='ArrowLeft')open(cur-1);});
})();
