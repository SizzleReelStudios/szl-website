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
    <p className="text-[0.7rem] uppercase tracking-[0.34em] text-white/40">{children}</p>
  );
}

export default function HomePage() {
  return (
    <main>
      <section className="relative min-h-[92vh] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,120,68,0.22),transparent_30%),linear-gradient(180deg,#121212_0%,#050505_70%)]" />
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:52px_52px]" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-[92rem] flex-col px-4 pb-10 pt-16 sm:px-6 sm:pb-12 lg:px-8">
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <p className="mb-5 text-[0.7rem] uppercase tracking-[0.38em] text-white/42">
              Perth, Western Australia
            </p>
            <h1 className="font-display max-w-[90rem] text-[clamp(4rem,10.8vw,9.8rem)] uppercase leading-[0.82] tracking-[-0.055em] text-white">
              Sizzle Reel Studios
            </h1>
            <p className="font-display mt-7 text-[clamp(2.2rem,5vw,4.8rem)] uppercase leading-none tracking-[0.02em] text-white/82">
              Music. Nightlife. Film.
            </p>
            <p className="mt-7 max-w-2xl text-[clamp(1.05rem,2vw,1.4rem)] leading-8 text-white/68">
              The next best thing to being in the room.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/42 sm:text-base">
              A three-person production team capturing artists, clubs, festivals, live sets,
              music videos, and the moments that make the room feel alive.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="#work" className="rounded-full bg-white px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-black">
                View Work
              </Link>
              <Link href="#contact" className="rounded-full border border-white/20 px-5 py-3 text-[0.72rem] uppercase tracking-[0.28em] text-white/78 transition-colors hover:border-white/50 hover:text-white">
                Enquire
              </Link>
            </div>
          </div>
          <div className="mt-8 flex items-end justify-between gap-6 text-[0.65rem] uppercase tracking-[0.28em] text-white/28">
            <span>Showreel placeholder</span>
            <span>Scroll ↓</span>
          </div>
        </div>
      </section>

      <section id="work" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-[92rem]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Selected Work</SectionLabel>
              <h2 className="font-display mt-4 text-[clamp(3rem,7vw,6rem)] uppercase leading-[0.9] tracking-[-0.045em] text-white">
                The good stuff.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/48">
              V1 uses deliberate media placeholders. Drop the real thumbnails and video loops in later without changing the page structure.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {featuredWork.map((project, index) => (
              <article
                key={project.title}
                className={`group relative overflow-hidden border border-white/10 bg-white/[0.025] ${project.format === "wide" ? "md:col-span-2" : ""}`}
              >
                <div className={`relative ${project.format === "wide" ? "aspect-[16/7]" : "aspect-[16/10]"}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,139,88,0.28),transparent_24%),linear-gradient(135deg,#1a1a1a,#080808)] transition-transform duration-500 group-hover:scale-[1.015]" />
                  <div className="absolute inset-0 flex items-center justify-center text-[0.64rem] uppercase tracking-[0.32em] text-white/18">
                    Video / image placeholder {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5 sm:p-7">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[0.64rem] uppercase tracking-[0.28em] text-[#ff9b6b]">{project.subtitle}</p>
                        <h3 className="font-display mt-2 text-[clamp(2rem,4vw,4rem)] uppercase leading-none tracking-[-0.035em] text-white">{project.title}</h3>
                      </div>
                      <p className="text-[0.64rem] uppercase tracking-[0.24em] text-white/38">{project.meta}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-20 sm:py-24">
        <div className="mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-8">
          <SectionLabel>From The Room</SectionLabel>
          <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {showcaseItems.map((item, index) => (
              <div key={item.label} className="group min-w-[68vw] snap-start sm:min-w-[18rem] lg:min-w-[21rem]">
                <div className="relative aspect-[9/14] overflow-hidden border border-white/10 bg-[linear-gradient(145deg,#181818,#090909)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_25%,rgba(255,123,69,0.18),transparent_28%)]" />
                  <span className="absolute inset-0 flex items-center justify-center text-[0.58rem] uppercase tracking-[0.3em] text-white/16">Media {index + 1}</span>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display text-3xl uppercase text-white">{item.label}</p>
                    <p className="mt-1 text-[0.64rem] uppercase tracking-[0.24em] text-white/38">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-[92rem] gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <SectionLabel>Recent Work</SectionLabel>
            <h2 className="font-display mt-4 text-[clamp(3rem,6vw,5.5rem)] uppercase leading-[0.9] tracking-[-0.04em] text-white">
              Still rolling.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/48">
              A simple latest-work feed so the site can stay alive without needing a full archive system yet.
            </p>
          </div>
          <div className="border-t border-white/12">
            {recentWork.map((item) => (
              <div key={item.title} className="grid gap-3 border-b border-white/12 py-5 sm:grid-cols-[8rem_1fr_auto] sm:items-center">
                <p className="text-[0.64rem] uppercase tracking-[0.25em] text-white/32">{item.date}</p>
                <p className="font-display text-2xl uppercase tracking-[-0.02em] text-white sm:text-3xl">{item.title}</p>
                <p className="text-[0.64rem] uppercase tracking-[0.24em] text-[#ff9b6b]">{item.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 py-16 sm:py-20">
        <div className="mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-8">
          <SectionLabel>Worked With</SectionLabel>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            {workedWith.map((name) => (
              <span key={name} className="font-display text-[clamp(1.8rem,4vw,3.8rem)] uppercase leading-none tracking-[-0.03em] text-white/72 transition-colors hover:text-white">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-[92rem]">
          <SectionLabel>Meet The Snags</SectionLabel>
          <div className="mt-5 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="font-display text-[clamp(3.5rem,7vw,7rem)] uppercase leading-[0.84] tracking-[-0.05em] text-white">
                Three snags.
                <br />
                One camera bag.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/48">
                Sizzle Reel Studios is Blake, Jack and George — a Perth-based trio shooting, directing, editing and generally carrying far too many batteries into nightclubs.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {snags.map((snag, index) => (
                <article key={snag.name} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-[linear-gradient(160deg,#1a1a1a,#080808)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-0.5deg]">
                    <span className="absolute inset-0 flex items-center justify-center text-[0.58rem] uppercase tracking-[0.3em] text-white/15">Portrait {index + 1}</span>
                  </div>
                  <h3 className="font-display mt-4 text-3xl uppercase leading-none text-white">{snag.name}</h3>
                  <p className="mt-2 text-[0.62rem] uppercase tracking-[0.22em] text-[#ff9b6b]">{snag.role}</p>
                  <p className="mt-3 text-sm leading-6 text-white/42">{snag.note}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-[92rem]">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="font-display mt-5 max-w-6xl text-[clamp(4rem,11vw,10rem)] uppercase leading-[0.82] tracking-[-0.055em] text-white">
            Got something cooking?
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="mailto:muntzblake@gmail.com" className="rounded-full bg-white px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-black">
              Email Us
            </a>
            <a href="https://instagram.com/sizzlereelstudios" target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-6 py-3 text-[0.72rem] uppercase tracking-[0.28em] text-white/78">
              Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
