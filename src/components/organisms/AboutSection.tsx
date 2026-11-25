import { ABOUT_SECTION } from "@/design-system/content";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";

export function AboutSection() {
  return (
    <section id="acerca" aria-labelledby="acerca-title" className="band band--raised">
      <div className="container split-media">
        <div className="split__intro">
          <Heading id="acerca-title" highlight={ABOUT_SECTION.highlight}>
            {ABOUT_SECTION.title}
          </Heading>
          <div className="prose-stack">
            {ABOUT_SECTION.paragraphs.map((paragraph) => (
              <Text key={paragraph}>{paragraph}</Text>
            ))}
          </div>
        </div>

        <div className="media-frame media-frame--split">
          <img
            src={ABOUT_SECTION.image.src}
            alt={ABOUT_SECTION.image.alt}
            width={1400}
            height={1050}
            className="media-frame__img"
          />
        </div>
      </div>
    </section>
  );
}
