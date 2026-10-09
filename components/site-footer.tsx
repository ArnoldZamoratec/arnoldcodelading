import Image from "next/image";
import Link from "next/link";

import { landingCopy } from "@/content/copy";

const footerNavigation = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Metodología", href: "/metodologia" },
  { label: "Casos", href: "/casos" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Contacto", href: "/contacto" },
];

export function SiteFooter() {
  const { footer } = landingCopy;

  return (
    <footer className="border-t border-[#e5e1d7] bg-[#f0ede4]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1fr_auto] md:items-end md:px-10 lg:px-12">
        <div>
          <Link
            href="/"
            aria-label="ArnoldCode, inicio"
            className="block w-[210px]"
          >
            <Image
              src="/arnoldcode-logo.png"
              alt="ArnoldCode"
              width={310}
              height={48}
              className="h-auto w-full"
            />
          </Link>
          <p className="mt-2 max-w-md text-sm leading-7 text-[#5f685f]">
            {footer.tagline}
          </p>
        </div>

        <nav
          aria-label="Navegación del pie de página"
          className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[#5f685f]"
        >
          {footerNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#202720]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-[#687168] md:col-span-2">
          © ARNOLDCODE. Consultoría de ingeniería de software.
        </p>
      </div>
    </footer>
  );
}
