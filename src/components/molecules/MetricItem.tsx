import type { Metric } from "@/design-system/content";
import { Text } from "../atoms/Text";

export function MetricItem({ metric }: { metric: Metric }) {
  return (
    <div className="metric">
      <p className="metric__value">{metric.value}</p>
      <Text muted>{metric.label}</Text>
    </div>
  );
}
