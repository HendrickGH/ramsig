import { HERO } from "@/design-system/content";
import { Heading } from "../atoms/Heading";
import { RotatingWord } from "../atoms/RotatingWord";
import { Text } from "../atoms/Text";

export function Hero() {
  return (
    <section id="inicio" className="band--hero hero-stage">
      <img
        src={HERO.image.src}
        alt={HERO.image.alt}
        width={2400}
        height={1600}
        fetchPriority="high"
        className="hero-stage__media"
      />
      <div className="hero-stage__scrim" aria-hidden="true" />
      <div className="container hero">
        <div className="hero__copy">
          <Heading as="h1" size="display">
            <span className="sr-only">{HERO.title}</span>
            <span aria-hidden="true">
              {HERO.titlePrefix}{" "}
              <RotatingWord
                words={HERO.sectors}
                suffix="."
                wordClassName="hero__highlight"
              />
            </span>
          </Heading>
          <Text>{HERO.lead}</Text>
        </div>
      </div>
    </section>
  );
}
