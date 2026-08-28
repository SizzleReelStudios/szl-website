# Sizzle Reel Studios V1 — Visual Language

This document captures the intended colourway and visual behaviour for the first public Sizzle Reel Studios-focused version of `szl.au`.

The V1 site should feel like a dark room being intermittently hit by red production lighting: mostly black, grey and dirty white, with red used sparingly as energy, illumination and atmosphere.

## Core principle

**RED IS LIGHT, NOT PAINT.**

Red should normally appear as:

- beams
- reflected light
- edge light
- haze / glow
- subtle hover energy
- tiny status / section markers
- accents already present naturally inside footage

Red should not usually appear as:

- large flat red page backgrounds
- every button being red
- every headline being red
- broad red panels or cards
- generic esports / gaming neon treatment

The target balance is approximately:

- 80% black / near-black
- 15% white / grey
- 5% red

That small amount of red should carry disproportionate visual weight.

## Palette

| Role | Token | Hex | Use |
| --- | --- | --- | --- |
| Absolute black | `--szl-black` | `#000000` | Primary background |
| Carbon | `--szl-carbon` | `#070707` | Media shells / secondary surfaces |
| Charcoal | `--szl-charcoal` | `#111111` | Alternate dark surfaces |
| Graphite | `--szl-graphite` | `#1E1E1E` | Borders / raised dark UI |
| Mid grey | `--szl-grey` | `#777777` | Low-priority labels |
| Silver | `--szl-silver` | `#B5B5B5` | Supporting copy |
| Dirty white | `--szl-white` | `#F1F1EF` | Main typography |
| Deep blood red | `--szl-red-dark` | `#65090C` | Low-energy red atmosphere |
| SZL red | `--szl-red` | `#B5141B` | Main brand red |
| Signal red | `--szl-red-signal` | `#E31B23` | Small strong highlights |
| Hot red | `--szl-red-hot` | `#FF3038` | Glow cores only |

Avoid default pure `#FF0000` as a general UI colour. The visual direction needs depth: burgundy, crimson and hot-red highlights against crushed blacks.

## Tonal behaviour

### Black

Black is the dominant design surface. Sections should feel carved out of darkness rather than placed on grey cards.

Use slight shifts between `#000000`, `#030303`, `#050505`, `#070707` and `#111111` to create hierarchy without turning the site into a dashboard.

### White

Primary type is dirty white rather than bright blue-white. Large typography should feel cinematic and slightly printed rather than sterile.

### Grey

Grey creates hierarchy. Metadata, place names, dates and explanatory text should fall away naturally from the main type.

### Red

Red is an event. It should feel like stage lighting, a portal, brake lights, LED spill, smoke catching light, reflected neon or a beam cutting through darkness.

## Imagery

Prefer source imagery that already belongs in this world:

- red practical lighting
- dark crowds
- silhouettes
- smoke / haze
- strong contrast
- monochrome or desaturated BTS
- silver-grey skin against red environmental light
- stage lights, club lights and real practical sources
- night exteriors with red reflection

Do not force every image through the same red LUT. Strong original colour photography can remain in colour when it is better for the work. The neutral site surrounding it should make the footage itself feel vivid.

For branded editorial imagery — especially `Meet The Snags` — desaturated subjects with hard red environmental light are strongly on-direction.

## Typography

The typography should be much louder than the UI.

Use:

- huge condensed white display type
- tight tracking on hero / project names
- tiny wide-tracked uppercase labels
- restrained paragraph copy
- very little decorative typography

The intended hierarchy is:

1. brand / project name
2. category or section statement
3. supporting line
4. metadata

The site should never feel text-heavy.

## Interaction

Motion and hover behaviour should stay restrained.

Useful treatments:

- project thumbnail subtly scales on hover
- border catches a faint red edge
- white type gains a very soft red glow
- thin red line or point becomes brighter
- cards move only a few pixels
- grayscale / neutral imagery can pick up red light on hover

Avoid:

- constant glowing animations
- pulsing neon borders everywhere
- large red hover fills
- excessive shake / glitch
- anything that makes the site feel like a gaming landing page

## Hero

Until real showreel media replaces the placeholder, the hero should simulate the visual language with:

- near-black field
- subtle grid / texture
- central red light beam
- dark vignette
- large centered `SIZZLE REEL STUDIOS`
- `MUSIC. NIGHTLIFE. FILM.` subordinate to the brand name
- `The next best thing to being in the room.` as supporting line

Once real hero footage is introduced, the footage should provide most of the colour and energy. Any synthetic red glow behind it should be reduced or removed if it competes with the footage.

## Site chrome

The fixed / sticky interface should remain almost completely monochrome.

Header:

- `SZL` mark at top left
- small grey `Perth, WA`
- Work / About / Contact
- Enquire outline button
- red may appear as subtle glow on interaction, not as a permanent red nav bar

Footer:

- black
- white / grey typography
- tiny red light marker is acceptable

## V1 scope

This visual language is for the simple Sizzle Reel Studios-first public V1 of `szl.au`.

Current V1 content hierarchy:

1. Hero
2. Selected Work
3. From The Room
4. Recent Work
5. Worked With
6. Meet The Snags
7. Contact

The deeper SZL architecture — Frank, Portal, Cinema, Poddy, artist archives, venue/client relationships and other future concepts — remains in the repo but is not part of this V1 public visual experience.

Future SZL experiences may expand this language, but should treat this document as the baseline for the Sizzle Reel Studios production identity unless intentionally superseded.

## Implementation note

The colour tokens and initial lighting utilities live in `app/globals.css`.

Current helper classes include:

- `.szl-hero-field`
- `.szl-red-beam`
- `.szl-red-rule`
- `.szl-media-placeholder`
- `.szl-showcase-placeholder`
- `.szl-snag-placeholder`
- `.szl-media-shell`
- `.szl-red-label`
- `.szl-link-glow`
- `.szl-primary-cta`
- `.szl-worked-with`

When adding future V1 components, prefer these shared principles/tokens over introducing unrelated accent colours or one-off warm orange treatments.
