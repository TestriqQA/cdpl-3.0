# Phase 3 — Technical SEO Audit

> **Goal:** verify crawlability, indexability, canonicalisation, sitemap completeness, redirect chain integrity, URL hygiene, and Googlebot/AI-bot render parity — the on-the-wire signals search engines actually see.
> **Date:** 2026-05-19
> **Branch:** `seo-audit/cycle-1-discovery`
> **Mode:** read-only source inspection. Live verification deferred to Phase 11.

---

## 3.1 robots.txt audit

`src/app/robots.ts` was inspected in Phase 1. Re-evaluating with technical-SEO lens.

### ✅ Working

- **Five rule blocks** with explicit user-agent lists
- **AI bots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.)** Allowed at root — correct for lead-gen EdTech (more impressions, no downside)
- **`/_next/static/` and `/_next/image/`** explicitly Allowed — correct (April 2026 fix per code comment)
- **`/api/`, `/admin/`, `/private/`, `/cms/`** disallowed across all bot classes
- **Bad-bot block** for MJ12bot, DotBot, BLEXBot, DataForSeoBot, PetalBot
- **Single `sitemap:` directive** pointing to `/sitemap.xml`

### ⚠️ Issues

| # | Issue | Severity | Detail |
| --- | --- | --- | --- |
| 3.1.1 | **`*.json$` blocked for search-engine bots** — `/sitemap.xml` survives because it ends in `.xml`, but **`/manifest.json`** (when added in Cycle 2 Sprint 3) would be blocked. Currently fine because no `manifest.json` exists, but it's a latent foot-gun. | P3 | Once manifest.ts ships, the regex needs adjustment: `Disallow: /search?*` is fine; drop the `*.json$` block or scope it to `/data/*.json`. |
| 3.1.2 | **`/search?*`** Disallow on search-bots block — this matches paths starting with `/search`. CDPL's blog search is at **`/blog/search`** — NOT matched. ✅ Correct as-is, but worth documenting. | — | Document. |
| 3.1.3 | **No explicit Disallow for `/blog/search`** in robots.txt | P2 | The page itself emits `robots: { index: false }` (good), but search-engine bots will still crawl it. Add `Disallow: /blog/search` to save crawl budget. |
| 3.1.4 | **No Disallow for `/api/contact`-style POST endpoints** beyond `/api/` block | — | `/api/` block covers it. ✅ |
| 3.1.5 | **No GDPR/CCPA-region bot rules** (e.g. AhrefsBot, SemrushBot allowed). For competitive intelligence: this is a strategic choice — keeping them ALLOWED means our internal team can also see our own backlinks. | — | Note only — no action. |
| 3.1.6 | **No `Sitemap:` entry for a hypothetical `/sitemap-news.xml` or `/sitemap-images.xml`** | P3 | Cycle 2 Sprint 6 if news/image sitemaps are added. |

---

## 3.2 Meta robots / per-page robots audit

