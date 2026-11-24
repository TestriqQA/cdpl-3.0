# Course Pricing — Cards + Course Pages

**Status:** approved, not started
**Created:** 2026-11-24
**Price snapshot:** Google Sheet `course detail_v7 sharable`, read 2026-11-24

Goal: show a real price on every course card and every course page, and emit it
in structured data, without hard-coding rupees into 30+ content files.

---

## 1. Decisions (locked with the business)

| Question | Decision |
| --- | --- |
| Where do prices live for the site? | **Sanity** — a new lightweight `coursePrice` document type |
| Where does the business maintain prices? | Google Sheet `course detail_v7 sharable` (ops master), pushed into Sanity by a script |
| What does a card show? | Selling price + struck-through list price + auto-computed `% OFF` chip |
| What does a course page show? | A fee block in the hero **and** a dedicated “Fees & What’s Included” section with its own sticky-nav anchor |
| GST | Neutral note under the price: “GST as applicable” |
| Manual Software Testing conflict | **The sheet wins: ₹30,000 list → ₹24,000.** The FAQ that says ₹15,000 online / ₹18,000 classroom + GST is outdated and must be rewritten |
| ETL Testing, SDET | Deliberately unpriced — not in the sheet / no confirmed fee. Cards and pages must degrade cleanly |
| Two discount tiers (20% / 30%) | Only one number is stored: the 20% price as `price`, the list price as `originalPrice`. The 30% figures stay in the sheet until there is a real tier model |

## 2. Current state

Prices are absent from the live site. `courses-data.tsx` carries placeholder
US-dollar strings (`price: "$299" // estimated`) that were **never rendered** —
`CourseCardData` has no price field and `toCard()` drops it. The course-page
schema has no price either, and the JSON-LD `Offer` is never emitted even though
`generateCourseSchema()` supports it.

| Surface | Cards / pages | Data source | Renders price today |
| --- | --- | --- | --- |
| `/courses` directory | 27 cards | `src/components/courses/courses-data.tsx` | no (fake `$` strings dropped in `toCard()`) |
| 5 category hubs | ~33 cards | `src/data/hubs/*.ts` → `RAW_COURSES` | no |
| Course pages | 27 pages | `src/data/courses/**/*.ts` (`CourseContent`) | no |
| JSON-LD | 27 pages | `courseSchemas()` → `generateCoursePageSchema()` | no — price never forwarded |
| Sanity `course` type | — | `src/sanity/schemas/course.ts` | has `price`/`originalPrice` fields, **0 documents exist** |

Relevant plumbing that already works: `sanityFetch()` (draft-aware, cache-tagged),
`/api/revalidate` (Sanity → `revalidatePath` webhook), and `googleapis` for the
Sheets side.

## 3. Target architecture

```
Google Sheet "course detail_v7 sharable"      ← ops master (bulk edits)
        │  scripts/sync-course-prices.mjs  (manual run, prints a diff)
        ▼
Sanity  project 2bvrjzxq / production         ← content team edits in Studio
        │  GROQ, tag "coursePrice", revalidate 3600
        ▼
src/sanity/lib/course-prices.ts   (server-only)
        ├─→ /courses            prices prop → FilterableCourseSections → CourseCard
        ├─→ 5 category hubs     prices prop → HubCourses → CourseCard
        ├─→ 27 course pages     hero fee block + CoursePricing section
        └─→ JSON-LD             Course.offers / EducationalOccupationalProgram.offers
```

The sheet is not read at request time. It is a staging input for the sync script,
so a broken sheet can never break a deploy.

### 3.1 Sanity document type

```ts
// src/sanity/schemas/course-price.ts
name: 'coursePrice'
fields:
  slug           // string, dropdown of COURSES keys from @/data/courses/registry
                 // → a price can only point at a course page that exists
  price          // number, required, min 0  — selling price
  originalPrice  // number, min 0            — strike-through / discount maths
  note           // string, default "GST as applicable"
  isActive       // boolean, default true
```

