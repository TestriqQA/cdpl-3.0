# CDPL Cycle 2 Sprint Roadmap

> **Source:** consolidated from `fix-backlog.md` (199 entries)
> **Branch policy:** each fix on its own `fix/<slug>` branch off `develop`, merged at user's discretion
> **Generated:** Cycle 1 audit, 2026-05-19

---

## Sprint sequencing rationale

The audit brief specifies 7 Cycle 2 sprints. Their ordering matters because **earlier sprints unblock later ones**:

```
Sprint 1 (Production De-risking) ──┬─→ Sprint 2 (Schema Parity)
                                   │
                                   ├─→ Sprint 3 (Tooling/UX) ─→ Sprint 4 (Perf/Cache)
                                   │
                                   └─→ Sprint 5 (GEO+Sanity) ─→ Sprint 6 (Content)
                                                                          │
                                                                          └─→ Sprint 7 (Cleanup)
                                                                                       │
                                                                                       ▼
                                                                              Cycle 3 (CWV sweep)
```

---

## Sprint 1 — Production-Risk De-risking (Week 1-2)

> **Goal:** stop the bleeding. Remove fabricated reviews, wrong brand, non-defensible claims, broken canonicals.
> **GSC justification (Phase 10b):** Manual Actions currently CLEAN — fix window open before Google ML detects fake-review pattern.

| BLG | Title | Effort |
| --- | --- | --- |
| **BLG-056** | **Delete `generateSingleReviewSchema` + 30+ call sites** (fake reviews on 830 routes) | H |
| **BLG-057** | Math.random() in Review @id (bundled with BLG-056) | bundled |
| **BLG-001** | Delete SeoHead.tsx + import — use Metadata API canonical only | Q |
| **BLG-163** | Investigate + fix `/index` canonical source | H |
| **BLG-002** | Fix not-found.tsx `Link` import (lucide-react → next/link) | Q |
| **BLG-042** | Strip "Testriq" from /mock-test + /istqb-registration titles | Q |
| **BLG-165** | Fix abbreviateTitle helper double-pipe bug | Q |
| **BLG-059** | Rewrite Organization description (drop "100% placement") | Q |
| **BLG-044** | Rewrite 30+ meta descriptions removing non-defensible claims | D |
| **BLG-043** | Rewrite 35 titles to fit 50-60 char window | D |
| **BLG-095** | Rewrite all 30+ course descriptions in headerData.ts | D |
| **BLG-026/029/030/031/032** | Refactor blog/categories + blog/category/[slug] to use generateMetadata helper | H |
| **BLG-121** | Rewrite llms.txt (drop "100% placement") — partial llms.txt fix | bundled with Sprint 5 |
| **BLG-132** | Add alt subfield with Rule.required() to all Sanity image fields | Q |
| **BLG-013** | Add CSP / HSTS / Permissions-Policy headers | Q |
| **BLG-033/034** | Verify non-www→www + http→https redirects (hosting layer) | H |
| **BLG-038** | Add Disallow:/blog/search to robots.txt | Q |
| **BLG-086** | Verify HeroManualTesting alumni-company logo alt text vs filename | H (+user input) |
| **BLG-087** | Drop "14+ Years Expertise" from HeroManualTesting (bundle with BLG-044) | bundled |
| **BLG-047/050/051** | Title-length fixes for /courses, /cookies-policy, /api-testing | Q |
| **BLG-153** | Add Domain GSC property | Q (external) |
| **BLG-185** | Footer CIN + GST + ISO certificate numbers | Q |
| **BLG-186** | Footer MSME/NSDC/Skill India badges (if applicable) | Q |
| **BLG-189** | Pull GSC Links report for top external + anchor distribution | Q |
| **BLG-194** | Begin Tier-1 directory submission sprint (Shiksha, CollegeDunia, etc — 15 directories — runs Sprint 1-3) | W |
| **BLG-195** | Disavow audit + submit (after Links pulled) | H |
| **BLG-196** | NAP consistency audit across external listings | D |
| **BLG-182** | Verify Thane GBP listing | H |
| **BLG-171/183** | Submit to Shiksha/CollegeDunia/CareerLauncher | bundled |

