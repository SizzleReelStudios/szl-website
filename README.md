# SZL — Sizzle Reel Studios website

## Current version / source of truth

The current owner-approved website is the SRS V1 design, promoted from `srs-v1` to **`main` on 18 September 2026**. Use `main` as the starting point for future work. This is the canonical website implementation, not a disposable preview experiment.

- Repository: https://github.com/SizzleReelStudios/szl-website
- Main deployment: https://szl-website.vercel.app/
- Historical branch preview: https://szl-website-git-srs-v1-sizzlereelstudios-projects.vercel.app/
- Password protection remains enabled as configured. Making the code canonical does not mean the public launch is complete.

## What is implemented

- Black/red Sizzle Reel Studios homepage.
- Three equally sized scrolling rows of 16 selected artists, labelled “Artists we’ve filmed”.
- Expandable featured-work panels and phone carousel.
- Past Work: 11 curated projects, category filters and expandable credits.
- Brands: 12 names in a centred grid, three columns desktop / two phone; no descriptions.
- Team and enquiry sections; repaired preview password form.

## Where to edit

- Homepage: `app/(site)/page.tsx`
- Main content / artist names: `content/srs/v1.ts`
- Past Work: `content/srs/past-work.ts`, `components/PastWork.tsx`
- Brand names: `content/srs/brands.ts`, `components/Brands.tsx`
- Scrolling names: `components/NamesMarquee.tsx`
- Featured panels: `components/ProjectAccordion.tsx`
- Styles: `app/globals.css`

## Content status and boundaries

Real portfolio images, preview clips and approved video URLs still need adding. Do not invent footage, links or client relationships. The featured panel selection still needs aligning with the owner's shortlist: Rampage Perth 2026, Kritikal Money, Kritikal Night Vision, Blkout Ring Ring and Blkout Dirty Talk. These are already represented in Past Work.

Restricted was explicitly ruled out by the owner and removed. TS7 was also removed from the artist marquee. Artist credits are not automatically direct-client credits. Keep private evidence exports, DMs, emails and financial information out of this repository.

Older archive routes and legacy components remain in the codebase; their existence does not supersede the current homepage. Do not restore the old umbrella homepage or placeholder names based on stale planning files.

## Development

```sh
npm install
npm run dev
npm run lint
npm run build
```

Use `SITE_PASSWORD` locally to test the existing password gate. Never commit secrets. Read `AGENTS.md` and the installed Next.js documentation before framework changes. Create future feature branches from current `main`.

## Supporting documentation

- `docs/showcase-content-audit.md`
- `docs/past-work-section.md`
- `docs/triangle-interaction-reference.md`
- `docs/srs-v1-visual-language.md`

These files contain design history and proposals; the current implementation and owner corrections above take precedence over older proposals.
