import { notFound } from "next/navigation";
import ArtistProjectList from "@/components/site/ArtistProjectList";
import PageIntro from "@/components/site/PageIntro";
import ProofFeed from "@/components/site/ProofFeed";
import SeedDataNotice from "@/components/site/SeedDataNotice";
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
          <div className="grid gap-4">
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

            <SeedDataNotice
              title="Artist TODOs"
              items={[
                "TODO: confirm poster tier and genre tags for this artist.",
                "TODO: replace temporary archive summary if final positioning copy changes.",
              ]}
            />
          </div>

          <div className="mx-auto w-full max-w-5xl">
            <ArtistProjectList artistSlug={archive.artist.slug} projects={archive.projects} />

            <div className="mt-10">
              <ProofFeed
                items={archive.proofItems}
                title={`Posts and uploads tied back to ${archive.artist.name}.`}
                body="This is where notable social uploads can sit when an artist, promoter, or venue used the footage in a public-facing post."
                emptyText="No linked proof posts are loaded for this artist yet."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
