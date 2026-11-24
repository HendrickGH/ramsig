"use client";

import { useState } from "react";
import type {
  CONTACT_SECTION_COPY,
  COVERAGE_SECTION_COPY,
  ComplianceItem,
  ContactInfo,
  EXTENDED_SECTORS_NOTE,
  FOOTER_COPY,
  HERO_DOSSIER,
  HeroContent,
  ImpactMetric,
  NavLinkItem,
  PrivacyNotice,
  QuoteFormConfig,
  RecruitmentFormConfig,
  SECTORS_SECTION_COPY,
  SERVICES_SECTION_COPY,
  SectorItem,
  ServicePillar,
  StateOffice,
} from "@/design-system/services";
import { A11Y_COPY } from "@/design-system/services";
import type { SectorId, ServiceId } from "@/design-system/tokens";
import { CapsuleNavbar } from "../organisms/CapsuleNavbar";
import { EditorialFooter } from "../organisms/EditorialFooter";
import { HeroShowcase } from "../organisms/HeroShowcase";
import { ImpactAndCoverage } from "../organisms/ImpactAndCoverage";
import { QuoteBriefSection } from "../organisms/QuoteBriefSection";
import { SectorsGrid } from "../organisms/SectorsGrid";
import { ServicesArchitecture } from "../organisms/ServicesArchitecture";

export interface LandingTemplateProps {
  navLinks: readonly NavLinkItem[];
  heroContent: HeroContent;
  heroDossier: typeof HERO_DOSSIER;
  servicesSectionCopy: typeof SERVICES_SECTION_COPY;
  services: readonly ServicePillar[];
  sectorsSectionCopy: typeof SECTORS_SECTION_COPY;
  sectors: readonly SectorItem[];
  extendedSectorsNote: typeof EXTENDED_SECTORS_NOTE;
  coverageSectionCopy: typeof COVERAGE_SECTION_COPY;
  impactMetrics: readonly ImpactMetric[];
  stateOffices: readonly StateOffice[];
  complianceItems: readonly ComplianceItem[];
  contactSectionCopy: typeof CONTACT_SECTION_COPY;
  contactInfo: ContactInfo;
  privacyNotice: PrivacyNotice;
  quoteFormConfig: QuoteFormConfig;
  recruitmentFormConfig: RecruitmentFormConfig;
  footerCopy: typeof FOOTER_COPY;
}

export function LandingTemplate({
  navLinks,
  heroContent,
  heroDossier,
  servicesSectionCopy,
  services,
  sectorsSectionCopy,
  sectors,
  extendedSectorsNote,
  coverageSectionCopy,
  impactMetrics,
  stateOffices,
  complianceItems,
  contactSectionCopy,
  contactInfo,
  privacyNotice,
  quoteFormConfig,
  recruitmentFormConfig,
  footerCopy,
}: LandingTemplateProps) {
  const [selectedService, setSelectedService] = useState<ServiceId>("guardias");
  const [selectedSector, setSelectedSector] = useState<SectorId>("industria");
  const [selectionVersion, setSelectionVersion] = useState(0);
  const [requestedTabVersion, setRequestedTabVersion] = useState(0);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const scrollToContact = () => {
    const target = document.getElementById("contacto");
    if (!target) {
      return;
    }

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const handleRequestQuote = () => {
    setRequestedTabVersion((prev) => prev + 1);
    scrollToContact();
  };

  const handleSelectService = (service: ServiceId) => {
    setSelectedService(service);
    setSelectionVersion((prev) => prev + 1);
    scrollToContact();
  };

  const handleSelectSector = (sector: SectorId) => {
    setSelectedSector(sector);
    const matchingSector = sectors.find((item) => item.id === sector);
    const recommendedService = matchingSector?.recommendedServices[0];
    if (recommendedService) {
      setSelectedService(recommendedService);
    }
    setSelectionVersion((prev) => prev + 1);
    scrollToContact();
  };

  return (
    <>
      <a href={`#${A11Y_COPY.mainLandmarkId}`} className="skip-link">
        {A11Y_COPY.skipToContentLabel}
      </a>

      <CapsuleNavbar links={navLinks} onRequestQuote={handleRequestQuote} />

      <main id={A11Y_COPY.mainLandmarkId}>
        <HeroShowcase
          content={heroContent}
          services={services}
          dossier={heroDossier}
          onRequestQuote={handleRequestQuote}
        />

        <ServicesArchitecture
          sectionCopy={servicesSectionCopy}
          services={services}
          onSelectService={handleSelectService}
        />

        <SectorsGrid
          sectionCopy={sectorsSectionCopy}
          sectors={sectors}
          extendedNote={extendedSectorsNote}
          services={services}
          onSelectSector={handleSelectSector}
        />

        <ImpactAndCoverage
          sectionCopy={coverageSectionCopy}
          metrics={impactMetrics}
          offices={stateOffices}
          complianceItems={complianceItems}
        />

        <QuoteBriefSection
          sectionCopy={contactSectionCopy}
          contactInfo={contactInfo}
          privacyNotice={privacyNotice}
          quoteConfig={quoteFormConfig}
          recruitmentConfig={recruitmentFormConfig}
          preselectedService={selectedService}
          preselectedSector={selectedSector}
          selectionVersion={selectionVersion}
          requestedTabVersion={requestedTabVersion}
          onOpenPrivacy={() => setPrivacyOpen(true)}
        />
      </main>

      <EditorialFooter
        navLinks={navLinks}
        offices={stateOffices}
        contactInfo={contactInfo}
        privacyNotice={privacyNotice}
        footerCopy={footerCopy}
        privacyModalOpen={privacyOpen}
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onClosePrivacy={() => setPrivacyOpen(false)}
      />
    </>
  );
}
