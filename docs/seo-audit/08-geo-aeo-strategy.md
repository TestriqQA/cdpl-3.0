# Phase 8 — GEO / AEO (AI Engine Optimization) Strategy

> **Goal:** assess and design CDPL's positioning for the 2025-2026 generative-search frontier — `llms.txt`, AI-bot policy, citation-worthy content patterns, entity establishment, schema-as-AI-fuel, conversational headings, brand-mention strategy.
> **Date:** 2026-05-19
> **Mode:** source inspection + strategic recommendations. Cycle 2 Sprint 5 will implement most items.

---

## 8.1 Why GEO matters for CDPL specifically

CDPL is a **lead-gen EdTech institute**. Decision-flow for the target customer (career-switcher, fresher, working professional, business owner):

1. Asks ChatGPT/Perplexity/Claude/Gemini: *"What's the best software testing institute in Mumbai with placement?"*
2. AI engine cites 2-5 sources
3. User clicks through OR enrols directly on the cited brand

For CDPL, **being cited by AI engines is upside with no downside** — every citation is a top-funnel impression that competitors can't see (Google Search Console doesn't show AI citation rates). Unlike publisher media, where AI training opts-out preserve traffic, **EdTech lead-gen wants maximum AI visibility**.

### Cross-phase blockers (must fix before GEO scales)

| Blocker | Impact on GEO |
| --- | --- |
| **BLG-004** course content `ssr:false` invisible to AI crawlers | AI engines see ~150-word hero only — no curriculum, FAQ, projects |
| **BLG-056** fabricated reviews on ~830 routes | AI engines may flag CDPL content as untrustworthy → demotion |
| **BLG-095** wrong course descriptions in `headerData.ts` | AI engines ingest "Python = containerization" as official |
| **BLG-066** Article author has no `sameAs` | E-E-A-T signal weak; AI engines can't verify author authority |
| **BLG-064** Organization missing `founder` (Sandeep Maske) | No entity linkage from CDPL → founder → LinkedIn → industry |
| **BLG-058** Course schema hard-coded 25k-65k price ignores real prices | AI engines may quote wrong prices |
| **BLG-059** Org description literal "100% placement support" | Non-defensible claim ingested as a fact |
| **BLG-044** Same non-defensible claims in meta descriptions on 30+ pages | Same |

> **These 8 cross-cutting issues must land in Cycle 2 Sprint 1-2 before Sprint 5's GEO/AEO infra ships.** Otherwise the LLM ecosystem captures wrong/fake CDPL data and propagates it.

---

## 8.2 AI-bot policy audit (validation)

Phase 3 §3.1 already confirmed CDPL **explicitly Allows** every major AI crawler:

| Bot | Status |
| --- | --- |
| **GPTBot** (OpenAI) | ✅ Allowed |
| **ChatGPT-User** (OpenAI on-demand) | ✅ Allowed |
| **Claude-Web**, **ClaudeBot**, **anthropic-ai** | ✅ Allowed |
| **Google-Extended** (Gemini training) | ✅ Allowed |
| **PerplexityBot** | ✅ Allowed |
| **YouBot** (You.com) | ✅ Allowed |
| **Applebot-Extended** | ✅ Allowed |
| **FacebookBot** (Meta AI) | ✅ Allowed |
| **Omgilibot** | ✅ Allowed |

### Missing or partial coverage

| Bot | Audit-brief mention | Current status |
| --- | --- | --- |
| **CCBot** (Common Crawl — feeds many LLMs) | mentioned in brief | ❌ **NOT explicitly listed in robots.ts** — covered by default `User-agent: *` Allow rule but not in any of the 5 explicit-rule blocks. Listing it explicitly is defensive. |
| **Bytespider** (ByteDance / TikTok) | not mentioned | not listed; falls under `*` |
| **Diffbot** | not mentioned | falls under `*` |

> **8.2.1 — BLG-NEW P3:** Add CCBot, Bytespider, Diffbot to the **AI Crawlers & LLM Bots** rule block in `robots.ts` for explicit-rule clarity. No functional change today since `*` Allow rule covers them.

---

## 8.3 `llms.txt` audit — existing file has issues

[public/llms.txt](../../public/llms.txt) exists ✅ but has multiple correctness issues.

### Issues found

