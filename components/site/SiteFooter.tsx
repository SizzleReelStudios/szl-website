export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-[92rem] flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8">
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e31b23] shadow-[0_0_12px_rgba(255,48,56,0.62)]" />
            <p className="text-[0.68rem] uppercase tracking-[0.32em] text-white/40">
              Sizzle Reel Studios
            </p>
          </div>
          <p className="mt-3 text-sm leading-7 text-white/46">
            Perth-based production for artists, clubs, promoters, festivals, and music-led projects.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 text-[0.68rem] uppercase tracking-[0.24em] text-white/38 md:items-end">
          <a href="mailto:muntzblake@gmail.com" className="transition-[color,text-shadow] hover:text-white hover:[text-shadow:0_0_10px_rgba(227,27,35,0.38)]">
            muntzblake@gmail.com
          </a>
          <a href="https://instagram.com/sizzlereelstudios" target="_blank" rel="noreferrer" className="transition-[color,text-shadow] hover:text-white hover:[text-shadow:0_0_10px_rgba(227,27,35,0.38)]">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
