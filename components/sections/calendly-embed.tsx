import { CalendarDays, ExternalLink } from "lucide-react";

import { getCalendlyUrl } from "@/lib/calendly";

export function CalendlyEmbed() {
  const calendlyUrl = getCalendlyUrl();

  if (!calendlyUrl) {
    return null;
  }

  return (
    <section
      id="calendar"
      aria-labelledby="calendar-title"
      className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 md:px-10 lg:px-12"
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">
            Agenda
          </p>
          <h2
            id="calendar-title"
            className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#202720] md:text-5xl"
          >
            Elige un horario para conversar
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f685f]">
            Reserva una llamada para revisar el contexto, las prioridades y el
            siguiente paso más útil para tu equipo.
          </p>
        </div>
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-emerald-800 transition hover:text-emerald-900"
        >
          Abrir agenda en otra pestaña
          <ExternalLink aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>

      <div className="overflow-hidden rounded-3xl border border-[#e5e1d7] bg-white shadow-sm shadow-[#766f5e]/5">
        <iframe
          src={calendlyUrl}
          title="Agenda una llamada con ARNOLDCODE"
          className="h-[760px] w-full border-0"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <p className="mt-4 flex items-center gap-2 text-sm text-[#687168]">
        <CalendarDays aria-hidden="true" className="h-4 w-4" />
        La disponibilidad se actualiza directamente desde el calendario.
      </p>
    </section>
  );
}