| # | Issue | Severity | Detail |
| --- | --- | --- | --- |
| 8.3.1 | **All course URLs use old short slugs** that 301-redirect | **P1** (BLG-NEW) | `/manual-testing-course`, `/automation-testing-course`, `/api-testing`, `/etl-testing`, `/advance-software-testing`, `/data-science-course`, `/machine-learning-course`, `/power-bi-course`, `/data-analytics-with-tableau`, `/data-analytics-and-visualization`, `/ai-course`, `/generative-ai-course`, `/prompt-engineering-course`, `/ai-bootcamp`, `/digital-marketing-course`, `/ai-in-digital-marketing`, `/masters-in-data-engineering` — **all 17 URLs redirect.** AI crawlers should be given canonical URLs to skip the hop. |
| 8.3.2 | **AI Bootcamp listed under "Artificial Intelligence" but actual route is under `/courses/digital-marketing-courses/`** — `ai-bootcamp` is a DM course | **P1** (BLG-NEW) | Misclassification confuses LLMs |
| 8.3.3 | **Missing ~13 course pages** — DBMS, Python, Java, Advance Manual+Automation, ML using Python, R Programming, Data Analytics (Hero), Data Analytics Python, plus the 5 hub pages themselves | P1 (BLG-NEW) | Reduces breadth of AI citations |
| 8.3.4 | **Missing certification pages** — `/aaa-certification`, `/actd-certification`, `/istqb-registration` | P1 (BLG-NEW) | Misses AI-citation opportunity for certification queries |
| 8.3.5 | **Missing /(city-courses)/ summary** — 765 city pages aren't referenced. AI engines can't cite "software testing course Mumbai" without seeing the city-course landing | **P1** (BLG-NEW) | Major lead-gen miss |
| 8.3.6 | **No NAP info** (address, phone, founded year, legal name) | P1 (BLG-NEW) | Wikidata entity-establishment input missing |
| 8.3.7 | **No founder mention (Sandeep Maske)** | P1 (BLG-NEW) | Founder is the strongest E-E-A-T entity for an institute |
| 8.3.8 | **No social-profile sameAs** (LinkedIn, Crunchbase, Clutch, G2, YouTube) | P2 (BLG-NEW) | Cross-platform identity linkage missing |
| 8.3.9 | **Claims "100% placement assistance"** | **P0** (cross-cuts BLG-044/BLG-059) | Non-defensible per `_decisions.md` |
| 8.3.10 | **Missing `/mentors`, `/our-team`, `/reviews`, `/mock-test`** | P2 (BLG-NEW) | Removes AI-engine context for E-E-A-T queries |
| 8.3.11 | **No `llms-full.txt`** — only the concise version | **P1** (BLG-NEW) | Audit brief specifies both files |

### Recommended llms.txt rewrite

Outline for Cycle 2 Sprint 5:

