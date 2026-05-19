# Phase 9 — Sanity CMS Schema Audit

> **Goal:** verify each Sanity document type has correct SEO surface (seo object, slug source, image alt validation, references), Portable Text serializers (no H1 in body), draftMode preview, GROQ projection, webhook revalidation, and `next-sanity-image` integration.
> **Date:** 2026-05-19
> **Mode:** read-only inspection of `src/sanity/schemas/*` + `PortableTextRenderer.tsx` + query/client files

---

## 9.1 Sanity document-type inventory

CDPL Sanity has **5 document types** ([src/sanity/schema.ts](../../src/sanity/schema.ts)):

| Document type | Purpose | File |
| --- | --- | --- |
| `post` | Blog posts | [src/sanity/schemas/post.ts](../../src/sanity/schemas/post.ts) |
| `author` | Blog author profiles | [src/sanity/schemas/author.ts](../../src/sanity/schemas/author.ts) |
| `category` | Blog categories | [src/sanity/schemas/category.ts](../../src/sanity/schemas/category.ts) |
| `certificate` | Certificate validation lookups | [src/sanity/schemas/certificate.ts](../../src/sanity/schemas/certificate.ts) |
| `job` | Job openings | [src/sanity/schemas/job.ts](../../src/sanity/schemas/job.ts) |

### 🚨 Major architectural gap

**Course content, mentor profiles, events, testimonials/reviews, city pages, services do NOT use Sanity.** They live in TypeScript data files under `src/data/*Data.ts` (Phase 2 §2.11.4):

| Content surface | Where it lives | Editable by content team? |
| --- | --- | --- |
| Course content (curriculum, FAQs, projects) | `src/data/manualTestingData.ts`, `automationTestingData.ts`, etc. (32 files) | ❌ Requires code change |
| 765 city-course pages | `src/types/courseData.ts` (~40k lines) | ❌ Requires code change |
| Events | `src/data/eventsData.ts`, `pastEventsData.ts` | ❌ Requires code change |
| Mentors | `src/data/` (TBD) | ❌ |
| Reviews / testimonials | `src/data/reviews/reviewsData.ts` | ❌ |
| Services | `src/data/servicesData.ts` | ❌ |
| Hiring partners | `src/lib/seo-config.ts` | ❌ |
| Header / footer / nav data | `src/data/headerData.ts` | ❌ |

**Implications for SEO / GEO:**
- **BLG-095** (wrong course descriptions) requires a code change every time descriptions change
- **BLG-101** (per-mentor pages) requires a `mentor` Sanity doc type + content migration
- **BLG-058** (course prices) is hard-coded — Sanity course doc type would let content team adjust prices/duration
- **BLG-127** (CDPL Placement Report) needs structured placement data — likely a new Sanity type
- **Webhook revalidation** (BLG-006) only matters for blog/category/author today — would matter for course, mentor, event, review once migrated

> **9.1.1 — BLG-NEW P1:** Cycle 2 Sprint 5 should add Sanity document types for: `course`, `mentor`, `event`, `testimonial`, `hiringPartner`, `service`, `city` (for city-course content). Content team can then edit without engineering. This unblocks many Cycle 2 fixes (BLG-095, BLG-101, BLG-103, BLG-126).

---

## 9.2 `post` schema audit ([post.ts](../../src/sanity/schemas/post.ts))

### Fields

| Field | Type | Required? | Notes |
| --- | --- | --- | --- |
| `title` | string | ❌ no validation | Should be required |
| `slug` | slug (source: title) | ❌ no validation | Should be required |
| `author` | reference → author | ❌ no validation | Should be required |
| `category` | reference → category | ❌ no validation | Should be required |
| `featuredImage` | image | ❌ no validation + **no `alt` subfield** | **P0 — missing alt validation** |
| `publishDate` | datetime | ❌ no validation | Should be required |
| `excerpt` | text (rows: 3) | ❌ no validation | Should be required + maxLength: 200 |
| `description` | text (rows: 3) | ❌ no validation | hero description |
| `content` | array (block + image + code + table) | ❌ no validation | required |
| `tags` | array of strings | ❌ | OK |
| `seo` | object { metaTitle, metaDescription, canonical, keywords } | ❌ | partial — see 9.2.2 |

