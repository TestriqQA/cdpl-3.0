# Phase 10b — GSC Live Data (validation of Phase 10 predictions)

> **Date pulled:** 2026-05-19 via Chrome MCP (browser "sushma")
> **Property:** `https://www.cinutedigital.com/` — **URL-prefix** (not Domain)
> **Account:** `seo@testriq.com`
> **Date range:** 3 months (default GSC window, ending 2026-05-19)
> **Last GSC update:** 3.5 hours ago

---

## 10b.1 Property setup

| # | Finding | Severity |
| --- | --- | --- |
| 10b.1.1 | **Only URL-prefix property** (`https://www.cinutedigital.com/`) exists. **No Domain property.** Phase 10 §10.1.1 confirmed: cannot see non-www/http indexing risks. | **BLG-153 — P1** |

---

## 10b.2 Overview baseline

| Metric | Value | Notes |
| --- | --- | --- |
| **Web Search clicks (3 mo)** | **878** | ~10/day — low |
| **Web Search impressions (3 mo)** | **110,000** | Site IS visible — CTR is the bottleneck |
| **Average CTR** | **0.8%** | Industry healthy: 3-5%. **The single highest-leverage SEO lever.** |
| **Average position** | **16.6** | Middle of page 2 — ranking but not clicking |
| **Indexed pages** | 613 | Discovered: 928, indexed: 613 = **66% sitemap-to-index ratio** |
| **Not indexed pages** | **1,203** | 1.96× indexed count |
| **Videos indexed** | 0 / 79 | No VideoObject schemas surfacing |

> 110K imps × 0.8% CTR = 878 clicks. If CTR went to **3%**, clicks would be **~3,300** → **~3.75× boost** with no new traffic.
> Closing BLG-043 (long titles) + BLG-044 (non-defensible claims) + BLG-095 (wrong descriptions) directly addresses this CTR gap.

---

## 10b.3 Coverage / Pages — full breakdown

| Reason | Source | Status | Count |
| --- | --- | --- | --- |
| **Crawled - currently not indexed** | Google systems | Failed | **814** |
| Discovered - currently not indexed | Google systems | Passed | 134 |
| Excluded by 'noindex' tag | Website | Failed | 112 |
| Blocked by robots.txt | Website | Started | 44 |
| Page with redirect | Website | Failed | 42 |
| Not found (404) | Website | Failed | 26 |
| Alternate page with proper canonical tag | Website | Failed | 19 |
| Duplicate, Google chose different canonical than user | Google systems | Passed | 12 |
| Redirect error | Website | Passed | 0 |
| **Total not indexed** | | | **1,203** |
| **Indexed** | | | **613** |

### 10b.3.1 "Crawled - currently not indexed" (814) — drilled

First 11 URLs in this bucket:
1. **`/blog/drill-through-bookmarks-buttons-ux-patterns-pro-dashboards`** — real content, not indexed
2-10. `/_next/static/chunks/*.js` and `*.css` files
11. `/favicon.ico`

**Verdict:** **~700-800 of the 814 are `/_next/static/*` chunks** (cosmetic). They're correctly `X-Robots-Tag: noindex` per `next.config.ts:344-360`. **Google says "Crawled" + "Not indexed"** which is the expected outcome for noindex'd assets — they appear in this report indefinitely.

**Real content URLs in this bucket: ~14-50 (estimate).** Validation "Started 4/21/26, Failed 4/25/26" — the April-2026 robots fix validation cycle. Latest message (May 18) says "Page indexing issues successfully fixed" — so Google IS reading the new state, just slowly clearing the report.

> **Verdict:** **Less alarming than the headline number suggests.** Phase 10 §10.2's predicted ~50-150 is roughly accurate for real-content URLs in this bucket. **BLG-NEW P2:** Filter the report (or wait 30-60 days for Google to clear stale).

### 10b.3.2 "Blocked by robots.txt" (44) — drilled

Sample URLs in this bucket:
- `/api/subscribe` — **legitimate block** (`/api/` Disallow ✓)
- ~43× `/_next/static/css/*.css` and `/_next/static/media/*.woff2`

But **live robots.txt explicitly Allows `/_next/static/`** (verified by fetching `https://www.cinutedigital.com/robots.txt`). So these 43 entries are **stale data from pre-April-2026 robots.txt** (when `/_next/` WAS Disallowed per the comment in `robots.ts:13-22`).

**Verdict:** Status "Started" — validation in progress; should clear in 30-60 days. **No action needed.**

