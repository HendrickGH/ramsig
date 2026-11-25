import { PRESENCE_SECTION } from "@/design-system/content";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";

export function PresenceSection() {
  return (
    <section id="presencia" aria-labelledby="presencia-title" className="band band--raised">
      <div className="container split-media">
        <div className="split__intro">
          <Heading id="presencia-title" highlight={PRESENCE_SECTION.highlight}>
            {PRESENCE_SECTION.title}
          </Heading>
          <div className="prose-stack">
            {PRESENCE_SECTION.paragraphs.map((paragraph) => (
              <Text key={paragraph}>{paragraph}</Text>
            ))}
          </div>

          <ul className="presence-states">
            {PRESENCE_SECTION.states.map((state) => (
              <li key={state.id} className="presence-states__item">
                <span className="presence-states__name">{state.name}</span>
                <span className="presence-states__role">{state.role}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="presence-map-wrap">
          <img
            src={PRESENCE_SECTION.image.src}
            alt={PRESENCE_SECTION.image.alt}
            width={957}
            height={682}
            className="presence-map"
          />
        </div>
      </div>
    </section>
  );
}
