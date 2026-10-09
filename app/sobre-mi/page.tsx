import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { landingCopy } from "@/content/copy";
import { PageIntro } from "@/components/page-intro";
import { AboutSection } from "@/components/sections/about";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conoce a Arnold Huaman, consultor de ingeniería de software. Trabajo directamente con el equipo en revisión técnica, arquitectura y ejecución.",
};

const workingValues = [
  "Reviso el cambio con quien mantiene el módulo y con quien recibe el impacto en producto u operaciones.",
  "Documento opciones, dependencias y riesgos para que la decisión no quede solo en una conversación.",
  "Si acordamos implementar, trabajo sobre cambios verificables y dejo al equipo el contexto para mantenerlos.",
];

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Sobre ARNOLDCODE"
        title="Soy Arnold Huaman. Trabajo directamente en el sistema y con el equipo."
        description="ARNOLDCODE es mi práctica de consultoría de ingeniería. Participo en la revisión técnica y en las decisiones; no delego el diagnóstico a un equipo comercial."
      />
      <AboutSection />

      <section className="border-y border-[#e5e1d7] bg-[#f0ede4]/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-20 lg:px-12">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">
              Cómo trabajo
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#202720] md:text-4xl">
              Reviso el sistema junto a quienes lo mantienen.
            </h2>
          </div>
          <ul className="space-y-4">
            {workingValues.map((value) => (
              <li
                key={value}
                className="flex gap-3 rounded-2xl border border-[#e5e1d7] bg-[#fffdf8] p-5 leading-7 text-[#3f4941]"
              >
                <CheckCircle2
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-emerald-700"
                />
                {value}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12">
        <p className="max-w-3xl text-2xl font-medium leading-relaxed tracking-[-0.03em] text-[#3f4941] md:text-4xl">
          {landingCopy.about.philosophy}
        </p>
        <Link
          href="/contacto#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          Enviar un problema para revisar
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}
