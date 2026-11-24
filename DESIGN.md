# DESIGN.md — Ramsig Seguridad Privada (Architectural Capsule Design System)

This document defines the visual language, strict prohibitions, CSS design tokens, brand mark handling, and Atomic Design component architecture for the Ramsig Seguridad Privada web platform, spanning `src/app/globals.css`, `src/design-system/`, `src/components/{atoms,molecules,organisms,templates}/`, and `src/app/`.

---

## 1. Visual Language

- **System**: Architectural Capsule Design System (Dark-First Black & Gold Spy-Film Edition).
- **Color Model**: Dark-first pure flat `oklch()` surfaces (`--surface-0` through `--surface-3` in obsidian, charcoal, slate-charcoal, and tactical graphite tones, plus `--surface-inverse` in warm champagne ivory `#F3ECDD`) and solid metallic gold pigments (`--accent-gold`, `--accent-gold-hover`, `--hero-highlight`) harmonized with the Ramsig shield-and-wing emblem (`#282828` / `#4B4B4B` faceted shield, `#C7AA64` / `#CFB273` stylized wing and wordmark). Hierarchy and structural separation are achieved strictly through tonal surface stepping (`>= 0.045 L` between adjacent canvas levels: `0.115 -> 0.145 -> 0.190 -> 0.238 -> 0.290`) and generous whitespace — never through lines, borders, or shadows.
- **Typography**: Local editorial typography stacks with zero external font requests:
  - `--font-sans`: `"Helvetica Neue", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif`
  - `--font-serif`: `"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif`
  - `--font-mono`: `"SF Mono", "Menlo", "Monaco", "Consolas", monospace` *(explicitly enabled for tabular operational indices, metric figures, and dossier codes such as `01`–`03`, `+600`, and `+40`)*
- **Geometry**: Capsule and soft architectural radii (`--radius-xs: 6px`, `--radius-sm: 12px`, `--radius-md: 18px`, `--radius-pill: 999px`).

---

## 2. Strictly Forbidden

1. **ZERO borders or hairline dividers**: Do not use `border`, `border-top`, `border-bottom`, `border-left`, `border-right`, `<hr>`, divider `outline`s, or `1px` pseudo-element rules anywhere. The global reset on `*, *::before, *::after` enforces `border-width: 0; border-style: none; border-color: transparent;`. Keyboard focus indicators use surface emphasis plus `outline: 2px solid var(--accent-gold); outline-offset: 3px;` strictly on `:focus-visible` (`0px` at rest).
2. **ZERO gradients**: Do not use `linear-gradient`, `radial-gradient`, or `conic-gradient` in CSS, and do not use `<linearGradient>` or `<radialGradient>` in SVG. The global reset enforces `background-image: none;`.
3. **ZERO shadows**: Do not use `box-shadow`, `text-shadow`, or `filter: drop-shadow(...)` for elevation or separation. The global reset enforces `box-shadow: none; text-shadow: none;`.
4. **ZERO status dots or telemetry clichés**: Do not render pulsing colored dots (`animate-pulse`, `@keyframes pulse` on small circular elements), radar rings, fake live terminal logs, or blinking LED indicators. Express operational readiness exclusively through static typographic metadata and `ServiceBadge` / `SpecMetric` components.
5. **ZERO emojis in UI**: Do not use Unicode emojis anywhere in JSX, domain data files, headings, buttons, badges, or `aria-label` attributes. Use flat monochrome geometric SVGs (`TacticalIcon`) and typographic indices (`01`, `02`, `03`).
6. **ZERO external font requests**: Do not use `next/font/google`, remote `@font-face` URLs, or CDN `<link>` stylesheets for typography. Rely exclusively on local `--font-sans`, `--font-serif`, and `--font-mono` stacks, and enforce `X-DNS-Prefetch-Control: off` in `next.config.ts`.

---

## 3. CSS Design Tokens (`src/app/globals.css`)

All **22** `oklch()` color tokens lie strictly inside the sRGB gamut (`gamut = true`), paired with **3** local font stacks and **4** capsule radii (**29** `:root` CSS custom properties in total).

### Surfaces

