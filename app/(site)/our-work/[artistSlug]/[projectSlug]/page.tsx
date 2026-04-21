import { notFound } from "next/navigation";
import ContactPanel from "@/components/site/ContactPanel";
import PageIntro from "@/components/site/PageIntro";
import {
  getArtistBySlug,
  getProjects,
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

  if (!artist || !project) {
    notFound();
  }

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

            <div className="rounded-[1.8rem] border border-dashed border-white/14 bg-white/[0.02] p-6 text-sm leading-7 text-white/58">
              Media gallery and embedded footage will drop into this template once project
              assets and links are supplied. The template is already structured to keep project
              pages consistent as the archive grows.
            </div>

            <ContactPanel />
          </div>
        </div>
      </section>
    </main>
  );
}
