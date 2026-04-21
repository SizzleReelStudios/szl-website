import Link from "next/link";
import type { ResolvedProject } from "@/lib/srs/types";

type ArtistProjectListProps = {
  artistSlug: string;
  projects: ResolvedProject[];
};

export default function ArtistProjectList({
  artistSlug,
  projects,
}: ArtistProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded-[1.6rem] border border-dashed border-white/14 bg-white/[0.02] p-6 text-sm leading-7 text-white/55">
        No published project entries yet. The archive structure is ready, but event data, media, and detail copy still need to be loaded.
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {projects.map((project) => {
        return (
          <Link
            key={project.slug}
            href={`/our-work/${artistSlug}/${project.slug}`}
            className="group rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-white/30"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/40">
                  {project.date}
                </p>
                <h2 className="font-display mt-3 text-[clamp(2rem,4vw,3rem)] uppercase leading-none tracking-[-0.03em] text-white">
                  {project.eventName}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/56">
                  {project.summary}
                </p>
              </div>

              <div className="text-sm leading-7 text-white/58 sm:text-right">
                <p>{project.venue?.name ?? "Venue pending"}</p>
                <p>{project.client?.name ?? "Client pending"}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
