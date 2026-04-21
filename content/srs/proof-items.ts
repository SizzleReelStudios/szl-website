import { developmentSeed, getSeedProofTitle } from "@/content/srs/development-seed";
import type { ProofItem } from "@/lib/srs/types";

function inferProofItem(project: (typeof developmentSeed.projects)[number]): ProofItem {
  const client = developmentSeed.clients.find((entry) => entry.slug === project.clientSlug);
  const venue = developmentSeed.venues.find((entry) => entry.slug === project.venueSlug);
  const artist = developmentSeed.artists.find((entry) => entry.slug === project.artistSlug);
  const sourceName = client?.name ?? artist?.name ?? venue?.name ?? "Unknown source";

  return {
    id: `${project.slug}-proof`,
    slug: `${project.slug}-proof`,
    projectSlug: project.slug,
    artistSlug: project.artistSlug,
    platform: "instagram",
    postType: project.title.toLowerCase().includes("tour") ? "tour-post" : "carousel",
    sourceName,
    sourceRole: client ? "client" : "artist",
    title: getSeedProofTitle(project.title),
    note:
      "TODO: replace this inferred proof note with the real post context, specific slide reference, and why the footage mattered in the upload.",
    date: project.date,
    postUrl: project.media[0]?.url ?? "#",
    previewLabel:
      client && venue
        ? `${sourceName} post using footage from ${venue.name}`
        : `${sourceName} post using Sizzle Reel Studios footage`,
    focusSlide:
      "TODO: note the exact slide, reel moment, or upload placement that used the delivered footage.",
    status: "seed",
  };
}

export const proofItems: ProofItem[] = developmentSeed.projects.map(inferProofItem);
