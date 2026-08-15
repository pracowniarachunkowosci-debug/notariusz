import { profiles } from "@/lib/home-data";
import { siteUrl } from "@/lib/site-config";

export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "Notary"],
    "@id": `${siteUrl}#kancelaria`,
    name: "Czarniak · Podkówka — Kancelaria Notarialna",
    url: siteUrl,
    address: { "@type": "PostalAddress", streetAddress: "ul. Mińska 54–56", addressLocality: "Wrocław", addressCountry: "PL" },
    areaServed: { "@type": "City", name: "Wrocław" },
    employee: profiles.map((profile) => ({ "@type": "Person", name: profile.name })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
