# Phase 6 — Core Web Vitals & Performance

> **Goal:** identify CWV-affecting source patterns (LCP, INP, CLS, TTFB, FCP), image pipeline correctness, hero priority, font strategy, render-blocking scripts, hydration cost, bundle composition, layout shift, and Sanity-CDN integration.
> **Date:** 2026-05-19
> **Mode:** read-only source inspection. **No `next build` / `ANALYZE=true` run** (deferred per Sanity-token guardrail).
> **Field-data gap:** live LCP/INP/CLS values come from Phase 11 (Chrome MCP) + Phase 10 (GSC field data).

---

## 6.1 Dependency footprint (`package.json` vs actual imports)

Verified each "heavy lib" suspect against `src/` imports:

| Package | In package.json | Actually imported? | Notes |
| --- | --- | --- | --- |
| `framer-motion` | ^12.34.3 | **YES — 160 files** | Heaviest single perf cost (50-70 KB gzip even with `optimizePackageImports`) — Cycle 3 codemod replacement |
| `lucide-react` | ^0.575.0 | YES (heavy) | Tree-shaken via `optimizePackageImports` ✅ |
| `react-icons` | ^5.5.0 | YES | Same optimisation ✅ |
| `recharts` | ^3.7.0 | **❌ NO imports in src/** | **Unused — remove from deps** |
| `react-calendly` | ^4.4.0 | **❌ NO imports in src/** | **Unused — remove from deps** |
| `react-countup` | ^6.5.3 | **❌ NO imports in src/** | **Unused — `HeroManualTesting.tsx:121-144` has a custom `CountUp` written with `useEffect`+`requestAnimationFrame` instead.** Remove from deps |
| `typewriter-effect` | ^2.22.0 | **❌ NO imports in src/** | **Unused — remove from deps** |
| `react-leaflet` + `leaflet` | ^5.0.0 / ^1.9.4 | YES (2 files: locations + placements maps) | Scoped — only loads on relevant routes ✅ |
| `next-sanity-image` | ^6.2.0 | **❌ NO `useNextSanityImage` imports** | Installed but **never used**. Only the raw `@sanity/image-url` builder is used in [src/sanity/lib/image.ts](../../src/sanity/lib/image.ts) → 3 call-sites. **`next-sanity-image` is the recommended Next.js-aware wrapper — adopting it would auto-set `width`/`height` and prevent CLS.** P1 — remove dep OR migrate to it. |
| `@sanity/image-url` | (transitive via @sanity/client) | YES | Used by `urlFor` helper |
| `googleapis` | ^171.4.0 | YES | Server-only (`/api/reviews`) — must verify not bundled to client. P2 — Phase 2 BLG-NEW to grep. |
| `react-phone-number-input` | ^3.4.16 | YES (forms) + CSS imported in root layout | BLG-009 — root-layout CSS already flagged |
| `nodemailer` | ^8.0.1 | YES (server-only `/api/*`) | Fine — server-only ✅ |

> **6.1.1 — P1 (BLG-NEW):** **4 unused production dependencies** (`recharts`, `react-calendly`, `react-countup`, `typewriter-effect`) + 1 installed-but-unused (`next-sanity-image`). Remove from `package.json` to:
> - Cut install time
> - Shrink lockfile attack surface
> - Eliminate accidental future import bloat
> - **Estimated removed weight: ~250 KB raw / ~80-100 KB gzip** if these were accidentally imported in future

> **6.1.2 — P0 (BLG-NEW):** **`framer-motion` imported in 160 files.** Even with `optimizePackageImports` reducing per-import cost, the aggregated client-bundle impact across page boundaries is significant. Combined with the 250 `'use client'` files (Phase 2 BLG-008), the home / course / city routes ship far more JS than they need.

---

## 6.2 Image pipeline audit

### 6.2.1 `next/image` adoption

- **71 component files** use `next/image` (Phase 2 §2.7)
- **5 content-bearing components still use raw `<img>`** (Phase 2 BLG-012)
- `next.config.ts` has:
  - `formats: ['image/avif', 'image/webp']` ✅
  - `qualities: [40, 50, 60, 75, 90]` — multi-quality build-out
  - `deviceSizes: [320, 360, 390, 414, 480, 640, 750, 828, 1080, 1200, 1536, 1920]` — comprehensive
  - `imageSizes: [16, 32, 48, 64, 96, 128, 256, 320, 346, 384]` — comprehensive
  - `remotePatterns: [{ hostname: 'cdn.sanity.io' }]` ✅
  - `minimumCacheTTL: 60` — short. Could push to 86400 (24 hr) for safer cache without big freshness penalty
- **`unoptimized` flag**: **0 occurrences in src/** ✅ — all images go through Next's pipeline

### 6.2.2 LCP hero priority audit

Sampled priority/fetchPriority usage. Findings:

| Component | `priority` correctly on LCP? | Notes |
| --- | --- | --- |
| `HomeHeroSection.tsx` | **No image hero** — text + form. LCP is the H1 text or form. ✅ implicit pass | |
| `HeroManualTesting.tsx` | **No actual hero image** — text + breadcrumb + form. The 4 `<Image>` tags are **company logos below H1** marked `priority={true}` — **WRONG** (those are below-fold or far-from-LCP elements). | P2 (BLG-NEW) |
| `events/EventHero.tsx` | **`priority` + `fetchPriority="high"` both set** | ✅ correct |
| `sections/TeamHeroSection.tsx` | **`priority` + `fetchPriority="high"` + `loading="eager"` all set** | ✅✅ exemplar |
| `sections/AboutHeroSection.tsx` | `priority` set | ✅ |
| `sections/AAACerticationHeroSection.tsx` | `priority` set | ✅ |
| `sections/ACTDCertificationHeroSection.tsx` | `priority` set | ✅ |
| `blog/CategoryHero.tsx` + `BlogHero.tsx` | `priority` set | ✅ |
| `blog/AuthorPageContent.tsx` | `priority` set | ✅ |
| `our-team/ui.tsx` | `priority` set | ✅ |
| `AboutFacultyStrip.tsx` | `priority={false}` explicit | ✅ correct |
| `TrainersCardSection.tsx` | `priority={false}` explicit | ✅ |
| `AboutAccreditations.tsx` | `priority` set — but this is the accreditations section (likely below fold) | ⚠️ likely wrong; verify |
| `(city-courses)/HeroSection.tsx` | No `next/image` in hero — text-only hero. ✅ implicit | |

### 6.2.3 LCP candidates per template

| Template | Likely LCP element | Priority correct? |
| --- | --- | --- |
| Home | H1 text + trust card grid | ✅ (text LCP fast) |
| Course detail (manual testing) | H1 text + nearby decorative elements | ⚠️ company logos marked `priority` shouldn't be |
| City-course | H1 text | ✅ |
| Blog post | Hero featured image (Sanity CDN) | needs verification — `BlogPostHeroSection.tsx` had `alt=""` (Phase 4 BLG-046) and unknown priority |
| Blog category | Category hero image | ✅ |
| About | Hero image | ✅ |
| Contact | Hero image | needs verification (Phase 11) |
| Events / Event detail | Event banner image | ✅ |

### 6.2.4 Image issues (P-tagged)

| # | Issue | Severity |
| --- | --- | --- |
| 6.2.1 | **`HeroManualTesting.tsx` company logos marked `priority={true}`** — 4 small logos below LCP get preload priority, displacing the real LCP element (H1 text doesn't need it, but if other course pages have hero images they'd compete) | P2 (BLG-NEW) |
| 6.2.2 | **No `placeholder="blur"` / `blurDataURL`** anywhere in source — no blur-up technique. Adding blur placeholders softens perceived CLS for Sanity-CDN blog images. | P3 (BLG-NEW) |
| 6.2.3 | **`next-sanity-image` installed but unused** — using raw `@sanity/image-url` means images don't get auto `width`/`height` from Sanity metadata → CLS risk on blog featured images, related-post thumbnails | **P1** (BLG-NEW) |
| 6.2.4 | **`BlogPostHeroSection.tsx alt=""`** — Phase 4 BLG-046; also probably the LCP image | P2 (already BLG-046) |
| 6.2.5 | **`HeroManualTesting.tsx` company logo alt text doesn't match filename** — `Testriq-Logo-Black.webp` alt="Testriq" (consistent), but `axiom.webp` alt="Pixelwave", `credility.webp` alt="Groundwork Systems", `marqetrix.webp` alt="Nitrosoft" — alts don't match filenames. **Either alts are wrong OR the filenames are stale.** Suggests fake/placeholder alumni-company badges. | **P1** (BLG-NEW) — verify with user; affects trust signals |
| 6.2.6 | **`minimumCacheTTL: 60`** seconds — short. Push to 86400 for Next image cache stability | P3 (BLG-NEW) |

---

## 6.3 Font strategy

| Item | Status |
| --- | --- |
| `next/font/local` (Inter variable) | ✅ |
| `display: swap` | ✅ |
| `preload: true` | ✅ |
| `weight: '100 900'` (full variable range) | ✅ |
| `fallback: [system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Arial, sans-serif]` | ✅ comprehensive |
| Single woff2 file (Inter-variable) | ✅ |
| Multiple font families | ❌ none — only Inter (good, single font = small CSS) |
| Font in critical CSS path | ✅ — `next/font` inlines `@font-face` in `<head>` |

> **6.3.1 — Verdict: Font strategy is solid.** No P-tagged issues. The variable Inter font with full weight range is the modern best practice and minimises requests.

### 6.3.2 Wrong inline-style font override in city-courses HeroSection

`src/components/city-courses/HeroSection.tsx:91-92`:
```tsx
<h1 className="..." style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif' }}>
```

**Overrides Inter font with `system-ui`** specifically for the H1 on 765 city pages. Inconsistent with the rest of the site. P3 (BLG-NEW) — either intentional (font fallback hack) or accidental; verify and remove.

---

## 6.4 Third-party script strategy (Phase 2 §2.6 deeper)

| Script | Strategy | Verdict |
| --- | --- | --- |
| `GoogleAnalytics.tsx` external gtag.js | `strategy="lazyOnload"` | ✅ |
| `GoogleAnalytics.tsx` init shim | `strategy="afterInteractive"` | ✅ correct mixed pattern |
| `MetaPixel.js` fbevents.js (external) | loaded via inline init script (NOT via Script tag) | ❌ BLG-007 — not deferred |
| `MetaPixel.js` init script | `strategy="afterInteractive"` | ✅ |
| Calendly | Library `react-calendly` is installed but **NOT imported** (see 6.1) — likely Calendly is loaded via direct script tag or NOT loaded at all (need Phase 11 verify) | P2 — verify |
| Leaflet | imported only in 2 component files, scoped | ✅ |

---

## 6.5 Hydration cost — above-fold inventory

### 6.5.1 Home page

Above-fold elements on home (per `src/app/page.tsx` + `HomeHeroSection.tsx`):
1. `Header` (dynamic-imported `ssr:true` — server renders, hydrates immediately)
2. `SpecialOfferBanner` (sticky top, dynamic `ssr:true`)
3. `HomeHeroSection` (`'use client'`):
   - Form state (useState × 5)
   - useEffect for click-outside
   - `PhoneInput` from `react-phone-number-input` (heavy)
   - `BrochureDownloadModal` (dynamic `ssr:false`) ✅
   - `YouTubeVideoModal` (dynamic `ssr:false`) ✅
   - Lucide icons (Award, TrendingUp, Users, Star, CheckCircle2, Sparkles, Download, Eye, Play, User, Mail, Home)

**Hydration cost (estimated):** ~80-120 KB JS for hero section alone (form + phone-input + icons + react-hook-form deps).

### 6.5.2 Manual Testing course page

Above-fold elements:
1. Header
2. `HeroManualTesting` (`'use client'`):
   - Custom `useInView` IntersectionObserver hook ✅
   - Custom `CountUp` (requestAnimationFrame-driven) ✅
   - `LeadForm` dynamic-imported `ssr:false` ✅
   - `react-icons/lu` icons (LuBadgeCheck, LuChevronRight, LuStar, LuShieldCheck, LuSparkles, LuArrowRight, LuCloudDownload, LuArrowDownNarrowWide) ← **second icon library besides `lucide-react`**
   - 4 company-logo `<Image>` tags

> **6.5.1 — P2 (BLG-NEW):** `react-icons/lu` AND `lucide-react` both imported in `HeroManualTesting.tsx`. Two icon libraries = 2× icon-runtime cost. Standardise on `lucide-react` (already in optimizePackageImports allow-list).

### 6.5.3 15 `'use client'` files in `src/components/home/` alone

Even non-interactive home sections like `HomeStatsSection`, `HomeWhyChooseSection`, `HomeCourseCategoriesSection`, `HomeValuePropositionSection`, `HomeLatestBlogSection`, `HomeLearningExperienceSection`, `HomeSuccessStoriesSection`, `HomeFinalCTASection` are `'use client'`. **Confirms Phase 2 BLG-008** — root cause of the SPA-like hydration cost.

---

## 6.6 Layout shift (CLS) audit

### Sources of CLS in source:

| Source | Status |
| --- | --- |
| Images without `width`/`height` | All `next/image` instances inspected have explicit `width`/`height`. **No CLS from images** ✅ |
| Fonts swapping in (FOUT/FOIT) | `display: swap` set → small CLS on font load — acceptable. Variable font avoids weight-swap CLS. ✅ |
| Sticky banner/header animations | `SpecialOfferBanner` is sticky top; banner toggle could cause layout shift on first paint. Phase 11 verify. |
| Dynamic-imported sections appearing | Many sections dynamic `ssr:true` — but `ssr:true` means initial HTML has full content → no CLS from this. ✅ |
| **`ssr:false` content sections appearing post-hydration** | **Major CLS risk** — content shifts in after hydration. Affects course detail pages (BLG-004), past-events listing, AI-Courses hero (line 29), city-courses LeadForm (line 14). | P0 (already BLG-004) |
| **`<SectionLoader>` placeholders with `min-h-[60vh]`** ([ManualTestingPageContent.tsx:7-11](../../src/app/courses/software-testing-course/manual-testing-course/ManualTestingPageContent.tsx#L7)) | Reserves space but content may render at different height — CLS within bound |
| `CityCourseLeadFormSkeleton` ([city-courses/HeroSection.tsx:13](../../src/components/city-courses/HeroSection.tsx#L13)) | ✅ skeleton has explicit height, prevents CLS |
| React Suspense fallbacks with `"Loading..."` text | Phase 2 BLG-018 — `<div>Loading...</div>` for blog hero replaces a real image; height delta causes CLS | P2 |

### CLS fix recommendations

| # | Fix | Effort |
| --- | --- | --- |
| 6.6.1 | Remove `ssr:false` from content sections (BLG-004) | high — already scheduled |
| 6.6.2 | Replace Suspense `"Loading..."` text fallbacks with same-height skeletons (BLG-018) | medium |
| 6.6.3 | Add `placeholder="blur"` to Sanity blog hero `<Image>` (6.2.2) | low |

---

## 6.7 Cache-Control / TTFB

### Source inspection

| Surface | Cache strategy | Source |
| --- | --- | --- |
| `/_next/static/*` | Next.js default: `public, max-age=31536000, immutable` | Vercel / Next defaults |
| `/_next/image/*` | Next.js default: `public, max-age=60, must-revalidate` (governed by `images.minimumCacheTTL: 60`) | [next.config.ts:49](../../next.config.ts#L49) — short |
| HTML for static routes | Next.js default: `s-maxage=...` based on `revalidate` value | per route |
| HTML for revalidate routes (blog, services, jobs) | `s-maxage=<revalidate>, stale-while-revalidate=...` | per route |
| HTML for default-dynamic routes (live-jobs, search, contact) | `no-store, no-cache` (default for dynamic) | per route |
| `/api/*` routes | **NO explicit Cache-Control** set in any of 8 routes — defaults to `no-store` | per route |
| `next.config.ts` `headers()` | **NO Cache-Control entries** — only X-Robots-Tag + security headers | [next.config.ts:336-403](../../next.config.ts#L336) |

### Issues

| # | Issue | Severity |
| --- | --- | --- |
| 6.7.1 | **`minimumCacheTTL: 60` seconds** — short cache for optimized images. Push to 86400 (24 hr) to reduce Next image function invocations on cold | P3 (BLG-NEW) |
| 6.7.2 | **No Cache-Control on `/api/reviews`** — this endpoint proxies Google Reviews API. Should set `s-maxage=3600, stale-while-revalidate=86400` to avoid hammering Google Maps API on every page load | P2 (BLG-NEW) |
| 6.7.3 | **No edge runtime configuration** — all routes default to Node runtime. For lightweight pages (legal, status, validation), `runtime: 'edge'` would lower TTFB on India edge nodes (Mumbai POP), if hosted on Vercel. | P3 — investigate after Phase 11 confirms hosting |
| 6.7.4 | **No `preferredRegion: 'bom1'`** (Mumbai) declared on routes — for India-served pages, this would improve TTFB. Hosting-dependent. | P3 |

---

## 6.8 LCP risk per template (predictive — confirmed in Phase 11)

| Template | LCP element | Predicted LCP | Risk factors |
| --- | --- | --- | --- |
| Home | H1 text | 1.5-2.0 s | Text LCP fast; risk is form hydration + fbpixel blocking | ✅ likely pass |
| Course category hub | Category hero text | 1.5-2.5 s | Multiple sections dynamic | ⚠️ |
| Course detail (manual testing) | H1 text | 1.5-2.5 s | Heavy framer-motion, 2 icon libs, 4 priority images, lead form ssr:false | ⚠️ |
| Course detail (other) | Same pattern | similar | similar | ⚠️ |
| City-course | H1 text | 1.5-2.5 s | `'use client'` wrapper, LeadForm `ssr:false`, custom system-ui font for H1 | ⚠️ |
| Blog post | Sanity featured image | **3-5 s risk** | Image not `next-sanity-image`-optimized, Sanity CDN latency on India, no preconnect, no blur placeholder | ❌ P0 risk |
| Blog category | category hero image | 2-3 s | similar | ⚠️ |
| About | hero image | 2 s | acceptable | ✅ |
| Contact | hero image | 2 s | + Calendly iframe later | ✅ |
| Events list | OG banner | 2 s | acceptable | ✅ |
| Event detail | Event banner | 2-3 s | + RelatedEvents map | ⚠️ |
| Locations | Leaflet map | 4-5 s | Leaflet ~40 KB + tile fetches | ❌ |
| Jobs/Placements | hero text | 1.5 s | acceptable | ✅ |
| Reviews | hero text + review cards | 2 s | acceptable | ✅ |

---

## 6.9 INP risk per template

INP is dominated by:
1. Heaviest event handler on first interaction
2. Hydration completing before user input

| Template | Highest-risk interaction | Predicted INP | Risk |
| --- | --- | --- | --- |
| Home | Form submit (handleSubmit) | 100-200 ms | ✅ |
| Home | Phone number type-ahead via `react-phone-number-input` | 50-150 ms | ⚠️ |
| Home | Open BrochureDownloadModal | 200-400 ms (first dynamic load) | ⚠️ |
| Home | Watch CDPL video modal | 300-500 ms (YouTube iframe init) | ⚠️ |
| Course detail | LeadForm interaction | 100-200 ms | ✅ |
| Blog post | scroll into related-posts (hydration ripple) | 100-200 ms | ✅ |
| All routes | Initial click during long-task heavy hydration | **risk of 500-800 ms INP** while ~150 of 250 `'use client'` files hydrate | ❌ P0 (BLG-008) |

---

## 6.10 Lighthouse-style "Avoid serving legacy JavaScript" check

Next.js 16 builds for modern browsers by default. **Cannot fully verify without analyzer.** No `browserslist` override found in source — relies on Next.js default targeting.

### Issue

| # | Issue | Severity |
| --- | --- | --- |
| 6.10.1 | **No explicit `browserslist`** in package.json — Next.js applies its own default (ESModern targets). India Tier-2/3 mobile users on Android 9-10 may receive transpiled-down JS. Phase 11 will verify in Network tab. | P3 |

---

## 6.11 Sanity CDN integration

| Item | Status |
| --- | --- |
| `cdn.sanity.io` in `images.remotePatterns` | ✅ [next.config.ts:55](../../next.config.ts#L55) |
| `useCdn: true` on Sanity client | ✅ |
| **`<link rel="preconnect" href="https://cdn.sanity.io">`** | **❌ missing** ([Phase 2 BLG-011](02-codebase-audit.md#blg-011)) |
| **`<link rel="dns-prefetch" href="https://cdn.sanity.io">`** | ❌ missing |
| `next-sanity-image` integration | ❌ installed but unused (6.1) |
| **Image width/height extracted from Sanity asset metadata** | ❌ no — current `urlFor` helper returns raw URL; `<Image>` gets manual `width`/`height` which may not match actual dimensions → CLS risk | P1 (BLG-NEW) |

> **6.11.1 — P1 (BLG-NEW):** Adopt `next-sanity-image`'s `useNextSanityImage` hook in `PortableTextRenderer.tsx` and `BlogPostHeroSection.tsx` — this auto-derives `width`, `height`, `placeholder`, `blurDataURL` from Sanity asset metadata. Single biggest blog-CWV improvement available.

---

## 6.12 Phase 6 issue summary (Backlog seeds)

| ID | Issue | Severity | Sprint |
| --- | --- | --- | --- |
| **BLG-082** | 4 unused production deps: `recharts`, `react-calendly`, `react-countup`, `typewriter-effect` in package.json but never imported in src/ | **P1** | Cycle 2 Sprint 7 |
| **BLG-083** | `next-sanity-image` installed but never used — using raw `@sanity/image-url` means missing auto width/height/blurDataURL for Sanity CDN images → CLS on blog | **P1** | Cycle 3 — biggest single CWV blog win |
| **BLG-084** | `framer-motion` imported in 160 files — biggest single JS-bundle perf cost | **P0** (cross-cuts BLG-008) | Cycle 3 — codemod replacement with CSS / IntersectionObserver |
| **BLG-085** | `HeroManualTesting.tsx` 4 below-fold company logos marked `priority={true}` — wastes preload budget | P2 | Cycle 2 Sprint 3 |
| **BLG-086** | `HeroManualTesting.tsx` company logo alt text mismatches filename (axiom.webp → "Pixelwave", credility.webp → "Groundwork Systems", marqetrix.webp → "Nitrosoft") — placeholder/fake alumni-company badges? | **P1** | Cycle 2 Sprint 1 — user verification |
| **BLG-087** | `HeroManualTesting.tsx:62` declares "Years of Expertise: 14+" — contradicts foundedYear:2020 (5 yrs). Non-defensible. | P1 | Bundled with BLG-044 |
| **BLG-088** | Two icon libraries (`react-icons/lu` + `lucide-react`) imported together in `HeroManualTesting.tsx` | P2 | Cycle 2 Sprint 3 — standardise on lucide-react |
| **BLG-089** | `city-courses/HeroSection.tsx:91` inline `style={{ fontFamily: "system-ui..." }}` on H1 — overrides Inter font on 765 city pages | P3 | Cycle 2 Sprint 3 |
| **BLG-090** | No `placeholder="blur"` / `blurDataURL` anywhere — Sanity blog images have no blur-up | P3 | Cycle 3 (post BLG-083) |
| **BLG-091** | `images.minimumCacheTTL: 60` seconds — short. Push to 86400 to reduce Next image function invocations | P3 | Cycle 2 Sprint 3 |
| **BLG-092** | No `Cache-Control` on `/api/reviews` — hammers Google API on every load | P2 | Cycle 2 Sprint 3 |
| **BLG-093** | No `preconnect`/`dns-prefetch` to `cdn.sanity.io` (cross-references Phase 2 BLG-011) | P2 | Cycle 2 Sprint 3 |
| **BLG-094** | `AboutAccreditations.tsx` image marked `priority` despite being below fold | P3 | Cycle 2 Sprint 3 — verify per Phase 11 |

---

## 6.13 Phase 6 summary

### ✅ Working

- **`next/font/local`** Inter variable, preloaded, `display: swap`, comprehensive fallback — exemplar font setup
- **`next/image` adoption** at 71 files; `formats: [avif, webp]`; comprehensive `deviceSizes`/`imageSizes`
- **No `unoptimized` flag** anywhere — all images flow through optimizer
- **Hero priority** correctly set on most hero images (Team, Events, About, AAA, ACTD, Blog Category, Blog Hero, Author)
- **Custom `useInView` + `CountUp` hooks** in `HeroManualTesting.tsx` — author avoided 2 unnecessary libraries (`react-intersection-observer`, `react-countup`)
- **GoogleAnalytics mixed-strategy** (`lazyOnload` + `afterInteractive` shim) ✅
- **No images without `width`/`height`** in src/ ✅
- **`useCdn: true`** Sanity client (API-token preservation) ✅
- **`'use client'` modals correctly `dynamic({ ssr: false })`** ✅

### ⚠️ Issues found in Phase 6

**2 P0** (BLG-084 framer-motion in 160 files cross-cuts BLG-008; BLG-004 already-P0 reinforced), **4 P1**, **4 P2**, **3 P3** — 13 new backlog entries.

### 🟡 Most urgent triage from Phase 6

| # | What | Effort | Win |
| --- | --- | --- | --- |
| 1 | Remove 4 unused deps from package.json (BLG-082) | 15 min | Smaller lockfile, removes 250 KB of node_modules surface area |
| 2 | Migrate blog/Sanity images to `next-sanity-image` `useNextSanityImage` (BLG-083) | 4-6 hrs | Major blog CWV win — auto width/height/blur from Sanity metadata |
| 3 | Add `<link rel="preconnect" href="https://cdn.sanity.io">` to root layout (BLG-093, also BLG-011) | 5 min | Cut Sanity CDN handshake on blog routes by 50-150 ms |
| 4 | Verify and fix `HeroManualTesting.tsx` company logo alt text vs filename (BLG-086) | 30 min + user input | Honesty/trust signal correctness |

### Backlog total: **94 entries** (BLG-001 → BLG-094) across **12 P0 / 29 P1 / 32 P2 / 21 P3**

### 📝 Phase 6 → Phase 11 handoff

Phase 11 (Chrome MCP live audit) will verify these read-only predictions:
- Actual LCP/INP/CLS field values per template
- Whether `SeoHead.tsx` double-emits canonical (BLG-001)
- Whether `framer-motion` is actually delivered as one chunk or split (verify `optimizePackageImports`)
- Whether `cdn.sanity.io` is being preconnected at all (some hosting platforms auto-add)
- Real LCP element on each template (most importantly the blog post)
- Calendly script presence/absence (since `react-calendly` is in deps but unused)
- TTFB from India IP
- Mobile vs desktop split

### 📝 Phase 6 → Cycle 3 handoff (CWV sweep)

This phase confirms the Cycle 3 dependency targets:
- **framer-motion** — drop or replace (160 import sites)
- **server-component conversion** — ~150 client→server conversions in Cycle 3
- **react-phone-number-input** — already flagged in Cycle 3 brief; thin wrapper using `libphonenumber-js`
