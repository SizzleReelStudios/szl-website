import PageIntro from "@/components/site/PageIntro";
import SeedDataNotice from "@/components/site/SeedDataNotice";
import { FrankSprite } from "@/components/site/Frank";

// TODO(seed): placeholder members — needs real names, roles, bios, and portraits from the trio.
const SNAGS = [
  {
    name: "Snag 01",
    role: "Name, role, and bio needed",
    bio: "One third of the trio. Portrait and introduction coming with the real content pass.",
  },
  {
    name: "Snag 02",
    role: "Name, role, and bio needed",
    bio: "One third of the trio. Portrait and introduction coming with the real content pass.",
  },
  {
    name: "Snag 03",
    role: "Name, role, and bio needed",
    bio: "One third of the trio. Portrait and introduction coming with the real content pass.",
  },
];

export default function SnagsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Meet The Snags"
        title="Three of us. One Frank."
        body="The trio behind everything in this house — the videography, the cinema, the poddy, and whatever the portal turns out to be. Introductions below, portraits pending."
      />

      <section className="px-4 pb-8 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">
              The short version
            </p>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-white/66 sm:text-base">
              We&apos;re a Perth-based videography team capturing DJs, events, and everything
              that happens around them. In the crowd, on stage, behind the scenes — filming it
              as it happens, not staging it after. The goal&apos;s simple: make content that
              actually feels like you were there.
            </p>
          </div>
          <SeedDataNotice
            items={[
              "Snag names, roles, and bios are placeholders.",
              "Portraits are stand-in Frank sprites until real photos or pixel portraits exist.",
            ]}
          />
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {SNAGS.map((snag) => (
            <div
              key={snag.name}
              className="rounded-[1.7rem] border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex items-center justify-center rounded-[1.3rem] border border-white/10 bg-black/40 py-10">
                <FrankSprite size={96} className="frank-bob" />
              </div>
              <h2 className="font-display mt-5 text-[1.9rem] uppercase leading-none tracking-[-0.03em] text-white">
                {snag.name}
              </h2>
              <p className="mt-2 text-[0.66rem] uppercase tracking-[0.28em] text-[#ffb089]">
                {snag.role}
              </p>
              <p className="mt-3 text-sm leading-7 text-white/58">{snag.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
