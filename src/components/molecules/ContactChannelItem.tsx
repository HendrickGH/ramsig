import { Surface } from "@/design-system/Primitives";
import type { SurfaceLevel, TacticalIconName } from "@/design-system/tokens";
import { TacticalIcon } from "../atoms/TacticalIcon";

export interface ContactChannelItemProps {
  label: string;
  value: string;
  detail?: string;
  href?: string;
  external?: boolean;
  iconName: TacticalIconName;
  surfaceLevel?: SurfaceLevel;
  className?: string;
}

export function ContactChannelItem({
  label,
  value,
  detail,
  href,
  external = false,
  iconName,
  surfaceLevel = 2,
  className,
}: ContactChannelItemProps) {
  const inner = (
    <>
      <span className="contact-channel__icon">
        <TacticalIcon name={iconName} size={20} />
      </span>
      <span className="contact-channel__body">
        <span className="contact-channel__label">{label}</span>
        <span className="contact-channel__value">{value}</span>
        {detail ? (
          <span className="contact-channel__detail">{detail}</span>
        ) : null}
      </span>
    </>
  );

  return (
    <Surface level={surfaceLevel} radius="md" className={className}>
      {href ? (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="contact-channel contact-channel--interactive radius-md"
        >
          {inner}
        </a>
      ) : (
        <div className="contact-channel">{inner}</div>
      )}
    </Surface>
  );
}
