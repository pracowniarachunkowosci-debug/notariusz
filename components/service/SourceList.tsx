import type { companyFormationData } from "@/lib/company-formation-data";
import { ReviewNote } from "./ReviewNote";

type SourceContent = typeof companyFormationData.sources;

export function SourceList({ sources }: { sources: SourceContent }) {
  return (
    <section className="service-section border-t border-border pt-10" id="zrodla" aria-labelledby="sources-title">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{sources.eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.045em] text-foreground sm:text-5xl" id="sources-title">{sources.title}</h2>
      <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">{sources.intro}</p>
      <ReviewNote className="mt-4" />
      {sources.reviewedBy || sources.lastReviewed || sources.sources.length > 0 ? (
        <dl className="mt-8 grid gap-5 border-t border-border pt-6 text-sm sm:grid-cols-2">
          {sources.reviewedBy ? <div><dt className="text-muted-foreground">Zweryfikował(a)</dt><dd className="mt-1 text-foreground">{sources.reviewedBy}</dd></div> : null}
          {sources.lastReviewed ? <div><dt className="text-muted-foreground">Ostatnia aktualizacja</dt><dd className="mt-1 text-foreground">{sources.lastReviewed}</dd></div> : null}
        </dl>
      ) : null}
      {sources.sources.length > 0 ? (
        <ul className="mt-6 space-y-3 text-sm text-foreground">
          {sources.sources.map((source) => <li key={source.href}><a className="underline decoration-border underline-offset-4" href={source.href}>{source.label}</a></li>)}
        </ul>
      ) : <p className="mt-8 border-l border-border pl-4 text-sm leading-6 text-muted-foreground">Źródła zostaną uzupełnione po weryfikacji merytorycznej.</p>}
    </section>
  );
}
