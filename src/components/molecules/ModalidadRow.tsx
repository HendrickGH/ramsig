import { Surface } from "@/design-system/Primitives";
import type { ServiceId, SurfaceLevel } from "@/design-system/tokens";
import { Heading } from "../atoms/Heading";
import { ServiceBadge } from "../atoms/ServiceBadge";

export interface ModalidadRowProps {
  indexCode: string;
  title: string;
  subtitle: string;
  description: string;
  service?: ServiceId;
  badgeLabel?: string;
  surfaceLevel?: SurfaceLevel;
  className?: string;
}

export function ModalidadRow({
  indexCode,
  title,
  subtitle,
  description,
  service,
  badgeLabel,
  surfaceLevel = 2,
  className,
}: ModalidadRowProps) {
  const classes = ["modalidad-row", className].filter(Boolean).join(" ");

  return (
    <Surface
      as="article"
      level={surfaceLevel}
      radius="sm"
      className={classes}
    >
      <div className="modalidad-row__header">
        <span className="modalidad-row__code mono-code">{indexCode}</span>
        {service && badgeLabel ? (
          <ServiceBadge
            service={service}
            label={badgeLabel}
            variant="subtle"
            size="sm"
          />
        ) : null}
      </div>

      <Heading as="h4" size="sub" tone="primary">
        {title}
      </Heading>

      <p className="body-copy">{subtitle}</p>
      <p className="modalidad-row__protocol">{description}</p>
    </Surface>
  );
}
