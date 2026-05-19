# CDPL SEO + GEO Fix Backlog (Cycle 1 → Cycle 2/3)

> **Total entries:** 199 (BLG-001 → BLG-199)
> **Severity:** 18 P0 · 75 P1 · 64 P2 · 42 P3
> **Generated:** Cycle 1 audit, 2026-05-19
> **Branch:** `seo-audit/cycle-1-discovery`

## Column legend

| Col | Meaning |
| --- | --- |
| **ID** | BLG-XXX numeric ID |
| **Title** | one-line summary |
| **Sev** | P0 / P1 / P2 / P3 |
| **Phase** | discovery phase (1-14 + 10b/11 for live) |
| **Sprint** | target Cycle 2 sprint (1-7) or C3 / Defer |
| **Effort** | Q (quick ≤30 min) · H (half-day) · D (1-2 days) · W (≥3 days) |

---

## All entries

| ID | Title | Sev | Phase | Sprint | Effort |
| --- | --- | --- | --- | --- | --- |
| BLG-001 | SeoHead.tsx client-canonical: redundant + risks double canonical | P0 | 1 | 1 | Q |
| BLG-002 | not-found.tsx imports `Link` from lucide-react (broken 404) | P0 | 2 | 1 | Q |
| BLG-003 | POST_QUERY double-fetched in blog/[slug] generateMetadata + page | P0 | 2 | 4 | H |
| BLG-004 | Course content `dynamic({ssr:false})` invisible to AI crawlers | P0 | 2 | C3 | W |
| BLG-005 | schema-generators.ts 6000+ lines monolith | P1 | 2 | 5 | D |
| BLG-006 | No /api/revalidate route — Sanity publishes don't refresh | P1 | 2 | 5 | H |
| BLG-007 | MetaPixel loads fbevents.js inline, not via Script lazyOnload | P1 | 2 | 4 | Q |
| BLG-008 | 250 `'use client'` files — most over-applied | P1 | 2 | C3 | W |
| BLG-009 | react-phone-number-input/style.css imported in root layout | P2 | 2 | 4 | Q |
| BLG-010 | Header/Footer/Banner dynamic-imported with ssr:true (no benefit) | P2 | 2 | 3 | Q |
| BLG-011 | No preconnect to cdn.sanity.io (downgraded from P2 in Phase 11) | P3 | 2 | 3 | Q |
| BLG-012 | 5 raw `<img>` tags in content components | P2 | 2 | 3 | H |
| BLG-013 | No CSP / HSTS / Permissions-Policy headers | P2 | 2 | 1 | Q |
| BLG-014 | optimizeCss:false (Tailwind v4 conflict) — critters non-functional | P1 | 2 | C3 | D |
| BLG-015 | 34 *Data.ts curriculum files bundled to client | P1 | 2 | C3 | W |
| BLG-016 | /cms layout emits JSON-LD on noindex,nofollow route | P3 | 2 | 7 | Q |
| BLG-017 | Blog Suspense fallbacks wrap dynamic(ssr:true) — never trigger | P3 | 2 | 7 | Q |
| BLG-018 | Blog hero "Loading..." text fallback risks LCP element swap | P2 | 2 | 3 | Q |
| BLG-019 | webpackBuildWorker stale comment | P3 | 2 | 7 | Q |
| BLG-020 | Stale serverExternalPackages: ['@prisma/client'] | P3 | 2 | 7 | Q |
| BLG-021 | Sitemap Sanity fetch no `unstable_cache` wrap | P2 | 2 | 5 | H |
| BLG-022 | Sanity Studio bundle isolation unverified | P1 | 2 | C3 | H |
| BLG-023 | GoogleAnalytics double-fires initial gtag('config') | P3 | 2 | 7 | Q |
| BLG-024 | error.tsx renders unstyled fallback | P3 | 2 | 3 | Q |
| BLG-025 | No loading.tsx anywhere | P2 | 2 | 4 | H |
| BLG-026 | blog/categories ships placeholder branding "Your Company" + en_US locale | P0 | 3 | 1 | H |
| BLG-027 | blog/category/[slug] double-fetches Sanity | P0 | 3 | 4 | H |
| BLG-028 | 5 lead-forms link to non-www privacy-policy URL | P1 | 3 | 3 | Q |
| BLG-029 | blog/categories bypasses generateMetadata helper | P1 | 3 | 1 | bundled |
| BLG-030 | blog/category/[slug] bypasses generateMetadata helper | P1 | 3 | 1 | bundled |
| BLG-031 | blog/categories declares fake en-US hreflang | P1 | 3 | 1 | bundled |
| BLG-032 | blog/categories per-page metadataBase override redundant | P2 | 3 | 1 | bundled |
| BLG-033 | No explicit non-www→www redirect in next.config.ts | P1 | 3 | 1 | H |
| BLG-034 | No explicit http→https redirect | P1 | 3 | 1 | bundled |
| BLG-035 | /jobs/live-jobs?jobId=X indexes via query param — should be slug | P2 | 3 | 6 | D |
| BLG-036 | /blog/all-posts + category pages load all Sanity posts unbounded | P2 | 3 | 4 | H |
| BLG-037 | /blog/all-posts cannibalises /blog | P2 | 3 | 6 | H |
| BLG-038 | No Disallow:/blog/search in robots.txt | P2 | 3 | 1 | Q |
| BLG-039 | Sanity-category-slug-dependent redirects fragile | P2 | 3 | 5 | H |
| BLG-040 | Brochure PDFs in /public/*.pdf indexable by default | P2 | 3 | 6 | Q |
| BLG-041 | /mock-test/[courseSlug] needs meta robots defense-in-depth | P3 | 3 | 3 | Q |
| BLG-042 | /mock-test + /istqb-registration titles say "Testriq" | P0 | 4 | 1 | Q |
| BLG-043 | ~35 page titles exceed 60 chars — auto-truncator damages | P1 | 4 | 1 | D |
| BLG-044 | 30+ pages reference non-defensible "5000 placed / 100% / 15yrs" | P0 | 4 | 1 | D |
| BLG-045 | Mobile home renders h2 instead of h1 as visible primary | P2 | 4 | 3 | Q |
| BLG-046 | 4 hero `alt=""` on content-bearing images | P2 | 4 | 3 | Q |
| BLG-047 | /courses default title "All Courses" too short | P2 | 4 | 1 | Q |
| BLG-048 | /services mixes B2B + B2C — extends Sprint 6 | P1 | 4 | 6 | bundled |
| BLG-049 | /jobs/live-jobs reframe — competes head-on with Naukri | P2 | 4 | 6 | H |
| BLG-050 | /cookies-policy title too short | P3 | 4 | 1 | Q |
| BLG-051 | /courses/.../api-testing title missing brand suffix | P3 | 4 | 1 | Q |
| BLG-052 | Mixed PNG/WebP OG images | P3 | 4 | 3 | H |
| BLG-053 | OG image dimensions not verified at 1200×630 | P2 | 4/11 | 3 | Q |
| BLG-054 | City-course H1 quality unverified (765 pages spot-check) | P2 | 4 | 6 | H |
| BLG-055 | External target="_blank" rel audit needed | P2 | 4 | 3 | H |
| BLG-056 | generateSingleReviewSchema emits FAKE review on ~830 routes | P0 | 5/10b/11 | 1 | H |
| BLG-057 | Math.random() in Review @id — non-deterministic | P0 | 5/11 | 1 | bundled |
| BLG-058 | generateCourseSchema hard-codes 25k-65k ignoring course.price | P0 | 5/11 | 2 | H |
| BLG-059 | generateOrganizationSchema.description has "100% placement" | P0 | 5/11 | 1 | Q |
| BLG-060 | generateReviewSchema default itemType:"EducationalOrg" foot-gun | P1 | 5 | 2 | Q |
| BLG-061 | LocalBusiness ↔ Organization not cross-referenced via @id | P1 | 5 | 2 | Q |
| BLG-062 | City pages don't emit LocalBusiness with areaServed:city | P1 | 5 | 2 | D |
| BLG-063 | Course schema missing teaches/level/prereq/credential | P1 | 5/10b/11 | 2 | H |
| BLG-064 | Organization missing founder (Sandeep Maske + LinkedIn sameAs) | P1 | 5 | 2 | Q |
| BLG-065 | generateArticleSchema uses Article not BlogPosting subtype | P2 | 5 | 2 | Q |
| BLG-066 | Article author has no sameAs (Sanity social fields unwired) | P1 | 5 | 2 | Q |
| BLG-067 | blog/[slug] wordCount placeholder 1000 for ALL posts | P2 | 5 | 4 | Q |
| BLG-068 | WebSite schema has no potentialAction:SearchAction | P2 | 5/10b | 2 | Q |
| BLG-069 | Quiz schema missing for /mock-test | P2 | 5 | 2 | H |
| BLG-070 | sameAs missing Crunchbase/Clutch/G2/Tracxn/Wikidata | P2 | 5 | 5 | bundled |
| BLG-071 | numberOfEmployees:50 not user-confirmed | P2 | 5 | 2 | Q |
| BLG-072 | EducationalOccupationalProgram missing for Masters/Bootcamp | P2 | 5 | 2 | H |
| BLG-073 | OfferCatalog schema missing on /services | P2 | 5 | 2 | H |
| BLG-074 | audience(EducationalAudience) missing on Course | P2 | 5 | 2 | Q |
| BLG-075 | Course.hasCourseInstance.courseSchedule missing | P2 | 5 | 2 | H |
| BLG-076 | Home AggregateRating @id collides with LocalBusiness @id | P2 | 5/11 | 2 | Q |
| BLG-077 | generateBreadcrumbSchema optional @id arg → duplicate risk | P3 | 5 | 5 | Q |
| BLG-078 | Course.hasCourseInstance.instructor default fake name | P3 | 5 | 2 | Q |
| BLG-079 | 57 page-specific consolidators (~4500 lines duplication) | P1 | 5 | 5 | W |
| BLG-080 | award/paymentAccepted/currenciesAccepted missing on Org/LB | P3 | 5 | 2 | Q |
| BLG-081 | mentions cross-refs Course→Mentor→Article missing | P3 | 5 | 5 | H |
| BLG-082 | 4 unused production deps (recharts, calendly, countup, typewriter) | P1 | 6 | 7 | Q |
| BLG-083 | next-sanity-image installed but unused on hero/list/sidebar | P1 | 6 | 4 | H |
| BLG-084 | framer-motion in 160 files — biggest aggregated JS cost | P0 | 6 | C3 | W |
| BLG-085 | 4 below-fold company logos marked priority={true} | P2 | 6 | 3 | Q |
| BLG-086 | Alumni-company logo alt text mismatches filename (P1 user-confirm) | P1 | 6 | 1 | H |
| BLG-087 | "14+ Years Expertise" contradicts foundedYear:2020 | P1 | 6 | 1 | bundled |
| BLG-088 | 2 icon libraries (react-icons/lu + lucide-react) in HeroManualTesting | P2 | 6 | 3 | H |
| BLG-089 | Inline style font-family:system-ui override on 765 city H1s | P3 | 6 | 3 | Q |
| BLG-090 | No placeholder=blur/blurDataURL anywhere | P3 | 6 | C3 | H |
| BLG-091 | images.minimumCacheTTL:60 — short | P3 | 6 | 3 | Q |
| BLG-092 | No Cache-Control on /api/reviews — hammers Google API | P2 | 6 | 3 | Q |
| BLG-093 | No preconnect to cdn.sanity.io (downgraded P3 in Phase 11) | P3 | 6/11 | 3 | bundled |
| BLG-094 | AboutAccreditations image priority={true} below-fold | P3 | 6 | 3 | Q |
| BLG-095 | ALL 30+ course descriptions in headerData.ts are WRONG | P0 | 7/11 | 1 | D |
| BLG-096 | /courses/artificial-intelligence-courses hub has only 1 spoke | P1 | 7 | 5 | D |
| BLG-097 | 3-way ML/Python + 4-way Data-Analytics + 4-way AI cannibalization | P1 | 7 | 5 | D |
| BLG-098 | DM child slug repeats parent slug | P2 | 7 | 5 | H |
| BLG-099 | 0 pillar pages of 3000+ words | P1 | 7 | 6 | W |
| BLG-100 | 0 free-tool linkable assets | P1 | 7 | 6 | W |
| BLG-101 | No per-mentor profile pages /mentors/[slug] | P1 | 7 | 6 | D |
| BLG-102 | No B2B Corporate-Training topic cluster | P1 | 7 | 6 | bundled |
| BLG-103 | No vertical-solution hubs (BFSI/healthcare/retail) | P2 | 7 | 6 | bundled |
| BLG-104 | Blog posts don't contextually link to canonical course pages | P2 | 7 | 5 | content |
| BLG-105 | City-course pages no other-course-same-city cross-linking | P2 | 7 | 6 | H |
| BLG-106 | /mentors page doesn't link to course pages each mentor teaches | P2 | 7 | 6 | H |
| BLG-107 | /reviews page doesn't link to courses by filter | P2 | 7 | 6 | H |
| BLG-108 | Sanity author missing expertise/credentials fields | P2 | 7 | 5 | Q |
| BLG-109 | 21 .tsx blog seeds in src/content/posts/ | P3 | 7 | 7 | H |
| BLG-110 | Year-stamped content "2025-*" will look stale | P2 | 7 | 6 | content |
| BLG-111 | Course detail pages no trainer profile linkage | P2 | 7 | 6 | H |
| BLG-112 | No /case-studies/[slug] directory | P2 | 7 | 6 | D |
| BLG-113 | AAA-Accredited as 5th category — should be tag/filter | P2 | 7 | 5 | H |
| BLG-114 | Python/Java cross-link from DS/ML hub missing | P2 | 7 | 5 | Q |
| BLG-115 | llms.txt uses 17 old-slug URLs that all 301-redirect | P1 | 8 | 5 | H |
| BLG-116 | llms.txt lists AI Bootcamp under "AI" — actual route is DM | P1 | 8 | 5 | bundled |
| BLG-117 | llms.txt missing 13+ course pages | P1 | 8 | 5 | bundled |
| BLG-118 | llms.txt missing certification pages | P1 | 8 | 5 | bundled |
| BLG-119 | llms.txt missing /(city-courses) summary | P1 | 8 | 5 | bundled |
| BLG-120 | llms.txt missing NAP, founder, social sameAs | P1 | 8 | 5 | bundled |
| BLG-121 | llms.txt claims "100% placement assistance" | P0 | 8 | 1 | bundled |
| BLG-122 | No llms-full.txt exists | P1 | 8 | 5 | D |
| BLG-123 | No Wikidata Q-ID (single highest-leverage external GEO) | P1 | 8/14 | 5 | Q |
| BLG-124 | No "What is X?" definitions SSR'd on course pages | P1 | 8 | 6 | content |
| BLG-125 | No comparison pages (extends BLG-167) | P1 | 8 | 6 | W |
| BLG-126 | Non-defensible stats — replace with NASSCOM/Indeed citations | P1 | 8 | 6 | content |
| BLG-127 | No "CDPL Placement Report 2026" first-party publication | P2 | 8 | 6 | content |
| BLG-128 | India Tech Salary Calculator missing | P1 | 8 | 6 | W |
| BLG-129 | CCBot/Bytespider/Diffbot not listed in robots.ts AI block | P3 | 8 | 5 | Q |
| BLG-130 | Crunchbase/Clutch/G2/Tracxn profiles unconfirmed | P2 | 8/14 | 5 | D |
| BLG-131 | Section headings not conversational/question-form | P2 | 8 | 6 | content |
| BLG-132 | All Sanity image fields lack `alt` Rule.required() validation | P0 | 9 | 1 | Q |
| BLG-133 | No Sanity doc types for course/mentor/event/testimonial/etc | P1 | 9 | 5 | W |
| BLG-134 | No validation.required() on post/author/category critical fields | P1 | 9 | 5 | Q |
| BLG-135 | post.seo missing ogImage/noindex/nofollow | P1 | 9 | 5 | Q |
| BLG-136 | author schema missing seo object | P1 | 9 | 5 | Q |
| BLG-137 | category schema missing featuredImage + seo | P1 | 9 | 5 | Q |
| BLG-138 | job schema missing salary/datePosted/validThrough/description | P3 | 9/10b | 2 | H |
| BLG-139 | No draftMode integration / /api/preview routes | P1 | 9 | 5 | D |
| BLG-140 | No 2nd Sanity client useCdn:false for preview | P1 | 9 | 5 | bundled |
| BLG-141 | post.content allows H1 in body (no styles restriction) | P2 | 9 | 5 | Q |
| BLG-142 | post.content inner image type allows no-alt images | P1 | 9 | 5 | bundled |
| BLG-143 | post.seo metaTitle/Description no maxLength validation | P2 | 9 | 5 | Q |
| BLG-144 | Slug isUnique not enforced | P2 | 9 | 5 | Q |
| BLG-145 | useNextSanityImage missing on hero/list/sidebar/avatar | P1 | 9/11 | 4 | D |
| BLG-146 | No client.fetch tags arg — revalidateTag wouldn't work | P1 | 9 | 5 | H |
| BLG-147 | author missing expertise + credentials for E-E-A-T | P2 | 9 | 5 | Q |
| BLG-148 | No JOBS_SLUG_QUERY in Sanity | P2 | 9 | 5 | Q |
| BLG-149 | JOBS_QUERY no _updatedAt projection | P2 | 9 | 5 | Q |
| BLG-150 | PortableText link external-detection too simplistic | P3 | 9 | 5 | Q |
| BLG-151 | publishDate not required — sort order unstable | P2 | 9 | 5 | Q |
| BLG-152 | certificate issuedDate/expiresAt missing | P1 | 9 | 5 | Q |
| BLG-153 | No Domain GSC property — only URL-prefix exists | P1 | 10b | 1 | Q |
| BLG-154 | /services/sttp biggest non-brand traffic page (3,623 imps 0.36% CTR) | P1 | 10b | 6 | content |
| BLG-155 | 12 URLs Google chose different canonical (confirms BLG-001) | - | 10b | - | (BLG-001) |
| BLG-156 | Plural slugs still ranking despite redirect | P2 | 10b | 5 | H |
| BLG-157 | 880 pages have impressions vs 613 indexed = 267 dropped | P1 | 10b | 6 | H |
| BLG-158 | Index-stability: content quality/freshness signals weak | P2 | 10b | 6 | bundled |
| BLG-159 | sttp/sdet/manual+placement CTR optimization | P1 | 10b | 6 | bundled |
| BLG-160 | /manual-testing-course legacy short slug still ranks | P3 | 10b | 7 | Q |
| BLG-161 | LCP > 2.5s on ALL 128 mobile URLs | P0 | 10b/11 | C3 | W |
| BLG-162 | BLG-138 re-audit needed (current sample shows 0 invalid) | P3 | 10b | 2 | Q |
| BLG-163 | Home emits 3 canonicals — one points to non-existent /index | P0 | 11 | 1 | H |
| BLG-164 | CountUp stats render 0 in SSR → AI ingest fake zero data | P1 | 11 | 6 | H |
| BLG-165 | abbreviateTitle helper leaves dangling pipe after stripping | P1 | 11 | 1 | Q |
| BLG-166 | Blog hero loading="lazy" no priority — direct LCP cause | P1 | 11 | 4 | Q |
| BLG-167 | Build comparison pages (Manual vs Auto, Power BI vs Tableau, etc) | P1 | 12 | 6 | W |
| BLG-168 | Build interview-question pages (Edureka traffic engine) | P1 | 12 | 6 | W |
| BLG-169 | Build tutorial content cluster (Intellipaat strategy) | P2 | 12 | 6 | W |
| BLG-170 | Verified-alumni-outcomes page with LinkedIn URLs (Scaler moat) | P1 | 12 | 6 | bundled |
| BLG-171 | Submit Shiksha/CollegeDunia/CareerLauncher directories | P1 | 12/14 | 1-3 | H |
| BLG-172 | Institutional partnership content (Intellipaat IIT play) | P2 | 12 | C2+ | external |
| BLG-173 | Long-term review-acquisition strategy (425 → 1000+) | P2 | 12/14 | C2+ | external |
| BLG-174 | Build 10 /tools/<tool-name> landing pages | P1 | 13 | 6 | W |
| BLG-175 | Build 2 vertical pages: BFSI Testing + Healthcare Data Analytics | P2 | 13 | 6 | D |
| BLG-176 | Build /corporate-training B2B cluster (5-8 pages) | P1 | 13 | 6 | W |
| BLG-177 | Add transparent fee structure | P1 | 13 | 6 | H |
| BLG-178 | Add "Upcoming Batches" page | P1 | 13 | 6 | D |
| BLG-179 | /case-studies/[slug] + Sanity caseStudy doc type | P1 | 13 | 6 | W |
| BLG-180 | /how-placement-works process page | P2 | 13 | 6 | H |
| BLG-181 | /faculty-development-program dedicated B2B landing | P2 | 13 | 6 | H |
| BLG-182 | Verify Thane GBP listing — NAP consistency | P1 | 13/14 | 1 | H |
| BLG-183 | Submit Shiksha/CollegeDunia/CareerLauncher (extends BLG-171) | P1 | 13/14 | 1-3 | bundled |
| BLG-184 | Claim Justdial/Sulekha/Bing Places | P2 | 13/14 | 1-3 | D |
| BLG-185 | Footer should display CIN + GST + ISO certificate numbers | P3 | 13 | 1 | Q |
| BLG-186 | Add MSME/NSDC/Skill India badges if applicable | P2 | 13 | 1 | Q |
| BLG-187 | City-page meta-description CTR rescue (drop non-defensible) | P1 | 13 | 6 | content |
| BLG-188 | City-page cross-linking (same-city + same-course-other-city) | P2 | 13 | 6 | H |
| BLG-189 | Pull GSC Links report for top external + anchor distribution | P1 | 14 | 1 | Q |
| BLG-190 | Founder LinkedIn content cadence + YourStory outreach | P2 | 14 | C2+ | external |
| BLG-191 | EdTech awards nomination cycle | P3 | 14 | C2+ | external |
| BLG-192 | Speaking circuit pipeline | P3 | 14 | C2+ | external |
| BLG-193 | Real-alumni review acquisition workflow | P1 | 14 | C2+ | external |
| BLG-194 | Tier-1 directory submission sprint (15 directories) | P1 | 14 | 1-3 | W |
| BLG-195 | Disavow audit + submit (after GSC Links pulled) | P2 | 14 | 1 | H |
| BLG-196 | NAP consistency audit across all external listings | P1 | 14 | 1 | D |
| BLG-197 | Wikidata Q-ID creation | P1 | 14 | 5 | Q |
| BLG-198 | Crunchbase profile create | P1 | 14 | 5 | H |
| BLG-199 | Clutch profile create | P1 | 14 | 5 | H |

---

## P0 quick-reference (18 entries — Sprint 1 priority)

| ID | Title |
| --- | --- |
| BLG-001 | SeoHead.tsx client-canonical (3 canonicals live on home) |
| BLG-002 | not-found.tsx broken Link import |
| BLG-003 | POST_QUERY double-fetch (blog) |
| BLG-004 | Course content `ssr:false` invisible to AI crawlers (Cycle 3) |
| BLG-026 | blog/categories ships "Your Company" placeholder branding |
| BLG-027 | blog/category/[slug] double-fetches Sanity |
| BLG-042 | /mock-test + /istqb-registration titles say "Testriq" |
| BLG-043 | 35 titles exceed 60 chars |
| BLG-044 | 30+ pages non-defensible "5000 placed / 100% / 15yrs" |
| BLG-056 | **Fabricated reviews on ~830 routes** |
| BLG-057 | Math.random() in Review @id |
| BLG-058 | Course schema 25k-65k ignoring real price |
| BLG-059 | Org description "100% placement" |
| BLG-084 | framer-motion in 160 files (Cycle 3) |
| BLG-095 | All 30+ course descriptions wrong boilerplate |
| BLG-121 | llms.txt "100% placement assistance" |
| BLG-132 | All Sanity image fields lack alt validation |
| BLG-161 | LCP > 2.5s on ALL 128 mobile URLs (Cycle 3) |
| BLG-163 | 3 canonicals on home — one is /index (extends BLG-001) |

---

## Severity totals

| Severity | Count |
| --- | --- |
| **P0** | 18 |
| **P1** | 75 |
| **P2** | 64 |
| **P3** | 42 |
| **Total** | 199 |
