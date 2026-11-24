import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import {
  getServiceBadgeClasses,
  getSurfaceClassName,
  type RadiusScale,
  type ServiceId,
  type SurfaceLevel,
} from "./tokens";

export type SurfaceElementTag =
  | "div"
  | "section"
  | "article"
  | "aside"
  | "header"
  | "footer"
  | "main"
  | "nav"
  | "span";

export interface SurfaceProps extends HTMLAttributes<HTMLElement> {
  as?: SurfaceElementTag;
  level?: SurfaceLevel | "accent-subtle" | "hero";
  radius?: RadiusScale;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface ServiceBadgeProps {
  service: ServiceId;
  label: string;
  variant?: "subtle" | "solid";
  size?: "sm" | "md";
  code?: string;
  className?: string;
}

export interface SpecMetricProps {
  value: string;
  label: string;
  indexCode?: string;
  caption?: string;
  emphasis?: "gold" | "primary" | "inverse";
  className?: string;
}

function resolveSurfaceClass(level: SurfaceProps["level"]): string {
  if (level === "accent-subtle") {
    return "surface-accent-subtle";
  }
  if (level === "hero") {
    return "surface-hero";
  }
  return getSurfaceClassName(level ?? 1);
}

export function Surface({
  as = "div",
  level = 1,
  radius,
  children,
  className,
  style,
  ...rest
}: SurfaceProps) {
  const Component = as;
  const surfaceClass = resolveSurfaceClass(level);
  const radiusClass = radius ? `radius-${radius}` : "";
  const classes = ["surface", surfaceClass, radiusClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} style={style} {...rest}>
      {children}
    </Component>
  );
}

export function ServiceBadge({
  service,
  label,
  variant = "subtle",
  size = "md",
  code,
  className,
}: ServiceBadgeProps) {
  const classes = [getServiceBadgeClasses(service, variant, size), className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classes}>
      {code ? <span className="service-badge__code mono-code">{code}</span> : null}
      <span>{label}</span>
    </span>
  );
}

export function SpecMetric({
  value,
  label,
  indexCode,
  caption,
  emphasis = "gold",
  className,
}: SpecMetricProps) {
  const isInverse = emphasis === "inverse";
  const classes = [
    "spec-metric",
    isInverse ? "spec-metric--inverse" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const valueClass = `spec-metric__value spec-metric__value--${emphasis} mono-code`;

  return (
    <div className={classes}>
      {indexCode ? (
        <span className="spec-metric__code mono-code">{indexCode}</span>
      ) : null}
      <p className={valueClass}>{value}</p>
      <p className="spec-metric__label">{label}</p>
      {caption ? <p className="spec-metric__caption">{caption}</p> : null}
    </div>
  );
}
