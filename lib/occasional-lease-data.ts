export type OccasionalLeaseReviewableText = {
  text: string;
  source: string;
  requiresLegalReview: boolean;
};

const review = (text: string, source: string): OccasionalLeaseReviewableText => ({ text, source, requiresLegalReview: true });
const verified = (text: string, source: string): OccasionalLeaseReviewableText => ({ text, source, requiresLegalReview: false });

export const occasionalLeaseData = {
  breadcrumb: [
    { label: "Strona główna", href: "/" },
    { label: "Najem okazjonalny", href: "/najem-okazjonalny/" },
  ],
  hero: {
    eyebrow: "NAJEM",
    title: "Najem okazjonalny u notariusza",
    description: "Sprawdź, które oświadczenie wymaga aktu notarialnego, co przygotować przed wizytą, jak działa wskazanie innego lokalu i o czym właściciel powinien pamiętać po rozpoczęciu najmu.",
    primaryCta: "Sprawdź, co przygotować",
    secondaryCta: "Umów wizytę",
  },
  directAnswer: {
    question: "Czy cała umowa najmu okazjonalnego musi być podpisana u notariusza?",
    answer: verified("Nie. Umowa najmu okazjonalnego oraz jej zmiany wymagają formy pisemnej pod rygorem nieważności. W formie aktu notarialnego sporządzane jest natomiast oświadczenie najemcy, w którym poddaje się egzekucji i zobowiązuje do opróżnienia oraz wydania lokalu na zasadach przewidzianych w ustawie.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a ust. 2 pkt 1 oraz ust. 6."),
  },
  toc: [
    { label: "Dla kogo", href: "#dla-kogo" },
    { label: "Najemca / właściciel", href: "#uczestnicy" },
    { label: "Dokumenty", href: "#dokumenty" },
    { label: "Inny lokal", href: "#inny-lokal" },
    { label: "21 dni", href: "#21-dni" },
    { label: "Proces", href: "#proces" },
    { label: "Urząd skarbowy", href: "#urzad-skarbowy" },
    { label: "Procedura", href: "#procedura" },
    { label: "Koszt", href: "#koszt" },
    { label: "FAQ", href: "#faq" },
  ],
  eligibility: {
    eyebrow: "01 — Dla kogo",
    title: "Kiedy można zawrzeć umowę najmu okazjonalnego?",
    intro: verified("Najem okazjonalny dotyczy umowy zawieranej na czas oznaczony, nie dłuższy niż 10 lat, której przedmiotem jest lokal mieszkalny, jeżeli właścicielem lokalu jest osoba fizyczna nieprowadząca działalności gospodarczej w zakresie wynajmowania lokali.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a ust. 1."),
    items: [
      { title: "Lokal mieszkalny", text: verified("Przedmiotem najmu jest lokal służący zaspokajaniu potrzeb mieszkaniowych.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 2 ust. 1 pkt 4 w zw. z art. 19a ust. 1.") },
      { title: "Właściciel jako osoba fizyczna", text: verified("Właścicielem lokalu jest osoba fizyczna, która nie prowadzi działalności gospodarczej w zakresie wynajmowania lokali.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a ust. 1.") },
      { title: "Czas oznaczony", text: verified("Umowa jest zawierana na czas oznaczony, maksymalnie na 10 lat.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a ust. 1.") },
    ],
    note: verified("Jeżeli lokal wynajmuje podmiot prowadzący działalność gospodarczą w zakresie wynajmu lokali, ustawa przewiduje odrębną konstrukcję najmu instytucjonalnego.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19f."),
  },
  roles: {
    eyebrow: "02 — Dwie strony",
    title: "Najemca / właściciel",
    tenant: {
      title: "Najemca",
      text: verified("U notariusza składa oświadczenie o poddaniu się egzekucji i zobowiązaniu do opróżnienia oraz wydania wynajmowanego lokalu.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a ust. 2 pkt 1."),
    },
    owner: {
      title: "Właściciel",
      text: verified("Po rozpoczęciu najmu zgłasza zawarcie umowy właściwemu naczelnikowi urzędu skarbowego w ustawowym terminie.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a i 19b."),
    },
    presence: review("Obecność wynajmującego nie zawsze jest konieczna. Czynność notarialna dotyczy przede wszystkim oświadczenia najemcy. Przed wizytą warto jednak potwierdzić z kancelarią, czy wynajmujący będzie potrzebny w konkretnej sprawie.", "Art. 19a i 19b ustawy o ochronie praw lokatorów; praktyka kancelarii."),
  },
  documents: {
    eyebrow: "03 — Dokumenty",
    title: "Co przygotować do najmu okazjonalnego u notariusza?",
    intro: review("Zakres potrzebnych informacji zależy od przygotowanej umowy i konkretnej sytuacji. Poniżej znajdziesz podstawowe elementy związane z najmem okazjonalnym oraz kwestie, które warto ustalić z kancelarią przed wizytą.", "Art. 19a ustawy o ochronie praw lokatorów; dokładny komplet dokumentów zależy od obsługi konkretnej kancelarii."),
    statutory: [
      { title: "Umowa najmu", text: review("Umowa najmu okazjonalnego lub jej projekt — zgodnie z ustaleniami przed wizytą.", "Art. 19a ustawy o ochronie praw lokatorów; praktyka kancelarii." ) },
      { title: "Dane stron i lokalu", text: review("Dane najemcy, wynajmującego oraz wynajmowanego lokalu potrzebne do przygotowania czynności.", "Art. 19a ustawy o ochronie praw lokatorów; praktyka kancelarii." ) },
      { title: "Wskazanie innego lokalu", text: verified("Lokal, w którym najemca będzie mógł zamieszkać w przypadku wykonania obowiązku opróżnienia wynajmowanego lokalu.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a ust. 2 pkt 2.") },
      { title: "Zgoda osoby z tytułem prawnym", text: verified("Oświadczenie osoby mającej tytuł prawny do wskazanego lokalu o zgodzie na zamieszkanie najemcy i osób z nim zamieszkujących.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a ust. 2 pkt 3.") },
    ],
    confirmationTitle: "Co warto ustalić przed wizytą?",
    confirmation: [
      "Czy przed wizytą potrzebna jest już podpisana umowa, czy wystarczy jej projekt?",
      "Jakie dane najemcy, wynajmującego i lokalu przygotować?",
      "Jakie informacje i dokument dotyczące osoby wyrażającej zgodę będą potrzebne?",
      "Czy dokumenty warto przesłać kancelarii wcześniej?",
    ].map((text) => review(text, "Art. 19a ustawy o ochronie praw lokatorów; praktyka kancelarii.")),
    cta: "Zapytaj kancelarię o komplet dokumentów",
  },
  otherLocale: {
    eyebrow: "04 — Inny lokal",
    title: "Czy najemca musi wskazać „lokal zastępczy”?",
    answer: verified("Ustawa posługuje się określeniem „inny lokal”. Najemca wskazuje lokal, w którym będzie mógł zamieszkać w przypadku wykonania obowiązku opróżnienia wynajmowanego mieszkania.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a ust. 2 pkt 2."),
    consentTitle: "Czy zgoda właściciela innego lokalu musi być poświadczona notarialnie?",
    consent: verified("Nie zawsze. Ustawa wymaga oświadczenia właściciela lub innej osoby posiadającej tytuł prawny do wskazanego lokalu o zgodzie na zamieszkanie najemcy i osób z nim zamieszkujących. Podpis pod tym oświadczeniem wymaga notarialnego poświadczenia na żądanie wynajmującego.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a ust. 2 pkt 3."),
  },
  replacementLocale: {
    eyebrow: "05 — Zmiana sytuacji",
    title: "Co jeśli wskazany lokal przestanie być dostępny?",
    answer: verified("Jeżeli najemca utraci możliwość zamieszkania we wskazanym lokalu, ma 21 dni od dnia, w którym dowiedział się o tej sytuacji, na wskazanie innego lokalu oraz przedstawienie wymaganej zgody osoby mającej do niego tytuł prawny.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a ust. 3."),
    note: verified("Niedopełnienie tego obowiązku może stanowić podstawę wypowiedzenia umowy przez właściciela z zachowaniem co najmniej siedmiodniowego okresu wypowiedzenia.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19d ust. 5."),
  },
  process: {
    eyebrow: "06 — Proces",
    title: "Jak wygląda najem okazjonalny u notariusza?",
    intro: review("Kolejne etapy zależą od informacji o umowie, najemcy, wynajmowanym lokalu i wskazanym innym lokalu. Dokładny sposób obsługi warto ustalić przed wizytą.", "Art. 19a i 19b ustawy o ochronie praw lokatorów; workflow kancelarii."),
    steps: [
      { number: "01", title: "Ustalenie dokumentów", text: review("Przekazanie kancelarii podstawowych informacji o umowie, najemcy i lokalach.", "Workflow kancelarii."), statutory: false },
      { number: "02", title: "Weryfikacja danych", text: review("Sprawdzenie informacji potrzebnych do przygotowania oświadczenia.", "Workflow kancelarii."), statutory: false },
      { number: "03", title: "Oświadczenie najemcy", text: verified("Najemca składa w formie aktu notarialnego wymagane ustawą oświadczenie.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a ust. 2 pkt 1."), statutory: true },
      { number: "04", title: "Dokument do umowy", text: verified("Oświadczenie stanowi jeden z dokumentów związanych z umową najmu okazjonalnego.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a ust. 2."), statutory: true },
      { number: "05", title: "Zgłoszenie przez właściciela", text: verified("Po rozpoczęciu najmu właściciel pamięta o zgłoszeniu umowy do właściwego urzędu skarbowego.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19b."), statutory: true },
    ],
  },
  taxOffice: {
    eyebrow: "07 — Urząd skarbowy",
    title: "Ile czasu jest na zgłoszenie najmu okazjonalnego do urzędu skarbowego?",
    direct: "14 dni",
    answer: verified("Zgłoszenia dokonuje właściciel naczelnikowi urzędu skarbowego właściwemu ze względu na miejsce zamieszkania właściciela. Termin liczy się od dnia rozpoczęcia najmu, a nie od samego dnia podpisania umowy.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19b ust. 1."),
    consequence: verified("Niedopełnienie obowiązku zgłoszenia powoduje, że nie stosuje się szczególnych przepisów art. 19c i 19d dotyczących najmu okazjonalnego.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19b ust. 3."),
  },
  enforcement: {
    eyebrow: "08 — Po zakończeniu",
    title: "Czy akt notarialny pozwala od razu eksmitować najemcę?",
    answer: verified("Nie. Oświadczenie najemcy tworzy podstawę szczególnej procedury egzekwowania obowiązku opróżnienia lokalu, ale nie oznacza możliwości natychmiastowego usunięcia najemcy bez dalszych czynności.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19d ust. 2–4."),
    steps: [
      "Umowa wygasa albo zostaje rozwiązana.",
      "Jeżeli najemca nie opuszcza lokalu, właściciel doręcza mu pisemne żądanie opróżnienia lokalu z urzędowo poświadczonym podpisem.",
      "Termin wskazany w żądaniu nie może być krótszy niż 7 dni od doręczenia.",
      "Po bezskutecznym upływie terminu właściciel może wystąpić do sądu o nadanie klauzuli wykonalności aktowi notarialnemu.",
    ].map((text) => verified(text, "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19d ust. 2–4.")),
  },
  costs: {
    eyebrow: "09 — Koszt",
    title: "Ile kosztuje oświadczenie do najmu okazjonalnego u notariusza?",
    intro: review("Ustawa określa górną granicę wynagrodzenia notariusza za sporządzenie oświadczenia najemcy: nie więcej niż 1/10 minimalnego wynagrodzenia za pracę.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a ust. 7."),
    year: 2026,
    minimumWage: "4 806 zł",
    feeLimit: "480,60 zł",
    note: review("Jest to ustawowy limit wynagrodzenia za wskazane oświadczenie obowiązujący w 2026 r. Całkowity koszt czynności może obejmować również VAT, wypisy oraz inne czynności, jeżeli są wykonywane.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a ust. 7; Rozporządzenie Rady Ministrów z 11 września 2025 r., Dz.U. 2025 poz. 1242."),
  },
  faq: {
    eyebrow: "10 — FAQ / GEO",
    title: "Najczęstsze pytania o najem okazjonalny",
    intro: review("Poniższe odpowiedzi porządkują najczęstsze pytania przed wizytą. Zakres dokumentów i przygotowanie czynności warto potwierdzić dla konkretnej umowy.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725; praktyka kancelarii."),
    items: [
      { question: "Czy cała umowa najmu okazjonalnego musi być zawarta u notariusza?", answer: verified("Nie. Sama umowa oraz jej zmiany wymagają formy pisemnej. Akt notarialny dotyczy oświadczenia najemcy o poddaniu się egzekucji i zobowiązaniu do opróżnienia oraz wydania lokalu.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a ust. 2 pkt 1 oraz ust. 6.") },
      { question: "Kto musi iść do notariusza przy najmie okazjonalnym?", answer: review("Co do zasady czynność notarialna dotyczy oświadczenia najemcy. Udział właściciela oraz sposób przekazania pozostałych dokumentów warto potwierdzić z kancelarią.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a; praktyka kancelarii.") },
      { question: "Czy właściciel mieszkania musi być obecny u notariusza?", answer: review("Nie zawsze musi to być konieczne. Czynność notarialna dotyczy przede wszystkim oświadczenia najemcy. Przed wizytą warto jednak potwierdzić z kancelarią sposób przygotowania dokumentów i to, czy obecność wynajmującego będzie potrzebna w konkretnej sprawie.", "Art. 19a i 19b ustawy o ochronie praw lokatorów; praktyka kancelarii." ) },
      { question: "Jakie dokumenty zabrać do notariusza?", answer: review("Umowę lub jej projekt, dane stron i lokalu, wskazanie innego lokalu oraz oświadczenie osoby mającej tytuł prawny do tego lokalu. Przed wizytą zapytaj kancelarię, które dokumenty będą potrzebne w Twojej sprawie.", "Art. 19a ustawy o ochronie praw lokatorów; praktyka kancelarii.") },
      { question: "Czy trzeba mieć już podpisaną umowę najmu?", answer: review("Nie zawsze. Przed wizytą zapytaj kancelarię, czy możesz przyjść z projektem umowy, czy potrzebny jest już podpisany dokument.", "Art. 19a ustawy o ochronie praw lokatorów; praktyka kancelarii.") },
      { question: "Czy trzeba wskazać inny lokal?", answer: verified("Tak. Najemca wskazuje inny lokal, w którym będzie mógł zamieszkać w przypadku wykonania obowiązku opróżnienia wynajmowanego lokalu.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a ust. 2 pkt 2.") },
      { question: "Czy właściciel innego lokalu musi iść do notariusza?", answer: review("Nie musi to oznaczać udziału w tej samej czynności. Ustawa wymaga jego oświadczenia o zgodzie, a przed wizytą warto ustalić z kancelarią, jak je przygotować i przekazać.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a ust. 2 pkt 3; praktyka kancelarii.") },
      { question: "Czy jego podpis musi być poświadczony notarialnie?", answer: verified("Nie zawsze. Podpis pod oświadczeniem osoby mającej tytuł prawny do innego lokalu wymaga notarialnego poświadczenia na żądanie wynajmującego.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a ust. 2 pkt 3.") },
      { question: "Co jeśli wskazany lokal przestanie być dostępny?", answer: verified("Najemca ma 21 dni od dnia, w którym dowiedział się o utracie tej możliwości, na wskazanie innego lokalu i przedstawienie wymaganej zgody.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a ust. 3.") },
      { question: "Ile jest czasu na zgłoszenie umowy do urzędu skarbowego?", answer: verified("14 dni od dnia rozpoczęcia najmu. Zgłoszenia dokonuje właściciel właściwemu naczelnikowi urzędu skarbowego.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19b ust. 1.") },
      { question: "Czy 14 dni liczy się od podpisania umowy?", answer: verified("Nie. Termin liczy się od dnia rozpoczęcia najmu, a nie od samego dnia podpisania umowy.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19b ust. 1.") },
      { question: "Czy akt notarialny oznacza eksmisję bez sądu?", answer: verified("Nie. Po spełnieniu kolejnych warunków właściciel może wystąpić do sądu o nadanie klauzuli wykonalności aktowi notarialnemu.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19d ust. 2–4.") },
      { question: "Ile kosztuje oświadczenie najemcy?", answer: review("W 2026 r. ustawowy limit wynagrodzenia za oświadczenie wynosi 1/10 minimalnego wynagrodzenia, czyli 480,60 zł. Całkowity koszt może być wyższy, jeżeli obejmuje VAT, wypisy lub inne czynności.", "Ustawa o ochronie praw lokatorów, Dz.U. 2023 poz. 725, art. 19a ust. 7; Dz.U. 2025 poz. 1242; praktyka kancelarii.") },
      { question: "Czy kaucja jest obowiązkowa?", answer: verified("Nie. Zawarcie umowy może zostać uzależnione od kaucji. Jeżeli strony ją przewidują, ustawa ogranicza jej wysokość do sześciokrotności miesięcznego czynszu i przewiduje jej zwrot w ciągu miesiąca od opróżnienia lokalu po odpowiednich potrąceniach.", "Ustawa o ochronie praw lokatorów, art. 19a ust. 4–5.") },
    ],
  },
  sources: {
    eyebrow: "11 — Źródła",
    title: "Źródła i aktualność informacji",
    intro: "Informacje opierają się na wskazanych aktach prawnych i oficjalnych materiałach administracji publicznej. Zakres dokumentów i sposób obsługi warto potwierdzić dla konkretnej umowy.",
    reviewedBy: null,
    lastReviewed: null,
    sources: [
      { label: "Ustawa o ochronie praw lokatorów, mieszkaniowym zasobie gminy i o zmianie Kodeksu cywilnego — tekst jednolity Dz.U. 2023 poz. 725, w szczególności art. 19a–19f", href: "https://eli.gov.pl/eli/DU/2023/725/ogl" },
      { label: "Rozporządzenie Rady Ministrów z 11 września 2025 r. w sprawie minimalnego wynagrodzenia w 2026 r. — Dz.U. 2025 poz. 1242", href: "https://eli.gov.pl/eli/DU/2025/1242/ogl" },
      { label: "Ministerstwo Rodziny — minimalne wynagrodzenie za pracę w 2026 r.", href: "https://www.gov.pl/web/rodzina/minimalne-wynagrodzenie-za-prace-w-2026-r" },
    ],
  },
  contact: {
    eyebrow: "12 — Kontakt",
    title: "Chcesz przygotować najem okazjonalny?",
    description: "Przekaż kancelarii podstawowe informacje o umowie, najemcy i wskazanym innym lokalu, aby ustalić zakres dokumentów przed wizytą.",
  },
} as const;
