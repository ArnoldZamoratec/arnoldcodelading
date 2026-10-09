import { ArrowRight } from "lucide-react";

import { landingCopy } from "@/content/copy";

export function ProblemsSection() {
  const { problems } = landingCopy;

  return (
    <section id="problems" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">Problema</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#202720] md:text-5xl">
          {problems.title}
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {problems.items.map((item) => (
          <article key={item.title} className="rounded-3xl border border-[#e5e1d7] bg-[#fffdf8] p-6 shadow-sm shadow-[#766f5e]/5">
            <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800">
              <ArrowRight className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold text-[#202720]">{item.title}</h3>
            <p className="mt-4 text-base leading-7 text-[#5f685f]">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
