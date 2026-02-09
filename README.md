# Leo-Lsc.github.io

Personal academic website built with **Astro + Tailwind CSS v4**, deployed via GitHub Pages.

## Quick Start

```bash
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build to dist/
npm run preview    # preview production build locally
```

## Project Structure

```
├── public/                  # Static assets (directly copied to output)
│   ├── avatar.jpg           # Profile photo (replace with your own)
│   ├── cv.pdf               # CV file (replace with your own)
│   └── favicon.svg          # Browser tab icon
│
├── src/
│   ├── data/                # ★ Data files — update content here
│   │   ├── profile.ts       #   Personal info (name, links, email)
│   │   └── content.ts       #   Navigation items and section IDs
│   │
│   ├── components/          # UI components
│   │   ├── TopNav.astro     #   Sticky top navigation bar
│   │   ├── Sidebar.astro    #   Left sidebar (avatar + social links)
│   │   └── ThemeToggle.astro#   Dark/light mode toggle button
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro #   Page shell (head, nav, sidebar, main)
│   │
│   ├── pages/
│   │   └── index.astro      #   ★ Main page — all section content here
│   │
│   └── styles/
│       └── global.css       #   Design system (colors, typography, cards)
│
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions: auto-deploy on push to main
│
├── astro.config.mjs         # Astro + Tailwind config
└── tsconfig.json            # TypeScript config
```

## How to Update Content

### Update personal info (name, links, email)

Edit `src/data/profile.ts`:

```ts
export const profile = {
  displayName: "Sicheng (Leo) Lai",
  scholarUrl: "https://scholar.google.com/...",
  githubUrl: "https://github.com/Leo-Lsc",
  email: "sichenglai@link.cuhk.edu.cn",
  avatarPath: "/avatar.jpg",
  cvPath: "/cv.pdf",
};
```

This file feeds into the top nav (name), sidebar (avatar, social links), and CV section.

### Replace avatar photo

Put your photo at `public/avatar.jpg` (overwrite the placeholder). Recommended: square, at least 300x300px.

### Replace CV

Put your PDF at `public/cv.pdf` (overwrite the placeholder).

### Edit section content (About, Publications, Experiences, CV, Misc)

All section content lives in `src/pages/index.astro`. Each section is a `<section id="...">` block:

| Section | What to edit |
|---------|-------------|
| **About** | `<section id="about">` — your bio paragraph |
| **Publications** | `<section id="publications">` — each `.publication-card` div is one paper |
| **Experiences** | `<section id="experiences">` — each `.experience-card` div is one entry |
| **CV** | `<section id="cv">` — description text (buttons auto-link to `cv.pdf`) |
| **Misc** | `<section id="misc">` — grid of cards for hobbies, fun facts, etc. |

### Add a new publication

Copy an existing `.publication-card` block in the Publications section and update:

```html
<div class="publication-card">
  <h3 class="text-base font-semibold text-text-primary mb-1">Your Paper Title</h3>
  <p class="text-sm text-text-secondary mb-2">
    Author A, <strong class="text-text-primary">Sicheng Lai</strong>, Author B
  </p>
  <p class="text-sm text-text-secondary italic mb-3">Conference Name, 2025</p>
  <div class="flex flex-wrap gap-2">
    <a href="https://..." class="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors duration-150">Paper</a>
    <a href="https://..." class="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors duration-150">Code</a>
  </div>
</div>
```

### Add a new experience

Copy an existing `.experience-card` block in the Experiences section:

```html
<div class="experience-card">
  <div class="mb-1">
    <h3 class="text-base font-semibold text-text-primary">Role Title</h3>
    <p class="text-sm text-text-secondary">Organization</p>
  </div>
  <p class="text-xs text-text-secondary">2024 &ndash; Present</p>
  <p class="text-sm text-text-secondary mt-2">Description of what you did.</p>
</div>
```

### Change color scheme

Edit the CSS variables in `src/styles/global.css` under `:root` (light) and `.dark` (dark). The current scheme is **Slate + Indigo**. Four predefined schemes are documented in `CLAUDE.md` section 6.

### Change navigation items

Edit `src/data/content.ts` to add/remove/rename nav items. Each item must have a matching `<section id="...">` in `index.astro`.

## Deployment

Push to `main` branch triggers automatic deployment via GitHub Actions.

**First-time setup:** Go to repo Settings > Pages > Source, select **GitHub Actions**.

## Tech Stack

- [Astro](https://astro.build/) v5 — static site generator
- [Tailwind CSS](https://tailwindcss.com/) v4 — utility-first CSS (via `@tailwindcss/vite`)
- GitHub Actions + GitHub Pages — CI/CD and hosting
