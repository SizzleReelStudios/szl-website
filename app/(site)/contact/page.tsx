import ContactPanel from "@/components/site/ContactPanel";
import PageIntro from "@/components/site/PageIntro";

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Contact"
        title="Clear path to enquiry. No buried CTA."
        body="This page is the holding structure for final enquiry copy, contact details, and any future booking form. For now it keeps the action obvious and direct."
      />

      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <ContactPanel />
        </div>
      </section>
    </main>
  );
}
