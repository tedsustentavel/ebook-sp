"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import { GlassHeader } from "./ui/GlassHeader";
import { TypewriterText } from "./ui/TypewriterText";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { Reveal } from "./ui/Reveal";
import { ParallaxScene } from "./ui/ParallaxScene";
import { LottieWater } from "./ui/LottieWater";
import { GSAPAnimatedSection } from "./ui/GSAPAnimatedSection";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

const typewriterPhrases = [
  "PAGUE O JUSTO",
  "DESCUBRA ERROS DE COBRANÇA",
  "ECONOMIZE ÁGUA TODOS OS MESES",
];

const clients = [
  { name: "Rede D'Or", logo: "https://tedsustentavel.com.br/wp-content/uploads/2024/03/1.png" },
  { name: "SLB", logo: "https://tedsustentavel.com.br/wp-content/uploads/2024/04/LOGO-DE-TODOS-OS-CLIENTE-DA-TD-17.png" },
  { name: "Unimed", logo: "https://tedsustentavel.com.br/wp-content/uploads/2024/03/2.png" },
  { name: "Claro", logo: "https://tedsustentavel.com.br/wp-content/uploads/2024/03/10.png" },
  { name: "Estácio", logo: "https://tedsustentavel.com.br/wp-content/uploads/2024/03/17.png" },
  { name: "Americanas", logo: "https://tedsustentavel.com.br/wp-content/uploads/2024/03/5.png" },
  { name: "Petz", logo: "https://tedsustentavel.com.br/wp-content/uploads/2024/03/15.png" },
  { name: "Salta", logo: "https://tedsustentavel.com.br/wp-content/uploads/2024/03/19.png" },
  { name: "Salesiano", logo: "https://tedsustentavel.com.br/wp-content/uploads/2024/03/18.png" },
  { name: "Apsa", logo: "https://tedsustentavel.com.br/wp-content/uploads/2024/03/21.png" },
  { name: "Cipa", logo: "https://tedsustentavel.com.br/wp-content/uploads/2024/03/22.png" },
  { name: "Inframerica", logo: "https://tedsustentavel.com.br/wp-content/uploads/2024/03/7.png" },
  { name: "Halliburton", logo: "https://tedsustentavel.com.br/wp-content/uploads/2024/03/23.png" },
  { name: "Ocyan", logo: "https://tedsustentavel.com.br/wp-content/uploads/2024/03/20.png" },
  { name: "Baker", logo: "https://tedsustentavel.com.br/wp-content/uploads/2024/03/24.png" },
  { name: "Hortifruti", logo: "https://tedsustentavel.com.br/wp-content/uploads/2024/03/14.png" },
  { name: "Grupo Mil", logo: "https://tedsustentavel.com.br/wp-content/uploads/2024/03/14.png" },
  { name: "Nestlé", logo: "https://tedsustentavel.com.br/wp-content/uploads/2024/03/13.png" },
  { name: "BNDES", logo: "https://tedsustentavel.com.br/wp-content/uploads/2024/03/12.png" },
  { name: "Guanabara", logo: "https://tedsustentavel.com.br/wp-content/uploads/2024/03/6.png" },
  { name: "Santa Lucia", logo: "https://tedsustentavel.com.br/wp-content/uploads/2024/03/3.png" },
  { name: "Ambev", logo: "https://tedsustentavel.com.br/wp-content/uploads/2025/11/ambev-logo-0-scaled.png" },
];

const half = Math.ceil(clients.length / 2);
const clientRows = [clients.slice(0, half), clients.slice(half)];

const learningPoints = [
  "Ler todos os campos da fatura: datas de leitura, ciclo de medição, categorias e estrutura tarifária SABESP.",
  "Entender se o leiturista realmente visitou o seu hidrômetro e quando a leitura foi realizada.",
  "Identificar o número de economias e se o consumo foi calculado por média.",
  "Checar se a categoria aplicada à sua residência ou empresa está correta.",
  "Reconhecer indícios de erros de leitura que geram cobranças indevidas todos os meses.",
];

