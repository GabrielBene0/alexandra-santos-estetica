import Image from "next/image";

const highlights = [
  { image: "/alexandra-hero-v2.png", alt: "Alexandra Santos na clínica", category: "DEPILAÇÃO A LASER", title: "Pele livre para a sua rotina" },
  { image: "/blush-texture.png", alt: "Textura rosa da identidade Alexandra Santos", category: "ESTÉTICA FACIAL", title: "Cuidado que acompanha a sua pele" },
  { image: "/alexandra-sobre-v2.png", alt: "Alexandra Santos na clínica", category: "ESTÉTICA CORPORAL", title: "Protocolos pensados para você" },
];

export default function TreatmentShowcase() {
  return (
    <section className="bg-[var(--color-base)] px-6 py-24 sm:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 max-w-xl">
          <p className="text-sm font-semibold tracking-[0.12em] text-[var(--color-rose)]">TRATAMENTOS EM DESTAQUE</p>
          <h2 className="mt-4 font-display text-5xl leading-[1] text-[var(--color-ink)] md:text-6xl">Tecnologia, escuta e <span className="italic text-[var(--color-rose)]">naturalidade.</span></h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((highlight) => (
            <article key={highlight.category} className="group">
              <div className="relative aspect-square overflow-hidden bg-[var(--color-surface)]">
                <Image src={highlight.image} alt={highlight.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className={`object-cover transition duration-700 group-hover:scale-[1.03] ${highlight.image === "/alexandra-hero-v2.png" ? "object-top" : ""}`} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgb(37_22_27_/_48%))]" />
                <a href="#agendamento" className="absolute bottom-5 left-5 border border-white/60 px-5 py-2.5 text-[11px] font-semibold tracking-[0.14em] text-white opacity-0 transition group-hover:opacity-100 focus:opacity-100">QUERO SABER MAIS</a>
              </div>
              <p className="mt-5 text-xs font-semibold tracking-[0.13em] text-[var(--color-rose)]">{highlight.category}</p>
              <h3 className="mt-2 font-display text-3xl leading-tight text-[var(--color-ink)]">{highlight.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
