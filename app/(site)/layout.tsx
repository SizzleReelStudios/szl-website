import type { ReactNode } from "react";
import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-black text-[#f1f1ef]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_-8%,rgba(181,20,27,0.10),transparent_28%),radial-gradient(circle_at_84%_22%,rgba(255,255,255,0.025),transparent_18%)]" />
      <SiteHeader />
      <div className="relative z-10">{children}</div>
      <SiteFooter />
    </div>
  );
}
