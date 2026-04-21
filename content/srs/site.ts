import type { Service, SiteConfig } from "@/lib/srs/types";

export const siteConfig: SiteConfig = {
  brand: {
    parent: "SZL",
    name: "Sizzle Reel Studios",
    shortName: "SRS",
    location: "Perth, Western Australia",
  },
  seo: {
    title: "Sizzle Reel Studios",
    description:
      "Perth videography trio capturing DJs, artists, venues, clubs, and festivals with the pace and texture of the night intact.",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Our Work", href: "/our-work" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  contact: {
    email: "hello@szl.au",
    instagram: "https://www.instagram.com/sizzlereelstudios",
  },
  home: {
    eyebrow: "Perth nightlife production",
    headline: "Video that keeps the weight of the room.",
    subheadline:
      "Sizzle Reel Studios is the videography arm of SZL. We shoot DJs, artists, venues, promoters, and festivals without sanding off the energy that made the night worth filming.",
    proofLine:
      "Built for lineups, club rooms, artist rollouts, aftermovies, and fast-turn social edits.",
    ctaPrimary: "View The Lineup",
    ctaSecondary: "Start An Enquiry",
  },
  about: {
    intro:
      "We're a Perth-based videography trio working inside music, nightlife, and event culture.",
    story:
      "The goal is straightforward: make footage feel like the night actually felt. Not over-polished. Not fake-chaotic. Just sharp enough to sell the energy and real enough to hold credibility with people who were there.",
  },
};

export const services: Service[] = [
  {
    id: "event-coverage",
    slug: "event-coverage",
    name: "Event Coverage",
    summary: "Full-night coverage built for recaps, promos, and social cutdowns.",
    deliverables: ["aftermovies", "recaps", "vertical edits", "photo grabs"],
  },
  {
    id: "artist-content",
    slug: "artist-content",
    name: "Artist Content",
    summary: "Fast, usable footage for DJs and artists before, during, and after sets.",
    deliverables: ["reels", "set clips", "hype edits", "announcement assets"],
  },
  {
    id: "venue-campaigns",
    slug: "venue-campaigns",
    name: "Venue Campaigns",
    summary: "Ongoing content support for clubs, promoters, and hospitality spaces.",
    deliverables: ["campaign edits", "event teasers", "brand coverage"],
  },
];
