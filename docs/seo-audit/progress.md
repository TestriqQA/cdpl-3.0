# CDPL SEO + GEO Audit — Live Progress

> **Updated:** 2026-05-19 (Phase 10b live GSC validation complete; ready for Phase 11)
> **Branch:** `seo-audit/cycle-1-discovery`
> **Last commit:** Phase 10b commit pending below.

This file is rewritten **on every response that touches the audit**, so you always see current state without having to scroll back.

---

## Cycle 1 progress (14 phases)

| # | Phase | Status | Deliverable | Commit |
| --- | --- | --- | --- | --- |
| 1 | Discovery & Baseline Snapshot | ✅ done | [01-baseline.md](01-baseline.md) | `25969c9` |
| 2 | Codebase Architecture Audit | ✅ done | [02-codebase-audit.md](02-codebase-audit.md) | `d05558e` |
| 3 | Technical SEO Audit | ✅ done | [03-technical-seo.md](03-technical-seo.md) | `ab75d25` |
| 4 | On-Page SEO Audit | ✅ done | [04-onpage-audit.md](04-onpage-audit.md) | `6153793` |
| 5 | Structured Data & Schema (JSON-LD) | ✅ done | [05-schema-audit.md](05-schema-audit.md) | `cfd584c` |
| 6 | Core Web Vitals & Performance | ✅ done | [06-cwv-performance.md](06-cwv-performance.md) | `0be4916` |
| 7 | Content & Information Architecture | ✅ done | [07-content-ia.md](07-content-ia.md) | `a268df1` |
| 8 | GEO / AEO Strategy | ✅ done | [08-geo-aeo-strategy.md](08-geo-aeo-strategy.md) | `24c1a78` |
| 9 | Sanity CMS Schema Audit | ✅ done | [09-sanity-schema-audit.md](09-sanity-schema-audit.md) | `85e4ddc` |
| 10 | GSC Triage (methodology + predictions) | ✅ done | [10-gsc-triage.md](10-gsc-triage.md) | `9601607` |
| 10b | GSC Live Data (validated via Chrome MCP) | ✅ done | [10b-gsc-live.md](10b-gsc-live.md) | (pending commit) |
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
| Q6 | GSC property access (for Phase 10 validation) | 2026-05-19 Phase 10 | ⏳ paste GSC exports into [10-gsc-triage.md](10-gsc-triage.md) §10.10 template |
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
| 2026-05-19 | Phase 6 complete. 06-cwv-performance.md emitted. **13 new backlog entries (BLG-082 → BLG-094).** **Discovery:** 4 production deps are installed but never imported anywhere — `recharts`, `react-calendly`, `react-countup`, `typewriter-effect` (BLG-082) → ~250 KB lockfile bloat. `next-sanity-image ^6.2.0` is installed but unused (BLG-083) — adopting it for blog images is the **single biggest blog-CWV win** available (auto width/height/blur from Sanity metadata). `framer-motion` imported in **160 files** (BLG-084) is the biggest aggregated JS cost. Other findings: 4 below-fold company logos marked `priority` (BLG-085), alt text mismatches filename on 3 logo images suggesting placeholder alumni-company badges (BLG-086, P1), inline `font-family: system-ui` override on 765 city H1s (BLG-089). Font strategy is **exemplar** (variable Inter, preload, swap, comprehensive fallback). No images missing dimensions. **Total backlog: 94 entries (12 P0 / 29 P1 / 32 P2 / 21 P3).** |
| 2026-05-19 | Phase 7 complete. 07-content-ia.md emitted. **20 new backlog entries (BLG-095 → BLG-114).** **P0 discovery:** ALL 30+ course descriptions in `headerData.ts` are **wrong boilerplate** — Manual Testing says "Master Scrum", Python says "Master containerization", DM says "Earn PMP certification", BI says "Craft a standout resume". These propagate to **MegaMenu navigation (visible) + Footer + `generateHomePageSchema` ItemList + `generateAllCoursesPageSchema` ItemList (JSON-LD)** — so AI engines ingest wrong descriptions. Other findings: AI hub has only 1 spoke (BLG-096); 3-way ML/Python cannibalization + 4-way Data-Analytics + 4-way AI cannibalization (BLG-097); **0 pillar pages of 3000+ words** (BLG-099); **0 free-tool linkable assets** (BLG-100); no per-mentor profile pages (BLG-101); 21 stray `.tsx` blog seeds in `src/content/posts/` (BLG-109). Strengths: anchor text is keyword-rich across MegaMenu; Sanity author schema has social fields ready for E-E-A-T (just not wired to Article schema). **Total backlog: 114 entries (13 P0 / 36 P1 / 41 P2 / 24 P3).** |
| 2026-05-19 | Phase 8 complete. 08-geo-aeo-strategy.md emitted. **17 new backlog entries (BLG-115 → BLG-131).** `public/llms.txt` exists ✓ but uses 17 old-slug URLs that all 301-redirect (BLG-115), lists AI Bootcamp under wrong category (BLG-116), missing 13+ course pages + city-courses + certifications + NAP + founder (BLG-117/118/119/120), claims "100% placement assistance" (BLG-121 — P0). No `llms-full.txt` (BLG-122). No Wikidata Q-ID — **highest-leverage external GEO action** (BLG-123). All major AI bots already Allowed in robots.ts ✓. **Cross-phase GEO blockers identified:** BLG-004 (ssr:false invisible to AI), BLG-056 (fake reviews), BLG-095 (wrong descriptions), BLG-066 (author no sameAs), BLG-064 (no founder) — all must land Sprint 1-2 before Sprint 5's GEO infra ships. **Total backlog: 131 entries (14 P0 / 45 P1 / 46 P2 / 26 P3).** |
| 2026-05-19 | Phase 9 complete. 09-sanity-schema-audit.md emitted. **21 new backlog entries (BLG-132 → BLG-152).** **P0 discovery:** ALL 3 Sanity image fields (post.featuredImage, author.avatar, certificate.certificateImage) lack `alt` subfield with `Rule.required()` validation (BLG-132) — a11y + image-SEO blocker. **Architectural finding:** No Sanity doc types for `course`, `mentor`, `event`, `testimonial`, `hiringPartner`, `service`, `city` (BLG-133) — content lives in TS data files, blocks BLG-095/BLG-101/BLG-126 fixes. No `validation.required()` on critical fields in post/author/category (BLG-134). job schema missing salary/datePosted/validThrough/description fields required for JobPosting Rich Results (BLG-138 — P1). No draftMode integration / /api/preview routes (BLG-139). PortableTextRenderer DOES use `useNextSanityImage` ✓ but blog hero / list / sidebar / author avatar don't (BLG-145 refined). GROQ projection discipline is excellent ✓. Strong references (post→author, post→category) ✓. **Total backlog: 152 entries (15 P0 / 55 P1 / 52 P2 / 28 P3).** |
| 2026-05-19 | Phase 10 complete. 10-gsc-triage.md emitted. **No new backlog entries** — Phase 10 is methodology + predictive findings only (live GSC data required to validate). Doc provides: §10.10 paste-here template for 8 GSC reports (Coverage/Sitemaps/Performance/Enhancements/Manual Actions/Security/Links/Page Experience); §10.11 cross-reference table linking each prediction to a backlog ID; §10.5 rich-result predictions per type. Top predicted GSC manifestations: BLG-001 will show as "Duplicate without user-selected canonical"; BLG-056 will trigger Review snippet warnings; BLG-058 will surface as Course rich-result "Invalid offer price"; BLG-138 will surface as JobPosting "Missing description/datePosted/validThrough/baseSalary". **Total backlog unchanged: 152 entries.** |
| 2026-05-19 | Phase 10b complete (live GSC investigation via Chrome MCP, browser "sushma"). **10 new backlog entries (BLG-153 → BLG-162).** **Confirmed predictions:** BLG-001 (12 URLs with canonical ambiguity), BLG-056 (16 Review snippet errors on 8 URLs: /blog + 5 categories + /events + /cdpl-affiliate-program — schema malformed, Google ML not yet flagged), BLG-043/044/095 (**0.8% CTR vs 3-5% industry healthy** = 4× CTR drag), BLG-068 (Sitelinks Searchbox ineligible). **Disproved:** BLG-138 (0 invalid JobPosting), Phase 6 INP risk (passing), Phase 6 CLS risk (passing). **New critical findings:** BLG-161 LCP > 2.5s on **ALL 128** mobile URLs (broader than blog-only prediction); BLG-157 880 pages have impressions but only 613 indexed (267 dropped index); BLG-154 /services/sttp is biggest non-brand traffic page (3,623 imps, 0.36% CTR); BLG-156 plural slugs still ranking despite redirect. **Manual Actions clean ✓ Security clean ✓ Sitemap healthy ✓.** Total: 878 clicks / 110K imps / pos 16.6 over 3 mo. **Total backlog: 162 entries (16 P0 / 58 P1 / 56 P2 / 32 P3).** |
