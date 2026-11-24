import { LandingTemplate } from "@/components/templates/LandingTemplate";
import {
  COMPLIANCE_ITEMS,
  CONTACT_INFO,
  CONTACT_SECTION_COPY,
  COVERAGE_SECTION_COPY,
  EXTENDED_SECTORS_NOTE,
  FOOTER_COPY,
  HERO_CONTENT,
  HERO_DOSSIER,
  IMPACT_METRICS,
  NAV_LINKS,
  PRIVACY_NOTICE,
  QUOTE_FORM_CONFIG,
  RECRUITMENT_FORM_CONFIG,
  SECTORS,
  SECTORS_SECTION_COPY,
  SERVICES,
  SERVICES_SECTION_COPY,
  STATE_OFFICES,
} from "@/design-system/services";

export default function HomePage() {
  return (
    <LandingTemplate
      navLinks={NAV_LINKS}
      heroContent={HERO_CONTENT}
      heroDossier={HERO_DOSSIER}
      servicesSectionCopy={SERVICES_SECTION_COPY}
      services={SERVICES}
      sectorsSectionCopy={SECTORS_SECTION_COPY}
      sectors={SECTORS}
      extendedSectorsNote={EXTENDED_SECTORS_NOTE}
      coverageSectionCopy={COVERAGE_SECTION_COPY}
      impactMetrics={IMPACT_METRICS}
      stateOffices={STATE_OFFICES}
      complianceItems={COMPLIANCE_ITEMS}
      contactSectionCopy={CONTACT_SECTION_COPY}
      contactInfo={CONTACT_INFO}
      privacyNotice={PRIVACY_NOTICE}
      quoteFormConfig={QUOTE_FORM_CONFIG}
      recruitmentFormConfig={RECRUITMENT_FORM_CONFIG}
      footerCopy={FOOTER_COPY}
    />
  );
}
