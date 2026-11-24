import { Surface } from "@/design-system/Primitives";
import type { HeroContent, ServicePillar } from "@/design-system/services";
import { HERO_DOSSIER } from "@/design-system/services";
import { Button } from "../atoms/Button";
import { Eyebrow } from "../atoms/Eyebrow";
import { Heading } from "../atoms/Heading";
import { ServiceBadge } from "../atoms/ServiceBadge";
import { TacticalIcon } from "../atoms/TacticalIcon";

export interface HeroShowcaseProps {
  content: HeroContent;
  services: readonly ServicePillar[];
  dossier?: typeof HERO_DOSSIER;
  onRequestQuote?: () => void;
}

export function HeroShowcase({
  content,
  services,
  dossier = HERO_DOSSIER,
  onRequestQuote,
}: HeroShowcaseProps) {
  return (
    <Surface as="section" level="hero" id="inicio" className="hero-section">
      <div className="container-capsule">
        <div className="hero-grid">
          <div className="hero-copy">
            <Eyebrow tone="gold">{content.eyebrow}</Eyebrow>

            <Heading as="h1" size="display" tone="hero">
              {content.headlinePrefix}
              <span className="hero-highlight serif-italic">
                {content.headlineHighlight}
              </span>
            </Heading>

            <p className="lead-copy">{content.lead}</p>

            <div className="hero-actions">
              <Button
                variant="primary"
                size="lg"
                href={content.primaryCta.href}
                onClick={onRequestQuote}
              >
                <span>{content.primaryCta.label}</span>
                <TacticalIcon name="arrow-right" size={18} />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href={content.secondaryCta.href}
              >
                {content.secondaryCta.label}
              </Button>
            </div>

            <ul className="hero-trust-strip">
              {content.trustHighlights.map((highlight) => (
                <li key={highlight} className="hero-trust-chip">
                  <TacticalIcon
                    name="check"
                    size={14}
                    className="hero-trust-chip__icon"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <Surface as="aside" level={1} radius="md" className="hero-dossier">
            <Eyebrow tone="gold">{dossier.eyebrow}</Eyebrow>

            <Heading as="h2" size="card" tone="primary">
              {dossier.title}
            </Heading>

            <p className="body-copy">{dossier.subtitle}</p>

            <div className="hero-dossier__list">
              {services.map((service) => (
                <Surface
                  key={service.id}
                  level={2}
                  radius="sm"
                  className="hero-dossier__item"
                >
                  <div className="hero-dossier__item-head">
                    <ServiceBadge
                      service={service.id}
                      code={service.index}
                      label={service.name}
                      variant="subtle"
                      size="sm"
                    />
                    <TacticalIcon name={service.iconName} size={18} />
                  </div>
                  <p className="hero-dossier__meta">{service.readinessLabel}</p>
                  <p className="muted-copy">{service.tagline}</p>
                </Surface>
              ))}
            </div>

            <div className="hero-dossier__footer">{dossier.footerTag}</div>
          </Surface>
        </div>
      </div>
    </Surface>
  );
}
