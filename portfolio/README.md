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
  slug: 'my-project',           // URL: /projects/my-project
  title: 'My Project',
  description: 'Short description for the card.',
  context: 'Longer context shown on the project profile page.',
  url: 'https://myproject.com',
  tech: ['Svelte', 'TypeScript'],
  year: '2024'
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
