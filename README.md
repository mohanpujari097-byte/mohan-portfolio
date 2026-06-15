# Alex Sharma — Healthcare Analytics & RWE Portfolio

A premium, recruiter-focused portfolio website for a Senior Business Analyst specializing in U.S. Healthcare Analytics and Real-World Evidence (RWE).

## Tech Stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4** (CSS-variable based theming)
- **Framer Motion** (scroll-triggered and page-load animations)
- **next-themes** (light/dark mode with system preference)
- **lucide-react** (icons)

## Design System

- **Palette**: Clinical blue primary (`#0B3D5C`), data-blue accent (`#2E86C1`), teal data highlight (`#16A0A0`), near-white background (`#F6F9FC`), full dark-mode variant.
- **Typography**: Space Grotesk (display), Inter (body), JetBrains Mono (data labels, coding-system tags, stats) — loaded via `next/font/google`.
- **Signature element**: An animated "Cohort Funnel" visualization in the hero, modeled on a real RWE feasibility output (50M claims → final eligible cohort), with scroll-triggered fill animations.

## Project Structure

```
src/
  app/
    layout.tsx        # Root layout, fonts, SEO metadata
    page.tsx           # Assembles all sections
    globals.css        # Design tokens, theme variables, utilities
  components/
    navbar.tsx
    footer.tsx
    theme-provider.tsx
    theme-toggle.tsx
    ui/
      button.tsx
      badge.tsx
      section.tsx       # Section wrapper + heading
    sections/
      hero.tsx
      cohort-funnel.tsx # Signature hero visualization
      about.tsx
      healthcare-expertise.tsx
      technical-skills.tsx
      experience.tsx
      projects.tsx
      certifications.tsx
      education.tsx
      contact.tsx
  data/
    content.ts          # ALL editable content lives here
  lib/
    utils.ts            # cn() class merge helper
public/
  favicon.svg
  Alex_Sharma_Resume.pdf   # (add your resume here)
```

## Editing Content

Everything — name, stats, bio, skills, experience, projects, certifications, education, and contact links — is defined in **`src/data/content.ts`**. Update this single file to personalize the site; no component edits required for content changes.

To add a real resume, place a PDF at `public/Alex_Sharma_Resume.pdf` (or update `profile.resumeUrl` in `content.ts`).

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> Note on fonts: This project uses `next/font/google` to load Space Grotesk, Inter, and JetBrains Mono. This requires network access to fonts.googleapis.com during the build. In sandboxed/offline environments without that access, Next.js falls back to system fonts automatically (with a warning) and the site still renders correctly. On Vercel or any normal CI/dev machine with internet access, fonts self-host normally.

## Build

```bash
npm run build
npm run start
```

## Deployment (Vercel — recommended)

1. Push this project to a GitHub repository.
2. Go to vercel.com/new and import the repository.
3. Framework preset: Next.js (auto-detected). No environment variables required.
4. Click Deploy. Vercel runs `npm run build` with full network access, so fonts load correctly.
5. (Optional) Add a custom domain under Project Settings → Domains.

## Deployment (Other platforms)

- Netlify: use the Next.js runtime plugin (`@netlify/plugin-nextjs`), build command `npm run build`, publish directory auto-detected.
- Self-hosted / Docker: `npm run build && npm run start` (Node 18.18+). Ensure outbound HTTPS access to Google Fonts during build, or swap to `next/font/local` with self-hosted font files if offline.

## SEO

- Metadata (title templates, description, Open Graph, Twitter cards, keywords) is configured in `src/app/layout.tsx`.
- Replace `siteUrl` in `layout.tsx` with your production domain.
- Add a real `public/og-image.png` (1200x630) for social previews.
- The site uses semantic section landmarks (`<section id="...">`) matching the in-page nav anchors for accessibility and deep linking.

## Accessibility & Performance Notes

- Dark mode respects system preference via `next-themes`, with a manual toggle.
- `prefers-reduced-motion` is respected globally (animations disabled for users who request it).
- All interactive elements have visible focus states.
- Scroll-triggered animations use `whileInView` with `once: true` to avoid re-triggering.

## Customization Checklist

- [ ] Update `profile` object in `content.ts` (name, email, links, location)
- [ ] Add real resume PDF to `public/`
- [ ] Replace placeholder certifications/education with actual credentials
- [ ] Update `siteUrl` and OG image in `layout.tsx`
- [ ] Review/replace project descriptions with real project details if available
