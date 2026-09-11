import Image from "next/image";
import { InstagramLogo, WhatsappLogo, MapPin, Clock } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  const whatsappUrl = "https://wa.me/5531984068805";
  const instagramUrl = "https://www.instagram.com/alexandrasantosestetica/";

  return (
    <footer className="w-full bg-[var(--color-surface)] border-t border-[var(--color-gold-light)]/40 pt-20 pb-10">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Brand (Span 4) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="relative h-12 w-48 mb-6">
              <Image
                src="/logo.png"
                alt="Alexandra Santos Estética Avançada"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-[var(--color-muted)] mb-8 max-w-sm">
              Mais de uma década realçando belezas naturais e elevando autoestimas com protocolos seguros e atendimento humanizado.
            </p>
            <div className="flex gap-4">
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-3 text-[var(--color-ink)] transition-colors hover:bg-[var(--color-gold)] hover:text-white"
                aria-label="Instagram"
              >
                <InstagramLogo size={24} weight="fill" />
              </a>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-3 text-[var(--color-ink)] transition-colors hover:bg-[var(--color-gold)] hover:text-white"
                aria-label="WhatsApp"
              >
                <WhatsappLogo size={24} weight="fill" />
              </a>
            </div>
          </div>

          {/* Col 2: Links (Span 3) */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="font-semibold text-[var(--color-ink)] uppercase tracking-widest text-sm mb-6">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="#tratamentos" className="text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors">Tratamentos</a></li>
              <li><a href="#sobre" className="text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors">Nossa História</a></li>
              <li><a href="#faq" className="text-[var(--color-muted)] hover:text-[var(--color-gold)] transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Info (Span 4) */}
          <div className="lg:col-span-4">
            <h4 className="font-semibold text-[var(--color-ink)] uppercase tracking-widest text-sm mb-6">Contato & Endereço</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-[var(--color-muted)]">
                <WhatsappLogo size={20} className="text-[var(--color-gold)] mt-0.5 shrink-0" />
                <span>(31) 98406-8805</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-muted)]">
                <MapPin size={20} className="text-[var(--color-gold)] mt-0.5 shrink-0" />
                <span>R. Gonçalo de Souza Barros, 85<br />Jaqueline, Belo Horizonte - MG<br />31748-251</span>
              </li>
              <li className="flex items-start gap-3 text-[var(--color-muted)]">
                <Clock size={20} className="text-[var(--color-gold)] mt-0.5 shrink-0" />
                <span>Segunda a Sábado<br />09:00 às 19:00</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--color-gold-light)]/40 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--color-muted)]">
          <p>• {new Date().getFullYear()} Alexandra Santos Estética Avançada.</p>
          <p>Desenvolvido com excelência técnica.</p>
        </div>
      </div>
    </footer>
  );
}
