# Sizzle Reel Studios Roadmap

Last updated: 2026-04-21

## Current Snapshot

This repo is now being rebuilt as the client-facing website for `Sizzle Reel Studios`, not as a general SZL umbrella site.

The current architecture is locked around:

- `/` Home
- `/our-work` lineup poster page
- `/our-work/[artistSlug]` artist archive page
- `/our-work/[artistSlug]/[projectSlug]` event/project detail page
- `/about`
- `/services`
- `/contact`
- `/preview`

Preview gating still exists. When `SITE_PASSWORD` is set, public routes are gated and unauthenticated users are redirected to `/preview`.

## What We Did This Session

### Architecture

- Replaced the old single-page `/home`-centric SZL direction with a dedicated Sizzle Reel Studios route structure.
- Kept the current Next.js App Router + TypeScript + Tailwind v4 stack.
- Moved preview entry to `/preview`.
- Changed legacy `/home` to redirect to `/`.

### Shared Site Foundation

- Added a shared site shell in `app/(site)/layout.tsx`.
- Added reusable site components in `components/site/`.
- Tightened the visual direction toward dark, cinematic, nightlife-adjacent presentation.
- Swapped the base typography to a stronger display/body pairing for the new direction.

### Core Pages

- Built the new homepage scaffold in `app/(site)/page.tsx`.
- Built the lineup page in `app/(site)/our-work/page.tsx`.
- Built the artist archive template in `app/(site)/our-work/[artistSlug]/page.tsx`.
- Built the event/project detail template in `app/(site)/our-work/[artistSlug]/[projectSlug]/page.tsx`.
- Kept About / Services / Contact as lower-priority support pages on the same foundation.

### Data Model

- Replaced the old flat JSON direction with a typed relational content model.
- Added core entities for:
  - site config
  - services
  - artists
  - projects/events
  - venues
  - clients/promoters
- Added relational helpers in `lib/srs/data.ts` so page logic stays stable as entries grow.

### Batch Content Workflow

- Added a batch-friendly content workflow so real data can be pasted in without touching routing logic.
- Added:
  - `content/srs/batches/artists.batch.ts`
  - `content/srs/batches/projects.batch.ts`
  - `content/srs/batches/venues.batch.ts`
  - `content/srs/batches/clients.batch.ts`
- Updated the runtime content files to consume those batch files.

### Development Seed Integration

- Loaded the temporary dataset from `Desktop/untitled folder/seed-data.json` into the live site content flow.
- Added `content/srs/development-seed.ts` as the temporary development content source.
- Mapped that seed into the existing entity structure for:
  - site config
  - services
  - artists
  - projects/events
  - venues
  - clients/promoters
- Replaced the old empty/seed batch state so the current site now renders populated test content through the existing routes.
- Added visible TODO markers and seed audit notes to flag weak assumptions, missing fields, and temporary content that needs replacement later.

### Social Proof Feed

- Added a linked `proofItems` layer for social/media proof without changing the archive architecture.
- Added `content/srs/proof-items.ts`.
- Added a reusable `components/site/ProofFeed.tsx` component.
- Wired proof-feed sections into:
  - homepage
  - artist archive pages
  - project detail pages
- Upgraded the homepage proof section into a visible scrolling marquee-style strip so it reads like moving social proof instead of a static row.

### Planning / Documentation

- Added `docs/sizzle-reel-rebuild-plan.md`
- Added `docs/content-population-checklist.md`

## Current State Of The Build

### Done

- Route architecture is in place.
- Global shell is in place.
- Preview gating is wired into the new route structure.
- Lineup/archive/detail system is structurally implemented.
- Content schema is scalable enough to add artists/events later without rewriting page logic.
- Content intake checklist exists for production population.
- Development seed content is now populating the site.
- Homepage, lineup, artist pages, and project pages now render against temporary seed data.
- Social proof feed exists and is visible on the homepage, with linked proof sections on artist and project pages.

### Not Done

