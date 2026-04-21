import { artists } from "@/content/srs/artists";
import { clients } from "@/content/srs/clients";
import { developmentSeedAudit } from "@/content/srs/development-seed";
import { proofItems } from "@/content/srs/proof-items";
import { projects } from "@/content/srs/projects";
import { services, siteConfig } from "@/content/srs/site";
import { venues } from "@/content/srs/venues";
import type {
  ArtistLineupEntry,
  Project,
  ProofItem,
  ResolvedProofItem,
  ResolvedProject,
} from "@/lib/srs/types";

export function getSiteConfig() {
  return siteConfig;
}

export function getServices() {
  return services;
}

export function getArtists() {
  return artists;
}

export function getArtistBySlug(slug: string) {
  return artists.find((artist) => artist.slug === slug);
}

export function getProjects() {
  return projects.filter((project) => project.published);
}

function sortByDateDesc<T extends { date: string }>(collection: T[]) {
  return [...collection].sort((a, b) => {
    const aTime = Date.parse(a.date);
    const bTime = Date.parse(b.date);

    if (Number.isNaN(aTime) || Number.isNaN(bTime)) {
      return b.date.localeCompare(a.date);
    }

    return bTime - aTime;
  });
}

function sortProjectsByDateDesc(collection: Project[]) {
  return sortByDateDesc(collection);
}

export function getProjectsByArtistSlug(artistSlug: string) {
  return sortProjectsByDateDesc(
    getProjects().filter((project) => project.artistSlugs.includes(artistSlug)),
  );
}

export function getProjectByArtistAndSlug(artistSlug: string, projectSlug: string) {
  return getProjects().find(
    (project) =>
      project.slug === projectSlug && project.artistSlugs.includes(artistSlug),
  );
}

export function getVenueBySlug(slug: string) {
  return venues.find((venue) => venue.slug === slug);
}

export function getClientBySlug(slug: string) {
  return clients.find((client) => client.slug === slug);
}

export function getProofItems() {
  return sortByDateDesc(proofItems.filter((item) => item.status !== "seed" || item.postUrl));
}

export function resolveProject(project: Project): ResolvedProject {
  return {
    ...project,
    artists: project.artistSlugs
      .map((artistSlug) => getArtistBySlug(artistSlug))
      .filter((artist) => artist !== undefined),
    venue: getVenueBySlug(project.venueSlug) ?? null,
    client: getClientBySlug(project.clientSlug) ?? null,
    services: project.serviceSlugs
      .map((serviceSlug) => services.find((service) => service.slug === serviceSlug))
      .filter((service) => service !== undefined),
  };
}

export function resolveProofItem(item: ProofItem): ResolvedProofItem {
  const project = getProjects().find((entry) => entry.slug === item.projectSlug) ?? null;

  return {
    ...item,
    artist: getArtistBySlug(item.artistSlug) ?? null,
    project,
    client: project ? getClientBySlug(project.clientSlug) ?? null : null,
  };
}

export function getArtistLineup() {
  const tierRank = {
    headliner: 0,
    featured: 1,
    support: 2,
  } as const;
  const counts = new Map<string, number>();

  for (const project of getProjects()) {
    for (const artistSlug of project.artistSlugs) {
      counts.set(artistSlug, (counts.get(artistSlug) ?? 0) + 1);
    }
  }

  return [...artists]
    .map(
      (artist): ArtistLineupEntry => ({
        ...artist,
        projectCount: counts.get(artist.slug) ?? 0,
      }),
    )
    .sort((a, b) => {
      const tierDifference = tierRank[a.posterTier] - tierRank[b.posterTier];

      if (tierDifference !== 0) {
        return tierDifference;
      }

      if (b.projectCount !== a.projectCount) {
        return b.projectCount - a.projectCount;
      }

      return a.name.localeCompare(b.name);
    });
}

export function getArtistArchiveSummary(artistSlug: string) {
  const artist = getArtistBySlug(artistSlug);

  if (!artist) {
    return null;
  }

  const artistProjects = getProjectsByArtistSlug(artistSlug);
  const latestProject = artistProjects[0];

  return {
    artist,
    projects: artistProjects.map(resolveProject),
    proofItems: getProofItemsByArtistSlug(artistSlug).map(resolveProofItem),
    totalProjects: artistProjects.length,
    latestProjectDate: latestProject?.date ?? null,
  };
}

export function getResolvedProjectByArtistAndSlug(
  artistSlug: string,
  projectSlug: string,
) {
  const project = getProjectByArtistAndSlug(artistSlug, projectSlug);

  if (!project) {
    return null;
  }

  return resolveProject(project);
}

export function getProofItemsByArtistSlug(artistSlug: string) {
  return sortByDateDesc(getProofItems().filter((item) => item.artistSlug === artistSlug));
}

export function getProofItemsByProjectSlug(projectSlug: string) {
  return sortByDateDesc(getProofItems().filter((item) => item.projectSlug === projectSlug));
}

export function getResolvedProofItemsByProjectSlug(projectSlug: string) {
  return getProofItemsByProjectSlug(projectSlug).map(resolveProofItem);
}

export function getRecentProofItems(limit = 6) {
  return getProofItems().slice(0, limit).map(resolveProofItem);
}

export function getSeedAudit() {
  return developmentSeedAudit;
}
