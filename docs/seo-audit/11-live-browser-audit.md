# Phase 11 — Browser-Based Live Audit

> **Date:** 2026-05-19 via Chrome MCP (browser "sushma")
> **Target:** production `https://www.cinutedigital.com/`
> **Method:** live DOM, JSON-LD parse, raw-HTML fetch (SSR view), network waterfall

---

## 11.1 Home page — `/`

### `<head>` snapshot

| Field | Value |
| --- | --- |
| `<title>` | "Best Software Testing & Data Science Courses India \| CDPL" (57 chars ✅) |
| `<meta description>` | 160 chars (auto-truncated; cuts off "...Mentors" → "...Men...") |
| `<meta og:title>` | matches |
| `<meta ai:summary>` | "CDPL provides … with 100% placement support" — **contains non-defensible "100% placement" claim** |
| **`<link rel="canonical">`** | **3 SEPARATE TAGS** ⚠️⚠️⚠️ |
| 1st canonical href | `https://www.cinutedigital.com/index` ❌ **invalid URL — `/index` doesn't exist** |
| 2nd canonical href | `https://www.cinutedigital.com` (no trailing slash) |
| 3rd canonical href | `https://www.cinutedigital.com/` (with trailing slash) |
| `<link rel="preconnect">` to `cdn.sanity.io` | **MISSING** |
| `<h1>` count | 1 ✓ |

### JSON-LD inventory (10 schemas on home — matches Phase 5 prediction)

| Idx | @type | @id | Notes |
| --- | --- | --- | --- |
| 0 | EducationalOrganization | `/#organization` | from root layout ✓ |
| 1 | WebSite | `/#website` | from root layout ✓ |
| 2 | LocalBusiness | `/#localbusiness` | from generateHomePageSchema |
| 3 | ItemList | (no @id) | **Individual Courses with WRONG descriptions** (BLG-095) |
| 4 | VideoObject | (no @id) | "Transform Your Career with CDPL" |
| 5 | WebPage | `/#webpage` | |
| 6 | HowTo | (no @id) | "Our 5-Step Placement Process" |
| 7 | **LocalBusiness** (2nd) | **`/#localbusiness`** | **DUPLICATE @id** with #2 — confirms BLG-076 |
| 8 | **Review** | **`/#student-review-953`** | **RANDOM @id confirms BLG-057** |
| 9 | (SiteNavigationElement) | truncated | |

### 🚨 BLG-056 live confirmation — fabricated review on home (verbatim)

```json
{
  "@type": "Review",
  "@id": "https://www.cinutedigital.com/#student-review-953",
  "author": { "@type": "Person", "name": "CDPL Student" },
  "itemReviewed": {
    "@type": "LocalBusiness",
    "@id": "https://www.cinutedigital.com/#localbusiness",
    "name": "Professional Training & Placement Services"
  },
  "reviewBody": "The training curriculum at CDPL is highly practical and industry-aligned. The mentors provide hands-on guidance on real-world projects, which significantly helped in my career transition.",
  "reviewRating": { "ratingValue": "5", "bestRating": "5" }
}
```

### 🚨 BLG-095 live confirmation — ItemList wrong descriptions

| Course | Description served to Google + AI engines |
| --- | --- |
| Manual Software Testing | **"Learn to facilitate Scrum teams and drive Agile projects effectively."** |
| API Testing using POSTMAN | "Master product backlog management and stakeholder collaboration." |
| DBMS (MySQL) | "Gain advanced Scrum knowledge to lead high-performing teams." |
| ETL Testing | "Learn to lead Agile transformations using the SAFe framework." |

**All 4 verified wrong** — Manual Testing schema literally says "Learn to facilitate Scrum teams" instead of "Master Manual QA, test case design, defect lifecycle…"

### LocalBusiness #2 AggregateRating
```json
"aggregateRating": {"@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "425", "bestRating": "5"}
```
✓ matches user-confirmed defensible figures.

---

## 11.2 Course detail — `/courses/software-testing-course/manual-testing-course`

### Findings

