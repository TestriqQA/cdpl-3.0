# Phase 2 — Codebase Architecture Audit

> **Goal:** inspect Next.js 16 architectural choices that materially affect SEO, CWV, and crawlability — the layout, rendering boundaries, metadata patterns, dynamic-import strategy, third-party script strategy, and bundle composition.
> **Date:** 2026-05-19
> **Mode:** read-only inspection of source. No `next build` (deferred per Sanity-token guardrail).

---

## 2.1 next.config.ts (recap from Phase 1 + Phase 2 deepening)

`next.config.ts` is intentional and well-organised. Phase 2 findings beyond Phase 1:

### Strengths

| Item | Note |
| --- | --- |
| `serverExternalPackages: ['@prisma/client']` | Defensive — even though Prisma isn't a current dep. Safe to keep. |
| `productionBrowserSourceMaps: false` | Correct — keeps prod bundle small, source maps not exposed. |
| `poweredByHeader: false` | Correct — removes `X-Powered-By: Next.js`. |
| `reactStrictMode: true` | Correct. |
| `transpilePackages: ['next-sanity', 'sanity', '@sanity/vision', '@sanity/code-input']` | Correct for Sanity Studio interop. |
| `experimental.optimizePackageImports` | Tree-shakes `framer-motion`, `react-icons`, `@headlessui/react`, `lucide-react`. ✅ Good. |
| `experimental.optimizeServerReact: true` | Correct for Next 16. |
| `compiler.removeConsole` (excludes `error`/`warn`) | Correct strategy. |
| `images.formats: ['image/avif', 'image/webp']` + `qualities` + `deviceSizes` | Modern image pipeline. |
| `images.remotePatterns: [{ hostname: 'cdn.sanity.io' }]` | Correct — Sanity CDN whitelisted. |
| 52 redirects, all `permanent: true` (301) | Clean, intentional. April-2026 dechain comments visible. |
| Security headers (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`) | Good baseline. |
| `X-Robots-Tag: noindex, nofollow` on `/_next/static/*`, `/_next/data/*`, `/cms/*`, `/mock-test/:courseSlug*` | Correct. |

### Issues (P-tagged)

| # | Issue | File / line | Severity | Fix sketch |
| --- | --- | --- | --- | --- |
| 2.1.1 | **`experimental.optimizeCss: false`** disabled due to Tailwind v4 compatibility. `critters` ^0.0.25 is installed but not wired in. Critical-CSS extraction is therefore not happening — every route ships full Tailwind output. | [next.config.ts:23](../../next.config.ts#L23) | **P1** | Phase 6 to attempt re-enable on Tailwind 4 latest patch, or wire `beasties` (Critters fork maintained for Next 16) into a custom plugin. Until then, document the constraint. |
| 2.1.2 | `webpackBuildWorker: true` commented out — disables parallel webpack build, slowing CI but no runtime cost. Comment says "to ensure critters runs reliably" — but critters is already non-functional (see 2.1.1), so this comment is stale. | [next.config.ts:25](../../next.config.ts#L25) | P3 | Re-enable once 2.1.1 is resolved or remove stale comment. |
| 2.1.3 | **No `Content-Security-Policy`**. With Calendly + GA + Meta Pixel + Sanity CDN + Leaflet tiles + YouTube embeds, a permissive CSP is straightforward. | next.config.ts:336-403 (headers) | P2 | Phase 3 will draft the CSP. Header-only — no code changes elsewhere. |
| 2.1.4 | **No `Strict-Transport-Security`** (HSTS). Even though the site is HTTPS-served, the header is absent — preload eligibility blocked. | same | P2 | Add `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` once user confirms no http-only legacy paths. |
| 2.1.5 | **No `Permissions-Policy`**. Camera / mic / geolocation default-allow exposes attack surface. | same | P3 | Add restrictive Permissions-Policy. |
| 2.1.6 | Stale `@prisma/client` in `serverExternalPackages` despite not being a dep | [next.config.ts:9](../../next.config.ts#L9) | P3 | Remove. |

---

## 2.2 Root `app/layout.tsx`

### Strengths

- `<html lang="en" dir="ltr" data-scroll-behavior="smooth">` — language tag present (en, no hreflang variations because India default — acceptable for Phase 1 scope).
- `Inter` variable font via `next/font/local` with `display: swap`, `preload: true`, `weight: '100 900'`. ✅
- Global `Organization` + `Website` schemas injected globally via `<JsonLd>`.
- AI meta tags (`ai:summary` etc.) emitted in `<head>` (good pattern for GEO).
- `metadataBase` set to `SITE_CONFIG.url` (prevents OG URL warnings).
- `MetaPixel`, `GoogleAnalytics` mounted in `<body>` — correct (head injection would block render).

### Issues

| # | Issue | File / line | Severity | Fix sketch |
| --- | --- | --- | --- | --- |
| 2.2.1 | **`SeoHead` is a `'use client'` component injecting `<link rel="canonical">` from `usePathname()`.** Canonical is **redundant** with Next.js Metadata API's `alternates.canonical` (already set per route via `generateMetadata`). Effect: every page ships an extra client component **and** may emit double canonical tags (one server-rendered from Metadata API, one client-rendered from SeoHead). | [src/app/layout.tsx:80](../../src/app/layout.tsx#L80) + [src/components/SeoHead.tsx](../../src/components/SeoHead.tsx) | **P0** | Cycle 2 Sprint 1: delete `SeoHead.tsx` and its import from `layout.tsx`. The Metadata API handles canonical server-side and is already configured correctly per route. |
| 2.2.2 | **`Header`, `Footer`, `SpecialOfferBanner` dynamic-imported with `{ ssr: true }`** — `ssr: true` means they still server-render, so the `dynamic()` wrapping adds a split boundary with no FCP benefit and a small runtime cost (extra chunk request). | [src/app/layout.tsx:43-45](../../src/app/layout.tsx#L43) | P2 | Replace with direct imports. The optimisation here would be Server Components, not dynamic imports. |
| 2.2.3 | **`react-phone-number-input/style.css` imported globally** — ships ~5 KB CSS to every route, even routes without phone inputs (e.g., legal pages, blog list). | [src/app/layout.tsx:17](../../src/app/layout.tsx#L17) | P2 | Move CSS import inside `HomeHeroSection` / other phone-input-using components, or split via dynamic `import('react-phone-number-input/style.css')`. |
| 2.2.4 | **No `<link rel="preconnect">` to `cdn.sanity.io`** despite all blog images coming from there. Comment in `layout.tsx:101` says "Resource hints for performance — only for actually used origins" but the resource hints are empty. | [src/app/layout.tsx:101-103](../../src/app/layout.tsx#L101) | P2 | Add `<link rel="preconnect" href="https://cdn.sanity.io" crossOrigin />` and `<link rel="dns-prefetch" href="https://cdn.sanity.io" />` for blog/courses with Sanity images. |
| 2.2.5 | No `manifest.json` / `manifest.ts` for PWA-ish behaviour (Add-to-Home-Screen on India Android dominates this market). | (missing) | P3 | Phase 6 — generate `app/manifest.ts` with name/short_name/icons/theme_color. |
| 2.2.6 | **No `icon.tsx` / `apple-icon.tsx`** — uses static `/favicon.ico` + `/apple-touch-icon.png` from `public/`. Next.js 13+ pattern is co-located dynamic icons. Not strictly wrong, but inconsistent with the otherwise modern setup. | layout.tsx + public/ | P3 | Cycle 2 Sprint 3 — optional migration. |

---

## 2.3 `loading.tsx` / `error.tsx` / `not-found.tsx` coverage

| File | Status | Verdict |
| --- | --- | --- |
| `src/app/error.tsx` | ✅ present | Minimal `'use client'` boundary. Inline styles only. **Functional but ugly.** P3 — match site styling. |
| `src/app/not-found.tsx` | 🚨 **broken** | **Imports `Link` from `lucide-react`** (the icon) instead of `next/link`. The "Go Home" element is therefore an SVG icon being passed `href` and `style` props it doesn't understand — renders as a tiny icon with no navigation behaviour. **P0 — broken 404.** | [src/app/not-found.tsx:1](../../src/app/not-found.tsx#L1) |
| `loading.tsx` (any route) | ❌ **none anywhere** | No Suspense boundaries during ISR / streaming. Cycle 2 Sprint 4 candidate for blog/courses/mentors/events. | P2 |
| `template.tsx` | n/a — none needed | OK. |

### Fix sketch for `not-found.tsx`

```diff
- import { Link } from "lucide-react";
+ import Link from "next/link";
```

And the surrounding page should ideally render with site styling (Header + Footer present, Tailwind classes). Currently it's a styled `<div>` with inline `system-ui` — looks broken in production.

---

## 2.4 Metadata patterns — per-template scan

### 2.4.1 Static metadata exports (58 files)

Pattern (good — most static pages follow this):

```ts
// e.g., about-us, courses/*, certifications, legal
export const metadata: Metadata = generateMetadata({
  title: "...",
  description: "...",
  keywords: [...],
  url: "...",
  image: "/og-images/....webp",
});
```

**Findings (P-tagged):**

| # | Issue | Severity | Detail |
| --- | --- | --- | --- |
| 2.4.1.a | Two convenience wrappers (`generateStaticPageMetadata`, `generateCategoryMetadata`, `generateEventMetadata`, `generateBlogMetadata`) exist, but **adoption is inconsistent.** Home + most course pages call `generateMetadata` directly. About-us uses `generateStaticPageMetadata`. Course pages use the legacy alias `generateCourseMetadata = generateMetadata`. | P3 | [src/lib/metadata-generator.ts:471](../../src/lib/metadata-generator.ts#L471) — track legacy alias removal in Cycle 2 Sprint 7. |
| 2.4.1.b | Auto-truncation at 160 chars is correct, **but dev warnings only fire if description is too long** — short titles get a warning ([metadata-generator.ts:156](../../src/lib/metadata-generator.ts#L156)) but short descriptions do not. | P3 | Add symmetric warning for descriptions <120 chars. |
| 2.4.1.c | Many static metadata blocks include claims **the user said are not defensible** (e.g., "5,000+ placed", "100% placement"). E.g., [src/app/about-us/page.tsx:66](../../src/app/about-us/page.tsx#L66) — Phase 4 will enumerate every such description and Phase 7 will recommend rewrites. | P1 | Cross-cuts Phase 4 + Phase 7 + Cycle 2 Sprint 1. |
| 2.4.1.d | **No `alternates.languages` / hreflang** anywhere. India site is `en_IN`-only — acceptable. Document the decision. | P3 | Track only. |

### 2.4.2 `generateMetadata` dynamic routes (8)

| Route | Pattern | Verdict |
| --- | --- | --- |
| `(city-courses)/[slug]/page.tsx` | Looks up `courseData` (in-memory) by slug. Falls back to "Not Found" metadata on miss. Has plural/singular fallback. | ✅ Solid. P3 — could surface 410 via robots instead of soft-404 for stale plurals. |
| `blog/[slug]/page.tsx` | **Fetches `POST_QUERY` from Sanity inside `generateMetadata`, then again inside the page component** | **P0 — duplicate Sanity fetch per request. Sanity API token waste at scale (765 city pages + N blog posts).** Fix in Cycle 2 Sprint 4 via React `cache()` or `unstable_cache`. |
| `blog/category/[slug]/page.tsx` | Sanity fetch in generateMetadata | P1 — same dedup concern, smaller blast radius |
| `blog/author/[slug]/page.tsx` | Sanity fetch in generateMetadata | P1 — same |
| `events/[slug]/page.tsx` | Lookup against `pastEvents` (in-memory) — no Sanity hit | ✅ |
| `services/[slug]/page.tsx` | Lookup against `trainingServices` (in-memory) | ✅ |
| `jobs/live-jobs/page.tsx` | TBD — Phase 9 deep-dive | — |
| `blog/search/page.tsx` | TBD — Phase 4 (search index page is interactive, ensure noindex if appropriate) | — |

### Fix sketch for blog double-fetch (Cycle 2 Sprint 4)

```ts
// Option A — React's cache() (deduplicates within a single request)
import { cache } from 'react';
const getPost = cache(async (slug: string) =>
  client.fetch<SanityPost>(POST_QUERY, { slug })
);

// Both call-sites use the same cached function:
export async function generateMetadata({ params }) {
  const post = await getPost((await params).slug);
  ...
}
export default async function BlogPostPage({ params }) {
  const post = await getPost((await params).slug);
  ...
}
```

Or `unstable_cache` with a tag, then a `revalidateTag` call from the Sanity webhook handler (Phase 9 dependency).

---

## 2.5 Server / Client component split — 250 `'use client'` files

This is the single biggest architectural finding.

### 2.5.1 Distribution

- **~250 client component files** (Phase 1 §1.3)
- Of these, **~40+ files end in `Section.tsx`** under `components/*/` — i.e., presentational sub-sections of course / about / blog pages
- ~20 files are forms or modals (justifiably `'use client'`)
- ~15 are Sanity Studio (Studio is client-only — fine)
- ~15 are global UI (header dropdowns, sticky nav, mega menu — likely justified)
- The remaining **~160 files are likely over-applied** `'use client'`

### 2.5.2 The "page wrapper" anti-pattern

Pattern observed on **almost every course detail page**:

```ts
// page.tsx (server)
export const metadata = generateMetadata({...});
export default function Page() {
  const schemas = generateXxxCoursePageSchema(...);
  return (<>{schemas.map(s => <JsonLd .../>)}
    <XxxPageContent />            // 'use client' wrapper
  </>);
}

// XxxPageContent.tsx (client)
'use client';
import Hero from '@/components/.../Hero';                  // client
const Section1 = dynamic(() => import('./Section1'),
  { ssr: false, loading: <Loader/> });                     // ssr: false (P0!)
const Section2 = dynamic(() => import('./Section2'),
  { ssr: false, loading: <Loader/> });
// ...
```

**Result:** the page has server-rendered `<head>` (metadata + JSON-LD), but the entire `<body>` content is client-rendered. **`ssr: false` for content sections means Googlebot CAN still see the content** (it executes JS), **but Claude/GPT/Perplexity bots cannot** — they do not execute JS. The course curriculum, FAQ, project list, career outcomes are all invisible to AI crawlers.

This is the single biggest GEO (AI engine optimization) blocker on the site.

### 2.5.3 Evidence

`ssr: false` is used on content sections in (non-exhaustive — Phase 6 will fully enumerate):

- `src/app/courses/software-testing-course/manual-testing-course/ManualTestingPageContent.tsx` — `WhyLearnSection`, `CourseDetailSections`
- `src/components/advance-software-testing/WhoShouldEnroll.tsx` — `EnrollModal`
- `src/components/advance-software-testing/TestimonialsSection.tsx` — `ReviewsMarquee`
- `src/components/advance-software-testing/HeroSection.tsx` — modal + syllabus modal
- `src/components/AI-Courses/HeroSection.tsx` — line 29
- `src/components/wrappers/PastEventsLazySections.tsx` — three sections at ssr:false
- `src/components/city-courses/HeroSection.tsx:14` — comment claims it's deferred "for LCP" — wrong tradeoff

> **Modal `ssr: false`** is fine (modals only open on click).
> **Content section `ssr: false`** is a P0 SEO/GEO bug.

### 2.5.4 Triage strategy (handed off to Cycle 2 Sprint 4 / Cycle 3)

| Bucket | Estimated count | Action |
| --- | --- | --- |
| Modals + click-triggered | ~25 | Keep `ssr: false` — correct |
| Forms (with `useState`) | ~20 | Keep `'use client'` but minimise blast radius (form should be a small island, not wrapping the hero) |
| Header / navigation interactive | ~15 | Keep `'use client'` |
| Sanity Studio | ~5 | Keep — Studio is client-only |
| Content sections with framer-motion only | **~100** | Convert to Server Components; replace framer-motion with CSS or IntersectionObserver |
| Content sections with no client need | **~50** | Convert to Server Components |
| Total Cycle 3 conversion target | **~150 files** | — |

---

## 2.6 Third-party script strategy

### 2.6.1 GoogleAnalytics ([src/components/GoogleAnalytics.tsx](../../src/components/GoogleAnalytics.tsx))

✅ Good pattern:
- External gtag.js loaded with `strategy="lazyOnload"` (won't block LCP)
- Init script (`window.dataLayer` shim) with `strategy="afterInteractive"` (defines `gtag` early to avoid `ReferenceError` from other components)
- `useSearchParams` wrapped in `<Suspense>` (avoids the Next.js bailout-to-CSR error)
- Returns `null` if `NEXT_PUBLIC_GA_MEASUREMENT_ID` is missing

⚠️ Minor:
- Two `gtag('config', ...)` calls (one in init script with `page_path: window.location.pathname`, one in `useEffect` with `pathname + searchParams.toString()`) — fires twice on initial load. P3.
- `(window as any).gtag` — type hygiene only.

### 2.6.2 MetaPixel ([src/components/MetaPixel.js](../../src/components/MetaPixel.js))

⚠️ Issues:
- **The external `fbevents.js` is loaded via the inline init script's `document.createElement('script')` boilerplate, not via `<Script src="..." strategy="lazyOnload">`.** This means it loads roughly when Next.js Script with `afterInteractive` runs — not deferred to `lazyOnload`. P1.
- File is `.js`, not `.tsx` — inconsistent.
- `usePathname()` import but pathname only used in dependency array — minor.
- **Fix sketch** (Cycle 2 Sprint 4):

```ts
'use client';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function MetaPixel() {
  const pixelId = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;
  const pathname = usePathname();

  useEffect(() => {
    if (pixelId && typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [pathname, pixelId]);

  if (!pixelId) return null;

  return (
    <>
      <Script
        id="fb-pixel-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[]}(window,document,'script');fbq('init','${pixelId}');fbq('track','PageView');`,
        }}
      />
      <Script
        id="fb-pixel-loader"
        src="https://connect.facebook.net/en_US/fbevents.js"
        strategy="lazyOnload"
      />
      <noscript>
        <img height="1" width="1" style={{ display: 'none' }}
             src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
             alt="" />
      </noscript>
    </>
  );
}
```

### 2.6.3 Calendly, Leaflet, YouTube — Phase 6 deep-dive

Calendly: embeds at `/contact-us` and `/jobs/placements` use `react-calendly` ^4.4.0 — third-party iframe heavy. Phase 6 will check loading strategy.

Leaflet: only loaded where mapped (locations / contact) — but if module is imported at the top of a Server Component, it leaks into shared chunks. Phase 6.

YouTube: embedded via `react-calendly` + custom `YouTubeVideoModal` (dynamic, `ssr: false`). ✅ Correct.

---

## 2.7 `next/image` adoption

- **71 files use `next/image`** — solid majority.
- **7 files use raw `<img>`** — split:
  - `src/components/MetaPixel.js` — `<noscript><img>` for tracking pixel. ✅ Correct (cannot use next/image inside noscript).
  - `src/components/ui/CustomFlag.tsx` — phone-input flag SVG render. May be intentional.
  - `src/components/sections/ReviewMarque.tsx` — content image, **should be `next/image`**. P2.
  - `src/components/sections/MentorsImpactSection.tsx` — content image. P2.
  - `src/components/sections/MentorOutcomesSection.tsx` — content image. P2.
  - `src/components/events/EventGallery.tsx` — gallery images, **should be `next/image`** with proper `sizes` and `priority` on first image. P2.
  - `src/components/data-science-course/CareerSection.tsx` — content image. P2.

> **5 P2 raw-`<img>` conversions** for Cycle 2 Sprint 3.

---

## 2.8 Bundle composition (analyzer not run — read-only signals only)

Without `ANALYZE=true next build` (deferred to user OK), I can only reason from imports + the dep list. Phase 6 will confirm with bundle analyzer.

### Likely heavy chunks

| Chunk source | Bundle impact | Used on | Cycle 3 fix |
| --- | --- | --- | --- |
| `recharts` | ~100 KB gzip | placements / stats components | Code-split via `next/dynamic({ ssr: false })`; consider [`uplot`](https://github.com/leeoniya/uPlot) or pure SVG |
| `framer-motion` | ~50–70 KB gzip even with optimizePackageImports | ~100+ section components | Replace with CSS / IntersectionObserver (`react-intersection-observer` ^10.0.3 already in deps) |
| `leaflet` + `react-leaflet` | ~40 KB + tile data | locations, contact | Already conditional on route, but verify no top-level import |
| `sanity` Studio bundle | massive (1-2 MB unsplit) | `/cms` only | Verify route isolation via App Router code-splitting (Phase 6) |
| `react-phone-number-input` | ~30 KB + CSS | every form using phone field | Replace with thin custom wrapper using `libphonenumber-js` (already in deps) — Cycle 3 |
| `typewriter-effect` | ~10 KB | hero animations on a few course pages | Replace with CSS `@keyframes` |
| `googleapis` | server-only but **HUGE if leaked to client** | `/api/reviews` etc. — must stay server-only | Phase 6: verify no client import |

### `optimizePackageImports`

Already enabled for `framer-motion`, `react-icons`, `@headlessui/react`, `lucide-react`. Phase 6 will validate with analyzer.

---

## 2.9 Sanity wiring — architectural concerns

| # | Issue | Severity | Detail |
| --- | --- | --- | --- |
| 2.9.1 | **`POST_QUERY` fetched twice per request** in [blog/[slug]/page.tsx:72](../../src/app/blog/[slug]/page.tsx#L72) and [blog/[slug]/page.tsx:105](../../src/app/blog/[slug]/page.tsx#L105) | **P0** | React `cache()` dedup (Sanity-token preservation) |
| 2.9.2 | **No `/api/revalidate` route** — Sanity publishes don't refresh the static pages until ISR `revalidate` ticks (1 hour for blog) | **P1** | Phase 9 deliverable: design webhook → `revalidateTag` route |
| 2.9.3 | **Sanity Studio bundle inside main app** at `/cms` — relies on App Router route-level code-split to isolate. Cannot verify without analyzer. | P1 | Phase 6 verify |
| 2.9.4 | **Sitemap fetches `POSTS + CATEGORIES + AUTHORS` from Sanity at every build** — `useCdn: true` mitigates token consumption but the CDN cache TTL is short. | P2 | Cycle 2 Sprint 5 — wrap in `unstable_cache` with `revalidateTag` so webhook refresh propagates |
| 2.9.5 | **No `JOBS_SLUG_QUERY`** — but `JOBS_QUERY` is exported. `jobs/live-jobs/page.tsx` rendering pattern unclear. | P3 | Phase 9 |

### Single Sanity client instance ([src/sanity/client.ts](../../src/sanity/client.ts))

```ts
export const client = createClient({
  projectId, dataset, apiVersion,
  useCdn: true,
});
```

✅ Single client, `useCdn: true`. **There is NO secondary client with `useCdn: false`**, which means there is no current source of unbounded API-token consumption from preview / draft fetches. **This is good news for the Sanity-token concern.**

However, when we introduce `draftMode()` for preview workflow (Cycle 2 Sprint 5), we will need a second client with `useCdn: false` + token — that one must NEVER be called from non-preview code paths.

---

## 2.10 API routes (`/src/app/api/*/route.ts`)

8 API routes confirmed:

| Route | Purpose | Phase to deep-dive |
| --- | --- | --- |
| `apply` | Job application submission | Phase 4 (form a11y) |
| `contact` | Generic contact form | Phase 4 |
| `download-brochure` | Brochure email capture | Phase 4 |
| `enquire` | Enquiry / callback | Phase 4 |
| `mock-test/register` | Mock test signup | Phase 4 |
| `mock-test/submit` | Mock test answer submission | Phase 4 |
| `new-year-offer` | Time-bound offer form | Phase 4 |
| `reviews` | Google Reviews API proxy (uses `googleapis`) | Phase 6 (server-only verification) |

**No `/api/revalidate` route** — confirmed gap (Phase 1 R10).
**No `middleware.ts`** — confirmed. Future Cycle 2 Sprint 4 may add for dynamic city redirects.

---

## 2.11 Notable architectural smells (P-tagged)

| # | Smell | Severity | Where |
| --- | --- | --- | --- |
| 2.11.1 | **`/cms` CmsLayout emits 4 FAQ items + 4 HowTo steps + features as JSON-LD on a `noindex,nofollow` route** — pure waste; the Studio is admin-only and not crawled. Adds ~5 KB JSON to /cms route. | P3 | [src/app/cms/layout.tsx:19-50](../../src/app/cms/layout.tsx#L19) |
| 2.11.2 | **Schemas + dynamic-import section components are over-Suspense'd in `blog/[slug]/page.tsx`** — every section wrapped in `React.Suspense` with `"Loading menu..."` fallback. But `dynamic(..., { ssr: true })` already SSR-renders these. The Suspense fallbacks never appear; the layer just adds complexity. | P3 | [src/app/blog/[slug]/page.tsx:160-189](../../src/app/blog/[slug]/page.tsx#L160) |
| 2.11.3 | **`BlogPostHeroSection` dynamic-imported with `loading: <div>Loading...</div>`** — this is the LCP element for blog posts. The `Loading...` text could become the LCP if dynamic loading is slow. | P2 | [src/app/blog/[slug]/page.tsx:13-23](../../src/app/blog/[slug]/page.tsx#L13) |
| 2.11.4 | **Course content lives in TS data files**, not Sanity (e.g. `data/manualTestingData.ts`, all 32 files in `src/data/`). Means content team must edit code to update curriculum — and risks the Sanity CMS being underutilised. | P2 — content-process concern, not directly SEO | Cycle 2 Sprint 6 may migrate to Sanity; until then, document. |
| 2.11.5 | **34 separate `*Data.ts` files** in `src/data/` — bundled into the client when imported by `'use client'` components. ~hundreds of KB of curriculum strings shipped to every visitor. | P1 — bundle bloat | Cycle 3 — migrate to Sanity OR keep server-side and pass as props. |
| 2.11.6 | **`schema-generators.ts` ≈ 6000+ lines in one file** ([src/lib/schema-generators.ts](../../src/lib/schema-generators.ts)) | P1 — maintainability | Cycle 2 Sprint 5: split into `lib/schema/organization.ts`, `lib/schema/course.ts`, `lib/schema/breadcrumb.ts`, `lib/schema/faq.ts`, etc. Each generator already independent. |

---

## 2.12 Phase 2 issue summary (Backlog seeds)

| ID | Issue | Severity | Phase 5+ implication | Sprint |
| --- | --- | --- | --- | --- |
| **BLG-001** | `SeoHead.tsx` client-side canonical injection — redundant + ships client JS + risks double canonical | **P0** | All canonical correctness | Cycle 2 Sprint 1 |
| **BLG-002** | `not-found.tsx` imports `Link` from `lucide-react` — 404 page has no working link | **P0** | UX + crawl signal | Cycle 2 Sprint 1 |
| **BLG-003** | `POST_QUERY` double-fetched in blog/[slug] generateMetadata + page — Sanity API token waste | **P0** | Sanity-token preservation | Cycle 2 Sprint 4 |
| **BLG-004** | Course-detail content sections use `dynamic({ ssr: false })` — invisible to AI crawlers (ClaudeBot/GPTBot/PerplexityBot) | **P0** | GEO + on-page content depth | Cycle 2 Sprint 4 / Cycle 3 |
| **BLG-005** | `schema-generators.ts` monolithic (6000+ lines) | P1 | Phase 5 audit + tree-shaking | Cycle 2 Sprint 5 |
| **BLG-006** | No `/api/revalidate` route — Sanity publishes don't refresh site | P1 | Sanity webhook integration | Cycle 2 Sprint 5 |
| **BLG-007** | `MetaPixel.js` loads `fbevents.js` via inline boilerplate, not `<Script strategy="lazyOnload">` | P1 | CWV (TBT) | Cycle 2 Sprint 4 |
| **BLG-008** | ~250 `'use client'` files — most over-applied | P1 | CWV + GEO | Cycle 3 |
| **BLG-009** | `react-phone-number-input/style.css` imported in root layout — ships to every route | P2 | CWV | Cycle 2 Sprint 4 |
| **BLG-010** | `Header`/`Footer`/`SpecialOfferBanner` dynamic-imported with `ssr:true` — adds split with no benefit | P2 | Bundle complexity | Cycle 2 Sprint 3 |
| **BLG-011** | No `<link rel="preconnect" href="https://cdn.sanity.io">` despite all blog/courses images from Sanity CDN | P2 | LCP for image-heavy pages | Cycle 2 Sprint 3 |
| **BLG-012** | 5 raw `<img>` tags in content components (ReviewMarque, MentorsImpactSection, MentorOutcomesSection, EventGallery, CareerSection) | P2 | CWV + image SEO | Cycle 2 Sprint 3 |
| **BLG-013** | No CSP / HSTS / Permissions-Policy headers | P2 | Security signal + preload-list eligibility | Cycle 2 Sprint 1 |
| **BLG-014** | `optimizeCss: false` due to Tailwind v4 conflict — full CSS shipped every route, critters non-functional | P1 | CWV (FCP, LCP) | Phase 6 / Cycle 3 |
| **BLG-015** | 34 `*Data.ts` curriculum files bundled to client via 'use client' wrappers | P1 | Bundle bloat | Cycle 3 |
| **BLG-016** | `/cms` layout emits JSON-LD on noindex,nofollow route — wasted work | P3 | bundle hygiene | Cycle 2 Sprint 7 |
| **BLG-017** | Blog `Suspense` fallbacks wrap `dynamic({ ssr: true })` sections — fallbacks never trigger | P3 | Code complexity | Cycle 2 Sprint 7 |
| **BLG-018** | Blog hero dynamic-imported with `<div>Loading...</div>` fallback — risks "Loading..." becoming LCP | P2 | LCP | Cycle 2 Sprint 3 |
| **BLG-019** | `optimizeCss: false` related `webpackBuildWorker: true` stale comment | P3 | Build perf | Cycle 2 Sprint 7 |
| **BLG-020** | Stale `serverExternalPackages: ['@prisma/client']` — Prisma not a dep | P3 | Cleanup | Cycle 2 Sprint 7 |
| **BLG-021** | Sitemap pulls Sanity at build with no `unstable_cache` wrap | P2 | Sanity-token + rebuild cost | Cycle 2 Sprint 5 |
| **BLG-022** | Sanity Studio bundle isolation unverified | P1 (needs analyzer) | Phase 6 — verification step | Cycle 3 |
| **BLG-023** | GoogleAnalytics double-fires initial `gtag('config')` (in init + useEffect) | P3 | Analytics accuracy | Cycle 2 Sprint 7 |
| **BLG-024** | error.tsx renders unstyled fallback (system-ui inline styles only) | P3 | UX during errors | Cycle 2 Sprint 3 |
| **BLG-025** | No loading.tsx anywhere | P2 | UX during ISR/streaming | Cycle 2 Sprint 4 |

> **Issues are seeded into `BLG-*` IDs. Phase 14 will consolidate into `fix-backlog.md` with sprint columns and dependency arrows.**

---

## 2.13 Phase 2 summary

### ✅ Working

- Modern `next.config.ts` with sensible `experimental` opt-ins
- `next/font/local` for Inter variable, properly preloaded
- Single Sanity client with `useCdn: true` (Sanity-token-friendly baseline)
- 71/78 candidate images use `next/image` (91%)
- GA loaded with `lazyOnload`, init shim with `afterInteractive` (correct mixed strategy)
- All major redirects are 301
- `metadataBase` set; per-route `alternates.canonical` via Metadata API
- 8 API routes covering all form submissions
- Robots + sitemap files present and intentional

### ⚠️ Issues found

**4 P0 issues** (BLG-001 to BLG-004), **8 P1**, **8 P2**, **5 P3** — 25 total backlog entries from Phase 2 alone. Most-urgent triage list:

| # | What | Effort | Win |
| --- | --- | --- | --- |
| 1 | Delete `SeoHead.tsx` + import (BLG-001) | 5 min | Removes a P0 + slims client bundle on every page |
| 2 | Fix `not-found.tsx` import (BLG-002) | 5 min | Restores working 404 navigation |
| 3 | React `cache()` wrap on `getPostBySlug` (BLG-003) | 30 min | Cuts Sanity API calls per blog post in half |
| 4 | Convert ManualTestingPageContent (and ~8 sibling course detail Page Content files) to remove `ssr: false` on content sections (BLG-004) | 4-6 hrs per page | Restores content visibility to AI crawlers (massive GEO win) |

### 📝 Phase 2 → Phase 3 handoff

Phase 3 (Technical SEO) will now build on Phase 2 by:
- Live-checking canonical tags via Chrome MCP (verify BLG-001 isn't already partly mitigated by Metadata API)
- Sitemap-vs-routes diff (any orphaned pages?)
- Redirect-chain hop count for the 52 redirects
- Render-parity check between Googlebot and ClaudeBot user-agents (test the ssr:false hypothesis from BLG-004)

### 📝 Phase 2 → Phase 6 (CWV) handoff

- Bundle analyzer run (gated on user OK due to Sanity-token cost of a full build)
- LCP audit on a representative route per template (home, course detail, city page, blog post)
- INP audit on hero forms (HomeHeroSection has 3 form fields + react-phone-number-input — INP candidate)
