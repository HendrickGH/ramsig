import type { Entry } from "@/design-system/content";
import { Heading } from "../atoms/Heading";
import { EntryItem } from "../molecules/EntryItem";

export interface EntrySectionProps {
  id: string;
  title: string;
  entries: readonly Entry[];
  tone: "raised" | "base";
}

export function EntrySection({ id, title, entries, tone }: EntrySectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`band band--${tone}`}>
      <div className="container split">
        <Heading id={`${id}-title`}>{title}</Heading>
        <ul className="stack">
          {entries.map((entry) => (
            <EntryItem key={entry.id} entry={entry} />
          ))}
        </ul>
      </div>
    </section>
  );
}
