import type { Metadata } from "next";

import { PageIntro } from "@/components/page-intro";
import { CasesSection } from "@/components/sections/cases";
import { CollaborationPrinciples } from "@/components/sections/collaboration-principles";

export const metadata: Metadata = {
  title: "Escenarios de trabajo",
  description:
    "Escenarios ilustrativos de dependencias entre servicios, módulos legacy y prioridades técnicas. No se presentan como proyectos de clientes.",
  alternates: { canonical: "/casos" },
};

export default function CasesPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Escenarios ilustrativos, no testimonios"
        title="Tres escenarios técnicos y cómo se revisaría cada uno."
        description="Los ejemplos son hipotéticos, no historias de clientes: una regla duplicada entre servicios, un módulo crítico sin pruebas y prioridades en conflicto."
      />
      <CasesSection />
      <CollaborationPrinciples />
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
        <div className="rounded-3xl border border-emerald-800/15 bg-emerald-50 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#202720] md:text-3xl">
            ¿Un cambio o error de tu sistema se parece a alguno de estos?
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-[#526052]">
            Describe qué esperabas entregar, qué módulos intervinieron y qué
            error apareció. Con esos datos se puede delimitar qué código,
            pruebas y registros revisar antes de estimar el trabajo.
          </p>
          <a
            href="/contacto#contact"
            data-cta="cases_footer"
            className="mt-6 inline-flex rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            Enviar los detalles del problema
          </a>
        </div>
      </section>
    </main>
  );
}
