import { CAREERS_SECTION } from "@/design-system/content";
import { Button } from "../atoms/Button";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";

export interface CareersSectionProps {
  onApply: () => void;
}

export function CareersSection({ onApply }: CareersSectionProps) {
  return (
    <section
      id="bolsa-de-trabajo"
      aria-labelledby="bolsa-title"
      className="band band--raised"
    >
      <div className="container split-media">
        <div className="split__intro">
          <Heading id="bolsa-title" highlight={CAREERS_SECTION.highlight}>
            {CAREERS_SECTION.title}
          </Heading>
          <p className="careers-lead">{CAREERS_SECTION.lead}</p>
          <div className="prose-stack">
            {CAREERS_SECTION.paragraphs.map((paragraph) => (
              <Text key={paragraph}>{paragraph}</Text>
            ))}
          </div>
          <div className="careers-action">
            <Button onClick={onApply}>{CAREERS_SECTION.cta}</Button>
          </div>
        </div>

        <div className="media-frame media-frame--split">
          <img
            src={CAREERS_SECTION.image.src}
            alt={CAREERS_SECTION.image.alt}
            width={1400}
            height={933}
            className="media-frame__img"
          />
        </div>
      </div>
    </section>
  );
}
