"use client";

import { useRef, useState } from "react";

type Project = {
  title: string;
  subtitle: string;
  meta: string;
  /** A real, approved project image; omitted until supplied. */
  poster?: string;
  href?: string;
};

export default function ProjectAccordion({ projects }: { projects: readonly Project[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [focused, setFocused] = useState<number | null>(null);
  const rail = useRef<HTMLDivElement>(null);
  const active = focused ?? hovered;
  function move(direction: number) {
    const element = rail.current;
    if (element) element.scrollBy({ left: direction * element.clientWidth * 0.85, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  return (
    <div className="projects">
      <div className="project-controls">
        <p>Explore the work</p>
        <div><button type="button" aria-label="Previous projects" onClick={() => move(-1)}>←</button><button type="button" aria-label="Next projects" onClick={() => move(1)}>→</button></div>
      </div>
      <div className="project-rail" ref={rail} onMouseLeave={() => setHovered(null)}>
        {projects.slice(0, 4).map((project, index) => (
          <article key={project.title} className="project-panel" data-active={active === index} onMouseEnter={() => setHovered(index)} onFocus={() => setFocused(index)} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(null); }}>
            <div className="project-art" style={project.poster ? { backgroundImage: `url(${JSON.stringify(project.poster)})` } : undefined} />
            <button type="button" className="project-expand" aria-label={`Expand ${project.title}`} aria-pressed={active === index} onClick={() => setFocused(index)}>
              <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
              {!project.poster ? <span className="project-awaiting">Image coming soon</span> : null}
              <span className="project-caption"><span className="project-type">{project.subtitle}</span><span className="project-title font-display">{project.title}</span><span className="project-meta">{project.meta}</span></span>
            </button>
            {project.href ? <a className="project-link" href={project.href}>View {project.title} ↗</a> : null}
          </article>
        ))}
      </div>
      {projects.length > 4 ? <div className="project-additional">{projects.slice(4).map((project) => <div key={project.title}><h3 className="font-display">{project.title}</h3><p>{project.subtitle} · {project.meta}</p></div>)}</div> : null}
    </div>
  );
}
