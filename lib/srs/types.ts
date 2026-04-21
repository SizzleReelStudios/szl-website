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

export type ResolvedProject = Project & {
  artists: Artist[];
  venue: Venue | null;
  client: Client | null;
  services: Service[];
};
