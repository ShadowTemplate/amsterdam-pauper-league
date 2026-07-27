# Amsterdam Pauper League Website

An [Astro 6](https://astro.build) project with static output and [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`.

## Getting Started

### Prerequisites

- Node.js >=22 (use `nvm use 22` to switch)

### Installation

```bash
npm install
```

### Development

Start the dev server on port 4321:

```bash
npm run dev
```

Visit [http://localhost:4321](http://localhost:4321) in your browser.

### Build

Generate the static site:

```bash
npm run build
```

Output is in the `dist/` directory.

## Project Structure

```
src/
├── pages/          # File-based routing (.astro files)
├── layouts/        # Layout components
├── components/     # Astro components
├── styles/         # CSS (Tailwind v4 syntax)
├── lib/            # Utilities and data (data-layer.ts, src/lib/data/*)
└── types/          # TypeScript types
public/             # Static assets (CNAME for custom domain)
scripts/            # Python pipeline that generates src/lib/data/ from data/
data/               # Raw/cached input for the scripts/ pipeline (topdeck.gg
                    # exports, archetypes, Scryfall manifests)
```

`src/lib/data/` is entirely generated - see [UPDATING_THE_WEBSITE.md](UPDATING_THE_WEBSITE.md)
for how to run the pipeline after a new event.

## Key Features

- **No JavaScript frameworks** — interactive components use vanilla JS in `<script>` blocks
- **Tailwind CSS v4** — modern CSS utility framework
- **Static generation** — fast, deploy-anywhere output
- **Type-safe** — full TypeScript support

## Deployment

The site is deployed at [https://amsterdampauperleague.nl](https://amsterdampauperleague.nl) with a custom domain (CNAME in `public/`).
