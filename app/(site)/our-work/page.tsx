import PageIntro from "@/components/site/PageIntro";
import PosterLineup from "@/components/site/PosterLineup";
import SeedDataNotice from "@/components/site/SeedDataNotice";
import { getArtistLineup, getProjects, getSeedAudit } from "@/lib/srs/data";

export default function OurWorkPage() {
  const lineup = getArtistLineup();
  const projects = getProjects();
  const audit = getSeedAudit();

  return (
    <main>
      <PageIntro
        eyebrow="Our Work"
        title="A lineup wall built around the artists first."
        body="This archive is meant to feel closer to a festival poster than a normal portfolio grid. Start with the name, then move into that artist's filmed history and the projects attached to it."
      />

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <PosterLineup artists={lineup} />

          <div className="grid gap-4">
            <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">
                How To Read It
              </p>
              <p className="font-display mt-4 text-[2.3rem] uppercase leading-none text-white">
                Name first. Context second. Proof third.
              </p>
              <p className="mt-4 text-sm leading-7 text-white/58">
                The point is to start with recognition. Once someone sees the artist, they can
                move into the archive of filmed appearances and then into the actual project page.
              </p>
            </div>

            <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">Loaded</p>
              <div className="mt-4 grid gap-3 text-sm leading-7 text-white/58">
                <p>{lineup.length} artists in the poster wall.</p>
                <p>{projects.length} projects currently linked into archive routes.</p>
                <p>Venues and clients are normalized so later data drops do not touch routing.</p>
              </div>
            </div>

            <SeedDataNotice title="Archive TODOs" items={audit.assumptions.slice(0, 2)} />
          </div>
        </div>
      </section>
    </main>
  );
}
