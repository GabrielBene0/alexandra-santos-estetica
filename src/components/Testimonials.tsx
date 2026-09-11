"use client";

import { useRef } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Avaliação individual",
    procedure: "SEU MOMENTO, SUA NECESSIDADE",
    text: "Cada protocolo começa com uma conversa clara sobre objetivos, rotina e o que faz sentido para você.",
  },
  {
    id: 2,
    name: "Orientação com clareza",
    procedure: "DECISÕES BEM INFORMADAS",
    text: "Você entende cada etapa antes de escolher o seu tratamento, com espaço para tirar dúvidas sem pressa.",
  },
  {
    id: 3,
    name: "Cuidado contínuo",
    procedure: "DO PRIMEIRO CONTATO AO PÓS",
    text: "A experiência é pensada para que você se sinta acolhida, segura e confiante em cada retorno.",
  },
];

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === "left" ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-24 md:py-36 bg-[var(--color-base)] overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-[var(--color-ink)] mb-4">
              Mais que um procedimento: <span className="italic">um cuidado seu</span>
            </h2>
            <p className="text-[var(--color-muted)] max-w-[500px]">
              A atenção aos detalhes que faz parte de cada atendimento.
            </p>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={() => scroll("left")}
              className="border border-[var(--color-gold-light)] p-3 text-[var(--color-ink)] transition-colors hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
              aria-label="Anterior"
            >
              <CaretLeft size={20} weight="bold" />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="border border-[var(--color-gold-light)] p-3 text-[var(--color-ink)] transition-colors hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"
              aria-label="Próximo"
            >
              <CaretRight size={20} weight="bold" />
            </button>
          </div>
        </div>

        {/* Snap Scroll Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="flex min-w-[85vw] snap-start flex-col border border-[var(--color-surface)] bg-white p-9 shadow-sm md:min-w-[400px]"
            >
              <div className="font-display text-6xl text-[var(--color-gold-light)] leading-none h-10 mb-4">
                &ldquo;
              </div>
              <p className="text-[var(--color-ink)] text-lg leading-relaxed mb-8 flex-grow line-clamp-4">
                {testimonial.text}
              </p>
              <div className="mt-auto border-t border-[var(--color-surface)] pt-4">
                <p className="font-bold text-[var(--color-ink)]">{testimonial.name}</p>
                <p className="text-sm text-[var(--color-gold)] font-medium mt-1 uppercase tracking-wide">
                  {testimonial.procedure}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
