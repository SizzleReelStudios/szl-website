"use client";

import { useState } from "react";
import { pastWork } from "@/content/srs/past-work";

const filters = ["All work", "Events", "Music videos", "Promos"] as const;
type Filter = typeof filters[number];

export default function PastWork() {
  const [filter, setFilter] = useState<Filter>("All work");
  const [expanded, setExpanded] = useState(false);
  const matching = pastWork.filter((project) => filter === "All work" || project.category === filter);
  const visible = expanded ? matching : matching.slice(0, 6);

  return (
    <section id="past-work" className="past-work" aria-labelledby="past-work-title">
      <div className="past-work-inner">
        <div className="past-work-heading">
          <h2 id="past-work-title" className="font-display">Past work.</h2>
          <p>More nights, releases and stories.<br />A selection from behind the camera.</p>
        </div>
        <div className="past-work-filters" role="group" aria-label="Filter past work">
          {filters.map((item) => <button key={item} type="button" aria-pressed={filter === item} onClick={() => { setFilter(item); setExpanded(false); }}>{item}</button>)}
        </div>
        <p className="past-work-count" role="status">Showing {visible.length} of {matching.length} projects</p>
        <div className="past-work-list">
          {visible.map((project) => (
            <details key={`${filter}-${project.title}-${project.year}`} className="past-work-item">
              <summary>
                <span className="past-work-year">{project.year}</span>
                <h3 className="font-display">{project.title}</h3>
                <span className="past-work-category">{project.category}</span>
                <span className="past-work-toggle" aria-hidden="true" />
              </summary>
              <div className="past-work-description">
                <p className="past-work-credit">{project.credit}</p>
                <p>{project.description}</p>
                {project.watchUrl ? <a href={project.watchUrl} target="_blank" rel="noreferrer">Watch project ↗</a> : null}
              </div>
            </details>
          ))}
        </div>
        {!expanded && matching.length > 6 ? <button className="past-work-more" type="button" onClick={() => setExpanded(true)}>Show all {matching.length} projects</button> : null}
      </div>
    </section>
  );
}
