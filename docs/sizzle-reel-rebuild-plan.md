# SZL Umbrella Site Plan

Last updated: 2026-07-21

> Supersedes the previous "Sizzle Reel Studios Rebuild Plan" on this path. The
> 2026-04 rebuild treated this repo as the client-facing SRS site only; as of
> 2026-07-21 the direction is the **SZL umbrella site** — one house for
> everything the trio does, with Sizzle Reel Studios as the commercial wing
> inside it. `ROADMAP.md` is the live source of truth for state and next steps;
> this doc is the stable architectural reference.

## 1. Positioning

The work proves the skill; the site proves they're fun to work with. Target
read from a promoter/brand visitor: "these guys seem cool to work with, they're
skilled videographers, and they've worked with major artists and reputable
event coordinators/brands in Perth."

Two audiences, one site:

- **Promoter/brand doing due diligence** — needs credibility fast, on a phone,
  usually via an Instagram link. Never blocked by the weird stuff.
- **Fan/curious visitor** — here for the vibe, happily gets lost.

Design rule: the weird is *ambient* on the business path (Frank's corner
comments, writing voice, poster art) and *concentrated* off it (Portal,
Cinema — destinations you choose).

## 2. Site Architecture

### Routes (built)

- `/preview` — password-gated enter screen (`SITE_PASSWORD` + cookie via `proxy.ts`)
- `/` — landing: Frank's crossroads + Fresh Off The Grill + SRS band + wing directory
- `/our-work` — per-year lineup poster editions (full-width) + credibility wall
- `/our-work/[artistSlug]` — artist archive
- `/our-work/[artistSlug]/[projectSlug]` — event/project detail
- `/about`, `/services`, `/contact` — support pages, boring on purpose
- `/cinema` — SIZZL3 screening room (series/episode hub)
- `/poddy` — Sausage Sizzle Poddy (honest hiatus page while inactive)
- `/snags` — Meet the Snags (the trio)
- `/home` — legacy redirect to `/`

### Planned routes (not yet built)

- `/cinema/[seriesSlug]` — per-series timeline view (Phase 2, in progress)
- The Portal — route TBD; branching-narrative wing, sealed card on the homepage until then

### Frank (the mascot layer)

Persistent client component in `app/(site)/layout.tsx` (`components/site/Frank.tsx`):

- Corner companion on every page; owns the homepage crossroads ("what are you
  doing here?" with four options in his bubble).
- Replies stay with him in the corner through navigation; then contextual
  per-page lines. Intent + dismissed state persist in localStorage
  (`useSyncExternalStore`, no hydration mismatch).
- Placeholder 16×16 code-drawn sprite (blink/bob). Real pixel-art sprite set,
  final dialogue voice, and the Portal "fidelity shift" (rotoscoped pixel-art
  video from filmed footage) are future work. **Frank development is parked by
  user decision — don't expand him without being asked.**

## 3. Component Map

- `components/site/` — the live component set:
  - Shell: `SiteHeader`, `SiteFooter`, `Frank`
  - Landing: `FreshOffTheGrill`
  - Videography wing: `LineupEditions` (year switcher), `PosterLineup`
    (tiered poster, `align` variant, per-name `scale`), `CredibilityWall`,
    `ArtistProjectList`, `ProofFeed`
  - Utility: `PageIntro`, `ContactPanel`, `SeedDataNotice`
- `components/RDCanvas.tsx` — rotating-logo canvas used by `/preview`; the base
  for the future flames/showreel enter-screen upgrade. Kept deliberately.

## 4. Content and Data Model

Typed local content modules, no CMS (unchanged decision — structure over
tooling while volume is small; the entity model survives a CMS migration
later if needed).

Flow: `content/srs/batches/*.batch.ts` (paste-in batches) → merged by
`content/srs/*.ts` → consumed only through `lib/srs/data.ts` helpers →
pages. Types live in `lib/srs/types.ts`.

### Entities

- **Site config** — brand, nav, contact, SEO, homepage/about copy blocks
- **Artists** — slug, name, base `posterTier` (headliner/featured/support), location, genres, summary, status
- **Lineup appearances** — per-year poster overrides keyed by artist slug:
  `{ year, tier, scale? }`. Year membership otherwise derives from published
  project dates. `scale` is the per-name art-direction nudge.
- **Projects/events** — slug, artistSlugs, eventName, date, venueSlug,
  clientSlug, serviceSlugs, summary, deliverables, thumbnail, gallery, embedUrl, published
- **Venues** — name, city, state
- **Clients/promoters** — name, kind (promoter/club/festival/artist/brand), website
- **Services** — name, summary, deliverables
- **Proof items** — social receipts linked to project + artist: platform,
  postType (carousel/reel/recap/tour-post), source, note, date, postUrl
- **Cinema series/episodes** — (Phase 2) series with ordered episodes,
  per-platform links, YouTube-preferred embeds

## 5. Phase Status

### Phase 1 — the commercial job: **structurally complete, content-blocked**

Built: umbrella landing with Frank crossroads, Fresh Off The Grill, per-year
lineup editions (full-width poster layout), credibility wall, wing stubs,
nav + gating, legacy cleanup.

Blocked on real content: site copy, artists with year/tier calls, projects,
venues, clients, proof items, cleared-for-display names, media assets. See
`docs/content-population-checklist.md` — now formatted as a fillable workbook.

Parked: enter-screen flames (needs real showreel footage), Frank final art +
dialogue (user decision).

### Phase 2 — personality wings, each one a postable "the site got weirder" moment

1. Cinema: series/episode content model + timeline UI (in progress)
2. Poddy: real episode shelf when it comes off ice
3. Snags: real names/roles/bios/portraits
4. Portal: **concept development first** — see "The Portal — current understanding" in `ROADMAP.md` for what's settled and the seven questions the trio must answer before any engine gets built. Then: narrative engine → eerie-Frank fidelity shift → reward/store wiring (store platform TBD)

## 6. Session Conventions

- `Open roadmap.` → read `ROADMAP.md` first, resume from its highest-impact
  next step, keep locked systems locked.
- `Wrap it up for handoff.` → refresh `ROADMAP.md`, commit the working tree, push `main`.
