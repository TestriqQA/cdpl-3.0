# Phase 10 — Google Search Console Triage

> **Goal:** triage GSC Coverage / Sitemaps / Performance / Enhancements / Manual actions / Security / Links / Page Experience — and **predict findings** based on Phase 1-9 source evidence so user can validate quickly.
> **Date:** 2026-05-19
> **Mode:** **Methodology doc + predictive findings.** Live GSC data must be pasted by the user (see template at §10.10). Until that lands, predictions below are derived from source evidence.

---

## 10.1 GSC properties to verify

Before pulling reports, confirm which property is configured.

| Property type | Authoritative for CDPL | Why |
| --- | --- | --- |
| **Domain property** (`cinutedigital.com`) | **Recommended** | Captures www, non-www, http, https — all variants — and subdomains in one place |
| URL-prefix `https://www.cinutedigital.com/` | OK as primary | Captures only www + https |
| URL-prefix `https://cinutedigital.com/` | Should exist | Captures non-www → useful to confirm BLG-033 (non-www→www redirect)|
| URL-prefix `http://...` | Likely none | http should 301 → https |

> **10.1.1 — Action:** Confirm domain property is verified. If only URL-prefix exists, **add domain property** — it surfaces issues no URL-prefix property can show (split-horizon indexing risk per BLG-033).

---

## 10.2 Coverage report (predicted findings)

| Category | Predicted count | Source evidence | Sprint |
| --- | --- | --- | --- |
| **Submitted and indexed** (✅ green) | ~600-800 URLs | Sitemap has ~870 entries; expect ~80-92% indexed | — |
| **Indexed, not submitted in sitemap** | ~10-50 | Pagination URLs (none currently), search-result indexable variants, tag/category drift | Verify ≤50 |
| **Crawled — currently not indexed** | **~50-150 expected** | BLG-004 (course content `ssr:false` invisible to non-JS) hurts; some city-course pages may be thin → Google declines to index. Pre-April-2026 robots.txt blocked `_next/static/` and Googlebot couldn't render — confirmed fix landed (per `robots.ts` comments) but old reports may still show this. | Verify trend going DOWN since April 2026 fix |
| **Discovered — currently not indexed** | ~10-30 | Fresh city pages slow-indexing | Track |
| **Page with redirect** | **~52 legacy + ~5 plural→singular** | Per `next.config.ts` 52 redirects + `/digital-marketing-courses-in-:city` wildcard | Expected — these should be excluded from index |
| **Alternate page with proper canonical tag** | varies | If BLG-001 (SeoHead double-canonical) is real, will show clusters of "near-duplicate" pages where Google picked one. | Verify |
| **Duplicate without user-selected canonical** | **HIGH RISK** | If `SeoHead` and Metadata API both emit different canonicals → Google may report mismatched canonicals across pages | **Verify FIRST** — confirms BLG-001 severity |
| **Page indexed without referring sitemaps** | minor | OK if low | — |
| **Server error (5xx)** | should be 0 | — | Verify 0 |
| **Excluded by 'noindex' tag** | ~770 (`/cms`, `/mock-test/[courseSlug]`, `/blog/search`) + each post-not-found case | Phase 3 confirmed | Expected |
| **Blocked by robots.txt** | minimal (`/api/`, `/admin/`, `/private/`, `/cms/`) | Phase 3 | Expected |
| **Soft 404** | check for stale plural city slugs that don't exist in courseData | Phase 3 noted | Track |

### Top 5 things to verify in Coverage

1. **"Duplicate without user-selected canonical"** count — if > 50, confirms BLG-001 is causing canonical ambiguity at scale
2. **"Crawled — currently not indexed"** trend over the last 90 days — should be falling since the April 2026 `/_next/static/` robots fix
3. **"Page with redirect"** count — should equal ~52 + N city-plural redirects (target: matches `next.config.ts:60-323` count)
4. **Excluded count for `/mock-test/*` slugs** — confirms `X-Robots-Tag` is being respected (any indexed slug = BLG-NEW P1)
5. **Excluded count for legacy paths** (`/manual-testing-course`, etc.) — confirms 301 redirects are clean

