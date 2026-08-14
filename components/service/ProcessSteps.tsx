import type { companyFormationData, ReviewableText } from "@/lib/company-formation-data";
import { ReviewNote } from "./ReviewNote";

type ProcessContent = typeof companyFormationData.process;

export function ProcessSteps({ process }: { process: ProcessContent }) {
  return (
    <section className="service-section border-t border-border pt-10" id="proces" aria-labelledby="process-title">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{process.eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.045em] text-foreground sm:text-5xl" id="process-title">{process.title}</h2>
      <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">{process.intro.text}</p>
      <ReviewNote className="mt-4" />
      <ol className="mt-10 border-t border-border">
        {process.steps.map((step) => {
          const text = step.text as ReviewableText;
          return (
            <li className="grid gap-3 border-b border-border py-6 sm:grid-cols-[5.5rem_0.8fr_1.2fr] sm:gap-6" key={step.number}>
              <span className="font-mono text-sm text-muted-foreground">{step.number}</span>
              <h3 className="font-display text-2xl tracking-[-0.03em] text-foreground">{step.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground" data-requires-legal-review={text.requiresLegalReview ? "true" : undefined}>{text.text}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
