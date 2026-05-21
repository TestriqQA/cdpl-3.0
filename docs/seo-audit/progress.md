# CDPL SEO + GEO Audit — Live Progress

> **Updated:** 2026-05-21 — **CYCLE 2 SPRINT 4 COMPLETE** ✅ (Performance + Caching)
> **Branch:** `seo-audit/cycle-1-discovery` (audit docs) — Cycle 2 fixes land on `fix/*` branches off `develop`
> **Total backlog:** 199 entries (18 P0 / 75 P1 / 64 P2 / 42 P3) across 14 phases + 4 ancillary docs

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
| 10b | GSC Live Data (validated via Chrome MCP) | ✅ done | [10b-gsc-live.md](10b-gsc-live.md) | `0c1f2a0` |
| 11 | Browser-Based Live Audit | ✅ done | [11-live-browser-audit.md](11-live-browser-audit.md) | `8c25e73` |
| 12 | Competitive Gap Analysis | ✅ done | [12-competitive-gap.md](12-competitive-gap.md) | `a9731e1` |
| 13 | EdTech India Optimization | ✅ done | [13-edtech-india-optimization.md](13-edtech-india-optimization.md) | `d2cf626` |
| 14 | Off-Page & Authority Strategy | ✅ done | [14-offpage-strategy.md](14-offpage-strategy.md) | `cd003b0` |
| — | Master Fix Backlog (199 entries) | ✅ done | [fix-backlog.md](fix-backlog.md) | `cd003b0` |
| — | Cycle 2 Sprint Roadmap (7 sprints + Cycle 3) | ✅ done | [sprint-roadmap.md](sprint-roadmap.md) | `cd003b0` |

**Cadence:** Phase-by-phase with pause for review (per user decision 2026-05-19).
**Commit policy:** One commit per phase on `seo-audit/cycle-1-discovery` branch.

---

## Cycle 2 progress (7 sprints)

> Branch policy: one `fix/<slug>` branch per fix, off `develop`. User decides when to merge.

| Sprint | Title | Status |
| --- | --- | --- |
| 1 | Production-Risk De-risking | ✅ done — 14 `fix/*` branches merged to `develop` |
| 2 | Schema Parity | ✅ done — 12 `fix/*` branches pending merge to `develop` |
| 3 | Tooling + Small UX | ✅ done — 12 `fix/*` branches pending merge to `develop` |
| 4 | Performance + Caching | ✅ done — 4 `fix/*` branches pending merge; image-refactor items → Cycle 3 |
| 5 | GEO/AEO + Infra | ⏳ |
| 6 | Content Cycle (25+ new routes) | ⏳ |
| 7 | Final Backlog Cleanup | ⏳ |

### Sprint 1 — Production-Risk De-risking (merged to `develop`)

Closed: BLG-001, 002, 003, 013, 026, 027, 029, 030, 031, 032, 038, 042, 043, 044,
047, 050, 051, 056, 057, 058, 059, 095, 132, 142, 165. Merge commits: `75e0aff`,
`849d4aa`, `66a2602`, `38e022c`, `128b2c0`, `cbab1b0`, `90af701`, `ed1ee6b`,
`5d27567`, `ea5c845`, `ad4c51f`, `b419421`, `5fc2fd5`, `32cb441`.

### Sprint 2 — Schema Parity (12 branches off `develop`, awaiting merge)

