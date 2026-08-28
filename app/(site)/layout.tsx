import type { ReactNode } from "react";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f3ede2]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(255,125,67,0.12),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.045),transparent_24%)]" />
      <SiteHeader />
      <div className="relative z-10">{children}</div>
      <SiteFooter />
    </div>
  );
}
