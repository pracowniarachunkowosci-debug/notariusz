/**
 * Sprint 2 content registry.
 * Profile copy, specialisation ranges and contact placeholders are draft data
 * and require approval from the notarial office before publication.
 */
export const draftContentNote = "Copy robocze — wymagają akceptacji kancelarii.";

export const visitSteps = [
  { number: "01", title: "Znajdź swoją czynność", description: "Sprawdź dokumenty i podstawowe informacje." },
  { number: "02", title: "Prześlij dokumenty", description: "Dokumenty mogą zostać zweryfikowane przez kancelarię przed spotkaniem." },
  { number: "03", title: "Umów termin", description: "Po przygotowaniu dokumentacji ustal dogodny termin czynności." },
] as const;

export const propertyQuestions = [
  { number: "01", question: "Jakie dokumenty będą potrzebne?", answer: "Zestaw dokumentów zależy od sytuacji nieruchomości i stron. Warto ustalić go przed wizytą." },
  { number: "02", question: "Czy można sprzedać mieszkanie z hipoteką?", answer: "Takie sprawy wymagają sprawdzenia dokumentów i uzgodnienia kolejności czynności z bankiem." },
  { number: "03", question: "Kto powinien być obecny?", answer: "Przed wizytą kancelaria pomoże ustalić, które osoby i dokumenty są potrzebne przy danej czynności." },
  { number: "04", question: "Od czego zależą koszty?", answer: "Na całkowity koszt wpływają m.in. rodzaj czynności, dokumenty oraz opłaty publicznoprawne." },
] as const;

export const profiles = [
  {
    name: "Maria Czarniak",
    imagePath: "/images/maria-czarniak.jpg",
    description: "Maria Czarniak jest notariuszem i wspólniczką kancelarii. W swojej pracy stawia na jasne przedstawienie przebiegu czynności oraz dobre przygotowanie klientów jeszcze przed spotkaniem. Zajmuje się sprawami dotyczącymi m.in. nieruchomości, spraw rodzinnych, spadków oraz przedsiębiorców.",
    imageSide: "left",
  },
  {
    name: "Sara Podkówka",
    imagePath: "/images/sara-podkowka.jpg",
    description: "Sara Podkówka jest notariuszem i wspólniczką kancelarii. Szczególną wagę przykłada do tego, aby nawet bardziej złożone czynności były dla klientów zrozumiałe i dobrze przygotowane. Prowadzi sprawy związane m.in. z nieruchomościami, spadkami, sprawami rodzinnymi oraz działalnością spółek.",
    imageSide: "right",
  },
] as const;

export const practicalAdvantages = [
  "Parking przy kancelarii",
  "Terminy również w soboty",
  "Kącik dla dzieci",
  "Możliwość przyjścia z psem",
] as const;

export const businessServices = [
  "Założenie spółki z o.o.",
  "Zmiana umowy spółki",
  "Sprzedaż udziałów",
  "Podwyższenie kapitału",
  "Fundacja rodzinna",
] as const;

export const knowledgeItems = [
  { title: "Jakie dokumenty przygotować do sprzedaży mieszkania?", meta: "Treść robocza · data do uzupełnienia" },
  { title: "S24 czy spółka zakładana u notariusza?", meta: "Treść robocza · data do uzupełnienia" },
  { title: "Czy wszyscy spadkobiercy muszą być obecni przy poświadczeniu dziedziczenia?", meta: "Treść robocza · data do uzupełnienia" },
] as const;

export const contactData = {
  address: "ul. Mińska 54–56, Wrocław",
  parking: "Parking przy kancelarii",
  phoneMaria: { label: "Telefon Marii — do uzupełnienia", href: null },
  phoneSara: { label: "Telefon Sary — do uzupełnienia", href: null },
  email: { label: "E-mail — do uzupełnienia", href: null },
  hours: "Godziny pracy — do uzupełnienia",
} as const;

export const footerLinks = [
  ["Czynności", "#sprawy"],
  ["Dokumenty", "#dokumenty"],
  ["Opłaty", "#oplaty"],
  ["Kancelaria", "#kancelaria"],
  ["Kontakt", "#kontakt"],
  ["Polityka prywatności", "#polityka-prywatnosci"],
] as const;
