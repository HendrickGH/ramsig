import { IMPACT_SECTION, METRICS } from "@/design-system/content";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { MetricItem } from "../molecules/MetricItem";

export function ImpactSection() {
  return (
    <section id="impacto" aria-labelledby="impacto-title" className="band band--base">
      <div className="container section-flow">
        <div className="section-head">
          <Heading id="impacto-title" highlight={IMPACT_SECTION.highlight}>
            {IMPACT_SECTION.title}
          </Heading>
          <Text>{IMPACT_SECTION.summary}</Text>
        </div>

        <div className="metrics-grid metrics-grid--six">
          {METRICS.map((metric) => (
            <MetricItem key={metric.id} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
