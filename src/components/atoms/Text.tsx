import type { ReactNode } from "react";

export function Text({
  muted = false,
  children,
}: {
  muted?: boolean;
  children: ReactNode;
}) {
  return <p className={muted ? "text text--muted" : "text"}>{children}</p>;
}
