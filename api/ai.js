import {buildCatalogContext,normalizeCategory} from './catalogKnowledge.js';

export default async function handler(req,res){
 if(req.method!=='POST')return res.status(405).json({error:'Method not allowed'});
 const key=process.env.GEMINI_API_KEY;
 if(!key)return res.status(503).json({error:'AI is not configured yet. Add GEMINI_API_KEY in deployment environment variables.'});
 try{
  const {mode='catalog',text='',image,mimeType,category=''}=req.body||{};
  const normalized=normalizeCategory(category)||category;
  const prompts={
   catalog:`You are ArtisanConnect's specialist AI cataloging engine for Indian artisan products. Your MOST IMPORTANT TASK is accurate visual/product cataloging. Return ONLY valid JSON with title, category, description, suggestedPriceINR, tags, technique, targetMarket and confidence. First inspect the image and input carefully, identify the physical object, then write the listing. Never invent clothing, textiles, jewellery or another object when the image shows pottery, wood, bamboo, metal, painting or embroidery. If a selected category is supplied, it is AUTHORITATIVE. Keep the category exactly as supplied and use the craft knowledge below to improve terminology, technique, pricing and buyer relevance. If image evidence is ambiguous, stay conservative and choose a generic product description within the selected craft category. Use realistic Indian INR pricing, artisan terminology and culturally respectful language.`,
   story:'You are an AI storytelling assistant for marginalized Indian artisans. Turn the supplied story into JSON with artisanBio, productStory, shortSocialCaption and keywords. Preserve the artisan voice and cultural details.',
   match:'You are an AI market-linkage assistant. Based on the supplied product/buyer context, return JSON with matchScore, idealBuyer, markets, reasons and recommendation. Do not invent personal data.'
  };
  const context=mode==='catalog'?buildCatalogContext(normalized):'';
  const categoryRule=mode==='catalog'&&normalized?`\nSELECTED CATEGORY (AUTHORITATIVE): ${normalized}\nThe selected category MUST remain ${normalized}.`:'';
  const parts=[{text:(prompts[mode]||prompts.catalog)+categoryRule+context+'\nUSER INPUT:\n'+text}];
  if(image)parts.push({inline_data:{mime_type:mimeType||'image/jpeg',data:image.replace(/^data:[^;]+;base64,/,'')}});
  const response=await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key='+encodeURIComponent(key),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:[{parts}],generationConfig:{temperature:.15,responseMimeType:'application/json'}})});
  const data=await response.json();
  if(!response.ok)throw Error(data.error?.message||'Gemini request failed');
  const raw=data.candidates?.[0]?.content?.parts?.map(p=>p.text||'').join('')||'';
  let result;try{result=JSON.parse(raw.replace(/^```json\s*|\s*```$/g,''))}catch{result=raw}
  if(mode==='catalog'&&normalized&&result&&typeof result==='object'){result.category=normalized;result.knowledgeGrounded=true;result.catalogVersion='craft-kb-v2';}
  return res.status(200).json({result,model:'Gemini 2.5 Flash',grounding:mode==='catalog'?normalized||'general':''});
 }catch(e){return res.status(500).json({error:e.message||'AI request failed'})}
}
