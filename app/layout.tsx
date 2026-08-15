import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import { absoluteSiteUrl, robotsMetadata, siteUrl } from "@/lib/site-config";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin", "latin-ext"], variable: "--font-manrope", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin", "latin-ext"], variable: "--font-newsreader", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Czarniak · Podkówka — Kancelaria Notarialna", template: "%s — Czarniak · Podkówka" },
  description: "Kancelaria notarialna Marii Czarniak i Sary Podkówki we Wrocławiu. Spokojnie przeprowadzamy przez sprawy dotyczące nieruchomości, spółek, spadków i innych czynności notarialnych.",
  alternates: { canonical: absoluteSiteUrl("/") },
  openGraph: { title: "Czarniak · Podkówka — Kancelaria Notarialna", description: "Ważne sprawy warto załatwić spokojnie. Kancelaria notarialna we Wrocławiu.", type: "website", locale: "pl_PL", url: absoluteSiteUrl("/") },
  robots: robotsMetadata,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pl"><body className={`${manrope.variable} ${newsreader.variable}`}>{children}</body></html>;
}
