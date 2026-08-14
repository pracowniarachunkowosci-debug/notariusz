import type { companyFormationData } from "@/lib/company-formation-data";

type HeroContent = typeof companyFormationData.hero;

export function ServiceHero({ hero }: { hero: HeroContent }) {
  return (
    <section className="mx-auto grid max-w-[1280px] gap-14 px-5 pb-20 pt-16 sm:pb-24 sm:pt-24 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] lg:items-end lg:gap-20 lg:px-8 lg:pb-32 lg:pt-28" aria-labelledby="service-title">
      <div>
        <p className="mb-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">{hero.eyebrow}</p>
        <h1 className="max-w-4xl font-display text-5xl leading-[0.98] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-8xl" id="service-title">
          {hero.title}
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{hero.description}</p>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a className="border border-foreground bg-foreground px-5 py-3 text-sm text-background transition-colors hover:bg-transparent hover:text-foreground" href="#wizyta">
            {hero.primaryCta}
          </a>
          <a className="text-sm text-foreground underline decoration-border underline-offset-8 transition-colors hover:decoration-foreground" href="#proces">
            {hero.secondaryCta} <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className="relative min-h-56 border-l border-border pl-8 sm:min-h-72 lg:min-h-[25rem] lg:pl-12" aria-hidden="true" data-editorial-mark>
        <span className="absolute left-[-5px] top-0 size-2 rounded-full bg-foreground" />
        <div className="flex h-full flex-col justify-between">
          <div className="relative pt-2">
            <p className="font-display text-7xl leading-[0.78] tracking-[-0.1em] text-foreground/80 sm:text-8xl">sp.</p>
            <div className="mt-6 flex items-center gap-4 sm:mt-8">
              <span className="h-px w-12 bg-border sm:w-16" />
              <p className="font-display text-6xl leading-[0.82] tracking-[-0.09em] text-foreground/80 sm:text-7xl">z o.o.</p>
            </div>
          </div>
          <div className="space-y-3 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <div className="h-px w-20 bg-border" />
            <p>Wrocław / 2026</p>
            <p>Przygotowanie · rozmowa · dokument</p>
          </div>
        </div>
      </div>
    </section>
  );
}
