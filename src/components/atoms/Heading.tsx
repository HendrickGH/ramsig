import type { ReactNode } from "react";

export interface HeadingProps {
  as?: "h1" | "h2" | "h3";
  size?: "display" | "section" | "item";
  id?: string;
  children: ReactNode;
}

export function Heading({
  as: Tag = "h2",
  size = "section",
  id,
  children,
}: HeadingProps) {
  return (
    <Tag id={id} className={`heading heading--${size}`}>
      {children}
    </Tag>
  );
}
