import Link from "next/link";
import PageIntro from "@/components/site/PageIntro";

export default function PoddyPage() {
  return (
    <main>
      <PageIntro
        eyebrow="The Sausage Sizzle Poddy"
        title="On ice. Not dead. On ice."
        body="The poddy is on a break while the video work runs hot. When it comes back, this page becomes the episode shelf. Until then, consider this an honest hiatus notice instead of a page pretending otherwise."
      />

      <section className="px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-[0.68rem] uppercase tracking-[0.3em] text-white/40">
              While you wait
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
              The videography side of the house is very much awake — the lineup wall and
              event archive are the best places to see what we&apos;ve been doing instead
              of talking into microphones.
            </p>
            <Link
              href="/our-work"
              className="mt-6 inline-block rounded-full bg-white px-5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-black transition-transform hover:-translate-y-0.5"
            >
              See the video work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
