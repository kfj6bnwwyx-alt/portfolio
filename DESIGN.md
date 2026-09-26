---
version: 0.1
name: Brent Brooks Portfolio
description: "Quiet, flat, light interface. Near-black on white, one cool-gray accent, Geist type, 8px grid, uniform 400ms motion."
implementation: site.css (+ gate.js for the password screen)

colors:
  bg: "#ffffff"
  surface: "#f4f4f6"
  surface-hover: "#ececf0"
  border: "#e5e5ea"
  text: "#0d0d0d"            # 19.4:1 on bg
  text-secondary: "#5d5d6b"  # 6.5:1 — body copy
  text-tertiary: "#6e6e80"   # 5.0:1 — meta, labels, nav (4.55:1 on surface)
  primary: "#8e8ea0"         # 3.2:1 — decoration only: rules, dots, underlines
  on-primary: "#ffffff"
  action: "#0d0d0d"          # filled buttons
  on-action: "#ffffff"

typography:
  fontFamily: "Geist, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
  fontFamilyMono: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
  display:    { fontSize: 48px, fontWeight: 600, lineHeight: 1.2, letterSpacing: -0.02em }
  hero:       { fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 600, lineHeight: 1.1, letterSpacing: -0.02em }
  heading:    { fontSize: 32px, fontWeight: 600, lineHeight: 1.2 }
  subheading: { fontSize: 24px, fontWeight: 600, lineHeight: 1.2 }
  body-lg:    { fontSize: 18px, fontWeight: 400, lineHeight: 1.6 }
  body:       { fontSize: 16px, fontWeight: 400, lineHeight: 1.5 }
  small:      { fontSize: 14px, fontWeight: 400, lineHeight: 1.5 }
  caption:    { fontSize: 13px, fontWeight: 400, lineHeight: 1.5 }

spacing:
  base: 8px
  scale: [8, 16, 24, 32, 40, 48, 64, 80, 96]

radius:
  sm: 5px      # images, cards, inputs
  full: 999px  # buttons, chips, counters

shadow: none

motion:
  duration: 400ms
  easing: ease

breakpoints: [768px]
---

## Principles

**Calculated simplicity.** Every element earns its place. No gradients, no shadows, no decorative motion. Surfaces separate by spacing first, a flat gray fill second, a 1px hairline last.

**Let the work be the color.** The chrome is near-black, white, and cool gray so that project imagery carries all the chroma on the page.

**Type does the hierarchy.** One typeface: Geist (variable, loaded from Google Fonts), falling back to the system stack. Hierarchy comes from size and weight (600 for headings, 500 for labels, 400 for copy) — never uppercase tracking or color alone.

**Calm, predictable motion.** One duration (400ms), one curve (`ease`). Motion confirms state; it never performs. Honors `prefers-reduced-motion`.

## Color

| Token | Hex | Use |
|---|---|---|
| `bg` | #ffffff | Page background |
| `surface` | #f4f4f6 | Image placeholders, sliders, secondary buttons |
| `border` | #e5e5ea | Hairlines: nav on scroll, footer, outlined controls |
| `text` | #0d0d0d | Headlines, primary labels, emphasis |
| `text-secondary` | #5d5d6b | Paragraph copy |
| `text-tertiary` | #6e6e80 | Nav links, card categories, footer, back links |
| `primary` | #8e8ea0 | Blockquote rules, slider dots, link underlines |
| `action` | #0d0d0d | Filled button background |

`primary` fails AA for text (3.2:1) — never set body or label text in it, and never put white text on it.

## Components

Class names are the live markup's (see `site.css`).

- **Topbar** (`.topbar`) — 64px, sticky, white, no rule. Wordmark 16/600 left; nav links 14px `text-tertiary`, active/hover `text`. No underline bar.
- **Hero** (`.hero-mo`) — 128px top padding. Headline `clamp(44px, 7vw, 80px)`/600, -0.03em, line-height 1.05. Two-tone: the second clause (`.hero-mo-h-dim`) steps back to `text-tertiary`. Intro column max 640px, 18/1.6; first paragraph in `text`, the rest `text-secondary`.
- **Facts** (`.facts`) — one row of label/value pairs between two hairlines, 14px; labels `text-tertiary`, links underlined in `primary`.
- **Selected work** (`.worklist`) — 2-column image grid; the lead item spans full width at 21:9. Images `radius-sm` on `surface`, dim to .85 on hover. Title 18/500 (lead 24/600), meta 14px `text-tertiary`.
- **Filter chips** (`.filter-chip`) — 36px pills on `surface`; active is filled `action` with white text. Count in 12px gray.
- **Project rows** (`.proj-row`) — hairline-separated list; title 24/500, meta right-aligned 14px gray; arrow fades in on hover.
- **Case study** — breadcrumbs 14px gray; title `clamp(36px, 5vw, 56px)`/600; body column max 720px, 18/1.6 `text-secondary`, `strong` lifts to `text`; principle lists get a 2px `primary` left rule. Images `radius-sm`, no border. "Next project" 32/600 under a hairline.
- **Closing band** (`.closing`) — `surface` panel, `radius-sm`, 40px/600 line + filled pill CTA.
- **Button / CTA** — pill (`radius-full`), 44px min height, 0×24 padding, 14/500. Filled `action` bg, hover opacity .8.
- **Footer** (`.foot`) — hairline top, 14px `text-tertiary`, links darken on hover.
- **Password gate** (`gate.js`) — white overlay, centered `surface` card (400px, `radius-sm`), 44px input with `border` → `text` on focus, full-width filled pill button, error in `#b42318` (6.0:1 on surface).
- **Focus** — 2px `text` outline, 3px offset, `:focus-visible` only.

## Layout

Max content width 1140px, centered, no side rails. Gutters 40px desktop, 16px below 768px. Vertical rhythm in 8px steps; sections breathe at 64–96px.