const progressItems = [
  {
    label: "Economia média alcançada",
    percentage: 92,
    description: "Em nossos acompanhamentos, 92% dos clientes identificaram pelo menos um erro relevante de cobrança.",
  },
  {
    label: "Aplicação imediata",
    percentage: 87,
    description: "Mais de 87% colocaram os aprendizados em prática na primeira fatura após ler o ebook.",
  },
  {
    label: "Confiança na análise",
    percentage: 96,
    description: "Usuários relataram 96% de confiança para contestar cobranças com embasamento técnico.",
  },
];

const socialProofMessages = [
  {
    name: "Carolina — Gestora Hospitalar",
    message: "Acabamos de identificar um erro de R$ 18 mil de consumo médio! Já abri o protocolo com a SABESP, obrigada equipe!",
  },
  {
    name: "Renato — Facilities Carrefour",
    message: "Time, validamos que a tarifa estava como comercial alta. Reclassificamos e já veio 27% a menos neste ciclo!",
  },
  {
    name: "Juliana — Adm. Condomínio",
    message: "Mudei o olhar para a leitura. Descobri que estavam cobrando área comum duplicada. Economizamos um mês inteiro.",
  },
  {
    name: "Pedro — Hapvida",
    message: "Planilha pronta + passo a passo do ebook = contestação aceita. Receberemos devolução em dobro!",
  },
  {
    name: "Mariana — Unimed",
    message: "Compartilhei com o financeiro, todos entenderam a lógica da fatura. Economia projetada de 32% este trimestre.",
  },
  {
    name: "Daniel — Grupo Pague Menos",
    message: "Isso deveria ser padrão nas escolas de gestão! Encontramos faturas com leitura estimada há 5 meses.",
  },
  {
    name: "Flávia — Rede D'Or",
    message: "Revisamos 14 unidades e achamos quase 9 mil m³ cobrados por erro humano. Ebook cirúrgico!",
  },
  {
    name: "Leo — Administrador SEMAR",
    message: "O passo a passo para ler o hidrômetro salvou o contrato. Já evitamos multa por consumo excedente.",
  },
  {
    name: "Patrícia — Santa Casa",
    message: "Primeira leitura após o treinamento e encontramos categorização incorreta desde 2021. Estamos regularizando.",
  },
  {
    name: "Bruno — AMBEV",
    message: "Nunca mais deixo passar batido. Criamos rotina mensal com base no ebook, zero surpresas agora.",
  },
];

const socialChannels = [
  {
    badge: "🟢 WhatsApp",
    wrapperClasses:
      "bg-[#0b141a] border-[#1f2c34]/80 text-slate-100 shadow-[0_24px_60px_rgba(0,0,0,0.4)]",
    header: {
      classes: "bg-[#202c33] border-[#1f2c34]/80 text-slate-200",
      titleClasses: "text-sm font-semibold",
      status: "online",
    },
    contactBubbleClasses:
      "bg-[#005c4b] text-white shadow-[0_12px_24px_rgba(0,0,0,0.35)] rounded-2xl rounded-bl-sm",
    replyWrapperClasses: "justify-end",
    replyBubbleClasses:
      "bg-[#202c33] text-slate-200 shadow-[0_12px_28px_rgba(0,0,0,0.35)] border border-[#1f2c34]",
    replyLabelClasses: "text-emerald-300",
  },
  {
    badge: "💜 Instagram DM",
    wrapperClasses:
      "bg-gradient-to-br from-[#10101a] via-[#111] to-[#0b0b15] border-[#262638] text-slate-100 shadow-[0_24px_60px_rgba(99,102,241,0.25)]",
    header: {
      classes:
        "bg-gradient-to-r from-[#262638] via-[#1b1b29] to-[#262638] border-transparent text-slate-100",
      titleClasses: "text-sm font-semibold tracking-wide",
      status: "Visto agora mesmo",
    },
    contactBubbleClasses:
      "bg-[#1c1c29] border border-[#2f2f44] text-slate-100 shadow-[0_10px_24px_rgba(139,92,246,0.35)] rounded-2xl rounded-bl-sm",
    replyWrapperClasses: "justify-end",
    replyBubbleClasses:
      "bg-gradient-to-r from-[#5851db] via-[#833ab4] to-[#c13584] text-white shadow-[0_16px_30px_rgba(192,53,132,0.42)]",
    replyLabelClasses: "text-fuchsia-100",
  },
];

