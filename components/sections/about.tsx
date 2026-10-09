import Image from "next/image";
import { landingCopy } from "@/content/copy";

export function AboutSection() {
  const { about } = landingCopy;

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-[#e5e1d7] bg-[#e8e4da]">
          <Image
            src="/arnold-profile.jpg"
            alt="Arnold Huaman en su espacio de trabajo"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-center"
            priority={false}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#14201a]/85 via-[#14201a]/10 to-transparent"
          />
          <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
            <div className="mb-4 inline-flex rounded-full border border-white/35 bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm">
              Fundador · ARNOLDCODE
            </div>
            <h2 className="text-4xl font-bold tracking-[-0.06em] text-white md:text-5xl">
              Arnold Huaman
            </h2>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-[#e5e1d7] bg-[#fffdf8] p-6">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">
              Sobre mí
            </p>
            <p className="mt-4 text-lg leading-8 text-[#5f685f]">{about.bio}</p>
          </div>
          <div className="rounded-3xl border border-[#e5e1d7] bg-[#fffdf8] p-6">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">Filosofía</p>
            <p className="mt-4 text-lg leading-8 text-[#3f4941]">{about.philosophy}</p>
          </div>
          <div className="rounded-3xl border border-[#e5e1d7] bg-[#fffdf8] p-6">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">Stack</p>
            <p className="mt-4 text-lg leading-8 text-[#3f4941]">{about.stack_highlight}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
