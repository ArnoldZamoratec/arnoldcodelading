import { CheckCircle2, ShieldCheck } from "lucide-react";

import { landingCopy } from "@/content/copy";
import { AboutSection } from "@/components/sections/about";
import { CasesSection } from "@/components/sections/cases";
import { ContactForm } from "@/components/sections/contact-form";
import { CalendlyEmbed } from "@/components/sections/calendly-embed";
import { FAQSection } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { ProblemsSection } from "@/components/sections/problems";
import { ProcessSection } from "@/components/sections/process";
import { ServicesSection } from "@/components/sections/services";
import { CollaborationPrinciples } from "@/components/sections/collaboration-principles";

export function LandingPage() {
  const { trust_bar, final_cta } = landingCopy;

  return (
    <div className="min-h-screen bg-[#f8f6ef] text-[#202720]">
      <main>
        <HeroSection />

        <section className="border-y border-[#e5e1d7] bg-[#f0ede4]/70">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6 py-6 text-sm text-[#5f685f] md:px-10 lg:px-12">
            {trust_bar.items.map((item) => (
              <div key={item} className="rounded-full border border-[#e2ded3] bg-white/70 px-4 py-2">
                {item}
              </div>
            ))}
          </div>
        </section>

        <ProblemsSection />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <CasesSection />
        <CollaborationPrinciples />
        <FAQSection />

        <CalendlyEmbed />

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="grid gap-8 rounded-[2rem] border border-[#e5e1d7] bg-[radial-gradient(circle_at_left,_rgba(21,128,61,0.09),transparent_38%)] p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">Compra de confianza</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#202720] md:text-5xl">
                {final_cta.headline}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f685f]">{final_cta.subheadline}</p>
              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-[#3f4941]">
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-700" />
                  Diagnóstico sin rodeos
                </div>
                <div className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-700" />
                  Revisión de riesgo real
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
