import {
  developmentSeed,
  getSeedProjectServiceSlugs,
} from "@/content/srs/development-seed";
import type { Project } from "@/lib/srs/types";

export const projectBatches: Project[][] = [
  developmentSeed.projects.map((project) => ({
    id: project.slug,
    slug: project.slug,
    artistSlugs: [project.artistSlug],
    eventName: project.title,
    title: project.title,
    date: project.date,
    venueSlug: project.venueSlug,
    clientSlug: project.clientSlug,
    // TODO: Replace keyword-inferred services with confirmed project deliverables.
    serviceSlugs: getSeedProjectServiceSlugs(project.description),
    summary: project.description,
    deliverables: ["TODO: confirm deliverables for this project"],
    gallery: project.media.map((media, index) => ({
      type: media.type === "embed" ? "video-embed" : "image",
      src: media.url,
      alt: `${project.title} media item ${index + 1}`,
    })),
    embedUrl: project.media.find((media) => media.type === "embed")?.url,
    published: true,
  })),
];
