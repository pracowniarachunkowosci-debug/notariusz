import type { companyFormationData } from "@/lib/company-formation-data";

type TocItems = typeof companyFormationData.toc;

export function ServiceToc({ items }: { items: TocItems }) {
  return (
    <nav aria-label="Na tej stronie" className="service-toc lg:sticky lg:top-28">
      <p className="mb-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">Na tej stronie</p>
      <div className="flex gap-5 overflow-x-auto pb-2 lg:block lg:space-y-3 lg:overflow-visible lg:pb-0">
        {items.map((item, index) => (
          <a className="flex shrink-0 items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground lg:gap-4" href={item.href} key={item.href}>
            <span className="font-mono text-[0.65rem] text-border">0{index + 1}</span>
            <span className="whitespace-nowrap lg:whitespace-normal">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
