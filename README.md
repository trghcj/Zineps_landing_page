<div align="center">

<img src="public/favicon.png" width="80" height="80" alt="Zineps Logo" style="border-radius:16px"/>

# Zineps Landing Page

**The intelligent layer for global logistics**

A pixel-perfect, fully interactive landing page for [Zineps](https://zineps.com) built with React 18, TypeScript, Vite, and Tailwind CSS.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)

</div>

---

## Features

- **3D Animated Hero Tablet** — Scroll-tilt animation with full left navigation sidebar and live dashboard content
- **Interactive Carrier Marquee** — Animated showcase of 20+ global carrier logos (DHL, PostNL, DPD, FedEx, UPS, and more)
- **Partner Shipping Rates Section** — Frosted glass metric cards with scroll-triggered count-up animations (+20 Partners, +200 Countries, +1000 Methods)
- **Two-Sided Logistics Network** — Platform feature cards with hover interactions
- **Global Coverage Map** — Network visualization with animated floating nodes
- **Platform Reliability & Uptime** — SVG animated wave chart with live status indicator
- **Scroll Reveal Animations** — Smooth fade-in-up reveal on every section
- **Newsroom / Press Section** — Seed investment and platform update highlights
- **FAQ Accordion** — Smooth expanding answers with keyboard accessibility
- **Floating Support Chat** — Fixed circular mint chat launcher in the bottom-right corner
- **Multi-Language** — Full English and Dutch (NL) language toggle
- **Mobile-First Responsive** — Optimized for mobile, tablet, and widescreen
- **Cookie Consent Banner** — GDPR-compliant accept/decline modal

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Bundler | Vite 6 |
| Styling | Tailwind CSS v3 + Custom CSS Animations |
| Language Toggle | React Context API |
| Icons | Custom SVG + Lucide React |
| Fonts | Inter (Google Fonts) |
| Deployment | Vercel |

---

## Getting Started

### 1. Clone

```bash
git clone https://github.com/trghcj/Zineps_landing_page.git
cd Zineps_landing_page
```

### 2. Install

```bash
npm install
```

### 3. Dev Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### 4. Production Build

```bash
npm run build
npm run preview
```

---

## Deploying to Vercel

### Option 1 — Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New** → **Project**
3. Import **`trghcj/Zineps_landing_page`**
4. Vercel auto-detects Vite. Confirm:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy** — live in ~60 seconds

> Every push to `main` triggers an automatic redeploy.

### Option 2 — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## Project Structure

```
Zineps_landing_page/
├── public/
│   ├── favicon.png              # Brand favicon
│   ├── zineps-dashboard.svg     # Hero tablet dashboard SVG
│   ├── zineps-logo.svg          # Zineps wordmark
│   ├── hero-*.svg               # Carrier logo assets (DHL, UPS, FedEx...)
│   └── mockups/                 # Section mockup SVGs
├── src/
│   ├── App.tsx                  # Root component + all interactive effects
│   ├── data/
│   │   └── replicaData.ts       # Full EN + NL HTML replica strings
│   ├── index.css                # Global styles + animations
│   └── main.tsx                 # App entry point
├── index.html                   # HTML shell with favicon + meta tags
├── vite.config.ts
└── tsconfig.json
```

---

## License

MIT — feel free to use and adapt.

---

<div align="center">
Made with care for <strong>Zineps</strong>
</div>
