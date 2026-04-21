import { notFound } from "next/navigation";
import ArtistProjectList from "@/components/site/ArtistProjectList";
import PageIntro from "@/components/site/PageIntro";
import { getArtistArchiveSummary, getArtists } from "@/lib/srs/data";

export function generateStaticParams() {
  return getArtists().map((artist) => ({ artistSlug: artist.slug }));
}

export default async function ArtistArchivePage({
  params,
}: {
  params: Promise<{ artistSlug: string }>;
}) {
  const { artistSlug } = await params;
  const archive = getArtistArchiveSummary(artistSlug);

  if (!archive) {
    notFound();
  }

  return (
    <main>
      <PageIntro
        eyebrow="Artist Archive"
        title={archive.artist.name}
        body={archive.artist.summary}
      />

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">
              Archive Notes
            </p>
            <dl className="mt-5 grid gap-4 text-sm leading-7 text-white/62">
              <div>
                <dt className="text-white/35">Location</dt>
                <dd>{archive.artist.location}</dd>
              </div>
              <div>
                <dt className="text-white/35">Genres</dt>
                <dd>{archive.artist.genres.join(", ") || "Pending"}</dd>
              </div>
              <div>
                <dt className="text-white/35">Filmed entries</dt>
                <dd>{archive.totalProjects}</dd>
              </div>
              <div>
                <dt className="text-white/35">Latest logged project</dt>
                <dd>{archive.latestProjectDate ?? "Awaiting archive data"}</dd>
              </div>
            </dl>
          </aside>

          <div className="mx-auto w-full max-w-5xl">
            <ArtistProjectList artistSlug={archive.artist.slug} projects={archive.projects} />
          </div>
        </div>
      </section>
    </main>
  );
}