---

## 10.3 Sitemaps report (predicted findings)

| Item | Expected | Source evidence |
| --- | --- | --- |
| Submitted sitemap URLs | `https://www.cinutedigital.com/sitemap.xml` | `next.config.ts` redirects + `robots.ts` declares this |
| Sitemap status | **Success** | If not, check `lastReadAt` timestamp |
| URLs in sitemap | ~870 | Phase 3 §3.5 audit confirmed |
| URLs indexed from sitemap | 80-92% of 870 = ~700-800 | typical for healthy EdTech sites |
| Last read | Should be <7 days | If stale, BLG-006 webhook absence causes sitemap to update only on rebuild (currently every push) |
| Errors | should be 0 | If errors found, likely from BLG-021 (Sanity fetch failures during sitemap build) |

> **10.3.1 — Track:** sitemap last-read timestamp. If >7 days, Google is throttling crawl frequency — likely a signal of low freshness or low quality. Should improve after Cycle 2 Sprint 5 webhook lands.

---

## 10.4 Performance report (predicted findings)

### High-CTR-opportunity queries (predicted)

These are queries CDPL likely ranks for at positions 4-15 but with low CTR:

| Query family | Predicted GSC behaviour | Why low CTR |
| --- | --- | --- |
| "software testing course in mumbai" | Position 5-15, CTR 1-3% | Title too long (Phase 4 BLG-043), description has non-defensible "100% placement" claim (BLG-044) that Google may rewrite |
| "automation testing course with placement" | Position 8-20, CTR <2% | Title 67 chars (BLG-043) gets truncated; "100% placement" claim filtered |
| "data science course in mumbai" | Position 5-12, CTR 1-3% | Title 71 chars too long |
| "power bi course in mumbai" | Position 6-14, CTR 1-3% | Title 60 chars OK; competition heavy |
| "ISTQB foundation training" | Position 10-30 | `/istqb-registration` title says **"Testriq"** (BLG-042 P0) — wrong brand → Google may suppress |
| "mock test for software testing" | Position 8-20 | Same wrong-brand issue on `/mock-test` |
| Long-tail city queries (e.g., "software testing course in vasai") | Position 1-10, CTR 5-15% | City-course pages are well-optimized — likely the strongest segment |
| "manual testing course online" | Position 5-12, CTR 2-4% | Title 58 chars ✓; description includes non-defensible claims |

### High-impressions-low-position (Position 8-15 opportunities)

These are queries to prioritise for Cycle 2 Sprint 6 content/title rewrites. Without GSC data, can't enumerate specifically — but predicted clusters:

- **City + course combinations** (Pune Manual Testing, Bangalore Data Science, etc.) — 765 pages × ~5-10 queries each = ~5000 long-tail queries
- **"Best X institute in Mumbai/India"** family
- **Comparison queries** ("Power BI vs Tableau", "Selenium vs Cypress") — CDPL has NO comparison pages (BLG-125), so likely never ranks
- **"Salary" queries** ("software tester salary India") — CDPL has no salary content (BLG-100)

### Top 20 pages (predicted)

| Page family | Likely top-pages | Why |
| --- | --- | --- |
| Home `/` | #1 by impressions | brand queries + general "best software testing institute" |
| Manual Testing `/courses/.../manual-testing-course` | Top 5 | most-searched course |
| Data Science `/courses/.../data-science-course` | Top 5 | competitive but valuable |
| Software Testing Hub `/courses/software-testing-course` | Top 10 | category-level intent |
| Mumbai city pages | Top 20 | Local SEO sweet spot |
| About Us, Contact Us | Top 20 | brand discovery |

---

## 10.5 Enhancements report (predicted findings)

### Mobile Usability

| Predicted finding | Severity | Source evidence |
| --- | --- | --- |
| **"Clickable elements too close together"** likely on city-course / course detail pages | P2 | Tap-target audit deferred to Phase 11 |
| **"Text too small to read"** on legal pages / footer | P3 | inline styles on `not-found.tsx` use unspecified font sizes |
| **"Viewport not set"** unlikely (Next.js auto-sets) | n/a | ✅ |

