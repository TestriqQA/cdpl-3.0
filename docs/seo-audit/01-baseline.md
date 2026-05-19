# Phase 1 — Discovery & Baseline Snapshot

> **Goal:** establish ground truth for the codebase, framework, rendering strategies, and SEO surface area **before** any deeper audit. Deeper analysis happens in Phases 2–14.
> **Date captured:** 2026-05-19
> **Branch:** `develop` @ `2e5cedc`
> **Mode:** read-only inspection (no builds, no Sanity API hits)

---

## 1.1 Framework & runtime snapshot

| Item | Value | Source |
| --- | --- | --- |
| Framework | **Next.js 16.1.6** (App Router) | [package.json:30](../../package.json#L30) |
| React | **19.2.4** | [package.json:36](../../package.json#L36) |
| Bundler | **Turbopack** (explicitly opted in via `turbopack: {}`) | [next.config.ts:30](../../next.config.ts#L30) |
| CMS | **Sanity 5.12.0** (`next-sanity` 12.1.0) | [package.json:31,46](../../package.json#L31) |
| Studio mount | `/cms` route | [src/app/cms/[[...tool]]/page.tsx](../../src/app/cms/[[...tool]]/page.tsx) |
| Image | `sharp` 0.34.5 + `next-sanity-image` 6.2.0 | [package.json:32,47](../../package.json#L32) |
| Font strategy | `next/font/local` (Inter variable, woff2, `display: swap`, `preload: true`) | [src/app/layout.tsx:29-36](../../src/app/layout.tsx#L29) |
| Bundle analyzer | `@next/bundle-analyzer` 16.1.6 — gated by `ANALYZE=true` | [next.config.ts:4-7](../../next.config.ts#L4) |
| TypeScript | 5.x | [package.json:71](../../package.json#L71) |
| ESLint | 10.0.2 + `eslint-config-next` 16.1.6 | [package.json:67-68](../../package.json#L67) |
| Tailwind | 4 (with `@tailwindcss/postcss`) | [package.json:58,70](../../package.json#L58) |

### Animation / 3rd-party UI footprint (CWV concern, deep-dive in Phase 6)

| Package | Version | Likely cost (gzip) | Where used | Phase to deep-dive |
| --- | --- | --- | --- | --- |
| `framer-motion` | ^12.34.3 | ~50–70 KB | optimizePackageImports allow-listed, **but** still imported in many client sections | Phase 6 |
| `recharts` | ^3.7.0 | ~100+ KB | Stats/analytics dashboards | Phase 6 |
| `leaflet` + `react-leaflet` | ^1.9.4 / ^5.0.0 | ~40+ KB | Locations / contact map | Phase 6 |
| `typewriter-effect` | ^2.22.0 | ~10 KB | Hero animations | Phase 6 |
| `react-phone-number-input` | ^3.4.16 | ~30 KB + CSS | Lead forms (imports CSS in root layout) | Phase 6 — replaceable with thin `libphonenumber-js` wrapper (already in deps) |
| `googleapis` | ^171.4.0 | server-only — **must verify not bundled to client** | Sheets / Auth APIs | Phase 6 |
| `sanity` Studio bundle | ^5.12.0 | massive — must be route-isolated to `/cms` | Studio mount | Phase 2 — verify `transpilePackages` + Studio isolation |

### Compiler / experimental opt-ins

```ts
// next.config.ts:16-26
experimental: {
  optimizePackageImports: ['framer-motion', 'react-icons', '@headlessui/react', 'lucide-react'],
  optimizeCss: false,                 // disabled — Tailwind v4 conflict
  optimizeServerReact: true,
  // webpackBuildWorker: true,        // commented out — note for Phase 2
}
compiler: {
  removeConsole: { exclude: ['error', 'warn'] },   // production only
  reactRemoveProperties: <prod>,
}
```

**Initial flag (P2, deferred to Phase 6):** `optimizeCss: false` means the project is shipping unminified-css-paths. Phase 6 should evaluate `critters` (already installed at `^0.0.25`) for inline critical CSS.

---

## 1.2 Page-template inventory

### Total routes: **64 static page files + 6 dynamic-route templates → ~870 actually-rendered URLs**

| Template family | Static files | Dynamic params | Rendered URLs | Pattern |
| --- | --- | --- | --- | --- |
| **Home** | 1 | — | 1 | `src/app/page.tsx` |
| **About / Team / Mentors / Reviews / Locations / Contact** | 6 | — | 6 | `about-us`, `our-team`, `mentors`, `reviews`, `locations-we-serve`, `contact-us` |
| **Courses hub** | 1 | — | 1 | `/courses` |
| **Course category hubs** (5) | 5 | — | 5 | `/courses/{software-testing-course,ds-ml-courses,bi-courses,artificial-intelligence-courses,digital-marketing-courses}` |
| **Course detail pages** | ~25 | — | 25 | `/courses/<cat>/<course>` |
| **City-course landing pages** | 1 (catch-all in route group) | `[slug]` × 765 | **~765** | `src/app/(city-courses)/[slug]/page.tsx` driven by `courseData` in `src/types/courseData.ts` |
| **Blog** | 5 + 1 dyn | `[slug]`, `category/[slug]`, `author/[slug]` | hub + N posts + N categories + N authors (Sanity) | `src/app/blog/**` |
| **Events** | 1 + 1 dyn | `[slug]` (from `pastEvents` data) | ~N | `src/app/events/` |
| **Services** | 1 + 1 dyn | `[slug]` (from `trainingServices` data) | ~N | `src/app/services/` |
| **Mock-test** | 1 + 1 dyn (**`noindex` via headers**) | `[courseSlug]` CSR-only | landing indexable, slugs not | `src/app/mock-test/` |
| **Jobs / Careers** | 4 | — (live-jobs may fetch dynamic) | 4 | `careers`, `job-openings`, `live-jobs`, `placements` |
| **Certifications / Programs** | 4 | — | 4 | `aaa-certification`, `actd-certification`, `istqb-registration`, `cdpl-affiliate-program`, `cdpl-certificate-validation` |
| **Legal** | 4 | — | 4 | privacy, terms, cookies, refund |
| **Sanity Studio** (`noindex` via headers) | 1 catch-all | `[[...tool]]` | not indexed | `src/app/cms/[[...tool]]/page.tsx` |

> **Estimated total indexable URLs: ~870** (765 city pages + ~100 static templates + dynamic Sanity-driven blog/events/services).

### Files referenced

- City-course catch-all: [src/app/(city-courses)/[slug]/page.tsx](../../src/app/(city-courses)/[slug]/page.tsx)
- All page paths enumerated in [docs/seo-audit/_page-inventory.txt](_page-inventory.txt) (written below)

---

## 1.3 Rendering strategy inventory

### Static `metadata` exports

**58 page files export `metadata`** directly (static metadata) — confirmed via `Grep "^export const metadata"`.

### `generateMetadata` async functions

**8 dynamic routes** use `generateMetadata`:

```
src/app/jobs/live-jobs/page.tsx
src/app/services/[slug]/page.tsx
src/app/events/[slug]/page.tsx
src/app/blog/[slug]/page.tsx
src/app/blog/category/[slug]/page.tsx
src/app/blog/search/page.tsx
src/app/(city-courses)/[slug]/page.tsx
src/app/blog/author/[slug]/page.tsx
```

### `generateStaticParams`

**6 dynamic routes** prebuild params:

```
src/app/services/[slug]/page.tsx
src/app/events/[slug]/page.tsx
src/app/blog/[slug]/page.tsx
src/app/blog/category/[slug]/page.tsx
src/app/(city-courses)/[slug]/page.tsx
src/app/blog/author/[slug]/page.tsx
```

### Explicit revalidate / dynamic exports

| Route | Setting | Source |
| --- | --- | --- |
| `blog/[slug]/page.tsx` | `revalidate = 3600` (1 hr ISR) | [src/app/blog/[slug]/page.tsx:65](../../src/app/blog/[slug]/page.tsx#L65) |
| `reviews/page.tsx` | `revalidate = 120` (2 min) | [src/app/reviews/page.tsx:15](../../src/app/reviews/page.tsx#L15) |
| `services/[slug]/page.tsx` | `revalidate = 86400` (24 hr) | [src/app/services/[slug]/page.tsx:22](../../src/app/services/[slug]/page.tsx#L22) |
| `jobs/job-openings/page.tsx` | `revalidate = 3600` | [src/app/jobs/job-openings/page.tsx:286](../../src/app/jobs/job-openings/page.tsx#L286) |
| `jobs/careers/page.tsx` | `revalidate = 60` (1 min — aggressive) | [src/app/jobs/careers/page.tsx:38](../../src/app/jobs/careers/page.tsx#L38) |
| `(city-courses)/[slug]/page.tsx` | none — relies on default static via `generateStaticParams` | line 130 has commented-out `dynamicParams = false` |

### `'use client'` footprint — **250 files**

> **P1 architecture concern (Phase 2 deep-dive):** 250 client-component files is a massive client-bundle / hydration cost. Site is functioning more like a SPA than a server-rendered Next.js App-Router site. Phase 6 (CWV) and Cycle 2 Sprint 4 will quantify the wasted hydration.

Sample of `'use client'` files where it likely should be removed (data-only / structurally-static components flagged for Phase 6):

- `src/components/sections/AboutAccreditations.tsx`
- `src/components/sections/AboutCTASection.tsx`
- `src/components/sections/AAACertificationOutcomesCtaSection.tsx`
- `src/components/sections/AAACertificationCurriculumSection.tsx`
- ~40+ section components named `WhyChooseSection`, `WhoShouldEnroll`, `ToolsSection`, `StatsSection`, `CurriculumSection`, `FaqSection` — these are typically presentational + may only need `framer-motion` for entrance animations (replaceable with CSS or IntersectionObserver, already have `react-intersection-observer` ^10.0.3)

---

## 1.4 SEO infrastructure inventory

| File | Role | Status (Phase 1 read) | Deep-dive phase |
| --- | --- | --- | --- |
| `src/lib/seo-config.ts` | Single source of truth — SITE/BUSINESS/SOCIAL/STATISTICS/SEO_DEFAULTS/VERIFICATION/AI_OPTIMIZATION | Centralised + good. WWW-canonical normaliser at lines 30-37 is solid. **NAP discrepancy with brief — see §1.7.** | Phase 4, 5 |
| `src/lib/metadata-generator.ts` | `generateMetadata` factory + convenience wrappers + AI meta tags + helpers | Good. Dev-only validation warnings. Title-length auto-abbreviator. Description auto-truncates to 160. | Phase 4 |
| `src/lib/schema-generators.ts` | JSON-LD generators (Organization, Website, Course, Breadcrumb, FAQ, etc.) | **⚠️ ~90k tokens / ~6000+ lines in one file** — P1 maintainability concern. Phase 2 to split. | Phase 5 |
| `src/components/SeoHead.tsx` | `<link rel="canonical">` injector | **🚨 P0 — `'use client'` component using `usePathname()`. Canonical injected client-side. Also redundant with Next.js Metadata API `alternates.canonical`.** | Phase 3 (immediate) |
| `src/components/JsonLd.tsx` | JSON-LD `<script>` renderer | Used everywhere. Phase 5 will inspect for `@id` collisions. | Phase 5 |
| `src/app/sitemap.ts` | Dynamic XML sitemap | Hits Sanity at request/build time via `Promise.all` on POSTS/CATEGORIES/AUTHORS queries. **No explicit ISR.** Real `lastModified` dates (good fix from April 2026 noted in comments). | Phase 3, 9 |
| `src/app/robots.ts` | Robots.txt with explicit AI-bot Allow rules | Good — all major LLM bots Allowed. `/_next/static/` and `/_next/image/` allowed (correct — fixed April 2026 per comments). | Phase 3, 8 |
| `src/app/layout.tsx` | Root layout — globals, Organization+Website schemas, AI meta tags | Good central place. Dynamic-imports Header/Footer/SpecialOfferBanner (questionable — `ssr: true` so no benefit). | Phase 2 |

### Existing schema generators (counted from `schema-generators.ts`)

To be enumerated in Phase 5; from spot-check the file exports:
`generateOrganizationSchema`, `generateWebsiteSchema`, `generateCourseSchema`, `generateBreadcrumbSchema`, `generateFAQSchema`, `generateCityCoursePageSchema`, and others (full count in Phase 5).

### Redirect inventory (next.config.ts)

**52 redirects** in `next.config.ts:60-324` — all 301 permanent. Notable:
- 11 software-testing legacy `/course-name` → `/courses/software-testing-course/course-name`
- 7 DS/ML legacy redirects
- 7 BI legacy redirects
- 5 DM legacy redirects
- 5 events historical-slug → `/events` collapse (correctly de-chained per April 2026 comment)
- 1 wildcard: `/digital-marketing-courses-in-:city` → `/digital-marketing-course-in-:city` (plural→singular)
- 1 author route migration `/authors/:slug` → `/blog/author/:slug`
- 1 `/index.html` → `/`

> **Initial flag (Phase 3 deep-dive):** Verify no redirect leads to a URL that itself 301s (chains). With 765 city pages on the singular-form canonical, the wildcard plural→singular is fine, but each must resolve in 1 hop.

### Security / X-Robots-Tag headers (next.config.ts:336-403)

| Source | Header | Purpose |
| --- | --- | --- |
| `/_next/static/:path*` | `X-Robots-Tag: noindex, nofollow` | Prevent indexing of JS/CSS chunks (good) |
| `/_next/data/:path*` | `X-Robots-Tag: noindex, nofollow` | Prevent indexing of data routes |
| `/cms/:path*` | `X-Robots-Tag: noindex, nofollow` | Defense-in-depth for Studio |
| `/mock-test/:courseSlug*` | `X-Robots-Tag: noindex, nofollow` | CSR-only pages — correctly excluded |
| `/(.*)` | `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: SAMEORIGIN` | Standard security |

> **Initial flag (Phase 3):** **No `Content-Security-Policy`, `Strict-Transport-Security`, or `Permissions-Policy`.** Will recommend in Phase 3, with deep-dive in Phase 11 (live browser).

---

## 1.5 Sanity wiring snapshot

| Item | Value | Source |
| --- | --- | --- |
| Client | `next-sanity` `createClient` | [src/sanity/client.ts](../../src/sanity/client.ts) |
| `useCdn` | **`true`** | [src/sanity/client.ts:9](../../src/sanity/client.ts#L9) — good for API-token preservation (CDN-cached responses) |
| API version | `2024-01-23` (env-overridable) | [src/sanity/env.ts:1-2](../../src/sanity/env.ts#L1) |
| Schema types | `post`, `author`, `category`, `certificate`, `job` (5 doc types) | [src/sanity/schema.ts](../../src/sanity/schema.ts) |
| Queries used at build/ISR | `POSTS_QUERY`, `CATEGORIES_QUERY`, `AUTHORS_QUERY` (sitemap), `POST_QUERY`, `CATEGORY_QUERY`, `AUTHOR_QUERY`, `CATEGORIES_WITH_COUNTS_QUERY`, `LATEST_POSTS_QUERY`, `RELATED_POSTS_QUERY`, `JOBS_QUERY`, `SEARCH_POSTS_QUERY` | [src/sanity/lib/queries.ts](../../src/sanity/lib/queries.ts) |
| GROQ projection discipline | **Good** — all queries explicitly project fields, no `*[_type=="post"]` unprojected fetches | [queries.ts](../../src/sanity/lib/queries.ts) |
| Webhook revalidation | **Not yet inspected — no `/api/revalidate` route found in routing tree.** | Phase 9 |

> **Sanity API-token preservation status:** `useCdn: true` is the strongest mitigation. **Risk vectors to verify in Phase 9:**
> 1. Does the build run any uncached, server-only Sanity reads with `useCdn: false`?
> 2. Is there a separate Sanity client (write/preview) with `useCdn: false` that may be leaking into build paths?
> 3. Sitemap `Promise.all([POSTS, CATEGORIES, AUTHORS])` — runs at build time (App Router default for `sitemap.ts`). With `useCdn: true` it should hit Sanity CDN, not the API directly. Phase 9 will verify the token-quota path.

---

## 1.6 Global layout SEO surface (root layout.tsx)

Strengths:
- Organization + Website JSON-LD injected globally via `<JsonLd>` component
- AI meta tags (`ai:summary`, `ai:key_points`, `ai:target_audience`, `ai:primary_services`) injected via `generateAIMetaTags()`
- `metadataBase` set to `SITE_CONFIG.url`
- Local Inter variable font, preloaded, `display: swap`
- `<html lang="en" dir="ltr" data-scroll-behavior="smooth">` — language tag present
- `theme-color`, `apple-touch-icon`, favicon set
- Header/Footer/SpecialOfferBanner dynamic-imported with `{ ssr: true }`

Weaknesses spotted (deep-dive Phase 2):
- `next/dynamic(..., { ssr: true })` on Header/Footer **provides no benefit** — they still server-render, but the dynamic boundary adds complexity and risks hydration mismatch. Should use direct import.
- `SeoHead` is a client component (P0 — see §1.4) but is mounted inside `<head>` via JSX — Next.js App Router pattern for `<head>` is to use the Metadata API, not custom `<head>` injection.
- `MetaPixel` and `GoogleAnalytics` components mounted in `<body>` — Phase 6 will check loading strategy (afterInteractive vs lazyOnload).
- `react-phone-number-input/style.css` imported in root layout — this CSS ships to **every** page, even pages without phone inputs. Phase 6 candidate for code-split.

---

## 1.7 Data-fidelity / brand consistency discrepancies (need user confirmation)

These are **factual discrepancies between source code and the audit brief** that affect NAP/E-E-A-T signals. Flagging at Phase 1 because schema correctness depends on them.

| Field | In source code | In audit brief | Severity | Resolution path |
| --- | --- | --- | --- | --- |
| **Street address** | `Office #1, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road` ([seo-config.ts:68](../../src/lib/seo-config.ts#L68)) | `Unit 215, Mainframe Premises, Goregaon East, Mumbai 400065` | **P0** (NAP must be consistent across schema + GBP + directories) | Confirm authoritative address with user |
| **Postal code** | `401107` (Mira Bhayandar) | `400065` (Goregaon East) | P0 | Same as above |
| **Founded year** | `2020` ([seo-config.ts:95](../../src/lib/seo-config.ts#L95)) | `2022` | P1 (Organization schema `foundingDate`) | Confirm with user |
| **Years of experience** | `15` ([seo-config.ts:124](../../src/lib/seo-config.ts#L124)) | implied 4 (since 2022) | P1 (trust signal mismatch — affects E-E-A-T) | Confirm with user |
| **Twitter handle** | `@cinutedigital` / `https://x.com/cinutedigital` | (none in brief) | P2 — verify profile exists | Phase 11 will live-check |
| **Phone** | `+918488988984` ([seo-config.ts:61](../../src/lib/seo-config.ts#L61)) | (none in brief) | — | OK if live |
| **Founder** | not in source | `Sandeep Maske` | P1 (Organization `founder` for E-E-A-T) | Add to seo-config |

---

## 1.8 Initial issue radar (validated in later phases)

These are issues spotted while inventorying — each will be re-examined and entered into `fix-backlog.md` in its proper phase. **Not exhaustive — Cycle 1 is just beginning.**

| # | Issue | Severity | Phase to confirm |
| --- | --- | --- | --- |
| R1 | `SeoHead.tsx` is `'use client'` and injects canonical via `usePathname` — redundant with Next.js Metadata API + ships client JS for trivial work | **P0** | Phase 3 |
| R2 | 250 `'use client'` files — likely 60-70% are over-applied | **P1** | Phase 2 + Phase 6 + Cycle 2 Sprint 4 |
| R3 | `schema-generators.ts` ≈ 6000+ lines in one file — maintainability + tree-shaking concerns | P1 | Phase 5 |
| R4 | NAP discrepancy (address/postal code) between source code and audit brief | **P0** | User confirm (§1.7) |
| R5 | Founded year discrepancy 2020 vs 2022 + years-experience 15 vs ~4 | P1 | User confirm (§1.7) |
| R6 | No CSP / HSTS / Permissions-Policy headers | P2 | Phase 3 |
| R7 | `react-phone-number-input/style.css` global import — ships CSS to every route | P2 | Phase 6 |
| R8 | `dynamic(..., { ssr: true })` for Header/Footer — adds complexity with no benefit | P3 | Phase 2 |
| R9 | Sitemap fetches Sanity at every build — verify `useCdn` actually mitigates token use | P1 | Phase 9 |
| R10 | No `/api/revalidate` route discovered — Sanity publish probably doesn't auto-update site | **P1** | Phase 9 |
| R11 | `reviewCount: 425` + `rating: 4.9` hard-coded in `seo-config.ts` — **MUST be real** or it risks an `AggregateRating` manual action | **P0** | Phase 5 + user confirm |
| R12 | `successRate: 100` (placement) — strong claim, must be substantiable; affects E-E-A-T | P1 | Phase 7 + user confirm |
| R13 | `studentsPlaced: 5000` + `hiringPartners: 50` — same E-E-A-T concern | P1 | Phase 7 + user confirm |
| R14 | `JOBS_QUERY` filters `isActive == true` — good — but `live-jobs/page.tsx` has `generateMetadata` only, no `generateStaticParams` (uses `dynamic`?) — verify rendering mode | P2 | Phase 2 |
| R15 | `reviews/page.tsx` has `revalidate = 120` — 2 minutes is very aggressive (lots of rebuilds). Verify it actually changes that often. | P3 | Phase 6 |
| R16 | Sanity Studio bundle (`sanity` ^5.12.0) — must verify it's route-isolated, not bundled into main app | **P1** | Phase 2 |

---

## 1.9 Baseline KPIs (deferred — need user/external input)

The following baseline metrics **cannot be inspected from source** and require either GSC access, a live browser run, or external tooling. Captured here so they're not lost.

| KPI | Source needed | Phase to fill in |
| --- | --- | --- |
| Lighthouse mobile/desktop (Perf/A11y/BP/SEO) — home + 1 course-detail + 1 city-page + 1 blog-post | Chrome MCP live audit | Phase 11 |
| Core Web Vitals field data (LCP/INP/CLS) per template | GSC → Page Experience | Phase 10 |
| Crawl status (Indexed / Crawled-not-indexed / Discovered-not-indexed counts) | GSC Coverage | Phase 10 |
| Top 20 queries / top 20 pages / position 8-15 opportunities | GSC Performance | Phase 10 |
| Total backlinks + referring domains + top anchor texts | GSC Links + Ahrefs/SEMrush external | Phase 10 + 14 |
| Sitemap submission status + last-read date | GSC Sitemaps | Phase 10 |
| Mobile Usability errors | GSC | Phase 10 |
| Rich-result coverage (Course, FAQ, Breadcrumb, Review, JobPosting, Event) | GSC Enhancements | Phase 10 |
| Index size estimate via `site:cinutedigital.com` | manual Google search | Phase 10 |
| Page-load TTFB on India 4G | Chrome MCP throttled | Phase 11 |

---

## 1.10 Files emitted by Phase 1

1. **`docs/seo-audit/00-README.md`** — audit index, cycle plan, severity legend, operational guardrails
2. **`docs/seo-audit/01-baseline.md`** — this document
3. **`docs/seo-audit/_page-inventory.txt`** — flat list of all 64 page files (companion artifact)

---

## 1.11 Phase 1 summary

### ✅ Working

- **SEO infrastructure is in place and centralised** — `seo-config.ts`, `metadata-generator.ts`, `schema-generators.ts`, `sitemap.ts`, `robots.ts` all live. Most templates already have either static `metadata` or `generateMetadata`.
- **Modern Next.js 16 + App Router** with sensible experimental opt-ins.
- **`useCdn: true`** on Sanity client — solid baseline for API-token preservation.
- **Real `lastModified` dates** in sitemap (good April-2026 fix).
- **Wildcard plural→singular city-slug redirect** is in place.
- **`/_next/static/` and `/_next/image/`** are correctly Allowed in robots.txt (good April-2026 fix).
- **All major AI bots explicitly Allowed** in robots.txt (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) — correct for lead-gen EdTech.
- **52 legacy redirects** in `next.config.ts` — clean, all 301, intentional.
- **`/cms` and `/mock-test/:courseSlug*` correctly `noindex`** via X-Robots-Tag.

### ⚠️ Issues / risks surfaced

(16 entries in §1.8 — re-evaluated in later phases. P0/P1 highlights: `SeoHead.tsx` client-side canonical, 250 `'use client'` files, monolithic schema generator, NAP discrepancy, hard-coded AggregateRating values, missing webhook revalidation.)

### 📝 Needs user confirmation before Phase 5

These two block correct Organization / LocalBusiness schema (Phase 5 deliverable):
1. **Authoritative postal address** — Mira Road (source) vs Goregaon East (brief)
2. **Founded year** — 2020 (source) vs 2022 (brief)
3. **Are these placement stats verifiable: 5000 placed / 4.9 rating / 425 reviews / 100% success / 50 hiring partners?**

### 🛠️ Phase 2 setup (next)

Phase 2 will dive into:
- Per-template `generateMetadata` patterns (every dynamic + static route)
- Server/Client split discipline (250 `'use client'` triage starts here)
- Bundle composition pre-fix (without running build — read imports + analyzer config)
- `loading.tsx` / `error.tsx` / `not-found.tsx` coverage
- `next/image` adoption per template
- Third-party script strategy (`MetaPixel`, `GoogleAnalytics`, Calendly, Leaflet)
- Studio bundle isolation verification
