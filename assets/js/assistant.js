(function(){
"use strict";
var WA="923709909747",PH="0370 9909747",MAIL="eventplannerbyiqra@gmail.com";
var FB="https://www.facebook.com/share/19YEWwUSfL/",IG="https://www.instagram.com/event_planner_by_iqra/";
function lang(){try{return localStorage.getItem("epi-lang")==="ur"?"ur":"en"}catch(e){return"en"}}
function isUr(t){return /[؀-ۿ]/.test(t)}

/* knowledge base: k = keywords (English + Urdu + Roman Urdu), en / ur answers, link = optional page */
var KB=[
{id:"hello",k:["hi","hello","salam","assalam","aoa","hey","سلام","ہیلو","السلام"],en:"Assalam o Alaikum! I am the Event Planner by Iqra assistant. Ask me about our services, areas, booking, quotations or anything on this website.",ur:"السلام علیکم! میں Event Planner by Iqra کا اسسٹنٹ ہوں۔ ہماری سروسز، علاقوں، بکنگ، کوٹیشن یا ویب سائٹ کی کسی بھی بات کے بارے میں پوچھیں۔"},
{id:"about",k:["about","who","iqra","company","team","agency","about us","kon","kaun","کون","اقرا","ادارہ","کمپنی","تعارف","بارے"],en:"Event Planner by Iqra is an Islamabad based event and wedding planning team. We bring decor, catering, Qawwali, sound and DJ, photography and videography together under one plan, so you deal with one team for the whole event.",ur:"ایونٹ پلینر بائی اقرا اسلام آباد کی ایونٹ اور ویڈنگ پلاننگ ٹیم ہے۔ ہم ڈیکور، کیٹرنگ، قوالی، ساؤنڈ اور ڈی جے، فوٹوگرافی اور ویڈیوگرافی ایک ہی پلان میں دیتے ہیں، یعنی پورے ایونٹ کے لیے ایک ہی ٹیم سے بات کرنی ہوتی ہے۔",link:["about.html","About us"]},
{id:"services",k:["service","services","offer","what do you do","سروس","سروسز","کیا کرتے","خدمات","کام"],en:"We offer 12 services: Nikaah Stage Decor, Mehndi Stage Decor, Stage & Venue Setting, Catering & Food, Qawwali Night, Sound System & DJ, Room Decoration, Birthday Decoration, Lighting, Photography, Videography and Car Decoration. Tap a service below or ask me about any one.",ur:"ہماری 12 سروسز ہیں: نکاح سٹیج ڈیکور، مہندی سٹیج ڈیکور، سٹیج اور وینیو سیٹنگ، کیٹرنگ اور فوڈ، قوالی نائٹ، ساؤنڈ سسٹم اور ڈی جے، روم ڈیکوریشن، برتھ ڈے ڈیکوریشن، لائٹنگ، فوٹوگرافی، ویڈیوگرافی اور کار ڈیکوریشن۔ کسی سروس کا نام لکھیں تو میں تفصیل بتا دوں گا۔",link:["services.html","All services"]},
{id:"nikaah",k:["nikaah","nikah","nekha","walima","valima","wedding stage","barat","baraat","stage decor","نکاح","ولیمہ","بارات","سٹیج","شادی"],en:"Nikaah Stage Decor: a graceful stage designed around your venue, colours and family traditions, with floral styling, draping and warm lighting. It includes floral backdrops, arches and pillars, and ivory, gold, pastel or custom colour themes. Walima and Barat setups can be planned too.",ur:"نکاح سٹیج ڈیکور: آپ کے وینیو، رنگوں اور خاندانی روایات کے مطابق خوبصورت سٹیج، پھولوں کی سجاوٹ، ڈریپنگ اور گرم روشنیوں کے ساتھ۔ اس میں پھولوں کے بیک ڈراپ، محرابیں، پلرز اور آئیوری، گولڈن، پیسٹل یا من پسند رنگوں کی تھیم شامل ہے۔ ولیمہ اور بارات کا سیٹ اپ بھی بن سکتا ہے۔",link:["services.html#nikaah","Nikaah decor"]},
{id:"mehndi",k:["mehndi","mehendi","dholki","dholak","haldi","mayun","مہندی","ڈھولکی","ہلدی","مایوں"],en:"Mehndi Stage Decor: vibrant, festive Mehndi and Dholki setups with marigold florals, colourful seating, props, umbrellas and lighting that match the energy of the night. Haldi and Dholki nights can be styled too.",ur:"مہندی سٹیج ڈیکور: گیندے کے پھولوں، رنگین نشستوں، پراپس، چھتریوں اور روشنیوں کے ساتھ رنگا رنگ مہندی اور ڈھولکی سیٹ اپ۔ ہلدی اور ڈھولکی نائٹ بھی سجائی جا سکتی ہے۔",link:["services.html#mehndi","Mehndi decor"]},
{id:"setting",k:["venue","setting","setup","set up","layout","seating","tables","chairs","hall","entrance","وینیو","سیٹنگ","سیٹ اپ","میز","کرسی","کرسیاں","ہال"],en:"Stage & Venue Setting: complete setup for your venue, including stage layout, sofa and guest seating, tables and chairs, entrance, walkways and lighting, planned so everything flows on the day.",ur:"سٹیج اور وینیو سیٹنگ: آپ کے وینیو کی مکمل سیٹنگ، سٹیج کی ترتیب، صوفے اور مہمانوں کی نشستیں، میز کرسیاں، انٹرنس، واک وے اور لائٹنگ، تاکہ دن بھر سب کچھ ترتیب سے چلے۔",link:["services.html#setting","Venue setting"]},
{id:"food",k:["food","catering","caterer","menu","dish","biryani","buffet","cake","dessert","khana","کھانا","کھانے","کیٹرنگ","مینو","کیک","بریانی"],en:"Catering & Food: delicious catering for your event size and taste, from traditional Pakistani wedding menus to buffet, live counters and dessert tables. We handle Barat, Walima and Mehndi menus. You can see a sample Mehndi Menu on the Services page and cake ideas in the Gallery.",ur:"کیٹرنگ اور فوڈ: آپ کے ایونٹ کے سائز اور ذائقے کے مطابق کھانا، روایتی پاکستانی شادی کے مینو سے لے کر بفے، لائیو کاؤنٹرز اور ڈیزرٹ ٹیبلز تک۔ بارات، ولیمہ اور مہندی کے مینو بنتے ہیں۔ سروسز پیج پر مہندی مینو کا نمونہ اور گیلری میں کیک کے آئیڈیاز دیکھ سکتے ہیں۔",link:["services.html#food","Catering"]},
{id:"qawwali",k:["qawwali","qawali","qawwal","qawal","sufi","قوالی","قوال","صوفی"],en:"Qawwali Night: bring a live Qawwali evening to your Mehndi, Dholki or private gathering. We arrange professional Qawwali groups, stage, seating and ambience styling, and sound to suit your event.",ur:"قوالی نائٹ: اپنی مہندی، ڈھولکی یا نجی محفل میں لائیو قوالی کی شام۔ ہم پروفیشنل قوالی گروپ، سٹیج، نشستوں اور ماحول کی سجاوٹ اور ساؤنڈ آپ کے ایونٹ کے مطابق ارینج کرتے ہیں۔",link:["services.html#qawwali","Qawwali"]},
{id:"sound",k:["sound","dj","speaker","speakers","mic","microphone","music","audio","ساؤنڈ","ڈی جے","ڈیجے","مائیک","اسپیکر","میوزک"],en:"Sound System & DJ: reliable sound for speeches, ceremonies, music and dancing. Speakers, microphones, mixers and DJ support, matched to your venue and guest count, for indoor and outdoor events.",ur:"ساؤنڈ سسٹم اور ڈی جے: تقاریر، تقریبات، میوزک اور ڈانس کے لیے قابل اعتماد ساؤنڈ۔ اسپیکرز، مائیکس، مکسرز اور ڈی جے، آپ کے وینیو اور مہمانوں کی تعداد کے مطابق، اندرونی اور بیرونی ایونٹس کے لیے۔",link:["services.html#sound","Sound & DJ"]},
{id:"room",k:["room","bridal room","suhag","suhaag","bedroom","anniversary","surprise","romantic","کمرہ","روم","سہاگ","دلہن کا کمرہ","اینیورسری","سرپرائز"],en:"Room Decoration: romantic bridal room, anniversary and surprise decor with rose petals, fairy lights, canopy beds and flowers, styled to your taste.",ur:"روم ڈیکوریشن: دلہن کا کمرہ، اینیورسری اور سرپرائز ڈیکور، گلاب کی پتیوں، فیری لائٹس، چھتری والے بیڈ اور پھولوں کے ساتھ آپ کی پسند کے مطابق۔",link:["services.html#room","Room decor"]},
{id:"birthday",k:["birthday","bday","baby shower","bridal shower","bride to be","balloon","sweet 16","سالگرہ","برتھ ڈے","بیبی شاور","غبارے","غباروں"],en:"Birthday Decoration: balloon arches, themed backdrops and table styling for birthdays at home or a venue. We also style Baby Showers, Bridal Showers and Bride to Be setups.",ur:"برتھ ڈے ڈیکوریشن: گھر یا وینیو پر سالگرہ کے لیے غباروں کی محرابیں، تھیمڈ بیک ڈراپ اور ٹیبل سٹائلنگ۔ بیبی شاور، برائیڈل شاور اور برائیڈ ٹو بی سیٹ اپ بھی کیے جاتے ہیں۔",link:["services.html#birthday","Birthday decor"]},
{id:"lighting",k:["light","lights","lighting","fairy","curtain light","tunnel","روشنی","لائٹ","لائٹنگ","فیری"],en:"Lighting: fairy-light tunnels and curtains, house facade lighting and garden or lawn lighting for weddings, Mehndi and home celebrations.",ur:"لائٹنگ: فیری لائٹ سرنگیں اور پردے، گھر کی بیرونی لائٹنگ اور باغ یا لان کی لائٹنگ، شادی، مہندی اور گھریلو تقریبات کے لیے۔",link:["services.html#lighting","Lighting"]},
{id:"photo",k:["photo","photography","photographer","shoot","pictures","فوٹو","فوٹوگرافی","فوٹوگرافر","تصاویر"],en:"Photography: we arrange photography for your event as part of the same plan, so decor, timing and coverage work together.",ur:"فوٹوگرافی: ہم آپ کے ایونٹ کی فوٹوگرافی بھی اسی پلان کے ساتھ ارینج کرتے ہیں تاکہ ڈیکور، ٹائمنگ اور کوریج ایک ساتھ چلیں۔",link:["services.html#photo","Photography"]},
{id:"video",k:["video","videography","videographer","film","cinematic","ویڈیو","ویڈیوگرافی","فلم"],en:"Videography: video coverage of your event arranged within the same plan as your decor and other services.",ur:"ویڈیوگرافی: آپ کے ایونٹ کی ویڈیو کوریج، ڈیکور اور باقی سروسز کے ساتھ اسی پلان میں۔",link:["services.html#video","Videography"]},
{id:"car",k:["car","gari","gaari","vehicle","bridal car","baraat car","گاڑی","کار","دلہا کی گاڑی"],en:"Car Decoration: floral and rose decor for the bridal or Barat car, such as heart shaped rose designs and garlands.",ur:"کار ڈیکوریشن: دلہن یا بارات کی گاڑی کی پھولوں اور گلاب سے سجاوٹ، جیسے دل کی شکل کے گلاب اور ہار۔",link:["services.html#car","Car decor"]},
{id:"price",k:["price","prices","cost","rate","rates","charges","budget","how much","quotation","quote","package","packages","fee","قیمت","ریٹ","کتنا","کتنے","خرچ","بجٹ","کوٹیشن","پیکج","چارجز"],en:"The cost depends on the event type, venue, guest count, menu and decoration, so we do not publish fixed prices. Send us your details and we will provide a clear quotation. Every inquiry gets a free consultation.",ur:"لاگت ایونٹ کی قسم، وینیو، مہمانوں کی تعداد، مینو اور ڈیکوریشن پر منحصر ہے، اس لیے ہم مقررہ قیمتیں نہیں لکھتے۔ اپنی تفصیل بھیجیں تو ہم واضح کوٹیشن دیں گے۔ ہر انکوائری پر مفت مشاورت ہے۔",wa:1},
{id:"book",k:["book","booking","reserve","order","inquiry","enquiry","date","available","availability","بک","بکنگ","تاریخ","انکوائری","ڈیٹ"],en:"To book, fill the inquiry form on the Contact page, or contact us by WhatsApp, phone or email. Share your event date, venue and the services you need. The form prepares your message on WhatsApp. Please contact us early, especially in wedding season, so we can confirm your date.",ur:"بکنگ کے لیے کانٹیکٹ پیج پر انکوائری فارم بھریں، یا واٹس ایپ، فون یا ای میل پر رابطہ کریں۔ اپنی تقریب کی تاریخ، وینیو اور مطلوبہ سروسز بتائیں۔ فارم آپ کا پیغام واٹس ایپ پر تیار کر دیتا ہے۔ خاص طور پر شادیوں کے سیزن میں جلدی رابطہ کریں تاکہ آپ کی تاریخ کنفرم ہو سکے۔",link:["contact.html","Book now"],wa:1},
{id:"contact",k:["contact","phone","call","number","whatsapp","email","mail","address","instagram","facebook","social","reach","رابطہ","فون","نمبر","واٹس ایپ","ای میل","ایڈریس","انسٹاگرام","فیس بک"],en:"Phone: "+PH+". WhatsApp: tap the button below. Email: "+MAIL+". You can also follow us on Instagram and Facebook.",ur:"فون: "+PH+"۔ واٹس ایپ: نیچے والا بٹن دبائیں۔ ای میل: "+MAIL+"۔ آپ ہمیں انسٹاگرام اور فیس بک پر بھی فالو کر سکتے ہیں۔",wa:1,social:1},
{id:"area",k:["area","areas","location","where","islamabad","rawalpindi","bhara kahu","bahria","city","cities","pakistan","lahore","karachi","serve","علاقہ","علاقے","اسلام آباد","راولپنڈی","بھارہ کہو","کہاں","شہر"],en:"We serve Islamabad, Rawalpindi and Bhara Kahu. Contact us with your exact venue to confirm. For other cities, message us on WhatsApp and we will tell you if we can help.",ur:"ہم اسلام آباد، راولپنڈی اور بھارہ کہو میں خدمات دیتے ہیں۔ اپنا اصل وینیو بتا کر تصدیق کر لیں۔ دوسرے شہروں کے لیے واٹس ایپ پر پوچھیں، ہم بتا دیں گے کہ ہم مدد کر سکتے ہیں یا نہیں۔",wa:1},
{id:"theme",k:["theme","colour","color","custom","customise","customize","personal","design","own idea","تھیم","رنگ","ڈیزائن","اپنی پسند","مرضی"],en:"Yes, you can choose your own theme and colours. Share your colours, inspiration photos and budget, and we will design a personalised concept.",ur:"جی ہاں، تھیم اور رنگ آپ خود چن سکتے ہیں۔ اپنے رنگ، پسندیدہ تصاویر اور بجٹ بتائیں تو ہم آپ کے لیے الگ کنسیپٹ ڈیزائن کریں گے۔",wa:1},
{id:"process",k:["process","how it works","steps","procedure","how","طریقہ","کیسے","مراحل"],en:"It works in four steps: 1) Share your vision: occasion, date, venue, guest count and style. 2) Get a plan and quote: themes, menu, sound and setup options with a clear quotation. 3) We prepare everything: decor, food, entertainment and coverage coordinated by one team. 4) Celebrate: we handle setup, service and every detail on the day.",ur:"کام چار مراحل میں ہوتا ہے: 1) اپنا وژن بتائیں: تقریب، تاریخ، وینیو، مہمانوں کی تعداد اور پسند۔ 2) پلان اور کوٹیشن: تھیمز، مینو، ساؤنڈ اور سیٹ اپ کے آپشنز واضح کوٹیشن کے ساتھ۔ 3) ہم سب تیاری کرتے ہیں: ڈیکور، کھانا، انٹرٹینمنٹ اور کوریج ایک ہی ٹیم کے ذریعے۔ 4) خوشی منائیں: سیٹ اپ، سروس اور ہر تفصیل ہم سنبھالتے ہیں۔"},
{id:"early",k:["early","how early","advance","season","time","when","پہلے","کب","جلدی","سیزن"],en:"Contact us as early as possible, especially during the wedding season, so we can confirm your date and plan every detail.",ur:"جتنا جلدی ہو سکے رابطہ کریں، خاص طور پر شادیوں کے سیزن میں، تاکہ آپ کی تاریخ کنفرم ہو اور ہر تفصیل پلان ہو سکے۔",wa:1},
{id:"gallery",k:["gallery","photos","images","portfolio","work","samples","ideas","گیلری","تصاویر","کام کے نمونے","آئیڈیاز"],en:"Our Gallery has design ideas for stages, Mehndi, bridal shower and baby shower, bridal rooms, birthdays, lighting, car decor, seating and cakes. These are design ideas from our decor collection, and every setup is customised to your venue, colours and wishes.",ur:"ہماری گیلری میں سٹیج، مہندی، برائیڈل اور بیبی شاور، دلہن کا کمرہ، سالگرہ، لائٹنگ، کار ڈیکور، میزوں اور کیک کے ڈیزائن آئیڈیاز ہیں۔ یہ ہمارے ڈیکور کلیکشن کے آئیڈیاز ہیں اور ہر سیٹ اپ آپ کے وینیو، رنگوں اور پسند کے مطابق بنتا ہے۔",link:["gallery.html","Open gallery"]},
{id:"checklist",k:["checklist","planning","free","plan","tips","چیک لسٹ","پلاننگ","مفت"],en:"We have a free month-by-month Wedding Planning Checklist on the website that you can use for any wedding or event. Every inquiry also comes with a free consultation.",ur:"ویب سائٹ پر مفت ماہ بہ ماہ ویڈنگ پلاننگ چیک لسٹ موجود ہے جو کسی بھی شادی یا ایونٹ کے لیے استعمال ہو سکتی ہے۔ ہر انکوائری پر مفت مشاورت بھی ملتی ہے۔",link:["wedding-checklist.html","Free checklist"]},
{id:"blog",k:["blog","article","articles","guide","blogs","بلاگ","مضمون","مضامین"],en:"Our Blog has articles on Nikaah stage ideas, Mehndi stage ideas, birthday decoration at home, romantic room decoration, wedding photography tips and home lighting ideas.",ur:"ہمارے بلاگ میں نکاح سٹیج، مہندی سٹیج، گھر پر سالگرہ کی سجاوٹ، رومانوی روم ڈیکوریشن، ویڈنگ فوٹوگرافی کے مشورے اور گھر کی لائٹنگ کے آئیڈیاز پر مضامین ہیں۔",link:["blog.html","Read blog"]},
{id:"language",k:["urdu","english","language","اردو","انگلش","زبان"],en:"The website is available in English and Urdu. Use the language button in the top bar to switch, and I will answer in the same language.",ur:"ویب سائٹ اردو اور انگلش دونوں میں ہے۔ اوپر والی بار میں زبان کا بٹن دبا کر بدل سکتے ہیں، اور میں بھی اسی زبان میں جواب دوں گا۔"},
{id:"thanks",k:["thanks","thank you","shukria","jazak","ok thanks","شکریہ","جزاک","مہربانی"],en:"You are welcome! If you would like a quotation or a free consultation, message us on WhatsApp.",ur:"آپ کا شکریہ! کوٹیشن یا مفت مشاورت کے لیے واٹس ایپ پر پیغام کریں۔",wa:1}
];
var CHIPS=[["Services","سروسز"],["Pricing","قیمت"],["Book an event","بکنگ"],["Areas we serve","علاقے"],["Contact","رابطہ"]];
var FALL={en:"I do not have that detail here. Please ask our team directly on WhatsApp, they will answer quickly. You can also ask me about services, booking, areas or contact details.",ur:"یہ تفصیل میرے پاس نہیں ہے۔ براہ کرم ہماری ٹیم سے واٹس ایپ پر پوچھیں، وہ جلد جواب دیں گے۔ آپ مجھ سے سروسز، بکنگ، علاقوں یا رابطے کی تفصیل بھی پوچھ سکتے ہیں۔"};

function norm(t){return " "+t.toLowerCase().replace(/[^a-z0-9؀-ۿ ]+/g," ").replace(/\s+/g," ").trim()+" "}
function find(q){
  var n=norm(q),best=null,bs=0;
  KB.forEach(function(e){
    var s=0;
    e.k.forEach(function(w){
      var nw=norm(w);
      if(n.indexOf(nw)>-1){s+=nw.trim().length>3?3:2; if(nw.trim().indexOf(" ")>-1)s+=2;}
      else if(nw.trim().length>4&&n.indexOf(nw.trim())>-1){s+=1}
    });
    if(s&&(e.id==="price"||e.id==="book"||e.id==="contact"))s+=3;
    if(e.id==="hello"&&s&&n.trim().split(" ").length>3)s=0;
    if(s>bs){bs=s;best=e}
  });
  return best;
}
function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
function esc(s){return s.replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}

function build(){
  var btn=el("button","ai-fab",'<i class="fa-solid fa-comment-dots"></i><span>Ask Iqra</span>');
  btn.setAttribute("aria-label","Open assistant");btn.setAttribute("aria-expanded","false");
  var box=el("div","ai-box");box.setAttribute("role","dialog");box.setAttribute("aria-label","Event Planner by Iqra assistant");
  box.innerHTML='<div class="ai-head"><div class="ai-av">EI</div><div><b>Ask Iqra</b><small class="ai-sub">Event Planner by Iqra</small></div><button class="ai-x" aria-label="Close">&times;</button></div><div class="ai-log" aria-live="polite"></div><div class="ai-chips"></div><form class="ai-form"><input type="text" class="ai-in" autocomplete="off" maxlength="200"><button type="submit" class="ai-send" aria-label="Send"><i class="fa-solid fa-paper-plane"></i></button></form>';
  document.body.appendChild(box);document.body.appendChild(btn);
  var log=box.querySelector(".ai-log"),chips=box.querySelector(".ai-chips"),inp=box.querySelector(".ai-in"),form=box.querySelector(".ai-form");
  var started=false;
  function L(){return lang()}
  function setUI(){
    var u=L()==="ur";
    box.setAttribute("dir",u?"rtl":"ltr");
    inp.placeholder=u?"اپنا سوال لکھیں...":"Type your question...";
    box.querySelector(".ai-sub").textContent=u?"ایونٹ پلینر بائی اقرا":"Event Planner by Iqra";
    btn.querySelector("span").textContent=u?"اقرا سے پوچھیں":"Ask Iqra";
    chips.innerHTML="";
    CHIPS.forEach(function(c){var b=el("button","ai-chip",u?c[1]:c[0]);b.type="button";b.onclick=function(){ask(c[u?1:0])};chips.appendChild(b)});
    SV().forEach(function(s){});
  }
  function SV(){return window.SERVICES||[]}
  function msg(t,who){var m=el("div","ai-m "+who);m.innerHTML=t;log.appendChild(m);log.scrollTop=log.scrollHeight;return m}
  function reply(q){
    var u=isUr(q)||(L()==="ur"&&!/[a-z]{3}/i.test(q));
    var e=find(q),out;
    if(!e){out=esc(FALL[u?"ur":"en"])+actions(u,{wa:1})}
    else{out=esc(e[u?"ur":"en"])+actions(u,e)}
    var m=msg("<span class='ai-dot'></span><span class='ai-dot'></span><span class='ai-dot'></span>","bot");
    setTimeout(function(){m.innerHTML=out;log.scrollTop=log.scrollHeight},420);
  }
  function actions(u,e){
    var a="";
    if(e.link){a+='<a class="ai-act" href="'+e.link[0]+'">'+(u?"صفحہ کھولیں":esc(e.link[1]))+' &rarr;</a>'}
    if(e.wa){a+='<a class="ai-act ai-wa" target="_blank" rel="noopener noreferrer" href="https://wa.me/'+WA+'?text='+encodeURIComponent("Assalam o Alaikum, I would like to ask about your services.")+'"><i class="fa-brands fa-whatsapp"></i> '+(u?"واٹس ایپ پر بات کریں":"Chat on WhatsApp")+'</a>'}
    if(e.social){a+='<a class="ai-act" target="_blank" rel="noopener noreferrer" href="'+IG+'">Instagram</a><a class="ai-act" target="_blank" rel="noopener noreferrer" href="'+FB+'">Facebook</a><a class="ai-act" href="tel:+923709909747">'+(u?"کال کریں":"Call")+'</a>'}
    return a?'<div class="ai-acts">'+a+'</div>':"";
  }
  function ask(q){q=q.trim();if(!q)return;msg(esc(q),"me");reply(q)}
  function open(){
    box.classList.add("on");btn.setAttribute("aria-expanded","true");setUI();
    if(!started){started=true;var u=L()==="ur";var e=KB[0];var m=msg(esc(e[u?"ur":"en"]),"bot")}
    setTimeout(function(){inp.focus()},50);
  }
  function close(){box.classList.remove("on");btn.setAttribute("aria-expanded","false")}
  btn.onclick=function(){box.classList.contains("on")?close():open()};
  box.querySelector(".ai-x").onclick=close;
  form.onsubmit=function(e){e.preventDefault();var v=inp.value;inp.value="";ask(v)};
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&box.classList.contains("on"))close()});
  /* service name lookup via chips from live services data */
  window.__askIqra=ask;
  setUI();
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",build);else build();
})();
