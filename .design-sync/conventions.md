# Brent Brooks design system — how to build with it

Quiet, flat, light: near-black on white, cool grays, Geist (loaded from Google Fonts via `styles.css`; `--font-sans`), 8px grid, pill actions, no shadows. Every component emits the real brentbrooks.com markup and is styled by the site's own stylesheet (`styles.css` → `_ds_bundle.css`).

## Setup

Wrap every screen in one `Site` (centers content at 1140px). Put `Topbar` first, sections inside `<main className="page">`, `Footer` last. Components that say "must be inside X" only get their spacing from that parent:

- `WorkCard` → inside `SelectedWork`
- `ProjectRow` → inside `ProjectList`
- `TextBlock`, `ImageBlock`, `Gallery`, `Principles` (inside a `TextBlock`) → inside `CaseBody`

```jsx
const { Site, Topbar, Hero, Facts, SelectedWork, WorkCard, Closing, Footer } = window.BrentBrooksDS;

<Site>
  <Topbar links={[{ label: 'Work', href: 'recent-work.html', active: true }, { label: 'Contact', href: 'contact.html' }]} />
  <main className="page">
    <Hero title={['Recent', 'work.']} dimTitle={['15 projects.']} paragraphs={['Product design, UI/UX, and design systems.']} />
    <SelectedWork allLabel="All 15 projects">
      <WorkCard lead title="Client Portal" discipline="Product Design" client="Clear Street" image="https://brentbrooks.com/images/Macbook+Air+(2022)@2x.png" href="#" />
    </SelectedWork>
    <Closing line="Building a design team, or rebuilding how one works with AI? That is the work I want." />
  </main>
  <Footer />
</Site>
```

## Styling your own layout glue

Style with props first. For anything the components don't cover, use the CSS custom properties from `styles.css`. There are no utility classes, and you shouldn't invent class names.

| Family | Tokens |
|---|---|
| Color | `--color-bg` `--color-surface` `--color-surface-hover` `--color-border` `--color-text` `--color-text-secondary` (body copy) `--color-text-tertiary` (labels, meta) `--color-primary` (decoration only; fails AA as text) `--color-action` / `--color-on-action` (filled buttons) |
| Type | `--font-sans`; sizes `--text-heading` 32 `--text-subheading` 24 `--text-body-lg` 18 `--text-body` 16 `--text-small` 14 `--text-caption` 13; weights `--weight-heading` 600 `--weight-medium` 500 |
| Space (8px grid) | `--space-1` 8 · `-2` 16 · `-3` 24 · `-4` 32 · `-5` 40 · `-6` 48 · `-8` 64 · `-10` 80 · `-12` 96 · `-16` 128; side gutter `--gutter` |
| Shape / motion | `--radius-sm` 5px (images, panels) · `--radius-full` (pills); `--duration` 400ms + `--ease` for every transition |

## Rules

- Keep copy in sentence case. Never use uppercase-tracked labels.
- Use one filled black `Button` (or `Closing`) per view. Links are text: gray, or underlined in `--color-primary`.
- Use no shadows and no gradients. Separate things with spacing first, then a `--color-surface` fill, then a 1px `--color-border` hairline.
- Keep headlines short. In `Hero`, put the statement in `title` and the softer second clause in `dimTitle`.
- Images: use real project screens (`https://brentbrooks.com/images/…`), never placeholder boxes.

## Where the truth lives

- `styles.css` / `_ds_bundle.css`: every token and every component rule.
- `components/<group>/<Name>/<Name>.prompt.md`: props and verified examples for each component. Groups: Layout, Home, Work index, Case study.
