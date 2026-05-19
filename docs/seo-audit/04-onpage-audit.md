# Phase 4 — On-Page SEO Audit

> **Goal:** per-template assessment of title length, meta description, H1 uniqueness, H2/H3 hierarchy, OG + Twitter Card completeness, image alt text, internal anchor diversity, content depth, keyword placement, LSI entities, and search-intent match.
> **Date:** 2026-05-19
> **Mode:** read-only source inspection.

---

## 4.1 Title length audit (50–60 char target)

Title lengths were measured from `title:` literals across all 58+ page files. The `abbreviateTitle()` auto-truncator in [metadata-generator.ts:26-67](../../src/lib/metadata-generator.ts#L26) attempts to bring titles to ≤60 chars by:
1. Stripping `^Best ` prefix
2. Replacing ` | CDPL - Cinute Digital` with ` | CDPL`
3. Word-by-word truncation while preserving a recognised suffix (`| CDPL`, `| CDPL Blog`, `- CDPL`)
4. Hard-truncate with `…` if all else fails

The auto-truncator works on simple cases but **degrades content quality on complex titles** that already contain pipes-and-suffixes baked into the literal string (e.g., `"X Course in Mumbai | 80-Hour Job-Ready Training | CDPL"` — the truncator drops keywords from the middle to fit).

### Title-by-title results

| Route | Title | Chars | Verdict |
| --- | --- | --- | --- |
| `/` | "Best Software Testing & Data Science Courses India \| CDPL" | 57 | ✅ |
| `/about-us` | "About CDPL - Leading EdTech for Tech Training" + helper suffix | 51 | ✅ |
| `/contact-us` | "Contact Us \| Software Testing & Data Science Training" | 55 | ✅ |
| `/our-team` | "Our Team - Expert Trainers & Mentors \| CDPL" | 44 | ✅ |
| `/mentors` | "Our Mentors \| Industry Experts from Top Tech Companies" | 55 | ✅ |
| `/reviews` | "Authentic Student Reviews & Testimonials \| CDPL - Cinute Digital" | 64 | ⚠️ slight over |
| `/courses` | "All Courses" + helper suffix → "All Courses \| CDPL" | 18 | ❌ too short |
| `/courses/software-testing-course` | full pattern | check | TBD |
| `/courses/software-testing-course/manual-testing-course` | "Manual Testing Course with Placement \| QA Training Mumbai" | 58 | ✅ |
| `/courses/software-testing-course/automation-testing-course` | "Advanced Automation Testing Course \| SDET Training \| 100% Placement" | 67 | ❌ |
| `/courses/software-testing-course/advance-software-testing` | "Advanced Software Testing Course in Mumbai \| SDET & Selenium Training - 100% Placement" | **87** | ❌❌ |
| `/courses/software-testing-course/advance-manual-automation-testing` | "What is Selenium Testing? Master Manual & Automation Testing \| 100% Placement" | 78 | ❌ |
| `/courses/software-testing-course/api-testing` | "API Testing Course with POSTMAN & RestAPIs" | 43 | ⚠️ short, **no brand** |
| `/courses/software-testing-course/etl-testing` | "ETL Testing Course with Placement \| Master SQL, Data Validation & ETL Tools" | 76 | ❌ |
| `/courses/software-testing-course/dbms-course` | "MySQL Database Course \| 100% Job Placement \| 20-Hour Training" | 60 | ✅ exact |
| `/courses/software-testing-course/python-course` | "Python Programming Course in Mumbai \| 80-Hour Job-Ready Training \| CDPL" | 71 | ❌ |
| `/courses/software-testing-course/java-course` | "Java Programming Course in Mumbai \| 80-Hour Job-Ready Training \| CDPL" | 70 | ❌ |
| `/courses/ds-ml-courses` | "Data Science & Machine Learning Courses \| CDPL" | 47 | ✅ |
| `/courses/ds-ml-courses/data-science-course` | "Advanced Data Science & Machine Learning Masterclass Mumbai \| Placement" | 71 | ❌ |
| `/courses/ds-ml-courses/machine-learning-course` | "Machine Learning & Data Science with Python Hero Program \| Mumbai \| CDPL" | 72 | ❌ |
| `/courses/ds-ml-courses/machine-learning-using-python` | "Machine Learning with Python Course in Mumbai \| 45-Hour Master Program \| CDPL" | 78 | ❌ |
| `/courses/ds-ml-courses/generative-ai-course` | "Deep Learning, NLP & Gen AI Course Mumbai \| CDPL" | 49 | ✅ |
| `/courses/ds-ml-courses/ai-course` | "Masters in AI and ML \| AI Master Program Mumbai \| 100% Placement Support" | 71 | ❌ |
| `/courses/ds-ml-courses/data-visualization-in-r-programming` | "Machine Learning and Data Visualization using R Programming \| CDPL" | 66 | ❌ |
| `/courses/bi-courses` | "Business Intelligence Courses \| Power BI, Tableau & Data Viz" | 60 | ✅ |
| `/courses/bi-courses/data-analytics` | "Advanced Data Analytics Course Mumbai \| Data Analyst Training" | 61 | ⚠️ |
| `/courses/bi-courses/data-analytics-python` | "Best Data Analytics Course with Python \| 20-Hour Training Mumbai \| 100% Job Assistance" | **86** | ❌❌ |
| `/courses/bi-courses/data-analytics-and-visualization` | "Advanced Excel for Data Analytics & Visualization \| 20-Hour Course \| Mumbai" | 76 | ❌ |
| `/courses/bi-courses/data-analytics-with-tableau` | "Data Analytics with Tableau Course \| 20-Hour Training \| Mumbai \| CDPL" | 67 | ❌ |
| `/courses/bi-courses/power-bi-course` | check | check | TBD |
| `/courses/bi-courses/masters-in-data-engineering` | "Master Program in Data Engineering \| BI & Big Data Engineering Course \| Mumbai" | 78 | ❌ |
| `/courses/artificial-intelligence-courses` | "Artificial Intelligence Courses \| AI & Generative AI Training" | 62 | ⚠️ |
| `/courses/artificial-intelligence-courses/prompt-engineering-course` | "Prompt Engineering with Generative AI Course in Mumbai \| 20-Hour Hero Program \| CDPL" | **84** | ❌❌ |
| `/courses/digital-marketing-courses` | "Digital Marketing Courses \| SEO, SEM, SMM & More" | 49 | ✅ |
| `/courses/digital-marketing-courses/digital-marketing-course` | "Best Digital Marketing Course in Mumbai with 100% Placement \| CDPL" | 68 | ❌ |
| `/courses/digital-marketing-courses/ai-in-digital-marketing` | "Master Digital Marketing & AI for Business Owners \| 10X Your Growth - Cinute Digital" | **86** | ❌❌ |
| `/courses/digital-marketing-courses/ai-bootcamp` | "AI-Powered Digital Marketing Bootcamp \| 30-Hour Expert Training \| CDPL" | 72 | ❌ |
| `/blog` | "Tech Blog - Insights, Tutorials & Trends" | 41 | ✅ short-side |
| `/blog/all-posts` | "All Blog Posts \| 100+ Software Testing & Development Resources - CDPL" | 70 | ❌ |
| `/blog/categories` | "Blog Categories \| Explore Tech Topics - Software Testing, Development & AI" | 75 | ❌ |
| `/locations-we-serve` | "Locations We Serve \| Software Testing & Programming Courses in India & UAE - CDPL" | **84** | ❌❌ |
| `/aaa-certification` | "AAA Certification Course - Advanced Automation Architecture \| CDPL" | 67 | ❌ |
| `/actd-certification` | "ACTD Certification Training - Agile, Cloud & Test-Driven Development \| CDPL" | 75 | ❌ |
| `/istqb-registration` | **"ISTQB Registration \| Testriq"** | 30 | **❌🚨 wrong brand + too short** |
| `/mock-test` | **"Free Online Mock Tests & Premium Assessments \| Testriq"** | 56 | **❌🚨 wrong brand** |
| `/cdpl-certificate-validation` | "CDPL Certificate Validation - Verify AAA & ACTD Certificates Online" | 69 | ❌ |
| `/cdpl-affiliate-program` | "CDPL Affiliate Program: Earn 25% Commission \| CDPL" | 51 | ✅ |
| `/services` | "Our Services \| Training, Consulting & Custom Solutions – CDPL" | 61 | ⚠️ |
| `/jobs/live-jobs` | "Live Jobs & Placement Alerts \| CDPL" | 36 | ⚠️ short-side |
| `/jobs/job-openings` | check | check | TBD |
| `/jobs/careers` | check | check | TBD |
| `/jobs/placements` | check | check | TBD |
| `/events` | "Events - Workshops, Webinars & Training Sessions \| CDPL" | 56 | ✅ |
| `/privacy-policy` | "Privacy Policy \| Cinute Digital Pvt. Ltd." | 42 | ✅ |
| `/terms-of-service` | "Terms & Conditions \| Cinute Digital Pvt. Ltd." | 47 | ✅ |
| `/cancellation-refund-policy` | "Cancellation/Refund Policy \| Cinute Digital Pvt. Ltd." | 53 | ✅ |
| `/cookies-policy` | "Cookies Policy" → "Cookies Policy \| CDPL" with helper | 21 | ⚠️ very short |
| `/blog/[slug]` (dynamic) | post title + " \| CDPL Blog" | variable | depends on Sanity |
| `/(city-courses)/[slug]` (dynamic) | from `courseData.metadata.title` | variable | needs sample audit |

### Title-length summary

| Bucket | Count | Action |
| --- | --- | --- |
| ✅ within 50-60 | ~13 | Keep |
| ⚠️ slight over (61-65) or slight under (35-49) | ~7 | Light rewrites |
| ❌ over 60 (66-79) | ~21 | **Manual rewrite required** — auto-truncator damages content |
| ❌❌ way over (80+) | 6 | **Manual rewrite required, will be hard-truncated** |
| 🚨 wrong brand | **2** (mock-test, istqb-registration use "Testriq") | **P0 — fix immediately** |
| ⚠️ no brand suffix | 1 (api-testing) | Add `| CDPL` |

> **Sample of acceptable rewrites** (Cycle 2 Sprint 1):
> - "Advanced Software Testing Course in Mumbai | SDET & Selenium Training - 100% Placement" (87 chars) → **"Advanced Software Testing Course in Mumbai | CDPL"** (49 chars)
> - "Python Programming Course in Mumbai | 80-Hour Job-Ready Training | CDPL" (71 chars) → **"Python Programming Course in Mumbai | 80hr | CDPL"** (49 chars) or **"Python Course in Mumbai | Job-Ready Training | CDPL"** (52 chars)
> - "Master Digital Marketing & AI for Business Owners | 10X Your Growth - Cinute Digital" (86 chars) → **"AI Digital Marketing Course for Business Owners | CDPL"** (53 chars)

### City-courses title pattern (BLG-* candidate)

City-course titles come from `courseData[slug].metadata.title`. Per the data structure in [src/types/courseData.ts] (not yet read full file), titles like:
- "Software Testing Course in Mumbai | CDPL" — likely well-formed
- "Data Science Course in Bengaluru | 100% Placement | CDPL" — likely 50-60

**Cycle 2 Sprint 1 action**: spot-check 20 random cities by reading `courseData` directly. If consistent issue, write a one-off script to audit.

---

## 4.2 Meta description length audit (140–160 char target)

Sampled descriptions:

| Route | Description (excerpt) | Chars | Verdict |
| --- | --- | --- | --- |
| `/` | "Launch your tech career with CDPL's industry-leading courses in Software Testing, Data Science, and AI/ML. 100% Placement Support, Live Projects & Expert Mentors. Book a Free Demo!" | 180 | ❌ over (auto-truncated by helper) |
| `/about-us` | "CDPL (Cinute Digital) is India's premier EdTech institute … Founded in 2020, we've empowered 5000+ professionals with live projects, expert mentorship, and 100% placement support." | 196 | ❌ over + contains **non-defensible** "5000+" claim (per user §_decisions §2) |
| `/contact-us` | "Get in touch with CDPL (Cinute Digital) for course inquiries, admissions, and career guidance. Call us, email, or visit our Mumbai office. 100% Placement Support." | 165 | ⚠️ slight over + non-defensible claim |
| `/courses/.../manual-testing-course` | "Master Manual Testing in 12 weeks. ISTQB prep, live projects, Jira & Agile training. 5,000+ placed. Online & classroom batches. Enroll now!" | 142 | ✅ length ⚠️ non-defensible "5,000+ placed" claim |
| `/courses/.../python-course` | (need to read full file) | check | TBD |
| `/aaa-certification` | (need to read full file) | check | TBD |

### Description issues

| # | Issue | Severity |
| --- | --- | --- |
| 4.2.1 | **Auto-truncator works** ([metadata-generator.ts:147](../../src/lib/metadata-generator.ts#L147)) — descriptions over 160 chars get `…` suffix at 157. But the truncated form may end mid-word and lose CTA ("Book a Free Demo!") | P2 — review the 7+ pages with descriptions >160 |
| 4.2.2 | **Many descriptions repeat "5000+ placed / 100% placement / 15+ years"** — all flagged as **non-defensible** by user (see [_decisions.md](_decisions.md)) | **P0** content liability across 30+ pages |
| 4.2.3 | **Short descriptions** (e.g., "Cookies Policy" likely <120 chars) | P3 — dev warning fires (metadata-generator.ts:153-159), but no production check |
| 4.2.4 | **No description uniqueness check** — multiple course pages may have nearly-identical descriptions ("Best X Course in Mumbai with 100% Placement | CDPL"-style boilerplate). | P2 — Phase 7 will inspect content distinctiveness |

---

## 4.3 H1 uniqueness audit

Counted `<h1` occurrences across the codebase: **90 files** contain `<h1`. Most are Hero components — one H1 per page template.

### Per-template H1 source

| Template | H1 in component | One per page? |
| --- | --- | --- |
| Home | `HomeHeroSection.tsx` desktop: `<h1 id="home-heading">`, mobile: `<h2 id="home-heading-mobile">` | ⚠️ **Mobile has no H1** in visible content. Both render in DOM (lg:hidden vs hidden lg:block toggles visibility). Googlebot sees 1 H1 + 1 H2 — fine for crawl, **bad mobile semantic** |
| About | `AboutHeroSection.tsx` | TBD — read |
| Contact | `ContactHeroSection.tsx` | TBD — read |
| Course detail (manual testing) | `HeroManualTesting.tsx` | TBD — read |
| Course detail (other) | `<X>HeroSection.tsx` patterns | likely 1 each |
| City-course | `city-courses/HeroSection.tsx:90` — `<h1>{heroContent.title}</h1>` | ✅ one per page |
| Blog post | `BlogPostHeroSection.tsx` | TBD |
| Blog category | `CategoryHero.tsx` | TBD |
| Mock test landing | `MockTestHero.tsx` | TBD |
| 404 | `NotFoundPage.tsx` + `not-found.tsx` | ⚠️ both have h1 ("404 - Page Not Found") — should be one |

### H1 issues

| # | Issue | Severity |
| --- | --- | --- |
| 4.3.1 | **Mobile home page renders `<h2>` instead of `<h1>` as the visible primary heading** — desktop has `<h1>`, but on mobile users (and Google's mobile-first index) see an `<h2>` as the visible main heading. Both render in DOM but only one is visible. | P2 (BLG-NEW) — change mobile to also use `<h1>` with same `id="home-heading"`; render only one based on viewport via single semantic element + responsive font sizing |
| 4.3.2 | **`not-found.tsx` AND `NotFoundPage.tsx` may both render `<h1>`** — if 404 renders `<NotFoundPage />` inside `not-found.tsx`, that's 2 H1s on the 404 page. Phase 11 will verify in live DOM. | P3 |
| 4.3.3 | **City-course H1 comes from `data.heroContent.title`** in `courseData` — quality depends on data file. Sample-audit 10 random cities to confirm H1 is keyword-rich (e.g., "Software Testing Course in Mumbai with 100% Placement"). | P2 — Cycle 2 Sprint 6 |

---

## 4.4 OG / Twitter Card audit

### Coverage

- **Every page-level metadata declaration has an `image:` field** — ✅ (44 distinct OG images in `/public/og-images/`)
- **All non-overridden images default to `/og-images/home-page-og.png` (1200×630)** via `seo-config.ts:48-50`
- **Twitter card type is `summary_large_image`** across all generated metadata (good for 1200×630 OG image)
- **`twitter.site` and `twitter.creator` both set to `@cinutedigital`** — ✅

### OG file extension audit

| Extension | Count | Notes |
| --- | --- | --- |
| `.webp` | ~38 | Modern, recommended |
| `.png` | ~6 | Home, courses/software-testing-course (category), java-course, manual-testing-course duplicate, courses (root), some others |
| `.jpg / .jpeg` | 0 | — |
| `.svg` | 0 | — |

> **P3:** mixed `.png` and `.webp` is fine for Facebook OG (both supported), but uniform format is hygienic. Convert remaining .png OGs to .webp in Cycle 2 Sprint 3.

### OG dimensions

All metadata calls default to `1200×630` from `SITE_CONFIG.defaultOgImageWidth/Height`. **Not yet verified that actual image files are 1200×630.** Phase 11 will run an `ImageMagick identify` on the live URLs.

| # | Issue | Severity |
| --- | --- | --- |
| 4.4.1 | **Mixed `.png` + `.webp` OG images** — cosmetic | P3 |
| 4.4.2 | **OG image dimensions not verified** — risk that some files are not 1200×630 (would result in cropped or padded Facebook previews) | P2 — Phase 11 verify |
| 4.4.3 | **`blog/categories/page.tsx` declares own image (`/og-images/blog-og.webp`) AND own dimensions inside duplicated OG block** ([blog/categories/page.tsx:53-60](../../src/app/blog/categories/page.tsx#L53)) — but with `metadataBase` set per-page, the absolute URL resolution may differ from the rest of the site | P2 — covered by BLG-026/029 |
| 4.4.4 | **No `imageAlt` per-page for OG** — all use the title as alt. `metadata-generator.ts:141` defaults `ogImageAlt = imageAlt || titleString`. Fine but generic. | P3 |
| 4.4.5 | **`twitter.site` set as `@cinutedigital` per call** but also at root via `seo-config.ts:108-109`. Redundant. | P3 |

---

## 4.5 Image alt-text audit

### Coverage

- 71 files use `next/image`
- **5 files have `alt=""`** (decorative — mostly OK):
  - `ServicesHeroSection.tsx`
  - `MentorOutcomesSection.tsx`
  - `EventsPastEventsFloatingLanternsContent.tsx`
  - `BlogPostHeroSection.tsx`
  - `events/EventHero.tsx`

Empty `alt=""` is **valid HTML** and instructs screen readers to skip the image — appropriate for purely decorative imagery. But on a **hero section**, an empty alt likely means the image is doing semantic work and SHOULD have a descriptive alt. Five candidates to verify.

### Alt issues

| # | Issue | Severity |
| --- | --- | --- |
| 4.5.1 | **`BlogPostHeroSection.tsx` has `alt=""`** — blog post featured image is typically content-bearing, not decorative. Should have `alt={post.title}` or post-specific description. | P2 (BLG-NEW) |
| 4.5.2 | **`ServicesHeroSection.tsx` and `events/EventHero.tsx`** — same likely issue | P2 (BLG-NEW) |
| 4.5.3 | **`MentorOutcomesSection.tsx` and `EventsPastEventsFloatingLanternsContent.tsx`** — likely decorative; keep `alt=""` but verify | P3 |
| 4.5.4 | **No alt-text linter** — Sanity image fields lack `validation: Rule.required()` on alt (Phase 9 dig-in) | P2 |
| 4.5.5 | **Mentor headshots, course thumbnails, alumni photos** — sample audit needed. Likely many use `alt={person.name}` or `alt={course.title}` which is acceptable. | P3 — Phase 9 + Cycle 2 Sprint 3 |

---

## 4.6 Internal anchor diversity

**9 occurrences** of "Learn More" / "View Details" / "Click here" / "Read more" across the codebase. That's low — good baseline.

Sample inspection of CTA links from city-course component family:
- "View Software Testing Course Curriculum" — keyword-rich ✅
- "Book a Free Demo" — action ✅
- "Download Brochure" — action ✅
- "View Placement Stories" — semi-keyword ✅

| # | Issue | Severity |
| --- | --- | --- |
| 4.6.1 | **9 generic-anchor occurrences** scattered — replace with keyword-rich anchors | P3 (low-blast); Cycle 2 Sprint 3 |
| 4.6.2 | **Sample anchor diversity audit (Phase 7) needed** — full link-graph not yet built | P2 — deferred Phase 7 |
| 4.6.3 | **Footer link anchor diversity unknown** — Footer/Header components import `next/link` extensively; need to audit anchor strings | P2 — Phase 7 |

---

## 4.7 Outbound link `rel` audit

**5 lead-form components** use raw `<a href="https://cinutedigital.com/privacy-policy">` (already BLG-028) — **no `rel`** attribute. Privacy-policy is an internal link masquerading as external (because non-www). Once BLG-028 fix lands (use `<Link href="/privacy-policy">`), the rel question goes away.

### External links sampling

- LinkedIn social — `target="_blank"` + likely no `rel="noopener noreferrer"`
- YouTube embed — handled by `react-calendly` modal
- Calendly — third-party iframe (separate concern)
- Hiring partner links — sample needed

| # | Issue | Severity |
| --- | --- | --- |
| 4.7.1 | **External links need `rel="noopener noreferrer"` for security + `rel="ugc"` for user-generated content (none expected here)** | P2 — Cycle 2 Sprint 3 audit all `target="_blank"` |
| 4.7.2 | **`rel="sponsored"` for affiliate program links** — applicable to `/cdpl-affiliate-program` external partner links if any | P3 |

---

## 4.8 Content depth audit

Phase 1 §1.4 established that course detail page content is largely in `dynamic({ ssr: false })` sections (BLG-004). Even if those sections contain 1500+ words of curriculum content (per the data files in `src/data/*Data.ts`), **none of that content is in the server-rendered HTML**. So crawler-visible content depth is:

| Template | Visible to JS-crawler | Visible to non-JS crawler (AI) |
| --- | --- | --- |
| Home | ~800-1000 words (Hero + Trust + Featured + Why + FAQ all SSR'd) | ~400 words (just hero card grid) |
| Course detail | 2000+ words (Hero + ssr:false sections) | **~150 words** (just hero) |
| City-course | ~1500 words | ~500 words (hero + breadcrumb visible, sections ssr:false?) — needs verification |
| Blog post | varies (Portable Text from Sanity, server-rendered) | full content visible |
| About | ~1000 words (FAQ + sections SSR'd) | ~1000 words |
| Contact | ~500 words | ~500 words |
| Mock-test landing | TBD | TBD |
| Certifications (AAA/ACTD/ISTQB) | TBD | TBD |

### Content-depth issues

| # | Issue | Severity |
| --- | --- | --- |
| 4.8.1 | **Course detail pages drop from ~2000 words (with JS) to ~150 words (without JS)** — AI crawlers see only the hero. **Single biggest content-depth issue** — same root cause as BLG-004. | **P0** (already BLG-004) |
| 4.8.2 | **City-course pages content depth unverified** — need to inspect whether sub-sections (curriculum, projects, FAQ) are SSR'd or ssr:false | P1 (BLG-NEW) — read remaining city-course sections in Phase 6 |
| 4.8.3 | **Blog posts use Portable Text from Sanity** — content depth depends on author behaviour. Likely 800-2000 words typical. ✅ |  — | |
| 4.8.4 | **Legal pages probably <500 words** — acceptable for "thin content" because intent is utility, not ranking | — | |
| 4.8.5 | **Mock-test landing page word count unknown** — likely thin (functional page). Should be expanded with "What is ISTQB? Why take a mock test?" content for ranking. | P2 — Cycle 2 Sprint 6 |

---

## 4.9 Keyword placement audit (per money-page)

Sample analysis for **`/courses/software-testing-course/manual-testing-course`**:

| Surface | Content | Keyword? |
| --- | --- | --- |
| URL slug | `/courses/software-testing-course/manual-testing-course` | ✅ contains "manual testing course" |
| `<title>` | "Manual Testing Course with Placement \| QA Training Mumbai" | ✅ Primary + Secondary (Mumbai) + Tertiary (Placement) |
| H1 (from HeroManualTesting.tsx — TBD) | likely "Manual Testing Course with 100% Placement" | ✅ probable |
| First 100 words of body | TBD — read | likely keyword-rich (badge "India's #1 Software Testing & Data Science Training Institute") |
| Meta description | "Master Manual Testing in 12 weeks. ISTQB prep, live projects…" | ✅ primary + LSI (ISTQB, Jira, Agile) |
| OG image alt | Defaults to title | ✅ |
| Schema name | "Manual Testing Course with 100% Placement Support" | ✅ |
| Internal anchors pointing here | Sample from blog/courses/home — TBD Phase 7 | TBD |

### Per-page Sample comparison (Phase 4 spot-checks)

| Money page | URL has KW? | Title has KW? | Meta has KW? | H1 has KW? | Score |
| --- | --- | --- | --- | --- | --- |
| `/courses/.../manual-testing-course` | ✅ | ✅ | ✅ | (TBD) | 4/4 expected |
| `/courses/.../automation-testing-course` | ✅ | ✅ | (TBD) | (TBD) | likely 4/4 |
| `/courses/.../python-course` | ✅ | ✅ ("Python Programming Course in Mumbai") | (TBD) | (TBD) | likely 4/4 — but title too long (BLG-NEW per 4.1) |
| `/courses/ds-ml-courses/data-science-course` | ✅ | ✅ ("Advanced Data Science…") | (TBD) | (TBD) | likely 4/4 — title too long |
| `/courses/ds-ml-courses/generative-ai-course` | ✅ | ✅ ("Deep Learning, NLP & Gen AI Course Mumbai") | (TBD) | (TBD) | ✅ |
| `/courses/bi-courses/power-bi-course` | ✅ | (TBD) | (TBD) | (TBD) | likely 4/4 |
| `/courses/bi-courses/data-analytics-with-tableau` | ✅ | ✅ ("Data Analytics with Tableau Course \| 20-Hour Training \| Mumbai \| CDPL") | (TBD) | (TBD) | ✅ but title too long |
| `/(city-courses)/[slug]` | ✅ (slug includes city) | ✅ (per data) | ✅ (per data) | ✅ (per data) | ✅ |
| `/blog/[slug]` | varies | varies (Sanity) | varies (Sanity) | varies | content-team responsibility |

> **Overall verdict on keyword placement:** strong. Course pages are keyword-targeted properly. Main issues are: title length (BLG-NEW), brand-mismatch (mock-test/istqb-registration), and unverifiable trust claims in descriptions.

---

## 4.10 LSI / entity coverage

Sampled course-detail metadata for LSI keywords:

**Manual Testing course** (`page.tsx:11-28`):
- "manual testing course", "qa testing course", "manual testing training", "qa certification course", "testing course with placement", "qa manual tester", "quality assurance training", "QA training for beginners", "software testing course with placement", "manual testing certification", "QA testing course online", "learn manual testing", "software testing training", "QA jobs for freshers", "manual testing syllabus", **"ISTQB foundation level course"**

✅ Excellent LSI coverage: manual/QA/quality assurance, certification, freshers, syllabus, ISTQB

**Python course / Java course / Data Science / GenAI** — similar LSI breadth (each ~16 keyword phrases per page).

| # | Verdict |
| --- | --- |
| 4.10.1 | LSI keyword coverage is **strong** across course pages. ✅ |
| 4.10.2 | **Missing entity reinforcement:** no schema explicitly mentions "Mumbai", "India", "career change", "industry mentor" as entities. These appear in keywords arrays (which Google deprecated weight for) but **NOT in JSON-LD `keywords` or `about` fields** — Phase 5 will address. | P2 |
| 4.10.3 | City-course pages should reinforce city as entity. Per [(city-courses)/[slug]/page.tsx:97-108](../../src/app/(city-courses)/[slug]/page.tsx#L97) — additionalKeywords includes city variants. ✅ |  — | |

---

## 4.11 Search-intent match audit

| Template | Likely intent | Match? |
| --- | --- | --- |
| `/` | Brand + transactional (looking up CDPL) | ✅ matches |
| `/courses/<category>` | Investigational (comparing courses) | ✅ |
| `/courses/<cat>/<course>` | Transactional (ready to enrol) | ✅ — has lead form, brochure, demo CTA |
| `/(city-courses)/[slug]` | High-intent local commercial ("software testing course in Mumbai") | ✅ — has city in title, city in form, location-specific content |
| `/blog/[slug]` | Informational | ✅ |
| `/blog/category/[slug]` | Browsing | ✅ |
| `/blog/all-posts` | Browsing | ⚠️ — likely cannibalises `/blog` |
| `/blog/search` | Navigational (looking for specific topic) | ✅ (noindex correctly) |
| `/about-us` | Investigational | ✅ |
| `/contact-us` | Navigational | ✅ |
| `/our-team` | Trust signal browsing | ✅ |
| `/mentors` | Trust signal browsing | ✅ |
| `/reviews` | Trust signal browsing | ✅ |
| `/locations-we-serve` | Geo-investigational | ✅ |
| `/mock-test` | Functional (taking a mock test) | ✅ but brand mismatch (Testriq) |
| `/aaa-certification`, `/actd-certification`, `/istqb-registration` | Certification commercial | ✅ |
| `/cdpl-affiliate-program` | Affiliate sign-up | ✅ |
| `/cdpl-certificate-validation` | Functional (validate certificate) | ✅ |
| `/jobs/careers` | Internal hiring | ✅ |
| `/jobs/job-openings` | Internal hiring | ✅ |
| `/jobs/live-jobs` | External jobs board | ⚠️ — may compete with Naukri / Indeed |
| `/jobs/placements` | Trust signal (placement record) | ✅ |
| `/events` / `/events/<slug>` | Informational (event details) | ✅ |
| `/services` | B2B (corporate training) | ⚠️ — mixed B2B/B2C signals (per audit brief, should be separate experiences) |

### Search-intent issues

| # | Issue | Severity |
| --- | --- | --- |
| 4.11.1 | **`/services` mixes B2B (corporate training) and B2C signals** — per audit brief, these should be separate experiences. Currently `/services` is the only B2B-leaning page. | P1 (BLG-NEW) — Cycle 2 Sprint 6 |
| 4.11.2 | **`/blog/all-posts` cannibalises `/blog`** — both list all posts | P2 (already BLG-037) |
| 4.11.3 | **`/jobs/live-jobs` is hard to rank against Naukri/Indeed** — niche play. Should reframe as "Placement Alerts curated by CDPL trainers" to lean on E-E-A-T angle, not compete head-on. | P2 (BLG-NEW) — Cycle 2 Sprint 6 content rewrite |

---

## 4.12 Phase 4 issue summary (Backlog seeds — continuing BLG-* series)

| ID | Issue | Severity | Sprint |
| --- | --- | --- | --- |
| **BLG-042** | `/mock-test` and `/istqb-registration` titles say **"Testriq"** instead of CDPL/Cinute Digital — wrong brand shipping to production | **P0** | Cycle 2 Sprint 1 |
| **BLG-043** | ~35 page titles exceed 60 chars — auto-truncator damages content. Manual rewrite needed. | P1 | Cycle 2 Sprint 1 — bulk rewrite |
| **BLG-044** | ~30 pages reference non-defensible claims ("5,000+ placed", "100% placement", "15+ years") in meta description per [_decisions.md](_decisions.md) | **P0** | Cycle 2 Sprint 1 — bulk rewrite |
| **BLG-045** | Mobile home page renders `<h2>` as visible primary heading (desktop renders `<h1>`); semantic mismatch on mobile-first index | P2 | Cycle 2 Sprint 3 |
| **BLG-046** | 4 hero components (`ServicesHeroSection`, `BlogPostHeroSection`, `events/EventHero`, `MentorOutcomesSection`) use `alt=""` on content-bearing images | P2 | Cycle 2 Sprint 3 |
| **BLG-047** | `/courses` route default title is "All Courses" → 18 chars — too short, missing keywords | P2 | Cycle 2 Sprint 1 |
| **BLG-048** | `/services` page mixes B2B (corporate training) + B2C signals; conflicts with audit brief recommendation to separate intent | P1 | Cycle 2 Sprint 6 |
| **BLG-049** | `/jobs/live-jobs` reframe — currently competes head-on with Naukri/Indeed; should lean on "CDPL-curated" angle | P2 | Cycle 2 Sprint 6 |
| **BLG-050** | `/cookies-policy` title 21 chars — too short | P3 | Cycle 2 Sprint 1 |
| **BLG-051** | `/courses/.../api-testing` title has no brand suffix ("API Testing Course with POSTMAN & RestAPIs") | P3 | Cycle 2 Sprint 1 |
| **BLG-052** | Mixed `.png` and `.webp` OG images — convert remaining .png to .webp | P3 | Cycle 2 Sprint 3 |
| **BLG-053** | OG image dimensions not yet verified at 1200×630 — Phase 11 task | P2 | Phase 11 |
| **BLG-054** | City-course H1 quality depends on `courseData` — spot-check 20 cities for keyword density | P2 | Cycle 2 Sprint 6 |
| **BLG-055** | External `target="_blank"` links across the codebase need `rel="noopener noreferrer"` audit | P2 | Cycle 2 Sprint 3 |

---

## 4.13 Phase 4 summary

### ✅ Working

- **Centralised `generateMetadata` factory** with auto-truncation (160 char desc) and title abbreviator
- **Every page has an OG image** declared (44 distinct files in `/og-images/`)
- **Twitter Card `summary_large_image`** consistent across all pages
- **Keyword-rich URL slugs** — no underscores, all kebab-case, descriptive
- **Strong LSI keyword coverage** in course-page keyword arrays (~16 keywords per money page)
- **Search-intent match** is strong across most templates
- **Generic anchor-text usage is LOW** (only 9 occurrences of "Learn More"/"Read more" etc.)
- **`next/link` adoption** at 196 files
- **`next/image` adoption** at 71 files (vs 5 content-bearing raw `<img>` flagged in Phase 2)

### ⚠️ Issues found in Phase 4

**2 P0** (BLG-042 wrong brand on 2 pages, BLG-044 non-defensible claims in 30+ pages), **3 P1**, **6 P2**, **3 P3** — 14 new backlog entries.

### 🚨 Most urgent triage from Phase 4

| # | What | Effort | Win |
| --- | --- | --- | --- |
| 1 | Fix mock-test + istqb-registration brand (BLG-042) | 5 min | Removes confusing "Testriq" brand from 2 production pages |
| 2 | Rewrite 30+ meta descriptions removing non-defensible claims (BLG-044) | 4-6 hrs | Eliminates a regulatory + manual-action risk across the site |
| 3 | Rewrite ~35 titles to fit 50-60 char window (BLG-043) | 4-6 hrs | Restores keyword targeting that auto-truncator damages |

### 📝 Phase 4 → Phase 5 handoff

Phase 5 (Schema audit) will use Phase 4 findings to:
- Validate **`Course` schema price + duration** match the source data (and the data files match the metadata claims)
- Validate **AggregateRating only appears where the 4.9/425 source is authoritative** (per `_decisions.md`)
- Surface entity disambiguation gaps (Mumbai, India, ISTQB, Cinute Digital as named entities in JSON-LD)
- Cross-check that the **wrong-brand pages don't propagate "Testriq" into JSON-LD** (BLG-042)

**Total backlog so far: 55 entries (BLG-001 → BLG-055) across 6 P0 / 16 P1 / 20 P2 / 13 P3.**
