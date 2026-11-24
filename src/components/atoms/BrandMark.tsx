export interface BrandMarkProps {
  size?: "sm" | "md";
  showSubtitle?: boolean;
  inverseText?: boolean;
  href?: string;
  ariaLabel?: string;
  className?: string;
}

export function BrandMark({
  size = "md",
  showSubtitle = true,
  inverseText = false,
  href,
  ariaLabel = "RAMSIG Seguridad Privada",
  className,
}: BrandMarkProps) {
  const dimensions =
    size === "sm" ? { width: 64, height: 52 } : { width: 74, height: 60 };

  const classes = [
    "brand-mark",
    size === "sm" ? "brand-mark--sm" : "",
    inverseText ? "brand-mark--inverse" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span className="brand-mark__plate surface-inverse radius-sm">
        <img
          src="/images/ramsig-logo.png"
          alt="Emblema RAMSIG Seguridad Privada"
          width={dimensions.width}
          height={dimensions.height}
          className="brand-mark__img"
        />
      </span>
      <span className="brand-mark__text">
        <span className="brand-mark__wordmark">RAMSIG</span>
        {showSubtitle ? (
          <span className="brand-mark__subtitle">SEGURIDAD PRIVADA</span>
        ) : null}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className={classes}>
        {content}
      </a>
    );
  }

  return <div className={classes}>{content}</div>;
}
