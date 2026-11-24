"use client";

import { useState } from "react";
import { Surface } from "@/design-system/Primitives";
import type { ServicePillar } from "@/design-system/services";
import { A11Y_COPY, SERVICES_SECTION_COPY } from "@/design-system/services";
import type { ServiceId } from "@/design-system/tokens";
import { Button } from "../atoms/Button";
import { Eyebrow } from "../atoms/Eyebrow";
import { Heading } from "../atoms/Heading";
import { ServiceBadge } from "../atoms/ServiceBadge";
import { TacticalIcon } from "../atoms/TacticalIcon";
import { ModalidadRow } from "../molecules/ModalidadRow";
import { ServicePillarCard } from "../molecules/ServicePillarCard";

export interface ServicesArchitectureProps {
  sectionCopy?: typeof SERVICES_SECTION_COPY;
  services: readonly ServicePillar[];
  onSelectService?: (service: ServiceId) => void;
}

export function ServicesArchitecture({
  sectionCopy = SERVICES_SECTION_COPY,
  services,
  onSelectService,
}: ServicesArchitectureProps) {
  const [activeServiceId, setActiveServiceId] = useState<ServiceId>(
    services[0]?.id ?? "guardias"
  );

  const activeService =
    services.find((service) => service.id === activeServiceId) ?? services[0];
  const custodiasService = services.find(
    (service) => service.id === "custodias"
  );

  return (
    <Surface as="section" level={0} id="servicios" className="section-band">
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

        <div className="service-tabs-wrap">
          <Surface
            level={1}
            radius="pill"
            role="tablist"
            aria-label={A11Y_COPY.servicesTablistAriaLabel}
            className="service-tabs"
          >
            {services.map((service) => {
              const isSelected = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  id={`service-tab-${service.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`service-panel-${service.id}`}
                  className={[
                    "service-tab",
                    isSelected ? "service-tab--active" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  onClick={() => setActiveServiceId(service.id)}
                >
                  <span className="service-tab__code">{service.index}</span>
                  <span>{service.name}</span>
                </button>
              );
            })}
          </Surface>
        </div>

        <div className="capsule-grid-3">
          {services.map((service) => (
            <ServicePillarCard
              key={service.id}
              service={service.id}
              indexCode={service.index}
              badgeLabel={service.shortName}
              title={service.name}
              summary={service.description}
              highlights={service.capabilities}
              readinessLabel={service.readinessLabel}
              iconName={service.iconName}
              ctaLabel={service.ctaLabel}
              ctaHref="#contacto"
              onSelectService={onSelectService}
              active={service.id === activeServiceId}
              surfaceLevel={1}
            />
          ))}
        </div>

        {activeService ? (
          <Surface
            level={1}
            radius="md"
            role="tabpanel"
            id={`service-panel-${activeService.id}`}
            aria-labelledby={`service-tab-${activeService.id}`}
            className="services-dossier-panel"
          >
            <div className="services-dossier-panel__head">
              <div className="capsule-stack">
                <Eyebrow tone="gold">
                  {A11Y_COPY.servicesDossierEyebrow}
                </Eyebrow>
                <Heading as="h3" size="card" tone="primary">
                  {activeService.name} — {activeService.tagline}
                </Heading>
              </div>
              <ServiceBadge
                service={activeService.id}
                code={activeService.index}
                label={activeService.readinessLabel}
                variant="solid"
                size="md"
              />
            </div>

            <p className="body-copy">{activeService.description}</p>

            <div className="coverage-subblock">
              <p className="service-pillar-card__meta">
                {A11Y_COPY.servicesCapabilitiesHeading}
              </p>
              <ul className="services-dossier-panel__caps">
                {activeService.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="services-dossier-panel__cap-item"
                  >
                    <span className="services-dossier-panel__cap-icon">
                      <TacticalIcon name="check" size={16} />
                    </span>
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Button
                variant="primary"
                href="#contacto"
                onClick={
                  onSelectService
                    ? () => onSelectService(activeService.id)
                    : undefined
                }
              >
                <span>{activeService.ctaLabel}</span>
                <TacticalIcon name="arrow-right" size={16} />
              </Button>
            </div>
          </Surface>
        ) : null}

        {custodiasService?.modalities?.length ? (
          <Surface level={1} radius="md" className="services-dossier-panel">
            <div className="services-dossier-panel__head">
              <div className="capsule-stack">
                <Heading as="h3" size="card" tone="primary">
                  {sectionCopy.modalitiesHeading}
                </Heading>
                <p className="body-copy">
                  {A11Y_COPY.servicesModalitiesDescription}
                </p>
              </div>
              <ServiceBadge
                service="custodias"
                code={custodiasService.index}
                label={custodiasService.shortName}
                variant="subtle"
                size="md"
              />
            </div>

            <div className="capsule-grid-3">
              {custodiasService.modalities.map((modality) => (
                <ModalidadRow
                  key={modality.id}
                  indexCode={modality.code}
                  title={modality.name}
                  subtitle={modality.summary}
                  description={modality.protocol}
                  service="custodias"
                  badgeLabel={custodiasService.shortName}
                  surfaceLevel={2}
                />
              ))}
            </div>
          </Surface>
        ) : null}
      </div>
    </Surface>
  );
}
