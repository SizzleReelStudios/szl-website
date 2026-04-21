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

### Not Done

- Homepage still uses placeholder/interim copy in `content/srs/site.ts`.
- Services still use interim copy in `content/srs/site.ts`.
- Artists still use seed entries in `content/srs/batches/artists.batch.ts`.
- Projects/events are still empty in `content/srs/batches/projects.batch.ts`.
- Venues are still empty in `content/srs/batches/venues.batch.ts`.
- Clients/promoters are still empty in `content/srs/batches/clients.batch.ts`.
- Media galleries and embeds are not populated yet.
- Legacy files from the older build still exist and have not been cleaned up yet.

## Highest-Impact Next Step

Populate real content in this order:

1. Homepage copy in `content/srs/site.ts`
2. First real artist batch in `content/srs/batches/artists.batch.ts`
3. First real project/event batch in `content/srs/batches/projects.batch.ts`
4. Matching venues in `content/srs/batches/venues.batch.ts`
5. Matching clients/promoters in `content/srs/batches/clients.batch.ts`
6. Final services copy in `content/srs/site.ts`

This gives the fastest visible progress because it activates:

- the homepage
- the lineup page
- artist archive pages
- event detail pages

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

## Files To Reopen First Next Session

- `ROADMAP.md`
- `docs/sizzle-reel-rebuild-plan.md`
- `docs/content-population-checklist.md`
- `content/srs/site.ts`
- `content/srs/batches/artists.batch.ts`
- `content/srs/batches/projects.batch.ts`
- `content/srs/batches/venues.batch.ts`
- `content/srs/batches/clients.batch.ts`
- `lib/srs/data.ts`

## Resume State

If resuming later, the project should be treated like this:

- architecture is locked
- do not redesign the route structure
- do not collapse the lineup/archive/detail system
- continue by replacing seed content with real production data
- keep using the current typed batch-content workflow

## Verification Status

Latest checked during this session:

- `npm run build` passed
- `npm run lint` had only legacy warnings in untouched older files:
  - `components/RDCanvas.tsx`
  - `components/Work.tsx`
