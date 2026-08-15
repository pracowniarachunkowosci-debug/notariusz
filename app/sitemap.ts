import type { MetadataRoute } from "next";
import { absoluteSiteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteSiteUrl("/"), lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: absoluteSiteUrl("/spolki/zalozenie-spolki-zoo/"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteSiteUrl("/nieruchomosci/sprzedaz-mieszkania/"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteSiteUrl("/spadki/akt-poswiadczenia-dziedziczenia/"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteSiteUrl("/najem-okazjonalny/"), lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
