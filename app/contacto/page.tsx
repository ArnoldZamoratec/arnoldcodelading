import type { Metadata } from "next";

import { PageIntro } from "@/components/page-intro";
import { CalendlyEmbed } from "@/components/sections/calendly-embed";
import { ContactForm } from "@/components/sections/contact-form";
import { FAQSection } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntame qué está frenando la entrega de tu equipo y coordinemos una conversación técnica inicial.",
};

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Contacto"
        title="Empecemos por entender qué está pasando."
        description="Comparte el contexto de tu producto y del equipo. Revisaremos el problema, su prioridad y cuál sería el siguiente paso más útil."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-20">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">
              Una primera conversación
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#202720]">
              Contexto antes que pitch.
            </h2>
          </div>
          <p className="leading-7 text-[#5f685f]">
            No necesitas llegar con una solución definida. Cuéntame qué cambió,
            qué se está volviendo más difícil y qué necesita el negocio del área
            técnica.
          </p>
          <ul className="space-y-3 text-sm leading-6 text-[#3f4941]">
            <li>Conversación inicial, sin compromiso.</li>
            <li>Revisión del contexto y de las prioridades actuales.</li>
            <li>Próximos pasos claros si existe un buen encaje.</li>
          </ul>
        </div>
        <ContactForm />
      </section>
      <CalendlyEmbed />
      <FAQSection />
    </main>
  );
}
