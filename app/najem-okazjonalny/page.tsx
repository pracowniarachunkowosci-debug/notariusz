import type { Metadata } from "next";
import Link from "next/link";
import { BrandWordmark } from "@/components/BrandWordmark";
import { MobileStickyActions } from "@/components/MobileStickyActions";
import { DirectAnswer } from "@/components/service/DirectAnswer";
import { ProcessSteps } from "@/components/service/ProcessSteps";
import { ServiceFaq } from "@/components/service/ServiceFaq";
import { ServicePageHeader } from "@/components/service/ServicePageHeader";
import { ServiceToc } from "@/components/service/ServiceToc";
import { SourceList } from "@/components/service/SourceList";
import { OccasionalLeaseContact, OccasionalLeaseCosts, OccasionalLeaseDocuments, OccasionalLeaseEligibility, OccasionalLeaseEnforcement, OccasionalLeaseHero, OccasionalLeaseOtherLocale, OccasionalLeaseReplacement, OccasionalLeaseRoles, OccasionalLeaseTaxOffice } from "@/components/service/OccasionalLeaseSections";
import { occasionalLeaseData } from "@/lib/occasional-lease-data";

export const metadata: Metadata = {
  title: "Najem okazjonalny u notariusza | Wrocław",
  description: "Oświadczenie najemcy, dokumenty, inny lokal, 14 dni na zgłoszenie i przygotowanie najmu okazjonalnego u notariusza we Wrocławiu.",
  alternates: { canonical: "/najem-okazjonalny/" },
  openGraph: { title: "Najem okazjonalny u notariusza | Wrocław", description: "Oświadczenie najemcy, dokumenty, inny lokal, 14 dni i dalsze kroki przy najmie okazjonalnym.", type: "article", url: "/najem-okazjonalny/" },
};

function OccasionalLeaseStructuredData() {
  const breadcrumb = occasionalLeaseData.breadcrumb.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, item: `https://notariusz.example${item.href}` }));
  const faq = occasionalLeaseData.faq.items.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer.text } }));
  return <><script dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: breadcrumb }) }} type="application/ld+json" /><script dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq }) }} type="application/ld+json" /></>;
}

function OccasionalLeaseFooter() {
  return <footer className="border-t border-white/15 bg-foreground text-background" id="footer"><div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-12 sm:grid-cols-[1fr_auto] sm:items-end lg:px-8 lg:py-16"><div><BrandWordmark href="/" inverse variant="footer" /><p className="mt-3 max-w-sm text-sm leading-6 text-background/65">Czarniak · Podkówka — kancelaria notarialna we Wrocławiu.</p></div><nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-background/75" aria-label="Linki stopki"><Link className="hover:text-background" href="/">Strona główna</Link><a className="hover:text-background" href="#wizyta">Kontakt</a><a className="hover:text-background" href="#top">Do góry ↑</a></nav></div></footer>;
}

export default function OccasionalLeasePage() {
  return <div className="page-shell min-h-screen overflow-clip" id="top"><OccasionalLeaseStructuredData /><ServicePageHeader /><main><nav className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-x-2 gap-y-1 px-5 pt-8 text-xs leading-5 text-muted-foreground lg:px-8" aria-label="Okruszki">{occasionalLeaseData.breadcrumb.map((item, index) => <span className="flex min-w-0 items-start gap-2" key={item.href}>{index > 0 ? <span aria-hidden="true">→</span> : null}{index === occasionalLeaseData.breadcrumb.length - 1 ? <span className="min-w-0 break-words text-foreground" aria-current="page">{item.label}</span> : <a className="min-w-0 break-words hover:text-foreground" href={item.href}>{item.label}</a>}</span>)}</nav><OccasionalLeaseHero hero={occasionalLeaseData.hero} /><DirectAnswer directAnswer={occasionalLeaseData.directAnswer as unknown as Parameters<typeof DirectAnswer>[0]["directAnswer"]} /><div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-5 py-16 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-28"><aside className="lg:col-span-3"><ServiceToc items={occasionalLeaseData.toc as unknown as Parameters<typeof ServiceToc>[0]["items"]} /></aside><div className="min-w-0 space-y-20 lg:col-span-8 lg:col-start-5 lg:space-y-32"><OccasionalLeaseEligibility content={occasionalLeaseData.eligibility} /><OccasionalLeaseRoles content={occasionalLeaseData.roles} /><OccasionalLeaseDocuments content={occasionalLeaseData.documents} /><OccasionalLeaseOtherLocale content={occasionalLeaseData.otherLocale} /><OccasionalLeaseReplacement content={occasionalLeaseData.replacementLocale} /><ProcessSteps process={occasionalLeaseData.process as unknown as Parameters<typeof ProcessSteps>[0]["process"]} /><OccasionalLeaseTaxOffice content={occasionalLeaseData.taxOffice} /><OccasionalLeaseEnforcement content={occasionalLeaseData.enforcement} /><OccasionalLeaseCosts content={occasionalLeaseData.costs} /><ServiceFaq faq={occasionalLeaseData.faq as unknown as Parameters<typeof ServiceFaq>[0]["faq"]} /><SourceList sources={occasionalLeaseData.sources as unknown as Parameters<typeof SourceList>[0]["sources"]} /><OccasionalLeaseContact contact={occasionalLeaseData.contact} /></div></div></main><OccasionalLeaseFooter /><MobileStickyActions /></div>;
}
