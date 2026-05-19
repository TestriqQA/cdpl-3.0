# CDPL SEO + GEO Audit — Live Progress

> **Updated:** 2026-05-19 (Phase 5 complete; ready for Phase 6)
> **Branch:** `seo-audit/cycle-1-discovery`
> **Last commit:** Phase 5 commit pending below.

This file is rewritten **on every response that touches the audit**, so you always see current state without having to scroll back.

---

## Cycle 1 progress (14 phases)

| # | Phase | Status | Deliverable | Commit |
| --- | --- | --- | --- | --- |
| 1 | Discovery & Baseline Snapshot | ✅ done | [01-baseline.md](01-baseline.md) | `25969c9` |
| 2 | Codebase Architecture Audit | ✅ done | [02-codebase-audit.md](02-codebase-audit.md) | `d05558e` |
| 3 | Technical SEO Audit | ✅ done | [03-technical-seo.md](03-technical-seo.md) | `ab75d25` |
| 4 | On-Page SEO Audit | ✅ done | [04-onpage-audit.md](04-onpage-audit.md) | `6153793` |
| 5 | Structured Data & Schema (JSON-LD) | ✅ done | [05-schema-audit.md](05-schema-audit.md) | (pending commit) |
| 6 | Core Web Vitals & Performance | ⏳ pending | 06-cwv-performance.md | — |
| 7 | Content & Information Architecture | ⏳ pending | 07-content-ia.md | — |
| 8 | GEO / AEO Strategy | ⏳ pending | 08-geo-aeo-strategy.md | — |
| 9 | Sanity CMS Schema Audit | ⏳ pending | 09-sanity-schema-audit.md | — |
| 10 | GSC Triage | ⏳ pending (needs GSC) | 10-gsc-triage.md | — |
| 11 | Browser-Based Live Audit | ⏳ pending (needs Chrome MCP) | 11-live-browser-audit.md | — |
| 12 | Competitive Gap Analysis | ⏳ pending | 12-competitive-gap.md | — |
| 13 | EdTech India Optimization | ⏳ pending | 13-edtech-india-optimization.md | — |
| 14 | Off-Page & Authority Strategy + Master Backlog | ⏳ pending | 14-offpage-strategy.md + fix-backlog.md + sprint-roadmap.md | — |

**Cadence:** Phase-by-phase with pause for review (per user decision 2026-05-19).
**Commit policy:** One commit per phase on `seo-audit/cycle-1-discovery` branch.

---

## Cycle 2 progress (7 sprints)

> Will populate after Cycle 1 deliverable #14 lands (`sprint-roadmap.md`).
> Branch policy: one `fix/<slug>` branch per fix, off `develop`.

| Sprint | Title | Status |
| --- | --- | --- |
| 1 | Production-Risk De-risking | ⏳ |
| 2 | Schema Parity | ⏳ |
| 3 | Tooling + Small UX | ⏳ |
| 4 | Performance + Caching | ⏳ |
| 5 | GEO/AEO + Infra | ⏳ |
| 6 | Content Cycle (25+ new routes) | ⏳ |
| 7 | Final Backlog Cleanup | ⏳ |

---

## Cycle 3 progress (CWV sweep)

> Will populate after Cycle 2 surfaces CWV findings via bundle analyzer baselines.

| Item | Status |
| --- | --- |
| Heavy-library replacement (recharts / leaflet / framer-motion / typewriter-effect / react-phone-number-input) | ⏳ |
| Animation-library sweep (framer-motion → CSS / IntersectionObserver codemod) | ⏳ |
| Server-component conversion (90+ candidates from 250 `'use client'` files) | ⏳ |

---

## Open user-confirmation requests

| # | Question | Asked | Resolved |
| --- | --- | --- | --- |
| Q1 | Authoritative address (Mira Road vs Goregaon East) | 2026-05-19 | ✅ Mira Road |
| Q2 | Founded year (2020 vs 2022) | 2026-05-19 | ✅ 2020 |
| Q3 | Which trust-signal numbers are defensible | 2026-05-19 | ✅ Only 4.9/425 |
| Q4 | Cycle 1 cadence + commit strategy | 2026-05-19 | ✅ Phase-by-phase, commit-per-phase |
| Q5 | Sandeep Maske LinkedIn URL (for Organization.founder.sameAs / BLG-064) | 2026-05-19 Phase 5 | ⏳ blocks Cycle 2 Sprint 2 |
| Q8 | Is `numberOfEmployees: 50` accurate (BLG-071)? | 2026-05-19 Phase 5 | ⏳ blocks Cycle 2 Sprint 2 |
| Q9 | Sign-off on removing fabricated reviews from 830 routes (BLG-056) — confirm scope | 2026-05-19 Phase 5 | ⏳ blocks Cycle 2 Sprint 1 |
| Q10 | Actual prices per course (or confirm 25k-65k range is correct for ALL 25 courses) (BLG-058) | 2026-05-19 Phase 5 | ⏳ blocks Cycle 2 Sprint 2 |
| Q6 | GSC property access (for Phase 10) | — | ⏳ Phase 10 will ask |
| Q7 | Sanity webhook secret + Studio API token scope (Phase 9 / Cycle 2 Sprint 5) | — | ⏳ Phase 9 will ask |

