import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { CasesSection } from "@/components/sections/cases";
import { ProcessSection } from "@/components/sections/process";

export const metadata: Metadata = {
  title: "Metodología",
  description:
    "Un proceso de diagnóstico, priorización y ejecución para resolver fricción técnica sin perder de vista el negocio.",
};

const principles = [
  {
    number: "01",
    title: "Entender antes de proponer",
    description:
      "Parto del producto, el equipo y las restricciones actuales. No recomiendo una reescritura ni una arquitectura nueva sin evidencia.",
  },
  {
    number: "02",
    title: "Priorizar por impacto y riesgo",
    description:
      "Hago explícitos los trade-offs y ordeno el trabajo según impacto de negocio, coste de demora y riesgo operativo.",
  },
  {
    number: "03",
    title: "Dejar capacidad instalada",
    description:
      "Las decisiones quedan documentadas y se trabajan con el equipo para que la mejora continúe después de la intervención.",
  },
];

export default function MethodologyPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Metodología"
        title="Claridad primero. Cambios sostenibles después."
        description="Un proceso de trabajo que reduce la incertidumbre, protege la operación y evita convertir la consultoría en recomendaciones que nadie puede ejecutar."
      />
      <ProcessSection />

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">
            Principios de trabajo
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#202720] md:text-5xl">
            Criterio técnico conectado a resultados reales.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="rounded-3xl border border-[#e5e1d7] bg-[#fffdf8] p-6"
            >
              <p className="text-sm font-medium tracking-[0.16em] text-emerald-800">
                {principle.number}
              </p>
              <h3 className="mt-4 text-xl font-semibold text-[#202720]">
                {principle.title}
              </h3>
              <p className="mt-3 leading-7 text-[#5f685f]">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CasesSection />

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
        <Link
          href="/contacto#contact"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          Revisar tu situación
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}
