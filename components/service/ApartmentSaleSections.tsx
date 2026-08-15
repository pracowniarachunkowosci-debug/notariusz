import type { ApartmentReviewableText } from "@/lib/apartment-sale-data";
import { ReviewNote } from "./ReviewNote";

type ChecklistContent = typeof import("@/lib/apartment-sale-data").apartmentSaleData.checklist;
type PreVisitContent = typeof import("@/lib/apartment-sale-data").apartmentSaleData.preVisit;
type MortgageContent = typeof import("@/lib/apartment-sale-data").apartmentSaleData.mortgage;
type InheritanceContent = typeof import("@/lib/apartment-sale-data").apartmentSaleData.inheritance;
type EnergyContent = typeof import("@/lib/apartment-sale-data").apartmentSaleData.energy;
type PaymentContent = typeof import("@/lib/apartment-sale-data").apartmentSaleData.payment;
type CostsContent = typeof import("@/lib/apartment-sale-data").apartmentSaleData.costs;
type ContactContent = typeof import("@/lib/apartment-sale-data").apartmentSaleData.contact;

function SectionHeading({ eyebrow, title, id }: { eyebrow: string; title: string; id: string }) {
  return (
    <>
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.045em] text-foreground sm:text-5xl" id={id}>{title}</h2>
    </>
  );
}

export function ApartmentHero({ hero }: { hero: typeof import("@/lib/apartment-sale-data").apartmentSaleData.hero }) {
  return (
    <section className="mx-auto grid max-w-[1280px] gap-14 px-5 pb-20 pt-16 sm:pb-24 sm:pt-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] lg:items-end lg:gap-20 lg:px-8 lg:pb-32 lg:pt-28" aria-labelledby="apartment-sale-title">
      <div>
        <p className="mb-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">{hero.eyebrow}</p>
        <h1 className="max-w-4xl font-display text-5xl leading-[0.98] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-8xl" id="apartment-sale-title">{hero.title}</h1>
        <p className="mt-8 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">{hero.description}</p>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a className="border border-foreground bg-foreground px-5 py-3 text-sm text-background transition-colors hover:bg-transparent hover:text-foreground" href="#dokumenty">{hero.primaryCta}</a>
          <a className="text-sm text-foreground underline decoration-border underline-offset-8 transition-colors hover:decoration-foreground" href="#wizyta">{hero.secondaryCta} <span aria-hidden="true">↓</span></a>
        </div>
        <p className="mt-8 text-xs uppercase tracking-[0.15em] text-muted-foreground">Wrocław <span className="px-2 text-olive">·</span> przygotowanie do aktu</p>
      </div>
      <div className="relative min-h-64 border-l border-border pl-8 sm:min-h-80 lg:min-h-[25rem] lg:pl-12" aria-hidden="true" data-editorial-mark>
        <span className="absolute left-[-5px] top-0 size-2 rounded-full bg-olive" />
        <div className="flex h-full flex-col justify-between">
          <div className="pt-2">
            <p className="font-display text-7xl leading-[0.8] tracking-[-0.1em] text-foreground/80 sm:text-8xl">lokal</p>
            <div className="mt-6 flex items-center gap-4 sm:mt-8"><span className="h-px w-12 bg-border sm:w-16" /><p className="font-display text-6xl leading-[0.82] tracking-[-0.09em] text-foreground/80 sm:text-7xl">sprzedaż</p></div>
          </div>
          <div className="space-y-3 text-xs uppercase tracking-[0.16em] text-muted-foreground"><div className="h-px w-20 bg-border" /><p>Wrocław / 2026</p><p>Informacja · dokument · wizyta</p></div>
        </div>
      </div>
    </section>
  );
}

export function ApartmentChecklist({ checklist }: { checklist: ChecklistContent }) {
  return (
    <section className="service-section border-t border-border pt-10" id="dokumenty" aria-labelledby="apartment-checklist-title">
      <SectionHeading eyebrow={checklist.eyebrow} title={checklist.title} id="apartment-checklist-title" />
      <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">{checklist.intro.text}</p>
      <div className="mt-10">
        <h3 className="font-display text-3xl tracking-[-0.03em] text-foreground">{checklist.basicTitle}</h3>
        <div className="mt-6 border-t border-border">
          {checklist.basicItems.map((item) => <ReviewableRow key={item.number} number={item.number} title={item.title} text={item.text} />)}
        </div>
      </div>
      <div className="mt-12 border-t border-border pt-8">
        <h3 className="font-display text-3xl tracking-[-0.03em] text-foreground">{checklist.cooperativeTitle}</h3>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground" data-requires-legal-review="true">{checklist.cooperativeText.text}</p>
      </div>
      <a className="mt-8 inline-flex border-b border-foreground pb-2 text-sm text-foreground" href="#wizyta">{checklist.cta} <span className="ml-3" aria-hidden="true">→</span></a>
    </section>
  );
}

function ReviewableRow({ number, title, text }: { number: string; title: string; text: ApartmentReviewableText }) {
  return <div className="grid gap-2 border-b border-border py-5 sm:grid-cols-[5.5rem_0.8fr_1.2fr] sm:gap-6"><span className="font-mono text-xs text-muted-foreground">{number}</span><h3 className="text-base font-medium text-foreground">{title}</h3><p className="text-sm leading-6 text-muted-foreground" data-requires-legal-review={text.requiresLegalReview ? "true" : undefined}>{text.text}</p></div>;
}

