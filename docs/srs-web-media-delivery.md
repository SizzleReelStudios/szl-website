# Sizzle Reel Studios — Web Media Delivery & DaVinci Resolve Export Spec

Status: V1 baseline research and implementation guidance, August 2026.

This document defines how Sizzle Reel Studios should prepare, store, load and display video and still media on `szl.au` without turning the site into a giant download.

The core principle is:

> **STILL FIRST → TINY PREVIEW ON DEMAND → ADAPTIVE STREAM FOR THE FULL VIDEO.**

The site can contain a large catalogue of moving-image work, but the browser should only download the media a visitor is actually likely to watch.

This document is intentionally split between:

- production/export settings in DaVinci Resolve
- delivery/storage decisions
- frontend playback behaviour
- thumbnail/poster workflow
- future project data structure

Provider capabilities, browser support and pricing can change. Re-check external service pricing/capabilities before making a long-term infrastructure decision.

---

## 1. Three-tier media model

Every important project can eventually have three distinct web assets:

1. **Poster / selected still** — instant visual representation.
2. **Preview clip** — short, silent, lightweight MP4 used for hover/visible motion.
3. **Full video** — adaptive HLS/DASH stream loaded only when the visitor chooses to watch.

Example:

```text
PROJECT
├── poster.jpg
├── preview.mp4
└── full video stream ID / playback URL
```

These are different jobs and should not be treated as one asset.

### Recommended delivery by site feature

| Site use | Media delivered | Typical load behaviour |
| --- | --- | --- |
| Hero | short silent MP4 + poster | poster immediately; video starts when appropriate |
| Selected Work card | poster + 5–8 s MP4 | poster first; preview source attached on hover |
| From The Room | poster + short vertical MP4 | lazy; only nearby/visible items may move |
| Recent Work | mostly stills/text | lazy images only |
| Full music video | adaptive stream | player/stream only after click |
| Full DJ set | adaptive stream | player/stream only after click |
| Interview / long-form | adaptive stream | player/stream only after click |

The page should never open and immediately fetch every video file or instantiate dozens of heavy embedded players.

---

## 2. Hover-preview behaviour

For Selected Work and similar cards, use the poster image as the permanent visual base layer.

Recommended behaviour:

```text
page load
  ↓
poster image is visible immediately
  ↓
mouse enters card
  ↓
attach preview MP4 src if not already loaded
  ↓
video begins loading
  ↓
when video can play, fade it over poster
  ↓
mouse leaves
  ↓
pause video; poster remains underneath
```

Important implementation rules:

- use native `<video>` for short previews
- `muted`
- `playsInline`
- `loop`
- normally `preload="none"`
- preferably do not attach the preview `src` until hover/intent
- keep the poster underneath the video so a loading state never becomes a black rectangle
- fade video opacity in only after `canplay` / equivalent readiness
- pause on mouse leave
- do not restart network downloads unnecessarily if the visitor returns to the card
- respect `prefers-reduced-motion`

### Mobile

Desktop hover behaviour should not be blindly reproduced on mobile.

V1 default:

- show the poster
- tapping opens the project/full video
- no automatic downloading of every card preview

A later enhancement can use `IntersectionObserver` so one predominantly visible card moves at a time, but this should be tested against real mobile data/performance first.

---

## 3. Full-video playback

Long-form media should not be shipped as one giant MP4 from the Git repository or Vercel deployment.

Use an adaptive streaming service/CDN. The service creates multiple playback renditions and serves the appropriate quality for the viewer’s connection.

Conceptually:

```text
Resolve ingest master
      ↓
video streaming provider
      ↓
360p / 480p / 720p / 1080p adaptive renditions
      ↓
HLS/DASH playback
```

### Current V1 preference

**Cloudflare Stream** is the current practical V1 preference for full SRS videos because it combines upload, transcoding, storage, adaptive delivery and player infrastructure, and is suitable for a catalogue containing long DJ sets.

**Mux** is an excellent alternative if later requirements prioritise features such as higher-end developer tooling, per-title encoding behaviour, 4K workflows, generated imagery/storyboards, or more advanced playback tooling.

Do not hard-code the whole site around one provider. Project data should store a provider + playback/asset identifier so infrastructure can change later.

### Player loading

Do not render/load a heavy player for every project card.

Better flow:

```text
poster + play button
      ↓ click
load player code / iframe / stream
      ↓
start adaptive playback
```

