export type SurfaceLevel = 0 | 1 | 2 | 3 | "inverse";
export type ServiceId = "guardias" | "monitoreo" | "custodias";
export type SectorId = "industria" | "construccion" | "logistica";
export type RadiusScale = "xs" | "sm" | "md" | "pill";
export type FontRole = "sans" | "serif" | "mono";

export type SurfaceClassName =
  | "surface-0"
  | "surface-1"
  | "surface-2"
  | "surface-3"
  | "surface-inverse";

export type TacticalIconName =
  | "shield"
  | "radar"
  | "truck"
  | "factory"
  | "crane"
  | "warehouse"
  | "check"
  | "arrow-right"
  | "chevron-down"
  | "phone"
  | "mail"
  | "map-pin"
  | "clock"
  | "menu"
  | "close"
  | "lock"
  | "message-square"
  | "file-text"
  | "award";

export interface ColorTokenSpec {
  cssVar: string;
  oklch: string;
  hex: string;
  role: string;
}

export interface InkTokenSpec extends ColorTokenSpec {
  contrastNote: string;
}

export interface FontTokenSpec {
  cssVar: string;
  value: string;
  role: string;
}

export interface DesignTokensMetadata {
  surfaces: Record<SurfaceLevel, ColorTokenSpec>;
  inks: Record<"primary" | "secondary" | "muted" | "inverse" | "onGold", InkTokenSpec>;
  accents: Record<"gold" | "goldHover" | "goldMuted", ColorTokenSpec>;
  hero: Record<"bg" | "fg" | "highlight", ColorTokenSpec>;
  signals: Record<ServiceId, { solid: ColorTokenSpec; subtle: ColorTokenSpec }>;
  fonts: Record<FontRole, FontTokenSpec>;
  radii: Record<RadiusScale, string>;
}

