import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { landingCopy } from "@/content/copy";
import { HeroSection } from "@/components/sections/hero";

export function LandingPage() {
  const { home } = landingCopy;

  return (
    <main className="min-h-screen bg-[#f8f6ef] text-[#202720]">
      <HeroSection />

      <section
        aria-labelledby="site-pages-title"
        className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24 lg:px-12"
      >
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">
            ARNOLDCODE
          </p>
          <h2
            id="site-pages-title"
            className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#202720] md:text-5xl"
          >
            {home.pages_title}
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#5f685f]">
            {home.pages_description}
          </p>
        </div>

        <nav
          aria-label="Explora las páginas de ARNOLDCODE"
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {home.pages.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex min-h-52 flex-col rounded-3xl border border-[#e5e1d7] bg-[#fffdf8] p-6 transition hover:-translate-y-1 hover:border-emerald-800/30 hover:shadow-lg hover:shadow-[#766f5e]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-800">
                {item.eyebrow}
              </span>
              <span className="mt-4 flex items-center justify-between gap-4 text-2xl font-semibold tracking-[-0.04em] text-[#202720]">
                {item.title}
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-[#687168] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-800"
                />
              </span>
              <span className="mt-3 text-sm leading-6 text-[#5f685f]">
                {item.description}
              </span>
            </Link>
          ))}
        </nav>
      </section>

      <section className="border-y border-[#e5e1d7] bg-[#f0ede4]/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#202720] md:text-3xl">
              {home.cta_title}
            </h2>
            <p className="mt-3 leading-7 text-[#5f685f]">
              {home.cta_description}
            </p>
          </div>
          <Link
            href="/contacto#contact"
            data-cta="home_footer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800"
          >
            {landingCopy.hero.cta_primary}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
