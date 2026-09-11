"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDownRight, Star } from "@phosphor-icons/react";
import { gsap } from "gsap";

const whatsappUrl = "https://wa.me/5531984068805?text=Ol%C3%A1%2C+Alexandra!+Vi+o+site+e+gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o.";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = gsap.context(() => {
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero-nav]", { y: -12, autoAlpha: 0, duration: 0.45 })
        .from("[data-hero-copy]", { y: 26, autoAlpha: 0, duration: 0.72, stagger: 0.1 }, "-=0.18")
        .from("[data-hero-image]", { scale: 0.94, autoAlpha: 0, duration: 1 }, "-=0.52")
        .from("[data-hero-note]", { y: 12, autoAlpha: 0, duration: 0.5 }, "-=0.42");
    }, sectionRef);
    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative isolate min-h-[100dvh] overflow-hidden bg-[var(--color-base)] pt-20 lg:min-h-[118dvh] lg:pt-[7.6rem]">
      <div className="absolute inset-x-0 top-0 -z-10 h-[70%] bg-[linear-gradient(100deg,#fffafb_35%,#f8eaed_100%)]" />
      <div className="grid min-h-[calc(100dvh-5rem)] items-stretch lg:min-h-[calc(118dvh-7.6rem)] lg:grid-cols-2">
        <div className="relative z-10 flex max-w-[720px] flex-col justify-center px-6 py-12 sm:px-10 lg:px-[max(5vw,4rem)] lg:py-16">
          <p data-hero-nav className="mb-7 flex items-center gap-3 text-[10px] font-semibold tracking-[0.2em] text-[var(--color-rose)] sm:text-xs"><span className="h-px w-9 bg-current" /> ESTÉTICA AVANÇADA EM BELO HORIZONTE</p>
          <h1 data-hero-copy className="text-balance font-display text-[clamp(3.25rem,7vw,6.9rem)] leading-[0.93] tracking-[-0.045em] text-[var(--color-ink)]">Cuidado que se vê. <span className="italic text-[var(--color-rose)]">Confiança</span> que se sente.</h1>
          <p data-hero-copy className="mt-8 max-w-[43ch] text-base leading-relaxed sm:text-lg" style={{ color: "#765e66" }}>Protocolos personalizados para você se sentir bem na própria pele, com presença, leveza e atenção aos detalhes.</p>
          <div data-hero-copy className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 bg-[var(--color-wine)] px-8 py-4 text-sm font-semibold text-white shadow-[0_16px_35px_rgb(103_36_56_/_22%)] transition hover:-translate-y-1 hover:bg-[var(--color-rose)] focus:outline-none focus:ring-2 focus:ring-[var(--color-rose)] focus:ring-offset-2">Agendar avaliação <ArrowDownRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" weight="bold" /></a>
            <a href="#tratamentos" className="inline-flex items-center justify-center border border-[var(--color-rose)]/40 bg-white/60 px-8 py-4 text-sm font-semibold text-[#672438] transition hover:-translate-y-1 hover:border-[var(--color-rose)] hover:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-rose)] focus:ring-offset-2">Conhecer tratamentos</a>
          </div>
          <div data-hero-note className="mt-10 flex items-center gap-3 text-sm text-[var(--color-muted)]"><div className="flex text-[var(--color-rose)]" aria-label="Cinco estrelas">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} weight="fill" />)}</div><span>Atendimento individual, do primeiro contato ao pós.</span></div>
        </div>
        <div data-hero-image className="relative h-[52dvh] w-full self-end sm:h-[60dvh] lg:h-full">
          <div className="absolute -bottom-3 -left-3 -right-3 -top-3 border border-[var(--color-rose)]/25 lg:-bottom-5 lg:-left-5 lg:-top-5" />
          <div className="absolute -left-3 top-[18%] z-10 hidden bg-white/90 px-4 py-2 text-[10px] font-semibold tracking-[0.14em] text-[var(--color-wine)] shadow-sm lg:block">CUIDADO PERSONALIZADO</div>
          <div className="relative h-full overflow-hidden bg-[var(--color-blush)]"><Image src="/alexandra-hero-v2.png" alt="Alexandra Santos, especialista em estética avançada" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" /><div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgb(103_36_56_/_28%))]" /></div>
          <p className="absolute bottom-5 left-6 max-w-52 font-display text-2xl italic leading-tight text-white sm:bottom-8 sm:left-9 sm:text-3xl">Sua beleza não precisa caber em um padrão.</p>
        </div>
      </div>
    </section>
  );
}