**Sprint 1 total effort: ~3-5 working days engineering + 1-2 weeks external/content work**

**Sprint 1 success criteria:**
- 0 fabricated reviews shipped on any route
- 0 "100% placement" claims in JSON-LD or critical meta
- 0 "Testriq" brand on indexed pages
- Canonical count = 1 per route
- Manual Actions remains clean
- Tier-1 directories submitted

---

## Sprint 2 — Schema Parity (Week 3)

> **Goal:** complete the Course schema to match Edureka's coverage; close @id collisions; add missing required-rich-result fields.

| BLG | Title | Effort |
| --- | --- | --- |
| **BLG-058** | Fix generateCourseSchema to use course.price (no hardcoded 25k-65k) | H |
| **BLG-063** | Add teaches/educationalLevel/coursePrerequisites/educationalCredentialAwarded | H |
| **BLG-064** | Add founder Sandeep Maske + LinkedIn sameAs to Organization | Q (+user confirm) |
| **BLG-060** | Make generateReviewSchema itemType required (remove default) | Q |
| **BLG-061** | LocalBusiness ↔ Organization parentOrganization cross-ref | Q |
| **BLG-062** | City pages emit LocalBusiness with areaServed:city | D |
| **BLG-065** | Switch generateArticleSchema to BlogPosting subtype | Q |
| **BLG-066** | Wire Article.author.sameAs from Sanity author.social fields | Q |
| **BLG-068** | Add potentialAction:SearchAction to WebSite schema | Q |
| **BLG-069** | Add Quiz schema for /mock-test | H |
| **BLG-072** | Add EducationalOccupationalProgram for Masters/Bootcamp | H |
| **BLG-073** | Add OfferCatalog to /services | H |
| **BLG-074** | Add audience(EducationalAudience) on Course | Q |
| **BLG-075** | Add hasCourseInstance.courseSchedule (batch dates) | H |
| **BLG-076** | Fix Home AggregateRating @id collision with LocalBusiness | Q |
| **BLG-078** | Don't emit fake "Expert Mentors" default instructor name | Q |
| **BLG-080** | Add award/paymentAccepted/currenciesAccepted to Org/LB | Q |
| **BLG-138** | (re-audit) Verify job schema rich-result requirements | Q |
| **BLG-053** | Verify OG image dimensions at 1200×630 | Q |
| **BLG-162** | Confirm BLG-138 status after re-audit | Q |

**Sprint 2 total effort: ~5-7 days engineering**

**Sprint 2 success criteria:**
- Course rich result no errors in GSC
- Course schema includes all 8 Google-recommended fields
- Sitelinks Searchbox becomes eligible
- @id collisions resolved

---

## Sprint 3 — Tooling + Small UX (Week 4)

> **Goal:** UX polish, anchor diversity, security headers complete, image hygiene.

| BLG | Title | Effort |
| --- | --- | --- |
| **BLG-010** | Replace dynamic-imports of Header/Footer/Banner with direct imports | Q |
| **BLG-011/093** | (downgraded) Add preconnect/dns-prefetch to cdn.sanity.io | Q |
| **BLG-012** | Convert 5 raw `<img>` tags to next/image | H |
| **BLG-018** | Replace blog "Loading..." text fallback with skeleton | Q |
| **BLG-024** | Style error.tsx to match site theme | Q |
| **BLG-025** | Add loading.tsx for blog/courses/events/mentors routes | H |
| **BLG-028** | Replace non-www privacy-policy `<a>` in 5 lead forms with next/link | Q |
| **BLG-041** | Add meta robots noindex to /mock-test/[courseSlug] for AI defense-in-depth | Q |
| **BLG-045** | Fix mobile home h2 → h1 semantic | Q |
| **BLG-046** | Add alt text to 4 hero `alt=""` images | Q |
| **BLG-052** | Convert remaining PNG OG images to WebP | H |
| **BLG-055** | Audit all target="_blank" → rel="noopener noreferrer" | H |
| **BLG-085** | Remove priority={true} from 4 below-fold company logos | Q |
| **BLG-088** | Standardise on lucide-react (drop react-icons/lu from HeroManualTesting) | H |
| **BLG-089** | Remove inline style font-family:system-ui from city H1 | Q |
| **BLG-091** | images.minimumCacheTTL: 60 → 86400 | Q |
| **BLG-092** | Add Cache-Control to /api/reviews | Q |
| **BLG-094** | Remove priority from AboutAccreditations image (below fold) | Q |
| **BLG-184** | Claim Justdial/Sulekha/Bing Places listings | D (external) |

