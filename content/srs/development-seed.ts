const deliverablesByServiceSlug: Record<string, string[]> = {
  "live-set-filming": [
    "TODO: confirm capture format",
    "TODO: confirm edit outputs",
  ],
  "event-recaps": [
    "TODO: confirm recap length",
    "TODO: confirm platform cutdowns",
  ],
  "artist-promo-content": [
    "TODO: confirm rollout assets",
    "TODO: confirm clip count",
  ],
  "social-clip-packages": [
    "TODO: confirm aspect ratios",
    "TODO: confirm clip volume",
  ],
  "multicam-coverage": [
    "TODO: confirm camera layout",
    "TODO: confirm deliverable formats",
  ],
  "interviews-bts": [
    "TODO: confirm interview structure",
    "TODO: confirm behind-the-scenes scope",
  ],
};

const clientKindsBySlug = {
  "open-decks": "promoter",
  "the-vault": "club",
  therapy: "promoter",
  houseology: "promoter",
  wildlands: "festival",
  habitat: "club",
} as const;

export const developmentSeed = {
  sourcePath: "/Users/home/Desktop/untitled folder/seed-data.json",
  sourceType: "temporary-development-seed",
  site: {
    brand: "Sizzle Reel Studios",
    location: "Perth, Western Australia",
    contact: {
      email: "muntzblake@gmail.com",
      phone: "+61 481 684 969",
      instagram: "https://instagram.com/sizzlereelstudios",
    },
  },
  homepage: {
    hero: {
      headline: "Production built for artists, events, and the energy around them.",
      subheading:
        "Sizzle Reel Studios is a Perth-based trio capturing nightlife, music, and culture through high-impact visual work — from full sets to raw moments in the crowd.",
      ctaPrimary: "View Our Work",
      ctaSecondary: "Enquire",
    },
    intro: "We don’t just film events — we capture what they actually feel like.",
    aboutSnippet:
      "Sizzle Reel Studios is a three-person production team working across clubs, festivals, and artist-led events.",
    servicesSnippet: "Live sets. Event recaps. Artist content.",
  },
  services: [
    {
      title: "Live Set Filming",
      description:
        "Multicam capture designed for full-length sets and high-quality playback.",
    },
    {
      title: "Event Recaps",
      description:
        "Fast-paced highlight edits built for social and post-event momentum.",
    },
    {
      title: "Artist Promo Content",
      description: "Short-form content tailored for DJs and artists.",
    },
    {
      title: "Social Clip Packages",
      description: "High-impact clips built for Instagram and TikTok.",
    },
    {
      title: "Multicam Coverage",
      description: "Deck, crowd, and roaming camera systems working together.",
    },
    {
      title: "Interviews & BTS",
      description: "Capturing the people behind the event.",
    },
  ],
  artists: [
    {
      name: "Macky Gee",
      slug: "macky-gee",
      featured: true,
      description:
        "UK drum and bass artist captured across high-energy live performance coverage.",
    },
    {
      name: "Ben Miller",
      slug: "ben-miller",
      featured: true,
      description: "Perth-based DJ featured across club and event coverage.",
    },
    {
      name: "Taiga",
      slug: "taiga",
      featured: false,
      description: "Local artist captured across nightlife environments.",
    },
    {
      name: "Bagel",
      slug: "bagel",
      featured: false,
      description: "Emerging act featured in club environments.",
    },
    {
      name: "Elektrix B2B Tomo",
      slug: "elektrix-b2b-tomo",
      featured: false,
      description: "Back-to-back set captured in live environments.",
    },
    {
      name: "Disrupta",
      slug: "disrupta",
      featured: true,
      description: "International drum and bass artist captured in Perth.",
    },
  ],
  venues: [
    { name: "The Vault", slug: "the-vault" },
    { name: "Villa Nightclub", slug: "villa-nightclub" },
    { name: "Port Beach Brewery", slug: "port-beach-brewery" },
    { name: "Metro City", slug: "metro-city" },
    { name: "Habitat", slug: "habitat" },
  ],
  clients: [
    { name: "Open Decks", slug: "open-decks" },
    { name: "The Vault", slug: "the-vault" },
    { name: "Therapy", slug: "therapy" },
    { name: "Houseology", slug: "houseology" },
    { name: "Wildlands", slug: "wildlands" },
    { name: "Habitat", slug: "habitat" },
  ],
  projects: [
    {
      artistSlug: "macky-gee",
      title: "Open Decks World Record",
      slug: "open-decks-world-record",
      date: "2025-08-03",
      venueSlug: "port-beach-brewery",
      clientSlug: "open-decks",
      description:
        "Multicam coverage capturing live performance and crowd energy.",
      media: [{ type: "embed", url: "https://instagram.com/reel/example1" }],
    },
    {
      artistSlug: "macky-gee",
      title: "The Vault Saturdays",
      slug: "vault-saturdays-macky-gee",
      date: "2025-06-14",
      venueSlug: "the-vault",
      clientSlug: "the-vault",
      description: "Live club performance capture with deck and crowd angles.",
      media: [{ type: "embed", url: "https://instagram.com/reel/example2" }],
    },
    {
      artistSlug: "ben-miller",
      title: "Therapy 006 Return Villa",
      slug: "therapy-006-return-villa",
      date: "2025-07-20",
      venueSlug: "villa-nightclub",
      clientSlug: "therapy",
      description: "High-energy set filmed with multicam coverage.",
      media: [{ type: "embed", url: "https://instagram.com/reel/example3" }],
    },
    {
      artistSlug: "taiga",
      title: "Habitat Night Series",
      slug: "habitat-night-series",
      date: "2025-05-10",
      venueSlug: "habitat",
      clientSlug: "habitat",
      description: "Club-focused coverage capturing late-night atmosphere.",
      media: [{ type: "embed", url: "https://instagram.com/reel/example4" }],
    },
    {
      artistSlug: "bagel",
      title: "Houseology Takeover",
      slug: "houseology-takeover",
      date: "2025-04-22",
      venueSlug: "port-beach-brewery",
      clientSlug: "houseology",
      description:
        "Day-to-night event coverage blending performance and environment.",
      media: [{ type: "embed", url: "https://instagram.com/reel/example5" }],
    },
    {
      artistSlug: "disrupta",
      title: "Wildlands Afterparty",
      slug: "wildlands-afterparty",
      date: "2025-01-01",
      venueSlug: "metro-city",
      clientSlug: "wildlands",
      description: "Festival afterparty coverage capturing peak energy.",
      media: [{ type: "embed", url: "https://instagram.com/reel/example6" }],
    },
  ],
} as const;