Deliberately separate from the `course` type: those documents require a
`coverImage` (with alt) and a 60–280 char `shortDescription`, so seeding 25 of
them for a price rollout would be a content project, not a data task. `course`
stays reserved for the BLG-133 migration; `coursePrice` can be folded into it
later.

### 3.2 Fetch layer

```ts
// src/sanity/lib/course-prices.ts   (new)
export type CoursePrice = { price: number; listPrice?: number; note?: string };

export async function getCoursePrices(): Promise<Record<string, CoursePrice>>;
export async function getCoursePrice(slug: string): Promise<CoursePrice | undefined>;
```

- GROQ: `*[_type == "coursePrice" && isActive]{ "slug": slug, "price": price, "listPrice": originalPrice, "note": note }`
- Through `sanityFetch({ tags: ["coursePrice"], revalidate: 3600 })`.
- Dev-only `console.warn` when a registry slug has no price document, or a
  document points at a slug that is not in `registry.ts` — the two drift modes.

`src/lib/format.ts` (new) exposes `formatINR(n)` built on
`Intl.NumberFormat("en-IN")`, so ₹1,00,000 renders with Indian grouping.

## 4. Work breakdown

### Phase 0 — Model and seed (~0.5 day)

**Gate:** 25 `coursePrice` documents exist in Studio.

- Add `src/sanity/schemas/course-price.ts`, register it in `src/sanity/schema.ts`.
- Write `scripts/sync-course-prices.mjs`: authenticates with the service account
  already in `.env.local` (`GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`),
  reads the tab `course detail_v7 sharable` (sheet id
  `1uZNEQqpbz8jPLU0HU8OXfqGCK8mQ87FOnqV35MXswzc`), maps course names to registry
  slugs using the table in §5, and creates/updates one document per slug. It must
  print a diff and require an explicit `--write` flag; a dry run is the default.

### Phase 1 — Fetch layer (~0.5 day)

- `src/sanity/lib/course-prices.ts` as above.
- `src/lib/format.ts` with `formatINR`.
- Drift warnings.

### Phase 2 — Cards (~1 day)

- `src/components/courses/CourseCard.tsx`: add `price?: number`,
  `listPrice?: number`, `priceNote?: string` to `CourseCardData`; render a price
  row between the facts `<dl>` and the buttons —
  `₹24,000` (bold) · `₹30,000` (struck) · `20% OFF` chip. Percentage is
  `Math.round((1 - price / listPrice) * 100)`. Nothing renders when `price` is
  missing, and `mt-auto` keeps buttons aligned across a row.
- `src/app/courses/page.tsx`: `await getCoursePrices()` and pass as a `prices`
  prop to `<FilterableCourseSections />`.
- `src/components/courses/FilterableCourseSections.tsx`: accept `prices`, inject
  in `toCard()`.
- `src/components/courses/courses-data.tsx`: delete the 27 fake `price: "$299"`
  strings, plus two pre-existing data bugs found while mapping:
  - `ds-7 Python Programming` links to `/courses/ds-ml-courses/python-course`,
    which has **no registry entry** (404). Point it at the software-testing page
    or drop the card.
  - `dm-4` duplicates `dm-1`’s href (`digital-marketing-course`) and has no `icon`.
- 5 hub pages (`src/app/courses/{software-testing-course,ds-ml-courses,bi-courses,digital-marketing-courses,artificial-intelligence-courses}/page.tsx`):
  fetch the map, pass into `<CategoryHubPage prices={...} />`.
- `src/components/category-hub/CategoryHubPage.tsx` + `HubCourses.tsx`: accept
  `prices` and inject when mapping `hub.courses.items`. **Hub data files stay
  untouched.**

### Phase 3 — Course pages (~1 day)

- `src/components/course-page/parts/PriceTag.tsx` (new): shared price display
  (price, strike-through, `% OFF` chip, GST note).
- `src/components/course-page/CoursePage.tsx`: `await getCoursePrice(course.slug)`,
  pass to `CourseHero`, and add the Fees section to the section list.
- `src/components/course-page/CourseHero.tsx`: fee block under the CTAs on
  mobile / beside the lead form on desktop.
