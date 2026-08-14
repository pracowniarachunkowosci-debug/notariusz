import type { companyFormationData, ReviewableText } from "@/lib/company-formation-data";
import { ReviewNote } from "./ReviewNote";

type ComparisonContent = typeof companyFormationData.comparison;

export function ServiceComparison({ comparison }: { comparison: ComparisonContent }) {
  return (
    <section className="service-section border-t border-border pt-10" id="s24" aria-labelledby="comparison-title">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{comparison.eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.045em] text-foreground sm:text-5xl" id="comparison-title">{comparison.title}</h2>
      <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">{comparison.intro.text}</p>
      <ReviewNote className="mt-4" />

      <div className="mt-12 border-y border-border">
        <div className="grid grid-cols-[minmax(120px,0.7fr)_minmax(0,1fr)_minmax(0,1fr)] border-b border-border text-xs uppercase tracking-[0.14em] text-muted-foreground sm:grid-cols-[minmax(170px,0.8fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="px-0 py-4">Obszar</div>
          <div className="border-l border-border px-4 py-4 sm:px-6">S24</div>
          <div className="border-l border-border px-4 py-4 sm:px-6">Umowa u notariusza</div>
        </div>
        {comparison.rows.map((row) => {
          const s24 = row.s24 as ReviewableText;
          const notary = row.notary as ReviewableText;
          return (
            <div className="grid grid-cols-[minmax(120px,0.7fr)_minmax(0,1fr)_minmax(0,1fr)] border-b border-border last:border-b-0 sm:grid-cols-[minmax(170px,0.8fr)_minmax(0,1fr)_minmax(0,1fr)]" key={row.label}>
              <div className="py-5 pr-3 text-sm text-foreground sm:pr-6">{row.label}</div>
              <div className="border-l border-border px-4 py-5 text-sm leading-6 text-muted-foreground sm:px-6" data-requires-legal-review={s24.requiresLegalReview ? "true" : undefined}>{s24.text}</div>
              <div className="border-l border-border px-4 py-5 text-sm leading-6 text-muted-foreground sm:px-6" data-requires-legal-review={notary.requiresLegalReview ? "true" : undefined}>{notary.text}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
