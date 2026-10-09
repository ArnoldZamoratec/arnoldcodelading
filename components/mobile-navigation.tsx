"use client";

import { useEffect, useRef, type KeyboardEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Metodología", href: "/metodologia" },
  { label: "Casos", href: "/casos" },
  { label: "Sobre mí", href: "/sobre-mi" },
  { label: "Contacto", href: "/contacto" },
];

export function MobileNavigation() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.open = false;
    }
  }, [pathname]);

  function closeMenu() {
    if (menuRef.current) {
      menuRef.current.open = false;
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDetailsElement>) {
    if (event.key === "Escape" && menuRef.current?.open) {
      closeMenu();
      menuRef.current.querySelector("summary")?.focus();
    }
  }

  return (
    <details
      ref={menuRef}
      onKeyDown={handleKeyDown}
      className="relative lg:hidden"
    >
      <summary className="cursor-pointer list-none rounded-full border border-[#d7d3c9] bg-white/80 px-4 py-2 text-sm font-medium text-[#202720] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700">
        Menú
      </summary>
      <nav
        aria-label="Navegación móvil"
        className="absolute right-0 top-12 z-50 flex min-w-52 flex-col gap-1 rounded-2xl border border-[#e5e1d7] bg-[#fffdf8] p-2 text-sm text-[#3f4941] shadow-xl shadow-[#766f5e]/10"
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={closeMenu}
            className="rounded-xl px-3 py-2 transition hover:bg-[#f0ede4]"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contacto#contact"
          onClick={closeMenu}
          className="mt-1 rounded-xl bg-emerald-700 px-3 py-2 font-medium text-white"
        >
          Describir el problema
        </Link>
      </nav>
    </details>
  );
}
