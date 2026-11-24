import type { ReactNode } from "react";

export interface ButtonProps {
  href?: string;
  small?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  children: ReactNode;
}

export function Button({
  href,
  small = false,
  type = "button",
  disabled = false,
  children,
}: ButtonProps) {
  const className = small ? "btn btn--sm" : "btn";

  if (href !== undefined) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} className={className}>
      {children}
    </button>
  );
}