| Branch | BLG closed | Summary |
| --- | --- | --- |
| `fix/blg-063-course-schema-fields` | 063, 074, 075, 078 | Course schema: teaches, educationalLevel, coursePrerequisites, educationalCredentialAwarded, audience, CourseInstance dates; drop fake "Expert Mentors" instructor |
| `fix/blg-060-review-itemtype-required` | 060 | `generateReviewSchema` itemType/itemId now required — fixed 9 call-sites that were attaching AggregateRating to the Organization |
| `fix/blg-061-org-localbusiness-link` | 061, 080 | LocalBusiness `parentOrganization` @id ref; `paymentAccepted`, `currenciesAccepted`, `award` |
| `fix/blg-064-org-founder` | 064, 071 | Org `founder` (Sandeep Maske, no sameAs yet); removed unverified `numberOfEmployees` |
| `fix/blg-068-website-searchaction` | 068 | WebSite `SearchAction`; also dropped a missed "100% placement" claim from WebSite description |
| `fix/blg-076-home-aggregaterating-id` | 076 | Home AggregateRating @id collision with LocalBusiness resolved |
| `fix/blg-065-blogposting-author` | 065, 066 | `Article` → `BlogPosting` subtype; author `sameAs` wired from Sanity author.social |
| `fix/blg-062-city-localbusiness` | 062 | City pages emit a city-scoped LocalBusiness with `areaServed` + HQ address |
| `fix/blg-069-quiz-schema` | 069 | `Quiz` schema added to `/mock-test` |
| `fix/blg-073-services-offercatalog` | 073 | `OfferCatalog` schema added to `/services` |
| `fix/blg-072-educational-program` | 072 | `EducationalOccupationalProgram` schema for Masters + AI Bootcamp |
| `fix/blg-138-job-schema-hiringorg` | 138, 162 | Job schema re-audit — confirmed valid; fixed careers `hiringOrganization` non-www URL + 404 logo |

**BLG-053** (OG image dimensions) — **verified, FAILING.** 73 of 113 `public/og-images/*`
files are not 1200×630 (49 have the wrong aspect ratio ~1.5:1 and will be cropped by
social platforms; 24 are the correct ~1.91:1 ratio but oversized and safely
downscalable). The `defaultOgImage` file resolves OK. This is an **asset / design
re-export task**, not a schema-parity code change — deferred, no branch created.

**Spawned task:** careers-page JobPosting `streetAddress` is "Vikhroli, Mumbai" — wrong;
CDPL HQ is Mira Road. Flagged for a separate session (NAP defect, needs an office-
location decision for Pune/Bengaluru roles).

### Sprint 3 — Tooling + Small UX (12 branches off `develop`, awaiting merge)

| Branch | BLG closed | Summary |
| --- | --- | --- |
| `fix/blg-091-092-caching` | 091, 092 | image optimizer minimumCacheTTL 60s→24h; Cache-Control on /api/reviews |
| `fix/blg-010-layout-cleanup` | 010, 011, 093 | direct Header/Footer/Banner imports; preconnect+dns-prefetch to cdn.sanity.io |
| `fix/blg-085-heromanualtesting` | 085, 088 | drop priority from 4 below-fold logos; react-icons/lu → lucide-react |
| `fix/blg-094-aboutaccreditations-priority` | 094 | below-fold accreditation logos → loading="lazy" |
| `fix/blg-089-city-h1-font` | 089 | removed inline system-ui font override on 765 city H1s |
| `fix/blg-041-mocktest-noindex` | 041 | layout.tsx with robots noindex meta for /mock-test/[courseSlug] |
| `fix/blg-024-error-styling` | 024 | error.tsx restyled to site theme (Tailwind, brand) |
| `fix/blg-028-privacy-link` | 028 | 5 lead forms: non-www privacy `<a>` → next/link relative |
| `fix/blg-018-blog-skeleton` | 018 | blog hero "Loading…" text → same-shape skeleton |
| `fix/blg-025-loading-states` | 025 | shared PageSkeleton + loading.tsx for blog/courses/events/mentors |
| `fix/blg-045-mobile-h1` | 045 | mobile home hero headline h2 → h1 |
| `fix/blg-055-noopener` | 055 | rel="noopener noreferrer" on 7 external target=_blank links |

