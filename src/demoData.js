// Bulk synthetic demo dataset for ArtisanConnect.
// This is seed/context data for the prototype and AI prompts; it does NOT train Gemini.
// The records are intentionally synthetic and contain no real customer PII.

export const demoArtisans = [
  ['Shabana Khatun','Kutch, Gujarat','Ajrakh Printing','18 years','Textiles'],['Ramesh Prajapati','Khurja, Uttar Pradesh','Terracotta Pottery','24 years','Pottery'],['Maya Oraon','Ranchi, Jharkhand','Bamboo Weaving','12 years','Bamboo'],['Amina Bibi','Bhuj, Gujarat','Kutchi Embroidery','16 years','Embroidery'],['Farooq Dar','Srinagar, Kashmir','Walnut Wood Carving','21 years','Wood Craft'],['Meena Sharma','Jaipur, Rajasthan','Blue Pottery','14 years','Pottery'],['Lalita Nayak','Pochampally, Telangana','Ikat Weaving','19 years','Textiles'],['Suresh Karmakar','Bastar, Chhattisgarh','Dokra Casting','27 years','Metal Craft'],['Kamla Devi','Chanderi, Madhya Pradesh','Chanderi Weaving','22 years','Textiles'],['Babulal Kumhar','Molela, Rajasthan','Terracotta Relief','31 years','Pottery'],['Rekha Bai','Bagru, Rajasthan','Block Printing','17 years','Textiles'],['Janki Murmu','Dumka, Jharkhand','Sohrai Painting','11 years','Painting'],['Nasreen Begum','Lucknow, Uttar Pradesh','Chikankari','20 years','Embroidery'],['Tashi Dolma','Leh, Ladakh','Wool Weaving','15 years','Textiles'],['Gopal Nayak','Cuttack, Odisha','Pattachitra','25 years','Painting'],['Savita Gond','Mandla, Madhya Pradesh','Gond Art','13 years','Painting'],['Mohan Sahu','Moradabad, Uttar Pradesh','Brass Craft','23 years','Metal Craft'],['Parvati Devi','Kangra, Himachal Pradesh','Basket Weaving','18 years','Bamboo'],['Irfan Ansari','Varanasi, Uttar Pradesh','Banarasi Weaving','26 years','Textiles'],['Mala Toppo','Ranchi, Jharkhand','Tribal Jewellery','10 years','Jewellery']
].map((a,i)=>({id:`A${String(i+1).padStart(3,'0')}`,name:a[0],place:a[1],craft:a[2],experience:a[3],category:a[4],verified:true,story:`${a[0]} carries forward ${a[2].toLowerCase()} through a family and community craft tradition. Their work combines local materials, patient handwork and designs made for contemporary buyers.`}));

const productNames = [
  ['Indigo Ajrakh Dupatta','Textiles',1450,'Ajrakh hand block printing'],['Terracotta Surahi','Pottery',890,'Traditional terracotta pottery'],['Handwoven Bamboo Basket','Bamboo',650,'Bamboo hand weaving'],['Kutchi Mirror-Work Tote','Embroidery',1100,'Kutchi embroidery and mirror work'],['Walnut Wood Coasters','Wood Craft',1250,'Hand-carved walnut wood'],['Blue Pottery Diya Set','Pottery',720,'Traditional blue pottery'],['Handwoven Ikat Stole','Textiles',1800,'Traditional Ikat weaving'],['Dokra Brass Figurine','Metal Craft',2100,'Lost-wax Dokra casting'],['Chanderi Handloom Dupatta','Textiles',1650,'Fine Chanderi hand weaving'],['Terracotta Wall Plate','Pottery',980,'Hand-moulded terracotta relief'],['Bagru Printed Cushion','Textiles',780,'Natural-dye block printing'],['Sohrai Art Panel','Painting',1350,'Sohrai tribal painting'],['Lucknow Chikankari Kurta','Embroidery',2200,'Hand embroidery chikankari'],['Ladakhi Wool Scarf','Textiles',1950,'Handwoven Himalayan wool'],['Pattachitra Story Panel','Painting',2400,'Traditional Pattachitra painting'],['Gond Forest Artwork','Painting',1500,'Gond folk painting'],['Moradabad Brass Bowl','Metal Craft',1750,'Hand-beaten brass craft'],['Kangra Bamboo Hamper','Bamboo',1150,'Handwoven bamboo basketry'],['Banarasi Silk Stole','Textiles',2600,'Handloom silk weaving'],['Tribal Bead Necklace','Jewellery',950,'Hand-strung tribal jewellery']
];

