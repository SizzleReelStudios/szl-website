import { brands } from "@/content/srs/brands";

export default function Brands() {
  return (
    <section id="brands" className="brands-section" aria-labelledby="brands-title">
      <div className="brands-inner">
        <div className="brands-heading">
          <h2 id="brands-title" className="font-display">Brands we’ve worked with.</h2>
        </div>
        <ul className="brands-grid">
          {brands.map((brand) => (
            <li key={brand.name}>
              <h3 className="font-display">{brand.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
