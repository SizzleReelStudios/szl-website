import Link from "next/link";

const NAV = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(5,5,5,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[92rem] items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="font-display text-[0.95rem] uppercase tracking-[0.24em] text-white">
            SZL
          </span>
          <span className="hidden text-[0.62rem] uppercase tracking-[0.22em] text-white/35 sm:inline">
            Perth, WA
          </span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.66rem] uppercase tracking-[0.28em] text-white/55 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="rounded-full border border-white/18 px-4 py-2 text-[0.66rem] uppercase tracking-[0.28em] text-white/78 transition-colors hover:border-white/45 hover:text-white"
        >
          Enquire
        </Link>
      </div>
    </header>
  );
}