| CSS Token | OKLCH | sRGB Hex | Role | Stepping / Notes |
|---|---|---|---|---|
| `--surface-0` | `oklch(0.145 0.006 85)` | `#0B0A07` | Primary obsidian canvas | Base page background (`+0.030 L` above `--hero-bg`) |
| `--surface-1` | `oklch(0.190 0.008 85)` | `#151410` | Charcoal capsule | `+0.045 L` primary section / card layer |
| `--surface-2` | `oklch(0.238 0.010 85)` | `#211E19` | Elevated slate-charcoal | `+0.048 L` nested interactive container |
| `--surface-3` | `oklch(0.290 0.012 82)` | `#2E2B25` | Tactical graphite | `+0.052 L` hover / form field / badge base |
| `--surface-inverse` | `oklch(0.945 0.022 86)` | `#F3ECDD` | Warm champagne ivory plate | High-contrast logo plate & inverse callout blocks |

### Ink

| CSS Token | OKLCH | sRGB Hex | Role | Verified WCAG 2.1 Contrast |
|---|---|---|---|---|
| `--ink-primary` | `oklch(0.955 0.010 86)` | `#F3F0E9` | Primary warm ivory copy | `17.36:1` on `--surface-0`; `12.39:1` on `--surface-3` (AAA) |
| `--ink-secondary` | `oklch(0.790 0.014 85)` | `#BFBAB1` | Supporting body & descriptions | `10.24:1` on `--surface-0`; `7.30:1` on `--surface-3` (AAA) |
| `--ink-muted` | `oklch(0.670 0.012 85)` | `#99958D` | Captions, eyebrows, metadata | `6.61:1` on `--surface-0`; `4.72:1` on `--surface-3` (AA) |
| `--ink-inverse` | `oklch(0.145 0.006 85)` | `#0B0A07` | Text over `--surface-inverse` | `16.85:1` on `--surface-inverse` (AAA) |
| `--ink-on-gold` | `oklch(0.145 0.006 85)` | `#0B0A07` | Text over `--accent-gold` & solid badges | `9.15:1` on `--accent-gold`; `11.08:1` on `--accent-gold-hover` (AAA) |

> **Contrast Rule**: Never place `--ink-primary` (`#F3F0E9`) or `#FFFFFF` over `--accent-gold` (`1.90:1`, fails WCAG) or place `--accent-gold` text over `--surface-inverse` (`1.84:1`, fails WCAG). Always pair `--accent-gold` buttons with `--ink-on-gold`.

### Black-and-Gold Accent & Hero

| CSS Token | OKLCH | sRGB Hex | Role | Verified WCAG 2.1 Contrast |
|---|---|---|---|---|
| `--accent-gold` | `oklch(0.760 0.115 84)` | `#D4AB54` | Brushed metallic gold primary CTA | `9.15:1` on `--surface-0`; `7.65:1` on `--surface-2` (AAA) |
| `--accent-gold-hover` | `oklch(0.815 0.122 85)` | `#E7BC5F` | Interactive gold hover / active | `11.08:1` with `--ink-on-gold` (AAA) |
| `--accent-gold-muted` | `oklch(0.245 0.036 84)` | `#291F0B` | Subtle gold-tinted capsule | `14.26:1` with `--ink-primary` (AAA) |
| `--hero-bg` | `oklch(0.115 0.005 85)` | `#060504` | Matte spy-film hero obsidian | Deepest focal canvas |
| `--hero-fg` | `oklch(0.960 0.008 86)` | `#F4F1EC` | Hero headline & lead ink | `18.14:1` on `--hero-bg` (AAA) |
| `--hero-highlight` | `oklch(0.815 0.122 85)` | `#E7BC5F` | Hero editorial gold emphasis | `11.41:1` on `--hero-bg` (AAA) |

### Ramsig Service Signals

Each of Ramsig's three core security services has a solid signal and a dark subtle surface pair (used without status dots):

| Service Pillar | Solid Token (`OKLCH` / `Hex`) | Subtle Surface Token (`OKLCH` / `Hex`) | Verified WCAG 2.1 Contrast |
|---|---|---|---|
| Guardias Intramuros (`guardias`) | `--signal-guardias`: `oklch(0.765 0.105 85)` (`#D1AD60`) | `--signal-guardias-subtle`: `oklch(0.235 0.032 85)` (`#251D0B`) | `7.87:1` solid on subtle (AAA); `9.34:1` on `--surface-0` |
| Monitoreo 24/7 (`monitoreo`) | `--signal-monitoreo`: `oklch(0.720 0.068 195)` (`#70B2B2`) | `--signal-monitoreo-subtle`: `oklch(0.225 0.025 195)` (`#0C1F1F`) | `7.05:1` solid on subtle (AAA); `8.22:1` on `--surface-0` |
| Custodias de Mercancía (`custodias`) | `--signal-custodias`: `oklch(0.725 0.112 58)` (`#DB945C`) | `--signal-custodias-subtle`: `oklch(0.235 0.038 58)` (`#2B190B`) | `6.70:1` solid on subtle (AA); `7.90:1` on `--surface-0` |

