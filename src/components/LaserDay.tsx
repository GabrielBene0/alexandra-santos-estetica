import Image from "next/image";

export default function LaserDay() {
  const whatsappUrl = "https://wa.me/5531984068805?text=Ol%C3%A1%2C+Alexandra!+Quero+garantir+minha+vaga+no+pr%C3%B3ximo+Laser+Day!";

  return (
    <section id="laser-day" className="relative isolate w-full overflow-hidden bg-[var(--color-wine)] py-28 md:py-36">
      <Image src="/blush-texture.png" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-35 mix-blend-screen" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(103_36_56_/_94%),rgb(103_36_56_/_66%))]" />

      <div className="mx-auto max-w-[1280px] px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        
        <span className="mb-8 inline-block border border-white/35 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-widest text-white">
          LASER DAY
        </span>

        <h2 className="font-display text-6xl md:text-8xl lg:text-[110px] leading-none text-white mb-6">
          Laser Day
        </h2>

        <p className="text-[var(--color-surface)] text-lg md:text-2xl font-light mb-12 max-w-[600px]">
          Uma experiência especial para cuidar de quatro áreas em uma só sessão.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["Virilha", "Axila", "Perianal", "Buço"].map((area) => (
            <span 
              key={area}
              className="border border-white/20 bg-white/10 px-6 py-2 text-sm text-white backdrop-blur-sm md:text-base"
            >
              {area}
            </span>
          ))}
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white px-10 py-5 text-lg font-bold text-[var(--color-wine)] transition-all hover:-translate-y-1 hover:bg-[var(--color-blush)] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[var(--color-wine)]"
        >
          Garantir minha vaga
        </a>

      </div>
    </section>
  );
}
