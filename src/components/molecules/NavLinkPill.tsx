export interface NavLinkPillProps {
  href: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export function NavLinkPill({
  href,
  label,
  active = false,
  onClick,
  className,
}: NavLinkPillProps) {
  const classes = [
    "nav-link-pill",
    active ? "nav-link-pill--active" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={href}
      className={classes}
      aria-current={active ? "page" : undefined}
      onClick={onClick}
    >
      {label}
    </a>
  );
}
