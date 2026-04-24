# Divyanshu Tiwari — Portfolio

Built with **Next.js 14** + **React 18**. No UI library. All custom CSS modules.

## Stack
- Next.js 14 (Pages Router)
- React 18
- CSS Modules (zero Tailwind, zero Bootstrap)
- Framer Motion (available, not forced)
- Syne + DM Mono + DM Sans fonts

## Run locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel (one command)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) — it auto-detects Next.js and deploys on every push.

## Customise content

All content lives in **`data/portfolio.js`** — edit that file only. No need to touch components.

```
data/
  portfolio.js   ← all text, links, projects, skills, experience
```

## Project structure

```
portfolio-nextjs/
├── components/        # One component + CSS module per section
│   ├── Navbar.js / .module.css
│   ├── Hero.js / .module.css
│   ├── About.js / .module.css
│   ├── Skills.js / .module.css
│   ├── Experience.js / .module.css
│   ├── Projects.js / .module.css
│   ├── Awards.js / .module.css
│   ├── Contact.js / .module.css
│   └── Footer.js / .module.css
├── data/
│   └── portfolio.js   ← edit this
├── hooks/
│   └── useInView.js   ← scroll animation hook
├── pages/
│   ├── _app.js
│   ├── _document.js
│   └── index.js
├── styles/
│   └── globals.css
├── next.config.js
└── package.json
```