> **Badge Contrast Rule**: When rendering `ServiceBadge` in solid fill mode (`--signal-guardias`, `--signal-monitoreo`, or `--signal-custodias`), always set foreground text to `var(--ink-on-gold)` / `var(--ink-inverse)` (`#0B0A07`, `>= 7.3:1`), never `#FFFFFF`.

### Typography & Geometry Tokens

| CSS Token | Value | Role |
|---|---|---|
| `--font-sans` | `"Helvetica Neue", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif` | Primary interface and body typography |
| `--font-serif` | `"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif` | Editorial display emphasis |
| `--font-mono` | `"SF Mono", "Menlo", "Monaco", "Consolas", monospace` | Tabular metrics, indices, codes |
| `--radius-xs` | `6px` | Compact tags, micro badges |
| `--radius-sm` | `12px` | Form fields, inner tiles |
| `--radius-md` | `18px` | Section & dossier capsules |
| `--radius-pill` | `999px` | Navigation bars, buttons, pills |

### Canonical `src/app/globals.css` `:root` & Global Reset

```css
:root {
  /* Surfaces (Dark-First Black & Gold Spy-Film Palette) */
  --surface-0: oklch(0.145 0.006 85);
  --surface-1: oklch(0.190 0.008 85);
  --surface-2: oklch(0.238 0.010 85);
  --surface-3: oklch(0.290 0.012 82);
  --surface-inverse: oklch(0.945 0.022 86);

  /* Ink */
  --ink-primary: oklch(0.955 0.010 86);
  --ink-secondary: oklch(0.790 0.014 85);
  --ink-muted: oklch(0.670 0.012 85);
  --ink-inverse: oklch(0.145 0.006 85);
  --ink-on-gold: oklch(0.145 0.006 85);

  /* Black-and-Gold Accent & Hero */
  --accent-gold: oklch(0.760 0.115 84);
  --accent-gold-hover: oklch(0.815 0.122 85);
  --accent-gold-muted: oklch(0.245 0.036 84);
  --hero-bg: oklch(0.115 0.005 85);
  --hero-fg: oklch(0.960 0.008 86);
  --hero-highlight: oklch(0.815 0.122 85);

  /* Ramsig Service Signals */
  --signal-guardias: oklch(0.765 0.105 85);
  --signal-guardias-subtle: oklch(0.235 0.032 85);
  --signal-monitoreo: oklch(0.720 0.068 195);
  --signal-monitoreo-subtle: oklch(0.225 0.025 195);
  --signal-custodias: oklch(0.725 0.112 58);
  --signal-custodias-subtle: oklch(0.235 0.038 58);

  /* Local Editorial Typography Stacks (Zero External Requests) */
  --font-sans: "Helvetica Neue", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  --font-serif: "Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif;
  --font-mono: "SF Mono", "Menlo", "Monaco", "Consolas", monospace;

  /* Capsule Radii */
  --radius-xs: 6px;
  --radius-sm: 12px;
  --radius-md: 18px;
  --radius-pill: 999px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border-width: 0;
  border-style: none;
  border-color: transparent;
  background-image: none;
  box-shadow: none;
  text-shadow: none;
}

:focus-visible {
  outline: 2px solid var(--accent-gold);
  outline-offset: 3px;
}

.surface-0 { background-color: var(--surface-0); color: var(--ink-primary); }
.surface-1 { background-color: var(--surface-1); color: var(--ink-primary); }
.surface-2 { background-color: var(--surface-2); color: var(--ink-primary); }
.surface-3 { background-color: var(--surface-3); color: var(--ink-primary); }
.surface-inverse { background-color: var(--surface-inverse); color: var(--ink-inverse); }
.surface-accent-subtle { background-color: var(--accent-gold-muted); color: var(--ink-primary); }
```

### TypeScript Token Contract (`src/design-system/tokens.ts`)

