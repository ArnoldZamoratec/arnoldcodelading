import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MobileNavigation } from "@/components/mobile-navigation";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Metodología", href: "/metodologia" },
  { label: "Casos", href: "/casos" },
  { label: "Sobre mí", href: "/sobre-mi" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e1d7] bg-[#fbfaf5]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 md:px-10 lg:px-12">
        <Link
          href="/"
          className="text-lg font-semibold tracking-[-0.05em] text-[#202720]"
        >
          ARNOLDCODE
        </Link>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-7 text-sm text-[#5f685f] lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#202720]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <MobileNavigation />

        <Link
          href="/contacto#contact"
          className="hidden items-center gap-2 rounded-full border border-[#d7e7d9] bg-white/70 px-4 py-2 text-sm font-medium text-[#202720] transition hover:border-emerald-600 sm:inline-flex"
        >
          Agendar llamada
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}
