# 💍 Nishinth & Karthika — Wedding Invitation

A premium white & gold wedding invitation website built with **Next.js 14**, **TypeScript**, and pure CSS animations.

## ✨ Features

- **Dramatic curtain reveal** — luxurious dark velvet curtains open on click
- **Floating gold particles** — diamonds, stars, petals, and sparkles drifting across the page
- **Shimmer text animations** — gold gradient shimmer on names and headings
- **Live countdown timer** — counting down to 30 August 2026
- **Scroll reveal animations** — every section fades in elegantly as you scroll
- **Background music** — auto-plays after curtain opens with a floating control
- **Fully responsive** — perfect on mobile, tablet, and desktop
- **White & gold premium aesthetic** — ivory backgrounds, rich gold accents

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Add your music file
Place your wedding music file at:
```
public/music/wedding.mp3
```

### 3. Run locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production
```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel

### Option A — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option B — GitHub Integration
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Vercel auto-detects Next.js — just click **Deploy**

## 📁 Project Structure

```
src/
  app/
    layout.tsx        — Root layout with fonts & metadata
    page.tsx          — Main page with all sections
    globals.css       — All styles, animations, design tokens
  components/
    ParticleCanvas.tsx  — Canvas-based floating gold particles
    Curtain.tsx         — Dramatic velvet curtain reveal
    MusicPlayer.tsx     — Floating music control with equalizer
    Countdown.tsx       — Live countdown to wedding day
    useScrollReveal.ts  — Intersection Observer scroll hook
public/
  music/
    wedding.mp3       — Add your wedding music here
```

## 🎨 Customization

All design tokens are in `globals.css` under `:root`:
```css
:root {
  --gold: #C9A84C;
  --gold-bright: #D4AF37;
  --ivory: #FFFDF7;
  /* ... */
}
```

To update wedding details, edit `src/app/page.tsx`.

---

Made with ❤️ for Nishinth & Karthika · 30 August 2026
