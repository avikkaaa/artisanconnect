export default async function handler(req,res){
 if(req.method!=='POST')return res.status(405).json({error:'Method not allowed'});
 const key=process.env.GEMINI_API_KEY;
 if(!key)return res.status(503).json({error:'AI is not configured yet. Add GEMINI_API_KEY in deployment environment variables.'});
 try{
  const {mode='catalog',text='',image,mimeType}=req.body||{};
  const prompts={catalog:'You are an AI catalog assistant for Indian artisans. Analyze the product input and return JSON with title, category, description, suggestedPriceINR, tags, technique, targetMarket and confidence. Be realistic and concise.',story:'You are an AI storytelling assistant for marginalized Indian artisans. Turn the supplied story into JSON with artisanBio, productStory, shortSocialCaption and keywords. Preserve the artisan voice and cultural details.',match:'You are an AI market-linkage assistant. Based on the supplied product/buyer context, return JSON with matchScore, idealBuyer, markets, reasons and recommendation. Do not invent personal data.'};
  const parts=[{text:(prompts[mode]||prompts.catalog)+'\nInput:\n'+text}];
  if(image)parts.push({inline_data:{mime_type:mimeType||'image/jpeg',data:image.replace(/^data:[^;]+;base64,/,'')}});
  const response=await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key='+encodeURIComponent(key),{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({contents:[{parts}],generationConfig:{temperature:.4,responseMimeType:'application/json'}})});
  const data=await response.json();
  if(!response.ok)throw Error(data.error?.message||'Gemini request failed');
  const raw=data.candidates?.[0]?.content?.parts?.map(p=>p.text||'').join('')||'';
  let result;try{result=JSON.parse(raw.replace(/^```json\s*|\s*```$/g,''))}catch{result=raw}
  return res.status(200).json({result,model:'Gemini 2.5 Flash'});
 }catch(e){return res.status(500).json({error:e.message||'AI request failed'})}
}
