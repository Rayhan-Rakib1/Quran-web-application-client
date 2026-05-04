# 📖 Quran Web Application — Frontend

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**A beautiful, fully responsive Quran reading web application built with Next.js 14, TypeScript, and Tailwind CSS.**

[Live Demo](https://your-quran-app.vercel.app) · [Backend Repo](https://github.com/yourusername/quran-backend) · [Report Bug](https://github.com/yourusername/quran-frontend/issues) · [Request Feature](https://github.com/yourusername/quran-frontend/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [Pages & Routes](#-pages--routes)
- [Component Guide](#-component-guide)
- [Font Settings & localStorage](#-font-settings--localstorage)
- [SSG — Static Site Generation](#-ssg--static-site-generation)
- [Responsive Design](#-responsive-design)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

This is the **frontend** of the Quran Web Application — a clean, dark-themed platform to read, listen to, and search the Holy Quran. Inspired by [QuranMazid.com](https://quranmazid.com), it features a left icon sidebar, scrollable Surah list, per-verse audio playback, full-text search, and a font settings panel — all rendered as a **Static Site** using Next.js SSG.

---

## 🛠️ Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | [Next.js](https://nextjs.org/) | 14+ (App Router) |
| Language | TypeScript | 5.0+ |
| Styling | [Tailwind CSS](https://tailwindcss.com/) | 3.0+ |
| Fonts | Google Fonts (Amiri, Scheherazade) | — |
| State | React `useState` / `useContext` | — |
| Persistence | `localStorage` | — |
| Audio | HTML5 `<audio>` + Islamic Network CDN | — |
| Deployment | [Vercel](https://vercel.com/) | — |

---

## ✨ Features

- 🕌 **114 Surahs** — complete Arabic text with Saheeh International translation
- 🎨 **Dark Theme** — professional dark UI matching QuranMazid reference design
- 📱 **Fully Responsive** — desktop, tablet, and mobile layouts
- 🔊 **Audio Playback** — per-ayah play/pause with multiple reciter support
- 🔍 **Full-Text Search** — search by Arabic or English translation across all Surahs
- ⚙️ **Font Settings Panel** — choose Arabic font, adjust font sizes with sliders
- 💾 **Persistent Settings** — all font preferences saved to `localStorage`
- ⚡ **SSG** — all 114 Surah pages pre-rendered at build time for instant loading
- 🖋️ **Proper Arabic Rendering** — right-to-left text with Quranic fonts
- 🗂️ **Collapsible Sidebar** — Surah list as drawer on mobile

---

## 📸 Screenshots

> *(Add screenshots after deployment)*

| Desktop View | Mobile View |
|---|---|
| ![Desktop](./public/screenshots/desktop.png) | ![Mobile](./public/screenshots/mobile.png) |

---

## 📁 Project Structure

```
frontend/
├── app/
│   ├── layout.tsx               # Root layout (fonts, providers)
│   ├── page.tsx                 # Home → redirects to Surah 1
│   ├── [surah]/
│   │   └── page.tsx             # Surah reader page (SSG)
│   └── search/
│       └── page.tsx             # Search results page
├── components/
│   ├── layout/
│   │   ├── IconSidebar.tsx      # Left icon sidebar
│   │   ├── SurahSidebar.tsx     # Scrollable surah list sidebar
│   │   └── MobileDrawer.tsx     # Mobile collapsible drawer
│   ├── surah/
│   │   ├── SurahHeader.tsx      # Surah name, ayah count, revelation place
│   │   ├── AyahCard.tsx         # Single ayah display card
│   │   ├── Bismillah.tsx        # Bismillah header component
│   │   └── SurahList.tsx        # Surah list items
│   ├── audio/
│   │   ├── AudioPlayer.tsx      # Per-ayah play/pause button
│   │   └── useAudio.ts          # Audio playback hook
│   ├── search/
│   │   ├── SearchBar.tsx        # Search input component
│   │   └── SearchResults.tsx    # Search results list
│   ├── settings/
│   │   ├── FontSettingsPanel.tsx # Font settings modal/panel
│   │   └── useFontSettings.ts   # Font settings hook + localStorage
│   └── ui/
│       ├── IconButton.tsx       # Reusable icon button
│       ├── Spinner.tsx          # Loading spinner
│       └── Badge.tsx            # Revelation type badge
├── context/
│   ├── FontSettingsContext.tsx  # Global font settings context
│   └── SidebarContext.tsx       # Sidebar open/close context
├── hooks/
│   ├── useAudio.ts              # Audio playback hook
│   ├── useFontSettings.ts       # Font settings + localStorage
│   └── useSearch.ts             # Search logic hook
├── lib/
│   ├── api.ts                   # Backend API fetch functions
│   └── constants.ts             # App-wide constants
├── types/
│   └── index.ts                 # Shared TypeScript interfaces
├── public/
│   ├── fonts/                   # Local Arabic font files
│   └── icons/                   # App icons
├── styles/
│   └── globals.css              # Global CSS + Tailwind directives
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) `>= 20.0.0`
- [npm](https://npmjs.com/) `>= 10` or [Bun](https://bun.sh/) `>= 1.0`
- [Git](https://git-scm.com/)

```bash
# Check Node version
node --version

# Check npm version
npm --version
```

---

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/quran-frontend.git

# 2. Navigate to frontend directory
cd quran-frontend

# 3. Install dependencies
npm install
# or
bun install
```

---

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Fill in the values:

```env
# Backend API Base URL
NEXT_PUBLIC_API_URL=http://localhost:3001

# Audio CDN (optional override)
NEXT_PUBLIC_AUDIO_CDN=https://cdn.islamic.network/quran/audio/128
```

> ⚠️ Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Never store secrets here.

---

### Running the App

```bash
# Development server
npm run dev

# Build for production (SSG)
npm run build

# Start production server
npm run start

# Type checking
npm run type-check

# Lint
npm run lint
```

The app will start at:
```
🚀 App running at http://localhost:3000
```

---

## 🗺️ Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Redirects to `/1` (Al-Fatihah) |
| `/[surah]` | Surah Reader | Displays all Ayahs of a Surah (1–114) |
| `/search` | Search | Full-text search results page |

### SSG Route Generation

All 114 Surah pages are pre-generated at build time:

```typescript
// app/[surah]/page.tsx
export async function generateStaticParams() {
  return Array.from({ length: 114 }, (_, i) => ({
    surah: String(i + 1),
  }))
}
```

---

## 🧩 Component Guide

### `<IconSidebar />`
Left-fixed sidebar with icon-only navigation buttons.
- Home, Surah List toggle, Search, Font Settings, Theme

### `<SurahSidebar />`
Scrollable list of all 114 Surahs.
- Shows: Surah number, Arabic name, English name & translation
- Active Surah highlighted
- Desktop: always visible | Mobile: hidden behind drawer

### `<AyahCard />`
Displays a single verse.
```tsx
<AyahCard
  numberInSurah={1}
  arabic="بِسْمِ ٱللَّهِ..."
  translation="In the name of Allah..."
  audioUrl="https://cdn.islamic.network/..."
/>
```

### `<AudioPlayer />`
Per-ayah HTML5 audio play/pause button.
- Stops other playing audio when a new one starts
- Shows loading state while buffering

### `<FontSettingsPanel />`
Modal/drawer for font customization.
- Arabic font selector (Amiri, Scheherazade, KFGQPC)
- Arabic font size slider (20px – 48px)
- Translation font size slider (14px – 24px)
- All saved to `localStorage`

### `<SearchBar />`
Debounced search input (300ms) that queries the backend.

---

## ⚙️ Font Settings & localStorage

Font settings are globally managed via React Context and persisted in `localStorage`.

```typescript
// Default settings
const defaultSettings = {
  arabicFont: 'amiri',        // 'amiri' | 'scheherazade' | 'kfgqpc'
  arabicFontSize: 28,         // 20–48 (px)
  translationFontSize: 16,    // 14–24 (px)
}
```

**localStorage key:** `quran-font-settings`

Settings are loaded on app mount and applied via CSS variables:

```css
:root {
  --arabic-font-size: 28px;
  --translation-font-size: 16px;
}
```

---

## ⚡ SSG — Static Site Generation

This app uses Next.js **Static Site Generation** to pre-render all pages at build time for maximum performance.

```
npm run build
```

```
Route (app)                     Size
┌ ○ /                           1.2 kB
├ ● /[surah]                    4.5 kB
│ ├ /1
│ ├ /2
│ └ ... (114 pages)
└ ○ /search                     3.1 kB

● (SSG) — 114 pages pre-rendered
```

Data is fetched from the backend at **build time** using `fetch()` in Server Components.

---

## 📱 Responsive Design

| Breakpoint | Layout |
|-----------|--------|
| Mobile `< 768px` | Single column — hamburger menu for Surah list |
| Tablet `768px–1024px` | Icon sidebar + main content |
| Desktop `> 1024px` | Icon sidebar + Surah sidebar + main content |

### Mobile Behavior
- Surah sidebar collapses into a **bottom drawer**
- Icon sidebar becomes a **bottom navigation bar**
- Font settings open as a **full-screen modal**

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repository directly in the [Vercel Dashboard](https://vercel.com/dashboard).

**Build Settings on Vercel:**

| Setting | Value |
|---------|-------|
| Framework Preset | Next.js |
| Build Command | `npm run build` |
| Output Directory | `.next` |
| Install Command | `npm install` |

**Environment Variables on Vercel:**
Add `NEXT_PUBLIC_API_URL` pointing to your deployed backend URL.

---

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=out
```

Add to `next.config.ts` for static export:

```typescript
const nextConfig = {
  output: 'export',
}
export default nextConfig
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

```bash
# 1. Fork the repository

# 2. Create a feature branch
git checkout -b feature/your-feature-name

# 3. Make your changes and commit
git commit -m "feat: add dark mode toggle animation"

# 4. Push to your fork
git push origin feature/your-feature-name

# 5. Open a Pull Request
```

**Commit Message Convention:**

| Prefix | Usage |
|--------|-------|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `style:` | UI/styling change |
| `docs:` | Documentation |
| `refactor:` | Code refactor |
| `perf:` | Performance improvement |
| `chore:` | Dependency / config update |

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgements

- [QuranMazid.com](https://quranmazid.com) — UI Reference
- [AlQuran Cloud API](https://alquran.cloud/) — Quran data
- [Islamic Network CDN](https://cdn.islamic.network/) — Free audio CDN
- [Google Fonts](https://fonts.google.com/) — Amiri & Scheherazade fonts
- [Next.js](https://nextjs.org/) — React framework
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS

---

<div align="center">

Made with ❤️ for the Muslim Ummah

⭐ Star this repo if you found it helpful!

**[Backend Repo](https://github.com/yourusername/quran-backend)** · **[Live Demo](https://your-quran-app.vercel.app)**

</div>