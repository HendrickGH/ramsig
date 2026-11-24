import type { TacticalIconName } from "@/design-system/tokens";

export interface TacticalIconProps {
  name: TacticalIconName;
  size?: number;
  className?: string;
  ariaLabel?: string;
}

function renderIconGeometry(name: TacticalIconName) {
  switch (name) {
    case "shield":
      return (
        <>
          <path d="M12 2.5L4.5 5.75V11.5C4.5 16.4 7.7 20.6 12 21.75C16.3 20.6 19.5 16.4 19.5 11.5V5.75L12 2.5Z" />
          <path d="M9.2 12.1L11.1 14L15 10" />
        </>
      );
    case "radar":
      return (
        <>
          <path d="M12 3A9 9 0 1 0 21 12" />
          <path d="M12 7A5 5 0 1 0 17 12" />
          <path d="M12 12L18.5 5.5" />
          <path d="M11 12H13" />
          <path d="M12 11V13" />
        </>
      );
    case "truck":
      return (
        <>
          <rect x="2" y="6" width="12" height="10" rx="1.5" />
          <path d="M14 9.5H18.5L21.5 12.5V16H14V9.5Z" />
          <path d="M5 18.5H8" />
          <path d="M16 18.5H19" />
          <path d="M2 16H22" />
        </>
      );
    case "factory":
      return (
        <>
          <path d="M3 20V10L9 13V10L15 13V4H21V20H3Z" />
          <path d="M7 16.5H9" />
          <path d="M12 16.5H14" />
          <path d="M17 16.5H19" />
        </>
      );
    case "crane":
      return (
        <>
          <path d="M5 20V4H19" />
          <path d="M5 8H19" />
          <path d="M5 4L10 8" />
          <path d="M16 8V14" />
          <path d="M14 14H18V17H14Z" />
          <path d="M3 20H11" />
        </>
      );
    case "warehouse":
      return (
        <>
          <path d="M3 9.5L12 4L21 9.5V20H3V9.5Z" />
          <path d="M7 20V12H17V20" />
          <path d="M10 15.5H14" />
          <path d="M10 18H14" />
        </>
      );
    case "check":
      return <polyline points="5 12.5 9.8 17 19 7.5" />;
    case "arrow-right":
      return (
        <>
          <path d="M5 12H19" />
          <polyline points="13.5 6.5 19 12 13.5 17.5" />
        </>
      );
    case "chevron-down":
      return <polyline points="6 9 12 15 18 9" />;
    case "phone":
      return (
        <path d="M5.5 4H9L10.8 8.2L8.7 9.7C9.9 12 12 14.1 14.3 15.3L15.8 13.2L20 15V18.5C20 19.3 19.3 20 18.5 20C10.9 19.5 4.5 13.1 4 5.5C4 4.7 4.7 4 5.5 4Z" />
      );
    case "mail":
      return (
        <>
          <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
          <polyline points="3.5 6.5 12 13 20.5 6.5" />
        </>
      );
    case "map-pin":
      return (
        <>
          <path d="M12 21C15.8 17.1 18.5 13.8 18.5 10.2A6.5 6.5 0 0 0 5.5 10.2C5.5 13.8 8.2 17.1 12 21Z" />
          <rect x="10.25" y="8.5" width="3.5" height="3.5" rx="0.75" />
        </>
      );
    case "clock":
      return (
        <>
          <polygon points="12 3 18.36 5.64 21 12 18.36 18.36 12 21 5.64 18.36 3 12 5.64 5.64" />
          <polyline points="12 7.5 12 12 15.5 13.75" />
        </>
      );
    case "menu":
      return (
        <>
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </>
      );
    case "close":
      return (
        <>
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </>
      );
    case "lock":
      return (
        <>
          <rect x="5" y="10.5" width="14" height="10" rx="1.5" />
          <path d="M8 10.5V7.5A4 4 0 0 1 16 7.5V10.5" />
          <line x1="12" y1="14.5" x2="12" y2="16.8" />
        </>
      );
    case "message-square":
      return (
        <path d="M4.5 5H19.5V16H9L4.5 20V5Z" />
      );
    case "file-text":
      return (
        <>
          <path d="M6 3.5H14.5L18.5 7.5V20.5H6V3.5Z" />
          <polyline points="14.5 3.5 14.5 7.5 18.5 7.5" />
          <line x1="9" y1="12" x2="15.5" y2="12" />
          <line x1="9" y1="15.5" x2="15.5" y2="15.5" />
        </>
      );
    case "award":
      return (
        <>
          <polygon points="12 3 17 5.5 18.5 10.5 16.5 14.5 12 16 7.5 14.5 5.5 10.5 7 5.5" />
          <polyline points="8.5 15 7.5 21 12 19 16.5 21 15.5 15" />
        </>
      );
  }
}

export function TacticalIcon({
  name,
  size = 20,
  className,
  ariaLabel,
}: TacticalIconProps) {
  const classes = ["tactical-icon", className].filter(Boolean).join(" ");

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classes}
      role={ariaLabel ? "img" : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
    >
      {renderIconGeometry(name)}
    </svg>
  );
}
