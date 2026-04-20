# SZL Roadmap

Last updated: 2026-04-21

## Current State

The site currently has two primary surfaces:

- `/` is a password-gated preview splash with the animated landing canvas and Instagram link.
- `/home` is the main SZL brand site with hero, positioning, services, about copy, collectives, work, and contact sections.

The password gate is controlled by `SITE_PASSWORD`. When the password is not set, `/home` redirects back to `/`, which keeps the public-facing experience on the splash page.

## Completed

- Built the interactive landing surface for the preview page.
- Added preview gating with cookie-based access control.
- Moved password handling to server-only environment usage.
- Refocused the homepage into an SZL brand site instead of a starter Next.js scaffold.
- Wired the main site to structured JSON content in `content/site.json`, `content/team.json`, `content/work.json`, and `content/collectives.json`.
- Added sections for work, about, collectives, and contact within the `/home` experience.

## Where We Are Now

- Brand direction and visual language are in place.
- Preview-access flow is implemented.
- Main site layout is implemented.
- Core content model is set up and editable through JSON files.
- Collectives data is partly populated.
- Work portfolio content is still placeholder-level and falls back to mock items when real entries are missing.
- README still contains the default create-next-app boilerplate and has not been rewritten for this project yet.

## In Progress / Incomplete

- Replace placeholder work entries in `content/work.json` with real project content.
- Add real media assets, embeds, thumbnails, client names, and dates for the portfolio.
- Decide whether `/home` should remain gated-only or become the primary public route later.
- Add destination pages or external links for active collectives that do not resolve yet.
- Rewrite project documentation so setup and deployment reflect the actual SZL site.

## Next Up

1. Populate `content/work.json` with real case studies or embeds.
2. Replace remaining placeholder/fallback content with production copy and assets.
3. Decide final routing strategy for launch versus preview mode.
4. Update `README.md` with project-specific setup, env vars, and deployment notes.
5. Add QA passes for mobile layout, content completeness, and launch readiness.
