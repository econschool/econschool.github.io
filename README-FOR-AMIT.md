# Econschool — full site prototype

A complete, build-verified Astro site (23 pages) implementing the brand system from
the style guide. Built 2026-06-10.

## To run it

```bash
cd econschool-site
npm install
npm run dev        # local preview at http://localhost:4321
npm run build      # production build into dist/
```

Node 22+ required (you have 26 locally — fine). The GitHub Actions workflow from
your existing repo works unchanged; this folder has no workflow file of its own,
so copy your `.github/` folder over when merging.

## What's new relative to your repo

- **Pages:** Start Here (`/start-here/`), Resources (`/resources/`),
  About (`/about/`), a 404 page, and a real homepage.
- **Announcements:** a third content collection (`src/content/announcements/`)
  with listing + detail pages; the three latest appear on the homepage.
- **SVG logo + favicon** (`public/es-logo.svg`, `public/favicon.svg`) — generated
  from Playfair Display Bold glyph paths by `scripts/make-logo.mjs`. The S is now
  exact brand terracotta (#A03A2C), resolving the color mismatch. The favicon
  follows the style guide's avatar rule (mark on violet).
- **Responsive header:** header/footer use a wider 1080px measure while prose
  stays at 760px; below 920px the nav collapses into an accessible toggle menu.
- **Brand-styled listings:** every card is a miniature postcard (title block →
  sage rule → content → footer line), per the style guide skeleton.
- **Homepage hero:** a mathematically real Edgeworth box (Cobb–Douglas, computed
  tangency, lens, contract curve, budget line) in your notation colors, with a
  quiet draw-on animation that respects `prefers-reduced-motion`.
- **Schema additions:** `workshops` gained optional `registration` (URL);
  `problems` gained optional `source` (for research-to-problem citations).

## What's kept exactly as your conventions specify

Colors as `--es-*` CSS variables only; Fontsource self-hosting; KaTeX build-time
rendering with self-hosted CSS; `content.config.ts` at the root of `src/` with
`glob` loaders and `z` from `astro/zod`; the `problems` type discriminator with
iframe branching for tools; `isActive()` with trailing-slash normalisation and
`aria-current="page"`.

## Things to replace with real facts (marked `NOTE FOR AMIT` in the source)

1. `src/pages/prep/index.astro` — schedule/fees/apply details from econschool.in.
2. `src/pages/about/index.astro` — the real contact email (placeholder:
   hello@econschool.in).
3. `src/pages/resources/index.astro` — the Artbook link.
4. All content in `src/content/` is sample copy — dates and claims are plausible
   drafts, not facts. Edit freely.
5. The tool entry's `embed` URL points at your tools repo path — confirm it.

## Suggested merge approach

Since this was rebuilt from your documented conventions (not from your files),
treat it as the new base: back up your current repo state on a branch
(`git checkout -b pre-redesign && git push`), then copy this folder's contents
over `main`, restore your `.github/` workflow, and `git push`. We can walk
through this step by step in chat.
