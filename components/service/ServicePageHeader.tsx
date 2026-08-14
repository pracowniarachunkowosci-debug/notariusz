"use client";

import { useEffect, useRef, useState } from "react";
import { BrandWordmark } from "@/components/BrandWordmark";

const links = [
  { label: "Strona główna", href: "/" },
  { label: "Kancelaria", href: "/#kancelaria" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function ServicePageHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    firstLinkRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background">
      <div className="mx-auto flex min-h-[82px] max-w-[1280px] items-center justify-between gap-6 px-5 py-4 lg:px-8">
        <BrandWordmark href="/" />

        <nav className="hidden items-center gap-8 text-sm text-muted-foreground lg:flex" aria-label="Główna nawigacja">
          {links.map((link) => (
            <a className="transition-colors hover:text-foreground" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
          <a className="inline-flex min-h-11 items-center bg-foreground px-5 text-[13px] font-semibold text-surface transition-colors hover:bg-dark-olive" href="#wizyta">
            Umów wizytę
          </a>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <a className="text-sm text-foreground" href="#kontakt">Zadzwoń</a>
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            className="flex size-11 items-center justify-center border border-border text-foreground"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[6px] h-px w-5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-3 h-px w-5 bg-current transition-transform ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav className="border-t border-border/60 px-5 py-4 lg:hidden" aria-label="Menu mobilne">
          <div className="mx-auto flex max-w-[1280px] flex-col items-start gap-4 text-sm text-foreground">
            {links.map((link, index) => (
              <a
                href={link.href}
                key={link.href}
                onClick={() => setMenuOpen(false)}
                ref={index === 0 ? firstLinkRef : undefined}
              >
                {link.label}
              </a>
            ))}
            <a href="#wizyta" onClick={() => setMenuOpen(false)}>Umów wizytę</a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
