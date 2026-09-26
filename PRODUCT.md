# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: hiring leaders and recruiters.** VPs, CPOs and heads of design hiring a design leader, plus the recruiters who screen for them. They arrive with a password Brent has shared (the site is gated), often between other candidates, and skim fast. Their job is to judge two things: can he lead a design org, and is he still close enough to the work to raise its quality.
- Secondary, per the contact page copy: advisory and "the right full-time" conversations.

## Product Purpose

The personal portfolio of Brent Brooks, a designer and design leader based in New York. It exists to earn a conversation: success is a qualified visitor reaching out by email or LinkedIn about a leadership, advisory or full-time role.

## Positioning

Two claims, confirmed by Brent as the ones that should land:

1. **Leads and still makes.** "Between making and leading": builds engaged, ambitious teams while staying close enough to the work to push it further.
2. **AI-first practice.** Currently leading four platforms at BNY and rethinking what AI-first means for product designers: the real operational shift from idea to execution, not the hype.

Supporting truth (from site copy): a startup pod inside JPMorgan, product and design leadership at Clear Street, design systems across AIG, agency-side and client-side experience.

## Operating Context

- Access is by password (`gate.js`, a soft client-side gate with a "Request access" mailto). Visitors are expected, not cold.
- Visitors read case studies to judge leadership and craft, then contact by email (me@brentbrooks.com) or LinkedIn (in/brentbillbrooks). Location: New York, NY.

## Capabilities and Constraints

- Static HTML/CSS site: `index.html`, `recent-work.html` (15 projects, filterable by discipline), 15 case-study pages in `recent-work/`, `contact.html`. Styling in `site.css`; filters in `site-ui.js`.
- Production deploys from the `kfj6bnwwyx-alt/portfolio-vercel` repo on Vercel; this repo (`portfolio`) holds the same site plus the `@brentbrooks/ds` React component package synced to Claude Design. Site changes must land in both repos.
- Case-study pages were imported from an older site builder as generic `.block` text/image/gallery sections. No page currently carries a summary, role, client, timeframe or outcome metadata.
- `admin.html` is a legacy page editor that generates the old template and is out of date.

## Evidence on Hand

- 15 case studies with real screens: Clear Street Client Portal, Bank of America Enterprise App, Simplified (AIG), Service Genie (AIG), HINGE Design Language (AIG), AIG Individual Retirement, VALIC Plan Sponsor Admin, Private Client Group (AIG), American Express Digital Card, Time Warner Cable, British Airways, IKEA, Castrol, Desigual, Various Work (agency, incl. Bank of Montreal and Slimfast).
- One quantified outcome exists only as an image in the PCG case (`images/100MM+in+payments…` file): $100MM in payments in 6 months, 35% reduction in PCG call-center volume, 19% reduction to Chase (hard fees). Treat as real, but it needs Brent's confirmation before being restated as text.
- Absent, must not be fabricated: roles and titles per project, dates, team sizes, other metrics, testimonials, client logos, any evidence of the AI-first practice beyond the homepage copy.

## Product Principles

1. **Show the leader and the maker together.** Every page should make both visible; a case study that shows only screens undersells the leadership, and one that shows only process undersells the craft.
2. **Respect a skimming expert.** Hiring leaders decide in seconds; the claim, scope and result come before the narrative.
3. **Only real evidence.** No invented metrics, roles or quotes; missing facts are left missing or asked for.
4. **The work carries the color.** Chrome stays quiet so the project imagery is the focal point.

## Accessibility & Inclusion

No product-specific requirement established; hold WCAG AA contrast and keyboard access as the baseline already set in DESIGN.md.
