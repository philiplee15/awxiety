# Philip Lee — Portfolio

A minimalistic portfolio built with SvelteKit.

## Features

- **Light / Dark mode** — Toggle in the nav; preference persisted in `localStorage`
- **Mouse glow** — Glowy backdrop follows the cursor; click anywhere (outside links/buttons) to toggle on/off
- **Hover & glow animations** — Cards and links have subtle glow effects
- **Pet projects** — Grid of projects with individual profile pages
- **Resume section** — Placeholder (disabled for now)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Adding a New Project

1. Open `src/lib/data/projects.ts`
2. Add a new object to the `projects` array:

```ts
{
  slug: 'my-project',
  title: 'My Project',
  description: 'Short description for the project page.',
  url: 'https://myproject.com',
  tech: ['Svelte', 'TypeScript'],
  icon: '/projects/my-project-icon.png',      // optional: card icon on home
  wordLogo: '/projects/my-project-word.png'   // optional: full logo on project page
}
```

That's it — the route `/projects/my-project` is created automatically.

## Project Structure

```
src/
├── lib/
│   ├── components/     # Reusable UI components
│   ├── data/           # Projects data
│   └── stores/         # Theme, cursor glow
├── routes/
│   ├── +layout.svelte  # Root layout (nav, theme, mouse glow)
│   ├── +page.svelte    # Home
│   └── projects/
│       └── [slug]/     # Dynamic project pages
└── app.css             # Global styles
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

The project is configured for Vercel with `@sveltejs/adapter-vercel`.

### Option A: Deploy from GitHub (recommended)

1. **Push your code** to GitHub (if not already).
2. Go to [vercel.com](https://vercel.com) → **Add New** → **Project**.
3. **Import** your `awxiety` repository.
4. **Set Root Directory**: Since the portfolio lives in a subfolder, click **Edit** next to "Root Directory" and enter `portfolio`.
5. **Build settings** (Vercel usually auto-detects):
   - Framework Preset: SvelteKit
   - Build Command: `npm run build`
   - Output Directory: (leave default)
6. Click **Deploy**.

### Option B: Deploy with Vercel CLI

```bash
cd portfolio
npx vercel
```

Follow the prompts. Use `portfolio` as the root when asked if you're in a monorepo.

### Custom domain

After deployment, go to **Project Settings** → **Domains** to add a custom domain.
