"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "#conteudo", label: "Conteúdo do Ebook" },
  { href: "#resultados", label: "Resultados" },
  { href: "#prova-social", label: "Prova Social" },
  { href: "#faq", label: "FAQ" },
];

export function GlassHeader() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 30);
    });
  }, [scrollY]);

  const headerOpacity = useTransform(scrollY, [0, 200], [0.6, 0.95]);
  const headerBlurValue = useTransform(scrollY, [0, 200], [8, 18]);
  const headerBackground = isScrolled ? "rgba(15, 23, 42, 0.65)" : "rgba(15, 23, 42, 0.35)";

  return (
    <motion.header
      style={{
        opacity: headerOpacity,
        backdropFilter: headerBlurValue,
        WebkitBackdropFilter: headerBlurValue,
        backgroundColor: headerBackground,
      }}
      className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-full border border-slate-200/30 bg-slate-900/40 px-6 py-3 text-slate-100 shadow-lg transition-all duration-500"
    >
      <Link href="/" className="flex items-center gap-3 text-sky-200 hover:text-white">
        <span className="sr-only">T&D Sustentável</span>
        <Image
          src="/T&D SUSTENTAVEL ASSINATURA HORIZONTAL BRANCA.png"
          alt="Logotipo T&D Sustentável"
          width={180}
          height={52}
          priority
          className="h-9 w-auto object-contain"
        />
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 lg:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative transition-all duration-300 hover:text-white"
          >
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-sky-300 to-cyan-400 transition-all duration-300 hover:w-full" />
            {link.label}
          </a>
        ))}
      </nav>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        href="#cta"
        className="hidden rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-6 py-2 text-sm font-semibold uppercase tracking-wide text-slate-900 shadow-lg hover:from-cyan-300 hover:via-sky-400 hover:to-blue-500 lg:inline-flex"
      >
        Quero economia
      </motion.a>
    </motion.header>
  );
}
