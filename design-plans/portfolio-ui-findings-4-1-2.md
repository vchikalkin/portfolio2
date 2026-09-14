# Portfolio UI findings 4 / 1 / 2

Written against: c184f07

Preserve visual identity; no redesign; no invented achievements. Finding 3 (Services.lead copy) excluded.

## Evidence chain

- Surface: `/en` and `/ru` — desktop, phone (~390), tablet (768)
- Problem: (4) section nav missing below `lg`; (1) empty experience cards overpower work; (2) services CTA weaker than Button system
- Design evidence: `SiteHeader` nav `lg:flex` only; `ExperienceContent` vs `ProjectsContent` density; hero/contact `Button` `lg` vs services text link
- Owner: `components/layout/site-header.tsx`, `components/sections/experience-content.tsx`, `components/sections/services-content.tsx`
- Scope and affected surfaces: header chrome; experience cards; services CTA — both locales, all themes
- Uncertainty: none for destinations / density branch / Button reuse

## Design decision

1. Below `lg`, expose the same `navItems` via a disclosure menu (no new IA, no Dialog library).
2. When experience `achievements.length === 0`, use Projects-like density; keep rich card when achievements exist.
3. Services CTA uses the same anchor + `Button` `size="lg"` pattern as hero primary to `#contact`.

## Reuse

- `navItems` / `Nav` i18n; ThemeSwitcher shell (`rounded-md border border-border-subtle bg-background/90`)
- Projects row: `px-4 py-3 md:px-5 md:py-4`, `space-y-3`, `bg-surface/40`
- `Button` from `components/ui/button.tsx`
- Exemplars: `theme-switcher.tsx`, `projects-content.tsx`, `hero-content.tsx`

## Changes

1. `messages/en.json` + `messages/ru.json`
   - Change: add `Nav.menu` / `Nav.menuClose` aria labels
   - Preserve: existing Nav keys
   - Verify: both locales resolve labels

2. `components/layout/site-header.tsx` (and/or `components/controls/mobile-nav.tsx` if split)
   - Change: `lg:hidden` disclosure with same six section links; close on link / Escape / outside click; desktop `lg:flex` nav untouched
   - Preserve: progress bar, brand, theme, locale
   - Verify: ~390 and 768 can jump to sections; `≥ lg` unchanged

3. `components/sections/experience-content.tsx`
   - Change: empty-state density branch matching Projects; rich card when achievements present
   - Preserve: links, roles, periods, timeline when applicable
   - Verify: empty jobs no longer dominate Projects

4. `components/sections/services-content.tsx`
   - Change: replace text CTA with `<a href="#contact"><Button size="lg">…</Button></a>` (ArrowUpRight optional inside)
   - Preserve: title, lead, list, `ctaLabel`
   - Verify: CTA weight matches Contact primary in light + dark

## Scope

- Inherit: both locales, all themes, all viewports for header / experience / services
- Verify: desktop nav, project list density exemplar, Button consumers
- Exclude: Finding 3 copy; spacing-scale refactor; project screenshots; inventing achievements; LinkedIn/icon cleanup

## Validation

- Product: jump to sections on phone/tablet; experience doesn’t overpower projects when empty; services CTA reads as primary action
- Interface: `/en` + `/ru`; dark + light; ~390, 768, desktop `≥ lg`
- System: one nav destination set; Button remains CTA owner; Projects remains density exemplar
- Repository: `pnpm lint` → clean

## Stop conditions

- Stop if product insists scroll-only mobile (no menu)
- Stop if user fills real achievements and asks to skip density branch

## Design documentation

- After acceptance: record “below `lg`, section nav via disclosure using same `navItems`” and “empty experience uses Projects density” in this plan file; `DESIGN.md` only if/when that doc exists
