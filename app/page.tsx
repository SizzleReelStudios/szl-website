"use client";

import dynamic from "next/dynamic";

const RDCanvas = dynamic(() => import("@/components/RDCanvas"), { ssr: false });

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#000",
        gap: "16px",
        position: "relative",
      }}
    >
      <RDCanvas />
      <p
        style={{
          position: "relative",
          color: "#fff",
          fontSize: "clamp(2rem, 8vw, 5rem)",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          margin: 0,
          zIndex: 1,
        }}
      >
        SZL
      </p>
      <p
        style={{
          position: "relative",
          color: "#888",
          fontSize: "clamp(0.85rem, 2.5vw, 1.1rem)",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          margin: 0,
          zIndex: 1,
        }}
      >
        Stay tuned&hellip; something&apos;s sizzling.
      </p>
      <a
        href="https://www.instagram.com/sizzlereelstudios"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "#999",
          transition: "color 0.2s",
          zIndex: 1,
        }}
        onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
        onMouseLeave={e => (e.currentTarget.style.color = "#999")}
        aria-label="Instagram"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <circle cx="12" cy="12" r="4"/>
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
        </svg>
      </a>
    </main>
  );
}
