import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="w-full bg-[var(--color-base)]">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-0">
          
          {/* Left: 45% Photo */}
          <div className="relative h-[560px] w-full overflow-hidden bg-[var(--color-surface)] lg:h-full lg:min-h-[920px]">
            {/* Soft vertical mask gradient applied via tailwind after pseudoclass */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-base)]/20 to-transparent z-10 pointer-events-none" />
            <Image
              src="/alexandra-sobre-v2.png"
              alt="Alexandra Santos com jaleco rosa na clínica"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>

          {/* Right: 55% Content */}
          <div className="flex max-w-[650px] flex-col px-6 py-24 sm:px-10 md:py-32 lg:px-[max(7vw,5rem)]">
            <h2 className="mb-10 font-display text-4xl leading-tight text-[var(--color-ink)] md:text-5xl">
              11 anos dedicados à sua <span className="italic">autoestima</span>
            </h2>
            
            <div className="space-y-8 text-base leading-relaxed text-[var(--color-muted)] md:text-lg">
              <p>
                A estética avançada vai muito além de procedimentos estéticos. É sobre devolver a confiança de olhar no espelho e se sentir bem com o que vê. Em Belo Horizonte, construímos um espaço onde a ciência estética se encontra com o acolhimento humano.
              </p>
              
              <p>
                Com mais de uma década de experiência prática, nossa missão sempre foi clara: oferecer tratamentos seguros, com tecnologias de ponta, personalizados para a necessidade real de cada mulher que cruza nossa porta.
              </p>
            </div>

            <blockquote className="mt-12 border-l-2 border-[var(--color-gold)] py-2 pl-6">
              <p className="font-display text-2xl md:text-3xl italic text-[var(--color-ink)] leading-snug">
                &ldquo;Cada cliente merece sair daqui mais confiante do que entrou.&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
                — Alexandra Santos
              </footer>
            </blockquote>
          </div>

      </div>
    </section>
  );
}
