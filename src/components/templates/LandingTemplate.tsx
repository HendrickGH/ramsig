import {
  SECTORS,
  SECTORS_SECTION,
  SERVICES,
  SERVICES_SECTION,
} from "@/design-system/content";
import { ContactSection } from "../organisms/ContactSection";
import { CoverageSection } from "../organisms/CoverageSection";
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
        <EntrySection
          id="servicios"
          title={SERVICES_SECTION.title}
          summary={SERVICES_SECTION.summary}
          entries={SERVICES}
          tone="raised"
          layout="split"
        />
        <EntrySection
          id="sectores"
          title={SECTORS_SECTION.title}
          summary={SECTORS_SECTION.summary}
          entries={SECTORS}
          tone="base"
          layout="columns"
          footnote={SECTORS_SECTION.extendedNote}
        />
        <CoverageSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