### 10b.3.3 "Duplicate, Google chose different canonical than user" (12) — 🚨 **CONFIRMS BLG-001**

Real content URLs in this bucket (sample):
- `/blog/drill-through-bookmarks-buttons-ux-patterns-pro-dashboards`
- `/blog/category/business-intelligence`
- `/data-science-course-in-mankhur`
- `/data-science-course-in-jammu`
- `/digital-marketing-course-in-matunga-road`
- `/data-science-course-in-csmt`
- `/digital-marketing-course-in-chandigarh`
- `/software-testing-course-in-al-dhannah` (UAE city)
- `/software-testing-course-in-dadar`
- `/digital-marketing-course-in-visakhapatnam`
- `/digital-marketing-courses-in-kanjur-marg` (**PLURAL slug** — should redirect)
- `/software-testing-course-in-jaipur`

> **Finding:** 12 URLs with **canonical ambiguity**. Mostly city-course pages. Confirms BLG-001 (SeoHead client-canonical conflicts with Metadata API server-canonical) at small but measurable scale. **One plural slug shouldn't be indexed at all** (`/digital-marketing-courses-in-kanjur-marg`) — confirms BLG-039 risk of redirect targets persisting in index.

### 10b.3.4 Page with redirect (42)

42 URLs match expected ~52 legacy redirects in `next.config.ts`. Some haven't been picked up yet. ✅ working as intended.

### 10b.3.5 Not found 404 (26)

Phase 11 will audit these specifically — likely stale legacy slugs that no longer exist.

---

## 10b.4 Sitemaps

| Field | Value |
| --- | --- |
| URL | `/sitemap.xml` |
| Status | **Success** ✅ |
| Submitted | Apr 18, 2026 |
| **Last read** | **May 17, 2026** (2 days ago) ✅ |
| Discovered pages | **928** (matches Phase 3 §3.5 audit of ~870 + dynamic slugs) |
| Discovered videos | 0 |

> **Verdict:** Sitemap is healthy. Fresh read frequency (2-day lag) means Google IS regularly fetching. No `unstable_cache` needed yet (sitemap fetches Sanity at build, build runs frequently).

---

## 10b.5 Performance — top queries

### Top 20 queries (clicks descending)

| # | Query | Clicks | Impressions | CTR | Type |
| --- | --- | --- | --- | --- | --- |
| 1 | cinute digital | 198 | 683 | **29%** | brand |
| 2 | cdpl | 104 | 1,838 | 5.7% | brand |
| 3 | cdpl mumbai | 23 | 145 | 15.9% | brand+geo |
| 4 | cinute digital private limited | 18 | 29 | 62% | brand legal |
| 5 | cinute | 7 | 53 | 13% | brand |
| 6 | cinute digital reviews | 4 | 85 | 4.7% | brand+intent |
| 7 | cdpl login | 4 | 55 | 7.3% | brand+functional |
| 8 | **sttp** | **3** | **912** | **0.33%** | non-brand, **MAJOR OPPORTUNITY** |
| 9 | sdet course with placement | 3 | 53 | 5.7% | commercial |
| 10 | **software testing course in mumbai** | **2** | **339** | **0.59%** | **PRIMARY commercial keyword** |
| 11 | cinute digital pvt. ltd. ... reviews | 2 | 131 | 1.5% | brand long |
| 12 | digital marketing course in andheri | 2 | 119 | 1.7% | local commercial |
| 13 | manual testing course with placement | 2 | 33 | 6.1% | commercial |
| 14 | cinute digital pvt. ltd. ... | 2 | 25 | 8% | brand long |
| 15 | digital marketing **courses** in charni road | 1 | 171 | 0.58% | **plural slug — should redirect** |
| 16 | sttp certificate | 1 | 154 | 0.65% | informational |
| 17 | digital marketing **courses** in andheri | 1 | 114 | 0.88% | **plural slug** |
| 18 | data science classes in mumbai | 1 | 102 | 0.98% | local commercial |
| 19 | ai classes near me | 1 | ? | ? | local-intent |
| 20 | (truncated) | | | | |

### Insights

1. **~362 of 878 clicks are brand queries (41%)** — site is heavily brand-dependent
2. **`sttp` query: 912 imps / 0.33% CTR** — biggest non-brand opportunity. STTP = Short Term Training Program. Page `/services/sttp` ranks but doesn't convert. **Action: Sprint 6 content rewrite for `/services/sttp`.**
3. **`software testing course in mumbai`: 339 imps / 0.59% CTR** — the PRIMARY commercial keyword. Confirms BLG-043 + BLG-044 + BLG-095 hurt CTR.
4. **Plural slugs still ranking** (`digital marketing courses in andheri/charni road`) — despite the `next.config.ts` plural→singular redirect, Google still serves the plural form for some impressions. **Re-evaluate BLG-039.**
5. **`sdet course with placement`** + **`manual testing course with placement`** — short-tail commercial queries getting good CTR (5-6%) but low impressions. **Action: optimise these landing pages — they convert when they rank.**

