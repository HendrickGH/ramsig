import type { ReactNode } from "react";

export type HeadingTag = "h1" | "h2" | "h3" | "h4";
export type HeadingSize = "display" | "section" | "card" | "sub";
export type HeadingTone = "primary" | "hero" | "gold" | "inverse";

export interface HeadingProps {
  as?: HeadingTag;
  size?: HeadingSize;
  tone?: HeadingTone;
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Heading({
  as = "h2",
  size = "section",
  tone = "primary",
  id,
  className,
  children,
}: HeadingProps) {
  const Component = as;
  const classes = [
    "heading",
    `heading--${size}`,
    `heading--${tone}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component id={id} className={classes}>
      {children}
    </Component>
  );
}
