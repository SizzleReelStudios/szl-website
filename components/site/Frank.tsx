"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

// TODO(seed): placeholder sprite — replace with the real Frank pixel-art sprite set.
const SPRITE_ROWS = [
  "....oooooooo....",
  "...ohhhhhhhho...",
  "..ohhhhhhhhhho..",
  "..ohssssssssho..",
  "..osssssssssso..",
  "..osseesseesso..",
  "..ossppssppsso..",
  "..osssssssssso..",
  "..osssssssssso..",
  "..ossmmmmmmsso..",
  "..osssssssssso..",
  "...osssssssso...",
  "....oossssoo....",
  ".....osssso.....",
  ".....osssso.....",
  "......oooo......",
];

const SPRITE_COLORS: Record<string, string> = {
  o: "#160f0a",
  h: "#3a2417",
  s: "#ff9b6b",
  e: "#f7f1e6",
  p: "#160f0a",
  m: "#8a4a2b",
};

export function FrankSprite({
  size = 64,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      shapeRendering="crispEdges"
      className={`pixel-art ${className}`}
      aria-hidden="true"
    >
      {SPRITE_ROWS.flatMap((row, y) =>
        [...row].map((char, x) =>
          char === "." ? null : (
            <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={SPRITE_COLORS[char]} />
          ),
        ),
      )}
      {SPRITE_ROWS.flatMap((row, y) =>
        [...row].map((char, x) =>
          char === "e" || char === "p" ? (
            <rect
              key={`lid-${x}-${y}`}
              className="frank-lid"
              x={x}
              y={y}
              width={1}
              height={1}
              fill={SPRITE_COLORS.s}
            />
          ) : null,
        ),
      )}
    </svg>
  );
}

export type FrankIntent = "work" | "cinema" | "poddy" | "lost";

const INTENT_KEY = "szl-frank-intent";
const HIDDEN_KEY = "szl-frank-hidden";
const FRANK_STORE_EVENT = "szl-frank-store";

function readStorage(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string | null) {
  try {
    if (value === null) {
      window.localStorage.removeItem(key);
    } else {
      window.localStorage.setItem(key, value);
    }
  } catch {
    // storage unavailable — Frank forgets, which is in character
  }
  window.dispatchEvent(new Event(FRANK_STORE_EVENT));
}

export function setFrankIntent(intent: FrankIntent) {
  writeStorage(INTENT_KEY, intent);
}

function subscribeToFrankStore(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(FRANK_STORE_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(FRANK_STORE_EVENT, callback);
  };
}

const noopSubscribe = () => () => {};

type CrossroadsOption = {
  label: string;
  intent: FrankIntent;
  href: string | null;
  frankSays: string;
};

const CROSSROADS_OPTIONS: CrossroadsOption[] = [
  {
    label: "I want to check out the video work",
    intent: "work",
    href: "/our-work",
    frankSays: "good answer. through here.",
  },
  {
    label: "Check out the Sausage Sizzle Poddy",
    intent: "poddy",
    href: "/poddy",
    frankSays: "it's on ice, but the archive's warm.",
  },
  {
    label: "Take me to the cinema",
    intent: "cinema",
    href: "/cinema",
    frankSays: "shhh. it's starting.",
  },
  {
    label: "idk what I'm doing here",
    intent: "lost",
    href: null,
    frankSays: "happens to the best of us. here — start with what's still hot.",
  },
];

function frankLine(pathname: string, intent: FrankIntent | null): string {
  if (pathname.startsWith("/our-work")) {
    const depth = pathname.split("/").filter(Boolean).length;
    if (depth >= 3) {
      return "i was there for this one. front left, mostly.";
    }
    if (depth === 2) {
      return "every clip in this archive: us, in a crowd, filming.";
    }
    return intent === "work"
      ? "told you they were good."
      : "the lineup wall. the names get bigger every year.";
  }
  if (pathname.startsWith("/cinema")) {
    return intent === "cinema" ? "saved you a seat." : "shhh. it's starting.";
  }
  if (pathname.startsWith("/poddy")) {
    return "on ice. not dead. on ice.";
  }
  if (pathname.startsWith("/snags")) {
    return "ah. the snags themselves.";
  }
  if (pathname.startsWith("/services")) {
    return "the professional bit. i'll behave.";
  }
  if (pathname.startsWith("/about")) {
    return "the lore page.";
  }
  if (pathname.startsWith("/contact")) {
    return "go on. book them.";
  }
  return "keep wandering. i'll keep up.";
}