| Field | Value |
| --- | --- |
| `<title>` | "Manual Testing Course with Placement \| QA Training Mumbai" (57 chars ✅) |
| `<link rel="canonical">` count | **2** (both correct value) — BLG-001 manifests here too |
| `<h1>` count | 1 ✓ |
| Course schema `offers.lowPrice` | **"25000"** |
| Course schema `offers.highPrice` | **"65000"** |
| Course schema `teaches` | **MISSING** |
| Course schema `educationalLevel` | **MISSING** |
| Course `aggregateRating` | not emitted (no `reviews` array passed) |
| Review schema random @id | confirmed |

> **🚨 BLG-058 confirmed live:** Source `manual-testing-course/page.tsx:45` passes `price: 15000`. Live schema serves `25000-65000`. **Wrong price published.**
>
> **🚨 BLG-063 confirmed live:** Two of the highest-value GEO fields (`teaches`, `educationalLevel`) are absent from Course schema.

### SSR HTML inspection — BLG-004 refined verdict

Raw-HTML fetch of the same URL (no JS):

| Metric | Value |
| --- | --- |
| Semantic body text inside `<main>` (excluding `<script>`) | **210 words / 1,437 chars** |
| Hero content (headline, badges, trust bullets) | ✅ present |
| "Alumni work at" company logos | ✅ present |
| SEO helper paragraph at bottom | ✅ present (~50 words) |
| **`Curriculum` modules content** | ❌ **NOT in SSR** (rendered by `ssr:false` `CourseDetailSections`) |
| **FAQ Q&A content** | ❌ **NOT in SSR** |
| **Projects content** | ❌ **NOT in SSR** |
| **Testimonials content** | ❌ **NOT in SSR** |
| "Loading additional content..." placeholders | **2** visible — confirms `ssr:false` boundaries |

> **BLG-004 refined verdict:** Roughly **210 words of hero content IS server-rendered** (not the predicted 150). However, **~1500 words of actual course detail** (curriculum modules, FAQ Q&A, project descriptions, testimonials) **are entirely invisible to non-JS crawlers (ClaudeBot/GPTBot/PerplexityBot).** Prediction directionally correct; severity confirmed at P0.

### 🚨 NEW finding — BLG-164 — CountUp stats render as 0 in SSR

The Alumni hero has 8 animated stats. Each is wrapped in `<CountUp value={N} />` which starts at `0` and animates up.

**SSR HTML emits the initial value `0`** for every stat:
```
Training Hours: 0 hrs
Job Vacancies (India): 0 +
Market Growth (2020–2030): 0 %
Job Satisfaction: 0 %
India's Global Share: 0 %
Fresher Avg. Salary: 0
Job Assistance: 0 %
Years of Expertise: 0 +
```

