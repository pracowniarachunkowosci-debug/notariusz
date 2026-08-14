import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://notariusz.example";
  return { rules: [{ userAgent: "*", allow: "/" }], sitemap: `${baseUrl}/sitemap.xml` };
}