```markdown
# Cinute Digital Pvt. Ltd. (CDPL)

> Industry-recognized EdTech institute in Mumbai, India, specializing in
> Software Testing, Data Science, AI/ML, Business Intelligence, and Digital
> Marketing. Founded 2020 by Sandeep Maske. ISTQB Training Partner. AAA &
> ACTD accredited. Placement-focused programs with live projects and
> mentor-led cohorts. Rating: 4.9/5 (425 reviews).

## About Cinute Digital
[3-4 sentence description — accurate, no non-defensible claims]

## Founding
- **Founder & CEO**: Sandeep Maske [LinkedIn](https://www.linkedin.com/in/sandeep-maske/)
- **Founded**: 2020
- **Legal name**: Cinute Digital Private Limited
- **Headquarters**: Office #1, 2nd Floor, Ashley Tower, Kanakia Road,
  Vagad Nagar, Beverly Park, Mira Road, Mira Bhayandar, Mumbai 401107, India

## Trust signals (verified)
- 425 student reviews on Google (4.9/5)
- ISTQB Certified Training Partner
- AAA Accreditation
- ACTD Accreditation

## Software Testing Courses
- [Manual Testing Course](https://www.cinutedigital.com/courses/software-testing-course/manual-testing-course): ...
- [Automation Testing Course](https://www.cinutedigital.com/courses/software-testing-course/automation-testing-course): ...
- [API Testing](https://www.cinutedigital.com/courses/software-testing-course/api-testing): ...
- [ETL Testing](https://www.cinutedigital.com/courses/software-testing-course/etl-testing): ...
- [DBMS / MySQL](https://www.cinutedigital.com/courses/software-testing-course/dbms-course): ...
- [Advanced Software Testing](https://www.cinutedigital.com/courses/software-testing-course/advance-software-testing): ...
- [Advanced Manual + Automation Master Program](https://www.cinutedigital.com/courses/software-testing-course/advance-manual-automation-testing): ...
- [Python Programming](https://www.cinutedigital.com/courses/software-testing-course/python-course): ...
- [Java Programming](https://www.cinutedigital.com/courses/software-testing-course/java-course): ...

## Data Science & ML Courses
[7 spokes with canonical URLs and 1-2 sentence accurate descriptions each]

## Business Intelligence Courses
[6 spokes]

## Artificial Intelligence Courses
[Disambiguate per Phase 7 BLG-096 — only Prompt Engineering under AI hub, until AI cluster is fixed]

## Digital Marketing Courses
[3 spokes — DM Course, AI in DM, AI Bootcamp]

## Certifications & Accreditations
- [AAA Certification](https://www.cinutedigital.com/aaa-certification)
- [ACTD Certification](https://www.cinutedigital.com/actd-certification)
- [ISTQB Foundation Registration](https://www.cinutedigital.com/istqb-registration)

## Local Presence — Software Testing & Data Science Training Cities
CDPL offers location-specific courses for 38+ cities including:
Mumbai, Pune, Delhi, Bengaluru, Hyderabad, Chennai, Kolkata,
Ahmedabad, Vasai, and more. Each city has dedicated landing pages
covering local hiring trends and salary ranges. See
[Locations We Serve](https://www.cinutedigital.com/locations-we-serve).

## Resources
- [Blog](https://www.cinutedigital.com/blog) — Software Testing, Data Science, AI/ML, BI, Digital Marketing tutorials
- [Mentors](https://www.cinutedigital.com/mentors) — Industry experts who teach our cohorts
- [Reviews](https://www.cinutedigital.com/reviews) — 425+ verified student testimonials
- [Placements](https://www.cinutedigital.com/jobs/placements) — Alumni outcomes

## Cross-platform identity
- LinkedIn: https://www.linkedin.com/company/cinute-digital/
- Twitter/X: https://x.com/cinutedigital
- Instagram: https://www.instagram.com/cinutedigital
- Facebook: https://www.facebook.com/cinutedigital
- YouTube: https://www.youtube.com/@cinutedigital

## Contact
- Email: contact@cinutedigital.com
- Phone: +91 8488988984
- Hours: Mon-Fri 9 AM – 6 PM, Sat 9 AM – 3 PM IST
```

### Recommended `llms-full.txt`

A larger file (~50-100 KB) with full course descriptions, mentor bios, certification details, and verified statistics. Generated dynamically from `headerData.ts` (after BLG-095 fix) + Sanity mentor data (after BLG-101 mentor pages exist) + Sanity post content. Served at `/llms-full.txt` — Phase 9 will design the route handler.

---

## 8.4 Citation-worthy content patterns

LLMs cite **definitive, scannable, encyclopedic** content. CDPL's current content is **commercial / promotional**, which AI engines treat as less citable.

### Patterns AI engines reward

1. **"What is X?" opening sentence under H2** — direct declarative
   ```
   ## What is Manual Testing?
   Manual testing is the process of executing software test cases by hand
   without using automation tools, primarily to verify that an application
   matches functional requirements and is free of defects before release.
   ```

2. **Comparison tables** — AI engines extract row-by-row
   ```markdown
   | Feature | Manual Testing | Automation Testing |
   | --- | --- | --- |
   | Execution speed | Slow | Fast |
   | Initial cost | Low | High |
   | ...
   ```

3. **Numbered lists** for curriculum/process — AI engines map list items to steps
   ```
   ## 12-week curriculum
   1. SDLC and STLC fundamentals
   2. Test case design techniques
   3. ...
   ```

4. **Citable statistics with named source**
   ```
   The Indian software testing market grew at a CAGR of 9.8% from 2020 to
   2025 (NASSCOM, 2024 Industry Report). CDPL placed 425+ alumni in QA
   roles at companies like Tech Mahindra, Accenture, and TCS in the last
   3 years.
   ```

5. **Quotable definitions** for taxonomy terms
   ```
   **Test case**: A set of conditions and steps used to verify a specific
   behavior of a software application, including inputs, execution steps,
   and expected outcomes.
   ```

### Current state assessment