### Core Web Vitals

| Field metric | Predicted result | Source |
| --- | --- | --- |
| **LCP** | **Failing on blog post pages (3-5 s)** | Phase 6 §6.8 — Sanity CDN not preconnected (BLG-093), no `next-sanity-image` on hero (BLG-145) |
| **LCP** | **Passing on home, course detail (1.5-2.5 s)** | text LCP |
| **INP** | **Failing on home form pages (200-400 ms)** | Phase 6 §6.9 — react-phone-number-input + dynamic modal load |
| **INP** | **Risk on first interaction during hydration** | 250 'use client' files (BLG-008) cause long-task storms |
| **CLS** | **Risk on blog post pages** | Sanity images without `next-sanity-image` lack width/height (BLG-145) |
| **CLS** | Passing on most other templates | width/height set per Phase 6 §6.6 |

### Course Rich Result (NEW)

Google added EdTech-specific Course rich result enhancements in 2024-2025.

| Predicted error | Severity |
| --- | --- |
| **"Invalid offer price"** on every course page | **P0** — BLG-058 hard-codes 25000-65000 |
| **"Missing courseInstance.courseSchedule"** | P1 — BLG-075 |
| **"Missing educationalLevel"** | P1 — BLG-063 |
| **"Missing hasCourseInstance.location"** | P2 |
| **"Suspicious review pattern"** | **P0 RISK** — BLG-056 fabricated reviews; Google's ML may flag |

### FAQ Rich Result

| Predicted finding | Severity |
| --- | --- |
| **"Multiple FAQPage per page"** errors on routes that have both layout-emitted Org and consolidator-emitted FAQ | P2 — Phase 11 verify |
| **FAQ content contains non-defensible claims** | P1 — content review needed |

### Breadcrumb Rich Result

| Predicted finding | Severity |
| --- | --- |
| **"Multiple BreadcrumbList per page"** on city-courses (consolidator + page.tsx both emit) | P2 — Phase 5 §5.12.1 |
| **Otherwise passing** | ✅ |

### Review Rich Result

| Predicted finding | Severity |
| --- | --- |
| **"Self-serving review" detection** ⚠️⚠️⚠️ | **P0 — BLG-056 fabricated reviews on 830 routes** |
| **"Review without itemReviewed"** | should be 0 since `generateSingleReviewSchema` does set itemReviewed |
| **"Multiple AggregateRating per page"** | P2 — Phase 5 §5.7.3 home Aggregate @id collides with LocalBusiness |

### JobPosting Rich Result

| Predicted finding | Severity |
| --- | --- |
| **"Missing description"** on every JobPosting | **P0 — BLG-138** job schema has no description field |
| **"Missing datePosted"** on every JobPosting | **P0 — BLG-138** |
| **"Missing validThrough"** | P1 — BLG-138 |
| **"Missing baseSalary"** | P1 — BLG-138 |
| **"Missing hiringOrganization.name"** | unlikely — defaults to CDPL in generator | ✓ |

### Sitelinks Searchbox

| Predicted finding | Severity |
| --- | --- |
| **NOT ELIGIBLE** because `generateWebsiteSchema` has no `potentialAction: SearchAction` | P2 — BLG-068 |

---

## 10.6 Manual Actions report

| Likely status | Severity |
| --- | --- |
| **Likely currently 0** | — |
| **Risk: "Site reputation abuse" / "Spammy structured data"** in 30-90 days if BLG-056 fabricated reviews are not removed | **P0** |
| **Risk: "Thin content"** if course detail pages' `ssr:false` issue persists | P1 (BLG-004) |

> **10.6.1 — Action:** Check GSC Manual Actions → if currently clean, **Cycle 2 Sprint 1's BLG-056 + BLG-004 fixes are urgent before Google's review-detection ML penalises**.

---

## 10.7 Security Issues report

| Predicted | Severity |
| --- | --- |
| **Should be clean** | — |
| If hosting is Vercel, security audit covered by Vercel's built-in checks | — |

---

## 10.8 Links report (External + Internal)

### External backlinks (predicted)

