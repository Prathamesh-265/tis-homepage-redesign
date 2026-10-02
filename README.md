# Tulas International School (TIS) - Homepage Redesign

An animated, responsive redesign of the TIS homepage. Brand colors (navy and yellow), copy and assets are retained from tis.edu.in.

## Live Demo

- **Live URL:** _add your Vercel / Netlify link_
- **Repository:** _add your GitHub link_

## Tech Stack

- React 19 + Vite
- Tailwind CSS v4
- GSAP + ScrollTrigger, Lenis (smooth scroll)
- Lucide React (icons)

## Standout Features Implemented

1. **Scroll-triggered reveals:** `useReveal` hook staggers `[data-reveal]` elements (0.5s) with GSAP ScrollTrigger.
2. **Custom cursor:** `CustomCursor` ring using `gsap.quickTo`, scales over links and buttons, hidden on touch (`pointer: coarse`).
3. **Animated theme switcher:** `AnimatedToggle` + `useTheme` (CSS variables, saved in `localStorage`).
4. **Scroll progress bar:** `ScrollProgress` fixed at the top of the viewport.

Also: intro preloader, magnetic buttons, 3D tilt cards, scroll-scrubbed headline, smart navbar (hides on scroll, highlights active section), skip link, Lenis smooth scrolling synced with ScrollTrigger, hero word reveal and parallax, count-up stats, pinned horizontal scroll (desktop) / swipe list (mobile), marquees, and `prefers-reduced-motion` support.

## Getting Started Locally

Requires Node.js 18+.

```bash
git clone https://github.com/your-username/tis-homepage-redesign.git
cd tis-homepage-redesign
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview
```

## Deploy

- **Vercel / Netlify:** import the repo, build command `npm run build`, output directory `dist`.

## Component Architecture

```
src/
├── components/
│   ├── ui/          Button, Marquee, Counter, TiltCard, ScrollText
│   ├── layout/      Navbar (with mobile menu), Footer
│   ├── sections/    Hero, About, Sports, Rankings, Achievers, Testimonials, Enquire
│   └── animation/   ScrollProgress, CustomCursor, AnimatedToggle, Preloader
├── hooks/           useLenis, useReveal, useTheme
├── data/            content.js (all copy and school data)
├── lib/             gsap.js (plugin registration)
└── styles/          index.css (Tailwind + theme tokens)
```

## Brand Identity Retained

Navy and yellow palette, copy, rankings, sports, parent reviews and imagery from tis.edu.in.
