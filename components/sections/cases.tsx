import { landingCopy } from "@/content/copy";

export function CasesSection() {
  const { cases } = landingCopy;

  return (
    <section id="cases" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">Escenarios de trabajo</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#202720] md:text-5xl">
          {cases.title}
        </h2>
        <p className="mt-4 leading-7 text-[#5f685f]">
          Ejemplos ilustrativos del tipo de retos que se pueden abordar; no son
          casos de clientes ni resultados garantizados.
        </p>
      </div>

      <div className="mt-12 space-y-5">
        {cases.items.map((item) => (
          <article key={`${item.problem}-${item.result}`} className="rounded-3xl border border-[#e5e1d7] bg-[#fffdf8] p-6 shadow-sm shadow-[#766f5e]/5 md:p-8">
            <div className="grid gap-5 md:grid-cols-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#687168]">Problema</p>
                <p className="mt-3 text-base leading-7 text-[#3f4941]">{item.problem}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#687168]">Solución</p>
                <p className="mt-3 text-base leading-7 text-[#3f4941]">{item.solution}</p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#687168]">Objetivo</p>
                <p className="mt-3 text-base leading-7 text-emerald-800">{item.result}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