- `src/components/course-page/CoursePricing.tsx` (new): “Fees & What’s
  Included”, inserted **after `stats`**, sticky-nav label **“Fees”**.
- No per-course data files are edited. `etl-testing` and `sdet-course` render
  neither the hero block nor the section.

### Phase 4 — Structured data (~0.5 day)

**Ship after Phase 3** — Google requires `Offer.price` to match the visible price.

- `src/types/course-page.ts`: `CourseSchemaContent` gains `price?: number` and
  `currency?: string`.
- `src/components/course-page/schema.ts`: forward the resolved price.
- `src/lib/schema-generators.ts`: `generateCoursePageSchema()` accepts
  `price`/`currency` and forwards to `generateCourseSchema()` (`Course.offers`)
  and `generateEducationalProgramSchema()` (master programs). This closes the
  half-finished BLG-058.

### Phase 5 — Freshness (~0.5 day)

The 33 course/hub pages and `/courses` are fully static today, so a Studio price
edit would need a redeploy.

- Add `export const revalidate = 3600` to `/courses`, the 5 hub pages and the 27
  course pages (mirroring the blog pages).
- Extend `src/app/api/revalidate/route.ts` to handle `_type === 'coursePrice'`:
  `revalidatePath` the course page, its category hub and `/courses`.
- Document the sheet → Studio workflow for the content team.

### Phase 6 — Copy consistency (~0.5 day, content)

See §7.

## 5. Sheet → course mapping

Registry keys from `src/data/courses/registry.ts`. `listPrice` is the sheet’s
“New Fees”; `price` is its “Final price / 20% discounted”.

| Sheet course | Registry slug | List ₹ | Sale ₹ | Note |
| --- | --- | ---: | ---: | --- |
| Course 1: Manual Software Testing | `manual-testing-course` | 30,000 | 24,000 | FAQ conflict — see §7 |
| Course 2: API Testing using POSTMAN and RestAPIs | `api-testing` | 13,000 | 10,400 | |
| Course 3: Database Management System using MySQL | `dbms-course` | 20,000 | 16,000 | |
| Course 4: Java Programming | `java-course` | 20,000 | 16,000 | card title is “Master Program in Java Programming” |
| Course 5: Advanced Software Testing | `advance-software-testing` | 50,000 | 45,000 | FAQ says “contact admissions” — see §7 |
| Course 6: Advanced Automation Testing | `automation-testing-course` | 50,000 | 45,000 | |
| Course 7: Advanced Manual and Automation Testing — Master Program | `advance-manual-automation-testing` | 1,00,000 | 85,000 | |
| Course 1: Python Programming | `python-course` | 20,000 | 16,000 | lives under software-testing |
| Course 2: Machine Learning Algorithms using Python | `machine-learning-using-python` | 30,000 | 24,000 | |
| Course 3: ML and Data Science with Python — Hero Program | `machine-learning-course` | 60,000 | 48,000 | |
| Course 4: ML Algorithms using R Programming | `data-visualization-in-r-programming` | 15,000 | 12,000 | |
| Course 5: Deep Learning, NLP and GenerativeAI | `generative-ai-course` | 40,000 | 32,000 | |
| Course 6: Advanced Data Science and ML Masterclass | `data-science-course` | 1,20,000 | 1,00,000 | |
| Course 7: Comprehensive Data Science and AI — Master | `ai-course` | 1,80,000 | 1,44,000 | sheet also lists 1,26,000 at 30% |
| Course 1: Advanced Data Analytics with Python Libraries | `data-analytics-python` | 15,000 | 12,000 | |
| Course 2: Advanced Excel for Data Analytics & Visualization | `data-analytics-and-visualization` | 20,000 | 16,000 | |
| Course 3: Data Analytics & Visualization with Power BI | `power-bi-course` | 20,000 | 16,000 | |
| Course 4: Data Analytics & Visualization with Tableau | `data-analytics-with-tableau` | 20,000 | 16,000 | |
| Course 5: Prompt Engineering with Gen AI | `prompt-engineering-course` | 20,000 | 16,000 | sits in the AI category |
| Course 6: Advanced Data Analytics — Hero Program | `data-analytics` | 50,000 | 45,000 | |
| Course 7: Big Data Engineering | *(no page)* | 60,000 | 42,000 | only inside the master programme — see §6 |
| Course 8: Data analytics with BI & Big Data Engineering Master | `masters-in-data-engineering` | 1,00,000 | 85,000 | |
| Course 01: Digital Marketing With AI — BootCamp | `ai-bootcamp` | 30,000 | 24,000 | sheet also 21,000 at 30% |
| Course 02: Digital Marketing and Analytics — Master Program | `digital-marketing-course` | 60,000 | 48,000 | sheet also 42,000 at 30% |
| Course 03: Digital Marketing With AI — For Business Owners | `ai-in-digital-marketing` | 60,000 | 48,000 | sheet also 42,000 at 30% |