Without Ahrefs/SEMrush data, predictions:

- Justdial, Sulekha, Naukri (auto-listed)
- Possibly directory mentions: Shiksha, CollegeDunia
- Possibly forum mentions (StackOverflow if any trainer posts, Quora)
- LinkedIn company page mentions
- Social media profiles (own links)
- Unlikely: Wikipedia (no entity yet — BLG-123)

### Top linked pages (predicted)

- Home, About-Us, Contact-Us (typical backlink targets)
- Possibly featured `/jobs/placements` if alumni share it

### Anchor text distribution

- Likely dominated by "Cinute Digital", "CDPL", brand variants — defensible E-E-A-T signal
- Risk: directory listings using "click here", "learn more" generic anchors

> **10.8.1 — Action:** Phase 14 will detail backlink-building strategy. Phase 10 just measures baseline.

---

## 10.9 Page Experience report

| Predicted | Severity |
| --- | --- |
| **"Good" experience: ~50-70% of URLs** | acceptable but improvable |
| **"Needs improvement" on blog post pages** | LCP/CLS issues per Phase 6 |
| **"Poor" on `/locations-we-serve`** | Leaflet load (Phase 6 §6.8) |
| **HTTPS: 100%** | ✅ assumed |

---

## 10.10 Live GSC data — paste-here template

Once user has GSC access in hand, paste data into the table below and Phase 10 predictions can be validated/replaced with real numbers.

### Coverage report — fill in actual counts

```
Date pulled: __________
Property type: ____ (Domain | URL-prefix)
Property URL: ____________

Submitted and indexed: ____
Indexed, not submitted in sitemap: ____
Crawled — currently not indexed: ____
Discovered — currently not indexed: ____
Page with redirect: ____
Alternate page with proper canonical tag: ____
Duplicate without user-selected canonical: ____
Excluded by 'noindex' tag: ____
Blocked by robots.txt: ____
Soft 404: ____
Server error (5xx): ____
```

### Sitemaps — fill in

```
Sitemap URL: ____
Submitted: yes / no
Status: ____ (Success | Has errors | Couldn't fetch)
URLs in sitemap: ____
URLs indexed: ____
Last read: ____ (days ago)
```

### Performance — top queries (paste top 20)

```
Query | Impressions | Clicks | CTR | Position
______ | ______ | ______ | ______ | ______
(× 20)
```

### Performance — top pages (paste top 20)

```
Page | Impressions | Clicks | CTR | Position
______ | ______ | ______ | ______ | ______
(× 20)
```

### Performance — opportunity queries (position 8-15, paste top 30)

```
Query | Impressions | Clicks | Position | Page
______ | ______ | ______ | ______ | ______
(× 30 — these are Cycle 2 Sprint 6 content/title-rewrite targets)
```

### Enhancements — fill in error counts per rich-result type

```
Course rich result — valid: ____ errors: ____ warnings: ____
FAQ rich result — valid: ____ errors: ____ warnings: ____
Breadcrumb rich result — valid: ____ errors: ____ warnings: ____
Review snippet — valid: ____ errors: ____ warnings: ____
JobPosting — valid: ____ errors: ____ warnings: ____
Sitelinks Searchbox — eligible: yes / no
Mobile Usability — pages with issues: ____
Core Web Vitals (mobile) — Good: ____ Needs Improvement: ____ Poor: ____
Core Web Vitals (desktop) — Good: ____ Needs Improvement: ____ Poor: ____
```

### Manual Actions

```
Status: Clean / Has manual actions
Description if any: ____
```

### Security Issues

```
Status: Clean / Has issues
```

### Links — top external linking sites (paste top 10)

```
Site | Linking pages | Linked target pages
______ | ______ | ______
(× 10)
```

### Links — top linked-to pages internally (paste top 10)

```
Page | Internal links count
______ | ______
(× 10)
```

---

## 10.11 Cross-referencing predictions to backlog

Once GSC data lands, validate the following against measurements:

