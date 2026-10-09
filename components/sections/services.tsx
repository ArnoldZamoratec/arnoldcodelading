import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { landingCopy } from "@/content/copy";

export function ServicesSection() {
  const { services } = landingCopy;

  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">Servicios</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#202720] md:text-5xl">
          {services.title}
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {services.items.map((service) => (
          <article key={service.name} className="flex h-full flex-col rounded-3xl border border-[#e5e1d7] bg-[#fffdf8] p-6 shadow-sm shadow-[#766f5e]/5">
            <div className="mb-6 flex items-center justify-between">
              <span className="rounded-full border border-emerald-800/15 bg-emerald-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-emerald-800">
                servicio
              </span>
              <ArrowUpRight className="h-5 w-5 text-[#748076]" />
            </div>
            <h3 className="text-2xl font-semibold text-[#202720]">{service.name}</h3>
            <p className="mt-4 text-base leading-7 text-[#5f685f]">{service.description}</p>

            <ul className="mt-6 space-y-3 text-sm text-[#3f4941]">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-[#e5e1d7] pt-5 text-sm text-[#5f685f]">
              <span className="font-medium text-[#202720]">Ideal para:</span> {service.ideal_for}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