---

## Open deferred items

| # | Item | Reason | Unblocks |
| --- | --- | --- | --- |
| D1 | Lighthouse mobile + desktop scores | Needs live Chrome MCP run | Phase 11 |
| D2 | GSC coverage / queries / impressions / CWV field data | Needs GSC access | Phase 10 |
| D3 | Bundle analyzer output | Needs `ANALYZE=true next build` — **deferred until user OK due to Sanity API-token concern** | Phase 6 + Cycle 3 |
| D4 | Competitor backlink data | Needs Ahrefs/SEMrush | Phase 12 |
| D5 | Live DOM / network waterfall for home + 1 course + 1 city + 1 blog | Needs Chrome MCP | Phase 11 |

---

## Activity log

| Timestamp | Activity |
| --- | --- |
| 2026-05-19 | Audit kicked off. Phase 1 (Discovery & Baseline) completed and committed. 4 deliverables + decisions log emitted. 16-item initial issue radar produced. 3 user-confirmation questions answered. |
| 2026-05-19 | Phase 2 (Codebase Architecture Audit) started. |
| 2026-05-19 | Phase 2 complete. 02-codebase-audit.md emitted. **25 backlog entries (BLG-001 → BLG-025) seeded.** Headline P0s: SeoHead client-canonical (BLG-001), broken not-found.tsx Link import (BLG-002), POST_QUERY double-fetch (BLG-003), course-content `ssr:false` invisible to AI crawlers (BLG-004). progress.md introduced and integrated into commit cadence. |
| 2026-05-19 | Phase 3 complete. 03-technical-seo.md emitted. **16 new backlog entries (BLG-026 → BLG-041).** Headline P0s: placeholder `"Your Company"` branding shipping to production in blog/categories (BLG-026), `CATEGORY_QUERY + CATEGORY_POSTS_QUERY` double-fetch in blog/category/[slug] (BLG-027). 0 redirect chains detected in 52 static redirects. Sitemap is comprehensive (~870 URLs, no orphans). AI-crawler content-blindness on course detail pages confirmed as primary GEO blocker (BLG-004 deepening). |
| 2026-05-19 | Phase 4 complete. 04-onpage-audit.md emitted. **14 new backlog entries (BLG-042 → BLG-055).** Headline P0s: `/mock-test` + `/istqb-registration` titles show **"Testriq"** instead of CDPL/Cinute Digital (BLG-042); 30+ pages reference non-defensible claims ("5,000+ placed", "100% placement", "15+ years") in meta descriptions (BLG-044). ~35 titles exceed 60 chars (BLG-043). LSI keyword coverage is strong on course pages (~16 keywords each). 9 generic-anchor occurrences only. **Total backlog so far: 55 entries (6 P0 / 16 P1 / 20 P2 / 13 P3).** |
| 2026-05-19 | Phase 5 complete. 05-schema-audit.md emitted. **26 new backlog entries (BLG-056 → BLG-081).** **Most critical finding of the audit so far:** `generateSingleReviewSchema` emits a **fabricated 5-star review with hard-coded body** ("The training curriculum at CDPL is highly practical…") attributed to "CDPL Student" with `Math.random()` in @id — **~830 routes ship this fake review** (home + 25 course detail + 765 city + blog + categories + more). Direct manual-action risk + violates Google self-serving review policy. Also: `generateCourseSchema` hard-codes 25k-65k price ignoring real prices (BLG-058); Organization description includes non-defensible "100% placement support" (BLG-059). 77 schema generators inventoried; 57 are page-specific consolidators (~4500 lines of dup). **Total backlog: 81 entries (10 P0 / 25 P1 / 28 P2 / 18 P3).** 4 open user-confirmation questions added for Sprint 2. |
