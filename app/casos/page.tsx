import type { Metadata } from "next";

import { PageIntro } from "@/components/page-intro";
import { CasesSection } from "@/components/sections/cases";
import { CollaborationPrinciples } from "@/components/sections/collaboration-principles";

export const metadata: Metadata = {
  title: "Escenarios de trabajo",
  description:
    "Escenarios ilustrativos de dependencias entre servicios, módulos legacy y prioridades técnicas. No se presentan como proyectos de clientes.",
};

export default function CasesPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Escenarios ilustrativos, no testimonios"
        title="Problemas técnicos descritos como se ven dentro del equipo."
        description="No publico logos, métricas ni historias de clientes sin autorización. En su lugar, aquí explico cómo se delimitaría el trabajo en tres situaciones habituales."
      />
      <CasesSection />
      <CollaborationPrinciples />
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
        <div className="rounded-3xl border border-emerald-800/15 bg-emerald-50 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#202720] md:text-3xl">
            ¿Tienes un cambio o una incidencia concreta para revisar?
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-[#526052]">
            Describe qué esperabas entregar, qué parte del sistema intervino y
            qué obstáculo apareció. Esa información permite evaluar el alcance
            sin prometer resultados antes de revisar el sistema.
          </p>
          <a
            href="/contacto#contact"
            className="mt-6 inline-flex rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            Describir un problema similar
          </a>
        </div>
      </section>
    </main>
  );
}