### Issues

| # | Issue | Severity |
| --- | --- | --- |
| 9.2.1 | **No `validation.required()` on critical fields** — `title`, `slug`, `author`, `category`, `featuredImage`, `publishDate`, `excerpt`, `content` can all be empty | **P1** (BLG-NEW) |
| 9.2.2 | **`seo` object missing audit-brief required fields**: `ogImage`, `noindex`, `nofollow`. Has `metaTitle`, `metaDescription`, `canonical`, `keywords` only. | P1 (BLG-NEW) |
| 9.2.3 | **`featuredImage` has no `alt` subfield with validation** — accessibility + SEO image-search blocker | **P0** (BLG-NEW) |
| 9.2.4 | **`seo.metaTitle` has no maxLength validation** — should be `Rule.max(60)` | P2 (BLG-NEW) |
| 9.2.5 | **`seo.metaDescription` has no maxLength validation** — should be `Rule.max(160)` | P2 (BLG-NEW) |
| 9.2.6 | **`excerpt` and `description` have similar names but different roles** — confusing for content editors | P3 (BLG-NEW) |
| 9.2.7 | **`content` block field allows default Sanity styles** (h1-h6) — content team can accidentally insert H1 in body, breaking H1-uniqueness. PortableTextRenderer doesn't render H1, but the underlying data permits it. | P2 (BLG-NEW) |
| 9.2.8 | **No `readTime` field** — calculated as placeholder `1000 words` in blog post page (BLG-067). Should be auto-computed from content. | P2 |
| 9.2.9 | **Image references inside `content` block don't enforce alt** | P1 (BLG-NEW) |
| 9.2.10 | **No content-level orderings** (e.g., "Order by publishDate desc") — Sanity Studio shows posts unordered by default | P3 |

### Fix sketch (Cycle 2 Sprint 5)

```ts
// post.ts (excerpt)
defineField({
  name: 'title',
  type: 'string',
  validation: Rule => Rule.required().min(20).max(120),
}),
defineField({
  name: 'featuredImage',
  type: 'image',
  options: { hotspot: true },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alt text (required)',
      type: 'string',
      validation: Rule => Rule.required().min(10).max(200),
    }),
  ],
  validation: Rule => Rule.required(),
}),
defineField({
  name: 'seo',
  type: 'object',
  fields: [
    defineField({ name: 'metaTitle', type: 'string', validation: Rule => Rule.max(60) }),
    defineField({ name: 'metaDescription', type: 'text', rows: 3, validation: Rule => Rule.max(160) }),
    defineField({ name: 'ogImage', type: 'image', fields: [/* alt required */] }),
    defineField({ name: 'canonical', type: 'url' }),
    defineField({ name: 'keywords', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'noindex', type: 'boolean', initialValue: false }),
    defineField({ name: 'nofollow', type: 'boolean', initialValue: false }),
  ],
}),
defineField({
  name: 'content',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        // ⚠️ Removed h1 — page already has 1 H1
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
    },
    { type: 'image', fields: [{ name: 'alt', type: 'string', validation: Rule => Rule.required() }] },
    { type: 'code', name: 'code' },
    { type: 'table' },
  ],
}),
```

---

## 9.3 `author` schema audit ([author.ts](../../src/sanity/schemas/author.ts))

### Strengths

- ✅ Has `social: { linkedin, twitter, github, website }` — ready for E-E-A-T (BLG-066 will wire to `Article.author.sameAs`)
- ✅ Has `bio`, `role` fields

### Issues

| # | Issue | Severity |
| --- | --- | --- |
| 9.3.1 | **No `validation.required()` on `name`, `slug`, `avatar`** | P1 (BLG-NEW) |
| 9.3.2 | **`avatar` image has no `alt` subfield with validation** | **P0** (BLG-NEW) |
| 9.3.3 | **No `expertise` array field** — content brief asked for "10 years in QA at <companies>" structured field | P2 (cross-cuts BLG-108) |
| 9.3.4 | **No `credentials` array field** — "ISTQB Certified", "AWS-Certified" etc. for E-E-A-T | P2 (cross-cuts BLG-108) |
| 9.3.5 | **No `seo` object** — author pages at `/blog/author/[slug]` are indexable but author-doc has no SEO metadata | P1 (BLG-NEW) |
| 9.3.6 | **No `featured` or `isCurrentEmployee` boolean** — useful for filtering active authors | P3 |

