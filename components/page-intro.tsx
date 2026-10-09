type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="border-b border-[#e5e1d7] bg-[#fbfaf5]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-12">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-800">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-[clamp(1.875rem,8vw,3rem)] font-semibold tracking-[-0.06em] text-[#202720] sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f685f]">
          {description}
        </p>
      </div>
    </section>
  );
}