Lazy-load off-screen full players on project pages too.

---

## 4. Direct preview MP4 codec

For directly served short clips, the default remains:

- container: **MP4**
- codec: **H.264 / AVC**
- progressive scan
- SDR Rec.709
- no audio for silent decorative previews
- Network Optimization / Fast Start enabled

Why H.264 for V1:

- broad browser/device decode support
- low implementation complexity
- fast startup for short clips
- very good fit for 5–10 second static MP4 previews

Do not use GIF for moving portfolio footage.

H.265/HEVC may compress more efficiently in some cases, but it is not the default direct-preview format because compatibility and simple decoding are more important for these tiny web loops.

---

## 5. DaVinci Resolve preset — Hover Landscape

Suggested preset name:

`SZL WEB - Hover 720p Landscape`

Starting settings:

| Resolve setting | Recommendation |
| --- | --- |
| Format | MP4 |
| Codec | H.264 |
| Resolution | 1280 × 720 |
| Frame rate | 25 fps |
| Duration | 5–8 seconds |
| Quality / bitrate | 2,500–4,000 Kb/s |
| Starting target | ~3,500 Kb/s |
| Encoding profile | High |
| Frame reordering | On when available |
| Network Optimization | On |
| Audio | Off / do not export audio track |
| Data Levels | Auto unless a specific delivery issue requires override |
| Colour | SDR Rec.709 |
| Scan | Progressive |

A 6-second clip at 3.5 Mb/s is roughly 2.6 MB before container overhead. Treat that as a useful ballpark, not a hard target.

Nightlife footage is difficult to compress because of haze, strobes, grain/noise, crowds and rapidly changing light. If a 2.5 Mb/s encode falls apart, raise bitrate rather than accepting ugly macroblocking on portfolio work.

---

## 6. DaVinci Resolve preset — Hover Vertical

Suggested preset name:

`SZL WEB - Hover 720p Vertical`

Starting settings:

| Resolve setting | Recommendation |
| --- | --- |
| Format | MP4 |
| Codec | H.264 |
| Resolution | 720 × 1280 |
| Frame rate | 25 fps |
| Duration | 4–7 seconds |
| Quality / bitrate | 2,500–3,500 Kb/s |
| Encoding profile | High |
| Network Optimization | On |
| Audio | Off |
| Colour | SDR Rec.709 |

For physically small cards, test a lower variant:

- 540 × 960
- ~1,800–2,500 Kb/s

Use the lower version only if it remains visually convincing on the actual site. Judge in-browser at the real display size, not zoomed to 100% in Resolve.

---

## 7. DaVinci Resolve preset — Hero Background

Suggested preset name:

`SZL WEB - Hero 1080p`

Starting settings:

| Resolve setting | Recommendation |
| --- | --- |
| Format | MP4 |
| Codec | H.264 |
| Resolution | 1920 × 1080 desktop |
| Frame rate | 25 fps |
| Duration | 8–12 seconds; favour ~8–10 s |
| Quality / bitrate | 5,000–8,000 Kb/s |
| Encoding profile | High |
| Network Optimization | On |
| Audio | Off |
| Colour | SDR Rec.709 |

Keep the hero short. It is atmosphere, not a complete showreel.

Useful content rhythm:

```text
crowd hit
artist
camera move
lighting moment
hands / detail
strong finishing shot
loop
```

### Desktop/mobile variants

Consider two hero encodes once the real hero is installed:

**Desktop**
- 1920 × 1080
- roughly 5–8 Mb/s

**Mobile**
- crop/orientation designed for phone viewport
- 720p-class resolution
- roughly 2.5–4 Mb/s

Use media-query-aware `<source>` selection so a phone does not need to download a desktop-sized background video.

Aim for a hero file that feels visually clean while remaining only a few MB where possible. Test with real nightlife footage rather than relying purely on bitrate math.

---

## 8. DaVinci Resolve preset — Streaming Ingest Master

Suggested preset name:

`SZL WEB - Stream Master 1080p`

This is the upload file given to Cloudflare Stream/Mux, not the file sent directly to a viewer.

Starting settings:

