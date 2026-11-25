import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  CONTACT,
  PRESENCE_SECTION,
  SECTORS,
  SERVICES,
  SITE,
} from "@/design-system/content";
import "./globals.css";

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  alternates: { canonical: SITE.canonicalUrl },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.canonicalUrl,
    siteName: SITE.name,
    locale: "es_MX",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SecurityService",
  name: SITE.name,
  description: SITE.description,
  url: SITE.canonicalUrl,
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Naucalpan de Juárez",
    addressRegion: "Estado de México",
    addressCountry: "MX",
  },
  areaServed: PRESENCE_SECTION.states.map((state) => ({
    "@type": "State",
    name: state.name,
  })),
  knowsAbout: [
    ...SERVICES.map((service) => service.name),
    ...SECTORS.map((sector) => `Seguridad para ${sector.name.toLowerCase()}`),
    "CCTV con inteligencia artificial",
    "Custodia física con protocolo CAPUFE",
    "Custodia virtual con cuenta espejo",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de seguridad privada corporativa",
    itemListElement: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
      },
    })),
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
