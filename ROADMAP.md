# SZL Website Roadmap

Last updated: 2026-07-21

## Direction Change (2026-07-21)

The previous "client-facing Sizzle Reel Studios site only" framing is superseded. The site is now the **SZL umbrella site**: one house for everything the trio does, with Sizzle Reel Studios (videography) as the commercial wing inside it.

Core positioning, in the user's words: the work proves the skill; the site proves they're fun to work with. Target read from a promoter/brand visitor: "these guys seem cool to work with, they're skilled videographers, and they've worked with major artists and reputable event coordinators/brands in Perth."

Two audiences, two paths through one site:

- **Promoter/brand doing due diligence** — needs credibility fast, on a phone, likely via an Instagram link. Their path must never be blocked by the weird stuff.
- **Fan/curious visitor** — here for the vibe, happily gets lost in the personality wings.

Rule: the weird is *ambient* on the business path (seasoning — Frank comments, writing voice, poster art) and *concentrated* off it (Portal, Cinema — destinations you choose).

## Target Site Structure

### The spine

1. **Enter screen** (`/preview` today) — rotating SZL logo, flames, showreel footage playing within the flames. Vibe checkpoint, not an obstacle: must load and enter fast. Build in graceful layers: logo alone → logo + flames → flames revealing footage.
2. **Landing / Frank's crossroads** (`/`) — Frank (mascot, trio-identity-as-one) greets the visitor: "what are you doing here?" Options route to video work / the Poddy / the Cinema / self-guided wandering. "Check out video work" is first and most prominent — it is the money path. Ignoring Frank and scrolling past is a valid answer he reacts to.
3. **Fresh Off The Grill** — newspaper-front-page section on the landing page below Frank. Recent/notable work across everything SZL does. This is the "we are active right now" heartbeat. Builds on the existing `proofItems` layer plus a `featured` flag; no new architecture needed.
4. **Sizzle Reel Studios wing** — the videography section (see below). The existing lineup/archive/detail system lives here unchanged.
5. **Personality wings** — the Cinema, the Poddy, the Portal, Meet the Snags.

### Videography wing (Sizzle Reel Studios) — where the sale happens

- **Wing front page:** showreel watchable in two taps from anywhere, then the credibility wall — artist names, venue/promoter/brand logos, prominently displayed. Clients and venues are display-worthy first-class content, not just relational metadata.
- **The Lineup, per-year posters:** one festival-lineup poster per year (2023, 2024, 2025 spine). Doubles as creative artefact and resume — the growth story is the poster filling up year over year. Artists can appear across multiple years at different tiers (support in 2023, headliner in 2025). Add a per-artist size/weight nudge in the data so each year's poster can be art-directed without code changes. Clicking a name → artist archive, optionally pre-filtered to that year.
- **Artist archive → event detail pages:** already built. Each event page is a proof unit: footage, stills, client/promoter/venue named, deliverables. Credibility compounds per entry.
- **Proof feed:** the receipts layer (artist reposted it, promoter used it, recap did numbers). Stays woven through artist and event pages as-is.
- **Services + contact:** boring on purpose. Clear services, clear booking path, no riddles.

### Personality wings