const faqItems = [
  {
    question: "Por que o ebook é em caixa alta?",
    answer:
      "Porque queremos que a mensagem fique gravada. A cada leitura você reforça o compromisso de pagar apenas o justo pela sua conta de água.",
  },
  {
    question: "O conteúdo serve apenas para São Paulo?",
    answer:
      "Apesar do foco na SABESP, a estrutura da fatura é semelhante em todo o Brasil. Você poderá adaptar rapidamente para outras companhias.",
  },
  {
    question: "Como recebo as atualizações do conteúdo?",
    answer:
      "Atualizamos o ebook com novos casos e legislações e avisamos por e-mail sempre que uma versão revisada estiver disponível, para você baixar novamente sem pagar nada a mais.",
  },
  {
    question: "Preciso ter conhecimento técnico prévio?",
    answer:
      "Não. Explicamos passo a passo, com exemplos reais, prints e checklists para que qualquer gestor ou morador consiga auditar a própria fatura.",
  },
];
const compactNumberFormatter = new Intl.NumberFormat("pt-BR", {
  notation: "compact",
  compactDisplay: "short",
  maximumFractionDigits: 1,
});


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Ebook Pague o Justo - Auditoria de Fatura de Água",
  description:
    "Aprenda a interpretar sua fatura de água da SABESP, identificar erros de leitura e economizar até 28,5% por mês com a metodologia da T&D Sustentável.",
  brand: {
    "@type": "Organization",
    name: "T&D Sustentável",
  },
  offers: {
    "@type": "Offer",
    price: "29.90",
    priceCurrency: "BRL",
    availability: "https://schema.org/InStock",
    url: "https://tedsustentavel.com.br",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "154",
  },
  review: socialProofMessages.slice(0, 3).map((item) => ({
    "@type": "Review",
    author: item.name,
    reviewBody: item.message,
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
  })),
};

