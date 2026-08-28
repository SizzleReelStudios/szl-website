import Link from "next/link";

const NAV = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(0,0,0,0.84)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[92rem] items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="font-display text-[0.95rem] uppercase tracking-[0.24em] text-[#f1f1ef] transition-[text-shadow] group-hover:[text-shadow:0_0_12px_rgba(227,27,35,0.45)]">
            SZL
          </span>
          <span className="hidden text-[0.62rem] uppercase tracking-[0.22em] text-white/28 sm:inline">
            Perth, WA
          </span>
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.66rem] uppercase tracking-[0.28em] text-white/48 transition-[color,text-shadow] hover:text-white hover:[text-shadow:0_0_10px_rgba(227,27,35,0.38)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="szl-link-glow rounded-full border border-white/16 px-4 py-2 text-[0.66rem] uppercase tracking-[0.28em] text-white/70"
        >
          Enquire
        </Link>
      </div>
    </header>
  );
}
