import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tedsustentavel.com.br"),
  title: {
    default: "Pague o justo pela sua fatura de água | Ebook T&D Sustentável",
    template: "%s | T&D Sustentável",
  },
  description:
    "Aprenda, de forma centralizada, a interpretar sua fatura de água da SABESP e garanta que está pagando apenas o que consome. Ebook com metodologia da T&D Sustentável.",
  keywords: [
    "fatura de água",
    "sabesp",
    "economia de água",
    "td sustentavel",
    "auditoria de conta",
    "pague o justo",
    "ebook",
  ],
  creator: "T&D Sustentável",
  openGraph: {
    title: "Pague o justo pela sua fatura de água",
    description:
      "Descubra como identificar erros de cobrança na sua fatura de água e economize até 28,5% por mês com a metodologia T&D Sustentável.",
    url: "https://tedsustentavel.com.br",
    siteName: "T&D Sustentável",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/ebook-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Ebook Pague o Justo - T&D Sustentável",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pague o justo pela sua fatura de água",
    description:
      "Identifique erros de leitura e cobranças incorretas nas suas contas de água com a T&D Sustentável.",
    images: ["/images/ebook-cover.jpg"],
  },
  alternates: {
    canonical: "https://tedsustentavel.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