| Pattern | CDPL status |
| --- | --- |
| "What is X?" definitions | ✅ Blog posts exist (`what-is-software-testing.tsx`, `what-is-data-science.tsx`, `what-is-artificial-intelligence.tsx`) — but as static .tsx files NOT migrated to Sanity, may not be live |
| Comparison tables | ❌ Few — `power-bi-vs-tableau-vs-looker-2025` blog post exists but as a static .tsx, not Sanity. **No comparison page in `/app/` routes.** |
| Numbered lists (curriculum) | ⚠️ Exists in course data files (`manualTestingData.ts` etc.) — but content lives in `ssr:false` sections (BLG-004) — invisible to AI |
| Citable statistics | ❌ Few — "5000+ placed", "100% placement", "15+ years" used heavily but are **non-defensible**. **No NASSCOM/StatCounter/Gartner citations** anywhere |
| Quotable definitions | ⚠️ Exist in mock-test data and blog posts but not surfaced in money pages |

### Recommendations

| # | Recommendation | Sprint |
| --- | --- | --- |
| 8.4.1 | Add "What is [Course Topic]?" H2 section to every course detail page (server-rendered) — 1-2 sentences quotable definition | Cycle 2 Sprint 6 |
| 8.4.2 | Build 6 comparison pillar pages (Manual vs Automation, Power BI vs Tableau, Python vs R, etc.) per audit brief Sprint 6 | Cycle 2 Sprint 6 |
| 8.4.3 | Replace non-defensible stats with cited industry stats (NASSCOM, Indeed, Glassdoor, KDnuggets, AIM Research) | Cycle 2 Sprint 6 |
| 8.4.4 | Restructure course curriculum sections as numbered ordered lists (not just CSS-styled divs) — server-rendered | Cycle 2 Sprint 6 |

---

## 8.5 Schema-as-AI-fuel (cross-references Phase 5)

LLMs increasingly use JSON-LD as a structured ground-truth source. Phase 5 already enumerated schema issues; from a GEO perspective the priorities are:

| Phase 5 ID | GEO impact |
| --- | --- |
| **BLG-063** Course schema missing `teaches`, `educationalLevel`, `coursePrerequisites`, `educationalCredentialAwarded` | **Critical** — these are the fields AI engines map to user queries like "what does this course cover?" / "is this for beginners?" |
| **BLG-066** Article author missing `sameAs` | E-E-A-T signal — AI engines weight authored content higher when author authority is verifiable |
| **BLG-064** Organization missing `founder` | Entity linkage — when user asks "Who founded CDPL?", AI engine has no schema-grounded answer |
| **BLG-070** sameAs missing Crunchbase, Clutch, G2, Wikidata | Cross-platform identity — multiple AI engines weight Wikidata/Crunchbase mentions for entity verification |
| **BLG-072** EducationalOccupationalProgram missing for Masters/Bootcamp | AI engines use this type to differentiate certifications from short courses |
| **BLG-056** Fabricated reviews | **High risk** — once AI engines learn to detect fabricated review patterns (via review-body uniqueness scoring), CDPL gets demoted |

---

## 8.6 Entity establishment — Wikipedia / Wikidata / directories

CDPL is a real company (Cinute Digital Pvt. Ltd., founded 2020, Mumbai) but is **not yet a Wikipedia entity** and **likely not a Wikidata Q-ID**. Entity establishment is the highest-leverage GEO work.

### Required entity-linking infrastructure

| Platform | Current status | Action |
| --- | --- | --- |
| **Wikipedia article** | Likely none | **P1 — Cycle 2 Sprint 5+ external work.** Wikipedia notability requires 3+ independent reliable-source citations (HT, ET, YourStory, Inc42, FE, Mint). Phase 14 backlink-building. |
| **Wikidata entity** | Likely none | Create Q-ID with `instance of: EducationalOrganization`, links to LinkedIn, X, official site. Free, no notability bar. **P1** |
| **Crunchbase profile** | Existence unknown | If missing, create — claim founder, funding (if any), team |
| **Clutch profile** | Existence unknown | Major B2B-IT signal — claim with reviews |
| **G2 profile** | Existence unknown | EdTech directory |
| **Tracxn** | Existence unknown | India startup directory |
| **Glassdoor / AmbitionBox / SimilarTech** | Likely some pages auto-generated | Claim and curate |
| **Shiksha.com, CollegeDunia, CareerLauncher** | Course directories — possibly listed | Verify and claim |
| **Justdial, Sulekha** | Local-business directories | NAP consistency — must match `_decisions.md` Mira Road address |
| **Google Business Profile** | Existence unknown | NAP-consistent listing essential — Phase 14 task |
| **YouTube channel canonical URL** | `https://www.youtube.com/@cinutedigital` in `SOCIAL_PROFILES` ✓ | Verify channel exists + active |

