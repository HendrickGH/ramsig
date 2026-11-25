import type { Entry } from "@/design-system/content";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";

export function EntryItem({ entry }: { entry: Entry }) {
  return (
    <li className="entry">
      {entry.image ? (
        <div className="media-frame media-frame--card">
          <img
            src={entry.image.src}
            alt={entry.image.alt}
            width={1400}
            height={933}
            className="media-frame__img"
          />
        </div>
      ) : null}
      <Heading as="h3" size="item">
        {entry.name}
      </Heading>
      <Text>{entry.description}</Text>
    </li>
  );
}
