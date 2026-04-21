# Content Population Checklist

Last updated: 2026-04-21

This checklist is designed for the current Sizzle Reel Studios data structure. It is written to let you send content in batches without changing routing logic.

## HOMEPAGE COPY

### Required fields

- `home.eyebrow`
- `home.headline`
- `home.subheadline`
- `home.proofLine`
- `home.ctaPrimary`
- `home.ctaSecondary`
- `about.intro`
- `about.story`
- `contact.email`
- `contact.instagram`

### Optional fields

- `seo.title`
- `seo.description`
- `brand.shortName`
- `brand.location`

### Example format

```ts
home: {
  eyebrow: "Perth nightlife production",
  headline: "Video that keeps the weight of the room.",
  subheadline:
    "We shoot DJs, artists, promoters, clubs, and festivals without sanding off the energy that made the night worth filming.",
  proofLine:
    "Built for lineups, club rooms, artist rollouts, aftermovies, and fast-turn social edits.",
  ctaPrimary: "View The Lineup",
  ctaSecondary: "Start An Enquiry",
}
```

### Maps to

- [content/srs/site.ts](/Users/home/projects/szl-website/content/srs/site.ts:1)

## SERVICES

### Required fields

- `id`
- `slug`
- `name`
- `summary`
- `deliverables`

### Optional fields

- none in the current model

### Example format

```ts
{
  id: "event-coverage",
  slug: "event-coverage",
  name: "Event Coverage",
  summary: "Full-night coverage built for recaps, promos, and social cutdowns.",
  deliverables: ["aftermovies", "recaps", "vertical edits", "photo grabs"],
}
```

### Maps to

- [content/srs/site.ts](/Users/home/projects/szl-website/content/srs/site.ts:37)

## ARTISTS

### Required fields

- `id`
- `slug`
- `name`
- `posterTier`
- `location`
- `genres`
- `summary`
- `status`

### Optional fields

- none in the current model

### Example format

```ts
{
  id: "macky-gee",
  slug: "macky-gee",
  name: "Macky Gee",
  posterTier: "headliner",
  location: "UK",
  genres: ["Drum and Bass"],
  summary: "High-impact drum and bass act with filmed appearances across Perth shows.",
  status: "published",
}
```

### Maps to

- [content/srs/batches/artists.batch.ts](/Users/home/projects/szl-website/content/srs/batches/artists.batch.ts:1)
- consumed by [content/srs/artists.ts](/Users/home/projects/szl-website/content/srs/artists.ts:1)

## PROJECTS / EVENTS

### Required fields

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
- `gallery`
- `published`

### Optional fields

- `thumbnail`
- `embedUrl`

### Example format

```ts
{
  id: "macky-gee-villa-2025",
  slug: "villa-appearance-2025",
  artistSlugs: ["macky-gee"],
  eventName: "Macky Gee at Villa",
  title: "Macky Gee at Villa",
  date: "2025-02-14",
  venueSlug: "villa-perth",
  clientSlug: "villa-nightclub",
  serviceSlugs: ["event-coverage", "artist-content"],
  summary:
    "Coverage built around crowd energy, headline moments, and fast-turn artist/social edits.",
  deliverables: ["event recap", "vertical clips", "artist selects"],
  thumbnail: "/media/projects/macky-gee-villa/thumb.jpg",
  gallery: [
    {
      type: "image",
      src: "/media/projects/macky-gee-villa/still-01.jpg",
      alt: "Macky Gee performing at Villa",
    },
    {
      type: "video-embed",
      src: "https://www.instagram.com/reel/XXXXXXXX/",
      alt: "Embedded event clip",
    },
  ],
  embedUrl: "https://www.instagram.com/reel/XXXXXXXX/",
  published: true,
}
```

### Maps to

- [content/srs/batches/projects.batch.ts](/Users/home/projects/szl-website/content/srs/batches/projects.batch.ts:1)
- consumed by [content/srs/projects.ts](/Users/home/projects/szl-website/content/srs/projects.ts:1)

## VENUES

### Required fields

- `id`
- `slug`
- `name`
- `city`
- `state`

### Optional fields

- none in the current model

### Example format

```ts
{
  id: "villa-perth",
  slug: "villa-perth",
  name: "Villa",
  city: "Perth",
  state: "WA",
}
```

### Maps to

- [content/srs/batches/venues.batch.ts](/Users/home/projects/szl-website/content/srs/batches/venues.batch.ts:1)
- consumed by [content/srs/venues.ts](/Users/home/projects/szl-website/content/srs/venues.ts:1)

## CLIENTS / PROMOTERS

### Required fields

- `id`
- `slug`
- `name`
- `kind`

### Optional fields

- `website`

### Example format

```ts
{
  id: "villa-nightclub",
  slug: "villa-nightclub",
  name: "Villa Nightclub",
  kind: "club",
  website: "https://example.com",
}
```

### Maps to

- [content/srs/batches/clients.batch.ts](/Users/home/projects/szl-website/content/srs/batches/clients.batch.ts:1)
- consumed by [content/srs/clients.ts](/Users/home/projects/szl-website/content/srs/clients.ts:1)

## MEDIA ASSETS

### Required fields

- for each gallery item: `type`, `src`, `alt`

### Optional fields

- project-level `thumbnail`
- project-level `embedUrl`
- multiple gallery items per project

### Example format

```ts
thumbnail: "/media/projects/macky-gee-villa/thumb.jpg",
gallery: [
  {
    type: "image",
    src: "/media/projects/macky-gee-villa/still-01.jpg",
    alt: "Wide shot of the crowd during Macky Gee set",
  },
  {
    type: "video-embed",
    src: "https://www.instagram.com/reel/XXXXXXXX/",
    alt: "Highlight reel from the event",
  },
]
```

### Maps to

- embedded inside each project in [content/srs/batches/projects.batch.ts](/Users/home/projects/szl-website/content/srs/batches/projects.batch.ts:1)

## Replace First For Maximum Visible Progress

Replace these in this order:

1. `siteConfig.home` and `siteConfig.about`
2. the seed artist entries
3. first 6 to 12 real project/event entries
4. supporting venue and client records for those projects
5. final services copy

Why this order:

- homepage copy makes the site feel real immediately
- real artist names make the lineup page credible immediately
- a first batch of project entries activates both artist archive pages and detail routes at once
- venues/clients complete metadata rendering across the archive
- services can be tightened once the actual work examples are visible