**AI crawlers (which don't execute JS) ingest "0 training hours, 0 job vacancies"** — wrong data published. Fix: render the final value in SSR; animate only post-hydration.

---

## 11.3 `/mock-test` — BLG-042 partial fix discovered live

| Field | Value |
| --- | --- |
| `<title>` | **"Free Online Mock Tests & Premium Assessments \| \| CDPL"** ⚠️ |
| Has "Testriq" in title | ❌ no (good) — auto-abbreviator stripped it |
| Has double-pipe artifact | **YES** — `| | CDPL` is malformed |
| Source `mock-test/page.tsx:21` | `"Free Online Mock Tests & Premium Assessments | Testriq"` |
| Effect of `abbreviateTitle()` helper | strips "Testriq" via suffix-replacement but leaves dangling pipe |

> **BLG-042 status (mock-test):** Production no longer shows "Testriq" — but produces a **malformed double-pipe**. New issue: **BLG-165 (P1)** — title-abbreviator leaves dangling pipe characters when stripping a non-canonical brand suffix.

## 11.4 `/istqb-registration` — BLG-042 fully confirmed live

| Field | Value |
| --- | --- |
| `<title>` | **"ISTQB Registration \| Testriq \| CDPL"** |
| Has "Testriq" in title | **❌ YES — wrong brand live** |
| `<meta og:title>` | also **"ISTQB Registration \| Testriq \| CDPL"** — propagates to Facebook + LinkedIn shares |

> **BLG-042 confirmed live on `/istqb-registration`.** Auto-abbreviator didn't strip "Testriq" because title length was short enough (32 chars). Need manual rewrite.

---

## 11.5 404 page — BLG-002 confirmed live

Visited `https://www.cinutedigital.com/this-page-does-not-exist-test-404`:

| Field | Value |
| --- | --- |
| `<title>` | **"Course Not Found \| CDPL"** ← from city-courses `[slug]` fallback metadata |
| `<h1>` | "404 - Page Not Found" |
| Body shows | H1 + "The page you're looking for doesn't exist." |
| **Working "Go Home" link** | **❌ NONE** in not-found.tsx body — the `Link` from `lucide-react` renders no useful anchor |
| Navigation available | only via Header menu items (Home logo, mega-menu links) |

> **BLG-002 confirmed live.** The not-found.tsx broken-Link-import results in a 404 page where the body has no clickable "Go Home" element. Header still works as escape hatch.
>
> **Additional finding:** The URL `/this-page-does-not-exist-test-404` is routed through `(city-courses)/[slug]/page.tsx`, hits the `notFound()` call, then renders not-found.tsx — but the title in `<head>` is "Course Not Found \| CDPL" because metadata is computed from the city-courses page metadata fallback (line 83 of that page.tsx). **Acceptable behaviour, slightly confusing title.**

---

## 11.6 Blog post — `/blog/python-oop-concepts-beginners`

(Picked the page from GSC Insights showing +324% impression surge.)

| Field | Value |
| --- | --- |
| `<title>` | "Python OOP Concepts Explained: The Ultimate \| CDPL Blog" (55 chars — title truncated mid-word: "The Ultimate" was probably "The Ultimate Guide") |
| `<link rel="canonical">` count | **2 duplicates** — BLG-001 |
| `<link rel="preconnect">` to cdn.sanity.io | **MISSING** |
| `<h1>` count | 1: "Python OOP Concepts: A Simple Guide for Beginners" |
| Hero image source | **`cdn.sanity.io` via `/_next/image` proxy** (`/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2F...&w=1920&q=75`) ✓ |
| **Hero image `loading`** | **`lazy`** ❌ — should be `eager` since LCP element |
| Hero image `priority` | not set |
| Hero image `srcset` | yes ✓ (next/image is being used) |
| Hero `width/height` | 0×0 at inspection (image not yet measured by browser — likely 2912×1472 source served at 1920w) |
| Total `cdn.sanity.io` images on page | 8 |

> **BLG-166 NEW P1:** Blog post hero is `loading="lazy"` with no `priority` flag — **directly causes LCP > 2.5s on blog routes** (BLG-161). Fix: add `priority` + `fetchPriority="high"` + `loading="eager"` on hero `<Image>`.

### BLG-093/BLG-011 downgrade

Sanity images route through `/_next/image` proxy — **no direct browser→cdn.sanity.io connection happens at runtime**. Preconnect to `cdn.sanity.io` would only help the Next.js Image function on its first cold-start to fetch the source. **Downgrade BLG-093/BLG-011 from P2 to P3** — minor optimisation, not critical.

---

## 11.7 Network waterfall sample (blog post)

| Request | Size | Notes |
| --- | --- | --- |
| `/_next/image?url=...&w=1920&q=75` | served | hero image — largest blocking asset |
| `/_next/image?url=...&w=1536&q=90` | served | duplicate fetch at different size (responsive srcset) |

> Phase 6 LCP risk for blog confirmed by GSC field data (128 of 128 mobile URLs failing LCP).

---

## 11.8 Console messages

`read_console_messages` API didn't capture page-load messages (tracking begins after first call, before page load). **Inconclusive at this audit pass.** Phase 11 follow-up could open DevTools manually to verify hydration warnings.

---

## 11.9 Cookie banner / consent

Not observed during this audit. CDPL likely has no cookie consent banner (India doesn't require one for non-EU traffic). EU/UK visitors get a non-compliant experience — **P3 deferred.**

---

## 11.10 Phase 11 new backlog entries

| ID | Issue | Severity |
| --- | --- | --- |
| **BLG-163** | Home page emits **3 separate `<link rel="canonical">` tags**, one pointing to non-existent `/index`. Confirms + extends BLG-001 with new bug | **P0** (cross-cuts BLG-001) |
| **BLG-164** | CountUp animated stats render initial value `0` in SSR — AI crawlers ingest "0 training hours / 0 job vacancies" instead of real numbers | **P1** (cross-cuts BLG-004 — GEO data poisoning) |
| **BLG-165** | `abbreviateTitle()` helper strips `Testriq` suffix but leaves dangling pipe → malformed `Free Online Mock Tests & Premium Assessments \| \| CDPL` | P1 |
| **BLG-166** | Blog post hero `<Image>` is `loading="lazy"` without `priority`/`fetchPriority="high"` — directly causes BLG-161 LCP failure on blog routes | **P1** |
| (BLG-093/011 downgrade) | preconnect to cdn.sanity.io | downgrade P2→P3 (images proxy through `/_next/image`) |

---

## 11.11 Phase 11 confirmations of prior backlog

| Backlog | Status | Evidence |
| --- | --- | --- |
| BLG-001 (SeoHead double canonical) | **✅ CONFIRMED + WORSE** | 3 canonicals on home (one is `/index`!), 2 on other pages |
| BLG-002 (broken 404 link) | **✅ CONFIRMED** | not-found.tsx has no working Go Home link |
| BLG-004 (ssr:false content) | **✅ CONFIRMED P0** | 210 words hero SSR, ~1500 words curriculum/FAQ/projects invisible |
| BLG-042 (Testriq brand) | **✅ partial** | `/istqb-registration` still says "Testriq"; `/mock-test` got auto-stripped but malformed |
| BLG-056 (fabricated review) | **✅ CONFIRMED with verbatim payload** | live JSON-LD on home with random `@id` + fake author + fake body |
| BLG-057 (Math.random in @id) | **✅ CONFIRMED** | live id ends in `-953` |
| BLG-058 (course price hardcoded) | **✅ CONFIRMED** | Manual Testing schema serves 25k-65k despite source passing 15000 |
| BLG-063 (Course missing teaches/level) | **✅ CONFIRMED** | both fields MISSING in live Course JSON-LD |
| BLG-076 (@id collision LocalBusiness vs Review) | **✅ CONFIRMED** | both `/#localbusiness` |
| BLG-095 (wrong descriptions in ItemList) | **✅ CONFIRMED LIVE** | "Manual Testing: Learn to facilitate Scrum teams" served in JSON-LD |
| BLG-145 (next-sanity-image not on hero) | **✅ CONFIRMED** | hero uses Image but no `priority`/`eager` |
| BLG-161 (LCP universal failure) | **✅ ROOT CAUSE FOUND** | hero `loading="lazy"` |
| BLG-093/011 (preconnect to Sanity CDN) | **DOWNGRADED** | images proxy through `/_next/image`, direct connect not needed |

---

## 11.12 Phase 11 summary

### ✅ Working

- 10 JSON-LD scripts serve on home page as expected
- AggregateRating uses the defensible 4.9/425 figures ✓
- `next/image` adoption + Sanity-CDN proxy through `/_next/image` ✓
- Single `<h1>` per page on all sampled templates ✓
- Title length within limits on home + course detail + blog post sampled ✓
- Mira Road address propagates correctly to schema ✓

### 🚨 Issues found in Phase 11

**4 new backlog entries** (3 P0/P1 + 1 P1) + **12 prior-backlog confirmations** with live evidence:

| Severity | Count |
| --- | --- |
| New P0 (BLG-163) | 1 |
| New P1 (BLG-164, 165, 166) | 3 |
| Downgraded P2→P3 (BLG-093/011) | 2 |

### Backlog total: **166 entries** (17 P0 / 59 P1 / 54 P2 / 36 P3)

> Note: total P2 count drops by 2 (BLG-093, BLG-011 → P3) but rises by other P2 additions overall.

### 📝 Phase 11 → Cycle 2 Sprint 1 urgency boost

The live evidence makes the urgency case airtight. **BLG-056 fabricated review is shipping to production EVERY render** — and GSC Manual Actions is still clean. Sprint 1's BLG-056 fix is the highest-priority single change.

The mysterious `/index` canonical (BLG-163) needs source investigation — likely a hardcoded value somewhere outside the components we audited.
