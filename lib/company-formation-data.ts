export type ReviewableText = {
  text: string;
  requiresLegalReview: true;
};

export type CompanyFormationFaq = ReviewableText & {
  question: string;
};

export type CompanyFormationSourceData = {
  reviewedBy: string | null;
  lastReviewed: string | null;
  sources: ReadonlyArray<{ label: string; href: string }>;
};

const review = (text: string): ReviewableText => ({ text, requiresLegalReview: true });

export const companyFormationData = {
  breadcrumb: [
    { label: "Strona główna", href: "/" },
    { label: "Spółki i biznes", href: "/#sprawy" },
    { label: "Założenie spółki z o.o.", href: "/spolki/zalozenie-spolki-zoo/" },
  ],
  hero: {
    eyebrow: "SPÓŁKI I BIZNES",
    title: "Założenie spółki z o.o. u notariusza",
    description:
      "Dowiedz się, kiedy rozważyć umowę spółki w formie aktu notarialnego, jak przygotować się do spotkania, jak może wyglądać proces i jakie obszary pozostają po podpisaniu umowy. Kancelaria we Wrocławiu pomaga uporządkować ustalenia przed przygotowaniem dokumentów.",
    primaryCta: "Zapytaj o przygotowanie umowy",
    secondaryCta: "Sprawdź, jak wygląda proces",
  },
  directAnswer: {
    question: "Czy spółkę z o.o. można założyć u notariusza?",
    answer: review(
      "Umowę spółki z o.o. można przygotować w więcej niż jednym trybie. Wybór zależy od ustaleń wspólników, zakresu indywidualizacji umowy oraz tego, jak chcą przeprowadzić formalności. Na tej stronie porządkujemy różnice między ścieżką S24 a przygotowaniem umowy w formie aktu notarialnego. Ostateczny zakres dokumentów, treść postanowień i dalsze kroki wymagają omówienia z kancelarią oraz weryfikacji aktualnych wymogów.",
    ),
  },
  toc: [
    { label: "S24 czy notariusz?", href: "#s24" },
    { label: "Kiedy omówić umowę indywidualnie?", href: "#indywidualnie" },
    { label: "Co przygotować?", href: "#dokumenty" },
    { label: "Jak przebiega spotkanie?", href: "#proces" },
    { label: "Co po podpisaniu?", href: "#po-podpisaniu" },
    { label: "Najczęstsze pytania", href: "#faq" },
  ],
  comparison: {
    eyebrow: "01 — Dwie ścieżki",
    title: "S24 czy umowa spółki u notariusza?",
    intro: review(
      "Obie ścieżki wymagają wcześniejszych ustaleń. Różnią się sposobem przygotowania umowy, podpisania dokumentów i organizacji dalszych formalności. Poniższe zestawienie jest neutralnym szkicem do uzupełnienia po weryfikacji merytorycznej.",
    ),
    rows: [
      { label: "Sposób przygotowania umowy", s24: review("Praca z formularzem właściwym dla systemu S24."), notary: review("Przygotowanie treści umowy w rozmowie z kancelarią i notariuszem.") },
      { label: "Możliwość indywidualizacji postanowień", s24: review("Zakres dostosowania zależy od możliwości przewidzianych w wybranej ścieżce."), notary: review("Ustalenia wspólników mogą zostać omówione przed przygotowaniem aktu.") },
      { label: "Sposób podpisania", s24: review("Podpisanie dokumentów odbywa się w trybie właściwym dla systemu."), notary: review("Podpisanie umowy w formie aktu notarialnego.") },
      { label: "Dalsza rejestracja", s24: review("Po podpisaniu pozostają dalsze formalności związane z rejestracją."), notary: review("Po podpisaniu pozostają dalsze formalności związane z rejestracją.") },
      { label: "Typowe zastosowanie", s24: review("Ścieżka może odpowiadać sytuacji, w której wspólnicy wybierają rozwiązanie systemowe."), notary: review("Ścieżka może odpowiadać sytuacji, w której potrzebne jest indywidualne omówienie umowy.") },
    ],
  },
  individual: {
    eyebrow: "02 — Rozmowa",
    title: "Kiedy warto omówić umowę indywidualnie?",
    intro: review("Rozmowa z kancelarią może pomóc uporządkować ustalenia, gdy planowana umowa wymaga szerszego omówienia niż podstawowy zestaw informacji."),
    items: [
      { title: "Niestandardowe zasady pomiędzy wspólnikami", text: review("Wspólnicy chcą wcześniej omówić zasady współpracy i ich zapis w umowie.") },
      { title: "Indywidualne ukształtowanie umowy", text: review("Potrzebne jest zebranie ustaleń, które nie mieszczą się w prostym, powtarzalnym schemacie.") },
      { title: "Wkłady lub struktura wymagające przygotowania", text: review("Planowana struktura wymaga zebrania dodatkowych informacji przed spotkaniem.") },
      { title: "Mechanizmy dotyczące udziałów lub zarządzania", text: review("Wspólnicy chcą omówić planowane zasady dotyczące udziałów albo zarządzania spółką.") },
    ],
  },
  checklist: {
    eyebrow: "03 — Przygotowanie",
    title: "Co przygotować przed spotkaniem?",
    intro: review("Nie ma jednej uniwersalnej listy dla każdej spółki. Przed spotkaniem warto zebrać podstawowe ustalenia i zapytać kancelarię o komplet informacji potrzebnych w konkretnej sytuacji."),
    cta: "Zapytaj kancelarię o komplet dokumentów",
    groups: [
      { title: "Dane wspólników", text: review("Podstawowe dane osób, które mają uczestniczyć w przygotowaniu umowy.") },
      { title: "Dane planowanej spółki", text: review("Nazwa, siedziba i ogólny opis planowanej działalności do ustalenia z kancelarią.") },
      { title: "Kapitał i udziały", text: review("Ustalenia dotyczące kapitału i udziałów, które wymagają potwierdzenia przed przygotowaniem umowy.") },
      { title: "Informacje dotyczące zarządu", text: review("Planowany skład i sposób organizacji zarządu do omówienia przed spotkaniem.") },
      { title: "Dodatkowe ustalenia umowy", text: review("Inne zasady, które wspólnicy chcą omówić i ewentualnie uwzględnić w umowie.") },
    ],
  },
  process: {
    eyebrow: "04 — Proces",
    title: "Jak wygląda założenie spółki u notariusza?",
    intro: review("Poniższy schemat porządkuje kolejne obszary przygotowania. Szczegóły procesu zależą od ustaleń wspólników, dokumentów i aktualnych wymogów.") ,
    steps: [
      { number: "01", title: "Ustalenia", text: review("Zebranie informacji o wspólnikach, spółce i planowanych zasadach działania.") },
      { number: "02", title: "Przygotowanie dokumentów", text: review("Uzupełnienie danych i przygotowanie treści do omówienia przed spotkaniem.") },
      { number: "03", title: "Spotkanie i podpisanie", text: review("Omówienie dokumentów oraz podpisanie umowy w uzgodnionej formie.") },
      { number: "04", title: "Rejestracja spółki", text: review("Wykonanie dalszych formalności związanych z rejestracją spółki.") },
      { number: "05", title: "Obowiązki po rejestracji", text: review("Uporządkowanie kolejnych tematów administracyjnych, podatkowych i księgowych.") },
    ],
  },
  afterSigning: {
    eyebrow: "05 — Co dalej",
    title: "Co po podpisaniu umowy spółki?",
    intro: review("Podpisanie umowy jest ważnym etapem, ale nie kończy wszystkich czynności związanych z uruchomieniem spółki. Zakres i kolejność kolejnych tematów wymagają potwierdzenia dla konkretnej sytuacji."),
    items: [
      { title: "Rejestracja w KRS", text: review("Dalsze formalności rejestrowe związane z wpisem spółki.") },
      { title: "Rachunek bankowy", text: review("Organizacja rachunku bankowego spółki zgodnie z ustalonym sposobem działania.") },
      { title: "Beneficjent rzeczywisty", text: review("Ustalenie informacji i obowiązków dotyczących beneficjenta rzeczywistego.") },
      { title: "Kwestie podatkowe", text: review("Weryfikacja tematów podatkowych z właściwym doradcą dla planowanej działalności.") },
      { title: "Księgowość spółki", text: review("Wybór sposobu organizacji księgowości i dalszych rozliczeń spółki.") },
    ],
    relatedExpertResource: null as { label: string; href: string } | null,
  },
  faq: {
    eyebrow: "06 — FAQ / GEO",
    title: "Najczęstsze pytania przed założeniem spółki",
    intro: review("Odpowiedzi są roboczym szkicem do weryfikacji merytorycznej. W konkretnej sytuacji zakres wymaganych ustaleń i dokumentów może być inny."),
    items: [
      { question: "Czy spółkę z o.o. trzeba zakładać u notariusza?", answer: review("Istnieją różne ścieżki przygotowania umowy. Wybór zależy od sytuacji wspólników i zakresu planowanych ustaleń.") },
      { question: "Czym różni się S24 od umowy sporządzanej u notariusza?", answer: review("Różnice dotyczą m.in. sposobu przygotowania, podpisania i organizacji dalszych formalności. Szczegóły wymagają aktualnej weryfikacji.") },
      { question: "Czy wszyscy wspólnicy muszą być obecni?", answer: review("To pytanie wymaga potwierdzenia dla planowanej czynności, sposobu podpisania i konkretnej sytuacji wspólników.") },
      { question: "Jakie informacje trzeba ustalić przed przygotowaniem umowy?", answer: review("Warto zebrać dane wspólników, planowanej spółki, kapitału, udziałów, zarządu i dodatkowych ustaleń umowy.") },
      { question: "Co dzieje się po podpisaniu umowy?", answer: review("Po podpisaniu pozostają dalsze obszary związane m.in. z rejestracją i organizacją działania spółki.") },
      { question: "Jak wygląda rejestracja spółki po akcie notarialnym?", answer: review("Kolejne kroki i wymagane informacje zależą od aktualnych zasad oraz sytuacji konkretnej spółki.") },
    ],
  },
  sources: {
    eyebrow: "07 — Aktualność",
    title: "Źródła i aktualność informacji",
    intro: "Ta sekcja jest przygotowana do uzupełnienia po weryfikacji treści.",
    reviewedBy: null,
    lastReviewed: null,
    sources: [] as ReadonlyArray<{ label: string; href: string }>,
  } satisfies CompanyFormationSourceData & { eyebrow: string; title: string; intro: string },
  reviewer: null as string | null,
  contact: {
    eyebrow: "08 — Kontakt",
    title: "Chcesz przygotować umowę spółki?",
    description: "Napisz lub umów rozmowę z kancelarią, aby uporządkować ustalenia przed przygotowaniem dokumentów.",
  },
} as const;
