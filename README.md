# BENYAR Mechanical Watch — Landing Page

A React landing-page concept for a BENYAR mechanical watch. The project builds a product-story experience with scroll-driven visuals, feature sections, specifications, and pricing content.

**Live demo:** https://anime-watch-ebon.vercel.app

> **Repository-name note:** The GitHub repository is named anime_watch, but the current application is a mechanical-watch landing page, not an anime application. The repository slug is retained for now.

## Built with

- React 18
- Vite 5
- Framer Motion
- Tailwind CSS
- Lucide React

## Getting started

Use Node.js 20 or later.

~~~bash
npm ci
npm run dev
~~~

Open the local URL printed by Vite.

## Available commands

| Command | Purpose |
| --- | --- |
| npm run dev | Start the development server |
| npm run build | Create the production bundle |
| npm run preview | Preview the production bundle locally |

## Project structure

| Path | Purpose |
| --- | --- |
| src/App.jsx | Composes the landing-page sections |
| src/components/ | Hero, product story, details, features, specifications, pricing, and trust sections |
| src/index.css | Global styles |
| public/images/herosection/ | Numbered image sequence used by the scroll-driven hero |
| public/hero_watch.png | Supporting watch image |

The hero component expects a numbered sequence of 240 PNG frames. Keep the filenames and numbering consistent with the references in src/components/Hero.jsx.

## Quality checks

Run npm run build before submitting a change. There is currently no dedicated lint or unit-test script.

When changing the hero, check the full scroll sequence, image loading, mobile layout, resize behavior, performance, and reduced-motion accessibility.

## Asset and brand note

Confirm usage rights for product photography, brand names, and other third-party assets before redistributing them or using the site commercially.

## Contributing and security

See [CONTRIBUTING.md](CONTRIBUTING.md), [SECURITY.md](SECURITY.md), [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md), and [SUPPORT.md](SUPPORT.md).

## License

No repository-level open-source license is currently provided. Do not assume the code, product imagery, or brand assets may be reused.
