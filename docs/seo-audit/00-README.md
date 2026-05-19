# CDPL SEO + GEO Forensic Audit

> **Target:** https://www.cinutedigital.com/
> **Stack:** Next.js 16.1.6 (App Router, Turbopack) + Sanity 5.12.0 + React 19.2.4
> **Started:** 2026-05-19
> **Auditor branch:** `seo-audit/cycle-1-discovery` (Cycle 1 — read-only audit, no code changes)

## Cycle plan

| Cycle | Scope | Branch policy |
| --- | --- | --- |
| **1 — Deep Audit** (this folder) | 14 forensic phases, deliverables only, **NO code changes** | Single branch `seo-audit/cycle-1-discovery`, merged to `develop` once user accepts |
| **2 — Sequenced Sprint Execution** | 7 sprints, fixes from Cycle 1 backlog | **One `fix/<slug>` branch per fix**, off `develop`, merged at user's discretion |
| **3 — CWV + Cleanup** | CWV findings spawned by Cycle 2 + heavy-dep removal | Same per-fix branch policy as Cycle 2 |

## Cycle 1 deliverables (14)

| # | Phase | Doc | Status |
| --- | --- | --- | --- |
| 1 | Discovery & Baseline Snapshot | [01-baseline.md](./01-baseline.md) | ✅ |
| 2 | Codebase Architecture Audit | 02-codebase-audit.md | ⏳ |
| 3 | Technical SEO Audit | 03-technical-seo.md | ⏳ |
| 4 | On-Page SEO Audit | 04-onpage-audit.md | ⏳ |
| 5 | Structured Data & Schema (JSON-LD) | 05-schema-audit.md | ⏳ |
| 6 | Core Web Vitals & Performance | 06-cwv-performance.md | ⏳ |
| 7 | Content & Information Architecture | 07-content-ia.md | ⏳ |
| 8 | GEO / AEO Strategy | 08-geo-aeo-strategy.md | ⏳ |
| 9 | Sanity CMS Schema Audit | 09-sanity-schema-audit.md | ⏳ |
| 10 | GSC Triage | 10-gsc-triage.md | ⏳ |
| 11 | Browser-Based Live Audit | 11-live-browser-audit.md | ⏳ |
| 12 | Competitive Gap Analysis | 12-competitive-gap.md | ⏳ |
| 13 | EdTech India Optimization | 13-edtech-india-optimization.md | ⏳ |
| 14 | Off-Page & Authority Strategy | [14-offpage-strategy.md](14-offpage-strategy.md) | ✅ |
| — | Master fix backlog (199 entries) | [fix-backlog.md](fix-backlog.md) | ✅ |
| — | Cycle 2 sprint roadmap | [sprint-roadmap.md](sprint-roadmap.md) | ✅ |

## Cycle 1 — COMPLETE ✅ (2026-05-19)

All 14 phases delivered. Total backlog: **199 entries** (18 P0 / 75 P1 / 64 P2 / 42 P3) across 18 docs in this folder.
See [sprint-roadmap.md](sprint-roadmap.md) for Cycle 2 launch plan.

## Severity legend

| Tag | Meaning | Typical example |
| --- | --- | --- |
| **P0** | Production-risk / actively damaging SEO right now | Fake `AggregateRating`, broken canonical, blocked CSS/JS, manual-action risk |
| **P1** | Material ranking blocker — fix in current sprint | Missing schema on money pages, redirect chain, large client-bundle on LCP |
| **P2** | Optimization / incremental win | Anchor-text diversity, meta-description rewrites, alt-text gaps |
| **P3** | Nice-to-have / hygiene | Comment cleanup, dev-only warnings, doc updates |

## Operational guardrails

1. **Sanity API token preservation** — Cycle 1 is read-only inspection; no `next build` runs. Cycle 2 fixes that touch Sanity must use ISR (`revalidate` or `unstable_cache` + `revalidateTag`) so the build hits Sanity once, not per request. Sitemap currently hits Sanity at build (Promise.all on POSTS/CATEGORIES/AUTHORS) — verified in [01-baseline.md](./01-baseline.md).
2. **Branch-per-fix** — every Cycle 2/3 fix lands on its own `fix/<slug>` branch off `develop` so user can merge selectively.
3. **No silent gap coverage** — every issue gets its own row in `fix-backlog.md`. "Covered elsewhere" is unacceptable.
