"use client";

import { useActionState } from "react";
import dynamic from "next/dynamic";
import { unlockPreview } from "@/app/preview-auth";

const RDCanvas = dynamic(() => import("@/components/RDCanvas"), { ssr: false });

const initialState = {
  error: null,
};

export default function Home() {
  const [state, action, pending] = useActionState(unlockPreview, initialState);

  return (
    <main className="landing-shell">
      <RDCanvas />
      <img
        src="/szl-logo.gif"
        alt="SZL"
        className="landing-logo"
      />
      <form className="preview-gate" action={action}>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className={`preview-gate__input${state.error ? " preview-gate__input--error" : ""}`}
          autoFocus
          disabled={pending}
        />
        {state.error ? <p className="preview-gate__error">{state.error}</p> : null}
      </form>
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
