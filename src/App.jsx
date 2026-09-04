import React,{useState}from'react';
import{ArrowLeft,ArrowRight,Camera,Check,Heart,IndianRupee,Languages,Leaf,LockKeyhole,Mic,Package,Plus,Search,ShoppingBag,Sparkles,Store,TrendingUp,WifiOff,MapPin,Star,PlayCircle}from'lucide-react';

const demoProducts=[
{name:'Indigo Ajrakh Dupatta',cat:'Textiles',price:'₹1,450',artisan:'Shabana Khatun',place:'Kutch, Gujarat',tech:'Ajrakh hand block printing',img:'https://shop.khamir.org/cdn/shop/files/15a_85f63503-9114-4bb8-a722-5c92c350be74.jpg?v=1748606035'},
{name:'Terracotta Surahi',cat:'Pottery',price:'₹890',artisan:'Ramesh Prajapati',place:'Khurja, Uttar Pradesh',tech:'Traditional terracotta pottery',img:'https://img.indiahandmade.com/catalog/product/cache/dee0bc41489afb86ae85561eae1bc64e/w/a/water_bottle_5_.png'},
{name:'Handwoven Bamboo Basket',cat:'Bamboo',price:'₹650',artisan:'Maya Oraon',place:'Ranchi, Jharkhand',tech:'Bamboo hand weaving',img:'https://img1.exportersindia.com/product_images/bc-full/2024/9/12042651/bamboo-utilitybasket-1725556901-7591976.jpeg'},
{name:'Kutchi Mirror-Work Tote',cat:'Embroidery',price:'₹1,100',artisan:'Amina Bibi',place:'Bhuj, Gujarat',tech:'Kutchi embroidery and mirror work',img:'https://asanjokutch.org/cdn/shop/files/Untitleddesign_1_2bc0475f-dcf4-44c7-ad4d-aef3439afaa3.png?v=1756356726&width=900'}
];

const tr={
en:{
buyer:'Buyer',seller:'Seller',join:'Join ArtisanConnect',choose:'Choose how you want to join',
buySub:'Discover authentic handmade products and support artisan communities.',
sellSub:'List your craft, find markets and grow your income.',continue:'Continue',
login:'Verify your account',phone:'Mobile number',send:'Send OTP',verify:'Verify & continue',
otp:'Demo OTP: 123456',back:'Back',profile:'Complete your profile',name:'Full name',
state:'State',district:'District / Village',craft:'Craft type',experience:'Years of experience',
story:'Tell your craft story',interests:'Craft interests',save:'Save profile',add:'Add product',
orders:'Orders',earn:'Earnings',items:'Products',reach:'Market reach',take:'Take photo',
upload:'Upload',publish:'Publish product',search:'Search craft, product or region',
storyTitle:"The artisan's story",buy:'Buy this craft',demo:'Demo',restart:'Restart',
next:'Next',finish:'Finish',market:'AI Market Linkage',matched:'94% match',
offline:'Low-data mode',online:'Online',verifiedSeller:'Verified Artisan',
catalog:'AI catalog assistant'
},
hi:{
buyer:'खरीदार',seller:'विक्रेता',join:'ArtisanConnect से जुड़ें',choose:'आप कैसे जुड़ना चाहते हैं?',
buySub:'असली हस्तशिल्प खोजें और कारीगरों का समर्थन करें।',
sellSub:'अपना हुनर दिखाएं, बाजार खोजें और कमाई बढ़ाएं।',continue:'आगे बढ़ें',
login:'अपना अकाउंट सत्यापित करें',phone:'मोबाइल नंबर',send:'OTP भेजें',
verify:'सत्यापित करें',otp:'डेमो OTP: 123456',back:'वापस',profile:'प्रोफ़ाइल पूरी करें',
name:'पूरा नाम',state:'राज्य',district:'जिला / गांव',craft:'शिल्प प्रकार',
experience:'अनुभव',story:'अपने शिल्प की कहानी',interests:'शिल्प में रुचि',save:'सेव करें',
add:'उत्पाद जोड़ें',orders:'ऑर्डर',earn:'कमाई',items:'उत्पाद',reach:'बाजार पहुंच',
take:'फोटो लें',upload:'अपलोड',publish:'प्रकाशित करें',search:'शिल्प, उत्पाद या क्षेत्र खोजें',
storyTitle:'कारीगर की कहानी',buy:'खरीदें',demo:'डेमो',restart:'फिर शुरू करें',
next:'आगे',finish:'पूरा करें',market:'AI बाजार कनेक्शन',matched:'94% मैच',
offline:'लो-डेटा मोड',online:'ऑनलाइन',verifiedSeller:'सत्यापित कारीगर',
catalog:'AI कैटलॉग सहायक'
}};

