import Link from "next/link";
import { notFound } from "next/navigation";
import EpisodeTimeline from "@/components/site/EpisodeTimeline";
import PageIntro from "@/components/site/PageIntro";
import SeedDataNotice from "@/components/site/SeedDataNotice";
import { getSeriesList, getSeriesWithEpisodes } from "@/lib/srs/data";

export function generateStaticParams() {
  return getSeriesList().map((series) => ({ seriesSlug: series.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ seriesSlug: string }>;
}) {
  const { seriesSlug } = await params;
  const series = getSeriesWithEpisodes(seriesSlug);

  if (!series) {
    return {};
  }

  return {
    title: `${series.name} · SIZZL3 Cinema`,
    description: series.summary,
  };
}

export default async function SeriesPage({
  params,
}: {
  params: Promise<{ seriesSlug: string }>;
}) {
  const { seriesSlug } = await params;
  const series = getSeriesWithEpisodes(seriesSlug);

  if (!series) {
    notFound();
  }

  const hasSeedEpisodes = series.episodes.some((episode) => episode.status === "seed");

  return (
    <main>
      <PageIntro eyebrow="SIZZL3 Cinema" title={series.name} body={series.summary} />

      {hasSeedEpisodes ? (
        <section className="px-4 pb-8 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <SeedDataNotice
              items={[
                "Episode titles, dates, and links are placeholders until the real episode list lands.",
              ]}
            />
          </div>
        </section>
      ) : null}

      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-7xl">
          <EpisodeTimeline episodes={series.episodes} />

          <Link
            href="/cinema"
            className="mt-12 inline-block rounded-full border border-white/15 px-5 py-3 text-[0.68rem] uppercase tracking-[0.28em] text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            ← Back to the lobby
          </Link>
        </div>
      </section>
    </main>
  );
}
