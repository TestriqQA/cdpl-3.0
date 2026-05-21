# Cycle 2 — Merge Guide (41 `fix/*` branches)

> Generated 2026-05-21 from an empirical integration test: a throwaway branch
> off `develop` had all 41 branches merged in the order below.
> **Result: 39 merge cleanly, 2 have a trivial conflict.**

All 41 branches are cut from `develop`, are typecheck-clean individually, and
Sprint 1's 14 branches are already merged. No `next build` was run (Sanity
API-token rule) — run one yourself after merging.

---

## Recommended merge order

Merge in this order (BLG-ascending by sprint). 39 are clean `git merge`s.
The **2 conflict branches are marked** — merge them last and resolve as below.

### Sprint 2 — Schema Parity (12, all clean)
`fix/blg-063-course-schema-fields`, `fix/blg-060-review-itemtype-required`,
`fix/blg-061-org-localbusiness-link`, `fix/blg-064-org-founder`,
`fix/blg-068-website-searchaction`, `fix/blg-076-home-aggregaterating-id`,
`fix/blg-065-blogposting-author`, `fix/blg-062-city-localbusiness`,
`fix/blg-069-quiz-schema`, `fix/blg-073-services-offercatalog`,
`fix/blg-072-educational-program`, `fix/blg-138-job-schema-hiringorg`

> Note: 12 branches touch `src/lib/schema-generators.ts` (incl. blg-077 below).
> They edit different functions, so git's 3-way merge resolves them all
> automatically — verified clean.

### Sprint 3 — Tooling + Small UX (12, all clean)
`fix/blg-091-092-caching`, `fix/blg-010-layout-cleanup`,
`fix/blg-085-heromanualtesting`, `fix/blg-094-aboutaccreditations-priority`,
`fix/blg-089-city-h1-font`, `fix/blg-041-mocktest-noindex`,
`fix/blg-024-error-styling`, `fix/blg-028-privacy-link`,
`fix/blg-018-blog-skeleton`, `fix/blg-025-loading-states`,
`fix/blg-045-mobile-h1`, `fix/blg-055-noopener`

### Sprint 4 — Performance + Caching (4 — one conflict)
`fix/blg-007-metapixel-lazyload` (clean),
`fix/blg-166-blog-hero-priority` (clean),
**`fix/blg-067-blog-wordcount` — ⚠ conflict**,
**`fix/blg-009-phone-css-scope` — ⚠ conflict**

### Sprint 5 — GEO/AEO + Infra (7, all clean)
`fix/blg-134-sanity-schema-hardening`, `fix/blg-148-jobs-queries`,
`fix/blg-129-robots-ai-bots`, `fix/blg-021-sitemap-cache`,
`fix/blg-077-breadcrumb-id`, `fix/blg-150-portabletext-link`,
`fix/blg-115-llms-txt`

### Sprint 6 — Content Cycle (1, clean)
`fix/blg-110-year-stamp-refresh`

### Sprint 7 — Final Backlog Cleanup (5, all clean)
`fix/blg-016-cms-jsonld`, `fix/blg-019-nextconfig-cleanup`,
`fix/blg-082-unused-deps`, `fix/blg-109-blog-seeds`,
`fix/blg-023-ga-double-fire`

---

## The 2 conflicts — resolution

Both are because two branches edit the same region of one file. In both
cases **keep both sides' changes** — they are independent improvements.

### 1. `fix/blg-067-blog-wordcount` ↔ `fix/blg-065-blogposting-author`
**File:** `src/app/blog/[slug]/page.tsx`
Both edit the `generateArticleSchema({ ... })` call and the lines just above
it. blg-065 adds the `authorSameAs` collection + `authorSameAs` argument;
blg-067 adds `countPortableTextWords` + replaces the `estimatedWordCount`
placeholder with a real `wordCount`. Resolve by keeping **both**: the
`authorSameAs` array build, the `countPortableTextWords` helper, and a
`generateArticleSchema` call that passes **both** `authorSameAs` and
`wordCount: wordCount`.

### 2. `fix/blg-009-phone-css-scope` ↔ `fix/blg-010-layout-cleanup`
**File:** `src/app/layout.tsx`
Both edit the top import block. blg-010 removes the `dynamic` import + adds
direct `Header`/`Footer`/`SpecialOfferBanner` imports + a Sanity preconnect;
blg-009 removes the `import 'react-phone-number-input/style.css'` line.
Resolve by keeping **both**: direct layout-component imports **and** the
removed phone-input CSS line (i.e. the final file has the direct imports,
the preconnect, and no `react-phone-number-input/style.css` import).

After resolving each, run `npx tsc --noEmit` to confirm.

---

## Post-merge checklist

1. **`npm install`** — `fix/blg-082-unused-deps` removed 4 deps from
   `package.json`; the lockfile needs regenerating.
2. **`npm run build`** — first full production build with all 41 branches;
   confirms nothing the per-branch typecheck couldn't catch (image
   `remotePatterns`, route output, etc.).
3. **Smoke-test** a lead form (phone field still styled — BLG-009), the blog
   post hero, an error state (BLG-024), and `/mock-test/[slug]` (noindex).
4. **Google Rich Results Test** on home, a course detail page, a city page
   and a blog post — the schema work (Sprints 2 & 5) changed JSON-LD heavily.
5. Re-pull GSC after a crawl cycle to confirm BLG-001/056/058 predictions.
