import type { Entry } from "@/design-system/content";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";

export function EntryItem({ entry }: { entry: Entry }) {
  return (
    <li className="entry">
      <Heading as="h3" size="item">
        {entry.name}
      </Heading>
      <Text>{entry.description}</Text>
    </li>
  );
}
