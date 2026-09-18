"use client";

import { useEffect, useRef, useState } from "react";

export default function NamesMarquee({ names }: { names: readonly string[] }) {
  const root = useRef<HTMLElement>(null);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let intersecting = false;
    const update = () => setVisible(intersecting && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      intersecting = entry.isIntersecting;
      update();
    });
    if (root.current) observer.observe(root.current);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  const rows = [0, 1, 2].map((row) => names.filter((_, index) => index % 3 === row));
  return (
    <section ref={root} className="names-band" aria-labelledby="names-heading" data-paused={paused || !visible}>
      <div className="names-heading">
        <h2 id="names-heading">Artists we’ve filmed</h2>
        <button type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>
          {paused ? "Resume motion" : "Pause motion"}
        </button>
      </div>
      <ul className="sr-only">{names.map((name) => <li key={name}>{name}</li>)}</ul>
      <div className="names-visual" aria-hidden="true">
        {rows.map((row, index) => (
          <div className="names-row" key={index}>
            <div className="names-track">
              {[0, 1].map((copy) => <div className="names-group" key={copy}>
                {row.map((name) => <span key={name}>{name}<i>✳</i></span>)}
              </div>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
