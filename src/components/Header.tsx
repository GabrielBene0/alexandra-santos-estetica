"use client";

import { useState } from "react";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#laser-day", label: "Laser Day" },
  { href: "#faq", label: "Dúvidas" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-[var(--color-wine)]/10 bg-[var(--color-base)]/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1640px] items-center justify-between px-6 sm:px-10 lg:h-[7.6rem] lg:px-16">
        <a href="#" className="relative h-12 w-28 shrink-0 lg:h-16 lg:w-32" aria-label="Página inicial">
          <Image src="/logo.png" alt="Alexandra Santos Estética Avançada" fill sizes="(max-width: 1024px) 112px, 128px" className="object-contain object-left" priority />
        </a>

        <nav className="hidden items-center gap-9 lg:flex xl:gap-12" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-xs font-medium tracking-[0.17em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-rose)]">{item.label.toUpperCase()}</a>
          ))}
        </nav>

        <a href="#agendamento" className="hidden border border-[var(--color-wine)] px-6 py-3 text-xs font-semibold tracking-[0.15em] text-[var(--color-wine)] transition hover:bg-[var(--color-wine)] hover:text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-rose)] focus:ring-offset-2 lg:inline-flex">AGENDAR AVALIAÇÃO</a>

        <button type="button" className="p-2 text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-rose)] lg:hidden" onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)} aria-expanded={isMobileMenuOpen} aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}>{isMobileMenuOpen ? <X size={25} /> : <List size={25} />}</button>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-[var(--color-wine)]/10 bg-[var(--color-base)] px-6 py-7 shadow-xl lg:hidden">
          <nav className="flex flex-col gap-5" aria-label="Navegação móvel">
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-semibold tracking-[0.12em] text-[var(--color-ink)]">{item.label.toUpperCase()}</a>)}
            <a href="#agendamento" onClick={() => setIsMobileMenuOpen(false)} className="mt-2 inline-flex w-full justify-center border border-[var(--color-wine)] px-5 py-3 text-xs font-semibold tracking-[0.15em] text-[var(--color-wine)]">AGENDAR AVALIAÇÃO</a>
          </nav>
        </div>
      )}
    </header>
  );
}
