import { Surface } from "@/design-system/Primitives";
import type {
  ServiceId,
  SurfaceLevel,
  TacticalIconName,
} from "@/design-system/tokens";
import { Button } from "../atoms/Button";
import { Heading } from "../atoms/Heading";
import { ServiceBadge } from "../atoms/ServiceBadge";
import { TacticalIcon } from "../atoms/TacticalIcon";

export interface ServicePillarCardProps {
  service: ServiceId;
  indexCode: string;
  badgeLabel: string;
  title: string;
  summary: string;
  highlights: readonly string[];
  readinessLabel?: string;
  iconName: TacticalIconName;
  ctaLabel: string;
  ctaHref?: string;
  onSelectService?: (service: ServiceId) => void;
  active?: boolean;
  surfaceLevel?: SurfaceLevel;
  className?: string;
}

export function ServicePillarCard({
  service,
  indexCode,
  badgeLabel,
  title,
  summary,
  highlights,
  readinessLabel,
  iconName,
  ctaLabel,
  ctaHref,
  onSelectService,
  active = false,
  surfaceLevel = 1,
  className,
}: ServicePillarCardProps) {
  const classes = [
    "service-pillar-card",
    active ? "service-pillar-card--active" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Surface
      as="article"
      level={surfaceLevel}
      radius="md"
      className={classes}
    >
      <div className="capsule-stack">
        <div className="service-pillar-card__head">
          <ServiceBadge
            service={service}
            code={indexCode}
            label={badgeLabel}
            variant={active ? "solid" : "subtle"}
            size="md"
          />
          <span className="service-pillar-card__icon">
            <TacticalIcon name={iconName} size={22} />
          </span>
        </div>

        <Heading as="h3" size="card" tone="primary">
          {title}
        </Heading>

        <p className="body-copy">{summary}</p>

        {readinessLabel ? (
          <p className="service-pillar-card__meta">{readinessLabel}</p>
        ) : null}

        <ul className="service-pillar-card__list">
          {highlights.map((item) => (
            <li key={item} className="service-pillar-card__item">
              <span className="service-pillar-card__check">
                <TacticalIcon name="check" size={16} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Button
          variant={active ? "primary" : "secondary"}
          fullWidth
          href={ctaHref}
          onClick={
            onSelectService ? () => onSelectService(service) : undefined
          }
        >
          <span>{ctaLabel}</span>
          <TacticalIcon name="arrow-right" size={16} />
        </Button>
      </div>
    </Surface>
  );
}
