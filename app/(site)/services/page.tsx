import PageIntro from "@/components/site/PageIntro";
import { getServices } from "@/lib/srs/data";

export default function ServicesPage() {
  const services = getServices();

  return (
    <main>
      <PageIntro
        eyebrow="Services"
        title="Coverage built for the people booking shows, pushing artists, and filling rooms."
        body="Services should stay direct and outcome-focused. The current structure is ready for final copy, package language, and detailed deliverables once those are confirmed."
      />

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.id} className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/38">
                Service
              </p>
              <h2 className="mt-4 text-2xl font-medium uppercase tracking-[-0.03em] text-white">
                {service.name}
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/60">{service.summary}</p>
              <ul className="mt-6 space-y-2 text-sm text-white/50">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