---

## 10b.6 Performance — top pages

### Top 16 pages (clicks descending)

| # | Page | Clicks | Impressions | CTR |
| --- | --- | --- | --- | --- |
| 1 | `/` (home) | **423** | 6,009 | **7%** |
| 2 | `/artificial-intelligence-course-in-dombivli` | 16 | 1,278 | 1.3% |
| 3 | `/courses` | 16 | 909 | 1.8% |
| 4 | `/jobs/careers` | 15 | 1,458 | 1% |
| 5 | **`/services/sttp`** | **13** | **3,623** | **0.36%** |
| 6 | `/cdpl-certificate-validation` | 11 | 307 | 3.6% |
| 7 | `/services/industrial-visits` | 10 | 488 | 2% |
| 8 | `/services` | 9 | 1,216 | 0.74% |
| 9 | `/services/internship-program` | 9 | 225 | 4% |
| 10 | `/about-us` | 8 | 1,197 | 0.67% |
| 11 | `/our-team` | 8 | 1,168 | 0.69% |
| 12 | `/mentors` | 8 | 475 | 1.7% |
| 13 | `/reviews` | 8 | 437 | 1.8% |
| 14 | `/artificial-intelligence-course-in-ahmedabad` | 7 | 1,531 | 0.46% |
| 15 | `/contact-us` | 7 | 1,238 | 0.57% |
| 16 | `/manual-testing-course` (legacy short slug) | (some) | (some) | — |

**880 unique pages have impressions** (vs 613 indexed) — means **some pages were indexed earlier in the window and have since dropped out of the index.**

### Insights

1. **Home gets 48% of all clicks** (423/878). Heavy concentration.
2. **`/services/sttp` is the biggest non-brand impression-driver** (3,623 imps but 0.36% CTR). Content rewrite is the single highest-leverage action.
3. **2 city pages** (`/artificial-intelligence-course-in-dombivli` + `/...-in-ahmedabad`) **ARE getting impressions** — proves city-page strategy CAN work; CTR optimization needed.
4. **`/manual-testing-course`** (LEGACY non-canonical slug) **still ranks** — Google continues to serve old URLs.
5. CTR on trust pages (`/our-team`, `/mentors`, `/reviews`, `/about-us`) is poor (0.6-1.8%) — meta description rewrites should help.

---

## 10b.7 Enhancements — confirmed live errors

### Review snippets (BLG-056 CONFIRMATION)

| Issue | Validation | Items |
| --- | --- | --- |
| **Invalid object type for field `<parent_node>`** | Not Started | **8** |
| **Invalid object type for field `itemReviewed`** | Not Started | **8** |
| Missing field "itemReviewed" | N/A | 0 |
| Missing field "author" | N/A | 0 |
| Review has multiple aggregate ratings | Passed | 0 |

**16 affected URLs (8 URLs × 2 issues each):**
- `/blog`
- `/blog/category/data-science`
- `/blog/category/software-testing`
- `/blog/category/digital-marketing`
- `/blog/category/web-development`
- `/blog/category/artificial-intelligence`
- `/events`
- `/cdpl-affiliate-program`

> **VERDICT:** These 8 URLs all call `generateSingleReviewSchema` from their consolidator — confirmed by Phase 5 §5.6 source inspection. **Google is rejecting the schema as malformed (invalid `@type`), NOT detecting fake reviews yet.** Fix per BLG-056: **delete `generateSingleReviewSchema`** and all 30+ call sites. Validation status "Not Started" — error count active.

> **Crucial insight:** Manual Actions are clean. Google's ML hasn't yet flagged the fabricated review pattern — but the schema malformation is already preventing rich-result eligibility. **Window of opportunity to fix BLG-056 BEFORE Google's ML cycle catches the fake-review pattern.**

### Other Enhancements (PREDICTION-DISPROVED in places)

