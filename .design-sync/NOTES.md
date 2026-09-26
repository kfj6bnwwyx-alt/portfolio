# design-sync notes — brentbrooks.com

## Setup
- The DS package lives at `design-system/` (`@brentbrooks/ds`). It is **not** the website: the site is static HTML + `site.css`. The package's components emit the site's exact markup/class names, and its build copies `../site.css` to `dist/styles.css` — so **`site.css` is the single source of styling**. Any site restyle → `cd design-system && npm run build` → re-sync.
- Build: `cd design-system && npm install && npm run build` (tsc + copy). Converter: `--node-modules design-system/node_modules --entry ./design-system/dist/index.js`.
- Render check: cached chromium is build 1208 → `playwright@1.58.2` is installed into `.ds-sync/`. Run validate/capture with `NODE_PATH=.ds-sync/node_modules`.
- Grouping comes from category-only stubs in `.design-sync/docs/<Name>.md` (`docsDir: ../.design-sync/docs`). Prompts are still synthesized from JSDoc + previews.
- `MetaParts` (in `components/Meta.tsx`) is an internal helper, deliberately not exported from `index.ts`.

## Fixes applied during the first sync (2026-09-26)
- `.closing-cta` needed `width: fit-content` (added to `site.css`): in a flex column the Button stretched to full width.
- Every component except Button uses `cardMode: column`. SelectedWork, Site, CaseBody and Gallery also need `viewport: 900x1400`, because at the default 700px their compositions are cut off.

## Re-sync log
- 2026-09-26 (re-sync 1): styling-only (Geist + frosted topbar). Diff: 19 verified-by-upload, 0 changed; upload = styling + README. Updated the "system font" claim in conventions.md to Geist (user-approved). Contact sheets eyeballed: Geist renders in every card.
- The local `ds-bundle/_ds_sync.json` equals the uploaded anchor right after an upload, so it can be copied to `.design-sync/.cache/remote-sync.json` without a `get_file` round-trip, provided no rebuild has happened since. Check `bundleSha12` to confirm.

## Known render warns
- None outstanding. (`[GRID_OVERFLOW]` on Hero was resolved by `cardMode: column`.)

## Re-sync risks
- **Remote images:** previews and the conventions header point at `https://brentbrooks.com/images/…`. If those move or the site blocks image hotlinking, cards go blank. Check a few URLs return 200 before grading.
- **site.css drift:** styling changes don't invalidate grades (by design). After any visual change to `site.css`, eyeball the contact sheets, because carried-forward grades won't catch it.
- **Markup drift:** if a live page's HTML structure changes (class names), update the matching component in `design-system/src/components/` to emit the same markup, or the design agent will build things that don't match the site.
- `gate.js` (password overlay) is intentionally not a component.
- **Remote font:** Geist loads from Google Fonts via the `@import` at the top of `site.css` (validate prints `[FONT_REMOTE]`, which is expected). If that import is removed or moved below other rules, designs silently fall back to the system font.
- **Two deploy repos:** production deploys from `kfj6bnwwyx-alt/portfolio-vercel`, not this repo. A `site.css` change must land in both, or the design system and the live site drift apart.