**Sprint 3 total effort: ~4-5 days engineering**

---

## Sprint 4 — Performance + Caching (Week 5-6)

> **Goal:** stop Sanity-API-token waste; add ISR caching; remove root-CSS bloat; blog-CWV win via next-sanity-image adoption.

| BLG | Title | Effort |
| --- | --- | --- |
| **BLG-003** | React cache() wrap on POST_QUERY (eliminates double-fetch) | H |
| **BLG-027** | React cache() wrap on CATEGORY_QUERY + CATEGORY_POSTS_QUERY | H |
| **BLG-007** | MetaPixel fbevents.js via Script strategy=lazyOnload | Q |
| **BLG-009** | Move react-phone-number-input CSS out of root layout | Q |
| **BLG-067** | Calculate real wordCount for BlogPosting (replace placeholder 1000) | Q |
| **BLG-083** | Adopt useNextSanityImage in hero/list/sidebar/avatar/category (5-6 components) | D |
| **BLG-145** | (refined BLG-083) — bundled | bundled |
| **BLG-166** | Add priority + fetchPriority="high" to blog hero `<Image>` | Q |
| **BLG-036** | Paginate /blog/all-posts and /blog/category/[slug] (12-24 posts/page) | H |

**Sprint 4 total effort: ~3-4 days engineering**

**Sprint 4 success criteria:**
- Sanity API calls per blog request drop ~50%
- Blog hero LCP < 2.5s (Phase 11 root-cause fix)
- All Sanity images have auto width/height/blurDataURL

---

## Sprint 5 — GEO/AEO + Infra (Week 7-8)

> **Goal:** Sanity webhook revalidation; Wikidata + entity establishment; llms.txt rewrite; new Sanity doc types for content scale.

| BLG | Title | Effort |
| --- | --- | --- |
| **BLG-005** | Split schema-generators.ts into 5-10 focused files | D |
| **BLG-006** | Build /api/revalidate webhook handler | H |
| **BLG-021** | Wrap sitemap Sanity fetches in unstable_cache | H |
| **BLG-039** | Move Sanity-category-slug redirects to runtime middleware | H |
| **BLG-070** | Add Crunchbase/Clutch/G2/Wikidata to Org sameAs | Q |
| **BLG-077** | Make generateBreadcrumbSchema @id required | Q |
| **BLG-079** | Refactor 57 consolidators into 5-10 parameterised helpers | W |
| **BLG-081** | Add mentions cross-refs Course→Mentor→Article | H |
| **BLG-096** | Restructure AI hub (migrate AI courses from /courses/ds-ml-courses/) | D |
| **BLG-097** | Disambiguate cannibalising pages (3-way ML, 4-way analytics, 4-way AI) | D |
| **BLG-098** | Rename DM child slug | H |
| **BLG-104** | Sanity workflow for course-page contextual blog links | content |
| **BLG-108** | Add expertise/credentials fields to Sanity author schema | Q |
| **BLG-113** | Convert AAA-Accredited from "hub" to tag/filter | H |
| **BLG-114** | Cross-link Python/Java from DS/ML hub | Q |
| **BLG-115/116/117/118/119/120** | Rewrite llms.txt with canonical URLs + correct categorisation + NAP + founder | H |
| **BLG-122** | Build /llms-full.txt route handler (Sanity-driven) | D |
| **BLG-123/197** | Create Wikidata Q-ID for Cinute Digital Pvt Ltd | Q (external) |
| **BLG-129** | Add CCBot/Bytespider/Diffbot to robots.ts AI block | Q |
| **BLG-130/198/199** | Crunchbase + Clutch + G2 + Tracxn profile claims | D (external) |
| **BLG-133** | Add Sanity doc types: course, mentor, event, testimonial, hiringPartner, service, city | W |
| **BLG-134** | Add validation.required() to post/author/category critical fields | Q |
| **BLG-135** | Extend post.seo with ogImage/noindex/nofollow | Q |
| **BLG-136** | Add seo object to author schema | Q |
| **BLG-137** | Add featuredImage + seo to category schema | Q |
| **BLG-139/140** | draftMode integration + /api/preview routes + 2nd Sanity client | D |
| **BLG-141** | Restrict post.content block styles (no h1) | Q |
| **BLG-142** | Add alt validation to inner image type in post.content | bundled with BLG-132 |
| **BLG-143** | Add maxLength to post.seo.metaTitle/metaDescription | Q |
| **BLG-144** | Enforce slug isUnique validator | Q |
| **BLG-146** | Add tags arg to client.fetch (pair with webhook) | H |
| **BLG-147** | Sanity author expertise + credentials fields (post BLG-108) | bundled |
| **BLG-148** | Add JOBS_SLUG_QUERY to Sanity queries | Q |
| **BLG-149** | Project _updatedAt in JOBS_QUERY | Q |
| **BLG-150** | Fix PortableText link external-detection edge cases | Q |
| **BLG-151** | Make publishDate required on post schema | Q |
| **BLG-152** | Add issuedDate + expiresAt to certificate schema | Q |
| **BLG-156** | Investigate plural-slug ranking persistence | H |

