import { getClients, getProjects, getVenues } from "@/lib/srs/data";
import type { Client } from "@/lib/srs/types";

function kindLabel(kind: Client["kind"]) {
  switch (kind) {
    case "promoter":
      return "Promoter";
    case "club":
      return "Club";
    case "festival":
      return "Festival";
    case "artist":
      return "Artist";
    case "brand":
      return "Brand";
    default:
      return kind;
  }
}

export default function CredibilityWall() {
  const clients = getClients();
  const venues = getVenues();
  const projects = getProjects();

  const projectCountByClient = new Map<string, number>();
  const projectCountByVenue = new Map<string, number>();

  for (const project of projects) {
    projectCountByClient.set(
      project.clientSlug,
      (projectCountByClient.get(project.clientSlug) ?? 0) + 1,
    );
    projectCountByVenue.set(
      project.venueSlug,
      (projectCountByVenue.get(project.venueSlug) ?? 0) + 1,
    );
  }

  const sortedClients = [...clients].sort(
    (a, b) =>
      (projectCountByClient.get(b.slug) ?? 0) - (projectCountByClient.get(a.slug) ?? 0) ||
      a.name.localeCompare(b.name),
  );
  const sortedVenues = [...venues].sort(
    (a, b) =>
      (projectCountByVenue.get(b.slug) ?? 0) - (projectCountByVenue.get(a.slug) ?? 0) ||
      a.name.localeCompare(b.name),
  );

  return (
    <section className="site-band px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-[0.72rem] uppercase tracking-[0.34em] text-white/45">
          Worked With
        </p>
        <h2 className="font-display mt-5 max-w-4xl text-[clamp(2.4rem,5.5vw,4.4rem)] leading-[0.94] tracking-[-0.05em] text-white">
          The promoters, clubs, and rooms that keep booking us.
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-[0.66rem] uppercase tracking-[0.3em] text-white/38">
              Clients &amp; Promoters
            </p>
            <div className="mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-4">
              {sortedClients.map((client) => (
                <span key={client.slug} className="inline-flex items-baseline gap-2">
                  <span className="font-display text-[clamp(1.4rem,2.6vw,2.2rem)] uppercase leading-none tracking-[-0.03em] text-white/88">
                    {client.name}
                  </span>
                  <span className="text-[0.6rem] uppercase tracking-[0.24em] text-white/32">
                    {kindLabel(client.kind)}
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[0.66rem] uppercase tracking-[0.3em] text-white/38">
              Venues &amp; Rooms
            </p>
            <div className="mt-5 flex flex-wrap items-baseline gap-x-6 gap-y-4">
              {sortedVenues.map((venue) => (
                <span key={venue.slug} className="inline-flex items-baseline gap-2">
                  <span className="font-display text-[clamp(1.4rem,2.6vw,2.2rem)] uppercase leading-none tracking-[-0.03em] text-white/88">
                    {venue.name}
                  </span>
                  <span className="text-[0.6rem] uppercase tracking-[0.24em] text-white/32">
                    {venue.city}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* TODO(seed): confirm which client/venue names are cleared for public display,
            and swap names for logos where logo assets exist. */}
      </div>
    </section>
  );
}
