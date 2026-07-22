import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";
import { getEpisodesBySeriesSlug, getSeriesList } from "@/lib/srs/data";
import type { SeriesStatus } from "@/lib/srs/types";

const STATUS_LABELS: Record<SeriesStatus, string> = {
  screening: "Now screening",
  "in-production": "In production",
  "coming-soon": "Coming soon",
};

export default function CinemaPage() {
  const seriesList = getSeriesList();

  return (
    <main>
      <PageIntro
        eyebrow="SIZZL3 Cinema"
        title="Pick a screen. Follow the story."
        body="The hub for our skits and web series — every episode in watch order, with a timeline so you can follow along even if you just walked in. Episodes live on YouTube, Instagram, and TikTok; this room keeps them in the right order."
      />

      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {seriesList.map((series, index) => {
            const episodeCount = getEpisodesBySeriesSlug(series.slug).length;

            return (
              <Link
                key={series.slug}
                href={`/cinema/${series.slug}`}
                className="archive-card rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/35">
                    Screen {index + 1}
                  </p>
                  <p className="text-[0.62rem] uppercase tracking-[0.24em] text-[#ffb089]">
                    {STATUS_LABELS[series.status]}
                  </p>
                </div>
                <h2 className="font-display mt-4 text-[1.9rem] uppercase leading-none tracking-[-0.03em] text-white">
                  {series.name}
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/58">{series.summary}</p>
                <p className="mt-4 text-[0.62rem] uppercase tracking-[0.26em] text-white/38">
                  {episodeCount === 0
                    ? "Episode list pending"
                    : `${episodeCount} episode${episodeCount === 1 ? "" : "s"} · start at 1`}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
