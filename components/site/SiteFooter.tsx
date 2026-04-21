import Link from "next/link";
import { getSiteConfig } from "@/lib/srs/data";

export default function SiteFooter() {
  const site = getSiteConfig();

  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <p className="text-[0.7rem] uppercase tracking-[0.34em] text-white/45">
            {site.brand.parent} / {site.brand.name}
          </p>
          <p className="mt-3 text-sm leading-7 text-white/62">
            Perth-based production for DJs, artists, clubs, promoters, and festivals.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 text-[0.7rem] uppercase tracking-[0.24em] text-white/50 md:items-end">
          <Link href={`mailto:${site.contact.email}`} className="transition-colors hover:text-white">
            {site.contact.email}
          </Link>
          <Link href={site.contact.instagram} className="transition-colors hover:text-white">
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}
