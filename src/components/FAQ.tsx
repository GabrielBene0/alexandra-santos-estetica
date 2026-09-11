"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "@phosphor-icons/react";

const FAQ_ITEMS = [
  {
    q: "A depilação a laser dói?",
    a: "Utilizamos protocolos modernos com refrigeração na ponteira, o que torna o procedimento extremamente confortável e praticamente indolor, ao contrário dos métodos tradicionais.",
  },
  {
    q: "Quantas sessões preciso para o laser?",
    a: "Em média, são necessárias de 6 a 8 sessões para a eliminação definitiva dos pelos na área tratada, podendo variar de acordo com o fototipo de pele e espessura do pelo.",
  },
  {
    q: "Preciso me preparar antes da sessão de laser?",
    a: "Sim. Recomendamos evitar exposição solar direta na área por 15 dias antes da sessão e comparecer com os pelos raspados com lâmina no dia ou na véspera.",
  },
  {
    q: "O microagulhamento é indicado para que tipo de pele?",
    a: "É indicado para todos os fototipos. Excelente para tratar cicatrizes de acne, manchas, linhas finas e flacidez, promovendo a renovação celular e o estímulo intenso de colágeno.",
  },
  {
    q: "A clínica aceita pagamento parcelado?",
    a: "Sim! Facilitamos o pagamento em cartão de crédito e temos condições especiais para pacotes completos. Consulte nossas opções pelo WhatsApp.",
  },
  {
    q: "Como agendar minha avaliação?",
    a: "Você pode agendar diretamente pelo nosso WhatsApp clicando no botão verde que aparece na tela. Faremos uma avaliação personalizada para o seu caso.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-24 md:py-36 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-[800px] px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-[var(--color-ink)] mb-4">
            Dúvidas <span className="italic">Frequentes</span>
          </h2>
          <p className="text-[var(--color-muted)]">Tudo o que você precisa saber antes da sua primeira sessão.</p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="overflow-hidden border border-[var(--color-gold-light)]/40 bg-white transition-shadow hover:shadow-md"
              >
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none focus:bg-[var(--color-base)]"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-lg text-[var(--color-ink)] pr-8">
                    {item.q}
                  </span>
                  <span className="text-[var(--color-gold)] flex-shrink-0">
                    {isOpen ? <Minus size={24} weight="bold" /> : <Plus size={24} weight="bold" />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-[var(--color-muted)] leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
