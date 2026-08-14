import type { companyFormationData } from "@/lib/company-formation-data";

type Breadcrumbs = typeof companyFormationData.breadcrumb;

export function ServiceStructuredData({ breadcrumbs }: { breadcrumbs: Breadcrumbs }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://notariusz.example${item.href}`,
    })),
  };

  return <script dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} type="application/ld+json" />;
}