export const developmentSeedAudit = {
  assumptions: [
    "TODO: poster tiers are inferred from the seed file's featured boolean because lineup hierarchy is not defined yet.",
    "TODO: venue city and state are defaulted to Perth / WA because the seed file only provides venue names and slugs.",
    "TODO: client kinds are inferred from brand names because the seed file does not classify promoters, clubs, or festivals.",
    "TODO: project-to-service links are inferred from description keywords because the seed file does not define services per event.",
  ],
  missingFields: [
    "TODO: every project is missing a thumbnail image.",
    "TODO: every project is missing a still-image gallery.",
    "TODO: media links are example embeds and need replacing with final URLs.",
    "TODO: venue city/state values need confirmation from real production data.",
  ],
  weakSpots: [
    "Dates, project names, descriptions, and relationships are temporary seed content and should not be treated as final.",
    "Projects currently assume a single primary artist even though the data model supports multiple artist slugs later.",
    "The contact phone number exists in the seed file but is not surfaced in the current site config structure.",
    "Proof feed entries are inferred from project records and should be replaced with actual post references later.",
  ],
} as const;

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function inferProjectServiceSlugs(summary: string) {
  const serviceSlugs = new Set<string>();
  const lower = summary.toLowerCase();

  if (lower.includes("multicam")) {
    serviceSlugs.add("multicam-coverage");
  }

  if (lower.includes("live") || lower.includes("set")) {
    serviceSlugs.add("live-set-filming");
  }

  if (
    lower.includes("recap") ||
    lower.includes("highlight") ||
    lower.includes("afterparty") ||
    lower.includes("coverage")
  ) {
    serviceSlugs.add("event-recaps");
  }

  if (serviceSlugs.size === 0) {
    serviceSlugs.add("event-recaps");
  }

  return [...serviceSlugs];
}

export function getSeedServiceDeliverables(slug: string) {
  return deliverablesByServiceSlug[slug] ?? ["TODO: confirm deliverables"];
}

export function getSeedClientKind(slug: string) {
  return clientKindsBySlug[slug as keyof typeof clientKindsBySlug] ?? "promoter";
}

export function getSeedVenueLocation() {
  return {
    city: "Perth",
    state: "WA",
  };
}

export function getSeedProjectServiceSlugs(summary: string) {
  return inferProjectServiceSlugs(summary);
}

export function getSeedServiceSlug(title: string) {
  return slugify(title);
}

export function getSeedProofTitle(projectTitle: string) {
  return `${projectTitle} social proof`;
}
