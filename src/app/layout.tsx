import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import {
  CONTACT,
  PRESENCE_SECTION,
  SECTORS,
  SERVICES,
  SITE,
} from "@/design-system/content";
import "./globals.css";

const ogImageUrl = new URL(SITE.ogImage, SITE.canonicalUrl).toString();
const logoUrl = new URL("/images/ramsig-logo.png", SITE.canonicalUrl).toString();

export const viewport: Viewport = {
  themeColor: "#0b0a07",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.canonicalUrl),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.name, url: SITE.canonicalUrl }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Seguridad privada corporativa",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.canonicalUrl,
    siteName: SITE.name,
    title: SITE.socialTitle,
    description: SITE.socialDescription,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: SITE.ogImageAlt,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.socialTitle,
    description: SITE.socialDescription,
    images: [
      {
        url: SITE.ogImage,
        alt: SITE.ogImageAlt,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationId = `${SITE.canonicalUrl}#organization`;
const websiteId = `${SITE.canonicalUrl}#website`;
const webpageId = `${SITE.canonicalUrl}#webpage`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SecurityService",
      "@id": organizationId,
      name: SITE.name,
      alternateName: SITE.shortName,
      description: SITE.description,
      url: SITE.canonicalUrl,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
      image: [ogImageUrl],
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
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: CONTACT.phoneDisplay,
          email: CONTACT.email,
          contactType: "sales",
          availableLanguage: ["es"],
          areaServed: "MX",
        },
        {
          "@type": "ContactPoint",
          telephone: CONTACT.phoneDisplay,
          contactType: "emergency",
          availableLanguage: ["es"],
          areaServed: "MX",
          hoursAvailable: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      knowsAbout: [
        ...SERVICES.map((service) => service.name),
        ...SECTORS.map((sector) => `Seguridad para ${sector.name.toLowerCase()}`),
        "CCTV con inteligencia artificial",
        "Custodia física con protocolo CAPUFE",
        "Custodia virtual con cuenta espejo",
        "Cumplimiento REPSE",
        "Lineamientos SSPC y DGSP",
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
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE.canonicalUrl,
      name: SITE.name,
      description: SITE.description,
      inLanguage: "es-MX",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "WebPage",
      "@id": webpageId,
      url: SITE.canonicalUrl,
      name: SITE.title,
      description: SITE.description,
      inLanguage: "es-MX",
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: ogImageUrl,
        width: 1200,
        height: 630,
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es-MX">
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