## 6. Deliberately out of scope

- **`etl-testing`** — not in the sheet. Stays “contact a counsellor”.
- **`sdet-course`** — `price` intentionally omitted in the content file; the FAQ
  explains that fees come from a counsellor. Do not invent one.
- **Big Data Engineering** — the sheet has it as a standalone 80-hour course but
  there is no page for it (it exists only inside the BI master programme).
  Decision needed separately: create a page, or drop the row.
- **Two discount tiers** — storing one number per course. The 30% variants remain
  sheet-only until pricing decides how tiers are presented.
- **City course pages** (`src/components/city-courses/*`) — they show no fees
  today and are not part of this change.
- **Card durations** — several hub cards disagree with the sheet (e.g. `dm-4`
  says 20 weeks, sheet says 12 weeks / 80 hours). Worth a follow-up cleanup, but
  it is not blocked by this work.

## 7. Content fixes required

1. `src/data/courses/software-testing/faqs/manual-testing-course.ts` — the answer
   to “What is the manual testing course fees structure?” currently says
   “Online: ₹15,000 + GST. Classroom: ₹18,000 + GST.” Replace with the sheet
   price (₹30,000 list / ₹24,000 current) and keep the existing EMI and
   Pay-After-Placement wording.
2. `src/data/courses/software-testing/faqs/advance-software-testing.ts` — the
   fee answer says “contact our admissions team”. Rewrite to state ₹50,000 /
   ₹45,000 once published.
3. Any page-level copy that promises fees on request should be swept for
   contradictions with the new numbers.

## 8. Verification

- `NODE_OPTIONS=--max-old-space-size=8192 npx tsc --noEmit` — the default heap OOMs.
- **No local `next build`** (CLAUDE.md: the production Sanity token must not be
  exercised from a dev machine). Builds happen on Vercel; verify on a preview
  deployment.
- `next dev` spot checks before pushing.

| Check | Expected |
| --- | --- |
| `/courses` | 27 cards, 26 with price, `ds-7` no longer 404s |
| 5 category hubs | ~33 cards with price, none misaligned |
| 3 sample course pages (desktop + mobile) | hero fee block, Fees section, sticky-nav “Fees” anchor |
| `etl-testing`, `sdet-course` | no price anywhere, no empty fee shell |
| JSON-LD on a priced page | `Course.offers.price` + `priceCurrency: INR`, matching the visible number |
| Studio price edit | reflected within the ISR window / immediately after the webhook |
| `formatINR` | `₹1,00,000`, not `₹100,000` |

## 9. Risks

1. **Stale prices.** Two sources (sheet + Studio) can silently diverge if someone
   edits the sheet and forgets the sync script. Mitigate with the script’s diff
   output and a visible last-updated note.
2. **ISR is mandatory, not optional.** Without Phase 5 a price edit needs a
   redeploy, which defeats the point of moving to the CMS.
3. **Structured-data policy.** A published `Offer` that disagrees with the page
   is a Google structured-data violation — Phase 4 ships after Phase 3, never
   before.
4. **`sanityFetch` is server-only** and both card grids are client components, so
   the price map must cross as a serialised prop (planned in Phase 2).
5. **Publishing a price is a commitment.** Discounts must match what admissions
   actually charges; the sheet is the only authority until Finance says otherwise.
