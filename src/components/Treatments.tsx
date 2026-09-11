"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight } from "@phosphor-icons/react";

type TabId = "laser" | "facial" | "corporal";

interface Treatment {
  id: string;
  title: string;
  benefits: string[];
  isFeatured?: boolean;
}

const TREATMENTS: Record<TabId, Treatment[]> = {
  laser: [
    { id: "laser-1", title: "Laser Day", benefits: ["Sessões exclusivas mensais", "Tecnologia indolor", "Todas as áreas"], isFeatured: true },
    { id: "laser-2", title: "Virilha & Perianal", benefits: ["Conforto absoluto", "Adeus foliculite", "Resultados duradouros"] },
    { id: "laser-3", title: "Axila & Buço", benefits: ["Clareamento da área", "Sessões rápidas", "Pele lisa sempre"] },
  ],
  facial: [
    { id: "facial-1", title: "Microagulhamento", benefits: ["Renovação celular", "Redução de cicatrizes", "Estímulo de colágeno"], isFeatured: true },
    { id: "facial-2", title: "Peeling Químico", benefits: ["Clareamento de manchas", "Textura uniforme", "Luminosidade"] },
    { id: "facial-3", title: "Limpeza Profunda", benefits: ["Remoção de cravos", "Controle de oleosidade", "Pele respirando"] },
  ],
  corporal: [
    { id: "corp-1", title: "Clareamento Corporal", benefits: ["Áreas escurecidas", "Uniformização", "Hidratação profunda"], isFeatured: true },
    { id: "corp-2", title: "Tratamento de Foliculite", benefits: ["Redução de inflamações", "Pele macia", "Prevenção contínua"] },
    { id: "corp-3", title: "Massagem Modeladora", benefits: ["Redução de medidas", "Melhora do contorno", "Alívio de inchaço"] },
  ]
};

export default function Treatments() {
  const [activeTab, setActiveTab] = useState<TabId>("laser");

  const tabs: { id: TabId; label: string }[] = [
    { id: "laser", label: "Depilação a Laser" },
    { id: "facial", label: "Estética Facial" },
    { id: "corporal", label: "Estética Corporal" },
  ];

  const getWhatsAppLink = (treatmentName: string) => {
    const text = encodeURIComponent(`Olá, Alexandra! Tenho interesse no tratamento de ${treatmentName} e gostaria de saber mais.`);
    return `https://wa.me/5531984068805?text=${text}`;
  };

  return (
    <section id="tratamentos" className="w-full py-24 md:py-36 bg-[var(--color-surface)]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-[var(--color-ink)] mb-6">
            Protocolos de <span className="italic">Excelência</span>
          </h2>
          <p className="text-[var(--color-muted)] max-w-[600px] mx-auto">
            Tratamentos personalizados para realçar sua beleza natural com as melhores tecnologias do mercado.
          </p>
        </div>

        {/* Tabs UI */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative isolate border border-transparent px-6 py-3 text-sm font-semibold transition-colors md:text-base ${
                activeTab === tab.id ? "" : "bg-white/70"
              }`}
              style={{ color: activeTab === tab.id ? "#25161b" : "#765e66" }}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 z-0 bg-[var(--color-blush)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {TREATMENTS[activeTab].map((treatment) => (
                <div 
                  key={treatment.id}
                  className={`group flex flex-col border border-[var(--color-surface)] bg-white p-9 shadow-none transition-all duration-300 hover:border-[var(--color-gold-light)] hover:shadow-[0_18px_36px_rgb(103_36_56_/_8%)] ${
                    treatment.isFeatured ? "md:col-span-2 lg:col-span-2 bg-[var(--color-base)]" : ""
                  }`}
                >
                  <h3 className="font-display text-3xl text-[var(--color-ink)] mb-6">
                    {treatment.title}
                  </h3>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {treatment.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-[var(--color-muted)]">
                        <span className="mr-3 h-1.5 w-1.5 flex-shrink-0 bg-[var(--color-gold)]" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={getWhatsAppLink(treatment.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-gold)] transition-colors mt-auto"
                  >
                    Tenho interesse
                    <ArrowRight size={16} weight="bold" className="transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