```ts
export type SurfaceLevel = 0 | 1 | 2 | 3 | "inverse";
export type ServiceId = "guardias" | "monitoreo" | "custodias";
export type SectorId = "industria" | "construccion" | "logistica";

export interface ColorTokenSpec {
  cssVar: string;
  oklch: string;
  hex: string;
  role: string;
}

export interface DesignTokensMetadata {
  surfaces: Record<SurfaceLevel, ColorTokenSpec>;
  signals: Record<ServiceId, { solid: ColorTokenSpec; subtle: ColorTokenSpec }>;
  radii: Record<"xs" | "sm" | "md" | "pill", string>;
}

export const DESIGN_TOKENS: DesignTokensMetadata = {
  // Mirrors the 22 color tokens and 4 capsule radii in src/app/globals.css
  // ...
};
```

---

## 4. Brand Mark & Imagery Rules

1. **Brand Logo Lockup (`public/images/ramsig-logo.png`, `90x73` RGBA)**:
   - The official Ramsig asset combines dark charcoal shield facets (`#282828` / `#4B4B4B`, `12.53:1` / `7.42:1` on `#F3ECDD`), a dark charcoal `"SEGURIDAD PRIVADA"` subtitle (`#2B292B`, `12.27:1` on `#F3ECDD`), and a metallic gold wing and `"RAMSIG"` wordmark (`#C7AA64`, `1.91:1` on `#F3ECDD` vs `8.83:1` on `#0B0A07`).
   - Because placing the raw PNG directly onto `#0B0A07` hides the dark shield and `"SEGURIDAD PRIVADA"` subtitle (`1.34:1–1.37:1`), `BrandMark` MUST render `public/images/ramsig-logo.png` at native crisp dimensions (`<= 90px` width, never upscaled) inside a borderless `--surface-inverse` (`#F3ECDD`) capsule plate (`--radius-sm` or `--radius-pill`) in `CapsuleNavbar` and `EditorialFooter`.
   - Always pair that inverse capsule plate with adjacent crisp HTML/CSS `"RAMSIG"` wordmark typography (`--ink-primary` at `17.36:1` or `--accent-gold` at `9.15:1`) on the dark surface so both the shield emblem and the brand name achieve AAA contrast simultaneously.
2. **Oversized Display Lockups**: Large hero brand statements or monograms must use crisp HTML/CSS typography or clean geometric vector geometry — never upscaled `90x73` raster imagery.
3. **Editorial Media & Asset Hygiene**:
   - All photographic or raster media must be rendered with semantic `<img>` elements inside `overflow: hidden` capsule frames (`--radius-md` / `--radius-sm`). Never use CSS `background-image: url(...)`, which is stripped by the universal reset.
   - Apply zero `drop-shadow` filters and zero off-brand placeholders: residential aerial hero videos and macOS desktop screenshots (`Captura de pantalla...`) are strictly prohibited.
4. **Monochrome Geometric Iconography (`TacticalIcon`)**:
   - All service, sector, and navigation icons use flat monochrome inline SVGs bound to `currentColor`, with zero `<linearGradient>`, zero `<radialGradient>`, and zero `<feDropShadow>`.

---

## 5. Atomic Design Component Architecture

### 5.1 Layering & Strict Dependency Direction

Dependencies flow strictly downward across layers:

`src/design-system/` <- `src/components/atoms/` <- `src/components/molecules/` <- `src/components/organisms/` <- `src/components/templates/` <- `src/app/`

- **`atoms/`** may import only from `src/design-system/` and React.
- **`molecules/`** may compose only `atoms/` and `src/design-system/` (never import `organisms/`).
- **`organisms/`** must compose `molecules/`, `atoms/`, and `src/design-system/` rather than duplicating atomic/molecular markup inline.
- **`templates/`** assemble `organisms/` and coordinate cross-section client-side state (such as passing preselected `ServiceId` / `SectorId` from service/sector cards into `QuoteBriefSection` via `#contacto`).
- **`src/app/page.tsx`** remains a Server Component passing domain structures from `src/design-system/services.ts` into `LandingTemplate`.

### 5.2 Content Seam Hygiene

Presentational components under `src/components/**` must never hardcode narrative Spanish copy, metric tables, office lists, contact channels, or raw hex colors. All domain data (`SERVICES`, `SECTORS`, `IMPACT_METRICS`, `STATE_OFFICES`, `COMPLIANCE_ITEMS`, `CONTACT_INFO`) is centralized in `src/design-system/services.ts`, while visual primitives (`Surface`, `ServiceBadge`, `SpecMetric`) live in `src/design-system/Primitives.tsx`.