export const demoProducts = productNames.map((p,i)=>({
  id:`P${String(i+1).padStart(3,'0')}`,name:p[0],cat:p[1],price:`₹${p[2].toLocaleString('en-IN')}`,priceValue:p[2],
  artisan:demoArtisans[i].name,place:demoArtisans[i].place,tech:p[3],score:87+((i*7)%11),
  story:demoArtisans[i].story,inventory:8+(i*3)%18,orders:3+(i*5)%27,views:120+(i*83)%900,
  tags:[p[1],'handmade','artisan-made',i%2?'heritage':'traditional'],
  ai:{catalogConfidence:91+(i%8),marketFit:84+((i*3)%14),idealBuyer:i%3===0?'Home & gifting buyers':i%3===1?'Ethical fashion buyers':'Craft collectors'}
}));

export const demoBuyers = [
  ['Priya','Delhi','Home decor','Handmade gifting'],['Arjun','Bengaluru','Sustainable fashion','Ikat and natural fabrics'],['Neha','Mumbai','Corporate gifting','Premium artisan products'],['Kabir','Pune','Home decor','Pottery and wood craft'],['Ananya','Chennai','Ethical fashion','Handloom textiles'],['Rohan','Hyderabad','Art collecting','Folk and tribal art'],['Meera','Jaipur','Wedding gifting','Traditional crafts'],['Aarav','Gurugram','Corporate procurement','Bulk artisan gifts'],['Ishita','Kolkata','Home decor','Bamboo and textiles'],['Dev','Ahmedabad','Fashion','Regional embroidery']
].map((b,i)=>({id:`B${String(i+1).padStart(3,'0')}`,name:b[0],location:b[1],interest:b[2],preference:b[3],budget:700+(i*350),aiProfile:`Interested in ${b[2].toLowerCase()}, especially ${b[3].toLowerCase()}. Prefers authentic handmade products with clear artisan stories.`}));

export const demoOrders = Array.from({length:40},(_,i)=>({
  id:`ORD-${String(260901+i).slice(-6)}`,buyer:demoBuyers[i%demoBuyers.length].name,product:demoProducts[i%demoProducts.length].name,
  artisan:demoProducts[i%demoProducts.length].artisan,value:demoProducts[i%demoProducts.length].priceValue,
  status:['Delivered','Shipped','Processing','Delivered'][i%4],matchScore:88+(i%10),
  aiReason:['Strong interest match','Location and budget match','Gift intent detected','Craft preference match'][i%4]
}));

export const demoMatches = demoProducts.slice(0,12).map((p,i)=>({
  product:p.name,artisan:p.artisan,buyer:demoBuyers[i%demoBuyers.length].name,score:90-(i%6),
  market:['Delhi NCR','Mumbai','Bengaluru','Jaipur','Hyderabad','Pune'][i%6],reason:['Strong craft interest','Budget aligned','Gifting intent','Sustainable-fashion preference'][i%4]
}));

export const demoActivity = Array.from({length:30},(_,i)=>({
  id:i+1,time:`${9+(i%10)}:${String((i*7)%60).padStart(2,'0')}`,
  action:['AI generated catalog','AI matched product to buyer','New artisan profile verified','Product viewed','Order received','AI suggested target market'][i%6],
  entity:[demoProducts[i%demoProducts.length].name,demoArtisans[i%demoArtisans.length].name,demoBuyers[i%demoBuyers.length].name][i%3],type:['ai','match','verify','view','order','ai'][i%6]
}));

export const aiTrainingExamples = demoProducts.slice(0,20).map((p,i)=>({
  input:{product:p.name,craft:p.tech,region:p.place,price:p.priceValue,artisanExperience:demoArtisans[i].experience},
  output:{category:p.cat,targetBuyer:p.ai.idealBuyer,suggestedPriceINR:p.priceValue,marketFit:p.ai.marketFit,tags:p.tags}
}));
