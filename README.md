# Zineps Landing Page

A modern, high-performance, pixel-perfect replica of the **Zineps** intelligent logistics landing page built with React, TypeScript, Vite, and Tailwind CSS.

---

## Features

- **Interactive 3D Hero Mockup**: Realistic tablet mockup with scroll-tilt animation leveling cleanly to 0 degrees as you explore. Full left navigation sidebar and platform sync indicator matching official specifications.
- **Dynamic Interactive Carrier Marquee**: Seamless global carrier network badge showcase.
- **Two-Sided Logistics Network Cards**: Comprehensive logistics OS and partner shipping rates features.
- **Partner Shipping Rates Section**: Frosted glass metrics cards, synchronized CTA button sizing, and partner workflow navigation.
- **Interactive Global Shipping Network Globe / Map**: Country coverage and method network visualization.
- **Live Platform Reliability & Uptime Section**: SVG uptime metrics and platform status.
- **Magazine-Style Newsroom**: Highlighted seed investment and platform updates.
- **Floating Support Chat Launcher**: Fixed circular mint support widget in the bottom-right corner.
- **Multi-Language Support**: Seamless English (EN) and Dutch (NL) language switching.
- **Responsive & Accessible**: Optimized for mobile, tablet, and widescreen desktop displays.

---

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Bundler**: Vite 6
- **Styling**: Tailwind CSS + Custom Animations
- **Icons**: Lucide React / Custom SVG vectors

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/trghcj/Zineps_landing_page.git
cd Zineps_landing_page
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Build for production

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Deploying to Vercel

You can deploy this project to Vercel in 2 simple ways:

### Option 1: Deploy via Vercel Dashboard (Recommended & Easiest)

1. Go to [Vercel](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** > **"Project"**.
3. Under **"Import Git Repository"**, locate `trghcj/Zineps_landing_page` and click **"Import"**.
4. Configure Project:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**.
6. Vercel will build and deploy your site in less than a minute with a live `https://*.vercel.app` URL!

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. Login to your Vercel account:
   ```bash
   vercel login
   ```
3. Deploy directly:
   ```bash
   vercel
   ```
4. For production release:
   ```bash
   vercel --prod
   ```

---

## License

MIT License.
