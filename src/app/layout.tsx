import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alexandrasantosestetica.com.br"),
  title: "Alexandra Santos Estética Avançada | Depilação a Laser e Tratamentos em Belo Horizonte",
  description:
    "Clínica de estética avançada em BH com 11 anos de experiência. Depilação a laser, microagulhamento, peeling e clareamento corporal. Agende sua avaliação!",
  keywords:
    "depilação a laser Belo Horizonte, estética avançada BH, microagulhamento, peeling químico, clareamento corporal, Alexandra Santos esteticista",
  authors: [{ name: "Alexandra Santos Estética Avançada" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Alexandra Santos Estética Avançada",
    title: "Alexandra Santos Estética Avançada | Belo Horizonte",
    description:
      "Clínica de estética avançada com 11 anos de experiência em BH. Depilação a laser, tratamentos faciais e corporais.",
    images: [{ url: "/alexandra-hero-v2.png", width: 1084, height: 1451 }],
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://alexandrasantosestetica.com.br/#organization",
  name: "Alexandra Santos Estética Avançada",
  description:
    "Clínica de estética avançada em Belo Horizonte com 11 anos de experiência. Especializada em depilação a laser, tratamentos faciais e corporais.",
  telephone: "+55-31-98406-8805",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Gonçalo de Souza Barros, 85",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    postalCode: "31748-251",
    addressCountry: "BR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: ["https://www.instagram.com/alexandrasantosestetica/"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        <LenisProvider>
          {children}
          <WhatsAppFloat />
        </LenisProvider>
      </body>
    </html>
  );
}
