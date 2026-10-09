"use client";

import Link from "next/link";
import { ArrowRight, Check, Play } from "lucide-react";
import { motion } from "framer-motion";

import { landingCopy } from "@/content/copy";
import { getCalendlyUrl } from "@/lib/calendly";

export function HeroSection() {
  const { hero } = landingCopy;
  const calendlyUrl = getCalendlyUrl();

  return (
    <section className="relative overflow-hidden border-b border-[#e5e1d7]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(21,128,61,0.1),transparent_48%)]" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-12 md:px-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-12 lg:pb-28 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-800/15 bg-emerald-50 px-3 py-1 text-xs font-medium tracking-[0.12em] text-emerald-800 uppercase">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            {hero.eyebrow}
          </div>

          <h1 className="max-w-xl text-4xl font-semibold tracking-[-0.06em] text-[#202720] sm:text-5xl lg:text-7xl">
            {hero.headline_v1}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f685f]">
            {hero.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href={calendlyUrl ? "#calendar" : "#contact"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
            >
              {hero.cta_primary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d7d3c9] bg-white/70 px-5 py-3 text-sm font-semibold text-[#202720] transition hover:border-emerald-700/40 hover:bg-white"
            >
              <Play className="h-4 w-4" />
              {hero.cta_secondary}
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-[#5f685f]">
            {hero.trust_label}
            <div className="flex -space-x-2">
              {["A", "S", "R"].map((item) => (
                <div
                  key={item}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d7d3c9] bg-white text-xs font-semibold text-[#3f4941]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative z-10"
        >
          <div className="rounded-3xl border border-[#e5e1d7] bg-white/70 p-5 shadow-xl shadow-[#766f5e]/10">
            <div className="rounded-2xl border border-[#e5e1d7] bg-[#fffdf8] p-5">
              <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-[#687168]">
                <span>Delivery health</span>
                <span className="rounded-full border border-emerald-700/20 bg-emerald-50 px-2 py-1 text-emerald-800">
                  estable
                </span>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Arquitectura", value: "92%", tone: "bg-emerald-400" },
                  { label: "Decisiones técnicas", value: "87%", tone: "bg-sky-400" },
                  { label: "Delivery predictiva", value: "80%", tone: "bg-violet-400" },
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="mb-2 flex items-center justify-between text-sm text-[#5f685f]">
                      <span>{metric.label}</span>
                      <span className="font-medium text-[#202720]">{metric.value}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[#e9e6dd]">
                      <div className={`h-full rounded-full ${metric.tone}`} style={{ width: metric.value }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-700/15 bg-emerald-50 p-4 text-sm text-emerald-950">
                <div className="mb-2 flex items-center gap-2 font-medium">
                  <Check className="h-4 w-4" />
                  Diagnóstico técnico en 7 días
                </div>
                <p className="text-emerald-900/80">
                  Defino prioridad real, riesgos y una ruta de ejecución sin fuego cruzado.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
