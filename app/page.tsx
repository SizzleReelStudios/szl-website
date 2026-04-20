"use client";

import { FormEvent, useState } from "react";
import dynamic from "next/dynamic";

const RDCanvas = dynamic(() => import("@/components/RDCanvas"), { ssr: false });
const PREVIEW_PASSWORD = process.env.NEXT_PUBLIC_SITE_PASSWORD;
const PREVIEW_SESSION_KEY = "szl_site_preview";

export default function Home() {
  const [unlocked, setUnlocked] = useState(() => (
    !PREVIEW_PASSWORD || (typeof window !== "undefined" && window.sessionStorage.getItem(PREVIEW_SESSION_KEY) === "1")
  ));
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  function handleUnlock(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (input === PREVIEW_PASSWORD) {
      window.sessionStorage.setItem(PREVIEW_SESSION_KEY, "1");
      setUnlocked(true);
      return;
    }
    setError(true);
    setInput("");
  }

  return (
    <main className="landing-shell">
      <RDCanvas />
      <img
        src="/szl-logo.gif"
        alt="SZL"
        className="landing-logo"
      />
      {!unlocked ? (
        <form className="preview-gate" onSubmit={handleUnlock}>
          <input
            type="password"
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
              setError(false);
            }}
            placeholder="Password"
            className={`preview-gate__input${error ? " preview-gate__input--error" : ""}`}
            autoFocus
          />
          {error ? <p className="preview-gate__error">Wrong password</p> : null}
        </form>
      ) : null}
      <p className="landing-copy">
        Stay tuned&hellip; something&apos;s sizzling.
      </p>
      <a
        href="https://www.instagram.com/sizzlereelstudios"
        target="_blank"
        rel="noopener noreferrer"
        className="landing-instagram"
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
