import { Surface } from "@/design-system/Primitives";
import type {
  SectorId,
  SurfaceLevel,
  TacticalIconName,
} from "@/design-system/tokens";
import { Button } from "../atoms/Button";
import { Eyebrow } from "../atoms/Eyebrow";
import { Heading } from "../atoms/Heading";
import { TacticalIcon } from "../atoms/TacticalIcon";

export interface SectorCardProps {
  sector: SectorId;
  indexCode: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: readonly string[];
  iconName: TacticalIconName;
  ctaLabel: string;
  ctaHref?: string;
  onSelectSector?: (sector: SectorId) => void;
  surfaceLevel?: SurfaceLevel;
  className?: string;
}

export function SectorCard({
  sector,
  indexCode,
  title,
  subtitle,
  description,
  capabilities,
  iconName,
  ctaLabel,
  ctaHref,
  onSelectSector,
  surfaceLevel = 1,
  className,
}: SectorCardProps) {
  const classes = ["sector-card", className].filter(Boolean).join(" ");

  return (
    <Surface
      as="article"
      level={surfaceLevel}
      radius="md"
      className={classes}
    >
      <div className="capsule-stack">
        <div className="sector-card__top">
          <Eyebrow index={indexCode} tone="gold">
            {subtitle}
          </Eyebrow>
          <span className="sector-card__icon">
            <TacticalIcon name={iconName} size={22} />
          </span>
        </div>

        <Heading as="h3" size="card" tone="primary">
          {title}
        </Heading>

        <p className="body-copy">{description}</p>

        <ul className="sector-card__risks">
          {capabilities.map((capability) => (
            <li key={capability} className="sector-card__risk">
              <span className="sector-card__risk-icon">
                <TacticalIcon name="check" size={16} />
              </span>
              <span>{capability}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Button
          variant="secondary"
          fullWidth
          href={ctaHref}
          onClick={
            onSelectSector ? () => onSelectSector(sector) : undefined
          }
        >
          <span>{ctaLabel}</span>
          <TacticalIcon name="arrow-right" size={16} />
        </Button>
      </div>
    </Surface>
  );
}
