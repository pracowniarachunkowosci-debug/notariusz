import type { companyFormationData, ReviewableText } from "@/lib/company-formation-data";
import { ReviewNote } from "./ReviewNote";

type FaqContent = typeof companyFormationData.faq;

export function ServiceFaq({ faq }: { faq: FaqContent }) {
  return (
    <section className="service-section border-t border-border pt-10" id="faq" aria-labelledby="faq-title">
      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{faq.eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.045em] text-foreground sm:text-5xl" id="faq-title">{faq.title}</h2>
      <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">{faq.intro.text}</p>
      <ReviewNote className="mt-4" />
      <div className="mt-10 border-t border-border">
        {faq.items.map((item) => {
          const answer = item.answer as ReviewableText;
          return (
            <article className="border-b border-border py-6" key={item.question}>
              <h3 className="font-display text-2xl leading-tight tracking-[-0.03em] text-foreground">{item.question}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground" data-requires-legal-review={answer.requiresLegalReview ? "true" : undefined}>{answer.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
