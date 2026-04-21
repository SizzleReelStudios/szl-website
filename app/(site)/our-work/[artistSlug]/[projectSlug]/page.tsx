import { notFound } from "next/navigation";
import ContactPanel from "@/components/site/ContactPanel";
import PageIntro from "@/components/site/PageIntro";
import ProofFeed from "@/components/site/ProofFeed";
import SeedDataNotice from "@/components/site/SeedDataNotice";
import {
  getArtistBySlug,
  getProjects,
  getResolvedProofItemsByProjectSlug,
  getResolvedProjectByArtistAndSlug,
} from "@/lib/srs/data";

export function generateStaticParams() {
  return getProjects().flatMap((project) =>
    project.artistSlugs.map((artistSlug) => ({
      artistSlug,
      projectSlug: project.slug,
    })),
  );
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ artistSlug: string; projectSlug: string }>;
}) {
  const { artistSlug, projectSlug } = await params;
  const artist = getArtistBySlug(artistSlug);
  const project = getResolvedProjectByArtistAndSlug(artistSlug, projectSlug);
  const proofItems = getResolvedProofItemsByProjectSlug(projectSlug);

  if (!artist || !project) {
    notFound();
  }

  const projectTodoItems = [
    !project.thumbnail ? "TODO: add project thumbnail / key still." : null,
    !project.gallery.some((asset) => asset.type === "image")
      ? "TODO: add still-image gallery for this project."
      : null,
    project.embedUrl?.includes("/example")
      ? "TODO: replace example embed URL with the final published media link."
      : null,
    "TODO: confirm the date, venue, client, and service tags before launch.",
  ].filter((item): item is string => item !== null);

  return (
    <main>
      <PageIntro
        eyebrow="Project Detail"
        title={project.eventName}
        body={project.summary}
      />

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/38">
              Metadata
            </p>
            <dl className="mt-5 grid gap-4 text-sm leading-7 text-white/66">
              <div>
                <dt className="text-white/35">Artist</dt>
                <dd>{artist.name}</dd>
              </div>
              <div>
                <dt className="text-white/35">Date</dt>
                <dd>{project.date}</dd>
              </div>
              <div>
                <dt className="text-white/35">Venue</dt>
                <dd>{project.venue?.name ?? "Pending"}</dd>
              </div>
              <div>
                <dt className="text-white/35">Client</dt>
                <dd>{project.client?.name ?? "Pending"}</dd>
              </div>
              <div>
                <dt className="text-white/35">Services</dt>
                <dd>{project.services.map((service) => service.name).join(", ") || "Pending"}</dd>
              </div>
            </dl>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/38">
                Project Summary
              </p>
              <p className="mt-5 text-sm leading-8 text-white/64">{project.summary}</p>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/38">Media</p>
              <div className="mt-5 grid gap-3">
                {project.gallery.map((asset) => (
                  <div
                    key={asset.src}
                    className="rounded-[1.2rem] border border-white/10 bg-white/[0.02] p-4"
                  >
                    <p className="text-[0.65rem] uppercase tracking-[0.28em] text-white/35">
                      {asset.type === "video-embed" ? "Embed" : "Image"}
                    </p>
                    <a
                      href={asset.src}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 block break-all text-sm leading-7 text-[#ffb089] underline decoration-white/15 underline-offset-4"
                    >
                      {asset.src}
                    </a>
                    <p className="mt-2 text-sm leading-7 text-white/52">{asset.alt}</p>
                  </div>
                ))}
              </div>
            </div>

            <ProofFeed
              items={proofItems}
              title="Where this footage showed up."
              body="Use this section for the public-facing proof: recap carousels, tour posts, and artist or promoter uploads that used the delivered assets."
              emptyText="No public proof posts are linked to this project yet."
            />

            <SeedDataNotice title="Project TODOs" items={projectTodoItems} />

            <ContactPanel />
          </div>
        </div>
      </section>
    </main>
  );
}