export default function Frank() {
  const pathname = usePathname();
  const router = useRouter();
  const [reply, setReply] = useState<string | null>(null);
  const timeoutsRef = useRef<number[]>([]);
  const hydrated = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
  const intentValue = useSyncExternalStore(
    subscribeToFrankStore,
    () => readStorage(INTENT_KEY),
    () => null,
  );
  const hidden =
    useSyncExternalStore(
      subscribeToFrankStore,
      () => readStorage(HIDDEN_KEY),
      () => null,
    ) === "1";

  const intent: FrankIntent | null =
    intentValue === "work" ||
    intentValue === "cinema" ||
    intentValue === "poddy" ||
    intentValue === "lost"
      ? intentValue
      : null;

  useEffect(() => {
    const timeouts = timeoutsRef.current;
    return () => {
      for (const id of timeouts) {
        window.clearTimeout(id);
      }
    };
  }, []);

  function choose(option: CrossroadsOption) {
    setFrankIntent(option.intent);
    setReply(option.frankSays);
    timeoutsRef.current.push(
      window.setTimeout(() => {
        if (option.href) {
          router.push(option.href);
        } else {
          document
            .getElementById("fresh-off-the-grill")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 900),
      window.setTimeout(() => setReply(null), 5200),
    );
  }

  // The enter screen stays Frank-free; everywhere else he's in the corner.
  if (!hydrated || pathname.startsWith("/preview")) {
    return null;
  }

  if (hidden) {
    return (
      <button
        type="button"
        onClick={() => writeStorage(HIDDEN_KEY, null)}
        className="fixed bottom-4 right-4 z-40 rounded-full border border-white/15 bg-black/70 px-3 py-2 text-[0.62rem] uppercase tracking-[0.28em] text-white/55 backdrop-blur transition-colors hover:border-white/35 hover:text-white"
      >
        frank?
      </button>
    );
  }

  const atCrossroads = pathname === "/" && reply === null;
  const line =
    reply ??
    (pathname === "/"
      ? intent
        ? "back again. what are we doing this time?"
        : "what are you doing here?"
      : frankLine(pathname, intent));

  return (
    <div className="frank-enter fixed bottom-4 right-4 z-40 flex w-[min(17rem,calc(100vw-2rem))] flex-col items-end gap-2">
      <div
        key={`${pathname}-${reply ?? "line"}`}
        className="frank-pop w-full rounded-2xl rounded-br-sm border border-white/14 bg-black/85 px-4 py-3 backdrop-blur"
      >
        <p className="text-[0.6rem] uppercase tracking-[0.3em] text-white/35">Frank</p>
        <p className="mt-1 text-sm leading-6 text-white/80">{line}</p>
        {atCrossroads ? (
          <div className="mt-3 grid gap-1.5">
            {CROSSROADS_OPTIONS.map((option) => (
              <button
                key={option.intent}
                type="button"
                onClick={() => choose(option)}
                className="rounded-full border border-white/15 px-3 py-2 text-left text-[0.62rem] uppercase tracking-[0.22em] text-white/70 transition-colors hover:border-white/40 hover:bg-white/[0.04] hover:text-white"
              >
                {option.label}
              </button>
            ))}
            <p className="mt-1 text-[0.56rem] uppercase tracking-[0.22em] text-white/30">
              …or ignore him and scroll. he can take it.
            </p>
          </div>
        ) : null}
        <button
          type="button"
          onClick={() => writeStorage(HIDDEN_KEY, "1")}
          className="mt-2 text-[0.6rem] uppercase tracking-[0.28em] text-white/35 transition-colors hover:text-white/70"
        >
          shoo, frank
        </button>
      </div>
      <FrankSprite size={56} className="frank-bob drop-shadow-[0_6px_16px_rgba(0,0,0,0.5)]" />
    </div>
  );
}
