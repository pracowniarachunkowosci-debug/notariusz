import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://notariusz.example";
  return [{ url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
