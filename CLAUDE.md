# Shoroka Creations Website — Agent Reference

## Purpose
Professional marketing website for Shoroka Creations — a South African B-BBEE Level 1 company offering plant hire, logistics, health & safety, and construction services. Single-page application targeting fleet managers, safety officers, and government contractors. Core narrative: **"Architects of Legacy"**.

## Stack
- Framework: Next.js 16 (App Router, React 19, React Compiler, Turbopack)
- Package manager: **yarn** — use exclusively
- Database: None (static marketing site)
- Key libs: Tailwind CSS v4, Framer Motion / Motion, Radix UI, Lenis (smooth scroll), next-themes, Biome (lint/format)

## Branch Flow
- `main` — production. Never push directly.
- `dev` — default agent branch. All PRs target `dev`.
- Feature branches: `feature/{slug}` from `dev`
- Agent job branches: `agent-job/{id}` auto-created by BespokeHQ

## Key Commands
```bash
yarn install
yarn dev
yarn build
yarn lint        # biome check
yarn format      # biome format --write
```

## Architecture
Single-page app using Next.js App Router. All sections are React components mounted in `src/app/page.tsx` and scrolled via Lenis smooth-scroll. No backend — pure static export with Vercel deployment target.

Key directories:
- `src/app/` — Next.js App Router root (layout, page, globals.css, theme)
- `src/components/custom/` — All page sections (HeroSection, MissionSection, ServicesSection, TrustSection, AboutSection, ContactSection, Footer, Navbar, etc.)
- `src/components/ui/` — Reusable primitives (shadcn/ui-style, Radix-based)
- `src/components/providers/` — Context providers (theme, Lenis scroll)
- `src/lib/` — Utilities (cn helper, etc.)
- `public/` — Static assets (images, logo)

## Design System
Brand: **Shoroka Purple** `#33206E` + **Shoroka Gold** `#C7A963` (gradient `#E6C200` → `#A88930`).
- Dark mode default ("Deep Earth"): bg `#0A0A0C`, text `#F9FAFB`, accent gold
- Light mode ("Polished Seed"): bg `#FFFFFF`, headings `#33206E`
- Typography: Cormorant Garamond (headings) / Inter (body) / JetBrains Mono (technical specs)
- Glass effect: 15% opacity + 20px backdrop blur for Navbar/hero overlays
- Animations: content rises 50px from bottom (Framer Motion); gold glow pulse on primary buttons

## Site Structure (Single Page)
```
/ (SPA)
├── #hero       → HeroSection.tsx
├── #mission    → MissionSection.tsx
├── #trust      → TrustSection.tsx
├── #services   → ServicesSection.tsx
├── #about      → AboutSection.tsx
├── #contact    → ContactSection.tsx
└── Footer.tsx
```

## Agent Rules
1. Always branch from `dev`.
2. Package manager: **yarn** only — never npm or pnpm.
3. Run `yarn build` before opening a PR.
4. Conventional commits: `feat/fix/chore/docs/refactor`.
5. Linter is Biome (not ESLint) — run `yarn lint` and fix all issues before committing.
6. Preserve Lenis smooth scroll — all anchor navigation must use Lenis scroll-to, not native browser scroll.
7. Dark mode is the **primary/default** — always design and test dark mode first.
8. Brand colors are non-negotiable: use `#33206E` (purple) and `#C7A963` (gold) — no substitutes.
9. Do not introduce a backend or database — this is a static marketing site.
10. All animations must use Framer Motion or the `motion` package already installed.

## Environment
No `.env` required for local development. Deployment target is Vercel.
