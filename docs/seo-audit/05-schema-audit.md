# Phase 5 — Structured Data & Schema (JSON-LD) Audit

> **Goal:** audit every JSON-LD schema generator and per-page consolidator for correctness, EdTech rich-result coverage, @id integrity, AggregateRating policy compliance, and elimination of fabricated/duplicate schema.
> **Date:** 2026-05-19
> **Mode:** source inspection of `src/lib/schema-generators.ts` (6000+ lines, 77 exports) + 33 page-level consolidator call-sites
> **Validated against:** `_decisions.md` (only `4.9/425` is defensible; `5000 placed`, `100% placement`, `15+ years`, `50 hiring partners` must NOT appear in schema)

---

## 5.1 Generator inventory

`schema-generators.ts` exports **77 functions** in 4 layers:

| Layer | Count | Examples |
| --- | --- | --- |
| **Utility** | 1 | `formatDateToISO` |
| **Foundational** (single entity) | 5 | `generateOrganizationSchema`, `generateLocalBusinessSchema`, `generateWebsiteSchema`, `generatePersonSchema`, `generateSiteNavigationSchema` |
| **Reusable schema types** | 14 | `generateCourseSchema`, `generateFAQSchema`, `generateBreadcrumbSchema`, `generateArticleSchema`, `generateReviewSchema`, `generateSingleReviewSchema`, `generateVideoSchema`, `generateEventSchema`, `generateJobPostingSchema`, `generateBlogSchema`, `generateItemListSchema`, `generateCollectionPageSchema`, `generateHowToSchema`, `generateWebPageSchema`, `generateServiceSchema` |
| **Page-specific consolidators (`*AllSchemas` / `*PageSchema`)** | **57** | One per route. 33 are course-page consolidators; rest cover home, services, about, contact, events, jobs, certifications, legal, etc. |

> **Architectural finding:** 57 consolidators ≈ 4500 lines of duplicated boilerplate. Each consolidator inlines a `webPageSchema`, `howToSchema`, `siteNavigationSchema`, `generateSingleReviewSchema()` call — copy-pasted. ~80% reduction possible via 5-10 parameterized helpers.

---

## 5.2 Root-layout schemas (emitted on every page)

`src/app/layout.tsx:84-85` emits two schemas globally:

| Schema | @id | Status |
| --- | --- | --- |
| `generateOrganizationSchema` | `https://www.cinutedigital.com/#organization` | ⚠️ issues — see 5.3 |
| `generateWebsiteSchema` | `https://www.cinutedigital.com/#website` | ✅ clean — has `publisher: { @id: getOrganizationId() }` cross-reference and `inLanguage: "en-IN"` |

---

## 5.3 `generateOrganizationSchema` deep-dive ([line 69](../../src/lib/schema-generators.ts#L69))

### ✅ Working

- `@type: "EducationalOrganization"` — correct for EdTech (preferable to plain `Organization`)
- `@id: getOrganizationId()` — consistent cross-reference
- `legalName: "Cinute Digital Private Limited"` ✓
- `alternateName: "CDPL"` ✓
- `foundingDate: BUSINESS_INFO.foundedYear = "2020"` — matches `_decisions.md` ✓
- 3 `contactPoint` blocks (customer service / admissions / technical support) — strong
- `openingHoursSpecification` parsed correctly from `BUSINESS_INFO.openingHours`
- `hasCredential: CERTIFICATIONS.map(...)` — emits `EducationalOccupationalCredential` per cert ✓
- `sameAs: getSocialMediaUrls()` — links to FB, LinkedIn, X, Instagram, YouTube ✓
- **AggregateRating intentionally REMOVED** — comment line 189: *"Aggregate Rating removed to avoid global self-serving review errors"* — **excellent defensive call** ✅

### ⚠️ Issues

