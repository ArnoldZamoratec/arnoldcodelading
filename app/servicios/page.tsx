import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { landingCopy } from "@/content/copy";
import { PageIntro } from "@/components/page-intro";
import { ProblemsSection } from "@/components/sections/problems";
import { ServicesSection } from "@/components/sections/services";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Revisión de arquitectura, auditoría de código y liderazgo técnico fractional con entregables y alcance definidos para productos en producción.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Revisión · arquitectura · liderazgo técnico"
        title="Mapa de arquitectura, auditoría de código o dirección técnica."
        description="Elige según lo que está bloqueado: dependencias difíciles de cambiar, fallos que se repiten o decisiones técnicas sin responsable. Cada opción define su alcance y entregables."
      />
      <ServicesSection />
      <ProblemsSection />

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 lg:px-12">
        <div className="grid gap-8 rounded-3xl border border-[#e5e1d7] bg-[#fffdf8] p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-emerald-800">
              Qué recibes
            </p>
            <ul className="mt-5 grid gap-3 text-sm text-[#3f4941] sm:grid-cols-2">
              {[
                "Flujos críticos y dependencias identificados",
                "Hallazgos con contexto y evidencia",
                "Opciones comparadas por riesgo y coste",
                "Backlog con orden y criterios de aceptación",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/contacto#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
          >
            {landingCopy.hero.cta_primary}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
