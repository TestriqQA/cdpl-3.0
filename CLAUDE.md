# CLAUDE.md

Working instructions for Claude / agent sessions on this repository.
Keep this file short. It is **rules**, not project docs.

## Project

- Cinute Digital (CDPL) marketing + LMS site.
- Next.js 16 App Router + Turbopack, React 19, Sanity 5 (Studio at `/cms`).
- Production branch: `main` → `https://www.cinutedigital.com`.
- Integration branch: `develop`.
- Live SEO/GEO audit lives in `docs/seo-audit/`. **Read `docs/seo-audit/progress.md` first** to load current state; it tracks every active and deferred backlog item.

## Commit-message rules

- **Do NOT add a `Co-Authored-By` trailer to commits.** Commits must be attributed only to the user's git identity. The "and claude committed" UI hint that GitHub shows when this trailer is present is not wanted.
- Conventional-commit prefixes are used (`feat:` / `fix:` / `docs:` / `chore:` etc.) — match the style of recent commits on `develop`.
- Reference the backlog ID (`BLG-###`) in commit bodies when the change closes one.

## Workflow

- Branch-per-fix off `develop`, named `fix/blg-<id>-<slug>`.
- Trivial changes may land directly on `develop` if the live deploy is healthy.
- The user owns the `develop` → `main` merge (this is what triggers the production deploy on Vercel).
- **Do not run `next build` or `ANALYZE=true` locally** — the production Sanity API token must not be exercised from a dev machine. Builds happen on Vercel; the user reports the result back. Typecheck locally only: `NODE_OPTIONS=--max-old-space-size=8192 npx tsc --noEmit` (default heap OOMs).

## Documentation hygiene

- After any change that closes / advances a backlog item, update `docs/seo-audit/progress.md` on the `seo-audit/cycle-1-discovery` branch (header line + activity-log entry).
- Commit doc changes on that audit branch — never mix audit-doc commits with code commits on `develop`.