---

## 9.4 `category` schema audit ([category.ts](../../src/sanity/schemas/category.ts))

### Minimal — only 4 fields

| Field | Type |
| --- | --- |
| `name` | string |
| `slug` | slug (source: name) |
| `description` | text |
| `color` | object { bg, text } |

### Issues

| # | Issue | Severity |
| --- | --- | --- |
| 9.4.1 | **No `validation.required()` anywhere** | P1 (BLG-NEW) |
| 9.4.2 | **No `featuredImage` or icon** — category landing pages have no visual asset to use as OG image | P1 (BLG-NEW) |
| 9.4.3 | **No `seo` object** — category pages are indexable (Phase 3 confirmed `index:true,follow:true`) but doc has no SEO | P1 (BLG-NEW) |
| 9.4.4 | **`color` object stores Tailwind class names** — fragile (couples CMS to Tailwind class names) but pragmatic. Document the contract. | P3 |
| 9.4.5 | **No `parentCategory`** / hierarchy field — flat categories only | P3 — possibly intentional |

---

## 9.5 `certificate` schema audit ([certificate.ts](../../src/sanity/schemas/certificate.ts))

### Strengths

- ✅ Has `validation.required()` on critical fields (certificateId, holderName, program)
- ✅ Has `options.list` enum on program + status — disciplined

### Issues

| # | Issue | Severity |
| --- | --- | --- |
| 9.5.1 | **`certificateImage` has no `alt` subfield validation** | **P0** (BLG-NEW) |
| 9.5.2 | **No `issuedDate` / `expiresAt`** — Certificate validation page can't show when issued/expired | P1 (BLG-NEW) |
| 9.5.3 | **No `courseSlug` / reference to Course** — can't link "X completed Manual Testing course" | P2 (BLG-NEW — requires `course` doc type from 9.1.1) |
| 9.5.4 | **No `verifyUrl` / canonical URL** — for embedding in actual issued PDF QR codes | P3 |

---

## 9.6 `job` schema audit ([job.ts](../../src/sanity/schemas/job.ts))

### Strengths

