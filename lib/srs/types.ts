export type NavItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  brand: {
    parent: string;
    name: string;
    shortName: string;
    location: string;
  };
  seo: {
    title: string;
    description: string;
  };
  nav: NavItem[];
  contact: {
    email: string;
    instagram: string;
  };
  home: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    proofLine: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    intro: string;
    story: string;
  };
};

export type PosterTier = "headliner" | "featured" | "support";

export type Artist = {
  id: string;
  slug: string;
  name: string;
  posterTier: PosterTier;
  location: string;
  genres: string[];
  summary: string;
  status: "seed" | "published";
};

export type Venue = {
  id: string;
  slug: string;
  name: string;
  city: string;
  state: string;
};

export type Client = {
  id: string;
  slug: string;
  name: string;
  kind: "promoter" | "club" | "festival" | "artist" | "brand";
  website?: string;
};

export type Service = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  deliverables: string[];
};

export type MediaAsset = {
  type: "image" | "video-embed";
  src: string;
  alt: string;
};

export type ProofItem = {
  id: string;
  slug: string;
  projectSlug: string;
  artistSlug: string;
  platform: "instagram" | "tiktok" | "youtube" | "other";
  postType: "carousel" | "reel" | "recap" | "tour-post";
  sourceName: string;
  sourceRole: "artist" | "client" | "promoter" | "venue";
  title: string;
  note: string;
  date: string;
  postUrl: string;
  previewLabel: string;
  focusSlide?: string;
  thumbnail?: string;
  status: "seed" | "published";
};

export type Project = {
  id: string;
  slug: string;
  artistSlugs: string[];
  eventName: string;
  title: string;
  date: string;
  venueSlug: string;
  clientSlug: string;
  serviceSlugs: string[];
  summary: string;
  deliverables: string[];
  thumbnail?: string;
  gallery: MediaAsset[];
  embedUrl?: string;
  published: boolean;
};

export type ArtistLineupEntry = Artist & {
  projectCount: number;
};

// One artist's slot on a specific year's lineup poster. `scale` is an
// art-direction nudge multiplied onto the tier's base size (1 = default).
export type LineupAppearance = {
  year: number;
  tier: PosterTier;
  scale?: number;
};

export type LineupPosterEntry = ArtistLineupEntry & {
  scale: number;
};

export type YearLineup = {
  year: number;
  artists: LineupPosterEntry[];
};

export type ResolvedProject = Project & {
  artists: Artist[];
  venue: Venue | null;
  client: Client | null;
  services: Service[];
};

export type ResolvedProofItem = ProofItem & {
  artist: Artist | null;
  project: Project | null;
  client: Client | null;
};

export type SeriesStatus = "screening" | "in-production" | "coming-soon";

export type Series = {
  id: string;
  slug: string;
  name: string;
  summary: string;
  status: SeriesStatus;
  // Marquee order in the cinema lobby (lower = first screen).
  order: number;
};

export type EpisodeLinks = {
  youtube?: string;
  instagram?: string;
  tiktok?: string;
};

export type Episode = {
  id: string;
  slug: string;
  seriesSlug: string;
  // Watch order within the series (1 = start here).
  number: number;
  title: string;
  date: string;
  summary: string;
  links: EpisodeLinks;
  // YouTube embed URL preferred — it's the only platform that embeds cleanly.
  embedUrl?: string;
  thumbnail?: string;
  published: boolean;
  status: "seed" | "published";
};

export type SeriesWithEpisodes = Series & {
  episodes: Episode[];
};