**Sprint 5 total effort: ~3-4 weeks engineering (BIG sprint — Sanity doc types alone is 1+ week)**

**Sprint 5 success criteria:**
- Sanity Studio has 12 doc types instead of 5
- Sanity publishes trigger ISR within 1 minute
- llms.txt + llms-full.txt accurate and complete
- Wikidata Q-ID established
- 3+ B2B/EdTech directory profiles live

---

## Sprint 6 — Content Cycle (Week 9-16) — BIGGEST SPRINT

> **Goal:** ~30-35 new top-level routes covering tool-landing, comparison, vertical, pillar, B2B, free-tool, case-studies. Plus city-page CTR rescue across 765 pages.

### Tool landing pages (10 — BLG-174)
- /tools/selenium-training-india
- /tools/postman-api-testing-training
- /tools/jira-training-india
- /tools/cypress-training
- /tools/playwright-training
- /tools/sql-training-india
- /tools/python-training-detailed
- /tools/r-programming-training
- /tools/tensorflow-training
- /tools/pytorch-training

### Comparison pages (6 — BLG-125, BLG-167)
- /compare/manual-vs-automation-testing
- /compare/power-bi-vs-tableau
- /compare/python-vs-r-for-data-science
- /compare/selenium-vs-cypress-vs-playwright
- /compare/cdpl-vs-simplilearn
- /compare/istqb-vs-astqb

### Pillar + process pages (5 — BLG-099, BLG-124, BLG-131)
- /resources/become-software-tester-2026 (4000 words)
- /resources/data-science-career-path-india (4000 words)
- /resources/software-testing-salary-india-2026 (3000 words)
- /resources/manual-to-automation-transition-guide (3000 words)
- /resources/istqb-foundation-study-guide (4000 words)

### B2B corporate training cluster (5-8 — BLG-176, BLG-048, BLG-102)
- /corporate-training (hub)
- /corporate-training/software-testing
- /corporate-training/data-science
- /corporate-training/digital-marketing
- /corporate-training/fdp (Faculty Development)
- /corporate-training/custom-workshops
- /corporate-training/hire-from-cdpl (staff-aug)

### Vertical solutions (2 — BLG-103, BLG-175)
- /solutions/bfsi-software-testing
- /solutions/healthcare-data-analytics

### Free linkable assets (3 — BLG-100, BLG-128)
- /tools/it-salary-calculator-india
- /tools/career-path-quiz
- /tools/course-syllabus-comparator

### Case studies (BLG-179, BLG-112, BLG-170)
- /case-studies (hub)
- /case-studies/[slug] (Sanity-driven, 20-30 alumni)

### Process pages (BLG-180, BLG-181, BLG-178)
- /how-placement-works
- /faculty-development-program (dedicated)
- /upcoming-batches

### Mentor profiles (BLG-101)
- /mentors/[slug] (dynamic per-mentor pages)

