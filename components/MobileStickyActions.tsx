import { contactData } from "@/lib/home-data";

export function MobileStickyActions() {
  const callHref = contactData.phoneMaria.href ?? "#kontakt";
  return <><div className="h-20 lg:hidden" aria-hidden="true" /><nav className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-sm lg:hidden" aria-label="Szybkie akcje"><div className="mx-auto grid max-w-[1280px] grid-cols-3"><a href={callHref} className="flex min-h-16 items-center justify-center px-2 text-center text-[11px] font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:relative">Zadzwoń</a><a href="#dokumenty" className="flex min-h-16 items-center justify-center border-l border-border px-2 text-center text-[11px] font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:relative">Dokumenty</a><a href="#wizyta" className="flex min-h-16 items-center justify-center border-l border-border bg-foreground px-2 text-center text-[11px] font-semibold text-surface transition-colors hover:bg-dark-olive focus-visible:relative">Umów wizytę</a></div></nav></>;
}
