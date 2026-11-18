(function(){
"use strict";
var WA="923431544775";

/* shared services data */
window.SERVICES=[
 {id:"nikaah",icon:"fa-ring",title:"Nikaah Stage Decor",sub:"Timeless wedding elegance",img:"https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1100&q=80",text:"A graceful Nikaah stage designed around your venue, colours and family traditions, with floral styling, draping and warm lighting that photographs beautifully.",list:["Floral backdrops, arches and pillars","Ivory, gold, pastel and custom palettes","Welcome signs and entrance styling"]},
 {id:"mehndi",icon:"fa-palette",title:"Mehndi Stage Decor",sub:"Colour, music and joy",img:"https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1100&q=80",text:"Vibrant, festive Mehndi and Dholki setups with marigold florals, colourful seating, props and lighting that match the energy of the night.",list:["Marigold and floral garlands","Traditional seating, umbrellas and props","Festive lighting and photo corners"]},
 {id:"setting",icon:"fa-couch",title:"Stage & Venue Setting",sub:"Complete event setup",img:"https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1100&q=80",text:"End-to-end setting for your venue: stage layout, guest seating, table arrangement, entrance, walkways and lighting, planned so everything flows on the day.",list:["Stage, sofa and seating arrangement","Guest tables, chairs and layout planning","Entrance, walkway and lighting setup"]},
 {id:"food",icon:"fa-utensils",title:"Catering & Food",sub:"Menus for every celebration",img:"",text:"Delicious catering arranged for your event size and taste, from traditional Pakistani wedding menus to buffet, live counters and dessert tables.",list:["Barat, Walima and Mehndi menus","Buffet, serving staff and live counters","Desserts, tea and beverage stations"]},
 {id:"qawwali",icon:"fa-microphone-lines",title:"Qawwali Night",sub:"Soulful live performance",img:"",text:"Bring the magic of a live Qawwali evening to your Mehndi, Dholki or private gathering. We arrange performers, stage and sound to suit your event.",list:["Professional Qawwali groups","Stage, seating and ambience styling","Duration and set list discussed with you"]},
 {id:"sound",icon:"fa-volume-high",title:"Sound System & DJ",sub:"Clear sound, great atmosphere",img:"",text:"Reliable sound for speeches, ceremonies, music and dancing. Speakers, microphones, mixers and DJ support matched to your venue and guest count.",list:["Speakers, microphones and mixers","DJ and music coordination","Indoor and outdoor event sound"]},
 {id:"room",icon:"fa-heart",title:"Room Decor",sub:"Romantic & special occasions",img:"https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=1100&q=80",text:"Transform a bedroom or suite for wedding nights, anniversaries and surprises with flowers, candles-style lighting and personalised details.",list:["Wedding night and anniversary themes","Floral and balloon arrangements","LED candles and fairy lights"]},
 {id:"birthday",icon:"fa-cake-candles",title:"Birthday Decor",sub:"Celebrate in style",img:"https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1100&q=80",text:"Themed birthday set-ups at home or venue for kids and adults, with balloons, backdrops, cake tables and surprise arrangements.",list:["Themed backdrops and balloon art","Cake table and photo corner","Surprise and baby shower setups"]},
 {id:"lighting",icon:"fa-lightbulb",title:"Home Lighting",sub:"Magical lighting design",img:"https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1100&q=80",text:"Give your home a festive glow for weddings and family functions with decorative facade, courtyard and entrance lighting.",list:["Facade and courtyard lighting","Fairy-light curtains and lanterns","Safe, tidy installation and removal"]},
 {id:"photo",icon:"fa-camera",title:"Photography",sub:"Capture beautiful memories",img:"https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=1100&q=80",text:"Event photography that keeps the emotion of your day: portraits, family moments and every decorated detail.",list:["Event and couple portraits","Family and group coverage","Edited gallery delivery"]},
 {id:"video",icon:"fa-video",title:"Videography",sub:"Your story in motion",img:"https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1100&q=80",text:"Cinematic coverage of your ceremony and celebrations, edited into highlights you will want to watch again.",list:["Full event coverage","Cinematic highlight film","Drone coverage on request"]},
 {id:"car",icon:"fa-car-side",title:"Car Decor",sub:"Elegant occasion styling",img:"https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1100&q=80",text:"Floral bridal car decoration for Barat and Rukhsati, styled to match your wedding palette.",list:["Fresh and artificial floral styling","Colour-matched ribbon and accents","On-time delivery to your venue"]}
];
var NEW_IDS=["setting","food","qawwali","sound"];

function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}

/* home service cards */
var grid=document.getElementById("servicesGrid");
if(grid){
 grid.innerHTML=window.SERVICES.map(function(s){
  return '<article class="card reveal'+(NEW_IDS.indexOf(s.id)>-1?' is-new':'')+'"><div class="ico"><i class="fa-solid '+s.icon+'"></i></div><h3>'+esc(s.title)+'</h3><p>'+esc(s.sub+". "+s.text.split(". ")[0].replace(/\.$/,"")+".")+'</p><a class="more" href="services.html#'+s.id+'">Details <i class="fa-solid fa-arrow-right"></i></a></article>';
 }).join("");
}

/* services page rows */
var rows=document.getElementById("serviceRows");
if(rows){
 rows.innerHTML=window.SERVICES.map(function(s,i){
  var media=s.img?'<div class="svc-media"><span class="svc-num">'+String(i+1).padStart(2,"0")+'</span><img src="'+s.img+'" alt="'+esc(s.title)+' in Islamabad" loading="lazy"></div>':'<div class="svc-media panel"><span class="svc-num">'+String(i+1).padStart(2,"0")+'</span><i class="fa-solid '+s.icon+'" aria-hidden="true"></i></div>';
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
})();
