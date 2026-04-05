<div align="center">

<img src="public/favicon.svg" alt="MH Logo" width="80" />

# Muhammed Hisham A — Portfolio

**UI/UX Designer · Full-Stack MERN Developer**

A high-performance, single-page portfolio built with React, TypeScript & Motion — featuring a bespoke terracotta-and-sage design system, physics-driven animations, and a fully automated CI/CD pipeline.

[![Live Site](https://img.shields.io/badge/🌐_Live-hiishaaam.github.io-E07A5F?style=for-the-badge)](https://hiishaaam.github.io)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev)

</div>

---

## ✦ Preview

> A dark, editorial portfolio with floating orbit badges, parallax imagery, and micro-interactions throughout every section.

<div align="center">
  <img src="https://i.postimg.cc/cdtNhX5C/portfolio-main-image.jpg" alt="Portfolio Preview" width="600" style="border-radius: 12px;" />
</div>

---

## ✦ Features

| Category | Details |
|---|---|
| **Hero** | Orbiting tech badges with mouse-repel physics, animated title cycling, shimmer text effects |
| **About** | Parallax workspace image, animated stat counters with spring physics |
| **Skills** | Bento grid layout with categorized skill cards and hover-glow effects |
| **Projects** | Filterable project showcase with live demo links and GitHub repos |
| **Services** | Zig-zag alternating layout with glassmorphic cards |
| **Experience** | Unified timeline merging work history and certifications |
| **Contact** | Side-by-side form + info layout powered by EmailJS |
| **Extras** | IEDC leadership section, testimonials carousel, hobbies grid |

### Design & UX

- 🎨 **Bespoke Color System** — Terracotta `#E07A5F` · Sage `#81B29A` · Deep black `#08090D`
- 🔤 **Typography** — Space Grotesk (headings) · Inter (body) · JetBrains Mono (accents)
- 🪟 **Glassmorphism** — Frosted-glass cards with subtle noise textures
- ✨ **Custom Cursor** — Dot + ring follower with magnetic hover effects
- 🖱️ **Micro-animations** — Scroll-triggered reveals, hover glows, spring counters
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- 🎯 **SEO Optimized** — Open Graph tags, semantic HTML, descriptive meta

---

## ✦ Tech Stack

```
Frontend        React 19 · TypeScript 5.8 · Tailwind CSS 4.1
Animation       Motion (Framer Motion) 12
Build           Vite 6
Icons           Lucide React
Email           EmailJS
Deployment      GitHub Pages + GitHub Actions (Node 24)
```

---

## ✦ Project Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD — auto-deploys on push to main
├── public/
│   └── favicon.svg             # Custom MH. geometric logo
├── src/
│   ├── components/
│   │   ├── Navbar.tsx           # Fixed nav with MH. SVG logo + mobile drawer
│   │   ├── HeroFloatingBadges.tsx  # Orbiting badges with mouse-repel physics
│   │   ├── TechMarquee.tsx      # Infinite scrolling tech ticker
│   │   ├── About.tsx            # Parallax image + animated stat counters
│   │   ├── Skills.tsx           # Bento grid categorized skill cards
│   │   ├── Projects.tsx         # Filterable project showcase
│   │   ├── LiveDemo.tsx         # Interactive demo section
│   │   ├── Services.tsx         # Zig-zag service offerings
│   │   ├── Experience.tsx       # Unified work + certification timeline
│   │   ├── IEDC.tsx             # IEDC leadership showcase
│   │   ├── Testimonials.tsx     # Client/peer testimonials carousel
│   │   ├── Hobbies.tsx          # Personal interests grid
│   │   ├── Contact.tsx          # EmailJS-powered contact form
│   │   ├── Footer.tsx           # Minimal branded footer
│   │   ├── CustomCursor.tsx     # Dot + ring cursor follower
│   │   └── PageLoader.tsx       # Animated page loading screen
│   ├── App.tsx                  # Root component composing all sections
│   ├── main.tsx                 # React DOM entry point
│   └── index.css                # Design tokens, glassmorphism, noise overlay
├── index.html                   # SEO meta, Open Graph, favicon link
├── vite.config.ts               # Vite + React + Tailwind plugin config
├── tsconfig.json
└── package.json
```

---

## ✦ Getting Started

### Prerequisites

- **Node.js** ≥ 20 (24 recommended)
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/hiishaaam/hiishaaam.github.io.git
cd hiishaaam.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server starts at **http://localhost:3000** with hot module replacement.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Production build to `./dist` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | TypeScript type-checking (no emit) |
| `npm run clean` | Remove the `dist` directory |

---

## ✦ Deployment

This project uses **GitHub Actions** for automated deployments. Every push to `main` triggers:

1. **Checkout** → **Install** → **Build** → **Deploy to GitHub Pages**

The workflow is defined in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) and runs on Node.js 24.

**Live at:** [https://hiishaaam.github.io](https://hiishaaam.github.io)

---

## ✦ Design System

<table>
  <tr>
    <td align="center"><strong>Primary</strong><br><code>#E07A5F</code><br>Terracotta</td>
    <td align="center"><strong>Secondary</strong><br><code>#81B29A</code><br>Sage Green</td>
    <td align="center"><strong>Background</strong><br><code>#08090D</code><br>Deep Black</td>
    <td align="center"><strong>Glass</strong><br><code>rgba(255,255,255,0.02)</code><br>Frosted</td>
  </tr>
</table>

**Fonts:**
- **Headings** — [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (700)
- **Body** — [Inter](https://fonts.google.com/specimen/Inter) (400–600)
- **Monospace** — [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (400–500)

---

## ✦ Contact

<div align="center">

**Muhammed Hisham A**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/hiishaaam)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/hiishaaam)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:hishamhijaz0@gmail.com)

</div>

---

<div align="center">
  <sub>Designed & Built by <strong>Muhammed Hisham A</strong> · 2025</sub>
</div>
