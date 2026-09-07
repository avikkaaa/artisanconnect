export default async function handler(req,res){
 if(req.method!=='POST')return res.status(405).json({error:'Method not allowed'});
 const key=process.env.GEMINI_API_KEY;
 if(!key)return res.status(503).json({error:'AI is not configured yet. Add GEMINI_API_KEY in deployment environment variables.'});
 try{
  const {mode='catalog',text='',image,mimeType,category=''}=req.body||{};
  const prompts={
   catalog:`You are the product catalog AI for ArtisanConnect, an Indian artisan marketplace. Return ONLY valid JSON with title, category, description, suggestedPriceINR, tags, technique, targetMarket and confidence. ACCURACY RULES: If a selected category is supplied, it is AUTHORITATIVE and you MUST keep that category; never replace pottery/ceramics with textiles, dupatta, clothing, jewelry, etc. Identify the physical product from the image/text before writing the title. Do not invent a product type that conflicts with the image or selected category. If the selected category is pottery, the title, description, technique, tags and target market must describe a pottery/ceramic item. Use realistic Indian artisan terminology and INR pricing.`,
   story:'You are an AI storytelling assistant for marginalized Indian artisans. Turn the supplied story into JSON with artisanBio, productStory, shortSocialCaption and keywords. Preserve the artisan voice and cultural details.',
   match:'You are an AI market-linkage assistant. Based on the supplied product/buyer context, return JSON with matchScore, idealBuyer, markets, reasons and recommendation. Do not invent personal data.'
  };
  const categoryRule=mode==='catalog'&&category?`\nSELECTED CATEGORY (AUTHORITATIVE): ${category}\nThe selected category must be used exactly or as a natural title-case equivalent. Do not change it.`:'';
  const parts=[{text:(prompts[mode]||prompts.catalog)+categoryRule+'\nInput:\n'+text}];
  if(image)parts.push({inline_data:{mime_type:mimeType||'image/jpeg',data:image.replace(/^data:[^;]+;base64,/,'')}});
  const response=await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key='+encodeURIComponent(key),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:[{parts}],generationConfig:{temperature:.2,responseMimeType:'application/json'}})});
  const data=await response.json();
  if(!response.ok)throw Error(data.error?.message||'Gemini request failed');
  const raw=data.candidates?.[0]?.content?.parts?.map(p=>p.text||'').join('')||'';
  let result;try{result=JSON.parse(raw.replace(/^```json\s*|\s*```$/g,''))}catch{result=raw}
  if(mode==='catalog'&&category&&result&&typeof result==='object')result.category=category;
  return res.status(200).json({result,model:'Gemini 2.5 Flash'});
 }catch(e){return res.status(500).json({error:e.message||'AI request failed'})}
}
