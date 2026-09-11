"use client";

import { WhatsappLogo } from "@phosphor-icons/react";

export default function WhatsAppFloat() {
  const whatsappUrl = "https://wa.me/5531984068805?text=Ol%C3%A1%2C+Alexandra!+Vi+o+site+e+gostaria+de+agendar+uma+avalia%C3%A7%C3%A3o.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center bg-[#25D366] text-white shadow-lg animate-wa-pulse transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Agendar avaliação pelo WhatsApp"
    >
      <WhatsappLogo size={32} weight="fill" />
    </a>
  );
}
