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
import { ApartmentChecklist, ApartmentContactCta, ApartmentEnergy, ApartmentHero, ApartmentInheritance, ApartmentMortgage, ApartmentPaymentAndCosts, ApartmentPreVisit } from "@/components/service/ApartmentSaleSections";
import { apartmentSaleData } from "@/lib/apartment-sale-data";

export const metadata: Metadata = {
  title: "Sprzedaż mieszkania u notariusza | Wrocław",
  description: "Sprawdź dokumenty do sprzedaży mieszkania, informacje o hipotece, spadku lub darowiźnie, świadectwie energetycznym, przebiegu sprzedaży i kosztach u notariusza we Wrocławiu.",
  alternates: { canonical: "/nieruchomosci/sprzedaz-mieszkania/" },
  openGraph: { title: "Sprzedaż mieszkania u notariusza | Wrocław", description: "Dokumenty, hipoteka, spadek lub darowizna, świadectwo energetyczne i przebieg sprzedaży mieszkania u notariusza.", type: "article", url: "/nieruchomosci/sprzedaz-mieszkania/" },
};

function ApartmentStructuredData() {
  const breadcrumb = apartmentSaleData.breadcrumb.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, item: `https://notariusz.example${item.href}` }));
  const faq = apartmentSaleData.faq.items.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer.text } }));
  return <><script dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: breadcrumb }) }} type="application/ld+json" /><script dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq }) }} type="application/ld+json" /></>;
}

function ApartmentFooter() {
  return <footer className="border-t border-white/15 bg-foreground text-background" id="footer"><div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-12 sm:grid-cols-[1fr_auto] sm:items-end lg:px-8 lg:py-16"><div><BrandWordmark href="/" inverse variant="footer" /><p className="mt-3 max-w-sm text-sm leading-6 text-background/65">Czarniak · Podkówka — kancelaria notarialna we Wrocławiu.</p></div><nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-background/75" aria-label="Linki stopki"><Link className="hover:text-background" href="/">Strona główna</Link><a className="hover:text-background" href="#wizyta">Kontakt</a><a className="hover:text-background" href="#top">Do góry ↑</a></nav></div></footer>;
}

export default function ApartmentSalePage() {
  return <div className="page-shell min-h-screen overflow-clip" id="top"><ApartmentStructuredData /><ServicePageHeader /><main><nav className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-x-2 gap-y-1 px-5 pt-8 text-xs leading-5 text-muted-foreground lg:px-8" aria-label="Okruszki">{apartmentSaleData.breadcrumb.map((item, index) => <span className="flex min-w-0 items-start gap-2" key={item.href}>{index > 0 ? <span aria-hidden="true">→</span> : null}{index === apartmentSaleData.breadcrumb.length - 1 ? <span className="min-w-0 break-words text-foreground" aria-current="page">{item.label}</span> : <a className="min-w-0 break-words hover:text-foreground" href={item.href}>{item.label}</a>}</span>)}</nav><ApartmentHero hero={apartmentSaleData.hero} /><DirectAnswer directAnswer={apartmentSaleData.directAnswer as unknown as Parameters<typeof DirectAnswer>[0]["directAnswer"]} /><div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-5 py-16 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-28"><aside className="lg:col-span-3"><ServiceToc items={apartmentSaleData.toc as unknown as Parameters<typeof ServiceToc>[0]["items"]} /></aside><div className="min-w-0 space-y-20 lg:col-span-8 lg:col-start-5 lg:space-y-32"><ApartmentChecklist checklist={apartmentSaleData.checklist} /><ApartmentPreVisit content={apartmentSaleData.preVisit} /><ApartmentMortgage content={apartmentSaleData.mortgage} /><ApartmentInheritance content={apartmentSaleData.inheritance} /><ApartmentEnergy content={apartmentSaleData.energy} /><ProcessSteps process={apartmentSaleData.process as unknown as Parameters<typeof ProcessSteps>[0]["process"]} /><ApartmentPaymentAndCosts payment={apartmentSaleData.payment} costs={apartmentSaleData.costs} /><ServiceFaq faq={apartmentSaleData.faq as unknown as Parameters<typeof ServiceFaq>[0]["faq"]} /><SourceList sources={apartmentSaleData.sources as unknown as Parameters<typeof SourceList>[0]["sources"]} /><ApartmentContactCta contact={apartmentSaleData.contact} /></div></div></main><ApartmentFooter /><MobileStickyActions /></div>;
}
