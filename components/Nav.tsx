"use client";

import { useEffect, useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

interface NavProps {
  wordmark: string;
  links: NavLink[];
  instagram: string;
}

export default function Nav({ wordmark, links, instagram }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <a
        href="#hero"
        className="font-black uppercase tracking-[0.3em] text-white text-lg"
      >
        {wordmark}
      </a>

      <div className="flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hidden text-xs uppercase tracking-widest text-zinc-400 transition-colors hover:text-white sm:block"
          >
            {link.label}
          </a>
        ))}
        <a
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-widest text-zinc-400 transition-colors hover:text-white"
        >
          IG
        </a>
      </div>
    </nav>
  );
}
