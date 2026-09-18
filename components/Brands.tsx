import { brands } from "@/content/srs/brands";

export default function Brands() {
  return (
    <section id="brands" className="brands-section" aria-labelledby="brands-title">
      <div className="brands-inner">
        <div className="brands-heading">
          <h2 id="brands-title" className="font-display">Brands we’ve<br />worked with.</h2>
          <p>Behind the nights, the stages and the rooms.<br />Event promoters, club brands and the teams bringing people together.</p>
        </div>
        <ul className="brands-grid">
          {brands.map((brand) => (
            <li key={brand.name}>
              <h3 className="font-display">{brand.name}</h3>
              <p>{brand.context}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