export function ApartmentPreVisit({ content }: { content: PreVisitContent }) {
  return <section className="border-y border-border bg-surface px-5 py-8 sm:px-8" aria-labelledby="pre-visit-title"><div className="mx-auto grid max-w-[1280px] gap-4 sm:grid-cols-[0.35fr_0.65fr] sm:items-center sm:gap-10"><div><p className="text-xs uppercase tracking-[0.18em] text-olive">{content.eyebrow}</p><h3 className="mt-3 font-display text-3xl tracking-[-0.035em] text-foreground" id="pre-visit-title">{content.title}</h3></div><p className="max-w-2xl text-sm leading-7 text-foreground/80">{content.text.text}</p></div></section>;
}

export function ApartmentMortgage({ content }: { content: MortgageContent }) {
  return <section className="service-section border-t border-border pt-10" id="hipoteka" aria-labelledby="mortgage-title"><SectionHeading eyebrow={content.eyebrow} title={content.title} id="mortgage-title" /><p className="mt-6 max-w-2xl text-base leading-8 text-foreground/85">{content.answer.text}</p><ReviewNote className="mt-4" /><div className="mt-10 border-t border-border">{content.steps.map((step) => <ReviewableRow key={step.number} number={step.number} title={step.title} text={step.text} />)}</div></section>;
}

export function ApartmentInheritance({ content }: { content: InheritanceContent }) {
  return <section className="service-section border-t border-border pt-10" id="spadek-darowizna" aria-labelledby="inheritance-title"><p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{content.eyebrow}</p><h2 className="mt-4 font-display text-3xl leading-tight tracking-[-0.045em] text-foreground sm:text-5xl" id="inheritance-title" data-typography-variant="longQuestion">{content.title}</h2><p className="mt-6 max-w-2xl text-base leading-8 text-foreground/85" data-requires-legal-review="true">{content.answer.text}</p><p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground" data-requires-legal-review="true">{content.explanation.text}</p><a className="mt-8 inline-flex max-w-xl border-b border-foreground pb-2 text-sm leading-6 text-foreground" href="#wizyta">{content.cta} <span className="ml-3 shrink-0" aria-hidden="true">→</span></a></section>;
}

export function ApartmentEnergy({ content }: { content: EnergyContent }) {
  return <section className="service-section border-t border-border pt-10" id="swiadectwo" aria-labelledby="energy-title"><SectionHeading eyebrow={content.eyebrow} title={content.title} id="energy-title" /><p className="mt-6 max-w-2xl text-base leading-8 text-foreground/85">{content.answer.text}</p><p className="mt-5 max-w-2xl border-l border-olive pl-4 text-sm leading-7 text-muted-foreground">{content.note.text}</p></section>;
}

export function ApartmentPaymentAndCosts({ payment, costs }: { payment: PaymentContent; costs: CostsContent }) {
  return <section className="service-section border-t border-border pt-10" id="oplaty" aria-labelledby="costs-title"><SectionHeading eyebrow={costs.eyebrow} title={costs.title} id="costs-title" /><p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">{costs.intro.text}</p><ul className="mt-8 grid gap-3 border-t border-border sm:grid-cols-2">{costs.items.map((item, index) => <li className="border-b border-border py-4 text-sm text-foreground" key={item}><span className="mr-4 font-mono text-xs text-muted-foreground">0{index + 1}</span>{item}</li>)}</ul><div className="mt-14 border-t border-border pt-8"><h3 className="font-display text-3xl tracking-[-0.03em] text-foreground">{payment.title}</h3><p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground" data-requires-legal-review="true">{payment.text.text}</p>{payment.deposit.showNotarialDeposit ? <div className="mt-8 border-l border-olive pl-4"><h4 className="font-display text-2xl text-foreground">{payment.deposit.title}</h4><p className="mt-3 text-sm leading-7 text-muted-foreground">{payment.deposit.text.text}</p></div> : null}</div><div className="mt-14 border-t border-border pt-8"><h3 className="font-display text-3xl tracking-[-0.03em] text-foreground">{costs.pccTitle}</h3><p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{costs.pcc.text}</p><p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{costs.pccPayer.text}</p><p className="mt-5 max-w-2xl border-l border-olive pl-4 text-sm leading-7 text-muted-foreground" data-requires-legal-review="true">{costs.firstHome.text}</p></div><div className="mt-14 border-t border-border pt-8"><h3 className="font-display text-3xl tracking-[-0.03em] text-foreground">{costs.pitTitle}</h3><p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground" data-requires-legal-review="true">{costs.pit.text}</p><p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground" data-requires-legal-review="true">{costs.pitNote.text}</p></div></section>;
}

export function ApartmentContactCta({ contact }: { contact: ContactContent }) {
  return <section className="service-section border-t border-border pt-10" id="wizyta" aria-labelledby="apartment-contact-title"><div className="grid gap-10 border-b border-border pb-16 sm:pb-20 lg:grid-cols-[1fr_0.75fr] lg:gap-20"><div><p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{contact.eyebrow}</p><h2 className="mt-4 max-w-xl font-display text-4xl leading-tight tracking-[-0.045em] text-foreground sm:text-5xl" id="apartment-contact-title">{contact.title}</h2><p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">{contact.description}</p><div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"><a className="border border-foreground bg-foreground px-5 py-3 text-sm text-background transition-colors hover:bg-transparent hover:text-foreground" href="#kontakt">Zapytaj kancelarię</a><a className="text-sm text-foreground underline decoration-border underline-offset-8" href="#top">Wróć na początek ↑</a></div></div><div className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-10"><p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Kontakt</p><div className="mt-6 space-y-5 text-sm leading-6" id="kontakt"><div><p className="text-muted-foreground">Adres</p><p className="mt-1 text-foreground">ul. Mińska 54–56, Wrocław</p></div><div><p className="text-muted-foreground">Parking</p><p className="mt-1 text-foreground">Parking przy kancelarii</p></div></div></div></div></section>;
}
