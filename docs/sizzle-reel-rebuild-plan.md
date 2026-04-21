# Sizzle Reel Studios Rebuild Plan

Last updated: 2026-04-21

## 1. Current Repo Audit

### Framework

- Next.js App Router (`app/`)
- React 19
- TypeScript
- Tailwind CSS v4 through `@import "tailwindcss"` in `app/globals.css`

### Routing Setup

- `/` currently serves a password-gated preview splash.
- `/home` currently serves the main brand page.
- `proxy.ts` controls preview access using a cookie and `SITE_PASSWORD`.

### Styling Setup

- Global Tailwind utilities plus custom global CSS in `app/globals.css`
- `next/font/google` is used in the root layout
- Current styling direction is dark and motion-led, but the page structure is still a single-landing-page build

### Reusable Pieces Already Present

- Preview auth flow is worth keeping.
- `RDCanvas` is worth keeping for the preview entry if the animated splash still matters.
- Current page components (`Hero`, `Work`, `About`, `Services`, `Contact`, `HomeExperience`) are not a good base for the new site architecture.

### Keep / Remove / Rebuild

Keep:

- App Router setup
- TypeScript + Tailwind stack
- Preview cookie gate concept
- `RDCanvas` preview asset if wanted for a private entry page

Replace or rebuild:

- Root routing structure
- Current homepage composition
- Current content JSON shape
- Current navigation assumptions
- Current work section, which is too flat for the lineup/archive/detail vision

Remove later after migration is stable:

- Legacy single-page SZL components and legacy content files
- `/home` as the primary public route

## 2. Proposed Site Architecture

This site should be built as the public-facing Sizzle Reel Studios branch, not as a general SZL umbrella site.

### Target Routes

- `/` Home
- `/our-work` lineup / poster discovery page
- `/our-work/[artistSlug]` artist archive page
- `/our-work/[artistSlug]/[projectSlug]` event/project detail page
- `/about`
- `/services`
- `/contact`
- `/preview` private gated entry page when `SITE_PASSWORD` is enabled

### Route Logic

- Public-facing IA should use the clean routes above.
- Preview mode should protect the full public site and redirect unauthenticated users to `/preview`.
- Legacy `/home` should redirect to `/`.

## 3. Proposed Component and Page Structure

### App Structure

- `app/(site)/layout.tsx`
- `app/(site)/page.tsx`
- `app/(site)/our-work/page.tsx`
- `app/(site)/our-work/[artistSlug]/page.tsx`
- `app/(site)/our-work/[artistSlug]/[projectSlug]/page.tsx`
- `app/(site)/about/page.tsx`
- `app/(site)/services/page.tsx`
- `app/(site)/contact/page.tsx`
- `app/preview/page.tsx`

### Shared UI Components

- `components/site/SiteHeader.tsx`
- `components/site/SiteFooter.tsx`
- `components/site/PageIntro.tsx`
- `components/site/PosterLineup.tsx`
- `components/site/ArtistProjectList.tsx`
- `components/site/ContactPanel.tsx`

## 4. Content and Data Model

Recommendation: use typed local content modules first, not a CMS yet.

Why:

- The content volume is still small.
- Structure clarity matters more than editor tooling right now.
- The main challenge is modeling relationships well, not multi-user editing.
- Typed local modules are fast to build, versioned, and easy to refactor.

Future upgrade path:

- Keep the same entity model and move to a headless CMS later if update frequency or team editing grows.

### Core Entities

#### Site Config

- brand names
- nav items
- contact links
- social links
- SEO defaults
- homepage copy blocks

#### Artists

- `id`
- `slug`
- `name`
- `posterTier` (`headliner`, `featured`, `support`)
- `location`
- `genres`
- `summary`
- `status`

#### Projects / Events

- `id`
- `slug`
- `artistSlugs`
- `eventName`
- `title`
- `date`
- `venueSlug`
- `clientSlug`
- `serviceSlugs`
- `summary`
- `deliverables`
- `thumbnail`
- `gallery`
- `embedUrl`
- `published`

#### Venues

- `id`
- `slug`
- `name`
- `city`
- `state`

#### Clients / Promoters

- `id`
- `slug`
- `name`
- `kind`
- `website`

#### Services

- `id`
- `slug`
- `name`
- `summary`
- `deliverables`

## 5. Phased Build Roadmap

### Phase 1: Foundation

- establish new route structure
- implement shared site shell
- move preview gate to `/preview`
- create typed content model
- add initial placeholder content scaffolding

### Phase 2: Homepage

- build cinematic hero
- position Sizzle Reel Studios clearly
- add selected proof-of-work preview
- add direct enquiry CTAs

### Phase 3: Our Work / Lineup

- build poster-inspired artist-first lineup wall
- encode hierarchy through typography and spacing
- add filtering only if it helps, not by default

### Phase 4: Artist Archive Pages

- create per-artist archive pages
- list all filmed events for that artist
- show venue, date, promoter/client, thumbnail

### Phase 5: Event Detail Pages

- create standard project detail template
- support embeds, stills, metadata, and summary
- keep layout consistent and reusable

### Phase 6: About / Services / Contact

- add final copy and service framing
- make enquiry path obvious
- keep pages concise and useful

### Phase 7: Polish

- motion and transitions
- responsive QA
- metadata and social cards
- content completeness pass
- remove legacy files

## 6. Needed From User

The build can start with scaffolding, but these inputs are needed to complete the site properly.

### Brand and Direction

- final preference on using `Sizzle Reel Studios` vs `SRS` vs `SZL`
- whether preview gating should stay during development / launch
- any hard font preferences
- any hard color restrictions beyond dark / gritty
- logos, lockups, transparent PNG/SVG assets

### Navigation and IA

- final nav labels
- whether contact should be `Contact`, `Enquire`, or both
- whether `Services` deserves its own page in v1 or remains a home section plus page

### Homepage Content

- final hero headline
- final subhead
- short credibility statement
- any featured metrics worth showing
- any 3 to 6 featured artists or projects for the homepage

### About Content

- concise studio bio
- team member names and roles if they should appear
- founder/origin story if wanted
- any positioning statement that must be included

### Services Content

- final list of services
- one-line summary for each service
- any deliverables or package framing you want visible
- whether pricing should be public or private

### Contact / Enquiry

- preferred primary CTA
- enquiry email
- Instagram URL
- booking form destination if any
- preferred enquiry fields if a form is added later

### Work / Archive Data

- complete artist list
- artist spelling and preferred display names
- poster hierarchy for artists if you want weighted prominence
- all filmed events/projects for each artist
- dates for each project
- venue names
- promoter / company / client names
- short project descriptions
- embed links for clips
- thumbnails / stills / galleries
- permission guidance on what media is safe to publish

### Structured Entity Data

- preferred canonical names for venues
- preferred canonical names for promoters / clients
- whether projects can belong to multiple artists
- whether the same event should show on multiple artist pages later

## 7. Recommendation

Build the site with typed local content first.

That gives:

- clean version-controlled structure
- fast implementation
- strong data relationships
- easy future migration to a CMS if needed

The next practical implementation step is Phase 1 foundation: route restructure, shared shell, and content model scaffolding.
