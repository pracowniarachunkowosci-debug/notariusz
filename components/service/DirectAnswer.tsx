import type { companyFormationData, ReviewableText } from "@/lib/company-formation-data";
import { ReviewNote } from "./ReviewNote";

type DirectAnswerContent = typeof companyFormationData.directAnswer;

export function DirectAnswer({ directAnswer }: { directAnswer: DirectAnswerContent }) {
  const answer = directAnswer.answer as ReviewableText;

  return (
    <section className="border-y border-border bg-surface" aria-labelledby="direct-answer-title">
      <div className="mx-auto grid max-w-[1280px] gap-8 px-5 py-12 sm:py-16 lg:grid-cols-[minmax(240px,0.65fr)_minmax(0,1fr)] lg:gap-20 lg:px-8 lg:py-20">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Bezpośrednia odpowiedź</p>
          <h2 className="mt-4 max-w-sm font-display text-3xl leading-tight tracking-[-0.04em] text-foreground sm:text-4xl" id="direct-answer-title">{directAnswer.question}</h2>
        </div>
        <div className="max-w-2xl">
          <p className="text-base leading-8 text-foreground/85">{answer.text}</p>
          {answer.requiresLegalReview ? <ReviewNote className="mt-5" /> : null}
        </div>
      </div>
    </section>
  );
}
