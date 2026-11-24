import { Surface } from "@/design-system/Primitives";
import type {
  EXTENDED_SECTORS_NOTE,
  SECTORS_SECTION_COPY,
  SectorItem,
  ServicePillar,
} from "@/design-system/services";
import { A11Y_COPY } from "@/design-system/services";
import type { SectorId } from "@/design-system/tokens";
import { Eyebrow } from "../atoms/Eyebrow";
import { Heading } from "../atoms/Heading";
import { ServiceBadge } from "../atoms/ServiceBadge";
import { SectorCard } from "../molecules/SectorCard";

export interface SectorsGridProps {
  sectionCopy: typeof SECTORS_SECTION_COPY;
  sectors: readonly SectorItem[];
  extendedNote: typeof EXTENDED_SECTORS_NOTE;
  services: readonly ServicePillar[];
  onSelectSector?: (sector: SectorId) => void;
}

export function SectorsGrid({
  sectionCopy,
  sectors,
  extendedNote,
  services,
  onSelectSector,
}: SectorsGridProps) {
  return (
    <Surface as="section" level={1} id="sectores" className="section-band">
      <div className="container-capsule section-block">
        <div className="section-intro">
          <Eyebrow index={sectionCopy.eyebrowIndex}>
            {sectionCopy.eyebrowLabel}
          </Eyebrow>
          <Heading as="h2" size="section" tone="primary">
            {sectionCopy.title}
          </Heading>
          <p className="lead-copy">{sectionCopy.subtitle}</p>
        </div>

        <div className="capsule-grid-3">
          {sectors.map((sector) => (
            <SectorCard
              key={sector.id}
              sector={sector.id}
              indexCode={sector.index}
              title={sector.name}
              subtitle={sector.subtitle}
              description={sector.description}
              capabilities={sector.risksMitigated}
              iconName={sector.iconName}
              ctaLabel={sector.ctaLabel}
              ctaHref="#contacto"
              onSelectSector={onSelectSector}
              surfaceLevel={2}
            />
          ))}
        </div>

        <Surface
          level="accent-subtle"
          radius="md"
          className="extended-sectors-banner"
        >
          <div className="extended-sectors-banner__head">
            <Eyebrow tone="gold">{extendedNote.label}</Eyebrow>
            <div
              className="extended-sectors-banner__badges"
              aria-label={A11Y_COPY.sectorsRecommendedLabel}
            >
              {services.map((service) => (
                <ServiceBadge
                  key={service.id}
                  service={service.id}
                  code={service.index}
                  label={service.shortName}
                  variant="subtle"
                  size="sm"
                />
              ))}
            </div>
          </div>
          <p className="body-copy">{extendedNote.text}</p>
        </Surface>
      </div>
    </Surface>
  );
}
