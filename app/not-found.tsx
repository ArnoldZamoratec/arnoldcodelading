import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[65vh] max-w-7xl flex-col justify-center px-6 py-20 md:px-10 lg:px-12">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">
        Error 404
      </p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-[#202720] sm:text-5xl md:text-6xl">
        Esta página no está disponible.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-[#5f685f]">
        Es posible que el enlace haya cambiado. Puedes volver al inicio o
        consultar los servicios.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Ir al inicio
        </Link>
        <Link
          href="/servicios"
          className="inline-flex items-center gap-2 rounded-full border border-[#d7d3c9] bg-white/80 px-5 py-3 text-sm font-semibold text-[#202720] transition hover:bg-white"
        >
          Ver servicios
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}
