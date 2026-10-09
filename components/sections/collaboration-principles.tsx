export function CollaborationPrinciples() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">Forma de colaboración</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#202720] md:text-5xl">
          Trabajo directo, decisiones claras y transferencia al equipo.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Acceso directo",
            description:
              "Trabajas con la persona que analiza el contexto y participa en las decisiones, sin capas comerciales entre medio.",
          },
          {
            title: "Recomendaciones accionables",
            description:
              "Cada propuesta considera el riesgo, la capacidad del equipo y las prioridades actuales del producto.",
          },
          {
            title: "Conocimiento compartido",
            description:
              "El equipo participa en las decisiones y recibe documentación para poder sostener el trabajo realizado.",
          },
        ].map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-[#e5e1d7] bg-[#fffdf8] p-6 shadow-sm shadow-[#766f5e]/5"
          >
            <h3 className="text-xl font-semibold text-[#202720]">{item.title}</h3>
            <p className="mt-4 leading-7 text-[#5f685f]">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
