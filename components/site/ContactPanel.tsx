import Link from "next/link";
import { getSiteConfig } from "@/lib/srs/data";

export default function ContactPanel() {
  const site = getSiteConfig();

  return (
    <section className="rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,155,107,0.14),rgba(255,255,255,0.02))] p-6 sm:p-8">
      <p className="text-[0.72rem] uppercase tracking-[0.34em] text-white/45">
        Contact
      </p>
      <h2 className="mt-5 max-w-2xl text-[clamp(2rem,5vw,3.4rem)] font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-white">
        If the work needs weight, pace, and proof, bring us in early.
      </h2>
      <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
        Use the lineup and archive to see how the work is structured. When you are ready,
        send the brief, event, or rollout plan and we will scope the right coverage.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={`mailto:${site.contact.email}`}
          className="rounded-full bg-white px-5 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-black transition-transform hover:-translate-y-0.5"
        >
          Email Us
        </Link>
        <Link
          href={site.contact.instagram}
          className="rounded-full border border-white/15 px-5 py-3 text-[0.7rem] uppercase tracking-[0.3em] text-white/80 transition-colors hover:border-white/40 hover:text-white"
        >
          Instagram
        </Link>
      </div>
    </section>
  );
}
