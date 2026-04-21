import { developmentSeed } from "@/content/srs/development-seed";
import type { Artist } from "@/lib/srs/types";

export const artistBatches: Artist[][] = [
  developmentSeed.artists.map((artist) => ({
    id: artist.slug,
    slug: artist.slug,
    name: artist.name,
    // TODO: Replace this inferred poster tier once the real lineup hierarchy is confirmed.
    posterTier: artist.featured ? "featured" : "support",
    location: developmentSeed.site.location,
    genres: ["TODO: confirm genre tags"],
    summary: artist.description,
    status: "seed",
  })),
];
