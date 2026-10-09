import type { Metadata } from "next";

import { PageIntro } from "@/components/page-intro";
import { CasesSection } from "@/components/sections/cases";
import { CollaborationPrinciples } from "@/components/sections/collaboration-principles";

export const metadata: Metadata = {
  title: "Escenarios de trabajo",
  description:
    "Ejemplos de problemas de arquitectura, coordinación y deuda técnica abordados con liderazgo técnico directo.",
};

export default function CasesPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Experiencia aplicada"
        title="Menos fricción técnica. Más claridad para entregar."
        description="Estos ejemplos muestran el tipo de situaciones que abordo y cómo conecto diagnóstico, decisiones técnicas y necesidades de negocio."
      />
      <CasesSection />
      <CollaborationPrinciples />
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
        <div className="rounded-3xl border border-emerald-800/15 bg-emerald-50 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#202720] md:text-3xl">
            ¿Te resulta familiar alguno de estos escenarios?
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-[#526052]">
            Podemos revisar tu contexto y determinar si una intervención técnica
            tiene sentido ahora.
          </p>
          <a
            href="/contacto#contact"
            className="mt-6 inline-flex rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            Conversar sobre tu caso
          </a>
        </div>
      </section>
    </main>
  );
}
