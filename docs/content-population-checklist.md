# Content Workbook

Last updated: 2026-07-21

This is the intake form for turning the seed site into the real one. **Answers
in any format are fine** — dot points, a text message, a voice-memo transcript,
a screenshot of your notes app. Formatting it into code is Claude's job, not
yours. Fill in what you can, skip what you can't, send it in batches.

Sections are ordered by impact: each completed section visibly upgrades the
site the moment it lands.

---

## 1. Homepage + About copy (makes the site feel real immediately)

Fill in (or say "keep what's there" / "you draft it, we'll edit"):

- Hero headline: `____` (current placeholder: "One house. All the sizzle.")
- Hero subhead (1–2 sentences): `____`
- Proof line (one punchy credibility sentence): `____`
- Primary CTA label: `____` (current: from seed)
- Secondary CTA label: `____`
- About intro (2–3 sentences): `____`
- About story (a paragraph): `____`
- Contact email to display: `____`
- Instagram URL: `____`

→ Goes into `content/srs/site.ts`

## 2. Artists + year calls (makes the lineup credible immediately)

For **each artist** you've filmed:

- Name (exact display spelling): `____`
- Where they're from: `____`
- Genre(s): `____`
- One-line summary for their archive page: `____`
- **Which year posters they belong on, and at what size** — per year:
  - Year: `____` · Tier: headliner / featured / support · Bigger or smaller
    than others in that tier? (optional — this is the art-direction nudge)

Notes:
- An artist can be support in 2023 and headliner in 2025 — that growth story
  is the point of the year editions.
- Artists appear automatically on a year's poster if they have a logged event
  that year; the call above overrides tier/size or adds them without an event.
- ⚠️ There's a **demo-only 2024 edition** in `lineups.batch.ts` that gets
  deleted the moment real calls arrive.

→ Goes into `content/srs/batches/artists.batch.ts` + `lineups.batch.ts`

## 3. Projects / events (activates archives + detail pages at once)

For **each filmed event** (first 6–12 is plenty to start):

- Event name: `____`
- Date: `____`
- Artist(s) on it: `____`
- Venue: `____`
- Who booked/ran it (promoter/client): `____`
- What you delivered (recap, verticals, aftermovie…): `____`
- 1–2 sentence description: `____`
- Main clip link (YouTube/IG/TikTok): `____`
- Stills/thumbnail available? Where: `____`
- OK to publish? yes / no / ask-first: `____`

→ Goes into `content/srs/batches/projects.batch.ts`

## 4. Venues + clients (completes the credibility wall)

For each **venue**: name `____` · city `____` · state `____`

For each **client/promoter**: name `____` · what they are (promoter / club /
festival / artist / brand) `____` · website (optional) `____`

**Clearance call (important):** which of these names are we allowed to display
publicly on the "Worked With" wall? Any that need asking first? Any logos you
have as files (PNG/SVG) — the wall can swap names for logos where they exist.

→ Goes into `venues.batch.ts` + `clients.batch.ts`; wall renders automatically

## 5. Proof items (the receipts layer / Fresh Off The Grill)

For each **real social post** where your footage appeared in someone's rollout:

- Post URL: `____`
- Whose account posted it: `____` (and are they the artist, promoter, venue…)
- Platform: IG / TikTok / YouTube: `____`
- Type: carousel / reel / recap / tour-post: `____`
- Which event/artist it belongs to: `____`
- One-line note on why it matters ("used slide 3 of their tour recap"): `____`
- Exact slide/clip/timestamp if relevant: `____`

→ Goes into `content/srs/proof-items.ts`; feeds the homepage front page and
artist/event proof sections

## 6. Services (tighten once real work is visible)

- Final list of services: `____`
- One-line summary each: `____`
- Deliverables per service: `____`

→ Goes into `content/srs/site.ts`

## 7. Cinema (SIZZL3 wing)

For each **series** (Stanley's Playground, Killing of the Clones, SZL Vlogs, …):

- Series name + one-line description: `____`
- Status: screening / in production / coming soon: `____`
- **Episodes in watch order** — per episode: title `____` · date `____` ·
  YouTube link (preferred, embeds best) `____` · IG/TikTok links (outbound)
  `____` · one-line description `____`

→ Goes into the cinema series/episode batches (Phase 2 model)

## 8. Snags + Poddy + Frank

**Snags** (per member): name `____` · role `____` · short bio in your voice
`____` · photo or pixel-portrait preference `____`

**Poddy:** confirm the name/branding `____` · hiatus copy in your voice (or
"keep what's there") `____` · any existing episodes to link `____`

**Frank** (parked, but collect when inspiration hits): sample lines in his
voice `____` · crossroads option wording changes `____` · does anyone in the
trio draw pixel art, or is the sprite set a commission? `____`

---

## Fastest visible progress

Send sections in this order: **1 → 2 → 3 → 4 → 5**. That lights up the
homepage, the year posters, the archives, the credibility wall, and the proof
feed — the entire commercial path — before touching any Phase 2 wing.

## Schema reference (for whoever's coding, not for you)

Exact field shapes and file mappings for every entity live in the batch files
themselves (`content/srs/batches/*.batch.ts`, `content/srs/proof-items.ts`,
`content/srs/site.ts`) and `lib/srs/types.ts` — each batch file carries a
commented example entry. The previous version of this doc duplicated the
schemas here; the types are now the single source of truth.
