const metrics = [
  { value: "10+", label: "ANOS DE EXPERIÊNCIA" },
  { value: "5.0", label: "AVALIAÇÃO GOOGLE" },
];

export default function MetricsBar() {
  return (
    <section aria-label="Números da clínica" className="bg-[var(--color-wine)] px-6 py-9 text-white sm:px-10 md:py-11">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 divide-y divide-white/20 md:grid-cols-2 md:divide-x md:divide-y-0">
        {metrics.map((metric) => (
          <div key={metric.label} className="px-6 py-5 text-center first:pt-0 last:pb-0 md:px-16 md:py-0 md:first:pt-0 md:last:pb-0">
            <p className="font-display text-5xl leading-none text-[var(--color-blush)] md:text-6xl">{metric.value}</p>
            <p className="mt-3 text-[10px] font-semibold tracking-[0.22em] text-white/75">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