**BLG-046** (hero `alt=""`) — **verified, no code change.** Forensic re-inspection
found every `alt=""` is correctly on a decorative image (blurred backdrop layers
with `aria-hidden`, floating decorations, or avatars inside `aria-label`'d buttons);
the main content images already carry proper alt. Phase 4 over-flagged.

**BLG-012** (raw `<img>` → next/image) — **deferred.** Sources span remote Google
user-content photos (need `remotePatterns`), local SVG logos (need
`dangerouslyAllowSVG`), and `CustomFlag`'s flag SVG (where raw `<img>` is correct).
Converting blind without a `next build` to verify risks breaking production
imagery — folded toward Sprint 4 image work (next-sanity-image adoption).

**BLG-052** (PNG→WebP OG images) — **deferred,** folded into the BLG-053 / Q11
OG-image asset re-export task (converting format without fixing dimensions is
half a job).

**BLG-184** (Justdial/Sulekha/Bing Places listings) — external directory work,
not an engineering task.

### Sprint 4 — Performance + Caching (4 branches off `develop`, awaiting merge)

> BLG-003 and BLG-027 (Sanity double-fetch React.cache wraps) were already
> closed in Sprint 1 — no Sprint 4 work needed for them.

| Branch | BLG closed | Summary |
| --- | --- | --- |
| `fix/blg-007-metapixel-lazyload` | 007 | Meta Pixel Script strategy `afterInteractive` → `lazyOnload` |
| `fix/blg-067-blog-wordcount` | 067 | real BlogPosting `wordCount` from Portable Text (was hard-coded 1000) |
| `fix/blg-166-blog-hero-priority` | 166 | blog-hero blur layer de-prioritised; main LCP image keeps priority + `fetchPriority="high"` |
| `fix/blg-009-phone-css-scope` | 009 | `react-phone-number-input/style.css` moved out of root layout into a shared `PhoneNumberInput` wrapper; 32 importers rewired |

**BLG-083 / BLG-145** (adopt `useNextSanityImage`) — **deferred to Cycle 3.**
This is a data-contract refactor: the GROQ queries currently project
`featuredImage` as a resolved URL string (`featuredImage.asset->url`), but
`useNextSanityImage` needs the raw Sanity image object. Changing it touches
`queries.ts` + `types.ts` + 6 components, requires client components for the
hook, and the blast radius is *every blog image*. Cannot be build-verified
here (Sanity-token rule) — belongs in a dedicated, build-tested image pass.
The audit's own Phase 6 originally scoped it as Cycle 3.

**BLG-012** (raw `<img>` → next/image) and **BLG-090** (blur placeholders) —
remain **deferred to that same Cycle 3 Sanity-image refactor pass.**

**BLG-036** (paginate `/blog/all-posts` + `/blog/category/[slug]`) — **deferred,
needs a product decision.** It is a feature, not a fix: it requires choosing
numbered routes vs `?page=` query param, posts-per-page (12–24), whether
`/blog/all-posts` keeps its category-grouped layout, and `rel=next/prev` /
canonical handling. A half-built pagination hurts SEO more than the current
unbounded list. Recommend a dedicated decision + branch.

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
| Q5 | Sandeep Maske LinkedIn URL (for Organization.founder.sameAs / BLG-064) | 2026-05-19 Phase 5 | 🟡 partial — founder added name-only (2026-05-21); LinkedIn `sameAs` still needed |
| Q8 | Is `numberOfEmployees: 50` accurate (BLG-071)? | 2026-05-19 Phase 5 | ✅ resolved 2026-05-21 — user said remove the field; done |
| Q9 | Sign-off on removing fabricated reviews from 830 routes (BLG-056) — confirm scope | 2026-05-19 Phase 5 | ✅ resolved — BLG-056 fixed + merged in Sprint 1 |
| Q10 | Actual prices per course (or confirm 25k-65k range is correct for ALL 25 courses) (BLG-058) | 2026-05-19 Phase 5 | ✅ resolved — BLG-058 fixed + merged in Sprint 1 (schema uses real `course.price`) |
| Q11 | OG image re-export — 73/113 `og-images/*` not 1200×630 (BLG-053). Approve batch downscale of the 24 correct-ratio files + design re-export of the 49 wrong-ratio files? | 2026-05-21 Sprint 2 | ⏳ awaiting decision |
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
| 2026-05-19 | Phase 11 complete (live browser audit via Chrome MCP). **4 new backlog entries (BLG-163 → BLG-166).** **🚨 P0 NEW BLG-163:** Home emits **3 separate canonical tags** — one points to non-existent `/index`. BLG-001 worse than predicted. **NEW BLG-164:** CountUp animated stats render initial value `0` in SSR → AI crawlers ingest "0 training hours / 0 job vacancies" instead of real numbers. **NEW BLG-165:** auto-abbreviator leaves dangling pipe `\| \| CDPL` after stripping "Testriq" on /mock-test title. **NEW BLG-166:** Blog hero `<Image>` is `loading="lazy"` (no priority) — direct cause of LCP universal failure. **DOWNGRADED** BLG-093/011 to P3 (Sanity images route through `/_next/image`, no direct cdn.sanity.io fetch). **Live-verified BLG-001 (3 canonicals), BLG-002 (broken Go Home link), BLG-004 (210 words hero SSR, curriculum invisible), BLG-042 (`/istqb-registration` still has "Testriq"), BLG-056 verbatim payload, BLG-057 random @id `-953`, BLG-058 (25k-65k served despite source 15000), BLG-063 (teaches+level MISSING), BLG-076 @id collision, BLG-095 ("Learn to facilitate Scrum teams" in live JSON-LD).** **Total backlog: 166 entries (17 P0 / 59 P1 / 54 P2 / 36 P3).** |
| 2026-05-19 | Phase 12 complete (competitive gap analysis via Chrome MCP). Audited Simplilearn, Edureka, Intellipaat, Scaler live. **7 new backlog entries (BLG-167 → BLG-173).** **Edureka schema vs CDPL:** Edureka course page has teaches, syllabusSections, coursePrerequisites, educationalCredentialAwarded, video, Product+Course+FAQPage. **Edureka aggregateRating: 4.2 / 49,300 reviews** = 116× CDPL's 425. **Intellipaat strategy:** Product schema (no Course) + "with IIT Certification" titles. **Scaler moat:** verified LinkedIn alumni URLs. **Untapped niches (0 competitors have):** Comparison pages, city-level scale (CDPL already has 765 city pages — unique advantage), vertical-solution pages. **Top content gaps:** tutorials, interview-question pages, comparison pages, verified alumni, salary calculator. **Backlink baseline:** CDPL not on Shiksha (formerly Naukri Learning). **Total backlog: 173 entries (17 P0 / 64 P1 / 56 P2 / 36 P3).** |
| 2026-05-19 | Phase 13 complete (EdTech India optimization). **15 new backlog entries (BLG-174 → BLG-188).** Strategic recommendations: 10 `/tools/*` landing pages for Selenium/Postman/SQL/Cypress/Playwright/Power BI/Tableau (BLG-174 P1); 2 vertical pages BFSI Testing + Healthcare Data Analytics (BLG-175 P2); `/corporate-training` B2B cluster of 5-8 pages (BLG-176 P1 extends BLG-048/BLG-102); pricing transparency (BLG-177 P1); upcoming-batches page (BLG-178 P1); `/case-studies/[slug]` route with LinkedIn-verified alumni (BLG-179 P1 — closes Scaler's moat); claim Shiksha/CollegeDunia/Justdial/Sulekha listings (BLG-183/184); footer CIN+GST+ISO display (BLG-185); city-page meta-description CTR rescue (BLG-187 P1 — cross-cuts BLG-044). **Brand SERP verified live:** GBP + Knowledge Panel exist ✓. Thane separate listing — NAP consistency check needed. **Total Cycle 2 Sprint 6 scope: ~30-35 new pages.** **Total backlog: 188 entries (17 P0 / 70 P1 / 60 P2 / 41 P3).** |
| 2026-05-19 | **CYCLE 1 COMPLETE.** Phase 14 emitted **3 final deliverables**: [14-offpage-strategy.md](14-offpage-strategy.md) (backlink + entity establishment + founder thought leadership), [fix-backlog.md](fix-backlog.md) (199-entry tabular master backlog), [sprint-roadmap.md](sprint-roadmap.md) (7 Cycle 2 sprints + Cycle 3). **11 new backlog entries (BLG-189 → BLG-199):** GSC Links pull (BLG-189), founder cadence (BLG-190), EdTech awards (BLG-191), speaking circuit (BLG-192), review acquisition workflow (BLG-193), Tier-1 directory submission sprint with 15 directories (BLG-194), disavow audit (BLG-195), NAP audit (BLG-196), **Wikidata Q-ID creation (BLG-197 — highest-leverage external GEO action)**, Crunchbase (BLG-198), Clutch (BLG-199). **FINAL TOTAL: 199 backlog entries (18 P0 / 75 P1 / 64 P2 / 42 P3) over 14 phases + live GSC + live browser audit. Cycle 1 branch ready for merge to `develop` at user discretion.** |
| 2026-05-21 | **CYCLE 2 SPRINT 1 COMPLETE** (Production-Risk De-risking) — 14 `fix/*` branches merged to `develop`. Closed 25 backlog entries: BLG-001/002/003/013/026/027/029/030/031/032/038/042/043/044/047/050/051/056/057/058/059/095/132/142/165. Headline: fabricated reviews removed from ~830 routes (BLG-056/057), client-side canonical removed (BLG-001), "Testriq" brand stripped (BLG-042), non-defensible claims swept from titles/descriptions/Org schema (BLG-043/044/059), all 30+ course descriptions rewritten (BLG-095). |
| 2026-05-21 | **CYCLE 2 SPRINT 2 COMPLETE** (Schema Parity) — 12 `fix/*` branches off `develop`, awaiting user merge. Closed 19 backlog entries: BLG-060/061/062/063/064/065/066/068/069/071/072/073/074/075/076/078/080/138/162. Course schema now emits teaches/educationalLevel/coursePrerequisites/educationalCredentialAwarded/audience + CourseInstance dates (BLG-063/074/075). **`generateReviewSchema` foot-gun fixed (BLG-060): 9 call-sites were silently attaching the AggregateRating to the Organization @id — now itemType/itemId are required.** LocalBusiness↔Organization linked (BLG-061); city LocalBusiness on 765 routes (BLG-062); founder added, numberOfEmployees removed (BLG-064/071); BlogPosting subtype + author sameAs (BLG-065/066); WebSite SearchAction + a missed "100% placement" claim removed (BLG-068); home @id collision fixed (BLG-076); Quiz, OfferCatalog, EducationalOccupationalProgram schemas added (BLG-069/073/072); JobPosting re-audited — valid, hiringOrganization URL bug fixed (BLG-138/162). **BLG-053 verified FAILING** — 73/113 OG images off 1200×630 spec (asset re-export task, deferred → Q11). Cycle-3 entries (BLG-004/008/014/015/022/084/090/161) remain deferred. |
| 2026-05-21 | **CYCLE 2 SPRINT 3 COMPLETE** (Tooling + Small UX) — 12 `fix/*` branches off `develop`, awaiting user merge. Closed 16 backlog entries: BLG-010/011/018/024/025/028/041/045/055/085/088/089/091/092/093/094. Highlights: image-optimizer + /api/reviews caching (091/092); direct layout imports + Sanity CDN preconnect (010/011/093); below-fold `priority` removed from logos (085/094); react-icons/lu dropped for lucide-react (088); inline system-ui font removed from 765 city H1s (089); meta-robots noindex layout for /mock-test/[courseSlug] (041); themed error.tsx (024); 5 lead-form privacy links de-redirected (028); blog-hero loading skeleton (018); route loading.tsx states (025); mobile home h1 (045); rel=noopener on 7 external links (055). **BLG-046 verified — no-op** (all `alt=""` correctly decorative). **BLG-012 deferred** (raw-img conversion needs next.config remotePatterns/dangerouslyAllowSVG + build verification → Sprint 4). **BLG-052 deferred** → folded into Q11 OG-image asset task. **BLG-184** is external directory work. |
| 2026-05-21 | **CYCLE 2 SPRINT 4 COMPLETE** (Performance + Caching) — 4 `fix/*` branches off `develop`, awaiting user merge. Closed 4 backlog entries: BLG-007/009/067/166. Meta Pixel deferred to `lazyOnload` (007); real Portable-Text `wordCount` for BlogPosting schema (067); blog-hero LCP image keeps priority while the decorative blur layer no longer competes for preload (166); `react-phone-number-input` stylesheet moved off the root layout into a shared wrapper, 32 importers rewired (009). **BLG-003 + BLG-027 were already closed in Sprint 1** (no work needed). **BLG-083/145 + BLG-012 + BLG-090 deferred to a Cycle 3 Sanity-image refactor pass** — `useNextSanityImage` needs a GROQ/type data-contract change (URL string → image object) across queries + 6 components, build-unverifiable here, blast radius = all blog images; audit Phase 6 originally scoped it Cycle 3. **BLG-036 deferred** — blog pagination is a feature needing a product decision (numbered routes vs `?page=`, posts/page, category-grouping, rel=next/prev). |
