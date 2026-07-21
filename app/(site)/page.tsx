import Link from "next/link";
import ContactPanel from "@/components/site/ContactPanel";
import FreshOffTheGrill from "@/components/site/FreshOffTheGrill";
import PosterLineup from "@/components/site/PosterLineup";
import SeedDataNotice from "@/components/site/SeedDataNotice";
import {
  getArtistLineup,
  getRecentProofItems,
  getSeedAudit,
  getServices,
  getSiteConfig,
} from "@/lib/srs/data";

const WINGS = [
  {
    name: "The Cinema",
    href: "/cinema",
    blurb: "The SIZZL3 screening room — skits and web series, in order, for people joining late.",
    status: "Screens being installed",
  },
  {
    name: "The Poddy",
    href: "/poddy",
    blurb: "The Sausage Sizzle Poddy. Currently on ice, archive still warm.",
    status: "On ice",
  },
  {
    name: "The Snags",
    href: "/snags",
    blurb: "The three of us. Introductions, portraits, and who does what.",
    status: "Say hello",
  },
  {
    name: "The Portal",
    href: null,
    blurb: "The weird side. Trust one of the three heads. Not yet open.",
    status: "Sealed for now",
  },
];

export default function HomePage() {
  const site = getSiteConfig();
  const lineup = getArtistLineup();
  const serviceList = getServices();
  const proofItems = getRecentProofItems();
  const audit = getSeedAudit();

  return (
    <main>
      <section className="site-band px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.72rem] uppercase tracking-[0.34em] text-white/48">
            SZL — Perth, Western Australia
          </p>
          {/* TODO(seed): temporary umbrella copy — replace with final SZL homepage copy. */}
          <h1 className="font-display mt-5 max-w-5xl text-[clamp(4rem,11vw,9rem)] leading-[0.88] tracking-[-0.06em] text-white">
            One house. All the sizzle.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            Sizzle Reel Studios is the videography wing — nightlife, music, artist sets,
            clubs, and festivals shot from inside the room. The rest of the house is the
            cinema, the poddy, and the weirder doors we keep half-open.
          </p>
          <p className="mt-6 max-w-xl text-sm uppercase tracking-[0.24em] text-[#ff9b6b]">
            {site.home.proofLine}
          </p>
        </div>
      </section>

      <section className="px-4 pb-8 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <SeedDataNotice
            items={[
              audit.missingFields[0],
              audit.missingFields[1],
              audit.weakSpots[0],
            ]}
          />
        </div>
      </section>

      <FreshOffTheGrill items={proofItems} />

      <section className="site-band px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="text-[0.72rem] uppercase tracking-[0.34em] text-white/45">
              Sizzle Reel Studios
            </p>
            <h2 className="font-display mt-5 text-[clamp(2.8rem,6vw,4.8rem)] leading-[0.94] tracking-[-0.05em] text-white">
              The videography wing. Proven in the room.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/62">
              The archive is structured like a lineup poster. Click an artist name, then step
              into their event history and the proof around it.
            </p>
            <div className="mt-8 grid gap-4">
              {serviceList.map((service) => (
                <div key={service.id} className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-[0.65rem] uppercase tracking-[0.32em] text-white/35">
                    Service
                  </p>
                  <p className="font-display mt-2 text-[1.4rem] uppercase leading-none tracking-[-0.02em] text-white">
                    {service.name}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/55">{service.summary}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/our-work"
                className="rounded-full bg-white px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-black transition-transform hover:-translate-y-0.5"
              >
                {site.home.ctaPrimary}
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/15 px-5 py-3 text-[0.72rem] uppercase tracking-[0.3em] text-white/78 transition-colors hover:border-white/40 hover:text-white"
              >
                {site.home.ctaSecondary}
              </Link>
            </div>
          </div>

          <PosterLineup artists={lineup} />
        </div>
      </section>

      <section className="site-band px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.72rem] uppercase tracking-[0.34em] text-white/45">
            The rest of the house
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WINGS.map((wing) => {
              const inner = (
                <>
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#ffb089]">
                    {wing.status}
                  </p>
                  <h3 className="font-display mt-4 text-[1.9rem] uppercase leading-none tracking-[-0.03em] text-white">
                    {wing.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/58">{wing.blurb}</p>
                </>
              );

              return wing.href ? (
                <Link
                  key={wing.name}
                  href={wing.href}
                  className="archive-card rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6"
                >
                  {inner}
                </Link>
              ) : (
                <div
                  key={wing.name}
                  className="rounded-[1.7rem] border border-dashed border-white/14 bg-white/[0.01] p-6"
                >
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <ContactPanel />
        </div>
      </section>
    </main>
  );
}
