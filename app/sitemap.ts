import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://notariusz.example";
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/spolki/zalozenie-spolki-zoo/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/nieruchomosci/sprzedaz-mieszkania/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/spadki/akt-poswiadczenia-dziedziczenia/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
