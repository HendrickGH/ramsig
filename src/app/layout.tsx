import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CONTACT, SITE } from "@/design-system/content";
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
  areaServed: "MX",
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
