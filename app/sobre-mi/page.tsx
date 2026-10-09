import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { landingCopy } from "@/content/copy";
import { PageIntro } from "@/components/page-intro";
import { AboutSection } from "@/components/sections/about";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conoce a Arnold: ingeniero senior enfocado en arquitectura, modernización y liderazgo técnico para empresas de producto.",
};

const workingValues = [
  "Trabajo directamente con el equipo que opera el producto.",
  "Explico los trade-offs con claridad y sin vender complejidad.",
  "Mido el éxito por mejoras que el negocio y el equipo pueden sostener.",
];

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Sobre ARNOLDCODE"
        title="Senior por experiencia. Cercano en la colaboración."
        description="Una consultoría técnica boutique liderada por Arnold: intervención directa, criterio de ingeniería y foco constante en el contexto de negocio."
      />
      <AboutSection />

      <section className="border-y border-[#e5e1d7] bg-[#f0ede4]/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-20 lg:px-12">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">
              Cómo trabajo
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#202720] md:text-4xl">
              Criterio experto, colaboración sin capas.
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
          “{landingCopy.about.philosophy}”
        </p>
        <Link
          href="/contacto#contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          Hablemos de tu equipo
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}
