import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { ProcessSection } from "@/components/sections/process";

export const metadata: Metadata = {
  title: "Metodología",
  description:
    "Cómo pasamos de un cambio o incidencia concreta a una revisión del flujo, decisiones registradas y una intervención técnica acordada.",
  alternates: { canonical: "/metodologia" },
};

const principles = [
  {
    number: "01",
    title: "Reproducir el flujo",
    description:
      "Parto de un cambio o error concreto. Confirmo qué componente recibe la petición, qué datos transforma y dónde aparece el fallo o el retrabajo.",
  },
  {
    number: "02",
    title: "Comparar opciones por coste y riesgo",
    description:
      "Pongo lado a lado corregir el módulo, cambiar un contrato o migrar una parte. Documento dependencias, impacto operativo y qué queda fuera de alcance.",
  },
  {
    number: "03",
    title: "Dejar un siguiente paso verificable",
    description:
      "Cada acción sugerida tiene responsable, alcance y una forma de comprobarla, como una prueba, una métrica operativa o un criterio de aceptación.",
  },
];

export default function MethodologyPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Metodología"
        title="Seguimos un cambio real a través del producto."
        description="Empezamos por una entrega que se demoró o una incidencia repetida. Seguimos su recorrido por código, servicios, datos, pruebas y despliegue; acordamos el alcance antes de recomendar cambios."
      />
      <ProcessSection />

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">
            Principios de trabajo
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#202720] md:text-5xl">
            Cada recomendación debe poder vincularse con una decisión o un cambio.
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

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
        <Link
          href="/contacto#contact"
          data-cta="methodology_footer"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          Enviar un flujo para revisar
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}