export function HomePageClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const floatingBookRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const clientsSectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      if (heroRef.current) {
        gsap.from(heroRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 1.2,
          ease: "power3.out"
        });
      }

      // Title animation with staggered letters
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll(".animate-char");
        gsap.from(chars, {
          opacity: 0,
          y: 100,
          rotationX: -90,
          stagger: 0.02,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.3
        });
      }

      // Floating book animation
      if (floatingBookRef.current) {
        gsap.to(floatingBookRef.current, {
          y: -20,
          rotation: 2,
          duration: 3,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      // CTA button pulse animation
      if (ctaRef.current) {
        gsap.to(ctaRef.current, {
          scale: 1.05,
          duration: 0.8,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      // ScrollTrigger animations for sections
      gsap.utils.toArray(".gsap-fade-up").forEach((elem: any) => {
        gsap.from(elem, {
          y: 60,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      });

      // Parallax effect on scroll
      gsap.to(".parallax-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Clients section animation
      if (clientsSectionRef.current) {
        gsap.from(clientsSectionRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          scrollTrigger: {
            trigger: clientsSectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <GlassHeader />
      <main className="relative mx-auto flex max-w-7xl flex-col gap-24 px-6 pb-32 pt-32 lg:pt-40">
        <section
          ref={heroRef}
          id="hero"
          className="relative overflow-hidden rounded-[40px] border border-slate-200/10 bg-white/5 p-10 text-center shadow-2xl shadow-[#74a1b7]/20 backdrop-blur-2xl lg:p-16"
        >
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <ParallaxScene intensity={-40} className="parallax-bg absolute -top-32 left-16 hidden h-64 w-64 rounded-full bg-[#b2c761]/20 blur-3xl sm:block" />
            <ParallaxScene intensity={60} className="parallax-bg absolute -bottom-20 right-10 hidden h-72 w-72 rounded-full bg-[#394b96]/10 blur-3xl md:block" />
            <div className="absolute inset-x-0 top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-[#b2c761]/60 to-transparent" />
          </div>

          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
            <TypewriterText
              phrases={typewriterPhrases}
              className="text-xs font-semibold uppercase tracking-[0.9em] text-sky-200"
            />
            <Image
              src="/T&D SUSTENTAVEL ASSINATURA HORIZONTAL COLORIDA.png"
              alt="Logotipo T&D Sustentável"
              width={320}
              height={96}
              priority
              className="h-16 w-auto object-contain drop-shadow-[0_20px_60px_rgba(56,189,248,0.35)]"
            />
            <h1 ref={titleRef} className="text-balance text-4xl font-black uppercase leading-tight text-white lg:text-6xl">
              {"PAGUE O JUSTO PELA SUA CONTA DE ÁGUA".split("").map((char, i) => (
                <span key={i} className="animate-char inline-block" style={{ display: char === " " ? "inline" : "inline-block" }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
              <span className="block text-3xl lg:text-4xl mt-2">ENTENDER A SUA FATURA DA COMPANHIA DE SÃO PAULO GARANTE QUE VOCÊ</span>
              <span className="mt-4 block bg-[#9ac8d8] bg-clip-text text-transparent">
                PAGUE O JUSTO TODOS OS MESES
              </span>
            </h1>
            <p className="max-w-3xl text-pretty text-base text-slate-200/90 lg:text-lg gsap-fade-up">
              Você sabia que encontramos erros de cobrança <strong className="font-bold text-[#b2c761]">TODOS</strong> os dias?
              Aprenda a ler sua fatura com a empresa que garante em média
              <strong className="font-bold text-[#74a1b7]"> 28,5% de economia de água </strong>
              mensal para gigantes como Rede D&apos;Or, Hapvida, Carrefour, Unimed, SEMAR, Santa Casa, Pague Menos, AMBEV e muitos outros.
            </p>
            <motion.div
              className="relative mt-4 inline-flex items-center gap-4 rounded-full border border-[#b2c761]/40 bg-[#00253f]/60 px-8 py-4 shadow-lg"
              animate={{ boxShadow: ["0 0 0 rgba(178,199,97,0.0)", "0 20px 45px rgba(178,199,97,0.35)", "0 0 0 rgba(178,199,97,0.0)"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.a
                ref={ctaRef}
                id="cta"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                href="https://tedsustentavel.com.br"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full bg-gradient-to-r from-[#b2c761] via-[#74a1b7] to-[#394b96] px-8 py-3 text-base font-bold uppercase tracking-widest text-[#00253f] shadow-xl"
              >
                QUERO PARAR DE PAGAR A MAIS EM MINHA CONTA AGORA MESMO
              </motion.a>
              <motion.span
                className="text-xs font-semibold uppercase tracking-[0.4em] text-[#9ac8d8]"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ACESSO VITALÍCIO
              </motion.span>
            </motion.div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <ParallaxScene intensity={-30} className="relative order-2 lg:order-1">
              <div className="glass-panel relative rounded-3xl p-8">
                <h2 className="text-left text-xl font-bold uppercase tracking-wide text-[#9ac8d8]">
                  Você vai aprender nesse ebook
                </h2>
                <ul className="mt-6 space-y-3 text-left text-sm text-slate-200/90">
                  {learningPoints.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#b2c761]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-2xl border border-[#b2c761]/20 bg-[#00253f]/60 p-4 text-sm font-semibold uppercase text-[#b2c761]">
                  NUNCA MAIS VOU SER ONERADO EM MINHA CONTA DE ÁGUA
                </div>
              </div>
            </ParallaxScene>
            <ParallaxScene intensity={40} className="relative order-1 flex justify-center lg:order-2">
              <div className="relative flex w-full max-w-md items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#b2c761]/10 blur-3xl" />
                <motion.div
                  ref={floatingBookRef}
                  className="floating relative flex h-full max-h-[420px] w-full items-center justify-center"
                  animate={{ rotate: [0, 2, -2, 0] }}
                  transition={{ duration: 18, repeat: Infinity }}
                >
                  <Image
                    src="/images/ebook-cover.jpg"
                    alt="Mockup do ebook Pague o Justo"
                    width={480}
                    height={560}
                    priority
                    className="z-10 rounded-[32px] border border-slate-200/10 object-cover shadow-2xl"
                  />
                  <LottieWater className="absolute -right-10 top-10 h-40 w-40" animationPath="/lottie/water-pulse.json" />
                </motion.div>
              </div>
            </ParallaxScene>
          </div>
        </section>

        <GSAPAnimatedSection animation="fadeInUp" className="relative grid gap-10 lg:grid-cols-2" id="resultados">
          <Reveal className="flex flex-col gap-8 rounded-3xl border border-slate-200/10 bg-slate-900/70 p-10 shadow-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#9ac8d8]">Números que comprovam</span>
            <h2 className="text-3xl font-black uppercase text-slate-50 lg:text-4xl">
              Já economizamos mais de
              <span className="block text-[#b2c761]"> 1,3 bilhões de litros de água</span>
              e mais de <span className="text-[#b2c761]">50 milhões de reais</span> para nossos clientes.
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Grande parte desse valor veio de erros de leitura e cobranças estimadas. Você pode estar pagando mais do que consome todos os meses.
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-[#74a1b7]/20 bg-[#00253f]/60 p-6">
                <AnimatedCounter
                  value={1300000000}
                  suffix=" litros"
                  duration={3.2}
                  formatter={(value) => compactNumberFormatter.format(value)}
                  className="text-3xl font-black uppercase text-[#b2c761]"
                />
                <p className="mt-2 text-xs uppercase tracking-[0.45em] text-slate-400">Litros economizados</p>
              </div>
              <div className="rounded-3xl border border-[#74a1b7]/20 bg-[#00253f]/60 p-6">
                <AnimatedCounter
                  value={50000000}
                  prefix="R$ "
                  duration={3.5}
                  formatter={(value) => compactNumberFormatter.format(value)}
                  className="text-3xl font-black uppercase text-[#b2c761]"
                />
                <p className="mt-2 text-xs uppercase tracking-[0.45em] text-slate-400">Reais resgatados</p>
              </div>
            </div>
            <motion.div
              className="inline-flex max-w-max items-center gap-3 rounded-full border border-slate-200/20 bg-[#00253f]/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.5em] text-slate-200"
              animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              MAIS DE 15 MIL USUÁRIOS JÁ FORAM CONSCIENTIZADOS
            </motion.div>
          </Reveal>
          <Reveal delay={0.2} className="relative overflow-hidden rounded-3xl border border-slate-200/10 bg-white/5 p-10 shadow-2xl">
            <Image
              src="/images/water-bill.jpg"
              alt="Fatura de água detalhada"
              width={680}
              height={520}
              className="h-full w-full rounded-3xl object-cover"
            />
            <div className="absolute inset-x-10 bottom-8 rounded-2xl border border-[#74a1b7]/20 bg-[#00253f]/80 p-6 text-left text-sm text-slate-200/90 backdrop-blur-xl">
              <p>
                Estamos em <strong className="text-[#b2c761]">47 cidades do Brasil</strong> e em todas encontramos problemas nas cobranças da companhia. Quem deixa essa oportunidade passar corre o risco de pagar valores injustos pelo consumo de água pelo resto da vida.
              </p>
            </div>
          </Reveal>
        </GSAPAnimatedSection>

        <GSAPAnimatedSection animation="fadeInScale" id="conteudo" className="relative overflow-hidden rounded-[32px] border border-slate-200/10 bg-[#00253f]/70 p-12 shadow-2xl">
          <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#b2c761]/20 blur-3xl" />
          <div className="mx-auto flex max-w-3xl flex-col gap-8 text-center">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#9ac8d8]">Conteúdo do ebook</span>
              <h2 className="text-3xl font-black uppercase text-slate-50">
                A jornada para nunca mais ser onerado em sua conta de água
              </h2>
            </Reveal>
            <div className="grid gap-10 text-left lg:grid-cols-3">
              {[
                {
                  title: "01. Investigue o hidrômetro",
                  description:
                    "Aprenda a interpretar leituras reais e descubra, de forma visual, se o consumo apontado confere com o histórico do imóvel.",
                },
                {
                  title: "02. Analise a estrutura tarifária",
                  description:
                    "Entenda como a SABESP monta a tarifa, os multiplicadores e como detectar inconsistências em taxas e categorias.",
                },
                {
                  title: "03. Conteste com embasamento",
                  description:
                    "Utilize nossos roteiros prontos, prints da fatura e modelos de contato para garantir devoluções e ajustes rápidos.",
                },
              ].map((step, index) => (
                <Reveal key={step.title} delay={index * 0.1} className="flex flex-col gap-4 rounded-3xl border border-slate-200/10 bg-[#00253f]/60 p-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#9ac8d8]">Passo {index + 1}</span>
                  <h3 className="text-xl font-bold uppercase text-[#b2c761]">{step.title}</h3>
                  <p className="text-sm text-slate-200/80">{step.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </GSAPAnimatedSection>

        <GSAPAnimatedSection animation="slideInLeft" className="relative overflow-hidden rounded-[32px] border border-slate-200/10 bg-white/5 p-12 shadow-2xl">
          <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#9ac8d8]">Atualizações frequentes</span>
            <h2 className="text-3xl font-black uppercase text-slate-50">Conteúdo revisado pelas auditorias da T&D</h2>
            <p className="text-sm text-slate-200/80 lg:text-base">
              Revisamos o material sempre que surgem novos casos ou mudanças de legislação. Assim, você acessa versões atualizadas do ebook com orientações alinhadas ao cenário mais recente.
            </p>
            <div className="grid w-full gap-6 lg:grid-cols-3">
              {progressItems.map((item) => (
                <Reveal key={item.label} className="rounded-3xl border border-slate-200/10 bg-[#00253f]/60 p-6 text-left">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-[#b2c761]">{item.label}</h3>
                  <div className="mt-4 h-2 rounded-full bg-slate-800">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#b2c761] via-[#74a1b7] to-[#394b96]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percentage}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 1.6, ease: "easeOut" }}
                    />
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-[0.4em] text-slate-400">{item.percentage}%</p>
                  <p className="mt-4 text-sm text-slate-200/80">{item.description}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </GSAPAnimatedSection>

        <section ref={clientsSectionRef} className="relative overflow-hidden rounded-[32px] border border-slate-200/10 bg-[#00253f]/70 p-12 shadow-2xl">
          <div className="absolute -left-24 top-20 h-32 w-32 rounded-full bg-[#b2c761]/20 blur-3xl" />
          <div className="absolute -right-24 bottom-10 h-40 w-40 rounded-full bg-[#394b96]/20 blur-3xl" />
          <Reveal className="flex flex-col gap-8">
            <h2 className="text-center text-3xl font-black uppercase text-slate-50">
              Esses gigantes já confiam na metodologia
            </h2>
            <div className="space-y-6">
              {clientRows.map((row, rowIndex) => (
                <Marquee
                  key={rowIndex}
                  gradient={false}
                  pauseOnHover
                  pauseOnClick
                  speed={rowIndex === 0 ? 42 : 36}
                  direction={rowIndex % 2 === 0 ? "left" : "right"}
                  className="rounded-3xl border border-[#74a1b7]/20 bg-[#00253f]/30 px-4 py-6 backdrop-blur-xl shadow-lg shadow-[#74a1b7]/10"
                >
                  {row.map((client) => (
                    <motion.div
                      key={`${client.name}-${rowIndex}`}
                      whileHover={{ scale: 1.06, rotate: 0.5 }}
                      className="mx-6 flex h-24 w-48 items-center justify-center rounded-3xl border border-[#74a1b7]/30 bg-white p-4 shadow-lg shadow-[#74a1b7]/15 transition-all hover:border-[#74a1b7]/50 hover:shadow-[#74a1b7]/25"
                    >
                      <Image
                        src={client.logo}
                        alt={`Logo ${client.name}`}
                        width={200}
                        height={80}
                        className="h-14 w-auto object-contain drop-shadow-[0_12px_32px_rgba(56,189,248,0.45)]"
                      />
                    </motion.div>
                  ))}
                </Marquee>
              ))}
            </div>
            <Link
              href="#cta"
              className="mx-auto inline-flex items-center gap-3 rounded-full border border-[#74a1b7]/30 bg-[#00253f]/60 px-8 py-3 text-xs font-semibold uppercase tracking-[0.45em] text-[#b2c761] hover:border-[#9ac8d8]">
              QUERO FAZER COMO ELES E GARANTIR JUSTIÇA EM MINHA COBRANÇA AGORA MESMO
            </Link>
          </Reveal>
        </section>

        <GSAPAnimatedSection animation="fadeInScale" id="prova-social" className="relative overflow-hidden rounded-[32px] border border-slate-200/10 bg-white/5 p-12 shadow-2xl">
          <Reveal className="flex flex-col gap-6">
            <h2 className="text-center text-3xl font-black uppercase text-slate-50">
              Espaço apenas de prova social
            </h2>
            <p className="mx-auto max-w-3xl text-center text-sm text-slate-200/80">
              Reunimos feedbacks reais de WhatsApp e DMs no Instagram de pessoas que identificaram erros na fatura. São histórias de quem decidiu pagar o justo.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {socialProofMessages.map((item, index) => {
                const channel = socialChannels[index % socialChannels.length];
                const [displayName, role] = item.name.split(" — ");
                const firstName = displayName?.split(" ")[0] ?? "você";

                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.02, y: -6 }}
                    className={`space-y-4 rounded-[28px] border p-0 text-left`}
                    style={{ overflow: "hidden" }}
                  >
                    <div className={`flex flex-col gap-2 p-4 ${channel.header.classes}`}>
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/50 text-base">
                          {channel.badge.split(" ")[0]}
                        </div>
                        <div>
                          <span className={`${channel.header.titleClasses}`}>{displayName}</span>
                          <p className="text-[0.65rem] text-slate-400 uppercase tracking-[0.25em]">
                            {role ?? channel.badge.split(" ").slice(1).join(" ")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-[0.6rem] uppercase tracking-[0.35em] text-slate-500">
                        <span>{channel.badge}</span>
                        <span>{channel.header.status}</span>
                      </div>
                    </div>

                    <div className={`space-y-3 rounded-t-[28px] p-6 text-sm ${channel.wrapperClasses}`}>
                      <div className="space-y-2">
                        <div
                          className={`w-fit max-w-[90%] px-4 py-3 ${channel.contactBubbleClasses}`}
                        >
                          {item.message}
                        </div>
                        <span className="block text-[0.6rem] uppercase tracking-[0.35em] text-slate-400">
                          {role ?? channel.badge}
                        </span>
                      </div>
                      <div className={`flex ${channel.replyWrapperClasses}`}>
                        <div className={`w-fit max-w-[85%] rounded-2xl px-4 py-3 ${channel.replyBubbleClasses}`}>
                          <span className={`text-[0.65rem] font-semibold uppercase tracking-[0.35em] ${channel.replyLabelClasses}`}>
                            Equipe T&D
                          </span>
                          <span className="mt-1 block text-[0.75rem] leading-relaxed">
                            {`Obrigado, ${firstName}! Continue acompanhando as leituras e nos conte o próximo resultado.`}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Reveal>
        </GSAPAnimatedSection>

        <GSAPAnimatedSection animation="slideInRight" className="relative overflow-hidden rounded-[32px] border border-slate-200/10 bg-[#00253f]/70 p-12 shadow-2xl">
          <Reveal className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-[0.45em] text-[#9ac8d8]">Diagnóstico guiado passo a passo</span>
              <h2 className="text-3xl font-black uppercase text-slate-50">
                Veja com seus próprios olhos onde o dinheiro está vazando
              </h2>
              <p className="text-sm text-slate-200/80">
                No ebook, cada capítulo traz imagens comentadas que mostram onde os erros aparecem na fatura e como interpretar os números sem dúvidas. Você enxerga exatamente como identificar leituras incorretas ou tarifas aplicadas de forma errada.
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {["/images/hydrometer-1.jpg", "/images/water-bill.jpg"].map((src) => (
                  <motion.div
                    key={src}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200/10"
                    whileHover={{ scale: 1.03 }}
                  >
                    <Image src={src} alt="Detalhe de hidrômetro e fatura" width={560} height={420} className="h-full w-full object-cover" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-cyan-500/30 opacity-0"
                      whileHover={{ opacity: 1 }}
                    />
                    <motion.span
                      className="absolute bottom-4 left-4 rounded-full bg-slate-950/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      ZOOM NA LEITURA
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="glass-panel relative rounded-[32px] p-10 text-center">
              <h3 className="text-xl font-black uppercase text-[#9ac8d8]">QUERO APRENDER POR MENOS DE 30 REAIS</h3>
              <p className="mt-4 text-sm text-slate-200/80">
                Comprando agora você investe menos de 30 reais e pode economizar todos os anos de 2 a 3 meses de consumo, exatamente como nossos clientes.
              </p>
              <motion.a
                href="https://tedsustentavel.com.br"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#b2c761] via-[#74a1b7] to-[#394b96] px-6 py-3 text-xs font-black uppercase tracking-[0.45em] text-[#00253f]"
              >
                QUERO COMPRAR AGORA
              </motion.a>
            </div>
          </Reveal>
        </GSAPAnimatedSection>

        <GSAPAnimatedSection animation="fadeInUp" id="faq" className="relative overflow-hidden rounded-[32px] border border-slate-200/10 bg-white/5 p-12 shadow-2xl">
          <Reveal className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-black uppercase text-slate-50">Perguntas frequentes</h2>
              <p className="text-sm text-slate-200/80">
                Se ainda restam dúvidas, respondemos às mais comuns. Nosso suporte está pronto para garantir que você aproveite cada centavo investido.
              </p>
              <Link
                href="https://tedsustentavel.com.br"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-[#74a1b7]/30 bg-[#00253f]/60 px-6 py-3 text-xs font-semibold uppercase tracking-[0.45em] text-[#b2c761]"
              >
                FALAR COM ESPECIALISTA
              </Link>
            </div>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-3xl border border-slate-200/10 bg-[#00253f]/60 p-6 text-left transition-all"
                >
                  <summary className="cursor-pointer text-sm font-semibold uppercase tracking-[0.35em] text-[#9ac8d8] group-open:text-[#b2c761]">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm text-slate-200/80">{item.answer}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </GSAPAnimatedSection>

        <GSAPAnimatedSection animation="fadeInScale" className="relative overflow-hidden rounded-[32px] border border-slate-200/10 bg-[#00253f]/80 p-12 shadow-2xl">
          <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <Image
              src="/T&D SUSTENTAVEL ASSINATURA HORIZONTAL COLORIDA.png"
              alt="Logotipo T&D Sustentável"
              width={220}
              height={70}
              className="h-12 w-auto object-contain drop-shadow-[0_12px_45px_rgba(56,189,248,0.35)]"
            />
            <LottieWater className="h-40 w-40" animationPath="/lottie/water-flow.json" />
            <h2 className="text-3xl font-black uppercase text-slate-50">
              Quem deixar essa oportunidade passar, corre o risco de pagar valores injustos pelo resto da vida
            </h2>
            <p className="text-sm text-slate-200/80">
              Mais de 15 mil usuários já foram conscientizados com nossas soluções. Estamos em 47 cidades do Brasil e seguimos encontrando cobranças incorretas.
            </p>
            <motion.a
              href="https://tedsustentavel.com.br"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.94 }}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#b2c761] via-[#74a1b7] to-[#394b96] px-8 py-3 text-xs font-black uppercase tracking-[0.5em] text-[#00253f]"
            >
              QUERO COMPRAR AGORA
            </motion.a>
          </Reveal>
        </GSAPAnimatedSection>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}

export default HomePageClient;
