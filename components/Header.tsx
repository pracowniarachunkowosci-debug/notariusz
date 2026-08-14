"use client";

import { useEffect, useRef, useState } from "react";

const primaryLinks = [["Nieruchomości", "#sprawy"], ["Spółki i biznes", "#sprawy"], ["Spadki", "#sprawy"], ["Pozostałe sprawy", "#sprawy"], ["Kancelaria", "#kancelaria"]];

export function Header() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (open) firstLinkRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);
  return (
    <header className="sticky top-0 z-50 border-b border-border/0 bg-background/95 backdrop-blur-sm transition-[border-color] supports-[backdrop-filter]:bg-background/85">
      <div className="mx-auto flex min-h-[82px] max-w-[1280px] items-center justify-between gap-8 px-5 py-4 lg:px-8">
        <a href="#top" className="group shrink-0" aria-label="Czarniak Podkówka, strona główna"><span className="block font-display text-[25px] leading-none tracking-[-0.03em]">Czarniak <span className="text-olive">·</span> Podkówka</span><span className="mt-2 block text-[10px] uppercase tracking-[0.18em] text-muted">Kancelaria notarialna</span></a>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Główna nawigacja">{primaryLinks.map(([label, href]) => <a key={label} href={href} className="text-[13px] text-foreground/70 transition-colors hover:text-foreground">{label}</a>)}</nav>
        <div className="hidden items-center gap-5 lg:flex"><a href="#dokumenty" className="text-[13px] text-foreground/70 transition-colors hover:text-foreground">Dokumenty</a><a href="#wizyta" className="inline-flex min-h-11 items-center bg-foreground px-5 text-[13px] font-semibold text-surface transition-colors hover:bg-dark-olive">Umów wizytę</a></div>
        <div className="flex items-center gap-3 lg:hidden"><a href="tel:+48710000000" className="text-[12px] font-semibold text-foreground">Zadzwoń</a><button type="button" className="flex size-11 items-center justify-center border border-border text-foreground" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Zamknij menu" : "Otwórz menu"} onClick={() => setOpen((value) => !value)}><span className="relative block h-3.5 w-5" aria-hidden="true"><span className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} /><span className={`absolute left-0 top-[6px] h-px w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} /><span className={`absolute left-0 top-3 h-px w-5 bg-current transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} /></span></button></div>
      </div>
      {open && <div id="mobile-menu" className="border-t border-border bg-surface px-5 pb-6 pt-3 lg:hidden"><nav aria-label="Menu mobilne" className="flex flex-col"><div className="border-b border-border pb-3">{primaryLinks.map(([label, href], index) => <a key={label} ref={index === 0 ? firstLinkRef : undefined} href={href} onClick={() => setOpen(false)} className="flex min-h-12 items-center border-b border-border/70 text-[15px] text-foreground last:border-0">{label}</a>)}</div><div className="flex gap-5 pt-5 text-[13px]"><a href="#dokumenty" onClick={() => setOpen(false)}>Dokumenty</a><a href="#wizyta" onClick={() => setOpen(false)} className="font-semibold">Umów wizytę <span aria-hidden="true">↗</span></a></div></nav></div>}
    </header>
  );
}