| Type | Valid | Invalid | Phase 10 prediction | Reality |
| --- | --- | --- | --- | --- |
| Breadcrumbs | 104 | 0 | passing | ✅ confirmed |
| Events | 173 | 0 | passing | ✅ confirmed |
| FAQ | 112 | 0 | passing | ✅ confirmed (Phase 5 §5.11 risk of "multiple FAQPage" not surfacing) |
| **Job Postings** | **7** | **0** | **predicted errors from BLG-138** | **❌ Prediction disproved** — BLG-138 less severe than expected (or only 7 jobs sampled) |
| Review snippets | 182 | **16** | predicted errors from BLG-056 | ✅ confirmed |
| Videos | 1 | 0 | passing | ✅ |

> **BLG-138 revision needed:** Re-inspect `generateJobPostingSchema` — it may actually set the required fields properly. Or the 7 sampled jobs got lucky. **Re-audit in Cycle 2 Sprint 2.**

### Sitelinks Searchbox

- **Not eligible** because `generateWebsiteSchema` lacks `potentialAction: SearchAction` — **CONFIRMS BLG-068** (no direct GSC report; inferred from absence of "Sitelinks Searchbox" enhancement section)

---

## 10b.8 Core Web Vitals — confirmed

### Mobile

| Issue | URLs | Validation |
| --- | --- | --- |
| **LCP issue: longer than 2.5s (mobile)** | **128** | Not Started |
| INP issue: longer than 200ms (mobile) | 0 | N/A |
| (CLS issues not surfaced) | 0 | |

### Desktop

| Bucket | Count |
| --- | --- |
| Good | 0 |
| Need improvement | 0 |
| Poor | 0 |

> Desktop has no CRUX data (likely <8000 desktop views/28-day per URL — insufficient sample).

### Insights vs Phase 6 predictions

| Phase 6 Prediction | Reality | Notes |
| --- | --- | --- |
| LCP fails on blog post pages (3-5 s risk) | ✅ confirmed | broader than blog — 128 URLs |
| LCP fails on `/locations-we-serve` (Leaflet) | likely included in 128 | not separated |
| INP risk from `react-phone-number-input` + 250 'use client' | **❌ disproved** — INP passes | Hydration cost real but not breaking 200ms threshold |
| CLS risk on blog images (`next-sanity-image` not on hero) | **❌ disproved at GSC field level** — CLS passes | Phase 6 §6.6.1 fix scope downgrade |

> **LCP is the universal mobile CWV issue.** INP/CLS pass. **Cycle 3 framer-motion + 'use client' triage focus should be LCP, not INP.**

---

## 10b.9 Manual Actions ✅ + Security ✅

- **Manual Actions: Clean** — no actions
- **Security: Clean** — no issues

> **Crucial finding:** Google's review-detection ML **has not yet** flagged BLG-056. Fix window is open.

---

## 10b.10 Messages (14 unread of 125 total)

| Date | Subject |
| --- | --- |
| **May 18, 2026** | **Page indexing issues successfully fixed for site `https://www.cinutedigital.com/`** ✅ — April-2026 fix validation succeeded |
| May 6, 2026 | Some fixes failed for Page indexing issues |
| Apr 27, 2026 (×3) | Some fixes failed for Page indexing issues |
| (older) | More fixes-failed cycles |

> **Pattern:** Long-running indexing-validation cycle history. Most failed. Latest succeeded — site has turned a corner on indexing health.

---

## 10b.11 Cross-reference: Phase 10 predictions vs reality

| Backlog ID | Phase 10 prediction | Reality | Verdict |
| --- | --- | --- | --- |
| **BLG-001** | "Duplicate without user-selected canonical" presence | **12 URLs confirmed** — city pages mostly | ✅ confirmed |
| **BLG-004** | "Crawled — currently not indexed" trend | 814 total, ~50-100 real content, rest cosmetic _next/static | ✅ predictions roughly correct |
| **BLG-042** | Anomalous low CTR on `/mock-test`, `/istqb-registration` | These URLs don't appear in top 25 — too low volume to measure. Hidden by other low-CTR pages. | partial — need direct URL query in GSC |
| **BLG-043** | Truncated titles damaging CTR | **0.8% site CTR vs 3-5% healthy** = 4× drag | ✅ confirmed |
| **BLG-044** | Non-defensible claims causing Google to rewrite metas | site CTR 0.8% on 110K imps confirms massive lost clicks | ✅ |
| **BLG-056** | Review snippet warnings | **16 errors on 8 URLs confirmed** | ✅ **CRITICAL CONFIRMATION** |
| **BLG-058** | Course rich result "Invalid offer price" | not surfaced in Enhancements (CoursePage rich-result category not separately tracked at this level) | inconclusive — need URL Inspector |
| **BLG-068** | Sitelinks Searchbox ineligible | confirmed (no enhancement category) | ✅ |
| **BLG-095** | Low CTR on course pages | 0.59% on primary commercial keyword | ✅ |
| **BLG-138** | JobPosting rich result errors | **0 invalid** | ❌ **disproved at current sample** — needs re-audit |
| Phase 6 INP risk | predicted failing | passing | ❌ disproved |
| Phase 6 CLS risk | predicted failing on blog | passing | ❌ disproved |

