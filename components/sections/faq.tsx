import { landingCopy } from "@/content/copy";

export function FAQSection() {
  const { faq } = landingCopy;

  return (
    <section className="mx-auto max-w-5xl px-6 py-20 md:px-10 lg:px-12">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">FAQ</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#202720] md:text-5xl">
          Preguntas frecuentes
        </h2>
      </div>

      <div className="mt-12 space-y-4">
        {faq.items.map((item) => (
          <details key={item.question} className="group rounded-2xl border border-[#e5e1d7] bg-[#fffdf8] p-5 text-left" open={item.question === faq.items[0].question}>
            <summary className="cursor-pointer list-none text-lg font-medium text-[#202720]">
              {item.question}
            </summary>
            <p className="mt-4 text-base leading-7 text-[#5f685f]">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