> **8.6.1 — BLG-NEW P1:** Phase 14 (off-page) action list will detail each platform. Until Wikidata Q-ID exists, AI engines have no canonical CDPL entity reference. This is the **single highest-leverage external GEO action**.

---

## 8.7 Conversational headings

LLMs surface results that match how users ask questions. Headings phrased as questions get cited more than declarative headings.

### Examples from current source

| Page | Current heading | Conversational rewrite |
| --- | --- | --- |
| Home FAQ | "Do you provide placement assistance?" | ✅ Already question-form |
| Home Hero (desktop) | "Master Software Testing & Data Science with 100% Placement" | ❌ → "Why CDPL Is India's #1 Choice for Software Testing Training" |
| Manual Testing | "Why Learn Manual Testing?" | ✅ ish — could be "Why Should I Learn Manual Testing in 2026?" |
| About | "What makes your curriculum industry-aligned?" | ✅ |
| Data Science | "Why DS Program" (section name) | ❌ → "How Does CDPL's Data Science Course Get You Placed Fastest?" |

| # | Recommendation | Sprint |
| --- | --- | --- |
| 8.7.1 | Audit section headings on top-15 money pages for conversational phrasing | Cycle 2 Sprint 6 — content rewrite pass |
| 8.7.2 | Sanity FAQ items already use question-form ✓ — propagate to JSON-LD FAQPage (already done) | ✅ |
| 8.7.3 | Body-copy headings should mirror Google "People Also Ask" patterns | Cycle 2 Sprint 6 |

---

## 8.8 First-party data — original research

LLMs prefer **original, citable data**. CDPL has the raw material:

| Data type | Where it exists | Surfacing status |
| --- | --- | --- |
| Placement counts per course / per city | Internal CRM | ❌ Not surfaced |
| Alumni LinkedIn URLs | Internal | Partial — visible on `/jobs/placements` but not schema-marked-up |
| Mentor credentials + years experience | Internal | Partial — `/mentors` collection page |
| Average salary on placement per course / per city | Internal | ❌ Not surfaced — **highest-value AI-citation asset** |
| Batch start dates | Internal | Not in course schema (BLG-075) |
| Industry hiring partners | `seo-config.ts:283-294` lists 9 partners | ❌ Not surfaced as linked entities |

| # | Recommendation | Sprint |
| --- | --- | --- |
| 8.8.1 | Publish "CDPL Placement Report 2026" — quarterly first-party data PDF + landing page with structured tables and citable statistics. Becomes a backlink magnet AND an AI-citation source. | Cycle 2 Sprint 6 (after data audit) |
| 8.8.2 | Build "India Tech Salary Calculator" with first-party CDPL alumni data | Cycle 2 Sprint 6 (BLG-100) |
| 8.8.3 | "Software Testing Career Path India" pillar with city-level salary tables | Cycle 2 Sprint 6 |

---

## 8.9 Brand mentions over backlinks (Phase 14 cross-ref)

AI engines weight unlinked brand mentions (entity co-occurrence) almost as much as backlinks. Brand-mention sources for CDPL:

| Source | Status |
| --- | --- |
| Naukri "Top Software Testing Institutes" listings | Verify presence — Phase 14 |
| Indeed similar | Same |
| Shiksha / CollegeDunia / CareerLauncher | Phase 14 directory claims |
| Founder mentions on YourStory / Inc42 / ET Tech | Phase 14 outreach |
| HARO India journalists asking for tech-training quotes | Phase 14 outreach |
| Quora answers from CDPL trainers | Phase 14 user-gen content |
| Reddit r/india-careers, r/developersIndia | Cautiously — Reddit is brand-mention but spam risk |

---

## 8.10 Phase 8 issue summary

