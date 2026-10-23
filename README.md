# Aashish Morya — Developer Portfolio

A responsive, light-theme portfolio built with React, TypeScript, Vite, Tailwind CSS v4, Motion for React, and Lucide icons.

## Requirements

- Node.js 20.19+ or 22.12+ recommended
- npm
- Git (optional, for version control)

## Run locally

```bash
cd aashish-portfolio
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Before publishing — personalize these placeholders

Search the project for `YOUR_EMAIL@example.com` and replace it with your public professional email address.

Update the LinkedIn URL in `src/App.tsx` to your actual profile. Review the project summaries and technology lists so they accurately represent what you built. The About section references your Wipro role; adjust the title and dates if your official designation or timeline differs. Add verified live-demo URLs if available.

The project links currently point to the GitHub profile and AuctionPlatform repository. The TenantForge and E-Learning Dashboard links are profile-level links until you replace them with their exact repository URLs.

## Deploy

### Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Set the build command to `npm run build`.
4. Set the output directory to `dist`.
5. Deploy.

### GitHub Pages

For a Vite app, configure the correct `base` in `vite.config.ts` if publishing under a repository subpath, then build and deploy the `dist/` directory using GitHub Actions or your preferred publishing workflow.

## Accessibility and responsive behavior

- Keyboard-visible focus states and a skip-to-content link
- Semantic section landmarks and labelled navigation
- Reduced-motion preference support
- Responsive navigation and layouts for mobile, tablet, and desktop
- Decorative project mockups are hidden from assistive technology
