type ReviewNoteProps = {
  className?: string;
};

export function ReviewNote({ className = "" }: ReviewNoteProps) {
  if (process.env.NODE_ENV !== "development") return null;

  return (
    <p className={`service-review-note ${className}`} data-review-note>
      Treść robocza · do weryfikacji kancelarii
    </p>
  );
}
