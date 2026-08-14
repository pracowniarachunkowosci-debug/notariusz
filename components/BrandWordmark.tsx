import Link from "next/link";

type BrandWordmarkProps = {
  href?: string;
  inverse?: boolean;
  variant?: "header" | "footer";
  className?: string;
};

/** Shared live wordmark. Print artwork should replace the text with outlined glyphs before production. */
export function BrandWordmark({ href, inverse = false, variant = "header", className = "" }: BrandWordmarkProps) {
  const content = (
    <>
      <span className={`block font-display leading-none tracking-[-0.03em] ${variant === "footer" ? "text-[28px]" : "text-[25px]"} ${inverse ? "text-surface" : "text-foreground"}`}>
        Czarniak <span className="text-olive">·</span> Podkówka
      </span>
      <span className={`mt-2 block text-[10px] uppercase tracking-[0.18em] ${inverse ? "text-surface/60" : "text-muted"}`}>
        KANCELARIA NOTARIALNA
      </span>
    </>
  );

  const sharedClassName = `group shrink-0 ${className}`;
  return href ? <Link className={sharedClassName} href={href} aria-label="Czarniak Podkówka, strona główna">{content}</Link> : <div className={sharedClassName}>{content}</div>;
}
