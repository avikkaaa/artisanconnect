# ArtisanConnect 🧵

AI-powered market linkage and smart cataloging platform for marginalized artisans, weavers, and micro-entrepreneurs.

Built for **Smart India Hackathon — PS ID 26090**.

## ✨ Features

- 🤖 **Live AI assistant** powered by Gemini 2.5 Flash
- 📸 AI product-photo analysis and catalog generation
- 💰 AI-generated title, category, description, price and tags
- 🎯 AI market/buyer matching
- 📝 AI artisan-story generation
- 🧑‍🎨 Artisan onboarding & profiles
- 🛍️ Buyer marketplace with craft & region discovery
- 🌐 English / Hindi support
- 📶 Low-data / offline-friendly UI
- 📊 Artisan dashboard & market insights
- 🎬 Hackathon demo mode

## 🛠️ Tech Stack

**React.js · Tailwind CSS · Vite · Lucide React · Gemini 2.5 Flash**

The frontend is a lightweight React prototype. The Gemini API is called through the server-side `/api/ai` endpoint so the API key is never exposed in browser code.

## 🔐 Enable Live AI

Add an environment variable named `GEMINI_API_KEY` to your deployment platform (for example, Vercel Project Settings → Environment Variables). Then redeploy.

Without the key, the normal prototype/demo flows still work, while Live AI shows a clear configuration message.
