import type { MouseEventHandler, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "inverse" | "ghost";
export type ButtonSize = "md" | "lg";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  href,
  target,
  rel,
  type = "button",
  disabled = false,
  ariaLabel,
  className,
  onClick,
  children,
}: ButtonProps) {
  const classes = [
    "btn",
    `btn--${variant}`,
    size === "lg" ? "btn--lg" : "",
    fullWidth ? "btn--full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href !== undefined) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={classes}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement> | undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
      onClick={onClick as MouseEventHandler<HTMLButtonElement> | undefined}
    >
      {children}
    </button>
  );
}
