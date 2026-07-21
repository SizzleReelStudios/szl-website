"use client";

import { useState } from "react";
import PosterLineup from "@/components/site/PosterLineup";
import type { YearLineup } from "@/lib/srs/types";

type LineupEditionsProps = {
  editions: YearLineup[];
};

export default function LineupEditions({ editions }: LineupEditionsProps) {
  const [selectedYear, setSelectedYear] = useState(editions[0]?.year ?? null);
  const selected = editions.find((edition) => edition.year === selectedYear) ?? editions[0];

  if (!selected) {
    return (
      <div className="rounded-[1.6rem] border border-dashed border-white/14 bg-white/[0.02] p-6 text-sm leading-7 text-white/55">
        No lineup editions yet — they appear as soon as projects with dates are logged.
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      <div className="flex items-end justify-between gap-4">
        <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">
          The {selected.year} edition · {selected.artists.length} artists
        </p>

        <div className="flex overflow-hidden rounded-xl border border-white/14">
          {editions.map((edition) => (
            <button
              key={edition.year}
              type="button"
              onClick={() => setSelectedYear(edition.year)}
              aria-pressed={edition.year === selected.year}
              className={`px-3 py-2 text-[0.68rem] uppercase tracking-[0.2em] transition-colors ${
                edition.year === selected.year
                  ? "bg-white text-black"
                  : "text-white/55 hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {edition.year}
            </button>
          ))}
        </div>
      </div>

      <PosterLineup artists={selected.artists} align="center" />
    </div>
  );
}