export default function App(){
const[role,setRole]=useState(''),
[screen,setScreen]=useState('login'),
[lang,setLang]=useState('en'),
[demo,setDemo]=useState(false),
[step,setStep]=useState(0),
[products,setProducts]=useState([]),
[selected,setSelected]=useState(null),
[offline,setOffline]=useState(false),
[toast,setToast]=useState('');

const t=tr[lang];

const notify=x=>{
setToast(x);
setTimeout(()=>setToast(''),1800);
};

const startDemo=()=>{
setDemo(true);
setStep(0);
setSelected(null);
};

const stopDemo=()=>{
setDemo(false);
setStep(0);
setSelected(null);
};

const go=s=>setScreen(s);

return <div className="min-h-screen bg-[#fbf7ef] text-[#302a26] selection:bg-[#dfb88d]">

<header className="sticky top-0 z-40 border-b border-[#e9dccb] bg-[#fbf7ef]/90 backdrop-blur-xl">
<div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6">

<button onClick={()=>!demo&&go('login')} className="flex items-center gap-2.5">
<span className="grid h-10 w-10 place-items-center rounded-[14px] bg-[#713b32] text-white shadow-lg shadow-[#713b32]/15">
<Leaf size={21}/>
</span>
<b className="text-lg tracking-tight">
Artisan<span className="text-[#713b32]">Connect</span>
</b>
</button>

<div className="flex gap-2">

<button
onClick={()=>setOffline(!offline)}
className="flex items-center gap-1.5 rounded-full border border-[#dfd1bf] bg-white/70 px-3 py-2 text-xs font-bold"
>
{offline?<WifiOff size={14}/>:<span className="text-[#4f6b45]">●</span>}
<span className="hidden sm:inline">{offline?t.offline:t.online}</span>
</button>

<button
onClick={()=>setLang(lang==='en'?'hi':'en')}
className="flex items-center gap-1 rounded-full border border-[#dfd1bf] bg-white/70 px-3 py-2 text-xs font-bold"
>
<Languages size={14}/>
{lang==='en'?'हिं':'EN'}
</button>

</div>
</div>
</header>

<main className="mx-auto max-w-7xl px-4 pb-28 sm:px-6">

{demo?
<Demo
t={t}
step={step}
setStep={setStep}
stop={stopDemo}
selected={selected}
setSelected={setSelected}
/>
:
screen==='login'?
<Role t={t} role={role} setRole={setRole} enter={()=>role&&go('auth')} demo={startDemo}/>
:
screen==='auth'?
<Auth t={t} role={role} back={()=>go('login')} done={()=>go('profile')}/>
:
screen==='profile'?
<Profile t={t} role={role} save={()=>go(role==='seller'?'onboarding':'shop')}/>
:
screen==='onboarding'?
<Onboarding t={t} add={()=>go('add')}/>
:
screen==='add'?
<Add
t={t}
publish={()=>{
setProducts([demoProducts[0]]);
go('dashboard');
}}
/>
:
screen==='dashboard'?
<Dashboard t={t} products={products} add={()=>go('add')}/>
:
<Shop
t={t}
products={products}
selected={selected}
setSelected={setSelected}
buy={()=>notify('Order placed successfully!')}
/>
}

{toast&&
<div className="fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 rounded-full bg-[#302a26] px-5 py-3 text-sm font-bold text-white shadow-xl">
{toast}
</div>
}

</main>
</div>
}

