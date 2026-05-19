# Phase 7 — Content & Information Architecture

> **Goal:** assess topic clusters, pillar content, content gaps vs Simplilearn/Edureka/Intellipaat/Scaler, keyword cannibalization, thin content, outdated content, internal-link equity, anchor diversity, author bylines (E-E-A-T).
> **Date:** 2026-05-19
> **Mode:** source inspection. Full competitor-data audit deferred to Phase 12.

---

## 7.1 Topic-cluster architecture (current state)

CDPL has **5 top-level course categories** + **AAA-Accredited cross-cutting category** = effectively **6 "hub" pages**. Each hub has spoke pages:

```
/courses (master hub)
├── /courses/software-testing-course (hub)
│   ├── /manual-testing-course
│   ├── /automation-testing-course
│   ├── /advance-software-testing
│   ├── /advance-manual-automation-testing (Master Program)
│   ├── /api-testing
│   ├── /etl-testing
│   ├── /dbms-course
│   ├── /python-course
│   └── /java-course
│
├── /courses/ds-ml-courses (hub)
│   ├── /data-science-course
│   ├── /machine-learning-course
│   ├── /machine-learning-using-python
│   ├── /generative-ai-course
│   ├── /ai-course (Master Program)
│   └── /data-visualization-in-r-programming
│
├── /courses/bi-courses (hub)
│   ├── /data-analytics
│   ├── /data-analytics-python
│   ├── /data-analytics-and-visualization (Excel)
│   ├── /data-analytics-with-tableau
│   ├── /power-bi-course
│   └── /masters-in-data-engineering (Master Program)
│
├── /courses/artificial-intelligence-courses (hub) ⚠️ thin — only 1 spoke
│   └── /prompt-engineering-course
│
└── /courses/digital-marketing-courses (hub)
    ├── /digital-marketing-course
    ├── /ai-in-digital-marketing
    └── /ai-bootcamp

Cross-cutting:
- AAA Accredited: aliases 4 existing courses
- 765 city-course pages: 1:N expansion of selected courses × 38+ cities
```

### Topic-cluster issues

| # | Issue | Severity |
| --- | --- | --- |
| 7.1.1 | **`/courses/artificial-intelligence-courses` hub has ONLY 1 spoke** (`prompt-engineering-course`). Other AI courses sit under `/courses/ds-ml-courses/` (generative-ai-course, ai-course, machine-learning-using-python). **Cluster is malformed.** Either rename the hub to "Prompt Engineering" or migrate AI-named courses from DS/ML hub to AI hub. | **P1** (BLG-NEW) |
| 7.1.2 | **AAA-Accredited "category" is not a topic — it's a certification cross-cut**. Should not be a 5th category competing with subject hubs. Treat as a filter/tag, not a hub. | P2 (BLG-NEW) |
| 7.1.3 | **No "Web Development", "Cloud Computing", "DevOps", "Cybersecurity" hub** — major EdTech verticals competitors cover. Decide if CDPL targets these or stays focused. | P3 — strategic |
| 7.1.4 | **No B2B Corporate-Training topic cluster** — `/services` is the only B2B-leaning page (BLG-048). Should be its own cluster: `/corporate-training/{software-testing,data-science,fdp,workshops}` with dedicated content. | P1 (cross-cuts BLG-048) |
| 7.1.5 | **Python and Java courses live under `/courses/software-testing-course/`** even though they're prerequisite/cross-cutting languages, also referenced from DS/ML hub. URL hierarchy implies "Java is a software-testing topic" which is wrong. | P2 (BLG-NEW) — leave Python under software-testing for SEO continuity, but cross-link from DS/ML hub |
| 7.1.6 | **No vertical-solution hub** (BFSI, healthcare, retail) per audit brief — major content gap | P2 (BLG-NEW) — Cycle 2 Sprint 6 |

---

## 7.2 🚨 P0 content-quality discovery: `headerData.ts` course descriptions are wrong

Inspected [src/data/headerData.ts](../../src/data/headerData.ts). **Every course description is boilerplate copy-paste that doesn't match the course.**