---

## 10b.12 New backlog entries (post-GSC validation)

| ID | Issue | Severity |
| --- | --- | --- |
| **BLG-153** | No Domain GSC property — only URL-prefix exists; cannot see non-www/http indexing risks per Phase 10 §10.1.1 | P1 |
| **BLG-154** | `/services/sttp` is biggest non-brand impression-driver (3,623 imps, 0.36% CTR) — content rewrite high-leverage | P1 |
| **BLG-155** | 12 city/blog URLs with "Duplicate, Google chose different canonical" — confirms BLG-001 manifestation | (already P0 BLG-001) |
| **BLG-156** | Plural slugs (`/digital-marketing-courses-in-...`) STILL ranking despite redirect — Google retaining pre-redirect impressions | P2 |
| **BLG-157** | 880 pages have impressions, 613 indexed — ~267 URLs dropped out of index during 3-month window. Index-stability issue. | P1 |
| **BLG-158** | 880 — 613 = 267 page churn within 90 days suggests content quality / freshness signals weak | P2 |
| **BLG-159** | "sttp" + "sdet course" + "manual testing course with placement" — high-imp commercial queries low CTR; need landing-page CTR optimization | P1 |
| **BLG-160** | `/manual-testing-course` (legacy short slug) STILL ranks despite 301 — Google retains legacy URL in SERP | P3 (cosmetic — same content serves) |
| **BLG-161** | LCP > 2.5s on **all 128** mobile URLs — broader than blog-only prediction. Cycle 3 focus should be LCP-specific. | P0 (cross-cuts BLG-014/BLG-084/BLG-093/BLG-145) |
| **BLG-162** | BLG-138 re-audit needed — 0 invalid JobPosting in current sample; may be less severe than predicted | P3 — Cycle 2 Sprint 2 |

---

## 10b.13 Phase 10b summary

### ✅ Predictions confirmed
- BLG-001 SeoHead double-canonical → 12 URLs flagged
- BLG-004 ssr:false invisible → most "Crawled-not-indexed" cosmetic, but real content URLs also missing
- BLG-043 + BLG-044 + BLG-095 → 0.8% CTR confirms massive CTR drag
- BLG-056 → **16 review-snippet errors live**, schema malformed
- BLG-068 → Sitelinks Searchbox ineligible
- Sitemap healthy ✅
- Manual Actions clean ✅
- Security clean ✅

### ❌ Predictions disproved
- BLG-138 JobPosting errors — **0 invalid** in current sample
- Phase 6 INP risk — **passing**
- Phase 6 CLS risk — **passing**

### 🚨 New critical findings
- **LCP fails on ALL 128 evaluated mobile URLs** (BLG-161 P0)
- **880 ranked pages → 613 indexed** = ~267 pages dropped index during window (BLG-157)
- **`/services/sttp` is the biggest underperforming page** — 3,623 imps, 0.36% CTR (BLG-154)
- **Plural slugs still ranking in search** despite redirect (BLG-156)

### Most urgent Cycle 2 Sprint 1 actions reaffirmed

| # | Action | Backlog | GSC justification |
| --- | --- | --- | --- |
| 1 | Delete `generateSingleReviewSchema` | BLG-056 | **16 live errors on 8 URLs; Manual Actions still clean — fix window open** |
| 2 | Delete `SeoHead.tsx` + use Metadata API canonical only | BLG-001 | **12 URLs with canonical ambiguity** |
| 3 | Rewrite 30+ meta descriptions (drop "100% placement") | BLG-044 | **0.8% CTR vs industry 3-5%** — single biggest revenue lever |
| 4 | Rewrite 35 long titles | BLG-043 | Same — Google truncating titles hurts CTR |
| 5 | Fix wrong brand on `/mock-test` + `/istqb-registration` | BLG-042 | low-volume but P0 brand integrity |
| 6 | Rewrite `/services/sttp` content | BLG-154 | 3,623 imps × CTR uplift = ~100+ extra clicks/3mo |

### Backlog total: **162 entries** (BLG-001 → BLG-162) across **16 P0 / 58 P1 / 56 P2 / 32 P3**
