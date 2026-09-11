"use client";

import { FormEvent } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";

const treatments = ["Depilação a laser", "Estética facial", "Estética corporal", "Laser Day", "Ainda não sei"];

export default function Appointment() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = `Olá, Alexandra! Meu nome é ${form.get("name")}. Meu WhatsApp é ${form.get("phone")}. Tenho interesse em: ${form.get("treatment")}.`;
    window.open(`https://wa.me/5531984068805?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="agendamento" className="relative overflow-hidden bg-[var(--color-surface)] px-6 py-24 sm:px-10 md:py-32">
      <div className="relative mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-center lg:gap-20">
        <div>
          <p className="text-sm font-semibold tracking-[0.12em] text-[var(--color-rose)]">VAMOS CONVERSAR</p>
          <h2 className="mt-5 font-display text-5xl leading-[0.98] text-[var(--color-ink)] md:text-6xl">Seu cuidado começa <span className="italic text-[var(--color-rose)]">aqui.</span></h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[var(--color-muted)] md:text-lg">Conte o que você procura. Receba uma orientação inicial pelo WhatsApp para dar o próximo passo com tranquilidade.</p>
          <p className="mt-8 border-l-2 border-[var(--color-rose)] pl-4 text-sm leading-relaxed text-[var(--color-muted)]">Atendimento em Belo Horizonte, de segunda a sábado, das 09:00 às 19:00.</p>
        </div>
        <form onSubmit={handleSubmit} className="border border-[var(--color-blush)] bg-white p-7 shadow-[0_24px_70px_rgb(103_36_56_/_10%)] sm:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-[var(--color-ink)]">Seu nome<input required name="name" autoComplete="name" className="h-12 border border-[var(--color-blush)] bg-[var(--color-base)] px-4 font-normal outline-none transition focus:border-[var(--color-rose)] focus:ring-2 focus:ring-[var(--color-rose)]/15" /></label>
            <label className="grid gap-2 text-sm font-semibold text-[var(--color-ink)]">Seu WhatsApp<input required name="phone" type="tel" autoComplete="tel" inputMode="tel" className="h-12 border border-[var(--color-blush)] bg-[var(--color-base)] px-4 font-normal outline-none transition focus:border-[var(--color-rose)] focus:ring-2 focus:ring-[var(--color-rose)]/15" /></label>
          </div>
          <label className="mt-5 grid gap-2 text-sm font-semibold text-[var(--color-ink)]">O que você gostaria de cuidar?<select required name="treatment" defaultValue="" className="h-12 border border-[var(--color-blush)] bg-[var(--color-base)] px-4 font-normal outline-none transition focus:border-[var(--color-rose)] focus:ring-2 focus:ring-[var(--color-rose)]/15"><option value="" disabled>Selecione uma opção</option>{treatments.map((treatment) => <option key={treatment} value={treatment}>{treatment}</option>)}</select></label>
          <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-[var(--color-wine)] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[var(--color-rose)] focus:outline-none focus:ring-2 focus:ring-[var(--color-rose)] focus:ring-offset-2">Pedir orientação pelo WhatsApp <ArrowUpRight size={18} weight="bold" /></button>
          <p className="mt-4 text-center text-xs leading-relaxed text-[var(--color-muted)]">Ao enviar, você será direcionada ao WhatsApp da Alexandra Santos.</p>
        </form>
      </div>
    </section>
  );
}
