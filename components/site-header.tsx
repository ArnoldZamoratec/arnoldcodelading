"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { MobileNavigation } from "@/components/mobile-navigation";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Metodología", href: "/metodologia" },
  { label: "Casos", href: "/casos" },
  { label: "Sobre mí", href: "/sobre-mi" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e1d7] bg-[#fbfaf5]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 md:px-10 lg:px-12">
        <Link
          href="/"
          aria-label="ArnoldCode, inicio"
          className="block w-[140px] shrink-0 min-[375px]:w-[170px] sm:w-[210px] lg:w-[230px]"
        >
          <Image
            src="/arnoldcode-logo.png"
            alt="ArnoldCode"
            width={310}
            height={48}
            preload
            className="h-auto w-full"
          />
        </Link>

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-7 text-sm text-[#5f685f] lg:flex"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`relative py-2 transition hover:text-[#202720] after:absolute after:inset-x-0 after:-bottom-[13px] after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#00cbd1] after:transition-transform hover:after:scale-x-100 ${
                pathname === item.href
                  ? "font-semibold text-[#202720] after:scale-x-100"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <MobileNavigation />

        <Link
          href="/contacto#contact"
          data-cta="header"
          className="hidden items-center gap-2 rounded-xl bg-[#202720] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#00b8bf] hover:text-[#10282a] sm:inline-flex"
        >
          Describir el problema
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}
