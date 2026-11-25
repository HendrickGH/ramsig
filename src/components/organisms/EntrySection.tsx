import type { Entry } from "@/design-system/content";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { EntryItem } from "../molecules/EntryItem";

export interface EntrySectionProps {
  id: string;
  title: string;
  summary?: string;
  entries: readonly Entry[];
  tone: "raised" | "base";
  layout?: "split" | "columns";
  footnote?: string;
}

export function EntrySection({
  id,
  title,
  summary,
  entries,
  tone,
  layout = "split",
  footnote,
}: EntrySectionProps) {
  if (layout === "columns") {
    return (
      <section id={id} aria-labelledby={`${id}-title`} className={`band band--${tone}`}>
        <div className="container section-flow">
          <div className="section-head">
            <Heading id={`${id}-title`}>{title}</Heading>
            {summary ? <Text>{summary}</Text> : null}
          </div>
          <ul className="grid-3">
            {entries.map((entry) => (
              <EntryItem key={entry.id} entry={entry} />
            ))}
          </ul>
          {footnote ? <Text muted>{footnote}</Text> : null}
        </div>
      </section>
    );
  }

  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`band band--${tone}`}>
      <div className="container split">
        <div className="split__intro">
          <Heading id={`${id}-title`}>{title}</Heading>
          {summary ? <Text>{summary}</Text> : null}
        </div>
        <ul className="stack">
          {entries.map((entry) => (
            <EntryItem key={entry.id} entry={entry} />
          ))}
        </ul>
      </div>
    </section>
  );
}
