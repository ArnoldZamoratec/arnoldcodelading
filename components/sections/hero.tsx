import Link from "next/link";
import { ArrowRight, Check, Play } from "lucide-react";

import { landingCopy } from "@/content/copy";
import { getCalendlyUrl } from "@/lib/calendly";

export function HeroSection() {
  const { hero } = landingCopy;
  const calendlyUrl = getCalendlyUrl();

  return (
    <section className="relative overflow-hidden border-b border-[#e5e1d7]">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-12 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-12 lg:pb-28 lg:pt-16">
        <div className="relative z-10">
          <h1 className="max-w-xl text-[clamp(1.875rem,8vw,3rem)] font-semibold tracking-[-0.06em] text-[#202720] sm:text-5xl lg:text-7xl">
            {hero.headline_v1}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f685f]">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={calendlyUrl ? "/contacto#calendar" : "/contacto#contact"}
              data-cta="hero_primary"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              {hero.cta_primary}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href="/servicios"
              data-cta="hero_secondary"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d7d3c9] bg-white/70 px-5 py-3 text-sm font-semibold text-[#202720] transition hover:border-emerald-700/40 hover:bg-white"
            >
              <Play aria-hidden="true" className="h-4 w-4" />
              {hero.cta_secondary}
            </Link>
          </div>

          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#687168]">
              {hero.trust_label}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Petición", "Llamadas entre módulos", "Despliegue"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#e2ded3] bg-white/70 px-3 py-1.5 text-sm text-[#3f4941]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-card-enter relative z-10">
          <div className="rounded-3xl border border-[#e5e1d7] bg-white/70 p-5 shadow-xl shadow-[#766f5e]/10">
            <div className="rounded-2xl border border-[#e5e1d7] bg-[#fffdf8] p-5">
              <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#687168]">
                <span>Recorrido de un cambio</span>
              </div>
              <h2 className="max-w-sm text-2xl font-semibold tracking-[-0.04em] text-[#202720]">
                De la solicitud al punto exacto donde se interrumpe.
              </h2>
              <div className="mt-7 space-y-3">
                {[
                  { step: "01", label: "Reproducir la solicitud", detail: "Entrada · resultado esperado · error observado" },
                  { step: "02", label: "Seguir las llamadas", detail: "Módulos · APIs · consultas · eventos" },
                  { step: "03", label: "Definir la corrección", detail: "Cambio acotado · prueba · criterio de salida" },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-4 rounded-2xl border border-[#e5e1d7] bg-white/70 p-4"
                  >
                    <span className="font-mono text-sm font-medium text-emerald-800">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-semibold text-[#202720]">{item.label}</p>
                      <p className="mt-1 text-sm text-[#687168]">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#3f4941]">
                <Check aria-hidden="true" className="h-4 w-4 text-emerald-700" />
                Entrega: hallazgos vinculados al flujo revisado
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
