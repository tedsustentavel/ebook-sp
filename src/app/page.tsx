import type { Metadata } from "next";

import { HomePageClient } from "../components/HomePageClient";

export const revalidate = 900;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Landing page ebook Pague o Justo",
    description:
      "Landing page interativa do ebook que ensina a interpretar a fatura de água da SABESP e garantir economia média de 28,5% ao mês.",
    openGraph: {
      title: "Pague o Justo pela sua conta de água",
      description:
        "Identifique erros de cobrança e economize até 28,5% ao mês com o ebook da T&D Sustentável.",
      images: [
        {
          url: "/images/ebook-cover.jpg",
          width: 1200,
          height: 630,
          alt: "Mockup do ebook Pague o Justo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Pague o Justo",
      description: "Economize em média 28,5% na sua fatura de água com o método T&D Sustentável.",
      images: ["/images/ebook-cover.jpg"],
    },
  };
}

export default function Home() {
  return <HomePageClient />;
}
