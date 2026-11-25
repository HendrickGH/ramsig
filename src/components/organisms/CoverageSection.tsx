import { COVERAGE_SECTION, METRICS } from "@/design-system/content";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { EntryItem } from "../molecules/EntryItem";
import { MetricItem } from "../molecules/MetricItem";

export function CoverageSection() {
  return (
    <section id="cobertura" aria-labelledby="cobertura-title" className="band band--raised">
      <div className="container section-flow">
        <div className="section-head">
          <Heading id="cobertura-title">{COVERAGE_SECTION.title}</Heading>
          <Text>{COVERAGE_SECTION.summary}</Text>
        </div>

        <div className="metrics-grid">
          {METRICS.map((metric) => (
            <MetricItem key={metric.id} metric={metric} />
          ))}
        </div>

        <div className="split-even">
          <div className="subblock">
            <Heading as="h3" size="item">
              {COVERAGE_SECTION.statesHeading}
            </Heading>
            <ul className="plain-list">
              {COVERAGE_SECTION.states.map((state) => (
                <li key={state} className="plain-list__item">
                  {state}
                </li>
              ))}
            </ul>
          </div>

          <div className="subblock">
            <Heading as="h3" size="item">
              {COVERAGE_SECTION.complianceHeading}
            </Heading>
            <ul className="stack-compact">
              {COVERAGE_SECTION.compliance.map((item) => (
                <EntryItem key={item.id} entry={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
