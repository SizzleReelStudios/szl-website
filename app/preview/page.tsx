"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useActionState } from "react";
import { unlockPreview } from "@/app/preview-auth";

const RDCanvas = dynamic(() => import("@/components/RDCanvas"), { ssr: false });

const initialState = {
  error: null,
};

export default function PreviewPage() {
  const [state, action, pending] = useActionState(unlockPreview, initialState);

  return (
    <main className="landing-shell">
      <RDCanvas />
      <div className="landing-panel">
        <p className="landing-kicker">Private Preview</p>
        <Image
          src="/szl-logo.gif"
          alt="SZL"
          width={480}
          height={270}
          className="landing-logo"
          priority
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
        <p className="landing-copy">Sizzle Reel Studios rebuild in progress.</p>
      </div>
    </main>
  );
}
