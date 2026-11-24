import type { ReactNode } from "react";

export interface EyebrowProps {
  index?: string;
  tone?: "gold" | "muted" | "inverse";
  children: ReactNode;
  className?: string;
}

export function Eyebrow({
  index,
  tone = "gold",
  children,
  className,
}: EyebrowProps) {
  const classes = ["eyebrow", `eyebrow--${tone}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <p className={classes}>
      {index ? <span className="eyebrow__index">{index}</span> : null}
      <span>{children}</span>
    </p>
  );
}
