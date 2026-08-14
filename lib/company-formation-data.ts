export type ReviewableText = {
  text: string;
  requiresLegalReview: boolean;
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
const verified = (text: string): ReviewableText => ({ text, requiresLegalReview: false });

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
    answer: verified(
      "Tak. Co do zasady umowę spółki z o.o. zawiera się w formie aktu notarialnego. Alternatywnie przepisy pozwalają zawrzeć ją przy wykorzystaniu wzorca umowy w systemie S24. Wybór sposobu założenia spółki zależy między innymi od tego, jak wspólnicy chcą ukształtować umowę, jakie wkłady mają zostać wniesione oraz czy rozwiązania przewidziane przez wzorzec S24 są wystarczające.",
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
    intro: verified("Obie ścieżki prowadzą do zawarcia umowy spółki z o.o., ale różnią się sposobem przygotowania umowy, podpisania dokumentów i organizacji rejestracji."),
    rows: [
      { label: "Sposób przygotowania umowy", s24: verified("Umowa tworzona przy wykorzystaniu wzorca dostępnego w systemie."), notary: verified("Treść umowy przygotowywana do indywidualnych ustaleń wspólników.") },
      { label: "Wkłady przy zakładaniu", s24: verified("Przy umowie na wzorcu kapitał jest pokrywany wyłącznie wkładami pieniężnymi."), notary: verified("Możliwe jest również odpowiednie uregulowanie wkładu niepieniężnego (aportu).") },
      { label: "Podpisanie", s24: verified("Umowa jest podpisywana w systemie kwalifikowanym podpisem elektronicznym, podpisem zaufanym albo podpisem osobistym."), notary: verified("Umowa jest zawierana w formie aktu notarialnego.") },
      { label: "Rejestracja", s24: verified("Rejestracja przez system S24."), notary: verified("Po akcie rejestracja przez Portal Rejestrów Sądowych.") },
    ],
  },
  individual: {
    eyebrow: "02 — Rozmowa",
    title: "Kiedy warto omówić umowę indywidualnie?",
    intro: review("Indywidualne omówienie umowy może pomóc uporządkować ustalenia, które wykraczają poza podstawowy wzorzec. Zakres możliwych postanowień i dokumentów warto potwierdzić z kancelarią.") ,
    items: [
      { title: "Niestandardowe zasady pomiędzy wspólnikami", text: review("Wspólnicy chcą omówić zasady współpracy i sposób ich ujęcia w umowie.") },
      { title: "Indywidualne ukształtowanie umowy", text: review("Potrzebne jest zebranie ustaleń, które nie mieszczą się w prostym, powtarzalnym schemacie.") },
      { title: "Wkłady lub struktura wymagające przygotowania", text: review("Planowana struktura wymaga zebrania dodatkowych informacji przed spotkaniem.") },
      { title: "Mechanizmy dotyczące udziałów lub zarządzania", text: review("Wspólnicy chcą omówić planowane zasady dotyczące udziałów albo zarządzania spółką.") },
    ],
  },
  checklist: {
    eyebrow: "03 — Przygotowanie",
    title: "Co przygotować przed spotkaniem?",
    intro: review("Nie ma jednej zamkniętej listy dokumentów wymaganych w każdej sytuacji. Przed spotkaniem warto zebrać podstawowe ustalenia i zapytać kancelarię o komplet informacji potrzebnych dla konkretnej spółki."),
    cta: "Zapytaj kancelarię o komplet dokumentów",
    groups: [
      { title: "Dane wspólników", text: review("Podstawowe dane osób, które mają uczestniczyć w przygotowaniu umowy.") },
      { title: "Firma i siedziba planowanej spółki", text: review("Proponowana firma oraz miejscowość siedziby planowanej spółki.") },
      { title: "Przedmiot działalności", text: review("Zakres działalności, który wspólnicy planują wskazać w umowie i zgłoszeniach.") },
      { title: "Kapitał i udziały", text: verified("Minimalny kapitał zakładowy spółki z o.o. wynosi 5 000 zł, a wartość nominalna jednego udziału nie może być niższa niż 50 zł.") },
      { title: "Zarząd i sposób reprezentacji", text: review("Planowany skład zarządu oraz sposób reprezentowania spółki do omówienia przed spotkaniem.") },
      { title: "Dodatkowe ustalenia wspólników", text: review("Inne zasady, które wspólnicy chcą omówić i ewentualnie uwzględnić w umowie.") },
    ],
  },
  process: {
    eyebrow: "04 — Proces",
    title: "Jak wygląda założenie spółki u notariusza?",
    intro: review("Kolejne etapy zależą od ustaleń wspólników, przygotowanych informacji i aktualnych wymogów dotyczących konkretnej czynności."),
    steps: [
      { number: "01", title: "Ustalenia", text: review("Ustalenie podstawowych elementów przyszłej spółki i rozwiązań, które mają znaleźć się w umowie.") },
      { number: "02", title: "Przygotowanie dokumentów", text: review("Zebranie potrzebnych informacji i przygotowanie dokumentacji do omówienia przed czynnością.") },
      { number: "03", title: "Spotkanie i zawarcie umowy", text: verified("Umowa zostaje zawarta w formie aktu notarialnego. Z chwilą jej zawarcia powstaje spółka z o.o. w organizacji.") },
      { number: "04", title: "Rejestracja w KRS", text: verified("W przypadku umowy sporządzonej przez notariusza wniosek rejestrowy składany jest przez Portal Rejestrów Sądowych.") },
      { number: "05", title: "Obowiązki po rejestracji", text: review("Po wpisie pozostają kolejne obowiązki rejestrowe, organizacyjne, podatkowe i księgowe.") },
    ],
  },
  afterSigning: {
    eyebrow: "05 — Co dalej",
    title: "Co po podpisaniu umowy spółki?",
    intro: review("Podpisanie umowy jest ważnym etapem, ale nie kończy wszystkich czynności związanych z uruchomieniem spółki. Zakres i kolejność kolejnych tematów wymagają potwierdzenia dla konkretnej sytuacji."),
    items: [
      { title: "Rejestracja w KRS", text: verified("Po zawarciu umowy pozostaje złożenie wniosku o wpis spółki do KRS przez właściwy system rejestrowy.") },
      { title: "Rachunek bankowy", text: review("Organizacja rachunku bankowego spółki zgodnie z ustalonym sposobem działania.") },
      { title: "Beneficjent rzeczywisty", text: verified("Po wpisie nowej spółki do KRS informacje o beneficjentach rzeczywistych należy zgłosić do CRBR w terminie 14 dni. Do biegu terminu nie wlicza się sobót i dni ustawowo wolnych od pracy.") },
      { title: "Dane uzupełniające", text: review("Część informacji niewpisywanych do KRS, m.in. dotyczących rachunków bankowych czy miejsca przechowywania dokumentacji rachunkowej, przekazuje się urzędowi skarbowemu na formularzu NIP-8. Co do zasady zgłoszenie danych uzupełniających składa się w ciągu 21 dni od wpisu do KRS.") },
      { title: "Kwestie podatkowe", text: review("Weryfikacja tematów podatkowych z właściwym doradcą dla planowanej działalności.") },
      { title: "Księgowość spółki", text: verified("Przepisy ustawy o rachunkowości obejmują spółki kapitałowe również w organizacji. Dlatego sposób prowadzenia księgowości warto ustalić już na etapie uruchamiania spółki.") },
    ],
    relatedExpertResource: null as { label: string; href: string } | null,
  },
  faq: {
    eyebrow: "06 — FAQ / GEO",
    title: "Najczęstsze pytania przed założeniem spółki",
    intro: review("Poniższe odpowiedzi porządkują najczęstsze pytania. W sytuacji indywidualnej zakres ustaleń i dokumentów warto potwierdzić z kancelarią."),
    items: [
      { question: "Czy spółkę z o.o. trzeba zakładać u notariusza?", answer: verified("Nie zawsze. Umowa spółki z o.o. może być zawarta w formie aktu notarialnego albo przy wykorzystaniu wzorca umowy w systemie S24.") },
      { question: "Czym różni się S24 od umowy sporządzanej u notariusza?", answer: verified("S24 wykorzystuje wzorzec dostępny w systemie i elektroniczne podpisanie dokumentów. U notariusza treść umowy może być przygotowana do indywidualnych ustaleń wspólników, a umowa jest zawierana w formie aktu notarialnego.") },
      { question: "Czy wszyscy wspólnicy muszą być obecni?", answer: review("Nie zawsze. Wspólnik może działać przez prawidłowo umocowanego pełnomocnika. Ponieważ umowa spółki zawierana u notariusza wymaga formy aktu notarialnego, pełnomocnictwo do jej zawarcia również powinno zostać udzielone w tej formie. Szczegóły pełnomocnictwa warto wcześniej uzgodnić z kancelarią.") },
      { question: "Jakie informacje trzeba ustalić przed przygotowaniem umowy?", answer: review("Warto ustalić dane wspólników, firmę i siedzibę spółki, przedmiot działalności, kapitał i udziały, skład zarządu, sposób reprezentacji oraz dodatkowe ustalenia wspólników.") },
      { question: "Co dzieje się po podpisaniu umowy?", answer: verified("Po podpisaniu pozostają między innymi rejestracja w KRS, zgłoszenie beneficjentów rzeczywistych do CRBR oraz organizacja rachunku, danych uzupełniających, kwestii podatkowych i księgowości spółki.") },
      { question: "Jak wygląda rejestracja spółki po akcie notarialnym?", answer: verified("Wniosek rejestrowy po akcie notarialnym składa się przez Portal Rejestrów Sądowych. Dokumentu sporządzonego przez notariusza nie trzeba ponownie załączać do wniosku — w PRS wskazuje się identyfikator aktu znajdującego się w Centralnym Repozytorium Elektronicznych Wypisów Aktów Notarialnych (CREWAN). Zakres dokumentów i dalszych kroków zależy od konkretnej spółki oraz aktualnych wymogów systemu.") },
    ],
  },
  sources: {
    eyebrow: "07 — Źródła",
    title: "Źródła i aktualność informacji",
    intro: "Informacje na stronie opierają się na wskazanych aktach prawnych i oficjalnych materiałach administracji publicznej. W sprawie konkretnej czynności zakres ustaleń warto potwierdzić z kancelarią.",
    reviewedBy: null,
    lastReviewed: null,
    sources: [
      { label: "Kodeks spółek handlowych", href: "https://eli.gov.pl/api/acts/DU/2024/18/text.html" },
      { label: "Kodeks cywilny — art. 99", href: "https://eli.gov.pl/eli/DU/2026/795/ogl" },
      { label: "Portal Rejestrów Sądowych / KRS", href: "https://prs.ms.gov.pl/krs?login=false" },
      { label: "Ministerstwo Finansów — CRBR", href: "https://www.gov.pl/web/finanse/zgloszenie-informacji-do-centralnego-rejestru-beneficjentow-rzeczywistych" },
      { label: "Ustawa o rachunkowości", href: "https://eli.gov.pl/eli/DU/2026/522/ogl" },
      { label: "Ustawa AML — tekst jednolity / ELI", href: "https://eli.gov.pl/api/acts/DU/2025/644/text.pdf" },
      { label: "Biznes.gov.pl — dane uzupełniające i formularz NIP-8", href: "https://biznes.gov.pl/pl/portal/ou306" },
    ] as ReadonlyArray<{ label: string; href: string }>,
  } satisfies CompanyFormationSourceData & { eyebrow: string; title: string; intro: string },
  reviewer: null as string | null,
  contact: {
    eyebrow: "08 — Kontakt",
    title: "Chcesz przygotować umowę spółki?",
    description: "Napisz lub umów rozmowę z kancelarią, aby uporządkować ustalenia przed przygotowaniem dokumentów.",
  },
} as const;