| Resolve setting | Recommendation |
| --- | --- |
| Format | MP4 |
| Codec | H.264 |
| Resolution | 1920 × 1080 |
| Frame rate | 25 fps / match timeline |
| Quality / bitrate | ~10,000–12,000 Kb/s starting point for complex nightlife footage |
| Encoding profile | High |
| Network Optimization | On |
| Audio | AAC |
| Audio bitrate | 192–320 Kb/s |
| Audio sample rate | 48 kHz |
| Colour | SDR Rec.709 |
| Scan | Progressive |

The streaming provider then creates the actual adaptive playback renditions.

The 10–12 Mb/s recommendation is a practical SRS ingest starting point for noisy/high-motion nightlife material, not a mandatory provider requirement. If the provider’s recommended ingest settings change, prefer current provider guidance.

### ProRes ingest?

Do not default every long DJ set to a huge ProRes upload merely because it is technically higher quality.

Reasonable policy:

- hero portfolio film / major music video: high-quality mezzanine/ProRes may be justified
- 60–150 minute full set: good H.264 ingest is normally far more practical

Keep original production masters in the normal SRS archive regardless of what web ingest copy is made.

---

## 9. Frame-rate policy

SRS normally works in a 25 fps delivery environment.

Web preview default:

**25 fps.**

Do not export routine website loops at 50/60 fps just because the source was captured at a high frame rate.

High-frame-rate camera material can still be used for slow motion, but the final web timeline/render should normally remain 25 fps.

Benefits:

- fewer frames to encode/decode
- smaller files at comparable visual quality
- matches the production baseline

---

## 10. Network Optimization / Fast Start

For every directly served browser MP4:

**Network Optimization → ON**

The objective is to place important MP4 metadata near the beginning of the file so playback can begin before the entire asset downloads.

Treat this as a standard part of every SRS web MP4 preset.

---

## 11. Poster / selected-thumbnail workflow

The poster is not a random first frame. For important work it is art-directed.

### Resolve workflow

1. Open the final graded timeline/clip.
2. Find the strongest representative frame.
3. On the Color page, Grab Still.
4. Export the still from the Gallery.
5. Keep a high-quality JPEG master at an appropriate crop/aspect ratio.

Suggested source dimensions:

**Landscape Selected Work**
- around 1920 × 1080 or larger source

**Vertical/social card**
- 1080 × 1920, or the actual intended vertical crop

**Portrait/editorial card**
- create the crop the design actually uses rather than letting arbitrary centre-cropping decide composition

### Web image delivery

Use Next.js `<Image>` for site stills/posters.

The website should handle responsive output sizes and modern browser image formats. The production workflow does not need to manually create a folder containing every responsive WebP/AVIF size.

Preferred workflow:

```text
Resolve
  ↓
high-quality selected JPEG/poster master
  ↓
Next Image optimisation
  ↓
responsive web image
```

For key hero cards, manual frame selection is preferred even if the streaming provider can generate thumbnails automatically.

### Generated provider thumbnails

Streaming providers such as Cloudflare Stream and Mux can generate stills from a chosen video timestamp. This can be useful for archive-scale automation later.

Future project data could therefore support either:

- explicit poster image path
- generated poster timestamp from stream asset

Art-directed posters should win for flagship/Selected Work projects.

---

## 12. Recommended project media data model

V1 should move toward a provider-agnostic shape similar to:

```ts
{
  title: "Hannah Laing",

  poster: {
    src: "/media/hannah-laing-poster.jpg",
    alt: "Hannah Laing performing in Perth",
    position: "50% 42%"
  },

  preview: {
    src: "https://cdn.example/.../hannah-laing-preview.mp4",
    width: 1280,
    height: 720
  },

  video: {
    provider: "cloudflare",
    playbackId: "abc123"
  },

  aspectRatio: "16/9"
}
```

Important separation:

- `poster` = presentation
- `preview` = lightweight motion
- `video` = actual playback asset

Do not collapse all three into a single `mediaUrl` field.

---

## 13. Storage / delivery policy

### Git / Vercel repository

Good for:

- code
- lightweight UI assets
- small logos/icons
- development placeholders

Do not make the Git repository the long-term video library.

### Poster images

Can live in the site/public image pipeline when sensible, using Next Image optimisation.

### Hover preview MP4s

Use object storage/CDN or another efficient static-media origin rather than treating the Git repository as a video archive.

If the Cloudflare stack is adopted broadly, an object-storage/CDN solution in that ecosystem may be operationally convenient, but the component/data model should not depend on a single vendor URL scheme.

### Full videos

Use adaptive streaming provider infrastructure.

