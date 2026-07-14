# This is an Astro 6 project

This project uses Astro 6 with static output and Tailwind CSS v4 via `@tailwindcss/vite`.

Key facts:
- All pages are in `src/pages/` (`.astro` files, file-based routing)
- Layouts are in `src/layouts/`
- Astro components are in `src/components/` (`.astro` files)
- No React — interactive components use vanilla JS in `<script>` blocks
- CSS is in `src/styles/globals.css` (Tailwind v4 syntax: `@import "tailwindcss"`, `@theme inline`, `@variant dark`)
- Data is in `src/lib/data-layer.ts` and types in `src/types/index.ts`
- Static paths generated via `getStaticPaths()` exported from `.astro` frontmatter
- Node.js >=22 required (`nvm use 22` before running commands)
- Dev: `npm run dev` (port 4321), Build: `npm run build`
- Site: `https://amsterdampauperleague.nl` (custom domain, CNAME in `public/`)
