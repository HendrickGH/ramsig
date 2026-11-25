import type { ReactNode } from "react";

export interface HeadingProps {
  as?: "h1" | "h2" | "h3";
  size?: "display" | "section" | "item";
  id?: string;
  highlight?: string;
  children: ReactNode;
}

function renderWithHighlight(text: string, highlight?: string): ReactNode {
  if (!highlight) return text;
  const matchIndex = text.indexOf(highlight);
  if (matchIndex === -1) return text;

  const before = text.slice(0, matchIndex);
  const after = text.slice(matchIndex + highlight.length);

  return (
    <>
      {before}
      <span className="heading__highlight">{highlight}</span>
      {after}
    </>
  );
}

export function Heading({
  as: Tag = "h2",
  size = "section",
  id,
  highlight,
  children,
}: HeadingProps) {
  const content =
    typeof children === "string"
      ? renderWithHighlight(children, highlight)
      : children;

  return (
    <Tag id={id} className={`heading heading--${size}`}>
      {content}
    </Tag>
  );
}