Inspected all 18 source-locations that emit `robots:` directives ([§2.4](02-codebase-audit.md#2.4)).

### Index/Follow matrix (sample of explicit declarations)

| Route | Robots | Verdict |
| --- | --- | --- |
| `/blog/search?q=*` | `index:false, follow:true` (only when query present too) | ✅ correct (search-results page) |
| `/blog/[slug]` (post not found) | `index:false, follow:true` | ✅ correct (404 case → noindex but follow internal links) |
| `/blog/category/[slug]` (not found) | `index:false, follow:true` | ✅ correct |
| `/services/[slug]` (not found) | `index:false, follow:true` | ✅ correct |
| `/cms` (always) | `noindex:true, nofollow:true` (via `generateMetadata({noindex,nofollow})`) | ✅ correct — also reinforced by X-Robots-Tag header |
| `/privacy-policy`, `/terms-of-service`, `/cancellation-refund-policy` | explicit `index:true, follow:true` | ✅ — explicit is fine, redundant with default but defensible |
| `/blog/categories` | explicit `index:true, follow:true` | ✅ |
| `/blog/category/[slug]` (found) | explicit `index:true, follow:true` | ✅ |
| All other pages (no `robots:` override) | inherits default from `generateMetadata` → `index:true, follow:true` | ✅ |

### ⚠️ Issues

| # | Issue | Severity | Detail |
| --- | --- | --- | --- |
| 3.2.1 | **`/mock-test/[courseSlug]` is `noindex` via X-Robots-Tag header** ([next.config.ts:377-384](../../next.config.ts#L377)) but the page itself does NOT emit `<meta name="robots" content="noindex">` in `<head>`. Header alone is enough for Googlebot, but **AI crawlers (PerplexityBot, GPTBot) may not respect HTTP headers consistently** — adding the meta tag is defense-in-depth. | P3 | Cycle 2 Sprint 3 — page.tsx already has `'use client'`, add `<head>` meta tag or server-component wrapper with `metadata.robots = { index: false }`. |
| 3.2.2 | **`/blog/search` is `noindex` via meta but NOT via robots.txt** (see 3.1.3). Combined effect is fine but inconsistent. | P3 | Same fix as 3.1.3. |
| 3.2.3 | `blog/categories/page.tsx` explicitly redeclares `googleBot` block with `"max-image-preview":"large"` etc., **even though the global default in `metadata-generator.ts:224` already provides this**. Duplication, no functional difference. | P3 | Drop the per-page `googleBot` override; let the central helper handle it. |

---

## 3.3 X-Robots-Tag header audit

`next.config.ts` headers (already inspected in Phase 1 §1.4):

```
/_next/static/:path*  → X-Robots-Tag: noindex, nofollow  ✅
/_next/data/:path*    → X-Robots-Tag: noindex, nofollow  ✅
/cms/:path*           → X-Robots-Tag: noindex, nofollow  ✅
/mock-test/:courseSlug* → X-Robots-Tag: noindex, nofollow  ✅
/(.*)                 → standard security headers (X-CTO, Referrer-Policy, X-Frame-Options) ✅
```

| # | Issue | Severity |
| --- | --- | --- |
| 3.3.1 | **No `X-Robots-Tag` for PDF / image-only routes** that may be uploaded under `/public/*.pdf` or `/public/og-images/*.png`. These are publicly crawlable by default. Brochure PDFs in particular probably shouldn't be indexed. | P2 — Cycle 2 Sprint 6 once brochure paths are confirmed |
| 3.3.2 | **No `X-Robots-Tag: max-image-preview: large`** at the root level — but this is set via the Metadata API per-page (see `seo-config.ts:168` `robots.max-image-preview: 'large'`). Equivalent effect. | ✅ |

---

## 3.4 Canonical tags — full audit

This is the most important section in Phase 3. Canonical mistakes cause indexation problems silently.

### Current canonical sources (3 conflicting layers)

| Layer | File | Behaviour |
| --- | --- | --- |
| **L1 — Metadata API** (correct path) | `src/lib/metadata-generator.ts:182` | `alternates: { canonical: canonicalUrl }` where `canonicalUrl = getFullUrl(url)` or `getFullUrl(canonical)` — server-rendered into `<head>` |
| **L2 — `SeoHead.tsx`** (`'use client'`) | `src/components/SeoHead.tsx` | Client-side `<link rel="canonical" href="{baseUrl}{pathname}" />` injected into `<head>` |
| **L3 — Per-page hard-coded** | e.g. `blog/categories/page.tsx:73`, `blog/category/[slug]/page.tsx:96-101` | Manually set `alternates: { canonical: 'https://www.cinutedigital.com/blog/categories' }` |

**Problem:** L1 + L2 likely both emit `<link rel="canonical">` tags. **Two canonicals = Google chooses (typically the first one).** Phase 11 will verify by inspecting live `<head>` HTML.

### Canonical correctness sub-issues

| # | Issue | File | Severity |
| --- | --- | --- | --- |
| 3.4.1 | **Double canonical risk** — `SeoHead` (client-rendered) likely duplicates Metadata API's canonical | layout.tsx + SeoHead.tsx | **P0** (already BLG-001) |
| 3.4.2 | **`blog/categories/page.tsx` hard-codes absolute canonical** to `"https://www.cinutedigital.com/blog/categories"` instead of using helper | [blog/categories/page.tsx:73](../../src/app/blog/categories/page.tsx#L73) | P2 — works correctly but drift-prone; if domain ever changes, this won't update |
| 3.4.3 | **`blog/category/[slug]/page.tsx` uses path-only canonical** `/blog/category/${slug}` ([blog/category/[slug]/page.tsx:97](../../src/app/blog/category/[slug]/page.tsx#L97)) — Next.js Metadata API resolves this against `metadataBase` → absolute. ✅ correct but inconsistent with 3.4.2 | (same file) | P3 — pick one pattern, use everywhere |
| 3.4.4 | **`blog/categories/page.tsx` also sets `metadataBase: new URL("https://www.cinutedigital.com")` per-page** ([blog/categories/page.tsx:45](../../src/app/blog/categories/page.tsx#L45)) — already set in root layout. Per-page redeclaration may **silently override the layout** if Next.js applies it last. | (same file) | P2 — remove per-page redeclaration |
| 3.4.5 | **`blog/categories/page.tsx` has `creator: "Your Company"` and `siteName: "Your Company Tech Blog"`** — **literal placeholder strings shipped to production** | [blog/categories/page.tsx:43-44, 52](../../src/app/blog/categories/page.tsx#L43) | **P0** — appears in OG cards and meta tags |
| 3.4.6 | **`blog/categories/page.tsx` `locale: "en_US"`** — inconsistent with rest of site (`en_IN`) | [blog/categories/page.tsx:61](../../src/app/blog/categories/page.tsx#L61) | P1 — wrong locale signal |
| 3.4.7 | **`blog/categories/page.tsx` also includes `alternates.languages: { "en-US": "/blog/categories" }`** — declares an en-US language alternate even though no en-US version exists | [blog/categories/page.tsx:75](../../src/app/blog/categories/page.tsx#L75) | P1 — fake hreflang; Google ignores nonexistent alternates but it's a noise signal |
| 3.4.8 | **`blog/category/[slug]/page.tsx` has `alternates.languages: { 'en-IN': ... }`** — declaring an en-IN alternate that points to the same URL is harmless but redundant | [blog/category/[slug]/page.tsx:99](../../src/app/blog/category/[slug]/page.tsx#L99) | P3 |
| 3.4.9 | **`seo-config.ts` URL normalisation** ([seo-config.ts:30-37](../../src/lib/seo-config.ts#L30)) — auto-promotes non-www to www. ✅ Good; protects against misconfigured env. | — | ✅ |

### Fix sketch (Cycle 2 Sprint 1 — bundled with BLG-001)

1. Delete `SeoHead.tsx`.
2. Delete the import + JSX use in `layout.tsx`.
3. Refactor `blog/categories/page.tsx` to use `generateMetadata` helper from `metadata-generator.ts` — drops 90 lines, eliminates placeholder strings, fixes locale, fixes fake hreflang.
4. Refactor `blog/category/[slug]/page.tsx` to use `generateBlogMetadata` or similar — drops 100 lines, removes per-page `alternates.languages` noise.

---

## 3.5 Sitemap audit

`src/app/sitemap.ts` was inspected in Phase 1 §1.4. Phase 3 verification:

### Sitemap coverage matrix (sitemap entry vs actual page file)

Counted from the sitemap source + the `_page-inventory.txt`:

| Page family | In sitemap | Page file exists | Match? |
| --- | --- | --- | --- |
| Home | ✅ | ✅ | ✅ |
| About-us, contact, mentors, our-team, reviews, locations | ✅ | ✅ | ✅ |
| Courses hub + 5 category hubs | ✅ (1+5) | ✅ (1+5) | ✅ |
| 25 course detail pages | ✅ (hard-listed in sitemap.ts:278-316) | ✅ | ✅ |
| 765 city-course pages | ✅ (mapped from `courseData`) | ✅ (dynamic route) | ✅ |
| Sanity blog posts | ✅ (mapped from POSTS_QUERY) | ✅ | ✅ |
| Sanity categories | ✅ (mapped from CATEGORIES_QUERY) | ✅ | ✅ |
| Sanity authors | ✅ (mapped from AUTHORS_QUERY) | ✅ | ✅ |
| Past events (`pastEvents` data) | ✅ | ✅ | ✅ |
| Services (`trainingServices` data) | ✅ | ✅ | ✅ |
| Jobs (careers, openings, live, placements) | ✅ | ✅ | ✅ |
| Blog index + all-posts + categories index | ✅ | ✅ | ✅ |
| Certifications (AAA, ACTD, ISTQB-registration) | ✅ (AAA, ACTD, istqb-registration) | ✅ | ✅ |
| `cdpl-affiliate-program`, `cdpl-certificate-validation` | ✅ | ✅ | ✅ |
| Legal (4) | ✅ | ✅ | ✅ |
| mock-test landing | ✅ | ✅ | ✅ |
| `/cms` (Studio) | **❌ correctly omitted** | ✅ (but noindex) | ✅ |
| `/mock-test/[courseSlug]` slugs | **❌ correctly omitted** (CSR, noindex) | ✅ | ✅ |
| `/blog/search` | **❌ correctly omitted** | ✅ (noindex) | ✅ |

**Verdict:** sitemap is **comprehensive** with no orphan pages and no over-inclusion of noindex pages. ✅ Strong.

### Sitemap issues

| # | Issue | Severity | Detail |
| --- | --- | --- | --- |
| 3.5.1 | **Sitemap fetches Sanity at every request without `unstable_cache`** | P2 (BLG-021) | Wrap in `unstable_cache` with `revalidateTag('sitemap')` and revalidate on Sanity webhook |
| 3.5.2 | **`pastEvents` data uses string dates that may be invalid** ([sitemap.ts:329-345](../../src/app/sitemap.ts#L329) handles this with a `parseDate` helper logging warnings) | ✅ — graceful fallback in place | — |
| 3.5.3 | **No image sitemap** (`<image:image>` extension) — would benefit blog posts with featured images and course pages with hero images | P3 | Cycle 2 Sprint 6 |
| 3.5.4 | **No news sitemap** — not applicable; CDPL doesn't publish breaking news | n/a | — |
| 3.5.5 | **Sitemap is one monolithic file** — at ~870 URLs it's well under Google's 50k limit, but if blog scales past 10k URLs, **split by section** (sitemap-courses.xml, sitemap-blog.xml, sitemap-cities.xml) | P3 | Track only |
| 3.5.6 | **`priority`** declarations matter little to Google now but are still used by Bing — current values (1.0 home, 0.9 categories/courses, 0.8 city/services, 0.7 mentors/reviews/jobs, 0.6 events/affiliate, 0.5 author, 0.3 legal) are reasonable | ✅ | — |
| 3.5.7 | **`changeFrequency`** also lightly weighted now — current values reasonable | ✅ | — |
| 3.5.8 | **Sitemap shipping size** at ~870 URLs with `lastModified`/priority/changeFrequency ≈ 250–300 KB — well within limits, no compression needed | ✅ | — |
| 3.5.9 | **`/jobs/live-jobs?jobId=X`** URLs not in sitemap | P3 | Query-string URLs typically shouldn't be in sitemap. Live job slugs would need `[jobId]` route to be indexable. Sprint 6 candidate. |

---

## 3.6 Redirect audit

All 52 redirects from `next.config.ts` enumerated. Verified each destination resolves to a **non-redirect URL**.

### Methodology

Compared each redirect's `destination` against:
1. Other redirect `source` patterns — would the destination match another rule and chain?
2. Actual page files in `src/app/` — does the destination route exist?

### Chain analysis result

| Pattern | Risk | Verdict |
| --- | --- | --- |
| Software-testing legacy slugs (11) | Destinations are `/courses/software-testing-course/*` — none of which are redirect sources | ✅ no chains |
| DS/ML legacy slugs (7) | Same — destinations are `/courses/ds-ml-courses/*` | ✅ no chains |
| BI legacy slugs (7) | Destinations are `/courses/bi-courses/*` | ✅ no chains |
| DM legacy slugs (5) | Destinations are `/courses/digital-marketing-courses/*` | ✅ no chains |
| AI/Prompt-engineering (2) | Same family | ✅ no chains |
| Events historical slugs (5 + 4 + 1 = 10) | All collapse to `/events` (static page) | ✅ no chains |
| `/authors/:slug → /blog/author/:slug` | Destination is a dynamic route resolved by `generateStaticParams` from Sanity authors. **If a `:slug` doesn't match a Sanity author, it 404s** — but doesn't chain. | ✅ no chains |
| `/blog/category/ai-ml → /blog/category/artificial-intelligence` | Destination is dynamic; "artificial-intelligence" must exist as a Sanity category. **User must verify the Sanity category slug exists.** | ⚠️ verify-able only via Sanity Studio |
| `/blog/how-prompt-engineering-can-automate-test-case-generation → /blog/category/software-testing` | Destination is dynamic; "software-testing" must exist as Sanity category | ⚠️ same — verify |
| `/digital-marketing-courses-in-:city → /digital-marketing-course-in-:city` | Wildcard. Destination only exists if `:city` is in `courseData`. If user navigates to an unmapped plural city, they're redirected to a 404 (which is fine — not a chain) | ✅ no chains; potential UX foot-gun |
| `/index.html → /` | Destination is home (not a redirect source) | ✅ |
| `/email-marketing → /courses/digital-marketing-courses` | Destination is canonical | ✅ |
| `/actd-certification-training → /actd-certification` | Destination is canonical | ✅ |
| `/manual-qa → /courses/software-testing-course/manual-testing-course` | Destination is canonical | ✅ |
| `/java-programming → /courses/software-testing-course/java-course` | Destination is canonical | ✅ |
| `/software-testing-courses → /courses/software-testing-course` (singular) | Destination is canonical | ✅ |
| `/data-science-courses → /courses/ds-ml-courses/data-science-course` | Destination is canonical | ✅ |
| `/business-intelligence-courses → /courses/bi-courses` | Destination is canonical | ✅ |

**Verdict:** **0 redirect chains detected** in static rules. ✅ Excellent. Phase 11 will live-verify with `curl -ILv` against representative redirects.

### Redirect issues

| # | Issue | Severity | Detail |
| --- | --- | --- | --- |
| 3.6.1 | **Sanity-category dependent redirects** — two redirects assume specific Sanity category slugs (`artificial-intelligence`, `software-testing`). If the Sanity content team renames a category slug, redirects break silently. | P2 | Cycle 2 Sprint 5 — either move these to a `lib/category-redirects.ts` file with a compile-time check against Sanity, or migrate to runtime middleware with graceful fallback to `/blog/categories`. |
| 3.6.2 | **No `/non-www → /www`** redirect in `next.config.ts`. Relies on hosting layer (Vercel auto-handles; Cloudflare typically configured). **Must verify in Phase 11.** Until verified, possible split-horizon indexing risk. | P1 | Phase 11 verification |
| 3.6.3 | **No `/http → /https`** redirect explicitly — also hosting-layer | P1 | Phase 11 |
| 3.6.4 | **No trailing-slash policy** declared (`trailingSlash` config absent from `next.config.ts`) — defaults to `false`, meaning `/about-us/` and `/about-us` resolve differently | P3 | Default behaviour is fine; document the choice. Phase 11 will verify Google sees only one form per page. |
| 3.6.5 | **5 lead-form components hard-code `<a href="https://cinutedigital.com/privacy-policy">`** — **non-www URL.** Each click causes a redirect hop. Affects: `ApiCourseLeadForm`, `GenerativeAICourseLeadForm`, `MachineLearningCourseLeadForm`, `ManualCourseLeadForm`, `AiCourseLeadForm` | P1 | Cycle 2 Sprint 3 — replace with `<Link href="/privacy-policy" target="_blank">` or at minimum the www URL |
| 3.6.6 | **Wildcard `/authors/:slug` redirect was added when `/authors/...` was the old URL pattern. Verify GSC for any remaining `/authors/...` impressions before considering this redirect "stale".** | P3 | Phase 10 |

---

## 3.7 Internal-link discipline

### `next/link` adoption

- **196 source files import `next/link`** → strong adoption
- **5 lead-form files use raw `<a href>`** for privacy-policy link (also a non-www bug — see 3.6.5)
- **`not-found.tsx` imports `Link` from `lucide-react`** (already BLG-002) — produces a broken 404 link

### Raw `<a href=>` exceptions (all justified)

| File | Use | Verdict |
| --- | --- | --- |
| Email templates (`lib/email-templates/*.html`) | Email HTML — cannot use Link | ✅ |
| `api/mock-test/{register,submit}/route.ts` | Server actions — no Link needed | ✅ |
| `istqb-registration/actions.ts` | Server action | ✅ |
| `cookies-policy/page.tsx` | Likely external link — verify in Phase 4 | check |
| `PlacementsLocationsMapSection.tsx` | Verify in Phase 4 | check |
| `sections/CTASection.tsx` | Verify in Phase 4 | check |
| **5 lead forms** | **Non-www privacy-policy link** | ❌ P1 (3.6.5) |

### Internal-link equity issues (deeper analysis in Phase 7)

| # | Issue | Severity | Defer to |
| --- | --- | --- | --- |
| 3.7.1 | Anchor-text diversity — many links are likely "Learn More" or "View Details" without keyword anchors | P2 | Phase 7 |
| 3.7.2 | Orphan page detection — pages reachable only via sitemap (not via internal links) | P2 | Phase 7 — need full link-graph inspection |
| 3.7.3 | Course detail pages should receive most internal-link equity (from blog + city + hub) — distribution unverified | P2 | Phase 7 |
| 3.7.4 | Are 765 city-course pages cross-linked (e.g., breadcrumbs back to category hub)? — from city page source: yes, breadcrumb back to `/courses` and category hub — ✅ |  — | ✅ |

---

## 3.8 URL hygiene

| Check | Result |
| --- | --- |
| **Lowercase routes** | ✅ all routes lowercase (Next.js folder-name enforces) |
| **Hyphenated, kebab-case** | ✅ — no underscores, no camelCase in routes |
| **Descriptive slugs** | ✅ — `/courses/software-testing-course/manual-testing-course` is keyword-rich |
| **No file extensions** | ✅ |
| **No tracking params in canonical URLs** | ✅ Metadata API uses pathname only |
| **No spaces / special chars** | ✅ |
| **Singular vs plural consistency** | ⚠️ — `/courses/` (plural) is the hub, `/digital-marketing-course-in-:city` (singular) is the city page. Old plural slugs redirect to singular. ✅ post-fix. |
| **Trailing slash policy** | default `false` (no trailing slash) — consistent. Phase 11 to verify Googlebot doesn't see both forms indexed. |
| **Query-param canonical risk** | `/jobs/live-jobs?jobId=X` is rendered server-side and `generateMetadata` provides a job-specific title, but the **canonical points back to `?jobId=X`** — multiple `jobId` values would index separately. P2. |

### 3.8.1 New issue: `live-jobs` query-param indexation

[jobs/live-jobs/page.tsx:55](../../src/app/jobs/live-jobs/page.tsx#L55) — when `jobId` query param is present, metadata canonical is set to `/jobs/live-jobs?jobId=${jobId}`. Each `jobId` value becomes a separately-indexable URL with unique title.

**Tradeoff:** if there are <50 active jobs, this is fine (50 indexable job-detail URLs). If hundreds, query-param indexation gets messy. **Recommend Sprint 6:** migrate `?jobId=` to `/jobs/live-jobs/[jobId]` slug-based routes for cleaner indexing. P2.

---

## 3.9 Pagination strategy

Inspected blog routes — **no pagination found.**

- `/blog/page.tsx` and `/blog/all-posts/page.tsx` — both render full lists with client-side filtering
- `/blog/category/[slug]/page.tsx` — fetches all posts for the category, no `?page=` param

| # | Issue | Severity | Detail |
| --- | --- | --- | --- |
| 3.9.1 | **No `rel="next"/"prev"` pagination** (deprecated by Google in 2019 anyway — not an issue) | — | OK |
| 3.9.2 | **All-posts and category pages load all posts unbounded** — once Sanity has 100+ posts, page weight grows linearly | P2 | Cycle 2 Sprint 4 — paginate at 12-24 posts per page with `/blog/page/2` etc. and submit each in sitemap |
| 3.9.3 | **`/blog/all-posts` is largely redundant with `/blog`** — both list all posts. Risk of cannibalization. | P2 | Phase 4 will inspect; Sprint 6 may dedupe (one as `noindex` or canonicalize to the other) |

---

## 3.10 Googlebot / AI-bot render parity (BLG-004 deep-dive)

The most consequential technical-SEO finding of this audit.

### Hypothesis (from Phase 2 §2.5)

**Course detail page content is server-rendered as a single `<main>` with no body content for non-JS crawlers**, because:

1. `page.tsx` (server) renders metadata + JSON-LD + `<XxxPageContent />`
2. `XxxPageContent.tsx` is `'use client'` — its initial server render still produces HTML, BUT
3. Several content sections inside it use `dynamic(..., { ssr: false })` — those sections render **NOTHING** server-side (replaced by a `<SectionLoader>` div)

### Verification matrix (from source inspection)

| Course | Page wrapper | Server-rendered sections | Client-only (`ssr:false`) sections |
| --- | --- | --- | --- |
| Manual Testing | `ManualTestingPageContent.tsx` ('use client') | `HeroManualTesting`, `StickyNav` | `WhyLearnSection`, `CourseDetailSections` (groups Curriculum, Projects, Testimonials, FAQ, CTA) |
| Advance Software Testing | `client-section.tsx` ('use client') | (need to inspect) | `EnrollModal`, `SyllabusDownloadModal`, `ReviewsMarquee` |
| AI Courses (category hub) | `HeroSection.tsx:29` ssr:false | — | section at line 29 |
| Past events landing | `wrappers/PastEventsLazySections.tsx` | — | 3 sections all `ssr:false` |
| ... (multiple others) | ... | ... | ... |

### Impact on AI crawlers

| Crawler | JS execution | What it sees on /courses/.../manual-testing-course |
| --- | --- | --- |
| **Googlebot** (Chromium-based, executes JS) | ✅ | Full content (curriculum, FAQ, testimonials) — **but renders ~5 s after fetch, costing crawl budget** |
| **Bingbot** (Chromium-based, partial JS) | partial | Likely sees content, slower indexing |
| **ClaudeBot** | ❌ | Sees only `<HeroManualTesting>` static HTML + JSON-LD. **No curriculum, FAQ, projects, career outcomes.** |
| **GPTBot** | ❌ | Same — only hero + JSON-LD |
| **PerplexityBot** | ❌ | Same |
| **Google-Extended** (for Gemini training) | ❌ | Same |

### Why this is the #1 GEO issue

Phase 8 (GEO/AEO) will recommend "citation-worthy patterns" (definitions in first 1-2 sentences after H2, tables, numbered lists, quotable stats). **None of that content is reachable** because the AI crawlers stop at the hero. The hero is a marketing component, not encyclopedic content. AI engines won't cite CDPL course pages because there's nothing citable in the server-rendered HTML.

### Fix size (Cycle 2 Sprint 4 / Cycle 3)

Per course detail page: ~4-6 hours engineering time to:
1. Convert `XxxPageContent.tsx` from `'use client'` to Server Component
2. Convert inner sections from `dynamic({ ssr: false })` to direct imports or `dynamic({ ssr: true })`
3. Pull out interactive subtrees (forms, modals) into small client-component islands
4. Move framer-motion to either Server Component (`framer-motion` server-compatible bits) or replace with CSS

× ~25 course detail pages = **100-150 hours total.** This is the single biggest engineering investment in Cycle 2/3.

---

## 3.11 Hydration error check (read-only signals)

Cannot fully verify without Phase 11 browser audit, but read-only signals:

| Risk | Source | Severity |
| --- | --- | --- |
| `date-now()` / `Math.random()` in Server Components | grep needed Phase 6 | likely none — defer |
| `useEffect` setting `document.title` competing with Metadata API | grep needed Phase 6 | likely none — defer |
| Mismatched `<head>` content between server and client (SeoHead is the prime suspect) | already BLG-001 | P0 |
| Conditional rendering based on `window` (typical in SSR-incompatible libs) | leaflet / typewriter-effect candidate | check Phase 6 |
| `next-themes` mode mismatch | `next-themes ^0.4.6` is in deps but usage not yet verified | Phase 6 |

---

## 3.12 Phase 3 issue summary (Backlog seeds — continuing BLG-* series)

| ID | Issue | Severity | Sprint |
| --- | --- | --- | --- |
| **BLG-026** | `blog/categories/page.tsx` has placeholder `"Your Company"` + `"Your Company Tech Blog"` strings + `locale: "en_US"` shipping to production | **P0** | Cycle 2 Sprint 1 |
| **BLG-027** | `blog/category/[slug]/page.tsx` double-fetches Sanity in generateMetadata (CATEGORY_QUERY + CATEGORY_POSTS_QUERY) AND page (CATEGORY_POSTS_QUERY again) | **P0** | Cycle 2 Sprint 4 |
| **BLG-028** | 5 lead-form components link to `https://cinutedigital.com/privacy-policy` (non-www) — forces redirect hop on every submission disclosure | P1 | Cycle 2 Sprint 3 |
| **BLG-029** | `blog/categories/page.tsx` doesn't use `generateMetadata` helper — 70+ lines of duplicated metadata config that drifts from central source of truth | P1 | Cycle 2 Sprint 1 (paired with BLG-026) |
| **BLG-030** | `blog/category/[slug]/page.tsx` doesn't use the blog metadata helper — same drift risk | P1 | Cycle 2 Sprint 1 |
| **BLG-031** | `blog/categories/page.tsx` declares fake en-US hreflang alternate | P1 | bundled with BLG-026 |
| **BLG-032** | `blog/categories/page.tsx` per-page `metadataBase` override redundant with layout | P2 | bundled with BLG-026 |
| **BLG-033** | No non-www → www server-level redirect explicit in next.config.ts | P1 | Phase 11 verification, then conditional fix |
| **BLG-034** | No http → https redirect explicit | P1 | Phase 11 verification |
| **BLG-035** | `/jobs/live-jobs?jobId=X` indexes via query param — should be slug-based for cleaner indexing | P2 | Cycle 2 Sprint 6 |
| **BLG-036** | All-posts and category pages load all Sanity posts unbounded (no pagination) | P2 | Cycle 2 Sprint 4 |
| **BLG-037** | `/blog/all-posts` likely cannibalises `/blog` — both list all posts | P2 | Phase 4 + Sprint 6 |
| **BLG-038** | No `Disallow: /blog/search` in robots.txt (page emits noindex meta, but crawl budget burned anyway) | P2 | Cycle 2 Sprint 1 |
| **BLG-039** | Sanity-category-slug-dependent redirects fragile — silent break if slug renamed in CMS | P2 | Cycle 2 Sprint 5 |
| **BLG-040** | Brochure PDFs in `/public/*.pdf` indexable by default (no X-Robots-Tag) | P2 | Cycle 2 Sprint 6 |
| **BLG-041** | `/mock-test/[courseSlug]` noindex header-only — add meta robots tag for AI-crawler defense-in-depth | P3 | Cycle 2 Sprint 3 |

---

## 3.13 Phase 3 summary

### ✅ Working

- **Sitemap is comprehensive** (~870 URLs, no orphans, no over-inclusion of noindex pages)
- **0 redirect chains** detected in 52 static redirects
- **AI bots explicitly Allowed** in robots.txt
- **`/cms` and `/mock-test/[courseSlug]` correctly noindex** via X-Robots-Tag
- **`/blog/search` correctly noindex** via metadata API
- **`next/link` adoption** at ~196 files
- **URL hygiene** is strong (lowercase, kebab-case, no extensions, no query-param canonicals)
- **`seo-config.ts` auto-normalises non-www to www** in canonical URL

### ⚠️ Issues found in Phase 3

**3 P0** (BLG-026 placeholder branding, BLG-027 double-fetch in blog/category), **5 P1**, **6 P2**, **2 P3** — 16 new backlog entries from Phase 3.

### 🟡 Most urgent triage from Phase 3

| # | What | Effort | Win |
| --- | --- | --- | --- |
| 1 | Refactor `blog/categories/page.tsx` to use `generateMetadata` helper (fixes BLG-026, 029, 031, 032 in one PR) | 30 min | Removes placeholder branding from production OG + meta tags, fixes locale, fixes fake hreflang |
| 2 | React `cache()` wrap on category metadata fetch (BLG-027, similar to BLG-003) | 30 min | Cuts Sanity API calls per blog category page in half |
| 3 | Update 5 lead-form privacy-policy links to use `next/link` + relative URL (BLG-028) | 15 min | Removes one redirect hop on every form submission disclosure |
| 4 | Phase 11 verification: live-curl `http://cinutedigital.com` and `http://www.cinutedigital.com` to confirm www + https redirects (BLG-033, BLG-034) | 5 min | Confirm/deny canonical-domain hygiene at hosting layer |

### 📝 Phase 3 → Phase 4 handoff

Phase 4 (On-Page SEO) will now go template-by-template through every page-template and assess:
- Title length / keyword placement / brand suffix consistency
- Meta description length and call-to-action
- H1 uniqueness (one per page)
- H2/H3 hierarchy logic
- Internal anchor diversity
- Image alt text
- Content depth vs intent

### 📝 Phase 3 → Phase 11 handoff

- **Live-verify canonical correctness** — does the live `<head>` show ONE or TWO `<link rel="canonical">` elements? (BLG-001 + 3.4.1)
- **Live-curl non-www and http redirects** (BLG-033, BLG-034)
- **Live-curl 5 representative redirects** to confirm 0-chain behaviour matches static analysis (3.6)
- **Live-fetch with `User-Agent: ClaudeBot/1.0` and `User-Agent: GPTBot/1.0`** to verify the AI-crawler content-blindness hypothesis (3.10 / BLG-004) — should see hero only
