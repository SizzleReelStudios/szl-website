import Link from "next/link";
import type { PosterTier } from "@/lib/srs/types";

type LineupArtist = {
  slug: string;
  name: string;
  posterTier: PosterTier;
  projectCount: number;
};

type PosterLineupProps = {
  artists: LineupArtist[];
};

const tierOrder: PosterTier[] = ["headliner", "featured", "support"];

const tierStyles: Record<PosterTier, string> = {
  headliner: "text-[clamp(3rem,8vw,7rem)]",
  featured: "text-[clamp(2.1rem,5vw,4.5rem)]",
  support: "text-[clamp(1.35rem,3vw,2.2rem)]",
};

export default function PosterLineup({ artists }: PosterLineupProps) {
  return (
    <div className="poster-grid rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-6 sm:p-8">
      <div className="grid gap-6">
        {tierOrder.map((tier) => {
          const tierArtists = artists.filter((artist) => artist.posterTier === tier);

          if (tierArtists.length === 0) {
            return null;
          }

          return (
            <div key={tier} className="border-t border-white/8 pt-6 first:border-t-0 first:pt-0">
              <p className="mb-4 text-[0.65rem] uppercase tracking-[0.34em] text-white/35">
                {tier}
              </p>
              <div className="flex flex-wrap items-end gap-x-5 gap-y-3">
                {tierArtists.map((artist) => (
                  <Link
                    key={artist.slug}
                    href={`/our-work/${artist.slug}`}
                    className={`font-display ${tierStyles[artist.posterTier]} uppercase leading-none tracking-[-0.05em] text-white transition-colors hover:text-[#ff9b6b]`}
                  >
                    {artist.name}
                    <span className="ml-2 align-top text-[0.7rem] tracking-[0.24em] text-white/28">
                      {artist.projectCount}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
