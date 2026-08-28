import Link from "next/link";
import {
  featuredWork,
  recentWork,
  showcaseItems,
  snags,
  workedWith,
} from "@/content/srs/v1";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-1.5 w-1.5 rounded-full bg-[#e31b23] shadow-[0_0_12px_rgba(255,48,56,0.72)]" />
      <p className="text-[0.7rem] uppercase tracking-[0.34em] text-white/40">{children}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="szl-hero-field relative min-h-[92vh] overflow-hidden border-b border-white/10">
        <div className="szl-red-beam pointer-events-none absolute left-1/2 top-[-12%] -translate-x-1/2" />
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:52px_52px]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(0,0,0,0.72)_100%)]" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-[92rem] flex-col px-4 pb-10 pt-16 sm:px-6 sm:pb-12 lg:px-8">
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <p className="mb-5 text-[0.7rem] uppercase tracking-[0.38em] text-white/38">
              Perth, Western Australia
            </p>
            <h1 className="font-display max-w-[90rem] text-[clamp(4rem,10.8vw,9.8rem)] uppercase leading-[0.82] tracking-[-0.055em] text-[#f1f1ef]">
              Sizzle Reel Studios
            </h1>
            <div className="szl-red-rule mt-7 w-[min(34rem,72vw)]" />
            <p className="font-display mt-7 text-[clamp(2.2rem,5vw,4.8rem)] uppercase leading-none tracking-[0.02em] text-white/78">
              Music. Nightlife. Film.
            </p>
            <p className="mt-7 max-w-2xl text-[clamp(1.05rem,2vw,1.4rem)] leading-8 text-white/68">
              The next best thing to being in the room.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/38 sm:text-base">
              A three-person production team capturing artists, clubs, festivals, live sets,
              music videos, and the moments that make the room feel alive.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="#work"
                className="szl-primary-cta rounded-full bg-[#f1f1ef] px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-black"
              >
                View Work
              </Link>
              <Link
                href="#contact"
                className="szl-link-glow rounded-full border border-white/18 px-5 py-3 text-[0.72rem] uppercase tracking-[0.28em] text-white/72"
              >
                Enquire
              </Link>
            </div>
          </div>
          <div className="mt-8 flex items-end justify-between gap-6 text-[0.65rem] uppercase tracking-[0.28em] text-white/22">
            <span>Showreel placeholder</span>
            <span>Scroll ↓</span>
          </div>
        </div>
      </section>

      <section id="work" className="bg-black px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-[92rem]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Selected Work</SectionLabel>
              <h2 className="font-display mt-4 text-[clamp(3rem,7vw,6rem)] uppercase leading-[0.9] tracking-[-0.045em] text-[#f1f1ef]">
                The good stuff.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/40">
              V1 uses deliberate media placeholders. Real thumbnails and video loops can drop in later without changing the page structure.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {featuredWork.map((project, index) => (
              <article
                key={project.title}
                className={`szl-media-shell group relative overflow-hidden border border-white/10 bg-[#070707] ${project.format === "wide" ? "md:col-span-2" : ""}`}
              >
                <div className={`szl-media-placeholder relative ${project.format === "wide" ? "aspect-[16/7]" : "aspect-[16/10]"}`}>
                  <div className="absolute inset-0 z-10 flex items-center justify-center text-[0.64rem] uppercase tracking-[0.32em] text-white/14">
                    Video / image placeholder {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black via-black/72 to-transparent p-5 sm:p-7">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="szl-red-label text-[0.64rem] uppercase tracking-[0.28em]">{project.subtitle}</p>
                        <h3 className="font-display mt-2 text-[clamp(2rem,4vw,4rem)] uppercase leading-none tracking-[-0.035em] text-[#f1f1ef]">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-[0.64rem] uppercase tracking-[0.24em] text-white/32">{project.meta}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#030303] py-20 sm:py-24">
        <div className="mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-8">
          <SectionLabel>From The Room</SectionLabel>
          <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {showcaseItems.map((item, index) => (
              <div key={item.label} className="group min-w-[68vw] snap-start sm:min-w-[18rem] lg:min-w-[21rem]">
                <div className="szl-media-shell szl-showcase-placeholder relative aspect-[9/14] overflow-hidden border border-white/10">
                  <span className="absolute inset-0 z-10 flex items-center justify-center text-[0.58rem] uppercase tracking-[0.3em] text-white/12">Media {index + 1}</span>
                  <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/92 to-transparent p-5">
                    <p className="font-display text-3xl uppercase text-[#f1f1ef]">{item.label}</p>
                    <p className="mt-1 text-[0.64rem] uppercase tracking-[0.24em] text-white/34">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-[92rem] gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <SectionLabel>Recent Work</SectionLabel>
            <h2 className="font-display mt-4 text-[clamp(3rem,6vw,5.5rem)] uppercase leading-[0.9] tracking-[-0.04em] text-[#f1f1ef]">
              Still rolling.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/40">
              A simple latest-work feed so the site can stay alive without needing a full archive system yet.
            </p>
          </div>
          <div className="border-t border-white/12">
            {recentWork.map((item) => (
              <div key={item.title} className="group grid gap-3 border-b border-white/12 py-5 transition-colors hover:border-b-[rgba(227,27,35,0.28)] sm:grid-cols-[8rem_1fr_auto] sm:items-center">
                <p className="text-[0.64rem] uppercase tracking-[0.25em] text-white/28">{item.date}</p>
                <p className="font-display text-2xl uppercase tracking-[-0.02em] text-white/88 transition-[text-shadow,color] group-hover:text-white group-hover:[text-shadow:0_0_14px_rgba(227,27,35,0.22)] sm:text-3xl">
                  {item.title}
                </p>
                <p className="szl-red-label text-[0.64rem] uppercase tracking-[0.24em]">{item.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10 bg-[#050505] py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_50%,rgba(101,9,12,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-8">
          <SectionLabel>Worked With</SectionLabel>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            {workedWith.map((name) => (
              <span key={name} className="szl-worked-with font-display text-[clamp(1.8rem,4vw,3.8rem)] uppercase leading-none tracking-[-0.03em] text-white/64">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-black px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-[92rem]">
          <SectionLabel>Meet The Snags</SectionLabel>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="font-display text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[0.84] tracking-[-0.05em] text-[#f1f1ef]">
                Three snags.
                <br />
                One camera bag.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
                Sizzle Reel Studios is Blake, Jack and George — a Perth-based trio shooting, directing, editing and generally carrying far too many batteries into nightclubs.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {snags.map((snag, index) => (
                <article key={snag.name} className="group">
                  <div className="szl-media-shell szl-snag-placeholder relative aspect-[4/5] overflow-hidden border border-white/10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-0.35deg]">
                    <span className="absolute inset-0 z-10 flex items-center justify-center text-[0.58rem] uppercase tracking-[0.3em] text-white/12">Portrait {index + 1}</span>
                  </div>
                  <h3 className="font-display mt-4 text-3xl uppercase leading-none text-[#f1f1ef]">{snag.name}</h3>
                  <p className="szl-red-label mt-2 text-[0.62rem] uppercase tracking-[0.22em]">{snag.role}</p>
                  <p className="mt-3 text-sm leading-6 text-white/36">{snag.note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden border-t border-white/10 bg-[#030303] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_115%,rgba(227,27,35,0.18),transparent_36%)]" />
        <div className="relative mx-auto max-w-[92rem]">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-display mt-5 max-w-6xl text-[clamp(4rem,11vw,10rem)] uppercase leading-[0.82] tracking-[-0.055em] text-[#f1f1ef]">
            Got something cooking?
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:muntzblake@gmail.com"
              className="szl-primary-cta rounded-full bg-[#f1f1ef] px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-black"
            >
              Email Us
            </a>
            <a
              href="https://instagram.com/sizzlereelstudios"
              target="_blank"
              rel="noreferrer"
              className="szl-link-glow rounded-full border border-white/18 px-6 py-3 text-[0.72rem] uppercase tracking-[0.28em] text-white/72"
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
