import { PRESENCE_SECTION } from "@/design-system/content";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";

export function PresenceSection() {
  return (
    <section id="presencia" aria-labelledby="presencia-title" className="band band--raised">
      <div className="container split">
        <div className="split__intro">
          <Heading id="presencia-title">{PRESENCE_SECTION.title}</Heading>
          <div className="prose-stack">
            {PRESENCE_SECTION.paragraphs.map((paragraph) => (
              <Text key={paragraph}>{paragraph}</Text>
            ))}
          </div>
        </div>

        <ul className="states-grid">
          {PRESENCE_SECTION.states.map((state) => (
            <li key={state.id} className="state-tile">
              <p className="state-tile__name">{state.name}</p>
              <Text muted>{state.role}</Text>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
