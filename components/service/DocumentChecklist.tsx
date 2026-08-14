import type { companyFormationData, ReviewableText } from "@/lib/company-formation-data";
import { ReviewNote } from "./ReviewNote";

type ChecklistContent = typeof companyFormationData.checklist;

export function DocumentChecklist({ checklist }: { checklist: ChecklistContent }) {
  return (
    <section className="service-section border-t border-border pt-10" id="dokumenty" aria-labelledby="checklist-title">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{checklist.eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.045em] text-foreground sm:text-5xl" id="checklist-title">{checklist.title}</h2>
      <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">{checklist.intro.text}</p>
      <ReviewNote className="mt-4" />
      <div className="mt-10 border-t border-border">
        {checklist.groups.map((group, index) => {
          const text = group.text as ReviewableText;
          return (
            <div className="grid gap-2 border-b border-border py-5 sm:grid-cols-[5.5rem_0.8fr_1.2fr] sm:gap-6" key={group.title}>
              <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
              <h3 className="text-base font-medium text-foreground">{group.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground" data-requires-legal-review={text.requiresLegalReview ? "true" : undefined}>{text.text}</p>
            </div>
          );
        })}
      </div>
      <a className="mt-8 inline-flex border-b border-foreground pb-2 text-sm text-foreground" href="#wizyta">{checklist.cta} <span className="ml-3" aria-hidden="true">→</span></a>
    </section>
  );
}