- Homepage and services are using temporary development-seed copy, not final production copy.
- Artists are still using temporary seed entries with inferred poster tiers and placeholder genre tags.
- Projects/events are seeded, but still use temporary descriptions, inferred service links, and placeholder media URLs.
- Venues are populated from seed data, but city/state are defaulted and need confirmation.
- Clients/promoters are populated from seed data, but `kind` values are inferred and need confirmation.
- Proof-feed entries are inferred from project records and need to be replaced with real social posts, exact slide references, and final notes.
- Media galleries still do not have real still-image sets or thumbnails.
- Legacy files from the older build still exist and have not been cleaned up yet.

## Highest-Impact Next Step

Replace the inferred seed content with real production content in this order:

1. Real homepage/about/services copy in `content/srs/site.ts`
2. Real artist metadata in `content/srs/batches/artists.batch.ts`
3. Real project/event records in `content/srs/batches/projects.batch.ts`
4. Confirmed venue metadata in `content/srs/batches/venues.batch.ts`
5. Confirmed client/promoter metadata in `content/srs/batches/clients.batch.ts`
6. Real proof items in `content/srs/proof-items.ts`

This gives the fastest visible progress because it activates:

- the homepage
- the lineup page
- artist archive pages
- event detail pages
- the social proof feed

all at once from real data.

## Needed From User

### Homepage Copy

- final `home.eyebrow`
- final `home.headline`
- final `home.subheadline`
- final `home.proofLine`
- final CTA labels if changing
- final about intro and story

### Services

- final service list
- final service summaries
- final deliverables per service

### Artists

- real artist names
- slugs if you want custom ones
- poster hierarchy: `headliner`, `featured`, `support`
- location
- genres
- short archive summary per artist

### Projects / Events

- event name
- slug
- date
- linked artist slug(s)
- venue slug
- client/promoter slug
- service slug(s)
- short summary
- deliverables
- published flag
- real media links instead of temporary example URLs

### Venues

- venue name
- slug
- city
- state

### Clients / Promoters

- name
- slug
- kind: `promoter`, `club`, `festival`, `artist`, or `brand`
- website if relevant

### Media Assets

- thumbnail path or asset
- gallery images
- embed URLs
- alt text or enough context to write it cleanly

### Social Proof / Feed Items

- post URL
- who uploaded it
- platform
- post type: `carousel`, `reel`, `recap`, or `tour-post`
- linked project slug
- linked artist slug
- short proof note
- exact slide / clip / frame note if relevant
- thumbnail or preview still if available

## Files To Reopen First Next Session

- `ROADMAP.md`
- `docs/sizzle-reel-rebuild-plan.md`
- `docs/content-population-checklist.md`
- `content/srs/development-seed.ts`
- `content/srs/site.ts`
- `content/srs/batches/artists.batch.ts`
- `content/srs/batches/projects.batch.ts`
- `content/srs/batches/venues.batch.ts`
- `content/srs/batches/clients.batch.ts`
- `content/srs/proof-items.ts`
- `lib/srs/data.ts`
- `components/site/ProofFeed.tsx`

## Resume State

If resuming later, the project should be treated like this:

- architecture is locked
- do not redesign the route structure
- do not collapse the lineup/archive/detail system
- continue by replacing temporary development-seed content with real production data
- keep the proof feed as a linked proof layer, not a separate portfolio system
- keep using the current typed batch-content workflow

## Resume Phrase

If you start a new chat and say:

`Open roadmap.`

That should be treated as:

- read `ROADMAP.md` first
- use it as the source of truth for current project state
- continue from the highest-impact next step
- reopen the listed files before making new changes
- keep the architecture locked unless the user explicitly changes direction

## Handoff Phrase

If you want the session wrapped and saved before closing the terminal, say:

`Wrap it up for handoff.`

That means:

- update `ROADMAP.md`
- note what was done and what is left
- list the next files to reopen
- commit all current changes
- push `main`

## Verification Status

Latest checked during this session:

- `npm run build` passed
- latest content/proof-feed commit on `main` before this handoff: `c938088`