| Backlog ID | Predicted GSC manifestation | Likely report |
| --- | --- | --- |
| **BLG-001** SeoHead double canonical | "Duplicate without user-selected canonical" count | Coverage |
| **BLG-004** ssr:false invisible to AI | "Crawled — currently not indexed" trend | Coverage |
| **BLG-042** wrong "Testriq" brand on 2 pages | Anomalous low CTR on `/mock-test` and `/istqb-registration` | Performance |
| **BLG-043** 35 titles >60 chars | Truncated titles visible in SERP previews | Manual SERP inspection |
| **BLG-044** non-defensible "100% placement" claims | Google rewriting CDPL meta descriptions | Manual SERP inspection |
| **BLG-056** fabricated reviews | Review snippet warnings / suspicious pattern flag | Enhancements |
| **BLG-058** wrong course prices in schema | Course rich result "Invalid offer price" | Enhancements |
| **BLG-064** missing founder | (No direct GSC signal — Phase 14 Wikidata-driven) | n/a |
| **BLG-095** wrong course descriptions | Low CTR on course pages despite ranking | Performance |
| **BLG-138** job schema missing description/datePosted | JobPosting rich result errors | Enhancements |
| **BLG-068** no SearchAction | Sitelinks Searchbox not eligible | Enhancements |

---

## 10.12 Phase 10 issue summary

Phase 10 is **predictive** — actual P-tagged backlog entries depend on GSC data. New entries to add once data lands (placeholder IDs):

| ID | Predicted issue | Severity (predicted) |
| --- | --- | --- |
| BLG-NEW-A | "Crawled — not indexed" count > 100 | P1 if confirmed |
| BLG-NEW-B | "Duplicate without canonical" > 50 (confirms BLG-001) | already P0 |
| BLG-NEW-C | JobPosting Rich Result errors on >0 pages | P1 (confirms BLG-138) |
| BLG-NEW-D | Review snippet warnings (confirms BLG-056) | P0 — already tracked |
| BLG-NEW-E | Top-20 queries with position 8-15 (Cycle 2 Sprint 6 content targets) | tracked separately |

No new BLG-* IDs assigned until GSC data is provided.

---

## 10.13 Phase 10 summary

### ✅ What we know without GSC

- **Sitemap is submitted correctly** (Phase 3 §3.5 confirmed)
- **Robots.txt is properly configured** (Phase 3 §3.1)
- **Redirect chain integrity verified statically** (Phase 3 §3.6)
- **Real `lastModified` dates in sitemap** (Phase 1 §1.4 — April 2026 fix)

### ⚠️ What requires GSC data

1. **Coverage diagnosis** — predicted ~50-150 "crawled-not-indexed", but actual could be anywhere from 0 to thousands
2. **High-impressions-low-CTR queries** for Sprint 6 content targets — can't enumerate without data
3. **Manual Action status** — must verify clean before Sprint 1 fake-review fix lands
4. **Rich-result coverage validation** — confirms which BLG entries are actually surfacing as Google errors
5. **Backlink baseline** — must measure before Phase 14 outreach starts
6. **Field CWV** (LCP/INP/CLS per template, mobile vs desktop) — replaces Phase 6's predictive risk map

### Methodology delivered

This phase provides:
- **§10.10 paste-here template** for the 8 GSC reports
- **§10.11 cross-reference table** linking each prediction to a backlog ID
- **§10.5 Enhancement predictions** for each rich-result type

### 📝 Phase 10 → Phase 11 handoff

Phase 11 (Chrome MCP live browser audit) will independently verify several Phase 10 predictions without needing GSC:
- LCP/INP/CLS via Lighthouse (field-data proxy)
- Canonical double-emission (BLG-001)
- Render parity with `User-Agent: ClaudeBot/1.0` (BLG-004)
- Server-side rendered HTML completeness per template

### 📝 Phase 10 → Cycle 2 Sprint 1 (pre-fix priority)

Once GSC data lands and **if Manual Actions is currently clean**, Sprint 1's BLG-056 + BLG-004 fixes become **maximally urgent** — they shed Google's manual-action risk before its ML detection cycles fire.

### Backlog total: **152 entries** (unchanged from Phase 9 — Phase 10 predictions don't create new entries until validated against live GSC data)
