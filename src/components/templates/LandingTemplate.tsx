import { SERVICES } from "@/design-system/content";
import { ContactSection } from "../organisms/ContactSection";
import { EntrySection } from "../organisms/EntrySection";
import { Hero } from "../organisms/Hero";
import { SiteFooter } from "../organisms/SiteFooter";
import { SiteHeader } from "../organisms/SiteHeader";

export function LandingTemplate() {
  return (
    <>
      <a href="#principal" className="skip-link">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="principal">
        <Hero />
        <EntrySection id="servicios" title="Servicios" entries={SERVICES} tone="raised" />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
