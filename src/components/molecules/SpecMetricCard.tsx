import {
  SpecMetric,
  Surface,
  type SpecMetricProps,
} from "@/design-system/Primitives";
import type { SurfaceLevel } from "@/design-system/tokens";

export interface SpecMetricCardProps extends SpecMetricProps {
  surfaceLevel?: SurfaceLevel;
  className?: string;
}

export function SpecMetricCard({
  surfaceLevel = 2,
  className,
  ...metricProps
}: SpecMetricCardProps) {
  const classes = ["spec-metric-card", className].filter(Boolean).join(" ");

  return (
    <Surface level={surfaceLevel} radius="md" className={classes}>
      <SpecMetric {...metricProps} />
    </Surface>
  );
}
