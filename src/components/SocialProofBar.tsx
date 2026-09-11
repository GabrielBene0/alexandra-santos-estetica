export default function SocialProofBar() {
  const items = [
    "Atendimento Personalizado",
    "Laser de Alta Precisão",
    "11 Anos de Experiência",
    "Protocolos Seguros",
    "Ambiente Exclusivo",
    "Resultados Visíveis",
  ];
  const loopItems = [...items, ...items];

  return (
    <section aria-label="Diferenciais" className="w-full overflow-hidden border-y border-[var(--color-wine)]/10 bg-[var(--color-wine)] py-5">
      <div className="flex w-max animate-marquee items-center whitespace-nowrap">
        {loopItems.map((item, i) => (
          <div key={`${item}-${i}`} className="flex shrink-0 items-center">
            <span className="mx-6 text-xs font-semibold tracking-[0.12em] text-white sm:mx-10 sm:text-sm">
              {item}
            </span>
            <span className="text-[var(--color-blush)]" aria-hidden="true">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
