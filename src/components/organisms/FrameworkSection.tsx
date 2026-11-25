import { FRAMEWORK_SECTION } from "@/design-system/content";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { EntryItem } from "../molecules/EntryItem";

export function FrameworkSection() {
  return (
    <section id="marco" aria-labelledby="marco-title" className="band band--base">
      <div className="container section-flow">
        <div className="section-head">
          <Heading id="marco-title">{FRAMEWORK_SECTION.title}</Heading>
          <Text>{FRAMEWORK_SECTION.summary}</Text>
        </div>

        <ul className="grid-3">
          {FRAMEWORK_SECTION.items.map((item) => (
            <EntryItem key={item.id} entry={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