function Role({t,role,setRole,enter,demo}){
return <section className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden py-8">

<div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#dca46c]/20 blur-3xl"/>
<div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#4f6b45]/10 blur-3xl"/>

<div className="relative grid w-full max-w-6xl overflow-hidden rounded-[36px] border border-[#e8d9c6] bg-[#fffdf9] shadow-[0_25px_80px_rgba(70,48,35,.10)] lg:grid-cols-[.9fr_1.1fr]">

<div className="relative hidden min-h-[600px] overflow-hidden bg-[#713b32] p-10 text-white lg:flex lg:flex-col lg:justify-between">

<div
className="absolute inset-0 opacity-20"
style={{
backgroundImage:'radial-gradient(#fff 1px,transparent 1px)',
backgroundSize:'22px 22px'
}}
/>

<div className="relative">
<span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold">
Craft • Community • Commerce
</span>

<h2 className="mt-8 max-w-md text-6xl font-black leading-[.95]">
Made by hands.<br/>
<span className="text-[#efcda9]">Moved by stories.</span>
</h2>

<p className="mt-6 max-w-sm leading-7 text-white/70">
A simpler digital marketplace for India's craft communities.
</p>
</div>

<div className="relative flex items-center gap-3">
<div className="flex -space-x-2">
{demoProducts.map((p,i)=>
<img
key={i}
src={p.img}
className="h-11 w-11 rounded-full border-2 border-[#713b32] object-cover"
/>
)}
</div>

<span className="text-sm font-semibold text-white/75">
Authentic handmade craft
</span>
</div>

</div>

<div className="p-6 sm:p-10 lg:p-14">

<div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#f2e3d1] text-[#713b32] lg:hidden">
<Leaf/>
</div>

<div className="mt-5 lg:mt-0">
<p className="text-sm font-black uppercase tracking-[.18em] text-[#9a806d]">
Welcome
</p>

<h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
{t.join}
</h1>

<p className="mt-3 max-w-xl text-[#776b61]">
{t.choose}
</p>
</div>

<div className="mt-8 grid gap-4 sm:grid-cols-2">

{[
['buyer',ShoppingBag,t.buyer,t.buySub],
['seller',Store,t.seller,t.sellSub]
].map(([r,I,title,sub])=>
<button
key={r}
onClick={()=>setRole(r)}
className={`group rounded-[25px] border-2 p-5 text-left transition-all duration-200 hover:-translate-y-1 ${
role===r
?'border-[#713b32] bg-[#f6e9da] shadow-lg shadow-[#713b32]/10'
:'border-[#eadfD1] bg-white hover:border-[#c9b29b]'
}`}
>

<div className="flex items-center justify-between">

<span className={`grid h-12 w-12 place-items-center rounded-2xl ${
role===r
?'bg-[#713b32] text-white'
:'bg-[#f6eee5] text-[#713b32]'
}`}>
<I/>
</span>

{role===r&&
<span className="rounded-full bg-[#713b32] p-1 text-white">
<Check size={14}/>
</span>
}

</div>

<h2 className="mt-5 text-xl font-black">{title}</h2>
<p className="mt-1 text-sm leading-6 text-[#7c7067]">{sub}</p>

</button>
)}

</div>

<button
disabled={!role}
onClick={enter}
className="mt-5 w-full rounded-2xl bg-[#713b32] p-4 font-black text-white shadow-lg shadow-[#713b32]/15 transition hover:-translate-y-0.5 disabled:bg-[#d9cbbd]"
>
{t.continue}
<ArrowRight className="ml-2 inline" size={18}/>
</button>

<button
onClick={demo}
className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-[#c9b29b] bg-[#fffaf4] p-4 font-black text-[#713b32] transition hover:bg-[#f6e9da]"
>
<PlayCircle size={18}/>
{t.demo}
</button>

</div>
</div>
</section>
}

function Auth({t,role,back,done}){
const[otp,setOtp]=useState('');
const[sent,setSent]=useState(false);

return <section className="flex min-h-[calc(100vh-72px)] items-center justify-center py-10">

<div className="w-full max-w-lg rounded-[32px] border border-[#eadfD1] bg-[#fffdf9] p-7 shadow-xl sm:p-9">

<button onClick={back} className="font-black text-[#713b32]">
<ArrowLeft size={16} className="inline"/>
{t.back}
</button>

<div className="mt-7 flex gap-3">

<span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eef3ea] text-[#4f6b45]">
<LockKeyhole/>
</span>

<div>
<h1 className="text-3xl font-black">{t.login}</h1>
<p className="mt-1 text-sm text-[#7b6d62]">
{role==='seller'?t.seller:t.buyer} verification
</p>
</div>

</div>

<input
className="mt-7 w-full rounded-2xl border border-[#ded2c4] bg-[#fbf7ef] p-4 outline-none focus:border-[#713b32]"
placeholder={t.phone}
/>

{!sent?

<button
onClick={()=>setSent(true)}
className="mt-4 w-full rounded-2xl bg-[#713b32] p-4 font-black text-white"
>
{t.send}
</button>

:

<>
<input
value={otp}
onChange={e=>setOtp(e.target.value.replace(/\D/g,'').slice(0,6))}
className="mt-4 w-full rounded-2xl border border-[#ded2c4] bg-[#fbf7ef] p-4 text-center text-2xl font-black tracking-[.3em]"
placeholder="123456"
/>

<p className="mt-2 text-center text-xs font-bold text-[#4f6b45]">
{t.otp}
</p>

<button
disabled={otp!=='123456'}
onClick={done}
className="mt-4 w-full rounded-2xl bg-[#4f6b45] p-4 font-black text-white disabled:opacity-40"
>
{t.verify}
</button>
</>

}

</div>
</section>
}

function Profile({t,role,save}){
return <section className="mx-auto max-w-2xl py-10">

<div className="rounded-[32px] border border-[#eadfD1] bg-[#fffdf9] p-7 shadow-xl sm:p-9">

<span className="rounded-full bg-[#f2e3d1] px-3 py-2 text-xs font-black text-[#713b32]">
Step 1 of 1
</span>

<h1 className="mt-5 text-3xl font-black">{t.profile}</h1>

<div className="mt-6 grid gap-4 sm:grid-cols-2">

{[t.name,t.state,t.district,t.experience].map(x=>
<input
key={x}
className="rounded-2xl border border-[#ded2c4] bg-[#fbf7ef] p-4 outline-none"
placeholder={x}
/>
)}

<select className="rounded-2xl border border-[#ded2c4] bg-[#fbf7ef] p-4">
<option>{t.craft}</option>
<option>Weaving & Textiles</option>
<option>Pottery</option>
<option>Bamboo Craft</option>
<option>Embroidery</option>
</select>

</div>

<textarea
className="mt-4 min-h-32 w-full rounded-2xl border border-[#ded2c4] bg-[#fbf7ef] p-4 outline-none"
placeholder={role==='seller'?t.story:t.interests}
/>

<button
onClick={save}
className="mt-5 w-full rounded-2xl bg-[#713b32] p-4 font-black text-white"
>
{t.save}
<ArrowRight className="ml-2 inline"/>
</button>

</div>
</section>
}

function Onboarding({t,add}){
return <section className="py-10">

<div className="relative overflow-hidden rounded-[36px] bg-[#713b32] p-8 text-white shadow-2xl sm:p-14">

<div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#dca46c]/20 blur-2xl"/>

<Mic size={42}/>

<h1 className="relative mt-6 max-w-3xl text-5xl font-black leading-tight">
Your craft deserves a bigger market.
</h1>

<p className="relative mt-4 max-w-xl leading-7 text-white/70">
Voice-first onboarding, regional language support and simple actions designed for every artisan.
</p>

<button
onClick={add}
className="relative mt-8 rounded-2xl bg-[#efcda9] px-6 py-4 font-black text-[#302a26]"
>
{t.add}
<ArrowRight className="ml-2 inline"/>
</button>

</div>
</section>
}

function Add({t,publish}){
const[ai,setAi]=useState(false);

return <section className="py-10">

<p className="text-sm font-black uppercase tracking-[.15em] text-[#9a806d]">
Seller workspace
</p>

<h1 className="mt-2 text-4xl font-black">{t.add}</h1>

<div className="mt-6 grid gap-5 lg:grid-cols-2">

<div className="rounded-[30px] border border-[#eadfD1] bg-[#fffdf9] p-5 shadow-sm">

<div className="grid h-80 place-items-center rounded-2xl border-2 border-dashed border-[#d8c8b7] bg-[#fbf7ef]">

<div className="text-center">
<Camera size={42} className="mx-auto text-[#713b32]"/>
<p className="mt-3 text-sm font-bold text-[#776b61]">
Add a clear product photo
</p>
</div>

</div>

<div className="mt-4 grid grid-cols-2 gap-3">

<button
onClick={()=>setAi(true)}
className="rounded-2xl bg-[#713b32] p-4 font-black text-white"
>
{t.take}
</button>

<button
onClick={()=>setAi(true)}
className="rounded-2xl border border-[#ded2c4] bg-white p-4 font-black"
>
{t.upload}
</button>

</div>

</div>

<div className="rounded-[30px] border border-[#eadfD1] bg-[#fffdf9] p-6 shadow-sm">

<div className="flex items-center gap-2">

<span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f2e3d1] text-[#713b32]">
<Sparkles size={20}/>
</span>

<h2 className="text-xl font-black">{t.catalog}</h2>

</div>

{ai?

<div className="mt-5 space-y-3">

<Field x="Title" v="Handwoven Indigo Cotton Dupatta"/>
<Field x="Category" v="Textiles"/>
<Field x="Suggested price" v="₹1,450"/>
<Field x="Tags" v="#Handmade  #Indigo  #Cotton"/>

<button
onClick={publish}
className="mt-3 w-full rounded-2xl bg-[#4f6b45] p-4 font-black text-white"
>
{t.publish}
<Check className="ml-2 inline"/>
</button>

</div>

:

<div className="mt-8 rounded-2xl bg-[#fbf7ef] p-5 text-sm leading-6 text-[#776b61]">
Upload a product photo and AI will prepare the listing in seconds.
</div>

}

</div>
</div>
</section>
}

function Field({x,v}){
return <div>
<label className="text-xs font-black uppercase tracking-wider text-[#907e70]">
{x}
</label>
<div className="mt-1 rounded-2xl border border-[#e1d5c7] bg-[#fbf7ef] p-3 font-semibold">
{v}
</div>
</div>
}

function Dashboard({t,products,add}){
return <section className="py-10">

<div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

<div>
<span className="rounded-full bg-[#eef3ea] px-3 py-2 text-xs font-bold text-[#4f6b45]">
✓ {t.verifiedSeller}
</span>

<h1 className="mt-4 text-4xl font-black">
Welcome back 👋
</h1>
</div>

<button
onClick={add}
className="rounded-2xl bg-[#713b32] px-5 py-4 font-black text-white"
>
<Plus className="inline"/>
{t.add}
</button>

</div>

<div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">

{[
[t.orders,'18',ShoppingBag],
[t.earn,'₹24.8K',IndianRupee],
[t.items,String(products.length),Package],
[t.reach,'86',TrendingUp]
].map(([l,v,I])=>

<div
key={l}
className="rounded-[24px] border border-[#eadfD1] bg-[#fffdf9] p-5 shadow-sm"
>

<I className="text-[#713b32]"/>

<div className="mt-4 text-2xl font-black">{v}</div>
<div className="mt-1 text-xs font-bold text-[#786a5c]">{l}</div>

</div>
)}

</div>

</section>
}

function Shop({t,products,selected,setSelected,buy}){

const list=products.length?products:demoProducts;

if(selected)
return <Product t={t} p={selected} back={()=>setSelected(null)} buy={buy}/>;

return <section className="py-8">

<div className="relative overflow-hidden rounded-[34px] bg-[#713b32] p-7 text-white sm:p-12">

<div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#4f6b45]/30 to-transparent"/>

<div className="relative">

<span className="rounded-full bg-white/10 px-3 py-2 text-xs font-bold">
Curated handmade craft
</span>

<h1 className="mt-5 max-w-2xl text-4xl font-black sm:text-5xl">
Made by hands.<br/>
Chosen by you.
</h1>

<div className="mt-6 flex max-w-xl items-center gap-2 rounded-2xl bg-white p-2 text-[#302a26]">

<Search/>

<input
className="flex-1 p-2 outline-none"
placeholder={t.search}
/>

</div>
</div>
</div>

<div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

{list.map(p=>

<button
key={p.name}
onClick={()=>setSelected(p)}
className="group overflow-hidden rounded-[28px] border border-[#eadfD1] bg-[#fffdf9] text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
>

<div className="relative overflow-hidden">

<img
src={p.img}
className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
/>

<span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-black">
{p.cat}
</span>

</div>

<div className="p-5">

<b>{p.name}</b>

<p className="mt-1 text-xs text-[#75685e]">
{p.artisan} · {p.place}
</p>

<div className="mt-4 flex justify-between font-black">
{p.price}
<Heart size={18}/>
</div>

</div>
</button>
)}

</div>
</section>
}

function Product({t,p,back,buy}){

return <section className="py-8">

<button onClick={back} className="font-black text-[#713b32]">
<ArrowLeft className="inline"/>
{t.back}
</button>

<div className="mt-5 grid overflow-hidden rounded-[32px] border border-[#eadfD1] bg-[#fffdf9] shadow-sm lg:grid-cols-2">

<img
src={p.img}
className="h-[440px] w-full object-cover"
/>

<div className="p-7 sm:p-10">

<span className="rounded-full bg-[#f2e3d1] px-3 py-2 text-xs font-black text-[#713b32]">
{p.cat}
</span>

<h1 className="mt-5 text-4xl font-black">{p.name}</h1>

<p className="mt-2 font-bold text-[#75685e]">
{p.artisan} · {p.place}
</p>

<div className="my-6 text-3xl font-black">{p.price}</div>

<div className="flex items-center gap-2 text-sm">
<Star size={16} fill="currentColor"/>
4.9 · Verified artisan
</div>

<div className="my-6 border-y border-[#eadfD1] py-5">

<b>{t.storyTitle}</b>

<p className="mt-2 leading-7 text-[#75685e]">
Handmade using {p.tech.toLowerCase()}. Every piece carries a local craft story and supports the artisan directly.
</p>

</div>

<button
onClick={buy}
className="w-full rounded-2xl bg-[#713b32] p-4 font-black text-white"
>
{t.buy}
<ShoppingBag className="ml-2 inline"/>
</button>

</div>
</div>
</section>
}

function Demo({t,step,setStep,stop}){

const[demoSelected,setDemoSelected]=useState(null);
const p=demoProducts[0];
const pct=[16,34,52,70,86,100][step];

return <div className="relative min-h-[calc(100vh-72px)]">

<div className="sticky top-[72px] z-30 flex items-center justify-between border-b border-[#e9dccb] bg-[#fbf7ef]/95 py-3 backdrop-blur-xl">

<div>
<span className="rounded-full bg-[#713b32] px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-white">
{t.demo}
</span>

<span className="ml-2 text-xs font-bold text-[#8a796b]">
{step+1} / 6
</span>
</div>

<button
onClick={stop}
className="rounded-full border border-[#d8c8b7] bg-white px-4 py-2 text-xs font-black text-[#713b32]"
>
Exit demo
</button>

</div>

{step===0&&
<section className="relative flex min-h-[calc(100vh-155px)] items-center overflow-hidden py-12">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(220,164,108,.22),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(79,107,69,.10),transparent_30%)]"/>

<div className="relative grid w-full items-center gap-10 lg:grid-cols-[1.05fr_.95fr]">

<div>

<span className="inline-flex items-center gap-2 rounded-full border border-[#dfd0be] bg-white/70 px-4 py-2 text-xs font-black">
<Sparkles size={14} className="text-[#713b32]"/>
Intelligent craft commerce
</span>

<h1 className="mt-7 max-w-3xl text-5xl font-black leading-[.98] tracking-tight sm:text-7xl">
From <span className="text-[#713b32]">hands</span> to the right <span className="text-[#4f6b45]">market.</span>
</h1>

<p className="mt-6 max-w-xl text-lg leading-8 text-[#75685e]">
Watch how one artisan can turn a single product photo into a market-ready listing and reach a new customer.
</p>

<div className="mt-8 flex flex-wrap gap-3">
<Pill icon={Camera} text="Photo → AI listing"/>
<Pill icon={TrendingUp} text="Smart market match"/>
<Pill icon={Heart} text="Story-led shopping"/>
</div>

</div>

<div className="relative mx-auto w-full max-w-md">

<div className="absolute -inset-4 rounded-[40px] bg-[#dca46c]/20 blur-2xl"/>

<div className="relative rotate-2 overflow-hidden rounded-[34px] border-8 border-white bg-white shadow-2xl">

<img
src={p.img}
className="h-[470px] w-full object-cover"
/>

<div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur">

<div className="flex items-center justify-between">

<div>
<p className="text-xs font-bold text-[#8b796b]">Featured craft</p>
<b>{p.name}</b>
</div>

<span className="font-black text-[#713b32]">{p.price}</span>

</div>
</div>

</div>
</div>
</div>
</section>
}