Current V1 preference: Cloudflare Stream.

---

## 14. Performance rules for the website implementation

The following should be treated as requirements unless a specific design reason overrides them:

1. **Poster first.** Every video card has a usable still fallback.
2. **Do not preload the whole catalogue.**
3. **Short previews use native MP4 video, not an embedded full player.**
4. **Attach preview sources on user intent where practical.**
5. **Pause preview when no longer needed.**
6. **Lazy-load off-screen images and players.**
7. **Do not instantiate dozens of streaming embeds on page load.**
8. **No audio track in silent decorative loops.**
9. **Use `playsInline` for mobile-safe inline playback.**
10. **Respect reduced-motion preferences.**
11. **Full player loads after explicit click where practical.**
12. **Test on a real phone/mobile connection, not only desktop fibre/NBN.**
13. **Judge compression using actual dark club footage; it is harder to encode than clean daylight footage.**

---

## 15. Recommended V1 media component architecture

Build one reusable media component rather than bespoke playback logic in every section.

Concept:

```text
SrsMediaCard
├── poster
├── preview video
├── title / metadata
├── aspect ratio
├── hover/intent state
├── reduced-motion handling
└── click target / full playback action
```

Potential props/data:

```ts
poster
previewVideo
aspectRatio
title
subtitle
objectPosition
playbackProvider
playbackId
```

Benefits:

- one place to fix loading behaviour
- one place to tune fades/playback
- consistent performance across Selected Work and From The Room
- later archive pages inherit the same optimisation

---

## 16. Practical SRS export presets to save in Resolve

Create and keep these presets once real media population starts:

| Preset | Use |
| --- | --- |
| `SZL WEB - Hover 720p Landscape` | Selected Work/project cards |
| `SZL WEB - Hover 720p Vertical` | From The Room/social cards |
| `SZL WEB - Hero 1080p` | homepage background/showreel loop |
| `SZL WEB - Stream Master 1080p` | Cloudflare Stream/Mux ingest |
| `SZL WEB - Poster Frame` | procedural reminder for selected still workflow |

The goal is to remove media-delivery decision fatigue. Editors should know which preset to use for each website asset.

---

## 17. V1 implementation sequence

Recommended order when converting current placeholders to real media:

1. Implement reusable poster/preview media card.
2. Add one real Selected Work poster + hover preview.
3. Test desktop hover, slow network, mobile and reduced-motion behaviour.
4. Tune bitrate/resolution from that real example.
5. Populate the remaining Selected Work cards.
6. Build the vertical From The Room variant.
7. Add real hero video last, once playback behaviour is proven.
8. Integrate Cloudflare Stream/Mux only when the first full project playback is needed.
9. Do not populate dozens of assets before the component behaviour is validated.

---

## 18. External references used for this baseline

Re-check these when revisiting the architecture:

- MDN `<video>` reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video
- MDN web video performance: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/video
- Next.js Image docs: https://nextjs.org/docs/app/getting-started/images
- Next.js Image API: https://nextjs.org/docs/pages/api-reference/components/image
- Cloudflare Stream docs: https://developers.cloudflare.com/stream/
- Cloudflare Stream upload guidance: https://developers.cloudflare.com/stream/uploading-videos/
- Cloudflare Stream FAQ / encoding guidance: https://developers.cloudflare.com/stream/faq/
- Cloudflare Stream thumbnails: https://developers.cloudflare.com/stream/viewing-videos/displaying-thumbnails/
- Cloudflare Stream pricing: https://developers.cloudflare.com/stream/pricing/
- Mux static MP4 renditions: https://www.mux.com/docs/guides/enable-static-mp4-renditions
- Mux image extraction: https://www.mux.com/docs/guides/get-images-from-a-video
- Mux video quality levels: https://www.mux.com/docs/guides/use-video-quality-levels
- Mux encoding overview: https://www.mux.com/encoding
- Blackmagic Design DaVinci Resolve documentation hub: https://www.blackmagicdesign.com/support/family/davinci-resolve-and-fusion

---

## Short version

For future sessions that only need the decision:

> **Use a high-quality still for first paint. Load a 5–8 second silent H.264 MP4 only when a card is hovered/otherwise intentionally activated. Use adaptive HLS streaming for full videos and long DJ sets. Export web previews at 25 fps with Network Optimization enabled, and do not let the page preload the video catalogue.**