export const DESIGN_TOKENS: DesignTokensMetadata = {
  surfaces: {
    0: {
      cssVar: "--surface-0",
      oklch: "oklch(0.145 0.006 85)",
      hex: "#0B0A07",
      role: "Primary obsidian canvas",
    },
    1: {
      cssVar: "--surface-1",
      oklch: "oklch(0.190 0.008 85)",
      hex: "#151410",
      role: "Charcoal capsule",
    },
    2: {
      cssVar: "--surface-2",
      oklch: "oklch(0.238 0.010 85)",
      hex: "#211E19",
      role: "Elevated slate-charcoal",
    },
    3: {
      cssVar: "--surface-3",
      oklch: "oklch(0.290 0.012 82)",
      hex: "#2E2B25",
      role: "Tactical graphite",
    },
    inverse: {
      cssVar: "--surface-inverse",
      oklch: "oklch(0.945 0.022 86)",
      hex: "#F3ECDD",
      role: "Warm champagne ivory plate",
    },
  },
  inks: {
    primary: {
      cssVar: "--ink-primary",
      oklch: "oklch(0.955 0.010 86)",
      hex: "#F3F0E9",
      role: "Primary warm ivory copy",
      contrastNote: "17.36:1 on --surface-0; 12.39:1 on --surface-3 (AAA)",
    },
    secondary: {
      cssVar: "--ink-secondary",
      oklch: "oklch(0.790 0.014 85)",
      hex: "#BFBAB1",
      role: "Supporting body & descriptions",
      contrastNote: "10.24:1 on --surface-0; 7.30:1 on --surface-3 (AAA)",
    },
    muted: {
      cssVar: "--ink-muted",
      oklch: "oklch(0.670 0.012 85)",
      hex: "#99958D",
      role: "Captions, eyebrows, metadata",
      contrastNote: "6.61:1 on --surface-0; 4.72:1 on --surface-3 (AA)",
    },
    inverse: {
      cssVar: "--ink-inverse",
      oklch: "oklch(0.145 0.006 85)",
      hex: "#0B0A07",
      role: "Text over --surface-inverse",
      contrastNote: "16.85:1 on --surface-inverse (AAA)",
    },
    onGold: {
      cssVar: "--ink-on-gold",
      oklch: "oklch(0.145 0.006 85)",
      hex: "#0B0A07",
      role: "Text over --accent-gold & solid badges",
      contrastNote: "9.15:1 on --accent-gold; 11.08:1 on --accent-gold-hover (AAA)",
    },
  },
  accents: {
    gold: {
      cssVar: "--accent-gold",
      oklch: "oklch(0.760 0.115 84)",
      hex: "#D4AB54",
      role: "Brushed metallic gold primary CTA",
    },
    goldHover: {
      cssVar: "--accent-gold-hover",
      oklch: "oklch(0.815 0.122 85)",
      hex: "#E7BC5F",
      role: "Interactive gold hover / active",
    },
    goldMuted: {
      cssVar: "--accent-gold-muted",
      oklch: "oklch(0.245 0.036 84)",
      hex: "#291F0B",
      role: "Subtle gold-tinted capsule",
    },
  },
  hero: {
    bg: {
      cssVar: "--hero-bg",
      oklch: "oklch(0.115 0.005 85)",
      hex: "#060504",
      role: "Matte spy-film hero obsidian",
    },
    fg: {
      cssVar: "--hero-fg",
      oklch: "oklch(0.960 0.008 86)",
      hex: "#F4F1EC",
      role: "Hero headline & lead ink",
    },
    highlight: {
      cssVar: "--hero-highlight",
      oklch: "oklch(0.815 0.122 85)",
      hex: "#E7BC5F",
      role: "Hero editorial gold emphasis",
    },
  },
  signals: {
    guardias: {
      solid: {
        cssVar: "--signal-guardias",
        oklch: "oklch(0.765 0.105 85)",
        hex: "#D1AD60",
        role: "Guardias Intramuros solid signal",
      },
      subtle: {
        cssVar: "--signal-guardias-subtle",
        oklch: "oklch(0.235 0.032 85)",
        hex: "#251D0B",
        role: "Guardias Intramuros subtle capsule",
      },
    },
    monitoreo: {
      solid: {
        cssVar: "--signal-monitoreo",
        oklch: "oklch(0.720 0.068 195)",
        hex: "#70B2B2",
        role: "Monitoreo 24/7 solid signal",
      },
      subtle: {
        cssVar: "--signal-monitoreo-subtle",
        oklch: "oklch(0.225 0.025 195)",
        hex: "#0C1F1F",
        role: "Monitoreo 24/7 subtle capsule",
      },
    },
    custodias: {
      solid: {
        cssVar: "--signal-custodias",
        oklch: "oklch(0.725 0.112 58)",
        hex: "#DB945C",
        role: "Custodias de Mercancía solid signal",
      },
      subtle: {
        cssVar: "--signal-custodias-subtle",
        oklch: "oklch(0.235 0.038 58)",
        hex: "#2B190B",
        role: "Custodias de Mercancía subtle capsule",
      },
    },
  },
  fonts: {
    sans: {
      cssVar: "--font-sans",
      value: '"Helvetica Neue", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
      role: "Primary interface and body typography",
    },
    serif: {
      cssVar: "--font-serif",
      value: '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
      role: "Editorial display emphasis",
    },
    mono: {
      cssVar: "--font-mono",
      value: '"SF Mono", "Menlo", "Monaco", "Consolas", monospace',
      role: "Tabular operational metrics, indices, codes",
    },
  },
  radii: {
    xs: "6px",
    sm: "12px",
    md: "18px",
    pill: "999px",
  },
};

export function getSurfaceClassName(level: SurfaceLevel): SurfaceClassName {
  if (level === "inverse") {
    return "surface-inverse";
  }
  return `surface-${level}`;
}

export function getSurfaceForegroundVar(
  level: SurfaceLevel,
): "var(--ink-inverse)" | "var(--ink-primary)" {
  return level === "inverse" ? "var(--ink-inverse)" : "var(--ink-primary)";
}

export function getElevatedSurface(level: SurfaceLevel): SurfaceLevel {
  switch (level) {
    case 0:
      return 1;
    case 1:
      return 2;
    case 2:
      return 3;
    case 3:
      return 2;
    case "inverse":
      return "inverse";
  }
}

export function getServiceSignalColors(
  service: ServiceId,
  variant: "subtle" | "solid" = "subtle",
): { backgroundVar: string; colorVar: string; accentVar: string } {
  const signalVar = `var(--signal-${service})`;
  const subtleVar = `var(--signal-${service}-subtle)`;

  if (variant === "solid") {
    return {
      backgroundVar: signalVar,
      colorVar: "var(--ink-on-gold)",
      accentVar: signalVar,
    };
  }

  return {
    backgroundVar: subtleVar,
    colorVar: signalVar,
    accentVar: signalVar,
  };
}

export function getServiceBadgeClasses(
  service: ServiceId,
  variant: "subtle" | "solid" = "subtle",
  size: "sm" | "md" = "md",
): string {
  return `service-badge service-badge--${service} service-badge--${variant} service-badge--${size}`;
}