### Pricing transparency (BLG-177)
- /fees (or per-course fee blocks)

### Content rewrites (BLG-187, BLG-188, BLG-095, BLG-154, BLG-159)
- 765 city-page meta-description rewrites (CTR rescue)
- /services/sttp content rewrite (biggest non-brand traffic page)
- City cross-linking infrastructure
- Wrong-description fix in headerData.ts already done in Sprint 1

### Linkage / process (BLG-104, BLG-105, BLG-106, BLG-107, BLG-111, BLG-188)
- Blog → course contextual linking workflow
- /mentors → courses linkage
- /reviews → courses filter linkage
- Course → trainer profile linkage

### Other (BLG-110, BLG-126, BLG-127, BLG-158, BLG-168, BLG-169, BLG-193)
- Refresh year-stamped content (2025-* → 2026-*)
- Replace non-defensible stats with NASSCOM/Indeed/Glassdoor citations
- CDPL Placement Report 2026 (first-party data publication)
- Interview-question pages (15 pages — BLG-168)
- Tutorial content cluster (start with 10 — BLG-169)
- Real-alumni review acquisition workflow

**Sprint 6 total effort: 8-12 weeks (2-3 months) of combined engineering + content + design**

**Sprint 6 success criteria:**
- ~30-35 new top-level pages live
- City-page CTR (from Phase 10b 0.46-1.3%) climbs to ~3-5%
- 3+ free tools published as linkable assets
- 1 first-party research report published
- Site traffic doubles or better over Cycle 2 timeline

---

## Sprint 7 — Final Backlog Cleanup (Week 17)

> **Goal:** wrap up remaining P3s, cleanup, hygiene.

