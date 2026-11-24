import { HERO } from "@/design-system/content";
import { Button } from "../atoms/Button";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";

export function Hero() {
  return (
    <section id="inicio" className="band--hero">
      <div className="container hero">
        <Heading as="h1" size="display">
          {HERO.title}
        </Heading>
        <Text>{HERO.lead}</Text>
        <div className="hero__action">
          <Button href="#contacto">{HERO.cta}</Button>
        </div>
      </div>
    </section>
  );
}
