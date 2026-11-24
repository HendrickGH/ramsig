import { Surface } from "@/design-system/Primitives";
import type {
  COVERAGE_SECTION_COPY,
  ComplianceItem,
  ImpactMetric,
  StateOffice,
} from "@/design-system/services";
import { A11Y_COPY } from "@/design-system/services";
import { Eyebrow } from "../atoms/Eyebrow";
import { Heading } from "../atoms/Heading";
import { TacticalIcon } from "../atoms/TacticalIcon";
import { SpecMetricCard } from "../molecules/SpecMetricCard";

export interface ImpactAndCoverageProps {
  sectionCopy: typeof COVERAGE_SECTION_COPY;
  metrics: readonly ImpactMetric[];
  offices: readonly StateOffice[];
  complianceItems: readonly ComplianceItem[];
}

export function ImpactAndCoverage({
  sectionCopy,
  metrics,
  offices,
  complianceItems,
}: ImpactAndCoverageProps) {
  return (
    <>
      <Surface as="section" level={0} id="cobertura" className="section-band">
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

          <div
            className="capsule-grid-3"
            role="region"
            aria-label={A11Y_COPY.coverageMetricsAriaLabel}
          >
            {metrics.map((metric) => (
              <SpecMetricCard
                key={metric.id}
                indexCode={metric.indexCode}
                value={metric.value}
                label={metric.label}
                caption={metric.detail}
                emphasis="gold"
                surfaceLevel={1}
              />
            ))}
          </div>

          <div
            className="coverage-subblock"
            role="region"
            aria-label={A11Y_COPY.coverageOfficesAriaLabel}
          >
            <Heading as="h3" size="card" tone="primary">
              {sectionCopy.officesHeading}
            </Heading>

            <div className="capsule-grid-3">
              {offices.map((office) => (
                <Surface
                  key={office.id}
                  as="article"
                  level={1}
                  radius="md"
                  className="office-card"
                >
                  <div className="office-card__head">
                    <span className="office-card__role">{office.role}</span>
                    <span className="office-card__icon">
                      <TacticalIcon name="map-pin" size={18} />
                    </span>
                  </div>

                  <Heading as="h4" size="sub" tone="primary">
                    {office.name}
                  </Heading>

                  <p className="office-card__city">{office.city}</p>
                  <p className="body-copy">{office.coverageNote}</p>
                </Surface>
              ))}
            </div>
          </div>
        </div>
      </Surface>

      <Surface as="section" level={2} id="operacion" className="section-band">
        <div
          className="container-capsule coverage-subblock"
          role="region"
          aria-label={A11Y_COPY.coverageComplianceAriaLabel}
        >
          <Heading as="h3" size="card" tone="primary">
            {sectionCopy.complianceHeading}
          </Heading>

          <div className="capsule-grid-3">
            {complianceItems.map((item) => (
              <Surface
                key={item.id}
                as="article"
                level={1}
                radius="md"
                className="compliance-card"
              >
                <div className="compliance-card__head">
                  <span className="compliance-card__code">{item.code}</span>
                  <span className="compliance-card__icon">
                    <TacticalIcon
                      name={item.id === "capufe" ? "file-text" : "award"}
                      size={20}
                    />
                  </span>
                </div>

                <Heading as="h4" size="sub" tone="primary">
                  {item.title}
                </Heading>

                <p className="compliance-card__status">{item.status}</p>
                <p className="body-copy">{item.description}</p>
              </Surface>
            ))}
          </div>
        </div>
      </Surface>
    </>
  );
}
