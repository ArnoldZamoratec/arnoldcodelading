import type { Metadata } from "next";

import { PageIntro } from "@/components/page-intro";
import { CalendlyEmbed } from "@/components/sections/calendly-embed";
import { ContactForm } from "@/components/sections/contact-form";
import { FAQSection } from "@/components/sections/faq";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Describe una entrega demorada, una incidencia repetida o una decisión de arquitectura pendiente. Arnold revisará la solicitud y el contexto.",
  alternates: { canonical: "/contacto" },
};

export default function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Contacto"
        title="Cuéntame qué cambio se está atascando."
        description="Incluye qué querían entregar, qué partes del sistema están implicadas y qué intentaron hasta ahora. No envíes información confidencial."
      />
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 lg:py-20">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">
              Información útil para evaluar el alcance
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#202720]">
              Un ejemplo concreto ayuda más que una presentación.
            </h2>
          </div>
          <p className="leading-7 text-[#5f685f]">
            Explica el flujo afectado y su impacto en el producto: usuarios
            bloqueados, release aplazado, operación manual o errores que
            reaparecen. No incluyas credenciales, datos personales ni código
            propietario.
          </p>
          <ul className="space-y-3 text-sm leading-6 text-[#3f4941]">
            <li>Qué intentaba hacer el usuario o el equipo.</li>
            <li>Qué servicios, módulos o despliegues están involucrados.</li>
            <li>Qué resultado del negocio o de operación está afectado.</li>
          </ul>
        </div>
        <ContactForm />
      </section>
      <CalendlyEmbed />
      <FAQSection />
    </main>
  );
}
