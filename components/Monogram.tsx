type MonogramProps = {
  variant?: "dark" | "light" | "monochrome";
  className?: string;
};

/** SVG text keeps the web mark editable; the final print master should convert the letters to outlined paths. */
export function Monogram({ variant = "dark", className = "" }: MonogramProps) {
  const ink = variant === "light" ? "#f5f2eb" : variant === "dark" ? "#2a2a27" : "currentColor";
  const line = variant === "light" ? "rgba(245, 242, 235, 0.55)" : variant === "dark" ? "rgba(42, 42, 39, 0.42)" : "currentColor";
  const dot = variant === "monochrome" ? "currentColor" : "#a6a27a";

  return (
    <svg className={className} viewBox="0 0 120 96" role="img" aria-label="C · P" xmlns="http://www.w3.org/2000/svg">
      <title>C · P</title>
      <text x="38" y="64" fill={ink} fontFamily="var(--font-newsreader), serif" fontSize="40" textAnchor="middle">C</text>
      <text x="82" y="64" fill={ink} fontFamily="var(--font-newsreader), serif" fontSize="40" textAnchor="middle">P</text>
      <line x1="60" y1="10" x2="60" y2="86" stroke={line} strokeWidth="0.7" />
      <circle cx="60" cy="48" r="2.5" fill={dot} />
    </svg>
  );
}