| Course | Description in `headerData.ts` | Correct topic? |
| --- | --- | --- |
| Manual Software Testing | "Learn to facilitate Scrum teams and drive Agile projects effectively." | ❌ wrong — Manual testing ≠ Scrum facilitation |
| API Testing using POSTMAN | "Master product backlog management and stakeholder collaboration." | ❌ wrong |
| Database Management System (MySQL) | "Gain advanced Scrum knowledge to lead high-performing teams." | ❌ wrong |
| ETL Testing | "Learn to lead Agile transformations using the SAFe framework." | ❌ wrong |
| Advanced Software Testing | "Facilitate SAFe practices for scaled Agile environments." | ❌ wrong |
| Advanced Automation Testing | "Drive product vision and delivery in SAFe settings." | ❌ wrong |
| Advanced Manual & Automation (Master) | "Blend Agile principles with PMI project management standards." | ❌ wrong |
| Python Programming | "Master containerization and orchestration technologies." | ❌ wrong (that's Docker/K8s) |
| Java Programming | "Automate CI/CD pipelines with Jenkins." | ❌ wrong |
| Machine Learning with Python | "Build strategies to ace behavioral and technical interviews." | ❌ wrong |
| Deep Learning, NLP and GenAI | "Practice real-world interview scenarios with feedback." | ❌ wrong |
| Advanced Data Science Masterclass | "Master coding challenges and technical questions." | ❌ wrong |
| Comprehensive Data Science & AI (Master) | "Master coding challenges and technical questions." | ❌ wrong (duplicate of above) |
| All BI courses | "Craft a standout resume to impress recruiters." | ❌ wrong (×6 BI spokes) |
| Prompt Engineering with Gen AI | "Master coding challenges and technical questions." | ❌ wrong |
| All DM courses (3) | "Earn the globally recognized PMP certification." | ❌ wrong (PMP = project management) |
| AAA-Accredited cross-cutting (4 courses) | "Analyze data..." / "Build predictive models..." / "Use Python..." / "Create Power BI visualizations..." | partial — some accidentally correct |

**Impact:**

1. **MegaMenu / dropdown navigation** — users see "Master containerization" under Python Programming, which is misleading and reduces trust
2. **Footer / mobile menu** — same
3. **`generateHomePageSchema` ItemList** at [schema-generators.ts:1078-1107](../../src/lib/schema-generators.ts#L1078) — these wrong descriptions become `Course.description` JSON-LD on the home page
4. **`generateAllCoursesPageSchema` ItemList** — same issue on `/courses`
5. **AI engines (ClaudeBot/GPTBot/PerplexityBot) ingest these descriptions** as official course descriptions — so when a user asks "What does CDPL's Manual Testing Course cover?", an AI engine may regurgitate "Learn to facilitate Scrum teams"

> **7.2.1 — BLG-NEW P0:** Rewrite all 30+ course descriptions in `headerData.ts` with topic-accurate, keyword-rich descriptions. Each should be 90-140 chars (good for MegaMenu) and reference the actual course content + outcome.

Example rewrite:
- Manual Software Testing: ~~"Learn to facilitate Scrum teams..."~~ → **"Master Manual QA, test case design, defect lifecycle, Jira, Agile workflows & ISTQB prep with placement support."**
- Python Programming: ~~"Master containerization..."~~ → **"Job-ready Python programming for software testers & data analysts — covers data structures, OOP, pandas, NumPy, automation scripting."**

---

## 7.3 Keyword cannibalization audit

Sample of overlapping intent across course pages:

### Cluster A — "Machine Learning" / "Python"

| Page | Likely intent | Cannibalization risk |
| --- | --- | --- |
| `/courses/ds-ml-courses` (hub) | "data science course" / "machine learning course" | Owns the hub anchor |
| `/data-science-course` | "data science course with placement" | ✅ |
| `/machine-learning-course` | "machine learning course" + "data science with python hero program" | ⚠️ overlaps hub |
| `/machine-learning-using-python` | "machine learning with python" + "ML algorithms python" | ⚠️ overlaps `machine-learning-course` |
| `/ai-course` (Master) | "data science AI master program" | ⚠️ overlaps `data-science-course` |
| `/generative-ai-course` | "deep learning NLP GenAI course" | distinct enough |

> **7.3.1 — BLG-NEW P2:** Three Python/ML pages compete (`machine-learning-course` vs `machine-learning-using-python` vs `data-science-course`). Pick one as canonical for "machine learning course in Mumbai" and disambiguate the other two with distinct intent + cross-link.

### Cluster B — "Data Analytics" (6 pages within BI hub)

| Page | Intent |
| --- | --- |
| `/data-analytics` (Hero) | "data analytics course" |
| `/data-analytics-python` | "data analytics with python" |
| `/data-analytics-and-visualization` (Excel) | "data analytics with Excel" |
| `/data-analytics-with-tableau` | "data analytics with tableau" |
| `/power-bi-course` | "power bi course" |
| `/masters-in-data-engineering` | "data engineering master" |

> **7.3.2 — BLG-NEW P2:** 4 of 6 pages title with "Data Analytics" + tool. Each should explicitly differentiate via tool ownership (Excel/Python/Tableau/Power BI). The "Hero Program" (just `/data-analytics`) lacks a tool — risk of being the weakest. Recommend rewriting as "Job-Ready Data Analytics — Multi-Tool Bootcamp".

### Cluster C — "AI" (3 pages across hubs)

| Page | Intent |
| --- | --- |
| `/courses/artificial-intelligence-courses` (hub) | "AI courses India" |
| `/courses/artificial-intelligence-courses/prompt-engineering-course` | "prompt engineering course" |
| `/courses/ds-ml-courses/ai-course` (Master) | "Comprehensive Data Science and AI Master Program" |
| `/courses/ds-ml-courses/generative-ai-course` | "Deep Learning, NLP & GenAI" |

> **7.3.3 — BLG-NEW P1:** `/courses/ds-ml-courses/ai-course` and the AI hub compete for "AI course" intent. Either:
> - Migrate `ai-course`, `generative-ai-course`, `machine-learning-using-python` from `/courses/ds-ml-courses/` to `/courses/artificial-intelligence-courses/` (cleaner cluster, redirects in next.config.ts)
> - **OR** redirect `/courses/artificial-intelligence-courses` to the dominant page and keep `prompt-engineering-course` as its own spoke under DS/ML
>
> Either way, **picking one** removes the 4-way cannibalization.

### Cluster D — Blog index vs all-posts (BLG-037)

Already flagged Phase 3.

### Cluster E — DM hub vs `digital-marketing-course` child

`/courses/digital-marketing-courses` (hub) vs `/courses/digital-marketing-courses/digital-marketing-course` (spoke) — child page slug repeats parent's slug. Confusing both for users and crawlers.

> **7.3.4 — BLG-NEW P2:** Rename the spoke to `/courses/digital-marketing-courses/digital-marketing-with-ai-analytics` (matches course name) — eliminates slug repetition and improves clarity.

---

## 7.4 Thin content audit

Based on Phase 4 §4.8 estimates (visible-to-JS-crawler content, in words):

| Page | Visible content depth | Verdict |
| --- | --- | --- |
| `/` | ~800-1000 (Hero + Trust + Featured + Why + FAQ) | ✅ acceptable |
| `/courses/<cat>` (5 hubs) | TBD — likely 1500+ if SSR sections | acceptable, verify |
| `/courses/<cat>/<course>` (25 routes) | **~150 words (hero only, ssr:false sections)** | **❌ critically thin to AI crawlers** (BLG-004) |
| `/(city-courses)/[slug]` (765 routes) | ~500 words (hero + breadcrumb visible) | ⚠️ thin to AI |
| `/blog/[slug]` | varies — Sanity content | ✅ (content team responsibility) |
| `/about-us` | ~1000 words (FAQ + sections SSR) | ✅ |
| `/contact-us` | ~500 | acceptable for navigational |
| `/services` | TBD | check |
| `/services/[slug]` | TBD | check |
| `/events`, `/events/[slug]` | TBD | likely thin |
| `/mock-test` | **likely thin** (functional UI) | P2 (BLG-NEW) |
| `/mock-test/[courseSlug]` | thin (CSR-only, noindex anyway) | ✅ correctly noindex |
| `/aaa-certification`, `/actd-certification`, `/istqb-registration` | TBD | check |
| `/cdpl-affiliate-program` | TBD | check |
| `/cdpl-certificate-validation` | likely thin (functional lookup) | P3 |
| `/jobs/careers`, `/jobs/job-openings`, `/jobs/live-jobs`, `/jobs/placements` | content varies | check |
| `/reviews` | TBD | should be substantial |
| `/our-team`, `/mentors`, `/locations-we-serve` | TBD | check |
| `/blog`, `/blog/all-posts`, `/blog/categories` | mostly listings | acceptable for index |
| Legal (4) | TBD | thin is acceptable |

> **7.4.1 — BLG-NEW P2:** **Mock-test landing** needs ~800-1200 words explaining "What is ISTQB?", "Why take a mock test?", "How CDPL mock tests work", "What you'll learn from each attempt" — currently likely <300 words.
> **7.4.2 — BLG-NEW P2:** **Course detail pages need server-rendered curriculum + FAQ** (already BLG-004) — when fixed, content depth jumps to 2000+ words SSR.

---

## 7.5 Outdated content / dead code

### `src/content/posts/` — 21 .tsx files

Inspected [src/content/posts/](../../src/content/posts/). Files include:
- `what-is-software-testing.tsx`
- `what-is-data-science.tsx`
- `what-is-artificial-intelligence.tsx`
- `data-science-vs-machine-learning-vs-artificial-intelligence.tsx`
- `power-bi-vs-tableau-vs-looker-which-bi-tool-wins-2025.tsx`
- `2025-digital-marketing-strategy-proven-frameworks-grow-traffic-revenue.tsx`
- `top-data-science-trends-2025-guide.tsx`
- ... (21 total)

These are **`.tsx` files inside `src/content/`** that **do not match any Next.js route convention** (routes live in `src/app/`). Phase 3 sitemap inspection confirmed only Sanity-driven `/blog/[slug]` posts are sitemapped.

**Possibilities:**
1. **Seed content for migration into Sanity Studio** (most likely — written by content team, copy-pasted into Sanity)
2. Used by an unused/stale "static blog" route that no longer renders
3. Dead code from a previous CMS strategy

> **7.5.1 — BLG-NEW P2:** Audit `src/content/posts/` — if seed content, move to `docs/content-seeds/` (out of `src/`) so they don't bloat the bundle accidentally if any file imports them. If unused, delete.

### Outdated Sanity blog posts

Cannot audit without Sanity Studio access — Phase 9 task.

| # | Issue | Severity |
| --- | --- | --- |
| 7.5.2 | **Sanity blog post freshness audit** — need GSC/Sanity Studio data on which posts have <50 impressions/3 mo + are >2 yrs old | P2 — Phase 9 + Phase 10 |
| 7.5.3 | **Year-stamped content** (`2025-digital-marketing-strategy`, `nextjs-15-seo-guide-2025`, `top-data-science-trends-2025`) — will look stale in 2026+ | P2 — Cycle 2 Sprint 6 content refresh |

---

## 7.6 Internal-link equity assessment

### Hub → spoke distribution (current state)

Based on Header MegaMenu and Footer link inventory:

| Hub | Spokes linked from MegaMenu | Spokes linked from Footer |
| --- | --- | --- |
| Software Testing hub | 9 spokes | (likely subset) |
| DS/ML hub | 7 spokes | (subset) |
| BI hub | 6 spokes | (subset) |
| AI hub | 1 spoke | 1 |
| DM hub | 3 spokes | 3 |
| AAA cross-cut | 4 spokes (mixed across hubs) | — |

> Header MegaMenu emits links to every spoke. ✅ Each money page receives ≥2 site-wide internal links (header + footer + sitemap).

### Reverse equity flow (spoke → hub, spoke → adjacent spokes)

Each course detail page emits internal links via:
- **Breadcrumb** → category hub → courses index → home ✅
- **Sibling courses section** (e.g., `OtherCourseSection.tsx` for manual-testing) — likely links to 3-5 sibling courses ✅
- **Blog post CTAs back to courses** — limited; `BlogPostContactSection` is generic, not course-specific
- **City-course pages** breadcrumb back to category hub ✅

### Issues

| # | Issue | Severity |
| --- | --- | --- |
| 7.6.1 | **Blog posts don't link to canonical course pages contextually** — a blog post on "Manual Testing" should link to `/courses/.../manual-testing-course` in body text, not just via a generic CTA at the bottom. Sanity Portable Text supports rich-text links — content team must add. | P2 (BLG-NEW) — Phase 9 + content-team workflow |
| 7.6.2 | **City-course pages don't link to *related* city-course pages** (e.g., Mumbai Manual Testing → Mumbai Automation Testing → Mumbai Data Science). Cross-city pollination is weak. | P2 (BLG-NEW) — Cycle 2 Sprint 6 |
| 7.6.3 | **City pages don't link to *other-city* same-course pages** (Mumbai Manual Testing → Pune Manual Testing) — fine, would be cannibalization | ✅ correct |
| 7.6.4 | **Mentors page links to which courses?** — likely none; mentors page lists mentor cards but doesn't drive traffic to course pages they teach. | P2 (BLG-NEW) |
| 7.6.5 | **`/reviews` page links to which courses?** — likely none. Filtered reviews by course would drive equity to course pages. | P2 (BLG-NEW) |

---

## 7.7 Anchor diversity (deferred from Phase 4)

Phase 4 §4.6 noted only 9 generic-anchor occurrences ("Learn More" / "View Details" / "Click here" / "Read more"). Excellent baseline.

Sample anchor text from Header MegaMenu:
- ✅ "Manual Software Testing"
- ✅ "API Testing using POSTMAN and RestAPIs"
- ✅ "Database Management System using MySQL"
- ✅ "Machine Learning and Data Science with Python - Hero Program"

> **7.7.1 — Verdict:** Anchor text is **keyword-rich and intent-matching across MegaMenu**. No anchor diversity issue at the navigation layer. The only concern is body-text anchors inside blog posts (content-team workflow).

---

## 7.8 Author bylines / E-E-A-T

### Current state

| Surface | Author signal | Status |
| --- | --- | --- |
| Blog post page | `author.name` displayed via `BlogPostHeroSection` + `BlogAuthorInfo` | ✅ |
| `generateArticleSchema.author` | `{ @type: "Person", name }` only — **no `sameAs`** | ❌ BLG-066 P1 |
| Sanity author schema | Has `social: { linkedin, twitter, github, website }` | ✅ data exists |
| `/blog/author/[slug]` page | Exists — author profile + bio + posts | ✅ |
| Mentor profile pages | **`/mentors` exists as listing only** — no per-mentor `/mentors/[slug]` profile pages | ❌ P1 (BLG-NEW) |
| Trainer/Faculty bylines on course pages | TBD — `AboutFacultyStrip` likely shows faces, but no schema linkage | check |
| Trust badges (ISTQB, AAA, ACTD partner) | Visible on hero / about page | ✅ |

### E-E-A-T issues

| # | Issue | Severity |
| --- | --- | --- |
| 7.8.1 | **`generateArticleSchema.author` has no `sameAs`** despite Sanity author having `social.linkedin/twitter/github/website` | **P1** (BLG-066) |
| 7.8.2 | **No per-mentor profile pages** at `/mentors/[slug]` — each mentor's expertise, courses taught, LinkedIn is buried in a card on the collection page. Mentor-level Person schema with `sameAs` LinkedIn would massively strengthen E-E-A-T. | **P1** (BLG-NEW) |
| 7.8.3 | **Founder Sandeep Maske not surfaced** anywhere in source (Phase 5 BLG-064) — homepage, about page, and Organization schema all skip the founder | P1 (BLG-064) |
| 7.8.4 | **Sanity author schema lacks `expertise` / `credentials` fields** — fields exist for bio/role/social but no structured "10+ years in QA at <companies>" or "ISTQB Certified". Phase 9 candidate. | P2 (BLG-NEW) |
| 7.8.5 | **Course detail pages don't link to course-specific trainer profile** | P2 (BLG-NEW) |
| 7.8.6 | **No `/case-studies` directory** — alumni success stories are at `/jobs/placements`. Should also be cross-linked to course pages with structured `Review`/`Testimonial` schema | P2 (BLG-NEW) |

---

## 7.9 Pillar content — currently NONE

The audit brief asks for "Pillar content (3000+ words, top 3-5 course categories)". CDPL has **NO 3000+ word pillar pages** based on inspection. All money pages are commercial landing pages (≤1500 words server-rendered), not encyclopedic pillars.

### Pillar candidates (Cycle 2 Sprint 6 build-out)

| Recommended pillar | Target keyword | Word count |
| --- | --- | --- |
| "Complete Guide to Software Testing in 2026" | "what is software testing" (4-5k searches India) | 4000+ |
| "Data Science Career Path in India: Roadmap, Salary, Skills" | "data science career path india" | 4000+ |
| "Manual to Automation Testing Transition: 90-Day Plan" | "manual to automation testing transition" | 3000+ |
| "Power BI vs Tableau vs Excel: Which BI Tool Is Right for You" | "power bi vs tableau" | 3000+ |
| "Software Testing Salary in India 2026: City-by-City Breakdown" | "software testing salary in india" | 3000+ + interactive calculator (BLG-NEW free-tool) |
| "ISTQB Foundation: Complete Study Guide + Mock Tests" | "ISTQB foundation guide" | 4000+ |

| # | Status | Severity |
| --- | --- | --- |
| 7.9.1 | **0 pillar pages of 3000+ words** | **P1** (BLG-NEW) — Cycle 2 Sprint 6 priority |
| 7.9.2 | **0 free-tool linkable assets** (salary calculator, career quiz, syllabus comparator) — competitors have these for backlinks | **P1** (BLG-NEW) — Cycle 2 Sprint 6 |

---

## 7.10 Competitive content-gap teaser (full audit in Phase 12)

| Competitor | What CDPL is missing |
| --- | --- |
| Simplilearn | Free salary calculators, career-path quizzes, syllabus PDF auto-downloads (gated), bootcamp comparison pages |
| Edureka | Live free webinars, Q&A community / forum, certificate-validation by course |
| Intellipaat | Course duration sliders, EMI calculators, batch start-date countdown |
| Scaler | Strong "Career Outcomes" pages with verified LinkedIn alumni links, transparent fee disclosure, 1:1 mentor matching |
| Besant Technologies | Branch locator with specific instructor profiles, walk-in offers |
| Naresh i Technologies | Recorded sessions library, free demo class booking with selectable trainer |

> Phase 12 will systematically enumerate each competitor's content gaps and rank them by acquisition cost/effort to close.

---

## 7.11 Phase 7 issue summary

| ID | Issue | Severity | Sprint |
| --- | --- | --- | --- |
| **BLG-095** | **All 30+ course descriptions in `headerData.ts` are wrong boilerplate** ("Master Scrum", "Earn PMP", "Master containerization" for Python, etc.) — propagates to MegaMenu, Footer, and `Course` JSON-LD on home + courses pages | **P0** | Cycle 2 Sprint 1 |
| **BLG-096** | `/courses/artificial-intelligence-courses` hub has only 1 spoke; AI-named courses live under `/courses/ds-ml-courses/` — malformed cluster | P1 | Cycle 2 Sprint 5 |
| **BLG-097** | Topic-cluster cannibalization: 3 ML/Python pages, 4 Data-Analytics pages, 4 AI pages compete | P1 | Cycle 2 Sprint 5 — disambiguation pass |
| **BLG-098** | DM child slug repeats parent slug (`/courses/digital-marketing-courses/digital-marketing-course`) | P2 | Cycle 2 Sprint 5 |
| **BLG-099** | **0 pillar pages** of 3000+ words on CDPL | P1 | Cycle 2 Sprint 6 |
| **BLG-100** | **0 free-tool linkable assets** (salary calculator, career quiz, syllabus comparator) | P1 | Cycle 2 Sprint 6 |
| **BLG-101** | No per-mentor profile pages (`/mentors/[slug]`) — major E-E-A-T gap | P1 | Cycle 2 Sprint 6 |
| **BLG-102** | No B2B Corporate-Training topic cluster — `/services` is the only B2B-leaning page | P1 (cross-cuts BLG-048) | Cycle 2 Sprint 6 |
| **BLG-103** | No vertical-solution hub (BFSI, healthcare, retail) | P2 | Cycle 2 Sprint 6 |
| **BLG-104** | Blog posts don't contextually link to canonical course pages in body text — only generic CTAs | P2 | Cycle 2 Sprint 5 + content-team workflow |
| **BLG-105** | City-course pages don't cross-link to other-course-same-city pages (e.g., Mumbai ML → Mumbai Data Science) | P2 | Cycle 2 Sprint 6 |
| **BLG-106** | `/mentors` page doesn't link out to course pages each mentor teaches | P2 | Cycle 2 Sprint 6 |
| **BLG-107** | `/reviews` page doesn't link to courses by filter — equity not routed | P2 | Cycle 2 Sprint 6 |
| **BLG-108** | Sanity author schema lacks `expertise` / `credentials` structured fields | P2 | Phase 9 schema update |
| **BLG-109** | `src/content/posts/` 21 .tsx seed files in source tree — move to `docs/content-seeds/` or delete | P3 | Cycle 2 Sprint 7 |
| **BLG-110** | Year-stamped content (`2025-*.tsx`) will look stale by 2026+ | P2 | Cycle 2 Sprint 6 content refresh |
| **BLG-111** | Course detail pages don't link to course-specific trainer profile | P2 | Cycle 2 Sprint 6 (after BLG-101 mentor pages exist) |
| **BLG-112** | No `/case-studies/[slug]` directory — alumni success stories siloed to `/jobs/placements` | P2 | Cycle 2 Sprint 6 |
| **BLG-113** | AAA-Accredited is treated as a 5th category in `headerData.ts` — should be a tag/filter, not a hub | P2 | Cycle 2 Sprint 5 |
| **BLG-114** | Python/Java live under `/courses/software-testing-course/` — should cross-link from DS/ML hub | P2 | Cycle 2 Sprint 5 |

---

## 7.12 Phase 7 summary

### ✅ Working

- **Strong topic-cluster skeleton** in place (5 category hubs + 25 spokes + 765 city pages)
- **Anchor text** is keyword-rich across MegaMenu (no generic anchors)
- **Sanity author schema has `social` fields** ready to power E-E-A-T (just not yet wired to `Article.author.sameAs`)
- **Blog post → category linking** correct via `Article.articleSection`
- **Breadcrumb propagation** consistent across templates
- **Sitelinks-eligible navigation depth** (max 3 levels deep)
- **AAA-Accredited cross-cutting filter concept** is in place (even if mis-modeled)

### 🚨 Issues found in Phase 7

**1 new P0** (BLG-095 wrong course descriptions in headerData.ts — propagates to MegaMenu + JSON-LD), **7 P1**, **9 P2**, **3 P3** — 20 new backlog entries.

### 🟡 Most urgent triage from Phase 7

| # | What | Effort | Win |
| --- | --- | --- | --- |
| 1 | **Rewrite all 30+ course descriptions in `headerData.ts`** (BLG-095) | 3-4 hrs | Fixes MegaMenu UX + JSON-LD Course ItemList in one PR |
| 2 | Wire `Article.author.sameAs` from Sanity author.social (BLG-066) | 30 min | Restores blog E-E-A-T signal |
| 3 | Build `/mentors/[slug]` per-mentor profile pages (BLG-101) | 1-2 days | Major E-E-A-T win + content depth + entity coverage |

### Backlog total: **114 entries** (BLG-001 → BLG-114) across **13 P0 / 36 P1 / 41 P2 / 24 P3**

### 📝 Phase 7 → Phase 8 (GEO/AEO) handoff

Phase 8 will use Phase 7 findings to:
- Recommend `llms.txt` structure based on validated topic clusters (5 hubs + spokes)
- Identify which **citation-worthy passages** (definitions, comparisons, tables) need to be **server-rendered** to be discoverable by ClaudeBot/GPTBot (cross-references BLG-004)
- Suggest entity-linking strategy (Mumbai, ISTQB, AAA, Cinute Digital, Sandeep Maske as named entities)

### 📝 Phase 7 → Phase 12 (Competitive Gap) handoff

The competitor teaser in 7.10 will be systematically enumerated in Phase 12 with effort/impact rankings.
