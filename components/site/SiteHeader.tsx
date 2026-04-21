import Link from "next/link";
import { getSiteConfig } from "@/lib/srs/data";

export default function SiteHeader() {
  const site = getSiteConfig();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(7,7,7,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="font-display text-[0.9rem] uppercase tracking-[0.24em] text-white">
            {site.brand.shortName}
          </span>
          <span className="hidden text-[0.72rem] uppercase tracking-[0.18em] text-white/45 sm:inline">
            {site.brand.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.68rem] uppercase tracking-[0.28em] text-white/60 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full border border-white/15 px-4 py-2 text-[0.68rem] uppercase tracking-[0.28em] text-white/75 transition-colors hover:border-white/40 hover:text-white"
        >
          Enquire
        </Link>
      </div>
    </header>
  );
}