| # | Issue | File / line | Severity |
| --- | --- | --- | --- |
| 5.3.1 | **`description` literal: "Leading EdTech … with 100% placement support"** — repeats the non-defensible "100% placement support" claim per `_decisions.md` | [schema-generators.ts:94-95](../../src/lib/schema-generators.ts#L94) | **P0** (BLG-NEW) |
| 5.3.2 | **No `founder` field** — `Sandeep Maske` not present in Organization schema | (missing) | P1 (already in `_decisions.md` Q5 — user must confirm Sandeep Maske LinkedIn URL) |
| 5.3.3 | **`numberOfEmployees: 50`** — not user-confirmed. Per audit brief, 50 employees may be inflated. | [seo-config.ts:98](../../src/lib/seo-config.ts#L98) | P2 (BLG-NEW) — user verification needed |
| 5.3.4 | **`sameAs` array missing**: Crunchbase, Clutch, G2, Tracxn, YouTube channel canonical URL, Wikidata Q-ID | (Phase 14 build-out) | P2 (BLG-NEW) |
| 5.3.5 | **No `award` field** — even though `STATISTICS.yearsOfExperience = 15` (questionable) and CERTIFICATIONS array exists, no `award` JSON-LD property is emitted | — | P3 |

---

## 5.4 `generateLocalBusinessSchema` deep-dive ([line 339](../../src/lib/schema-generators.ts#L339))

### ✅ Working

- `@type: "LocalBusiness"` — emitted as separate entity from Organization
- `@id: ${siteUrl}/#localbusiness`
- Mira Road address (matches `_decisions.md`) ✓
- `geo.latitude/longitude` set ✓
- `priceRange: "₹₹"` ✓
- AggregateRating removed (comment line 374) ✓

### ⚠️ Issues

| # | Issue | File / line | Severity |
| --- | --- | --- | --- |
| 5.4.1 | **`@type: "LocalBusiness"` separate from EducationalOrganization** — Google may treat as two entities. Best practice: union types `@type: ["EducationalOrganization", "LocalBusiness"]` on a single entity, **OR** keep separate but have LocalBusiness reference Organization via `parentOrganization: { @id: getOrganizationId() }`. | [schema-generators.ts:344-345](../../src/lib/schema-generators.ts#L344) | P1 (BLG-NEW) |
| 5.4.2 | **No `parentOrganization` cross-reference back to Organization** | (same) | P1 |
| 5.4.3 | **No `hasOfferCatalog`** — for an institute with 30+ courses, missing this rich-result eligibility | (missing) | P2 (BLG-NEW) — Cycle 2 Sprint 2 |
| 5.4.4 | **No `availableService`** — same opportunity, lists training services | (missing) | P2 |
| 5.4.5 | **No `paymentAccepted`** field (e.g., "Cash, Card, EMI, UPI") — minor trust signal | (missing) | P3 |
| 5.4.6 | **No `currenciesAccepted: "INR"`** | (missing) | P3 |
| 5.4.7 | **City-course pages do NOT emit a city-specific LocalBusiness** with `areaServed: city` — missed opportunity for 765 local SEO entities | (missing across `(city-courses)`) | P1 (BLG-NEW) — see 5.13 |

---

## 5.5 `generateCourseSchema` deep-dive ([line 409](../../src/lib/schema-generators.ts#L409))

### ✅ Working

- `@type: "Course"` ✓
- `@id: ${url}#course` ✓
- `provider: { @id: getOrganizationId() }` — correct cross-reference ✓
- `hasCourseInstance` with `courseMode: ["online", "onsite"]`, `courseWorkload` (ISO 8601 duration), `instructor` — covers Google's required fields ✓
- **AggregateRating ONLY emitted when `course.reviews` array is provided and length > 0** — disciplined ✓
- `inLanguage: "en-IN"` ✓
- `learningResourceType: "Professional Training"` ✓

### 🚨 P0 / P1 Issues

| # | Issue | File / line | Severity |
| --- | --- | --- | --- |
| 5.5.1 | **`offers` is hard-coded as `AggregateOffer { lowPrice: "25000", highPrice: "65000" }` IGNORING `course.price`** — the function accepts a `price` arg but never uses it. Every course's schema falsely claims a 25k-65k price range. | [schema-generators.ts:433-441](../../src/lib/schema-generators.ts#L433) | **P0** (BLG-NEW) — affects all course detail + city-course schemas |
| 5.5.2 | **Missing required-by-Google `hasCourseInstance.courseSchedule`** for batch dates | — | P1 (BLG-NEW) |
| 5.5.3 | **No `educationalLevel`** field — even though `course.level` is accepted as input, it's not output | — | P1 |
| 5.5.4 | **No `teaches`** field — would list specific skills/topics taught (great for AI engines) | — | P1 (BLG-NEW) — GEO win |
| 5.5.5 | **No `timeRequired`** field — distinct from `courseWorkload` | — | P3 |
| 5.5.6 | **No `coursePrerequisites`** field — even though `prerequisites` is accepted as input, not output | — | P1 |
| 5.5.7 | **No `educationalCredentialAwarded`** — CDPL certificate-of-completion entity not declared | — | P1 (BLG-NEW) |
| 5.5.8 | **No `numberOfCredits`** (n/a — not credit-bearing) | — | P3 |
| 5.5.9 | **`hasCourseInstance.instructor: { @type: Person, name: "Expert Mentors" }`** — generic name when none specified. Should default to omit rather than fake name. | [schema-generators.ts:425-428](../../src/lib/schema-generators.ts#L425) | P2 |
| 5.5.10 | **No `audience` (`@type: EducationalAudience`)** field for "career-switcher / fresher / working professional / corporate" | — | P2 (BLG-NEW) |
| 5.5.11 | **`aggregateRating.reviewCount: String(course.reviews.length)`** — uses count of `course.reviews` array (e.g., 5 testimonials) NOT the official 425. ✅ Technically accurate but inconsistent with what visible UI says. | [schema-generators.ts:474](../../src/lib/schema-generators.ts#L474) | ✅ — actually correct per policy |

---

## 5.6 `generateSingleReviewSchema` — **CRITICAL P0** ([line 803](../../src/lib/schema-generators.ts#L803))

```ts
return {
  "@type": "Review",
  "@id": `${SITE_CONFIG.url}/#student-review-${Math.floor(Math.random() * 1000)}`,
  author: { "@type": "Person", name: "CDPL Student" },
  // ...
  reviewBody: "The training curriculum at CDPL is highly practical and industry-aligned. The mentors provide hands-on guidance on real-world projects, which significantly helped in my career transition.",
  reviewRating: { ratingValue: "5", bestRating: "5" },
};
```

| # | Issue | Severity |
| --- | --- | --- |
| 5.6.1 | **Fabricated review body** — hard-coded fake testimonial attributed to "CDPL Student" with 5/5 rating | **P0** (BLG-NEW) |
| 5.6.2 | **`Math.random()` in `@id`** — non-deterministic; different `@id` on every server render → cache mismatches, hydration mismatches, Google sees different entities across crawls | [schema-generators.ts:813](../../src/lib/schema-generators.ts#L813) | **P0** (BLG-NEW) |
| 5.6.3 | **Generic author "CDPL Student"** — fake-name attribution | **P0** (BLG-NEW) |

### Where this fabricated review is emitted

| Route | Where called | Item type used |
| --- | --- | --- |
| `/` (home) | `generateHomePageSchema:1192` | LocalBusiness |
| Every course detail page (25 routes) | each `*CoursePageSchema:end` (e.g., manual-testing:1914) | default ("Service") |
| Every city-course page (765 routes) | `generateCityCoursePageSchema:6604` | default ("Service") |
| `/blog` | `blog/page.tsx:130` | Service |
| `/blog/category/[slug]` | `blog/category/[slug]/page.tsx:257` | Service |
| Many more `*PageAllSchemas` consolidators | grep for `generateSingleReviewSchema(` | various |

**Blast radius: 800+ routes emit a fabricated 5/5 review with random @id and hard-coded body.** This is the **single highest-severity issue in the entire audit so far** — it's the textbook trigger for a Google manual action against fake reviews + a violation of Google's review/rating policy.

### Fix (Cycle 2 Sprint 1 — emergency)

1. **Delete `generateSingleReviewSchema` entirely** (or rewrite to require a real `review` argument and never default to fabricated content)
2. Remove all 30+ call-sites from consolidators
3. Replace with sampling-from-Sanity: feed real Google Reviews / `reviewsData.ts` testimonials into a `review` array on the relevant Course/Service entity

---

## 5.7 `generateReviewSchema` deep-dive ([line 688](../../src/lib/schema-generators.ts#L688))

This function emits an `AggregateRating` block. Critical to audit.

### Logic flow

```ts
const itemType = reviewData.itemType || "EducationalOrganization";  // ⚠️ default
const itemName = reviewData.itemName || SITE_CONFIG.name;
const itemId = reviewData.itemId || getOrganizationId();

return {
  "@type": itemType,
  "@id": itemId,
  aggregateRating: { ratingValue, reviewCount: STATISTICS.reviewCount, bestRating },
  // ... optional reviews
};
```

### ✅ Working when called correctly

When called with explicit `itemType: "LocalBusiness"` or `"Service"`, the AggregateRating attaches to a non-Organization entity — **policy-compliant per Google's self-serving review rule.**

Current call-sites (audited):

| Route | Call | itemType | @id collision risk |
| --- | --- | --- | --- |
| `/` (home) | `generateHomePageSchema:1173-1179` | `"LocalBusiness"` | ⚠️ **same @id as `generateLocalBusinessSchema` (`/#localbusiness`)** — two top-level objects with the same @id but different properties. Google merges by @id, but this can confuse Rich Results. |
| `/blog` | `blog/page.tsx:89` | `"Service"` | ✅ unique @id `/blog#service` |
| `/blog/category/[slug]` | `blog/category/[slug]/page.tsx:233` | `"Service"` | ✅ unique per category |
| `/reviews` | `reviews/page.tsx` (via `generateReviewsPageAllSchemas`) | TBD | TBD |

### ⚠️ Issues

| # | Issue | Severity |
| --- | --- | --- |
| 5.7.1 | **`generateReviewSchema` default `itemType: "EducationalOrganization"`** — if any future call omits `itemType`, AggregateRating attaches to Organization, undoing the deliberate removal at line 189 of `generateOrganizationSchema`. **Latent foot-gun.** | P1 (BLG-NEW) — make `itemType` required parameter |
| 5.7.2 | **`reviewCount: String(STATISTICS.reviewCount)` always uses `425`** regardless of `reviewData.reviewCount` argument — function accepts the arg but ignores it | [schema-generators.ts:715](../../src/lib/schema-generators.ts#L715) | P2 — minor inconsistency, but 425 IS defensible |
| 5.7.3 | **Home AggregateRating @id collides with LocalBusiness @id** (both `/#localbusiness`) — two JSON-LD blocks merged | P2 (BLG-NEW) |

---

## 5.8 Per-page consolidator behaviour (sample: Manual Testing)

`generateManualTestingCoursePageSchema` ([line 1832](../../src/lib/schema-generators.ts#L1832)) returns **8 schemas**:

1. `webPageSchema` (WebPage with `isPartOf` → Website, `about` → Organization)
2. `courseSchema` (Course — affected by P0 5.5.1 price bug)
3. `itemListSchema` (sibling courses)
4. `breadcrumbSchema`
5. `faqSchema`
6. `howToSchema` (4-step enrollment)
7. `generateSingleReviewSchema()` — **fabricated review** (P0 5.6)
8. `siteNavigationSchema`

Plus layout adds:
9. `generateOrganizationSchema` (root layout)
10. `generateWebsiteSchema` (root layout)

**Total per course detail page: 10 JSON-LD blocks.** Most are valid; #7 is fabricated.

### Aggregate per template

| Template | Schemas emitted per page (incl. layout) | Fabricated reviews? |
| --- | --- | --- |
| Home | **11** | yes (1) |
| Course category (5 routes) | 7-8 | yes (1 each) — need to verify |
| Course detail (25 routes) | **10** | yes (1 each) |
| City-course (765 routes) | **9** | yes (1 each) — **majority of fabricated reviews on site** |
| Blog index | 9 | yes (1) |
| Blog post | 5 (Article, Breadcrumb, Org, Website + 1 if generateSingleReviewSchema present) | varies |
| Blog category (n routes) | 8 | yes (1 each) |
| Blog author (n routes) | TBD | TBD |
| About | 7 (Org/About/FAQ/HowTo/Breadcrumb/...) | TBD — need to verify |
| Contact | 5+ | TBD |
| Services hub + slugs | 7+ each | TBD |
| Events hub + slugs | 7+ each | TBD |
| Jobs (4 routes) | 6+ each | TBD |
| Certifications (3 routes) | 7+ each | TBD |
| Mock-test | 5+ | TBD |
| Reviews | 5+ | TBD — real review source |
| Legal (4 routes) | 4 each | TBD |
| `/cms` | 4 ON A NOINDEX ROUTE (BLG-016 from Phase 2) | — |

**Conservative site total: ~6000-8000 JSON-LD blocks across all routes**. Of those, **~800 are fabricated reviews** that must be removed in Sprint 1.

---

## 5.9 EdTech rich-result coverage matrix

Per the audit brief, required schema by page type:

| Page Type | Required schema | Current status |
| --- | --- | --- |
| Home | `Organization` + `EducationalOrganization` + `WebSite` (with SearchAction) | **`Organization` ✓, `EducationalOrganization` ✓ (single combined entity), `WebSite` ✓ — but NO `potentialAction` SearchAction declared. P2.** |
| Course category hubs | `ItemList` + `BreadcrumbList` | ✅ via `generateSoftwareTestingCategoryPageSchema` etc. — but need to verify they all include both |
| Course detail | `Course` (provider + courseInstance + offers + educationalLevel + teaches + timeRequired) + `BreadcrumbList` + `FAQPage` + `Review/AggregateRating` (only if real) | **⚠️ Course schema missing `educationalLevel`, `teaches`, `timeRequired`, `coursePrerequisites`, `educationalCredentialAwarded` (5.5). Fabricated reviews used (5.6).** |
| Blog | `BlogPosting` + `Author (Person with sameAs)` + `BreadcrumbList` | **⚠️ Blog post uses `Article` schema (not `BlogPosting` subtype). Author has no `sameAs`. P1.** |
| City pages | `LocalBusiness` + `Course` + `BreadcrumbList` | **❌ NO city-specific LocalBusiness emitted. Only Course + Breadcrumb. P1 (5.4.7).** |
| About | `AboutPage` + `Organization` (address + foundingDate=2020 + founder=Sandeep Maske + sameAs) | **⚠️ Need to verify `generateAboutPageAllSchemas` includes AboutPage. Organization missing founder (5.3.2).** |
| Events | `Event` (with location + offers + organizer) | ✅ `generateEventSchema` complete |
| Mock-test | `WebPage` / `Quiz` | **❌ NO `Quiz` schema. P2.** |
| Certifications | `Course` + `EducationalOccupationalCredential` | ⚠️ Need to verify per-page |
| Jobs / Placements | `JobPosting` + `ItemList` of placement outcomes | ✅ `generateJobPostingSchema` used. Placements page need to verify |
| Reviews | `AggregateRating` + `Review` (only real, schema-validated) | ⚠️ Need to inspect `generateReviewsPageAllSchemas` to verify reviews are real (not synthesized) |

---

## 5.10 BlogPosting subtype audit ([line 591 — generateArticleSchema](../../src/lib/schema-generators.ts#L591))

| # | Issue | Severity |
| --- | --- | --- |
| 5.10.1 | **Uses `@type: "Article"` not `@type: "BlogPosting"`** — `BlogPosting` is the correct subtype for blog posts and gives Rich Results an extra signal | [schema-generators.ts:598](../../src/lib/schema-generators.ts#L598) | P2 (BLG-NEW) |
| 5.10.2 | **`author: { @type: "Person", name }` has no `sameAs`** — even though Sanity author schema may have a `social` field. **E-E-A-T weak.** | [schema-generators.ts:614-618](../../src/lib/schema-generators.ts#L614) | **P1** (BLG-NEW) — major Phase 8 GEO concern |
| 5.10.3 | **No `wordCount` calculated** — `blog/[slug]/page.tsx:124` uses `1000` as **placeholder** for ALL blog posts. Inaccurate. | [blog/[slug]/page.tsx:124](../../src/app/blog/[slug]/page.tsx#L124) | P2 (BLG-NEW) |
| 5.10.4 | **No `articleBody`** — would benefit AI engines | — | P3 |
| 5.10.5 | **No `speakable` (SpeakableSpecification)** — for voice-search rich results | — | P3 |

---

## 5.11 FAQPage policy compliance

Google has restricted `FAQPage` rich results since 2023 — only shown for select government/health sites. **HOWEVER**, the schema is still valuable for GEO (AI engines extract FAQ pairs).

| # | Issue | Severity |
| --- | --- | --- |
| 5.11.1 | **FAQPage emitted on home + about + every course detail + every city-course + every certification page** — risk of "Multiple FAQPage per page" if both layout and page emit FAQ. Phase 11 will verify by live-DOM. | P3 (cross-page) |
| 5.11.2 | **FAQ content embeds non-defensible claims** ("100% placement", "5000+ placed") in answer text — Phase 7 content review | P1 (cross-cuts) |

---

## 5.12 BreadcrumbList consistency

| # | Issue | Severity |
| --- | --- | --- |
| 5.12.1 | **Some routes emit Breadcrumb via consolidator; others emit separately** (e.g., city-courses page.tsx:170 adds it separately AFTER consolidator). Inconsistent pattern — risk of duplicate breadcrumbs. | P2 (BLG-NEW) |
| 5.12.2 | **`generateBreadcrumbSchema` accepts optional `id` arg** — most callers don't pass it. Multiple breadcrumb schemas on same page (e.g., one per dynamic-imported section if it called the generator) would have no @id distinction. | P3 |

---

## 5.13 City-course schemas — biggest opportunity (765 pages)

**Current emission per city-course page** (via `generateCityCoursePageSchema` line 6543):

1. WebPage
2. FAQPage
3. ItemList (learning outcomes)
4. **Course** (with the BROKEN 25k-65k price bug from 5.5.1)
5. HowTo (enrollment steps)
6. **`generateSingleReviewSchema()` — fabricated review** (5.6)
7. SiteNavigation
8. (page.tsx adds) BreadcrumbList

Plus layout's:
9. Organization
10. Website

**Missing for local SEO** ([_decisions.md confirms Mira Road as authoritative HQ]):

| Required for local SEO | Status |
| --- | --- |
| `LocalBusiness` with `areaServed: { @type: "City", name: <city> }` | ❌ missing |
| `Service` schema scoped to city | ❌ missing |
| `geo` coordinates for HQ (could include city centroid as `serviceArea.geoRadius`) | ❌ missing |
| **Real reviews from city alumni** if available | ❌ currently using fabricated |
| `Course.educationalLevel`, `teaches`, `coursePrerequisites` | ❌ missing |
| `Course.hasCourseInstance.courseSchedule` for next batch | ❌ missing |
| `Course.hasCourseInstance.location: { @type: "VirtualLocation" }` or `Place` city | ❌ missing |

### Fix sketch (Cycle 2 Sprint 2 — high impact)

Rewrite `generateCityCoursePageSchema` to:

1. Use real `course.price` (Phase 5 BLG-NEW 5.5.1)
2. Include `Course.teaches: data.courseOverviewContent.modules.map(m => m.title)` (immediately fetches 5-10 keywords per course)
3. Include `Course.educationalLevel` from `data.courseDetails.level`
4. Add `LocalBusiness` with `areaServed: City({name: city})`, `parentOrganization: { @id: getOrganizationId() }`
5. Remove fabricated `generateSingleReviewSchema()` call
6. If `data.localizedTestimonials` exists, emit them as **real `Review` objects** on the Course entity (the codepath already exists in `generateCourseSchema:480-492`)

**Impact:** 765 pages × correct schema → significant GEO uplift (AI engines can cite curriculum modules) + local-pack visibility lift.

---

## 5.14 Other schema gaps (P2-P3)

| # | Gap | Where it should appear |
| --- | --- | --- |
| 5.14.1 | `WebSite` has no `potentialAction: SearchAction` — Sitelinks Searchbox is therefore not eligible | `generateWebsiteSchema` |
| 5.14.2 | `Quiz` schema missing for `/mock-test` | `generateMockTestPageAllSchemas` |
| 5.14.3 | `OfferCatalog` for `/services` (corporate training services) | `generateServicesPageAllSchemas` |
| 5.14.4 | `EducationalOccupationalProgram` for Master/long-form programs (e.g., `masters-in-data-engineering`, `ai-bootcamp`) | per-page |
| 5.14.5 | `VideoObject` per course detail page (where YouTube preview exists) | per consolidator |
| 5.14.6 | `Author` Person schemas with `sameAs` for blog authors (E-E-A-T) | `generateArticleSchema` |
| 5.14.7 | No `Speakable` for voice search | `generateArticleSchema` |
| 5.14.8 | No `audience` (`EducationalAudience`) on Course schemas | `generateCourseSchema` |
| 5.14.9 | No `award` listing certifications/recognition on Organization | `generateOrganizationSchema` |
| 5.14.10 | No `mentions: { @id }` cross-references between Course → Mentor → Article | cross-cutting |

---

## 5.15 Phase 5 issue summary (Backlog seeds — continuing BLG-* series)

| ID | Issue | Severity | Sprint |
| --- | --- | --- | --- |
| **BLG-056** | `generateSingleReviewSchema` emits **fabricated 5-star review with hard-coded body** attributed to "CDPL Student" — emitted on home + 25 course detail + 765 city + blog + blog/category + ~10 more = **~830 routes ship a fake review**. Triggers Google manual-action risk + violates self-serving review policy. | **P0** | Cycle 2 Sprint 1 — emergency |
| **BLG-057** | `generateSingleReviewSchema` uses `Math.random()` in `@id` — non-deterministic | **P0** | Bundled with BLG-056 |
| **BLG-058** | `generateCourseSchema` hard-codes `AggregateOffer { lowPrice: 25000, highPrice: 65000 }` ignoring `course.price` argument — every course schema falsely claims 25k-65k regardless of actual price | **P0** | Cycle 2 Sprint 2 |
| **BLG-059** | `generateOrganizationSchema.description` includes "100% placement support" — non-defensible per `_decisions.md` | **P0** | Cycle 2 Sprint 1 |
| **BLG-060** | `generateReviewSchema` default `itemType: "EducationalOrganization"` — latent foot-gun: any future caller omitting `itemType` re-attaches AggregateRating to Organization, undoing 5.3's defensive removal | P1 | Cycle 2 Sprint 2 — make `itemType` required |
| **BLG-061** | `generateLocalBusinessSchema` and `generateOrganizationSchema` separate entities with no `parentOrganization` cross-reference — Google may treat as 2 separate entities | P1 | Cycle 2 Sprint 2 |
| **BLG-062** | City-course pages do NOT emit `LocalBusiness` with `areaServed: city` — 765 missed local SEO entities | P1 | Cycle 2 Sprint 2 |
| **BLG-063** | `generateCourseSchema` missing `educationalLevel`, `teaches`, `coursePrerequisites`, `educationalCredentialAwarded` — major GEO+SEO opportunity | P1 | Cycle 2 Sprint 2 |
| **BLG-064** | Organization missing `founder: { Sandeep Maske, sameAs LinkedIn }` (per _decisions.md Q5 pending) | P1 | Cycle 2 Sprint 2 (after user confirms LinkedIn URL) |
| **BLG-065** | `generateArticleSchema` uses `@type: "Article"` — should be `BlogPosting` subtype | P2 | Cycle 2 Sprint 2 |
| **BLG-066** | `generateArticleSchema` author has no `sameAs` — E-E-A-T weak | **P1** | Cycle 2 Sprint 2 — wire to Sanity author.social |
| **BLG-067** | `blog/[slug]/page.tsx` uses placeholder `wordCount = 1000` for ALL blog posts | P2 | Cycle 2 Sprint 4 — calculate from Portable Text |
| **BLG-068** | `generateWebsiteSchema` has no `potentialAction: SearchAction` — Sitelinks Searchbox ineligible | P2 | Cycle 2 Sprint 2 |
| **BLG-069** | `Quiz` schema missing for `/mock-test` | P2 | Cycle 2 Sprint 2 |
| **BLG-070** | `sameAs` array missing Crunchbase, Clutch, G2, Tracxn, Wikidata Q-ID, YouTube canonical URL | P2 | Phase 14 + Cycle 2 Sprint 2 |
| **BLG-071** | `generateOrganizationSchema.numberOfEmployees: 50` not user-confirmed | P2 | User verification |
| **BLG-072** | `EducationalOccupationalProgram` schema missing for Master/Bootcamp programs | P2 | Cycle 2 Sprint 2 |
| **BLG-073** | `OfferCatalog` schema missing on `/services` (B2B corporate-training catalog) | P2 | Cycle 2 Sprint 2 |
| **BLG-074** | `audience` (`EducationalAudience`) field missing on Course schemas | P2 | Cycle 2 Sprint 2 |
| **BLG-075** | `Course.hasCourseInstance.courseSchedule` missing — no batch dates surfaced | P2 | Cycle 2 Sprint 2 |
| **BLG-076** | Home AggregateRating `@id` collides with LocalBusiness `@id` (both `/#localbusiness`) | P2 | Cycle 2 Sprint 2 |
| **BLG-077** | `generateBreadcrumbSchema` optional `id` arg → duplicate breadcrumb risk where consolidator + page both emit | P3 | Cycle 2 Sprint 5 |
| **BLG-078** | `generateCourseSchema.hasCourseInstance.instructor: "Expert Mentors"` default fake name when not specified | P3 | Cycle 2 Sprint 2 |
| **BLG-079** | 57 page-specific consolidators (~4500 lines of duplicated boilerplate) — refactor to 5-10 parameterized helpers | P1 | Cycle 2 Sprint 5 — paired with BLG-005 file split |
| **BLG-080** | `award`, `paymentAccepted`, `currenciesAccepted: "INR"` missing from Organization/LocalBusiness | P3 | Cycle 2 Sprint 2 |
| **BLG-081** | `mentions: { @id }` cross-references missing between Course → Mentor → Article (entity graph weak) | P3 | Cycle 2 Sprint 5 |

---

## 5.16 Phase 5 summary

### ✅ Working

- **`@id` namespacing strategy** (`/#organization`, `/#localbusiness`, `${url}#course`, `${url}#article`) is clean
- **AggregateRating deliberately removed from Organization** (line 189) — disciplined ✓
- **AggregateRating only emitted on Course when `course.reviews` array provided** — disciplined ✓
- **`Article` author + publisher + dates + image + mainEntityOfPage** all complete (just needs sameAs for E-E-A-T)
- **`Event` schema** has all Google-required fields (eventAttendanceMode, eventStatus, location, performer, offers, organizer)
- **`VideoObject` consolidates contentUrl/embedUrl** to resolve "Multiple video URLs" warning
- **`ItemList` correctly handles nested Event/Course/Review types** with required fields per type
- **`generateOrganizationSchema` uses `EducationalOrganization`** as primary type ✓
- **`generateWebsiteSchema` cross-references Organization** via `publisher.@id` ✓
- **Mira Road address consistent** across Organization + LocalBusiness ✓

### 🚨 Issues found in Phase 5

**4 P0** (BLG-056 fabricated reviews on 830+ routes, BLG-057 random `@id`, BLG-058 broken course price, BLG-059 100%-placement claim in Org description), **9 P1**, **8 P2**, **5 P3** — 26 new backlog entries.

### 🚨 P0 emergency triage from Phase 5

| # | What | Effort | Why now |
| --- | --- | --- | --- |
| 1 | **Delete `generateSingleReviewSchema` and all 30+ call-sites** (BLG-056, BLG-057) | 2-3 hrs | Removes fabricated review schema from ~830 routes — eliminates a Google manual-action risk and a fake-review policy violation. Single most important fix in the audit. |
| 2 | Fix `generateCourseSchema` to use actual `course.price` (BLG-058) | 30 min | Removes false 25k-65k price claim from every course schema |
| 3 | Rewrite `generateOrganizationSchema` description to drop "100% placement support" (BLG-059) | 5 min | Removes non-defensible claim from JSON-LD that appears on every page via root layout |

### Backlog total: **81 entries** (BLG-001 → BLG-081) across **10 P0 / 25 P1 / 28 P2 / 18 P3**.

### 📝 Phase 5 → Phase 6 / Phase 9 handoff

- **Phase 6 (CWV)**: each route emits 5-11 JSON-LD blocks — verify total JSON-LD payload is not bloating LCP HTML (typical: 8-15 KB extra HTML per route). With 6-8 schemas per page, this is acceptable; with 10+, it merits review.
- **Phase 9 (Sanity)**: blog authors need a `social` field that flows to `BlogPosting.author.sameAs` (BLG-066). Verify Sanity author schema has LinkedIn URL + Twitter URL fields.

### 📝 User confirmation needed before Cycle 2 Sprint 2

| # | Question | Reason |
| --- | --- | --- |
| Q-NEW1 | Sandeep Maske LinkedIn URL | To populate `Organization.founder.sameAs` (BLG-064) |
| Q-NEW2 | Is `numberOfEmployees: 50` accurate? | To keep or correct (BLG-071) |
| Q-NEW3 | Confirm fabricated reviews must be removed from all 830 routes | Final sign-off on BLG-056 fix scope |
| Q-NEW4 | Course actual prices per course (or confirm 25k-65k range is correct for ALL 25 courses) | To fix BLG-058 properly |