- ✅ Has `validation.required()` on title, slug, team, location, type, experience
- ✅ Has `options.list` enums on team/location/type/experience
- ✅ Has `isActive` toggle ([job.ts:116-122](../../src/sanity/schemas/job.ts#L116)) — allows soft-deactivate without delete

### Issues

| # | Issue | Severity |
| --- | --- | --- |
| 9.6.1 | **No `salary` / `salaryRange` field** — JobPosting Rich Results recommends salary range | **P1** (BLG-NEW) |
| 9.6.2 | **No `datePosted` / `validThrough`** — required for JobPosting Rich Results | **P1** (BLG-NEW) — affects `generateJobPostingSchema` accuracy |
| 9.6.3 | **No `description` field** — job posts only have `summary` + array of responsibilities/requirements. JobPosting `description` is required for Rich Results. | **P1** (BLG-NEW) |
| 9.6.4 | **`responsibilities` and `requirements` are flat `array of strings`** — no rich text. Limits content quality. | P3 (BLG-NEW) |
| 9.6.5 | **No `seo` object** — `/jobs/live-jobs?jobId=X` URLs indexed (BLG-035) but no SEO metadata per-job | P1 (BLG-NEW) |
| 9.6.6 | **No `hiringOrganization`** subdoc — defaults to CDPL Organization, but JobPosting could be for partner companies (placement listings) | P2 (BLG-NEW) |
| 9.6.7 | **No `applicationDeadline`** | P3 |

---

## 9.7 Slug field configuration

All 4 slug-using doc types ([post.ts](../../src/sanity/schemas/post.ts#L15), [author.ts](../../src/sanity/schemas/author.ts#L13), [category.ts](../../src/sanity/schemas/category.ts#L13), [job.ts](../../src/sanity/schemas/job.ts#L17)) use:

```ts
{
  name: 'slug',
  type: 'slug',
  options: { source: 'title' | 'name', maxLength: 96 },
}
```

| # | Note |
| --- | --- |
| 9.7.1 | **Source attribute set correctly** ✅ (auto-slugify on save) |
| 9.7.2 | `maxLength: 96` is reasonable (Google truncates URLs ~80 chars) ✅ |
| 9.7.3 | **No `slugify` custom function** — relies on Sanity default (lowercase + hyphen). Acceptable. |
| 9.7.4 | **No uniqueness `isUnique` validator** — Sanity defaults to uniqueness via `_id`, but slug-level dedup not enforced. If two posts have same title, slugs collide silently. P2 (BLG-NEW) |
| 9.7.5 | **No `validation.required()`** on slug — same issue as 9.2.1 / 9.3.1 / etc. | P1 |

---

## 9.8 Reference field correctness

| Reference | Status |
| --- | --- |
| `post.author` → `author` | ✅ via `defineField({ type: 'reference', to: { type: 'author' } })` |
| `post.category` → `category` | ✅ |
| `certificate.program` → enum | Not a reference, an enum — acceptable for binary case |
| `job.team` → enum | Same — acceptable |
| **NEW:** `course.mentor` → `mentor` (once `course` doc type exists) | ❌ blocked by 9.1.1 |
| **NEW:** `course.category` → `courseCategory` (once exists) | ❌ blocked by 9.1.1 |
| **NEW:** `mentor.coursesTeach` → `[course]` (once exists) | ❌ blocked by 9.1.1 |
| **NEW:** `testimonial.course` → `course` | ❌ blocked by 9.1.1 |

> **9.8.1 — current references are correct, but the missing doc types (9.1.1) block the broader entity graph.**

---

## 9.9 Portable Text serializers ([PortableTextRenderer.tsx](../../src/components/blog/PortableTextRenderer.tsx))

### Strengths

- ✅ **Uses `useNextSanityImage`** from `next-sanity-image` for the embedded image type — auto-derives width/height, prevents CLS within blog body
- ✅ Custom serializers for `image`, `table`, `code` — table renders proper `<table>` with `<th>` first row
- ✅ **h2/h3/h4 render with auto-generated IDs** (slugified from text) → anchor-linkable TOC
- ✅ Link serializer adds `rel="noreferrer noopener"` on external links (`!href.startsWith('/')`)
- ✅ Lists / list items styled correctly

### Issues

| # | Issue | Severity |
| --- | --- | --- |
| 9.9.1 | **No `h1` serializer** in components — implicit ban ✅. But underlying Sanity post schema **permits h1 in editor** (9.2.7). Should align: explicitly forbid h1 in schema styles. | P2 (BLG-NEW) |
| 9.9.2 | **`SanityImage` uses `value.alt`** with fallback `'Blog Image'` — if content team doesn't set alt, blog body images get generic "Blog Image" alt. Should require alt in schema (9.2.9). | P0 cross-cuts 9.2.9 |
| 9.9.3 | **Link external-detection only checks `href.startsWith('/')`** — fragile. Doesn't handle `mailto:`, `tel:`, anchor-only `#section`, or full-URL internal links (`https://www.cinutedigital.com/...`). May add `rel="noreferrer"` to internal links. | P3 (BLG-NEW) |
| 9.9.4 | **Code block has no syntax highlighting** — just `<pre><code>{value.code}</code></pre>` — Phase 6 perf concern only if we add Prism (heavy). Acceptable as-is. | n/a |
| 9.9.5 | **Image renders inside a `<div>` not `<figure>`** — no `<figcaption>` for caption support | P3 |
| 9.9.6 | **No serializer for `mark.code` (inline code)** — uses default `<code>` from PortableText, OK but unstyled in dark mode contexts | P3 |

---

## 9.10 Preview mode / `draftMode`

Searched the codebase:

```
Grep: draftMode|preview|previewDrafts|@sanity/preview
→ 0 hits in src/app or src/sanity (only inline mentions in unrelated places)
```

### Issues

| # | Issue | Severity |
| --- | --- | --- |
| 9.10.1 | **No `draftMode()` integration** — content team cannot preview unpublished drafts on the live site | **P1** (BLG-NEW) |
| 9.10.2 | **No `/api/preview` route** to enter draft mode | **P1** (BLG-NEW) — pairs with 9.10.1 |
| 9.10.3 | **No `/api/exit-preview` route** | P2 |
| 9.10.4 | **No secondary Sanity client with `useCdn: false`** for draft reads — when preview is added, must use a token-protected client. Phase 2 §2.9 noted this future need. | P1 (BLG-NEW) |

---

## 9.11 GROQ query projection (Phase 1 §1.5 deepening)

[src/sanity/lib/queries.ts](../../src/sanity/lib/queries.ts) was inspected in Phase 1. Re-evaluating:

### ✅ Strong projection discipline

Every query explicitly projects fields:
```ts
*[_type == "post" && defined(slug.current)] | order(publishDate desc) {
  _id, _updatedAt, title, "slug": slug.current, ...
}
```

No `*[_type=="post"]` unprojected queries anywhere. ✓

### Issues

| # | Issue | Severity |
| --- | --- | --- |
| 9.11.1 | **`POSTS_QUERY` selects `_id, _updatedAt, title, slug, publishDate, excerpt, featuredImage, author, category, tags`** but **omits `description`** (used for hero). Forces a second roundtrip on detail pages. | P3 |
| 9.11.2 | **`POST_QUERY` (single post) projects `content` (full Portable Text)** — Sanity returns serialized Portable Text. For the blog list page, the list query correctly excludes content ✅ |  ✅ |
| 9.11.3 | **`SEARCH_POSTS_QUERY` projects `seo { keywords, metaDescription }`** — used for search index building. ✓ |
| 9.11.4 | **`POSTS_QUERY` order: `publishDate desc`** — but `publishDate` is not required (no `validation`), so a post without publishDate will sort first/last unpredictably | P2 (BLG-NEW) |
| 9.11.5 | **`RELATED_POSTS_QUERY`** filters by `categorySlug` + excludes `currentId`. Limit `[0...5]` ✓. | ✅ |
| 9.11.6 | **`LATEST_POSTS_QUERY`** projects `category->{name}` only (no slug). Home page can't link directly. | P3 |
| 9.11.7 | **No `JOBS_SLUG_QUERY`** counterpart for jobs (vs `POSTS_SLUG_QUERY` for posts) — `live-jobs` page can't `generateStaticParams` from Sanity. Currently uses imported `JOBS` const from `src/lib/jobsData.ts`. Inconsistent: jobs query goes to Sanity but slug list goes to TS file. | P2 (BLG-NEW) |
| 9.11.8 | **No projection of `_updatedAt` on `JOBS_QUERY`** — sitemap can't surface accurate job-page lastmod | P2 (BLG-NEW) |

---

## 9.12 Webhook revalidation (BLG-006 deepening)

**No `/api/revalidate` route exists** (confirmed Phase 2 §2.10). Sanity publish → site refresh requires:

1. Sanity Studio "GROQ webhook" → POST to `/api/revalidate`
2. Route handler verifies `Authorization: Bearer <SANITY_WEBHOOK_SECRET>` header
3. Reads `_type` from payload, calls `revalidateTag(...)` and/or `revalidatePath(...)` per type

### Tags to revalidate per doc type

| _type | revalidate |
| --- | --- |
| `post` | `revalidatePath('/blog/${slug}')` + `revalidatePath('/blog')` + `revalidatePath('/blog/all-posts')` + `revalidatePath('/blog/category/${categorySlug}')` + `revalidatePath('/blog/author/${authorSlug}')` + `revalidateTag('sitemap-posts')` |
| `author` | `revalidatePath('/blog/author/${slug}')` |
| `category` | `revalidatePath('/blog/category/${slug}')` + `revalidatePath('/blog/categories')` |
| `certificate` | `revalidatePath('/cdpl-certificate-validation')` |
| `job` | `revalidatePath('/jobs/live-jobs')` + `revalidatePath('/jobs/job-openings')` + `revalidatePath('/jobs/careers')` |

### Issues

| # | Issue | Severity |
| --- | --- | --- |
| 9.12.1 | **No `/api/revalidate` route** | **P1** (BLG-006 from Phase 2) — every Sanity publish waits for ISR timer |
| 9.12.2 | **No `SANITY_WEBHOOK_SECRET` env var** in source comments — likely not set | P1 — must be added when route ships |
| 9.12.3 | **No `unstable_cache` wrapping any Sanity fetch** — only `lib/reviews.ts` uses unstable_cache for `getGoogleReviews` (Phase 2 §2.9.4). Sanity fetches are ISR-only, not tag-based. | P2 (BLG-NEW — cross-references BLG-021 sitemap caching) |
| 9.12.4 | **No `tags` arg to `client.fetch(query, params, { next: { tags: [...] } })`** — without tags, `revalidateTag` doesn't work | P1 (BLG-NEW) — requires fetch refactor alongside webhook |

---

## 9.13 `next-sanity-image` adoption (BLG-083 deepening)

Phase 6 reported `next-sanity-image` unused. **Correction:** `useNextSanityImage` IS used in:
- ✅ [src/components/blog/PortableTextRenderer.tsx](../../src/components/blog/PortableTextRenderer.tsx) — embedded blog body images

But NOT used in:
- ❌ Blog post hero (`BlogPostHeroSection.tsx`) — likely uses raw `<Image src={post.featuredImage}>` with the CDN URL string
- ❌ Blog list / `BlogArticleList.tsx` — likely same
- ❌ Category hero / `CategoryHero.tsx`
- ❌ Author profile / `BlogAuthorInfo.tsx`
- ❌ `SafeAvatar.tsx` (mentor/author headshots)
- ❌ Related-post thumbnails
- ❌ Sidebar related posts

> **9.13.1 — P1 (BLG-083 refined):** Adopt `useNextSanityImage` in 6+ Sanity-image consumers above. Each gets auto width/height + blurDataURL + LQIP. Single biggest blog/Sanity-image CWV win.

---

## 9.14 Phase 9 issue summary

| ID | Issue | Severity | Sprint |
| --- | --- | --- | --- |
| **BLG-132** | **All Sanity image fields lack `alt` subfield validation** — featuredImage (post), avatar (author), certificateImage (certificate) — accessibility + image-SEO blocker | **P0** | Cycle 2 Sprint 5 |
| **BLG-133** | No Sanity document types for `course`, `mentor`, `event`, `testimonial`, `hiringPartner`, `service`, `city` — blocks content-team editing of money pages | **P1** | Cycle 2 Sprint 5 (large effort) |
| **BLG-134** | No `validation.required()` on critical fields in post / author / category — content team can publish empty docs | P1 | Cycle 2 Sprint 5 |
| **BLG-135** | `post.seo` object missing `ogImage`, `noindex`, `nofollow` per audit-brief spec | P1 | Cycle 2 Sprint 5 |
| **BLG-136** | `author` schema missing `seo` object — author pages indexable without metadata | P1 | Cycle 2 Sprint 5 |
| **BLG-137** | `category` schema missing `featuredImage` + `seo` object | P1 | Cycle 2 Sprint 5 |
| **BLG-138** | `job` schema missing salary/datePosted/validThrough/description fields required for JobPosting Rich Results | **P1** | Cycle 2 Sprint 5 |
| **BLG-139** | No `draftMode()` integration; no `/api/preview` / `/api/exit-preview` routes | P1 | Cycle 2 Sprint 5 |
| **BLG-140** | No secondary Sanity client with `useCdn: false` + token for preview reads | P1 | Cycle 2 Sprint 5 |
| **BLG-141** | `post.content` block schema allows H1 in body (no `styles` restriction) | P2 | Cycle 2 Sprint 5 |
| **BLG-142** | `post.content` inner `image` type allows no-alt images | P1 | Bundled with BLG-132 |
| **BLG-143** | `post.seo.metaTitle` / `metaDescription` no maxLength validation | P2 | Cycle 2 Sprint 5 |
| **BLG-144** | Slug uniqueness not enforced via `isUnique` validator | P2 | Cycle 2 Sprint 5 |
| **BLG-145** | No `next-sanity-image` adoption in blog hero / list / category / author / sidebar / avatar consumers — only PortableText body uses it | **P1** | Cycle 2 Sprint 4 (refined BLG-083) |
| **BLG-146** | No client-fetch `tags` option set — `revalidateTag` won't work even when webhook arrives | P1 | Cycle 2 Sprint 5 (pairs with BLG-006) |
| **BLG-147** | No `expertise` + `credentials` array fields on author for E-E-A-T | P2 | Cycle 2 Sprint 5 |
| **BLG-148** | No `JOBS_SLUG_QUERY` Sanity query — `generateStaticParams` for jobs uses TS data | P2 | Cycle 2 Sprint 5 |
| **BLG-149** | `JOBS_QUERY` doesn't project `_updatedAt` — sitemap can't surface job lastmod | P2 | Cycle 2 Sprint 5 |
| **BLG-150** | PortableText link serializer doesn't handle `mailto:` / `tel:` / `#anchor` correctly when deciding rel | P3 | Cycle 2 Sprint 5 |
| **BLG-151** | Sanity blog `publishDate` not required — order-by-publishDate sort unstable | P2 | Cycle 2 Sprint 5 |
| **BLG-152** | `certificate.issuedDate` / `expiresAt` missing — certificate validation page can't show timing | P1 | Cycle 2 Sprint 5 |

---

## 9.15 Phase 9 summary

### ✅ Working

- **GROQ projection discipline** is excellent — no unprojected queries; minimal over-fetch
- **`useCdn: true`** Sanity client (Sanity API-token preservation, single client baseline)
- **Slug fields use `source: ...`** with auto-slugify
- **References between post→author + post→category** correctly modeled
- **PortableTextRenderer uses `useNextSanityImage`** for body images (CLS-safe)
- **PortableTextRenderer auto-generates anchor IDs** on h2/h3/h4 — TOC support
- **PortableTextRenderer adds `rel="noreferrer noopener"`** on external links
- **`certificate` and `job` schemas have `validation.required()`** on critical fields (other schemas don't)
- **`job` schema uses `options.list` enums** for team/location/type/experience — disciplined
- **`isActive` toggle on job schema** — soft-deactivate without delete
- **`color` object on category** — pragmatic theme-customisation pattern
- **Single Sanity client** with no `useCdn: false` secondary leak

### 🚨 Issues found in Phase 9

**1 P0** (BLG-132 alt validation missing on all image fields), **10 P1**, **6 P2**, **2 P3** — 21 new backlog entries.

### 🟡 Most urgent triage from Phase 9

| # | What | Effort | Win |
| --- | --- | --- | --- |
| 1 | **Add `alt` subfield with `Rule.required()` to all 3 Sanity image fields** (BLG-132) | 30 min | Image-SEO + a11y compliance instantly across all uploaded content |
| 2 | Build `/api/revalidate` route + Sanity webhook (BLG-006 + BLG-146) | 4-6 hrs | Sanity publishes immediately reflect on site (currently up to 1 hr wait) |
| 3 | Adopt `useNextSanityImage` in blog hero + list + sidebar (BLG-145) | 2-3 hrs | Major CWV win on blog routes |
| 4 | Add `course`/`mentor`/`event`/`testimonial` Sanity doc types (BLG-133) | 1-2 weeks | Unblocks BLG-095, BLG-101, BLG-103, BLG-126 — content-team workflow + future GEO content scale |

### Backlog total: **152 entries** (BLG-001 → BLG-152) across **15 P0 / 55 P1 / 52 P2 / 28 P3**

### 📝 Phase 9 → Phase 10 (GSC) handoff

Phase 10 will pull GSC Coverage/Performance/Enhancements data — but the most important things to verify against Phase 9 findings:

- **"Crawled — currently not indexed"** counts for category/author/blog pages → impact of missing SEO metadata (BLG-135/136/137)
- **JobPosting rich-result errors** in GSC Enhancements → confirms BLG-138 (missing required fields)
- **FAQ rich-result coverage** → check if FAQPage schemas are actually surfacing
- **Sitemap stale-last-read** → impact of no webhook revalidation (BLG-006)

### 📝 Phase 9 → Cycle 2 Sprint 5 (Sanity refactor sprint)

Phase 9 deliverables imply a substantial Sanity migration sprint. Order:
1. Image alt validation (P0 BLG-132) — 30 min
2. `validation.required()` pass — 1 hr
3. `seo` object enrichment (post/author/category) — 2 hrs
4. `course` doc type — 3-5 days (largest item)
5. `mentor` doc type — 1 day
6. Webhook revalidation route (BLG-006) — half day
7. Adopt `useNextSanityImage` everywhere (BLG-145) — 2-3 hrs
8. `draftMode` + preview routes — 1 day