{step===1&&<DemoCatalog t={t} p={p}/>}
{step===2&&<DemoDashboard t={t}/>}
{step===3&&
<DemoStore
t={t}
selected={demoSelected}
setSelected={setDemoSelected}
/>
}
{step===4&&<DemoProduct t={t} p={demoSelected||p}/>}

{step===5&&
<section className="flex min-h-[calc(100vh-155px)] items-center justify-center py-12">

<div className="max-w-2xl text-center">

<div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[#eef3ea] text-[#4f6b45] shadow-lg">
<Check size={48}/>
</div>

<p className="mt-8 text-sm font-black uppercase tracking-[.2em] text-[#9a806d]">
{t.demo}
</p>

<h1 className="mt-3 text-5xl font-black sm:text-6xl">
A craft found a customer.
</h1>

<p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-[#75685e]">
One simple workflow: verify → catalog → connect to markets → tell the story → sell.
</p>

<button
onClick={()=>setStep(0)}
className="mt-8 rounded-2xl bg-[#713b32] px-7 py-4 font-black text-white"
>
Run demo again
<ArrowRight className="ml-2 inline"/>
</button>

</div>
</section>
}

<div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#e9dccb] bg-[#fbf7ef]/95 p-3 backdrop-blur-xl">

<div className="mx-auto flex max-w-6xl items-center gap-3">

<div className="flex-1">

<div className="mb-2 h-1.5 overflow-hidden rounded-full bg-[#e5d8c7]">

<div
className="h-full rounded-full bg-[#713b32] transition-all duration-500"
style={{width:`${pct}%`}}
/>

</div>

<div className="hidden text-[10px] font-bold text-[#8a796b] sm:block">
ArtisanConnect · Demo
</div>

</div>

<button
onClick={()=>setStep(Math.max(0,step-1))}
disabled={step===0}
className="rounded-xl border border-[#d8c8b7] bg-white p-3 disabled:opacity-30"
>
<ArrowLeft size={16}/>
</button>

<button
onClick={()=>step<5&&setStep(step+1)}
className="rounded-xl bg-[#713b32] px-5 py-3 text-sm font-black text-white"
>
{step===5?'Restart':t.next}
<ArrowRight className="ml-1 inline" size={16}/>
</button>

</div>
</div>

</div>
}

function Pill({icon:I,text}){
return <span className="flex items-center gap-2 rounded-full border border-[#dfd0be] bg-white/80 px-4 py-2 text-xs font-bold">
<I size={14} className="text-[#713b32]"/>
{text}
</span>
}

function DemoCatalog({t,p}){

return <section className="py-12">

<div className="mb-8 max-w-2xl">

<span className="rounded-full bg-[#f2e3d1] px-3 py-2 text-xs font-black text-[#713b32]">
01 · AI CATALOG
</span>

<h1 className="mt-4 text-4xl font-black sm:text-5xl">
One photo.<br/>
A complete listing.
</h1>

<p className="mt-3 text-[#75685e]">
The artisan doesn't need to write a product description or know e-commerce terminology.
</p>

</div>

<div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">

<div className="overflow-hidden rounded-[30px] border-8 border-white bg-white shadow-xl">
<img
src={p.img}
className="h-[420px] w-full object-cover"
/>
</div>

<div className="rounded-[30px] border border-[#eadfD1] bg-white p-6 shadow-sm">

<div className="flex items-center gap-3 rounded-2xl bg-[#eef3ea] p-4">

<Sparkles className="text-[#4f6b45]"/>

<div>
<b>AI analysis complete</b>
<p className="text-xs text-[#6e766c]">
Craft, material and style identified
</p>
</div>

<Check className="ml-auto text-[#4f6b45]"/>

</div>

<div className="mt-6 grid gap-4 sm:grid-cols-2">
<Field x="Title" v={p.name}/>
<Field x="Category" v={p.cat}/>
<Field x="Suggested price" v={p.price}/>
<Field x="Technique" v={p.tech}/>
</div>

<div className="mt-4 rounded-2xl bg-[#fbf7ef] p-4">

<p className="text-xs font-black uppercase text-[#907e70]">
Smart tags
</p>

<p className="mt-2 font-semibold">
#Handmade · #Indigo · #Cotton · #Kutch
</p>

</div>

<div className="mt-4 rounded-2xl border border-[#eadfD1] p-4">

<div className="flex items-center justify-between">

<b>{t.market}</b>

<span className="font-black text-[#4f6b45]">
{t.matched}
</span>

</div>

<p className="mt-1 text-sm text-[#75685e]">
Urban gifting · textile buyers · Gujarat craft demand
</p>

</div>

</div>
</div>
</section>
}

function DemoDashboard({t}){

return <section className="py-12">

<span className="rounded-full bg-[#eef3ea] px-3 py-2 text-xs font-black text-[#4f6b45]">
02 · ARTISAN DASHBOARD
</span>

<h1 className="mt-4 text-4xl font-black sm:text-5xl">
A business view without the complexity.
</h1>

<p className="mt-3 max-w-2xl text-[#75685e]">
Simple visual cards turn orders, earnings and reach into something easy to understand at a glance.
</p>

<div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">

{[
[t.orders,'18',ShoppingBag,'+12%'],
[t.earn,'₹24.8K',IndianRupee,'+18%'],
[t.items,'12',Package,'3 new'],
[t.reach,'86',TrendingUp,'+24%']
].map(([l,v,I,d])=>

<div
key={l}
className="rounded-[26px] border border-[#eadfD1] bg-white p-6 shadow-sm"
>

<div className="flex items-center justify-between">

<span className="grid h-11 w-11 place-items-center rounded-xl bg-[#f2e3d1] text-[#713b32]">
<I/>
</span>

<span className="text-xs font-black text-[#4f6b45]">
{d}
</span>

</div>

<div className="mt-6 text-3xl font-black">{v}</div>
<div className="mt-1 text-sm font-bold text-[#786a5c]">{l}</div>

</div>
)}

</div>

<div className="mt-6 grid gap-4 lg:grid-cols-3">

<div className="rounded-[26px] bg-[#713b32] p-6 text-white lg:col-span-2">

<div className="flex items-center justify-between">
<b>Monthly earnings</b>
<span className="text-xs text-white/60">
Last 6 months
</span>
</div>

<div className="mt-8 flex h-32 items-end gap-3">

{[35,48,42,68,78,96].map((h,i)=>
<div
key={i}
className="flex-1 rounded-t-xl bg-[#efcda9]/80"
style={{height:`${h}%`}}
/>
)}

</div>
</div>

<div className="rounded-[26px] border border-[#eadfD1] bg-white p-6">

<b>Top market match</b>

<div className="mt-5 flex items-center gap-3">

<div className="grid h-12 w-12 place-items-center rounded-full bg-[#eef3ea] text-[#4f6b45]">
<TrendingUp/>
</div>

<div>
<b>Urban gifting</b>
<p className="text-xs text-[#75685e]">
94% relevance
</p>
</div>

</div>

<div className="mt-5 h-2 rounded-full bg-[#e9dfd2]">
<div className="h-full w-[94%] rounded-full bg-[#4f6b45]"/>
</div>

</div>
</div>
</section>
}

function DemoStore({t,selected,setSelected}){

return <section className="py-10">

<div className="mb-8 max-w-2xl">

<span className="rounded-full bg-[#f2e3d1] px-3 py-2 text-xs font-black text-[#713b32]">
03 · BUYER STOREFRONT
</span>

<h1 className="mt-4 text-4xl font-black sm:text-5xl">
Don't just sell the product.<br/>
Tell its story.
</h1>

<p className="mt-3 text-[#75685e]">
Buyers discover craft by region, technique and the person behind every piece.
</p>

</div>

{selected?

<DemoProduct t={t} p={selected}/>

:

<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

{demoProducts.map(p=>

<button
key={p.name}
onClick={()=>setSelected(p)}
className="group overflow-hidden rounded-[28px] border border-[#eadfD1] bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
>

<img
src={p.img}
className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
/>

<div className="p-5">

<span className="text-xs font-black text-[#9a806d]">
{p.cat}
</span>

<h3 className="mt-2 font-black">{p.name}</h3>

<p className="mt-1 text-xs text-[#75685e]">
{p.artisan} · {p.place}
</p>

<div className="mt-4 flex justify-between font-black">
{p.price}
<Heart size={18}/>
</div>

</div>
</button>
)}

</div>
}

</section>
}

function DemoProduct({t,p}){

return <section className="py-10">

<div className="grid overflow-hidden rounded-[34px] border border-[#eadfD1] bg-white shadow-xl lg:grid-cols-[.9fr_1.1fr]">

<div className="relative">

<img
src={p.img}
className="h-[520px] w-full object-cover"
/>

<span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-2 text-xs font-black">
Verified artisan
</span>

</div>

<div className="p-7 sm:p-10">

<span className="rounded-full bg-[#f2e3d1] px-3 py-2 text-xs font-black text-[#713b32]">
{p.cat}
</span>

<h1 className="mt-5 text-4xl font-black">
{p.name}
</h1>

<p className="mt-2 font-bold text-[#75685e]">
{p.artisan}
</p>

<div className="mt-2 flex items-center gap-2 text-sm text-[#75685e]">
<MapPin size={15}/>
{p.place}
</div>

<div className="my-7 text-3xl font-black">
{p.price}
</div>

<div className="rounded-2xl bg-[#fbf7ef] p-5">

<b>{t.storyTitle}</b>

<p className="mt-2 leading-7 text-[#75685e]">
Shabana learned Ajrakh block printing from her family and continues the craft using natural dyes and hand-carved wooden blocks. Each dupatta takes hours of careful work.
</p>

</div>

<div className="mt-5 flex items-center gap-2 text-sm">
<Star size={16} fill="currentColor"/>
4.9 · 128 happy buyers
</div>

<div className="mt-6 rounded-2xl border border-[#d9e3d5] bg-[#eef3ea] p-4">
<b className="text-[#4f6b45]">
Your purchase supports the artisan directly.
</b>
</div>

</div>
</div>
</section>
}
