export type ApartmentReviewableText = {
  text: string;
  requiresLegalReview: boolean;
};

const review = (text: string): ApartmentReviewableText => ({ text, requiresLegalReview: true });
const verified = (text: string): ApartmentReviewableText => ({ text, requiresLegalReview: false });

export const apartmentSaleData = {
  breadcrumb: [
    { label: "Strona główna", href: "/" },
    { label: "Nieruchomości", href: "/#sprawy" },
    { label: "Sprzedaż mieszkania", href: "/nieruchomosci/sprzedaz-mieszkania/" },
  ],
  hero: {
    eyebrow: "NIERUCHOMOŚCI",
    title: "Sprzedaż mieszkania u notariusza",
    description: "Sprawdź, jakie informacje i dokumenty warto przygotować, jak wygląda sprzedaż mieszkania z hipoteką, co zmienia nabycie lokalu w spadku lub darowiźnie oraz czego spodziewać się przed podpisaniem aktu.",
    primaryCta: "Sprawdź potrzebne dokumenty",
    secondaryCta: "Umów wizytę",
  },
  directAnswer: {
    question: "Czy sprzedaż mieszkania musi odbyć się u notariusza?",
    answer: verified("Tak. Umowa przenosząca własność nieruchomości wymaga formy aktu notarialnego. Dotyczy to również umowy sprzedaży mieszkania stanowiącego odrębną nieruchomość. Umowa zbycia spółdzielczego własnościowego prawa do lokalu również wymaga formy aktu notarialnego."),
  },
  toc: [
    { label: "Dokumenty", href: "#dokumenty" },
    { label: "Hipoteka", href: "#hipoteka" },
    { label: "Spadek lub darowizna", href: "#spadek-darowizna" },
    { label: "Świadectwo energetyczne", href: "#swiadectwo" },
    { label: "Przebieg sprzedaży", href: "#proces" },
    { label: "Koszty i podatki", href: "#oplaty" },
    { label: "FAQ", href: "#faq" },
  ],
  checklist: {
    eyebrow: "01 — Dokumenty",
    title: "Jakie dokumenty przygotować do sprzedaży mieszkania?",
    intro: review("Nie ma jednej uniwersalnej listy dokumentów wymaganej w każdej transakcji. Zakres zależy między innymi od rodzaju prawa do lokalu, sposobu jego nabycia, hipoteki i ustaleń stron."),
    basicTitle: "Podstawowe informacje",
    basicItems: [
      { title: "Dane stron", text: review("Dane sprzedającego i kupującego potrzebne do przygotowania czynności."), number: "01" },
      { title: "Podstawa nabycia mieszkania", text: review("Informacja, w jaki sposób sprzedający nabył mieszkanie, wraz z dokumentem potwierdzającym tytuł prawny."), number: "02" },
      { title: "Księga wieczysta", text: review("Numer księgi wieczystej, jeżeli dla lokalu jest prowadzona."), number: "03" },
      { title: "Cena i sposób zapłaty", text: review("Ustalenia dotyczące ceny oraz planowanego sposobu i terminu zapłaty."), number: "04" },
      { title: "Wydanie mieszkania", text: review("Planowany termin wydania lokalu i przekazania go kupującemu."), number: "05" },
    ],
    cooperativeTitle: "Spółdzielcze własnościowe prawo do lokalu",
    cooperativeText: review("Jeżeli przedmiotem sprzedaży jest spółdzielcze własnościowe prawo do lokalu, zakres informacji i dokumentów wymaga ustalenia dla konkretnego prawa oraz praktyki właściwej kancelarii lub spółdzielni."),
    cta: "Zapytaj kancelarię o dokumenty do Twojej transakcji",
  },
  preVisit: {
    eyebrow: "Przed wizytą",
    title: "Sprawdź swój PESEL",
    text: verified("Przy sprzedaży nieruchomości notariusz weryfikuje, czy numer PESEL osoby fizycznej będącej stroną czynności jest zastrzeżony. Zastrzeżony PESEL uniemożliwia dokonanie tej czynności do czasu cofnięcia zastrzeżenia."),
  },
  mortgage: {
    eyebrow: "02 — Hipoteka",
    title: "Czy można sprzedać mieszkanie z hipoteką?",
    answer: verified("Tak. Obciążenie nieruchomości hipoteką nie uniemożliwia jej sprzedaży. Hipoteka jest jednak związana z nieruchomością, dlatego sposób spłaty zabezpieczonego zadłużenia i wykreślenia hipoteki powinien zostać odpowiednio przygotowany przed transakcją."),
    steps: [
      { number: "01", title: "Księga wieczysta", text: verified("Sprawdzenie hipoteki i innych wpisów w księdze wieczystej."), requiresLegalReview: false },
      { number: "02", title: "Aktualne zadłużenie", text: review("Ustalenie aktualnego zadłużenia zabezpieczonego hipoteką."), requiresLegalReview: true },
      { number: "03", title: "Spłata wierzyciela", text: review("Ustalenie sposobu spłaty wierzyciela w ramach konkretnej transakcji."), requiresLegalReview: true },
      { number: "04", title: "Wykreślenie hipoteki", text: review("Przygotowanie dokumentów potrzebnych do wykreślenia hipoteki."), requiresLegalReview: true },
      { number: "05", title: "Płatności w umowie", text: review("Odpowiednie ujęcie płatności i kolejności rozliczeń w umowie."), requiresLegalReview: true },
    ],
  },
  inheritance: {
    eyebrow: "03 — Spadek lub darowizna",
    title: "Mieszkanie ze spadku lub darowizny — czy potrzebne jest zaświadczenie z urzędu skarbowego?",
    answer: review("Nie zawsze. Przepisy przewidują sytuacje, w których przed zbyciem rzeczy lub prawa nabytego w drodze spadku albo darowizny notariusz potrzebuje zgody naczelnika urzędu skarbowego albo zaświadczenia potwierdzającego rozliczenie lub zwolnienie z podatku. Obowiązek ten nie występuje jednak we wszystkich przypadkach."),
    explanation: review("Art. 19 ust. 7 ustawy o podatku od spadków i darowizn przewiduje wyjątek od obowiązku określonego w ust. 6 między innymi wtedy, gdy nabycie nastąpiło na podstawie umowy zawartej w formie aktu notarialnego albo korzystało ze zwolnienia z art. 4a."),
    cta: "Zapytaj kancelarię, czy dokument z urzędu skarbowego będzie potrzebny w Twojej sytuacji.",
  },
  energy: {
    eyebrow: "04 — Świadectwo energetyczne",
    title: "Czy do sprzedaży mieszkania potrzebne jest świadectwo energetyczne?",
    answer: verified("Co do zasady tak. Przy sprzedaży lokalu właściciel przekazuje nabywcy świadectwo charakterystyki energetycznej. Nabywca nie może zrzec się prawa do jego otrzymania. Notariusz odnotowuje przekazanie świadectwa w akcie notarialnym, a w przypadku jego nieprzekazania poucza osobę zobowiązaną o przewidzianej prawem karze grzywny."),
    note: verified("Świadectwo jest co do zasady ważne przez 10 lat, chyba że wcześniej przeprowadzone roboty budowlano-instalacyjne zmienią charakterystykę energetyczną lokalu."),
  },
  process: {
    eyebrow: "05 — Przebieg sprzedaży",
    title: "Jak wygląda sprzedaż mieszkania u notariusza?",
    intro: review("Kolejne etapy zależą od rodzaju prawa do lokalu, dokumentów, sytuacji stron i ustaleń dotyczących zapłaty oraz wydania mieszkania."),
    steps: [
      { number: "01", title: "Kontakt i informacje", text: review("Ustalenie rodzaju prawa do lokalu, sposobu jego nabycia oraz podstawowych warunków sprzedaży.") },
      { number: "02", title: "Dokumenty", text: review("Przekazanie kancelarii dokumentów potrzebnych dla konkretnej transakcji.") },
      { number: "03", title: "Weryfikacja", text: review("Sprawdzenie dokumentów i ustalenie, czy potrzebne są dodatkowe zaświadczenia lub zgody.") },
      { number: "04", title: "Ustalenie warunków", text: review("Cena, sposób i termin zapłaty, termin wydania lokalu oraz inne ustalenia stron.") },
      { number: "05", title: "Podpisanie aktu", text: verified("Zawarcie umowy sprzedaży w formie aktu notarialnego.") },
      { number: "06", title: "Po podpisaniu", text: review("Wnioski wieczystoksięgowe, zapłata i wydanie lokalu zgodnie z treścią umowy.") },
    ],
  },
  payment: {
    title: "Kiedy kupujący płaci za mieszkanie?",
    text: review("Sposób i termin zapłaty ceny zależą od ustaleń stron oraz sposobu finansowania zakupu. Warunki zapłaty powinny zostać jednoznacznie określone w umowie."),
    deposit: {
      showNotarialDeposit: false,
      title: "Depozyt notarialny",
      text: verified("Prawo o notariacie pozwala notariuszowi, w związku z dokonywaną czynnością, przyjąć pieniądze na przechowanie w celu późniejszego wydania wskazanej osobie."),
    },
  },
  costs: {
    eyebrow: "06 — Koszty i podatki",
    title: "Ile kosztuje sprzedaż mieszkania u notariusza?",
    intro: review("Całkowite koszty zależą od konkretnej transakcji. Mogą obejmować wynagrodzenie notariusza, VAT, opłaty sądowe, wypisy aktu oraz podatek PCC, jeżeli występuje."),
    items: ["Wynagrodzenie notariusza", "VAT", "Opłaty sądowe", "Wypisy aktu", "Podatek PCC, jeżeli występuje"],
    pccTitle: "PCC przy sprzedaży mieszkania",
    pcc: verified("Jeżeli umowa sprzedaży podlega podatkowi od czynności cywilnoprawnych, obowiązek podatkowy przy sprzedaży ciąży na kupującym. Podstawowa stawka PCC przy sprzedaży nieruchomości i spółdzielczego własnościowego prawa do lokalu wynosi 2% wartości rynkowej."),
    pccPayer: verified("Przy akcie notarialnym notariusz jest płatnikiem PCC."),
    firstHome: review("Ustawa przewiduje zwolnienie z PCC dla określonego nabycia pierwszego mieszkania lub domu przez osoby fizyczne, które spełniają warunki wskazane w art. 9 pkt 17 ustawy o PCC. Przy ocenie warunków trzeba uwzględnić także wyjątek dotyczący udziału nieprzekraczającego 50% nabytego w drodze dziedziczenia."),
    pitTitle: "Czy sprzedający płaci PIT?",
    pit: review("Nie zawsze. Jeżeli prywatna sprzedaż następuje przed upływem 5 lat liczonych od końca roku nabycia lub wybudowania, co do zasady trzeba rozliczyć ją w PIT-39. Sam obowiązek rozliczenia nie oznacza jednak automatycznie podatku do zapłaty. Przy nieruchomości odziedziczonej okres 5 lat liczy się od końca roku, w którym nieruchomość nabył lub wybudował spadkodawca."),
    pitNote: review("Skutki podatkowe zależą od konkretnej sytuacji. W razie wątpliwości warto skonsultować je z doradcą podatkowym."),
  },
  faq: {
    eyebrow: "07 — FAQ / GEO",
    title: "Najczęstsze pytania o sprzedaż mieszkania",
    intro: review("Poniższe odpowiedzi porządkują najczęstsze pytania przed wizytą. Zakres dokumentów i ustaleń warto potwierdzić dla konkretnej transakcji."),
    items: [
      { question: "Czy sprzedaż mieszkania musi odbyć się u notariusza?", answer: verified("Tak. Umowa przenosząca własność nieruchomości wymaga formy aktu notarialnego. Dotyczy to również umowy sprzedaży mieszkania stanowiącego odrębną nieruchomość.") },
      { question: "Jakie dokumenty potrzebuję do sprzedaży mieszkania?", answer: review("Zakres dokumentów zależy od rodzaju prawa do lokalu, sposobu jego nabycia, księgi wieczystej, hipoteki oraz sytuacji stron. Warto wcześniej przekazać kancelarii podstawowe informacje o transakcji.") },
      { question: "Czy można sprzedać mieszkanie z hipoteką?", answer: verified("Tak. Hipoteka nie uniemożliwia sprzedaży mieszkania, ale sposób spłaty zabezpieczonego zadłużenia i wykreślenia hipoteki powinien zostać przygotowany przed transakcją.") },
      { question: "Czy po spadku potrzebuję zaświadczenia z urzędu skarbowego?", answer: review("Nie zawsze. To, czy potrzebna będzie zgoda naczelnika urzędu skarbowego albo zaświadczenie, zależy od sposobu nabycia i zastosowanych przepisów, dlatego warto potwierdzić to z kancelarią.") },
      { question: "Czy do sprzedaży potrzebne jest świadectwo energetyczne?", answer: verified("Co do zasady tak. Przy sprzedaży lokalu właściciel przekazuje nabywcy świadectwo charakterystyki energetycznej, a notariusz odnotowuje jego przekazanie w akcie.") },
      { question: "Czy kupujący i sprzedający muszą być obecni?", answer: review("Nie zawsze. Strona może działać przez prawidłowo umocowanego pełnomocnika. Ponieważ sprzedaż nieruchomości wymaga formy aktu notarialnego, pełnomocnictwo do jej dokonania również powinno zostać udzielone w tej formie. Treść pełnomocnictwa warto wcześniej uzgodnić z kancelarią.") },
      { question: "Czy mieszkanie można sprzedać przez pełnomocnika?", answer: review("Możliwość działania przez pełnomocnika zależy od sytuacji i prawidłowego umocowania. Treść oraz forma pełnomocnictwa należy wcześniej uzgodnić z kancelarią.") },
      { question: "Czy przed wizytą trzeba cofnąć zastrzeżenie PESEL?", answer: verified("Tak. Zastrzeżony numer PESEL osoby fizycznej będącej stroną czynności uniemożliwia dokonanie czynności do czasu cofnięcia zastrzeżenia.") },
      { question: "Kiedy kupujący płaci za mieszkanie?", answer: review("Sposób i termin zapłaty zależą od ustaleń stron oraz sposobu finansowania zakupu i powinny być jednoznacznie określone w umowie.") },
      { question: "Kto płaci PCC?", answer: verified("Przy sprzedaży obowiązek podatkowy w PCC ciąży na kupującym. Przy akcie notarialnym notariusz jest płatnikiem PCC.") },
      { question: "Czy przy zakupie pierwszego mieszkania płaci się PCC?", answer: review("Nie zawsze. Ustawa przewiduje zwolnienie dla określonego nabycia pierwszego mieszkania lub domu, jeżeli spełnione są warunki ustawowe.") },
      { question: "Czy sprzedający musi zapłacić PIT?", answer: review("Nie zawsze. Jeżeli prywatna sprzedaż następuje przed upływem 5 lat liczonych od końca roku nabycia lub wybudowania, co do zasady trzeba rozliczyć ją w PIT-39. Sam obowiązek rozliczenia nie oznacza jednak automatycznie podatku do zapłaty. Przy nieruchomości odziedziczonej okres 5 lat liczy się od końca roku, w którym nieruchomość nabył lub wybudował spadkodawca.") },
    ],
  },
  sources: {
    eyebrow: "08 — Źródła",
    title: "Źródła i aktualność informacji",
    intro: "Informacje opierają się na wskazanych aktach prawnych i oficjalnych materiałach administracji publicznej. Zakres dokumentów i czynności warto potwierdzić dla konkretnej transakcji.",
    reviewedBy: null,
    lastReviewed: null,
    sources: [
      { label: "Kodeks cywilny — Dz.U. 2026 poz. 795", href: "https://eli.gov.pl/eli/DU/2026/795/ogl" },
      { label: "Prawo o notariacie — Dz.U. 2026 poz. 614", href: "https://eli.gov.pl/eli/DU/2026/614/ogl" },
      { label: "Ustawa o spółdzielniach mieszkaniowych — Dz.U. 2026 poz. 889", href: "https://eli.gov.pl/eli/DU/2026/889/ogl" },
      { label: "Ustawa o księgach wieczystych i hipotece — Dz.U. 2025 poz. 341", href: "https://eli.gov.pl/eli/DU/2025/341/ogl" },
      { label: "Ustawa o podatku od spadków i darowizn — Dz.U. 2026 poz. 478", href: "https://eli.gov.pl/eli/DU/2026/478/ogl" },
      { label: "Ustawa o podatku od czynności cywilnoprawnych — Dz.U. 2026 poz. 191", href: "https://eli.gov.pl/eli/DU/2026/191/ogl" },
      { label: "Ustawa o charakterystyce energetycznej budynków — Dz.U. 2024 poz. 101", href: "https://eli.gov.pl/eli/DU/2024/101/ogl" },
      { label: "Ustawa o PIT — Dz.U. 2026 poz. 592", href: "https://eli.gov.pl/eli/DU/2026/592/ogl" },
      { label: "Ministerstwo Finansów — zbycie nieruchomości", href: "https://podatki.gov.pl/podatki-osobiste/pit/informacje-podstawowe/co-jest-opodatkowane/zbycie-nieruchomosci" },
      { label: "Ministerstwo Rozwoju i Technologii — świadectwa charakterystyki energetycznej", href: "https://www.gov.pl/web/rozwoj-technologia/swiadectwa-charakterystyki-energetycznej" },
    ],
  },
  contact: {
    eyebrow: "09 — Kontakt",
    title: "Chcesz przygotować sprzedaż mieszkania?",
    description: "Przekaż kancelarii podstawowe informacje o mieszkaniu i planowanej transakcji, aby ustalić zakres dokumentów przed wizytą.",
  },
} as const;