### 5.3 Explicit Exclusion Guardrails

Do not import or replicate light-mode palettes (`#FFFFFF` / `#F4F3F1` / `#0E2D78`), `0px` sharp-cornered geometry, external Google Font imports, `--font-mono` prohibitions, or localized `border-*` hairline exceptions from unrelated residential or editorial templates. Every surface, corner radius, and font stack in Ramsig must strictly obey Sections 1–3 of this specification.

### 5.4 Canonical File Map

```text
src/
├── design-system/
│   ├── tokens.ts               # SurfaceLevel, ServiceId, SectorId, DESIGN_TOKENS
│   ├── services.ts             # Spanish B2B domain data (services, sectors, metrics, offices, compliance, contacts)
│   └── Primitives.tsx          # Surface, ServiceBadge (var(--ink-on-gold)), SpecMetric
├── components/
│   ├── atoms/
│   │   ├── BrandMark.tsx       # Borderless --surface-inverse plate + crisp HTML/CSS "RAMSIG" lockup
│   │   ├── Button.tsx          # Gold / surface-2 / inverse capsule CTAs (min-height: 44px)
│   │   ├── Eyebrow.tsx         # Monospace uppercase section index/label
│   │   ├── Heading.tsx         # Semantic h1–h4 typographic scale
│   │   ├── ServiceBadge.tsx    # Atomic wrapper over service signal tokens (zero dots)
│   │   └── TacticalIcon.tsx    # Flat monochrome geometric SVGs (currentColor)
│   ├── molecules/
│   │   ├── NavLinkPill.tsx     # Capsule navigation anchor pill
│   │   ├── SpecMetricCard.tsx  # Monospace figure + descriptive caption on tonal surface
│   │   ├── ServicePillarCard.tsx
│   │   ├── SectorCard.tsx      # Industria, Obras de Construcción, Parques Logísticos card
│   │   ├── ModalidadRow.tsx    # Escort modality row (Física CAPUFE / Cabinera / Virtual GPS)
│   │   ├── FormField.tsx       # Borderless surface-3 input, textarea, and custom SVG select
│   │   └── ContactChannelItem.tsx
│   ├── organisms/
│   │   ├── CapsuleNavbar.tsx   # Sticky capsule header + accessible mobile drawer (zero overflow at 390px)
│   │   ├── HeroShowcase.tsx    # Single semantic <h1> on --hero-bg (#060504) with gold emphasis & CTAs
│   │   ├── ServicesArchitecture.tsx # Interactive 3-pillar dossier (Guardias, Monitoreo, Custodias)
│   │   ├── SectorsGrid.tsx     # 3 target B2B verticals with quote prefill action
│   │   ├── ImpactAndCoverage.tsx # 6 verified metrics, 5 state offices, SSPC/DGSP/REPSE/CAPUFE readiness
│   │   ├── QuoteBriefSection.tsx # Tabbed B2B Quote vs Bolsa de Trabajo form + verified Naucalpan contacts
│   │   └── EditorialFooter.tsx # Complete footer with nav, contacts, and interactive Aviso de Privacidad
│   └── templates/
│       └── LandingTemplate.tsx # Client state coordinator connecting service/sector CTAs to #contacto
└── app/
    ├── globals.css             # 29 :root tokens, 6-prohibition global reset, surface & layout classes
    ├── layout.tsx              # lang="es", JSON-LD Organization metadata, zero external font links
    └── page.tsx                # Server Component entry rendering LandingTemplate
```

### 5.5 Accessibility & Responsive Layout Invariants

- **Semantic controls & landmarks**: Exactly one `<h1>` per page (`HeroShowcase`), native `<button>` and `<a href>` controls (`tel:+525535578304`, `mailto:ventas@ramsigseguridad.com`, valid section anchors), and complete `<header>`, `<main>`, `<nav>`, and `<footer>` landmarks.
- **Touch targets & focus**: All interactive controls enforce `min-height: 44px` and rely on `:focus-visible` (`2px solid var(--accent-gold)`, `3px` offset).
- **Reduced motion**: Respect `@media (prefers-reduced-motion: reduce)` by disabling non-essential transitions and smooth-scroll animations.
- **Zero horizontal overflow**: Fluid capsule grids and responsive mobile drawer navigation must preserve `document.documentElement.scrollWidth <= window.innerWidth` across `390x844` (mobile) and `1440x900` (desktop).
