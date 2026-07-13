# Nur Aina Saipulismi — Portfolio

A premium, product-focused portfolio built to position a **Product-focused Frontend Engineer**
who builds enterprise software, data-driven dashboards, and intelligent interfaces.

Design language inspired by Linear, Vercel, Stripe, Notion, and Raycast — clean, spacious,
white-first, with subtle micro-interactions.

## Tech stack

- **Next.js 14** (App Router) + **React 18**
- **TypeScript** (strict)
- **Tailwind CSS** — custom design system (tokens in `tailwind.config.ts`, base styles in `app/globals.css`)
- **Framer Motion** — reveal-on-scroll, staggered entrances, animated hero dashboard, scroll progress
- **lucide-react** — icons
- Fonts: **Inter** (sans) + **JetBrains Mono** (labels), via `next/font`

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (fully static)
npm run start    # serve the production build
```

## Where to edit things

**All content lives in one file:** [`lib/content.ts`](lib/content.ts).
Edit the objects there to change your bio, projects, skills, timeline, and testimonials —
no component edits required.

| What | Where |
| --- | --- |
| Name, role, email, social links, availability | `profile` in `lib/content.ts` |
| Hero headline / metrics | `hero` |
| About intro, principles, journey | `about` |
| Project case studies | `projects[]` |
| Design explorations | `explorations[]` |
| Skills | `skillGroups[]` |
| Career timeline | `career[]` |
| Testimonials (placeholders) | `testimonials[]` |
| Design tokens (color, shadow, type scale) | `tailwind.config.ts` |
| Global styles / utilities | `app/globals.css` |

### To personalize before publishing

1. **Links** — update `profile.links` (`linkedin`, `github`, `resume`) in `lib/content.ts`.
   They currently point to placeholder URLs (marked with `TODO`).
2. **Resume** — drop `resume.pdf` into the `public/` folder (see `public/resume-placeholder.md`).
3. **Metrics & results** — the numbers in `hero.metrics` and each project's `results`
   are reasonable placeholders; swap in your real figures where you have them.

## Structure

```
app/
  layout.tsx        # fonts, metadata, SEO
  page.tsx          # section composition
  globals.css       # design system base + utilities
components/
  nav.tsx           # floating glass nav
  scroll-progress.tsx
  dashboard-illustration.tsx   # animated hero visual
  footer.tsx
  ui/               # Button, Reveal, SectionHeading primitives
  sections/         # Hero, About, Projects, Explorations, Skills, Career, Testimonials, Contact
lib/
  content.ts        # ← single source of truth for all copy
  utils.ts          # cn() helper
```

## Deploy

Push to a Git repo and import into **Vercel** — zero config. Or `npm run build` and host
the static output anywhere that runs a Node server (`npm run start`).

## Accessibility & polish

- Respects `prefers-reduced-motion` (all animations disable gracefully)
- Semantic landmarks, focus-visible rings, keyboard-operable nav and case-study toggles
- Fully responsive, mobile-first
- SEO metadata + Open Graph in `app/layout.tsx` (update `siteUrl` to your domain)