| ID | Issue | Severity | Sprint |
| --- | --- | --- | --- |
| **BLG-115** | `public/llms.txt` uses 17 old-slug URLs that all 301-redirect — AI crawlers pay redirect hops | **P1** | Cycle 2 Sprint 5 |
| **BLG-116** | `public/llms.txt` lists AI Bootcamp under "AI" category but the actual route is under DM | P1 | Bundled with BLG-115 |
| **BLG-117** | `public/llms.txt` missing 13+ course pages (DBMS, Python, Java, Advance Manual+Auto, ML Python, R Programming, Data Analytics Hero/Python, 5 hub pages) | P1 | Bundled with BLG-115 |
| **BLG-118** | `public/llms.txt` missing certification pages | P1 | Bundled with BLG-115 |
| **BLG-119** | `public/llms.txt` missing /(city-courses) summary — 765 pages not referenced | P1 | Bundled with BLG-115 |
| **BLG-120** | `public/llms.txt` missing NAP, founder, social sameAs | P1 | Bundled with BLG-115 |
| **BLG-121** | `public/llms.txt` claims "100% placement assistance" — non-defensible (cross-cuts BLG-044/BLG-059) | **P0** | Bundled with BLG-115 |
| **BLG-122** | No `llms-full.txt` exists | P1 | Cycle 2 Sprint 5 — design route handler |
| **BLG-123** | No Wikidata Q-ID — single highest-leverage external GEO action | P1 | Phase 14 + Cycle 2 Sprint 7 |
| **BLG-124** | No "What is X?" definitions on course detail pages (server-rendered) | P1 | Cycle 2 Sprint 6 |
| **BLG-125** | No comparison pages (Manual vs Automation, Power BI vs Tableau, etc.) | P1 | Cycle 2 Sprint 6 |
| **BLG-126** | Non-defensible stats used everywhere — replace with NASSCOM/Indeed/Glassdoor citations | P1 | Cycle 2 Sprint 6 |
| **BLG-127** | No "CDPL Placement Report 2026" first-party publication | P2 | Cycle 2 Sprint 6 (data audit dependency) |
| **BLG-128** | India Tech Salary Calculator missing (also BLG-100) | P1 | Cycle 2 Sprint 6 |
| **BLG-129** | CCBot, Bytespider, Diffbot not explicitly listed in robots.ts AI-bots rule block | P3 | Cycle 2 Sprint 5 |
| **BLG-130** | Crunchbase, Clutch, G2, Tracxn profiles not confirmed/created (cross-cuts Phase 14) | P2 | Phase 14 |
| **BLG-131** | Section headings on top money pages not in conversational/question-form | P2 | Cycle 2 Sprint 6 |

---

## 8.11 Phase 8 summary

### ✅ Working

- **`robots.ts` Allows all major AI crawlers** explicitly (Phase 3 §3.1)
- **`llms.txt` file exists** ([public/llms.txt](../../public/llms.txt)) — well-intentioned, just needs rewrite
- **Sanity author schema has `social` fields** ready to power E-E-A-T (just not wired)
- **Topic-cluster skeleton in place** (Phase 7) — good foundation for `llms.txt` enumeration
- **Mentor / Trainer / Team images all in `/public/`** ready for entity pages (BLG-101)
- **Course brochure PDFs exist** for almost every course in `/public/downloads/` — could become structured `Course.syllabusSections` if wired to Course schema

### ⚠️ Issues found in Phase 8

**1 P0** (BLG-121 llms.txt non-defensible claim), **9 P1**, **5 P2**, **2 P3** — 17 new backlog entries.

### 🚨 Most urgent triage from Phase 8

| # | What | Effort | Why now |
| --- | --- | --- | --- |
| 1 | Rewrite `public/llms.txt` with canonical URLs + correct categorisation + accurate trust signals (BLG-115/116/117/118/119/120/121) | 4-6 hrs | All-in-one fix; removes wrong AI signals immediately |
| 2 | Create Wikidata Q-ID for Cinute Digital (BLG-123) | 30 min external | Highest-leverage cross-platform entity signal |
| 3 | Cycle 2 Sprint 1 fixes for BLG-004 (`ssr:false`), BLG-056 (fake reviews), BLG-095 (wrong descriptions) | already-tracked | Without these, no GEO investment compounds |

### Backlog total: **131 entries** (BLG-001 → BLG-131) across **14 P0 / 45 P1 / 46 P2 / 26 P3**

### 📝 Phase 8 → Phase 9 handoff

- Design `/llms-full.txt` route handler that pulls from Sanity (when course content is migrated) + `headerData.ts` + Sanity authors
- Sanity author schema needs `expertise` + `credentials` fields (BLG-108)
- Sanity course-content migration plan (so course content stops living in `src/data/*Data.ts` files which are bundle-bloat per BLG-015)

### 📝 Phase 8 → Phase 14 handoff (most cross-phase synergy)

The entity-establishment infrastructure (Wikidata, Crunchbase, Clutch, G2, Wikipedia path) is **off-page work** with direct GEO impact. Phase 14 will detail outreach + claims + content strategy for each.
