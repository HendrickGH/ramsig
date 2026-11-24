import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CONTACT_INFO, SITE_METADATA } from "@/design-system/services";
import "./globals.css";

export const metadata: Metadata = {
  title: SITE_METADATA.title,
  description: SITE_METADATA.description,
  keywords: [...SITE_METADATA.keywords],
  alternates: {
    canonical: SITE_METADATA.canonicalUrl,
  },
  openGraph: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    url: SITE_METADATA.canonicalUrl,
    siteName: SITE_METADATA.siteName,
    locale: SITE_METADATA.locale,
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SecurityService",
  name: CONTACT_INFO.brandName,
  description: SITE_METADATA.description,
  url: SITE_METADATA.canonicalUrl,
  telephone: CONTACT_INFO.phoneDisplay,
  email: CONTACT_INFO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT_INFO.addressFull,
    addressLocality: SITE_METADATA.jsonLd.addressLocality,
    addressRegion: SITE_METADATA.jsonLd.addressRegion,
    addressCountry: SITE_METADATA.jsonLd.addressCountry,
  },
  areaServed: [...SITE_METADATA.jsonLd.areaServed],
  serviceType: [...SITE_METADATA.jsonLd.serviceTypes],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
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
