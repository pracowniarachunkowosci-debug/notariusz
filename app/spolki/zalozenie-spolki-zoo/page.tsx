import type { Metadata } from "next";
import Link from "next/link";
import { DocumentChecklist } from "@/components/service/DocumentChecklist";
import { BrandWordmark } from "@/components/BrandWordmark";
import { DirectAnswer } from "@/components/service/DirectAnswer";
import { ProcessSteps } from "@/components/service/ProcessSteps";
import { ServiceComparison } from "@/components/service/ServiceComparison";
import { ServiceContactCta } from "@/components/service/ServiceContactCta";
import { ServiceFaq } from "@/components/service/ServiceFaq";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServicePageHeader } from "@/components/service/ServicePageHeader";
import { ServiceStructuredData } from "@/components/service/ServiceStructuredData";
import { ServiceToc } from "@/components/service/ServiceToc";
import { SourceList } from "@/components/service/SourceList";
import { MobileStickyActions } from "@/components/MobileStickyActions";
import { companyFormationData } from "@/lib/company-formation-data";

export const metadata: Metadata = {
  title: "Założenie spółki z o.o. u notariusza | Wrocław",
  description: "Informacje o przygotowaniu umowy spółki z o.o., spotkaniu u notariusza, różnicach między S24 a aktem notarialnym oraz kolejnych krokach po podpisaniu.",
  alternates: { canonical: "/spolki/zalozenie-spolki-zoo/" },
  openGraph: {
    title: "Założenie spółki z o.o. u notariusza | Wrocław",
    description: "Przygotowanie umowy spółki z o.o. i rozmowa o kolejnych krokach w kancelarii notarialnej we Wrocławiu.",
    type: "article",
    url: "/spolki/zalozenie-spolki-zoo/",
  },
};

function ServiceFooter() {
  return (
    <footer className="border-t border-white/15 bg-foreground text-background" id="footer">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-12 sm:grid-cols-[1fr_auto] sm:items-end lg:px-8 lg:py-16">
        <div>
          <BrandWordmark href="/" inverse variant="footer" />
          <p className="mt-3 max-w-sm text-sm leading-6 text-background/65">Czarniak · Podkówka — kancelaria notarialna we Wrocławiu.</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-background/75" aria-label="Linki stopki">
          <Link className="hover:text-background" href="/">Strona główna</Link>
          <a className="hover:text-background" href="#wizyta">Kontakt</a>
          <a className="hover:text-background" href="#top">Do góry ↑</a>
        </nav>
      </div>
    </footer>
  );
}

export default function CompanyFormationPage() {
  return (
    <div className="page-shell min-h-screen overflow-clip" id="top">
      <ServiceStructuredData breadcrumbs={companyFormationData.breadcrumb} />
      <ServicePageHeader />
      <main>
        <nav className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-x-2 gap-y-1 px-5 pt-8 text-xs leading-5 text-muted-foreground lg:px-8" aria-label="Okruszki">
          {companyFormationData.breadcrumb.map((item, index) => (
            <span className="flex min-w-0 items-start gap-2" key={item.href}>
              {index > 0 ? <span aria-hidden="true">→</span> : null}
              {index === companyFormationData.breadcrumb.length - 1 ? <span className="min-w-0 break-words text-foreground">{item.label}</span> : <a className="min-w-0 break-words hover:text-foreground" href={item.href}>{item.label}</a>}
            </span>
          ))}
        </nav>

        <ServiceHero hero={companyFormationData.hero} />
        <DirectAnswer directAnswer={companyFormationData.directAnswer} />

        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-5 py-16 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-28">
          <aside className="lg:col-span-3">
            <ServiceToc items={companyFormationData.toc} />
          </aside>
          <div className="min-w-0 space-y-20 lg:col-span-8 lg:col-start-5 lg:space-y-32">
            <ServiceComparison comparison={companyFormationData.comparison} />

            <section className="service-section border-t border-border pt-10" id="indywidualnie" aria-labelledby="individual-title">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{companyFormationData.individual.eyebrow}</p>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.045em] text-foreground sm:text-5xl" id="individual-title">{companyFormationData.individual.title}</h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">{companyFormationData.individual.intro.text}</p>
              <div className="mt-10 border-t border-border">
                {companyFormationData.individual.items.map((item, index) => (
                  <article className="grid gap-3 border-b border-border py-6 sm:grid-cols-[5.5rem_0.8fr_1.2fr] sm:gap-6" key={item.title}>
                    <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
                    <h3 className="text-base font-medium text-foreground">{item.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{item.text.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <DocumentChecklist checklist={companyFormationData.checklist} />
            <ProcessSteps process={companyFormationData.process} />

            <section className="service-section border-t border-border pt-10" id="po-podpisaniu" aria-labelledby="after-signing-title">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{companyFormationData.afterSigning.eyebrow}</p>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.045em] text-foreground sm:text-5xl" id="after-signing-title">{companyFormationData.afterSigning.title}</h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">{companyFormationData.afterSigning.intro.text}</p>
              <div className="mt-10 grid gap-x-8 border-t border-border sm:grid-cols-2">
                {companyFormationData.afterSigning.items.map((item) => (
                  <article className="border-b border-border py-6" key={item.title}>
                    <h3 className="font-display text-2xl tracking-[-0.03em] text-foreground">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text.text}</p>
                  </article>
                ))}
              </div>
              {companyFormationData.afterSigning.relatedExpertResource ? <a href={companyFormationData.afterSigning.relatedExpertResource.href}>{companyFormationData.afterSigning.relatedExpertResource.label}</a> : null}
            </section>

            <ServiceFaq faq={companyFormationData.faq} />
            <SourceList sources={companyFormationData.sources} />
            <ServiceContactCta contact={companyFormationData.contact} />
          </div>
        </div>
      </main>
      <ServiceFooter />
      <MobileStickyActions />
    </div>
  );
}
