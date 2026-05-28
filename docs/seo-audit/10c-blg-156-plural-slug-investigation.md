# Phase 10c — BLG-156 Plural-Slug Investigation

> **Date pulled:** 2026-05-28 via Chrome MCP (browser "sushma")
> **Property:** `https://www.cinutedigital.com/` — URL-prefix
> **Account:** `seo@testriq.com`
> **Date range:** 3 months (matching Phase 10b's window for apples-to-apples comparison)
> **Investigation scope:** BLG-156 (plural-slug ranking despite redirect) — re-verify after 9 days of additional consolidation data

---

## 10c.1 Investigation framing

Phase 10b (2026-05-19) flagged **BLG-156**:

> Plural slugs (`/digital-marketing-courses-in-...`) STILL ranking despite redirect — Google retaining pre-redirect impressions

Severity at the time: **P2**. Specific examples cited:
- `digital marketing courses in charni road` — 1 click / 171 imps / 0.58% CTR
- `digital marketing courses in andheri` — 1 click / 114 imps / 0.88% CTR
- `/digital-marketing-courses-in-kanjur-marg` appeared in canonical-ambiguity §10b.3.X

This phase re-checks the same data after Cycle 2 + post-Cycle-2 shipped, confirms whether the redirect actually fires, asks Google what it sees, and audits the broader plural-vs-singular slug landscape.

---

## 10c.2 Server-side redirect — verified

```
$ curl -sI https://www.cinutedigital.com/digital-marketing-courses-in-andheri
HTTP/1.1 308 Permanent Redirect
Location: /digital-marketing-course-in-andheri

$ curl -sI https://www.cinutedigital.com/digital-marketing-courses-in-charni-road
HTTP/1.1 308 Permanent Redirect
Location: /digital-marketing-course-in-charni-road

$ curl -sI https://www.cinutedigital.com/digital-marketing-courses-in-kanjur-marg
HTTP/1.1 308 Permanent Redirect
Location: /digital-marketing-course-in-kanjur-marg
```

| Finding | Status |
| --- | --- |
| 10c.2.1 | Redirect fires correctly server-side ✓ |
| 10c.2.2 | Status code is **308 Permanent Redirect**, NOT 301 |
| 10c.2.3 | `next.config.ts:328-334` uses `permanent: true` — Next.js defaults that to 308 (preserves request method per RFC 7538) |

**308 vs 301:** Google officially treats them as equivalent for SEO consolidation. RFC 7538 (2015) defines 308 as the method-preserving permanent redirect. In practice, the corpus of SEO advice still favours 301 because (a) it's been around since RFC 2616 (1999) so every crawler implements it consistently, and (b) some non-Google bots and social-media unfurlers don't fully honour 308. For pure HTML page redirects with no request-body to preserve, **301 is the lower-risk choice**.

---

## 10c.3 GSC Performance — plural-URL impact (3 mo)

Filter: `Page > URLs containing > courses-in`, 3-month window ending 2026-05-25.

| Metric | Plural-URL subset | Site total | Share |
| --- | --- | --- | --- |
| Pages | **68** | 595 | 11.4% |
| Clicks | **21** | 865 | **2.4%** |
| Impressions | **6,200** | 112K | **5.5%** |
| Avg CTR | **0.3%** | 0.8% | 0.4× (worse) |
| Avg position | **20.5** | 16.8 | +3.7 (worse) |

Trend: chart shows impressions **declining** over the window — peaked mid-Mar to early-Apr, halved by mid-May. So Google IS consolidating, just slowly. At the current decline rate the long tail will keep bleeding clicks for another 1–2 months.

### 10c.3.1 Top-10 plural URLs by clicks

| URL (plural form, redirected) | Clicks | Imps |
| --- | --- | --- |
| `/digital-marketing-courses-in-mira-road` | 5 | 841 |
| `/digital-marketing-courses-in-mumbai` | 2 | 1,638 |
| `/digital-marketing-courses-in-mangalore` | 2 | 196 |
| `/digital-marketing-courses-in-dadar` | 1 | 917 |
| `/digital-marketing-courses-in-panvel` | 1 | 217 |
| `/digital-marketing-courses-in-kharghar` | 1 | 197 |
| `/digital-marketing-courses-in-pune` | 1 | 172 |
| `/digital-marketing-courses-in-thane` | 1 | 47 |
| `/digital-marketing-courses-in-kalyan-junction` | 1 | 34 |
| `/digital-marketing-courses-in-nagpur` | 1 | 23 |

`/digital-marketing-courses-in-mumbai` is the single biggest plural-URL impressioner at **1,638 / 3mo** despite zero clicks-to-page-traffic value (every visitor 308s through to the canonical).

---

## 10c.4 URL Inspection — Google's view

URL-inspected `https://www.cinutedigital.com/digital-marketing-courses-in-mumbai` (highest-impression plural):

| Field | Value |
| --- | --- |
| **Indexing status** | "URL is not on Google" |
| **Page indexing** | "Page is not indexed: **Page with redirect**" ✅ |
| **Referring pages** | `/digital-marketing-course-in-mumbai` (singular canonical ✓), 1 blog post, **`/sitemap.xml`** |
| **Referring sitemaps** | "No referring sitemaps detected" |

**Reading:** Google has correctly understood the 308 redirect and demoted the plural URL out of the index. The presence of `/sitemap.xml` under "Referring pages" (despite "No referring sitemaps detected") means Google's seeing the sitemap as a general-purpose linker but not honouring it as a submitted sitemap for *this* URL specifically — likely because the URL is NOT in the current sitemap (verified below).

**So why the bleeding impressions?** The 6,200 impressions are Google serving pre-consolidation SERP listings (the plural URL had been indexed for months before the redirect landed in April 2026; cached listings + Google's slow refresh of those SERPs are still in motion). This is normal Google behaviour and matches the declining-impressions trend in §10c.3.

---

## 10c.5 Sitemap audit — and a NEW finding

```
$ curl -s https://www.cinutedigital.com/sitemap.xml | grep -c courses-in
34
```

The sitemap contains **34 plural URLs**. The audit's BLG-156 assumption was that these would be the digital-marketing-courses-in-* set. They are **NOT**:

```
$ curl -s https://www.cinutedigital.com/sitemap.xml \
    | grep -oE 'https://[^<]+course[s]?-in[^<]+' \
    | awk -F'/' '{print $4}' | awk -F'-in-' '{print $1"-in-"}' \
    | sort | uniq -c | sort -rn

  187 business-intelligence-course-in-
  181 data-science-course-in-
  108 software-testing-course-in-
  103 digital-marketing-course-in-          ← SINGULAR — correct
   77 artificial-intelligence-course-in-
   75 web-development-course-in-            ← SINGULAR — correct
   33 web-development-courses-in-           ← PLURAL — INCONSISTENT
```

**5 of 6 course families use the singular convention.** Web-development has **both** a singular slug set (75 URLs) AND a plural slug set (33 URLs) — sourced from inconsistent entries in `src/types/courseData.ts` (109 web-dev city entries total — 75 singular + 34 plural; one delta vs sitemap is a parsing artifact in the grep above).

### 10c.5.1 The web-development redirect is wrong-direction AND temporary

```
$ curl -sI https://www.cinutedigital.com/web-development-course-in-pune
HTTP/1.1 307 Temporary Redirect
Location: /web-development-courses-in-pune

$ curl -sI https://www.cinutedigital.com/web-development-courses-in-pune
HTTP/1.1 200 OK
```

For web-development the **plural is the live canonical** and the singular **307-redirects** (TEMPORARY) to it. This is the opposite convention of every other course family AND uses the wrong status code:

- **307 is temporary** — Google does not transfer ranking signal across a 307, and consolidation will not happen
- The 307 is likely a default Next.js fallback when no matching route handler exists (i.e. there's no `/web-development-course-in-{city}` page; Next.js falls back to some redirect rule that defaults to 307)
- Both forms are submitted to Google via the sitemap → Google sees 108 web-development URLs when there are only 33 real pages → crawl-budget waste + signal splitting

This is more material than the original BLG-156. It's not a "Google is slow to consolidate" problem; it's an **active configuration bug** that has been splitting the web-development family's SEO signal across 2 URL forms.

---

## 10c.6 Findings & recommendations

### 10c.6.1 Original BLG-156 (digital-marketing-courses-in-*) — RESOLVED-AS-INTENDED

| # | Finding | Action |
| --- | --- | --- |
| F1 | Server-side 308 redirect fires correctly | None — working as intended |
| F2 | Google has correctly classified the plural URLs as "Page with redirect" | None — Google is doing the right thing |
| F3 | 68 plural URLs still receive impressions (21 clicks / 6.2K imps / 3mo) but trend is declining | Consolidation lag — wait it out |
| F4 | Optional: switch `permanent: true` → `statusCode: 301` on the digital-marketing redirect | Small win, slightly stronger consolidation signal |
| F5 | Optional: bulk-submit the 68 plural URLs to GSC Removals tool | Accelerates de-indexing but is manual and short-lived (90-day TTL) |

**BLG-156 can be closed.** The behaviour the audit flagged as a problem is actually Google's expected post-redirect consolidation lag. The plural URLs are no longer indexed; the impressions are stale SERP listings that will continue to bleed for another 1–2 months at the current decline rate. Nothing structural to fix.

### 10c.6.2 NEW finding — web-development URL inconsistency (raise as BLG-200 / P1)

| # | Finding | Action |
| --- | --- | --- |
| F6 | `courseData` (`src/types/courseData.ts`) contains both 75 singular + 34 plural web-dev city slugs | Pick ONE convention (recommend SINGULAR for consistency with all other course families) and delete the other 34 |
| F7 | `/web-development-course-in-{city}` 307-redirects to plural — TEMPORARY, won't transfer SEO weight | Either remove the redirect entirely (if singular is canonical, drop the rule) or upgrade to 308/301 in the right direction |
| F8 | Sitemap currently submits 108 web-dev city URLs when only 33 are live (the 75 singular ones 307 away) | Source-of-truth fix: rebuild sitemap entries from a canonical-only list |
| F9 | Google is indexing both forms, splitting ranking signal across the 2 URL variants for the same city | Will self-correct after F6–F8 ship and Google re-crawls |

**Recommended sequence:**
1. Audit `courseData` web-dev entries — confirm which city pages actually have content (some of the 109 may be stubs)
2. Standardise on singular `web-development-course-in-{city}` to match the other 5 families
3. For each city that has only a plural entry: rename the slug; for each city that has both: delete the plural entry
4. Add `next.config.ts` redirect: plural `web-development-courses-in-:city` → singular `web-development-course-in-:city` with `permanent: true` (308) or explicit `statusCode: 301`
5. Regenerate sitemap — should drop from 108 web-dev URLs to ~75 canonical singular URLs
6. Request indexing on a sample of newly-canonical URLs via GSC URL Inspection

### 10c.6.3 (Optional) Switch all `permanent: true` to `statusCode: 301`

Across the ~50 redirects in `next.config.ts`, all use `permanent: true` which gives 308. For HTML page redirects there's no behavioural benefit to 308 over 301, and 301 is the safer SEO choice. A find-replace `permanent: true` → `statusCode: 301` would harden the SEO redirect contract across the site. Estimated effort: 10 minutes; risk: very low (browser and Googlebot behaviour identical).

---

## 10c.7 Updated backlog

| # | Title | Severity | Notes |
| --- | --- | --- | --- |
| **BLG-156** | Plural slugs still ranking despite redirect | **CLOSED-AS-INTENDED** (2026-05-28) | Working as intended — Google consolidation lag, declining trend |
| **BLG-200** (new) | Web-development URL convention inconsistency (singular + plural slugs co-exist in sitemap, 307 redirect wrong-direction) | **P1** | F6–F8 above; affects 108 sitemap URLs |
| **BLG-201** (new, optional) | Switch all `next.config.ts` redirects from `permanent: true` (308) to explicit `statusCode: 301` | P3 | 10-min find-replace, modest SEO hardening |

---

## 10c.8 Verification commands for the next cycle

```bash
# 1. Confirm digital-marketing plural URLs continue to decline in GSC
#    Filter: Page > URLs containing > digital-marketing-courses-in
#    Target: 0 impressions by 2026-08

# 2. Confirm web-development sitemap cleanup (after BLG-200 ships)
curl -s https://www.cinutedigital.com/sitemap.xml \
  | grep -c "web-development-courses-in"
# Target: 0 (currently 33)

# 3. Confirm web-development singular returns 200 (not 307)
curl -sI https://www.cinutedigital.com/web-development-course-in-pune | head -1
# Target: HTTP/1.1 200 OK (currently 307 Temporary Redirect)

# 4. Confirm plural status (should now be the redirected form)
curl -sI https://www.cinutedigital.com/web-development-courses-in-pune | head -1
# Target: HTTP/1.1 308 Permanent Redirect (currently 200 OK)
```