- **The Cinema** — hub for SIZZL3 skits and web series (Stanley's Playground, Killing of the Clones, SZL Vlogs...). Content model: `series` and `episode` entities with per-platform links. Core UI is the timeline/episode-order view (helps new viewers follow the story); the cinema-room skin (seats, screen) sits on top. YouTube is the preferred in-page embed source; TikTok/Instagram as outbound links per episode.
- **The Poddy (Sausage Sizzle Poddy)** — gets a page even while inactive: "on ice, back soon" in the trio's voice. Owning the hiatus beats hiding it.
- **The Portal** — the existential/weird wing. Branching-narrative state machine (three heads, "trust one", multiple-choice storylines). Rewards (discount codes, secret merch) deferred: build the narrative engine with placeholder rewards; store integration is its own later project (store platform TBD — ask user when relevant). Can grow over time from branching story toward Myst-style point-and-click (pre-rendered/360 scenes with hotspots — looks expensive, runs cheap). Filmed-footage-as-scenes (FMV style) plays to the trio's videography skills and is bandwidth-cheap.
- **Meet the Snags** — team page, three portrait-frame cards, roles + personality copy + links. Old `team.json` / `Collective.tsx` from the legacy build can be cannibalised. Easy early ship.

### Frank (the mascot layer)

- Persistent layer in the site shell — survives navigation, "comes with you" across pages. Knows current page, where you came from, and what you answered at the crossroads; reacts contextually (idle comments per page, quiet in the cinema, different mood in the Portal).
- Dismissible with one click; doesn't guilt-trip (or does, exactly once).
- **Visual form: animated pixel art**, small (8–16-bit feel, ~32×32/64×64 base, integer-scaled for crispness). Sprite-sheet loops: idle, blink, point, react, judge. A few KB — near-zero bandwidth cost.
- **The fidelity shift (Portal only):** corner Frank turns to camera and becomes detailed, rotoscoped pixel art — eerie because it breaks the established low-fi baseline. Amplifiers: Frank leaving his corner box, page pixels degrading toward him, frame rate shifting from chunky 8fps sprite timing to fluid 24fps rotoscoped motion. Produced from *filmed footage* run through an automatable pixelation pipeline (downscale, palette quantization, dithering, chunky frame timing) — a script the trio can drop footage into. Video only loads inside the Portal.
- Frank's design: has an ideal/canonical look but can vary. Exact design not blocking — prototype the whole Frank system (corner placement, dialogue, page-awareness, memory) with a placeholder sprite; real art drops in later. Pixel-art sprite set may be a small commission if no one in the trio draws.
- Dialogue as text bubbles (silent-autoplay-safe for Instagram in-app browser). Audio is a possible later upgrade behind tap-to-unmute.

## Build Sequencing (agreed)

**Phase 1 — the commercial job (ship this first):**

1. Videography wing to done-done: real content in, per-year lineup posters, client/venue credibility wall.
2. Landing page restructured into Frank's crossroads (placeholder Frank sprite is fine) + Fresh Off The Grill.
3. Enter screen upgrade (flames/showreel) in its graceful-degradation layers.

**Phase 2 — the personality wings, each one a postable "the site got weirder" moment:**

4. Meet the Snags (easy win, could even ship in phase 1).
5. The Cinema.
6. The Portal narrative engine, then eerie-Frank fidelity shift, then reward/store wiring.

## Carried Forward From the SRS Build (still valid)

- Next.js App Router + TypeScript + Tailwind v4 stack.
- Preview gating: when `SITE_PASSWORD` is set, public routes gate and redirect to `/preview`.
- The lineup/archive/detail route system under `/our-work` — do not collapse it; it becomes the videography wing's core.
- Typed relational content model (site config, services, artists, projects/events, venues, clients/promoters) with batch files under `content/srs/batches/` and helpers in `lib/srs/data.ts`.
- Proof feed layer: `content/srs/proof-items.ts` + `components/site/ProofFeed.tsx`.
- Docs: `docs/sizzle-reel-rebuild-plan.md`, `docs/content-population-checklist.md` (pre-date the umbrella direction; read with that in mind).

## Current State

### Done

- SRS route architecture, global shell, preview gating, lineup/archive/detail system, scalable content schema, proof feed — all in place and rendering against development seed data.
- Concept/mockup pass for the umbrella direction (six sketched screens: enter screen, Fresh Off The Grill, per-year lineup, the Portal, the Cinema, Meet the Snags) — discussed and mapped to architecture in this session.

### Not Done

- Everything in the umbrella structure above that isn't the existing SRS wing: Frank layer, crossroads landing, Fresh Off The Grill layout, per-year posters, credibility wall, Cinema, Poddy page, Portal, Meet the Snags.
- All the SRS content gaps from the previous roadmap still stand: temporary seed copy everywhere, inferred poster tiers, placeholder media URLs, unconfirmed venue/client metadata, inferred proof items, no real stills/thumbnails.
- Legacy files from the pre-SRS build still not cleaned up (`app/home`, old `components/*.tsx`, old `content/*.json`) — though `team.json`/`Collective.tsx` are now candidates for reuse in Meet the Snags.
- Roadmap docs in `docs/` not yet updated to umbrella direction.

## Highest-Impact Next Step

Phase 1, item by item — start with restructuring the landing page into Frank's crossroads + Fresh Off The Grill (establishes the umbrella skeleton), then the per-year lineup posters and credibility wall, in parallel with the real-content pass from the previous roadmap (that content order is unchanged: site copy → artists → projects → venues → clients → proof items).

## Needed From User

Everything in the previous roadmap's content list still applies (homepage copy, services, artists, projects/events, venues, clients, media assets, proof items). New additions:

- **Frank:** dialogue voice/tone samples; crossroads options wording; whether anyone in the trio draws pixel art or if the sprite set is a commission.
- **Per-year lineups:** which artists belong to which year(s), and per-year tier/size calls.
- **Credibility wall:** which client/venue/brand names and logos are cleared to display.
- **Cinema:** series list, episode lists with platform links, preferred watch order.
- **Poddy:** name/branding confirmation, hiatus copy, any existing episodes to link.
- **Portal:** storyline content when ready; store platform decision when rewards become real.
- **Meet the Snags:** names/roles/bios/photos (or pixel portraits) for the three of you.

## Files To Reopen First Next Session

- `ROADMAP.md`
- `app/(site)/page.tsx` (becomes Frank's crossroads + Fresh Off The Grill)
- `app/(site)/layout.tsx` (Frank lives in the shell)
- `content/srs/site.ts`
- `content/srs/proof-items.ts`
- `lib/srs/data.ts`
- `docs/sizzle-reel-rebuild-plan.md` (needs umbrella-direction update)

## Resume State

If resuming later, treat the project like this:

- Direction: SZL umbrella site with the SRS videography wing inside it — this supersedes the old "SRS-only, architecture locked" framing.
- The `/our-work` lineup/archive/detail system and the typed batch-content workflow remain locked — do not redesign or collapse them.
- The weird stays ambient on the business path, concentrated in its own wings.
- Phase 1 (videography wing done-done, crossroads landing, Fresh Off The Grill) ships before phase 2 (Snags, Cinema, Portal).
- Frank is a persistent shell layer, prototyped with a placeholder sprite — don't block on final art.

## Resume Phrase

If you start a new chat and say:

`Open roadmap.`

That should be treated as:

- read `ROADMAP.md` first
- use it as the source of truth for current project state
- continue from the highest-impact next step
- reopen the listed files before making new changes
- keep the locked systems locked unless the user explicitly changes direction

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

- No code changes this session (concept/direction session); `npm run build` last verified passing at commit `c938088`.
- Mockup reference: user's six-screen sketch shared in-session (2026-07-21).