| BLG | Title | Effort |
| --- | --- | --- |
| **BLG-016** | Remove JSON-LD from /cms layout (noindex route) | Q |
| **BLG-017** | Remove Suspense wrappers around dynamic(ssr:true) sections | Q |
| **BLG-019/020** | Cleanup stale webpackBuildWorker comment + @prisma/client | Q |
| **BLG-023** | Fix GoogleAnalytics double-fire on initial gtag config | Q |
| **BLG-035** | Migrate /jobs/live-jobs?jobId= to /jobs/live-jobs/[jobId] | D |
| **BLG-037** | Resolve /blog/all-posts vs /blog cannibalization | H |
| **BLG-040** | Add X-Robots-Tag to /public/*.pdf | Q |
| **BLG-049** | Reframe /jobs/live-jobs to lean on CDPL-curated angle | H |
| **BLG-054** | Audit 20 random city-page H1 quality (BLG-095 already fixed wrong descriptions) | H |
| **BLG-082** | Remove 4 unused production deps from package.json | Q |
| **BLG-109** | Move src/content/posts/*.tsx to docs/content-seeds/ or delete | H |
| **BLG-160** | Confirm /manual-testing-course legacy short slug redirect health | Q |
| **BLG-191** | EdTech awards nomination cycle | external |
| **BLG-192** | Speaking circuit pipeline | external |

**Sprint 7 total effort: 3-5 days engineering + ongoing external**

---

## Cycle 3 — CWV + Heavy-Dep Removal (Week 18+)

> **Goal:** address CWV findings from Sprint 6 bundle analyzer baseline. Replace heavy libs.

| BLG | Title | Effort |
| --- | --- | --- |
| **BLG-004** | Convert course-detail content sections from `ssr:false` to SSR (25 pages) | W (×25 pages) |
| **BLG-008** | Server-component conversion sweep (~150 'use client' files) | W (multi-week) |
| **BLG-014** | Resolve optimizeCss + Tailwind v4 conflict (or migrate to beasties) | D |
| **BLG-015** | Migrate 34 *Data.ts curriculum files to Sanity (post BLG-133) | W |
| **BLG-022** | Verify + fix Sanity Studio bundle isolation | H |
| **BLG-084** | Codemod replace framer-motion in 160 files (CSS / IntersectionObserver) | W (multi-week) |
| **BLG-090** | Add placeholder=blur to Sanity blog images (post BLG-083) | H |
| **BLG-161** | LCP universal failure — comprehensive fix (above issues compound here) | embedded |
| (replace react-phone-number-input with libphonenumber-js wrapper) | thin custom wrapper | D |

**Cycle 3 total effort: 6-10 weeks (1.5-2.5 months)**

**Cycle 3 success criteria:**
- LCP < 2.5s on mobile for all 128 evaluated URLs (BLG-161 closed)
- Course content visible to AI crawlers (BLG-004 closed)
- Bundle size drops 30-50% on shared chunks
- INP / CLS remain passing (no regression)

---

## Cycle 2+ external work (parallel to all sprints)

| BLG | Title | Schedule |
| --- | --- | --- |
| BLG-172 | Institutional partnership (IIT/IIM-style) | 6+ months external |
| BLG-173/193 | Real-alumni review acquisition (425 → 1000+) | ongoing |
| BLG-190 | Founder thought-leadership cadence | ongoing |

---

## Timeline summary

| Sprint | Duration | Effort | Cumulative weeks |
| --- | --- | --- | --- |
| Sprint 1 — Production De-risking | 1-2 wks | 3-5 days eng + 1-2 wks external | wk 1-2 |
| Sprint 2 — Schema Parity | 1 wk | 5-7 days | wk 3 |
| Sprint 3 — Tooling/UX | 1 wk | 4-5 days | wk 4 |
| Sprint 4 — Performance/Cache | 1-2 wks | 3-4 days | wk 5-6 |
| Sprint 5 — GEO/Sanity/Infra | 3-4 wks | 3-4 weeks (Sanity doc types alone is 1+ wk) | wk 7-10 |
| Sprint 6 — Content Cycle | 8-12 wks | 8-12 weeks combined eng+content+design | wk 11-22 |
| Sprint 7 — Cleanup | 1 wk | 3-5 days | wk 23 |
| Cycle 3 — CWV + Heavy-Dep | 6-10 wks | 6-10 weeks | wk 24-33 |

**Total Cycle 2 + 3 timeline: ~6-8 months** (assuming 1 senior eng full-time + content team).

---

## Branch policy (reminder)

Per user decision at audit start: **each fix lands on its own `fix/<slug>` branch off `develop`**. User decides per-fix whether to merge or hold.

Suggested branch slug naming:
- `fix/blg-001-remove-seohead-canonical`
- `fix/blg-056-delete-fabricated-reviews`
- `fix/blg-058-course-price-schema`
- `feat/blg-174-tool-landing-pages-sprint-6`
- etc.

---

## Sprint kickoff order (recommended start)

Begin Cycle 2 with **Sprint 1 high-priority bundle**:

1. **fix/blg-056** (delete fabricated reviews) — **most urgent** (Manual Actions still clean)
2. **fix/blg-001** (delete SeoHead.tsx)
3. **fix/blg-002** (not-found.tsx Link fix)
4. **fix/blg-042-mock-test-brand** (drop "Testriq")
5. **fix/blg-095-headerdata-descriptions** (rewrite course descriptions)
6. **fix/blg-044-non-defensible-claims** (meta-description sweep)
7. **fix/blg-058-course-price** (after BLG-095 lands)
8. **fix/blg-132-sanity-image-alt** (Sanity schema fix)

That's roughly 5 working days of focused engineering and unlocks the highest-impact fixes.

---

## Phase 14 / Cycle 1 close — what user decides next

| Decision | Options |
| --- | --- |
| Begin Cycle 2 Sprint 1 now? | yes / hold / pick selective fixes |
| Merge `seo-audit/cycle-1-discovery` branch to `develop` first? | recommended (audit docs live in develop for reference) |
| Hire external content team for Sprint 6? | content brief ready in [docs/seo-audit/07-content-ia.md](07-content-ia.md) + [12-competitive-gap.md](12-competitive-gap.md) + [13-edtech-india-optimization.md](13-edtech-india-optimization.md) |
| Authorize Cycle 2 Sprint 6 budget (~$15-30K content + design + dev) | yes / hold for staged approval |

---

**Total Cycle 1 deliverables:** 18 files in `docs/seo-audit/` (14 phases + 10b live GSC + fix-backlog + sprint-roadmap + progress + decisions + README + page-inventory).
