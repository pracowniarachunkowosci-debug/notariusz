export type Service = { id: string; title: string; category: string; keywords: string[]; description: string; href?: string };

export const services: Service[] = [
  { id: "sprzedaz-mieszkania", title: "Sprzedaż mieszkania", category: "Nieruchomości", keywords: ["sprzedaję mieszkanie", "lokal", "dom", "sprzedaż"], description: "Sprawdź, jak przygotować dokumenty do umowy sprzedaży.", href: "/nieruchomosci/sprzedaz-mieszkania/" },
  { id: "umowa-przedwstepna", title: "Umowa przedwstępna", category: "Nieruchomości", keywords: ["rezerwacja", "kupno", "mieszkanie"], description: "Dowiedz się, co powinna zawierać umowa przedwstępna." },
  { id: "darowizna", title: "Darowizna", category: "Nieruchomości i rodzina", keywords: ["przekazanie", "rodzina", "mieszkanie", "pieniądze"], description: "Przygotuj się do zawarcia umowy darowizny." },
  { id: "spolka-zoo", title: "Założenie spółki z o.o.", category: "Spółki i biznes", keywords: ["chcę założyć spółkę", "firma", "biznes", "spółka"], description: "Sprawdź, jak wygląda założenie spółki z ograniczoną odpowiedzialnością.", href: "/spolki/zalozenie-spolki-zoo/" },
  { id: "sprzedaz-udzialow", title: "Sprzedaż udziałów", category: "Spółki i biznes", keywords: ["udziały", "wspólnik", "firma"], description: "Poznaj najważniejsze dokumenty do sprzedaży udziałów." },
  { id: "fundacja-rodzinna", title: "Fundacja rodzinna", category: "Spółki i biznes", keywords: ["majątek", "sukcesja", "firma rodzinna"], description: "Porozmawiajmy o akcie założycielskim i statucie fundacji." },
  { id: "akt-poswiadczenia-dziedziczenia", title: "Akt poświadczenia dziedziczenia", category: "Spadki", keywords: ["spadek", "dziedziczenie", "muszę załatwić spadek"], description: "Sprawdź, kiedy można potwierdzić prawa do spadku u notariusza.", href: "/spadki/akt-poswiadczenia-dziedziczenia/" },
  { id: "testament", title: "Testament", category: "Spadki", keywords: ["spadek", "ostatnia wola", "dziedziczenie"], description: "Uporządkuj swoją wolę i dowiedz się, jak sporządzić testament." },
  { id: "odrzucenie-spadku", title: "Odrzucenie spadku", category: "Spadki", keywords: ["spadek", "długi", "dziedziczenie"], description: "Poznaj terminy i dokumenty potrzebne do odrzucenia spadku." },
  { id: "najem-okazjonalny", title: "Najem okazjonalny", category: "Nieruchomości", keywords: ["mieszkanie", "wynajem", "najem"], description: "Przygotuj umowę najmu okazjonalnego i wymagane oświadczenia.", href: "/najem-okazjonalny/" },
  { id: "pelnomocnictwo", title: "Pełnomocnictwo", category: "Pozostałe czynności", keywords: ["upoważnienie", "reprezentacja", "sprawa"], description: "Ustal zakres pełnomocnictwa dopasowany do Twojej sprawy." },
  { id: "poswiadczenie-podpisu", title: "Poświadczenie podpisu", category: "Pozostałe czynności", keywords: ["podpis", "dokument", "poświadczenie"], description: "Sprawdź, kiedy potrzebujesz urzędowego poświadczenia podpisu." },
];
