export type InheritanceReviewableText = {
  text: string;
  requiresLegalReview: boolean;
};

const review = (text: string): InheritanceReviewableText => ({ text, requiresLegalReview: true });
const verified = (text: string): InheritanceReviewableText => ({ text, requiresLegalReview: false });

export const inheritanceCertificateData = {
  breadcrumb: [
    { label: "Strona główna", href: "/" },
    { label: "Spadki", href: "/#sprawy" },
    { label: "Akt poświadczenia dziedziczenia", href: "/spadki/akt-poswiadczenia-dziedziczenia/" },
  ],
  hero: {
    eyebrow: "SPADKI",
    title: "Akt poświadczenia dziedziczenia u notariusza",
    description: "Sprawdź, kiedy dziedziczenie można potwierdzić u notariusza, kto powinien uczestniczyć w procedurze, jakie dokumenty przygotować i co dzieje się po zarejestrowaniu aktu poświadczenia dziedziczenia.",
    primaryCta: "Sprawdź potrzebne dokumenty",
    secondaryCta: "Zapytaj o termin",
  },
  directAnswer: {
    question: "Czy spadek można załatwić u notariusza?",
    answer: verified("Tak. Notariusz może sporządzić akt poświadczenia dziedziczenia ustawowego albo testamentowego, jeżeli spełnione są warunki przewidziane w Prawie o notariacie. Aktu poświadczenia dziedziczenia nie sporządza się w przypadku dziedziczenia na podstawie testamentu szczególnego."),
  },
  toc: [
    { label: "Kto uczestniczy", href: "#uczestnicy" },
    { label: "Dokumenty", href: "#dokumenty" },
    { label: "Testament", href: "#testament" },
    { label: "Sześć miesięcy", href: "#szesc-miesiecy" },
    { label: "Kiedy APD nie jest możliwe", href: "#przeszkody" },
    { label: "Przebieg", href: "#proces" },
    { label: "Co daje APD", href: "#skutki" },
    { label: "Co dalej", href: "#co-dalej" },
    { label: "Koszty", href: "#koszty" },
    { label: "FAQ", href: "#faq" },
  ],
  participants: {
    eyebrow: "01 — Uczestnicy",
    title: "Kto musi uczestniczyć w poświadczeniu dziedziczenia?",
    answer: verified("W procedurze muszą zostać uwzględnione wszystkie osoby zainteresowane, czyli osoby mogące wchodzić w rachubę jako spadkobiercy ustawowi lub testamentowi oraz osoby, na których rzecz spadkodawca uczynił zapis windykacyjny."),
    togetherTitle: "Czy wszyscy muszą przyjechać razem?",
    togetherText: review("Nie zawsze. Prawo pozwala sporządzić projekt protokołu dziedziczenia, a poszczególne osoby zainteresowane mogą potwierdzić zawarte w nim dane i wyrazić zgodę przed notariuszem, który przygotował projekt, albo przed innym notariuszem. Jeżeli wszystkie wymagane osoby złożą takie oświadczenia, finalny protokół może zostać spisany przy udziale co najmniej jednej osoby zainteresowanej."),
  },
  documents: {
    eyebrow: "02 — Dokumenty",
    title: "Jakie dokumenty przygotować do aktu poświadczenia dziedziczenia?",
    intro: review("Ustawowa baza dokumentów obejmuje dokumenty potrzebne do potwierdzenia śmierci spadkodawcy, stanu cywilnego osób powołanych do spadku oraz innych okoliczności wpływających na ustalenie praw do spadku."),
    statutoryItems: [
      { title: "Akt zgonu spadkodawcy", text: verified("Odpis aktu zgonu."), number: "01" },
      { title: "Akty stanu cywilnego", text: verified("Odpisy odpowiednich aktów stanu cywilnego osób powołanych do spadku z ustawy."), number: "02" },
      { title: "Testament", text: verified("Jeżeli spadkodawca pozostawił testament."), number: "03" },
      { title: "Inne dokumenty", text: verified("Dokumenty mogące mieć wpływ na ustalenie praw do spadku."), number: "04" },
    ],
    additionalTitle: "Co jeszcze może być potrzebne?",
    additionalItems: [
      "Dane identyfikacyjne spadkodawcy",
      "Informacje o wszystkich potencjalnych spadkobiercach",
      "Informacje o testamentach",
      "Informacje o wcześniejszych oświadczeniach o przyjęciu lub odrzuceniu spadku",
      "Informacje o wcześniejszym postępowaniu sądowym lub APD",
    ].map((text) => review(text)),
    cta: "Zapytaj kancelarię o dokumenty do Twojej sprawy",
  },
  testament: {
    eyebrow: "03 — Testament",
    title: "Co jeśli spadkodawca zostawił testament?",
    answer: verified("Akt poświadczenia dziedziczenia może dotyczyć również dziedziczenia testamentowego, z wyjątkiem dziedziczenia na podstawie testamentów szczególnych. Jeżeli testament zostanie przedstawiony notariuszowi i nie był wcześniej otwarty i ogłoszony, notariusz dokonuje jego otwarcia i ogłoszenia."),
  },
  sixMonths: {
    eyebrow: "04 — Sześć miesięcy",
    title: "Czy trzeba czekać 6 miesięcy od śmierci?",
    answer: verified("Nie trzeba czekać 6 miesięcy, jeżeli wszyscy znani spadkobiercy złożą wymagane oświadczenia o przyjęciu albo odrzuceniu spadku. Jeżeli od otwarcia spadku nie minęło 6 miesięcy, protokół dziedziczenia obejmuje takie oświadczenia, chyba że zostały złożone wcześniej. Termin na złożenie samego oświadczenia o przyjęciu lub odrzuceniu spadku wynosi natomiast 6 miesięcy od dnia, w którym spadkobierca dowiedział się o tytule swojego powołania."),
  },
  obstacles: {
    eyebrow: "05 — Przeszkody",
    title: "Kiedy akt poświadczenia dziedziczenia nie może zostać sporządzony?",
    intro: review("Poniższe sytuacje mogą wyłączyć możliwość sporządzenia APD. Lista ma charakter użytkowego skrótu, a ocenę konkretnej sprawy należy przeprowadzić na podstawie dokumentów i informacji o spadkodawcy."),
    items: [
      "Wcześniej sporządzono już APD albo wydano postanowienie sądu o stwierdzeniu nabycia spadku.",
      "Nie udało się objąć procedurą wszystkich osób, które mogą wchodzić w rachubę jako osoby zainteresowane.",
      "Istnieje testament, który nie został otwarty lub ogłoszony.",
      "Brak jest jurysdykcji krajowej.",
      "Notariusz ma wątpliwości uniemożliwiające ustalenie spadkobierców, udziałów albo właściwego prawa.",
    ].map((text) => review(text)),
  },
  process: {
    eyebrow: "06 — Przebieg",
    title: "Jak wygląda akt poświadczenia dziedziczenia u notariusza?",
    intro: review("Kolejne etapy zależą od informacji o spadkodawcy, uczestnikach, testamentach i dokumentach przedstawionych kancelarii."),
    steps: [
      { number: "01", title: "Kontakt i podstawowe informacje", text: review("Ustalenie danych spadkodawcy, potencjalnych spadkobierców i informacji o testamentach.") },
      { number: "02", title: "Dokumenty", text: review("Przekazanie kancelarii dokumentów potrzebnych do przygotowania czynności.") },
      { number: "03", title: "Protokół dziedziczenia", text: verified("Złożenie wymaganych oświadczeń i ustalenie okoliczności istotnych dla dziedziczenia.") },
      { number: "04", title: "Testament, jeżeli istnieje", text: verified("Otwarcie i ogłoszenie testamentu, jeżeli nie nastąpiło wcześniej.") },
      { number: "05", title: "Akt poświadczenia dziedziczenia", text: verified("Sporządzenie APD, jeżeli nie istnieją przeszkody ustawowe.") },
      { number: "06", title: "Rejestracja", text: verified("Notariusz niezwłocznie wpisuje APD do Rejestru Spadkowego.") },
    ],
  },
  effects: {
    eyebrow: "07 — Skutki APD",
    title: "Co daje zarejestrowany akt poświadczenia dziedziczenia?",
    answer: verified("Zarejestrowany akt poświadczenia dziedziczenia ma skutki prawomocnego postanowienia sądu o stwierdzeniu nabycia spadku. Potwierdza między innymi, kto jest spadkobiercą oraz jaki udział w spadku mu przypada."),
    registerTitle: "Rejestr Spadkowy",
    registerText: verified("Informację o tym, czy po danym spadkodawcy zarejestrowano dokument potwierdzający prawa do spadku, można sprawdzić w publicznym Rejestrze Spadkowym."),
  },
  afterApd: {
    eyebrow: "08 — Co dalej",
    title: "Co trzeba zrobić po poświadczeniu dziedziczenia?",
    intro: review("APD potwierdza prawa do spadku, ale nie zastępuje dalszych czynności dotyczących poszczególnych składników majątku ani działu spadku."),
    items: [
      { title: "Podatek od spadków i darowizn", text: review("Sprawdzenie, czy powstaje obowiązek podatkowy albo czy można skorzystać ze zwolnienia.") },
      { title: "Nieruchomości i księgi wieczyste", text: review("Jeżeli w skład spadku wchodzi nieruchomość, użytkowanie wieczyste albo spółdzielcze własnościowe prawo do lokalu, po sporządzeniu APD spadkobierca lub zapisobierca windykacyjny może zażądać sporządzenia protokołu dotyczącego wpisu prawa do księgi wieczystej. Jeżeli następstwo prawne zostało wykazane odpowiednimi dokumentami, notariusz składa wniosek wieczystoksięgowy za pośrednictwem systemu teleinformatycznego.") },
      { title: "Rachunki bankowe i majątek", text: review("Uporządkowanie informacji o rachunkach bankowych i innych składnikach majątku spadkowego.") },
      { title: "Dział spadku", text: review("Jeżeli spadkobierców jest kilku, dział spadku może wymagać odrębnych ustaleń i czynności. APD nie dokonuje działu spadku.") },
    ],
    sdz2Title: "SD-Z2",
    sdZ2Text: review("W przypadku zwolnienia dla najbliższej rodziny termin na zgłoszenie nabycia spadku na formularzu SD-Z2 wynosi co do zasady 6 miesięcy od zarejestrowania aktu poświadczenia dziedziczenia. Obowiązek i możliwość skorzystania ze zwolnienia zależą od konkretnej sytuacji."),
  },
  costs: {
    eyebrow: "09 — Koszty",
    title: "Ile kosztuje akt poświadczenia dziedziczenia?",
    intro: review("Poniżej pokazujemy ustawowe maksymalne stawki taksy jako informację porządkową. Całkowity koszt konkretnej czynności może obejmować również VAT, wypisy i odpowiednie opłaty."),
    items: [
      { label: "Protokół dziedziczenia", amount: "maks. 100 zł" },
      { label: "APD ustawowe lub testamentowe", amount: "maks. 50 zł" },
      { label: "APD testamentowe z zapisem windykacyjnym", amount: "maks. 100 zł" },
      { label: "Projekt protokołu dziedziczenia", amount: "maks. 100 zł" },
      { label: "Protokół zgody na projekt", amount: "maks. 50 zł" },
      { label: "Otwarcie i ogłoszenie testamentu", amount: "maks. 50 zł" },
    ],
    registerFee: review("Opłata za wpis do Rejestru Spadkowego wynosi 5 zł."),
  },
  faq: {
    eyebrow: "10 — FAQ / GEO",
    title: "Najczęstsze pytania o akt poświadczenia dziedziczenia",
    intro: review("Poniższe odpowiedzi porządkują najczęstsze pytania. Zakres dokumentów i dalszych czynności warto potwierdzić dla konkretnej sprawy."),
    items: [
      { question: "Czy spadek można załatwić u notariusza?", answer: verified("Tak. Notariusz może sporządzić akt poświadczenia dziedziczenia ustawowego albo testamentowego, jeżeli spełnione są warunki przewidziane w Prawie o notariacie. APD nie sporządza się w przypadku dziedziczenia na podstawie testamentu szczególnego.") },
      { question: "Czym różni się APD od sprawy spadkowej w sądzie?", answer: verified("Zarejestrowany akt poświadczenia dziedziczenia ma skutki prawomocnego postanowienia sądu o stwierdzeniu nabycia spadku. Droga notarialna i sądowa mają jednak inne warunki i przebieg, dlatego możliwość sporządzenia APD trzeba ocenić w konkretnej sprawie.") },
      { question: "Czy wszyscy spadkobiercy muszą być obecni?", answer: review("W procedurze muszą zostać uwzględnione wszystkie osoby zainteresowane. Nie zawsze muszą jednak przyjechać razem — możliwość potwierdzenia danych i złożenia oświadczeń przed innym notariuszem zależy od spełnienia warunków konkretnej procedury.") },
      { question: "Czy wszyscy muszą przyjechać do jednej kancelarii?", answer: review("Nie zawsze. Prawo przewiduje możliwość pracy z projektem protokołu i składania oświadczeń przed innym notariuszem, ale kancelaria powinna potwierdzić, czy taki sposób może zostać zastosowany w konkretnej sprawie.") },
      { question: "Jakie dokumenty potrzebne są do APD?", answer: review("Podstawą są między innymi akt zgonu spadkodawcy, odpowiednie akty stanu cywilnego, testament jeżeli został pozostawiony oraz inne dokumenty mogące wpływać na ustalenie praw do spadku. Dokładną checklistę trzeba potwierdzić dla konkretnej sprawy.") },
      { question: "Co jeśli jest testament?", answer: verified("APD może dotyczyć dziedziczenia testamentowego, z wyjątkiem testamentu szczególnego. Jeżeli testament nie był wcześniej otwarty i ogłoszony, notariusz dokonuje jego otwarcia i ogłoszenia.") },
      { question: "Czy trzeba czekać 6 miesięcy po śmierci?", answer: verified("Nie trzeba czekać 6 miesięcy, jeżeli wszyscy znani spadkobiercy złożą wymagane oświadczenia o przyjęciu albo odrzuceniu spadku. Jeżeli od otwarcia spadku nie minęło 6 miesięcy, protokół dziedziczenia obejmuje takie oświadczenia, chyba że zostały złożone wcześniej. Termin na złożenie samego oświadczenia o przyjęciu lub odrzuceniu spadku wynosi natomiast 6 miesięcy od dnia, w którym spadkobierca dowiedział się o tytule swojego powołania.") },
      { question: "Czy można zrobić APD, jeżeli ktoś odrzucił spadek?", answer: review("Tak, może to być możliwe. Osoba, która odrzuciła spadek, traci status osoby zainteresowanej w procedurze APD i jest traktowana tak, jakby nie dożyła otwarcia spadku. Trzeba jednak ustalić, kto w konsekwencji wchodzi w krąg kolejnych osób zainteresowanych i powinien zostać uwzględniony w procedurze.") },
      { question: "Co jeśli postępowanie spadkowe odbyło się już w sądzie?", answer: verified("Jeżeli wydano już postanowienie sądu o stwierdzeniu nabycia spadku, nie sporządza się ponownie APD dla tego samego spadku. Dokumenty dotyczące wcześniejszego postępowania należy przedstawić kancelarii.") },
      { question: "Co daje zarejestrowany APD?", answer: verified("Zarejestrowany APD ma skutki prawomocnego postanowienia sądu o stwierdzeniu nabycia spadku i potwierdza między innymi spadkobierców oraz ich udziały.") },
      { question: "Czy APD dzieli majątek między spadkobierców?", answer: verified("Nie. APD potwierdza, kto dziedziczy i w jakich udziałach, ale nie dokonuje działu spadku ani podziału poszczególnych składników majątku.") },
      { question: "Co należy zrobić po APD?", answer: review("Po APD trzeba ustalić dalsze czynności dotyczące podatku od spadków i darowizn, nieruchomości, rachunków i innych składników majątku. Jeżeli spadkobierców jest kilku, może być potrzebny odrębny dział spadku.") },
      { question: "Kiedy trzeba złożyć SD-Z2?", answer: review("Dla zwolnienia przysługującego najbliższej rodzinie termin na zgłoszenie nabycia spadku na formularzu SD-Z2 wynosi co do zasady 6 miesięcy od zarejestrowania APD. Warunki obowiązku i zwolnienia zależą od konkretnej sytuacji.") },
    ],
  },
  sources: {
    eyebrow: "11 — Źródła",
    title: "Źródła i aktualność informacji",
    intro: "Informacje opierają się na wskazanych aktach prawnych i oficjalnych materiałach administracji publicznej. Zakres dokumentów, czynności i skutków podatkowych warto potwierdzić dla konkretnej sprawy.",
    reviewedBy: null,
    lastReviewed: null,
    sources: [
      { label: "Prawo o notariacie — Dz.U. 2026 poz. 614, art. 95aa §1–2, art. 95b, art. 95c §3–4, art. 95d, art. 95h §1, art. 95ga i art. 95j §2", href: "https://eli.gov.pl/eli/DU/2026/614/ogl" },
      { label: "Kodeks cywilny — Dz.U. 2026 poz. 795, art. 1015, art. 1020 i art. 1026", href: "https://eli.gov.pl/eli/DU/2026/795/ogl" },
      { label: "Rozporządzenie w sprawie maksymalnych stawek taksy notarialnej — Dz.U. 2024 poz. 1566", href: "https://eli.gov.pl/eli/DU/2024/1566/ogl" },
      { label: "Rozporządzenie Ministra Sprawiedliwości z 7 września 2016 r., Dz.U. 2016 poz. 1420, §1", href: "https://eli.gov.pl/api/acts/DU/2016/1420/text.html" },
      { label: "Ministerstwo Finansów — podatek od spadków i darowizn / SD-Z2", href: "https://podatki.gov.pl/podatki-osobiste/sd/ulgi-i-zwolnienia" },
      { label: "Krajowa Rada Notarialna — Rejestr Spadkowy", href: "https://rejestrspadkowy.pl/" },
    ],
  },
  contact: {
    eyebrow: "12 — Kontakt",
    title: "Chcesz uporządkować sprawę spadkową?",
    description: "Przekaż kancelarii podstawowe informacje o spadkodawcy, uczestnikach i dokumentach, aby ustalić, czy APD może być właściwą drogą w Twojej sprawie.",
  },
} as const;
