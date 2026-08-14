import type { companyFormationData } from "@/lib/company-formation-data";
import Link from "next/link";
import { contactData } from "@/lib/home-data";

type ContactContent = typeof companyFormationData.contact;

export function ServiceContactCta({ contact }: { contact: ContactContent }) {
  return (
    <section className="service-section border-t border-border pt-10" id="wizyta" aria-labelledby="contact-title">
      <div className="grid gap-10 border-b border-border pb-16 sm:pb-20 lg:grid-cols-[1fr_0.75fr] lg:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{contact.eyebrow}</p>
          <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight tracking-[-0.045em] text-foreground sm:text-5xl" id="contact-title">{contact.title}</h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">{contact.description}</p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a className="border border-foreground bg-foreground px-5 py-3 text-sm text-background transition-colors hover:bg-transparent hover:text-foreground" href="#kontakt">Zapytaj o przygotowanie umowy</a>
            <Link className="text-sm text-foreground underline decoration-border underline-offset-8" href="/">Wróć na stronę główną</Link>
          </div>
        </div>
        <div className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-10">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Kontakt</p>
          <div className="mt-6 space-y-5 text-sm leading-6" id="kontakt">
            <div><p className="text-muted-foreground">Adres</p><p className="mt-1 text-foreground">{contactData.address}</p></div>
            <div><p className="text-muted-foreground">Parking</p><p className="mt-1 text-foreground">{contactData.parking}</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
