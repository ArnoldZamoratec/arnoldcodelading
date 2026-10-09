import { landingCopy } from "@/content/copy";

export function ProcessSection() {
  const { process } = landingCopy;

  return (
    <section id="process" className="border-y border-[#e5e1d7] bg-[#f0ede4]/70">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">Proceso</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#202720] md:text-5xl">
            {process.title}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {process.steps.map((step) => (
            <article key={step.number} className="rounded-3xl border border-[#e5e1d7] bg-[#fffdf8] p-6 shadow-sm shadow-[#766f5e]/5">
              <div className="mb-4 text-sm font-medium uppercase tracking-[0.16em] text-emerald-800">{step.number}</div>
              <h3 className="text-xl font-semibold text-[#202720]">{step.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#5f685f]">{step.description}</p>
              <div className="mt-6 inline-flex rounded-full border border-[#e5e1d7] bg-[#f4f1e9] px-3 py-1 text-xs uppercase tracking-[0.14em] text-[#5f685f]">
                {step.duration}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
