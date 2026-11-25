"use client";

import { useState } from "react";
import {
  SECTORS,
  SECTORS_SECTION,
  SERVICES,
  SERVICES_SECTION,
  type RequestOptionValue,
} from "@/design-system/content";
import { AboutSection } from "../organisms/AboutSection";
import { CareersSection } from "../organisms/CareersSection";
import { ContactSection } from "../organisms/ContactSection";
import { EntrySection } from "../organisms/EntrySection";
import { FrameworkSection } from "../organisms/FrameworkSection";
import { Hero } from "../organisms/Hero";
import { ImpactSection } from "../organisms/ImpactSection";
import { PresenceSection } from "../organisms/PresenceSection";
import { SiteFooter } from "../organisms/SiteFooter";
import { SiteHeader } from "../organisms/SiteHeader";

export function LandingTemplate() {
  const [selectedRequest, setSelectedRequest] = useState<RequestOptionValue>("guardias");

  const handleApply = () => {
    setSelectedRequest("bolsa");
    const target = document.getElementById("contacto");
    if (!target) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <>
      <a href="#principal" className="skip-link">
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="principal">
        <Hero />
        <AboutSection />
        <EntrySection
          id="servicios"
          title={SERVICES_SECTION.title}
          summary={SERVICES_SECTION.summary}
          entries={SERVICES}
          tone="base"
          layout="split"
        />
        <EntrySection
          id="sectores"
          title={SECTORS_SECTION.title}
          summary={SECTORS_SECTION.summary}
          entries={SECTORS}
          tone="raised"
          layout="columns"
          footnote={SECTORS_SECTION.extendedNote}
        />
        <ImpactSection />
        <PresenceSection />
        <FrameworkSection />
        <CareersSection onApply={handleApply} />
        <ContactSection
          selectedRequest={selectedRequest}
          onSelectRequest={setSelectedRequest}
        />
      </main>
      <SiteFooter />
    </>
  );
}
