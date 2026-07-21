import PageIntro from "@/components/site/PageIntro";

// TODO(seed): placeholder series list — replace with real series/episode content model entries.
const PLANNED_SERIES = [
  {
    name: "Stanley's Playground",
    note: "Web series. Episode order and platform links coming with the real content pass.",
  },
  {
    name: "Killing of the Clones",
    note: "Web series. Timeline view planned so new viewers can follow the story from the start.",
  },
  {
    name: "SZL Vlogs",
    note: "The trio, unscripted. The connective tissue between everything else on the marquee.",
  },
];

export default function CinemaPage() {
  return (
    <main>
      <PageIntro
        eyebrow="SIZZL3 Cinema"
        title="The screens are being installed."
        body="This will be the hub for our skits and web series — everything watchable in order, with a timeline so you can follow the story even if you just walked in. Until then, the marquee shows what's coming."
      />

      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {PLANNED_SERIES.map((series, index) => (
            <div
              key={series.name}
              className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-white/35">
                Screen {index + 1} · Coming soon
              </p>
              <h2 className="font-display mt-4 text-[1.9rem] uppercase leading-none tracking-[-0.03em] text-white">
                {series.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/58">{series.note}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
