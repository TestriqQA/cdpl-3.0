# CDPL SEO + GEO Audit — Live Progress

> **Updated:** 2026-05-26 — **CYCLE 2 + POST-CYCLE-2 WORK LIVE on prod, BLG-133 follow-up #4 awaiting `develop`→`main`** ✅ — all 42 `fix/*` branches deployed. Post-Cycle-2 (all live on `origin/main` @ `61def94`): Q5 (founder `sameAs`); Q7 / BLG-139/140/146 draft-mode preview (Presentation + `<VisualEditing/>`); draft-preview rolled out to all blog/jobs pages; **BLG-122** `/llms-full.txt`; **BLG-035** clean `/jobs/live-jobs/[jobId]` + 301 from legacy `?jobId=`; **BLG-039** category/post/author slug-rename redirects via `previousSlugs`; **BLG-133 v1** scaffolded 7 new Sanity doc types; **BLG-133 follow-up #1** Hiring Partners migrated; **BLG-133 follow-up #2** Mentors migrated; **BLG-133 follow-up #3** Events migrated (`/events` listing + `/events/[slug]` detail); spawned side-tasks **2 of 3** closed (careers NAP fix + stale 2025 batch dates); `CLAUDE.md` added for future-session rules. **On `develop` awaiting next prod merge:** **BLG-133 follow-up #4** Services migrated (`/services` listing + `/services/[slug]` detail + sitemap).
> **Branch:** `seo-audit/cycle-1-discovery` (audit docs) — Cycle 2 fixes land on `fix/*` branches off `develop`
> **Total backlog:** 199 entries (18 P0 / 75 P1 / 64 P2 / 42 P3) across 14 phases + 4 ancillary docs

This file is rewritten **on every response that touches the audit**, so you always see current state without having to scroll back.

---

## Cycle 1 progress (14 phases)

| # | Phase | Status | Deliverable | Commit |
| --- | --- | --- | --- | --- |
| 1 | Discovery & Baseline Snapshot | ✅ done | [01-baseline.md](01-baseline.md) | `25969c9` |
| 2 | Codebase Architecture Audit | ✅ done | [02-codebase-audit.md](02-codebase-audit.md) | `d05558e` |
| 3 | Technical SEO Audit | ✅ done | [03-technical-seo.md](03-technical-seo.md) | `ab75d25` |
| 4 | On-Page SEO Audit | ✅ done | [04-onpage-audit.md](04-onpage-audit.md) | `6153793` |
| 5 | Structured Data & Schema (JSON-LD) | ✅ done | [05-schema-audit.md](05-schema-audit.md) | `cfd584c` |
| 6 | Core Web Vitals & Performance | ✅ done | [06-cwv-performance.md](06-cwv-performance.md) | `0be4916` |
| 7 | Content & Information Architecture | ✅ done | [07-content-ia.md](07-content-ia.md) | `a268df1` |
| 8 | GEO / AEO Strategy | ✅ done | [08-geo-aeo-strategy.md](08-geo-aeo-strategy.md) | `24c1a78` |
| 9 | Sanity CMS Schema Audit | ✅ done | [09-sanity-schema-audit.md](09-sanity-schema-audit.md) | `85e4ddc` |
| 10 | GSC Triage (methodology + predictions) | ✅ done | [10-gsc-triage.md](10-gsc-triage.md) | `9601607` |
| 10b | GSC Live Data (validated via Chrome MCP) | ✅ done | [10b-gsc-live.md](10b-gsc-live.md) | `0c1f2a0` |
| 11 | Browser-Based Live Audit | ✅ done | [11-live-browser-audit.md](11-live-browser-audit.md) | `8c25e73` |
| 12 | Competitive Gap Analysis | ✅ done | [12-competitive-gap.md](12-competitive-gap.md) | `a9731e1` |
| 13 | EdTech India Optimization | ✅ done | [13-edtech-india-optimization.md](13-edtech-india-optimization.md) | `d2cf626` |
| 14 | Off-Page & Authority Strategy | ✅ done | [14-offpage-strategy.md](14-offpage-strategy.md) | `cd003b0` |
| — | Master Fix Backlog (199 entries) | ✅ done | [fix-backlog.md](fix-backlog.md) | `cd003b0` |
| — | Cycle 2 Sprint Roadmap (7 sprints + Cycle 3) | ✅ done | [sprint-roadmap.md](sprint-roadmap.md) | `cd003b0` |

**Cadence:** Phase-by-phase with pause for review (per user decision 2026-05-19).
**Commit policy:** One commit per phase on `seo-audit/cycle-1-discovery` branch.

---

## Cycle 2 progress (7 sprints)

> Branch policy: one `fix/<slug>` branch per fix, off `develop`. User decides when to merge.

| Sprint | Title | Status |
| --- | --- | --- |
| 1 | Production-Risk De-risking | ✅ done — 14 `fix/*` branches merged to `develop` |
| 2 | Schema Parity | ✅ done — 12 `fix/*` branches merged to `develop` |
| 3 | Tooling + Small UX | ✅ done — 12 `fix/*` branches merged to `develop` |
| 4 | Performance + Caching | ✅ done — 4 `fix/*` branches merged to `develop`; image-refactor items → Cycle 3 |
| 5 | GEO/AEO + Infra | 🟡 safe subset done — 7 `fix/*` branches + `fix/blg-006-revalidate-webhook` merged to `develop`; big/blocked/external items deferred |
| 6 | Content Cycle (25+ new routes) | 🟡 content-light slice done (1 branch, merged); ~30-35 new pages need a content team + budget |
| 7 | Final Backlog Cleanup | ✅ done — 5 `fix/*` branches merged to `develop`; route-restructure/decision items deferred |

> **2026-05-22 — Cycle 2 integration complete.** All 42 `fix/*` branches built
> across Sprints 2-7 (the 41 in the merge guide + `fix/blg-006-revalidate-webhook`)
> are now merged into `develop`. The 2 expected conflicts were resolved keep-both
> (`blg-067`↔`blg-065` on `blog/[slug]/page.tsx`; `blg-009`↔`blg-010` on
> `layout.tsx`). Full `tsc --noEmit` passes on integrated `develop`. `develop`
> pushed to `origin`; tip `6fd6707` (empty commit to trigger a fresh deploy).
> Recovery tag `pre-cycle2-integration` at `32cb441` (pre-merge state).
> **Server (Vercel) build of `develop` PASSED — Cycle 2 is live.**

### Sprint 1 — Production-Risk De-risking (merged to `develop`)

Closed: BLG-001, 002, 003, 013, 026, 027, 029, 030, 031, 032, 038, 042, 043, 044,
047, 050, 051, 056, 057, 058, 059, 095, 132, 142, 165. Merge commits: `75e0aff`,
`849d4aa`, `66a2602`, `38e022c`, `128b2c0`, `cbab1b0`, `90af701`, `ed1ee6b`,
`5d27567`, `ea5c845`, `ad4c51f`, `b419421`, `5fc2fd5`, `32cb441`.

### Sprint 2 — Schema Parity (12 branches off `develop`, awaiting merge)

| Branch | BLG closed | Summary |
| --- | --- | --- |
| `fix/blg-063-course-schema-fields` | 063, 074, 075, 078 | Course schema: teaches, educationalLevel, coursePrerequisites, educationalCredentialAwarded, audience, CourseInstance dates; drop fake "Expert Mentors" instructor |
| `fix/blg-060-review-itemtype-required` | 060 | `generateReviewSchema` itemType/itemId now required — fixed 9 call-sites that were attaching AggregateRating to the Organization |
| `fix/blg-061-org-localbusiness-link` | 061, 080 | LocalBusiness `parentOrganization` @id ref; `paymentAccepted`, `currenciesAccepted`, `award` |
| `fix/blg-064-org-founder` | 064, 071 | Org `founder` (Sandeep Maske, no sameAs yet); removed unverified `numberOfEmployees` |
| `fix/blg-068-website-searchaction` | 068 | WebSite `SearchAction`; also dropped a missed "100% placement" claim from WebSite description |
| `fix/blg-076-home-aggregaterating-id` | 076 | Home AggregateRating @id collision with LocalBusiness resolved |
| `fix/blg-065-blogposting-author` | 065, 066 | `Article` → `BlogPosting` subtype; author `sameAs` wired from Sanity author.social |
| `fix/blg-062-city-localbusiness` | 062 | City pages emit a city-scoped LocalBusiness with `areaServed` + HQ address |
| `fix/blg-069-quiz-schema` | 069 | `Quiz` schema added to `/mock-test` |
| `fix/blg-073-services-offercatalog` | 073 | `OfferCatalog` schema added to `/services` |
| `fix/blg-072-educational-program` | 072 | `EducationalOccupationalProgram` schema for Masters + AI Bootcamp |
| `fix/blg-138-job-schema-hiringorg` | 138, 162 | Job schema re-audit — confirmed valid; fixed careers `hiringOrganization` non-www URL + 404 logo |

**BLG-053** (OG image dimensions) — **verified, FAILING.** 73 of 113 `public/og-images/*`
files are not 1200×630 (49 have the wrong aspect ratio ~1.5:1 and will be cropped by
social platforms; 24 are the correct ~1.91:1 ratio but oversized and safely
downscalable). The `defaultOgImage` file resolves OK. This is an **asset / design
re-export task**, not a schema-parity code change — deferred, no branch created.

**Spawned task:** careers-page JobPosting `streetAddress` is "Vikhroli, Mumbai" — wrong;
CDPL HQ is Mira Road. Flagged for a separate session (NAP defect, needs an office-
location decision for Pune/Bengaluru roles).

### Sprint 3 — Tooling + Small UX (12 branches off `develop`, awaiting merge)

| Branch | BLG closed | Summary |
| --- | --- | --- |
| `fix/blg-091-092-caching` | 091, 092 | image optimizer minimumCacheTTL 60s→24h; Cache-Control on /api/reviews |
| `fix/blg-010-layout-cleanup` | 010, 011, 093 | direct Header/Footer/Banner imports; preconnect+dns-prefetch to cdn.sanity.io |
| `fix/blg-085-heromanualtesting` | 085, 088 | drop priority from 4 below-fold logos; react-icons/lu → lucide-react |
| `fix/blg-094-aboutaccreditations-priority` | 094 | below-fold accreditation logos → loading="lazy" |
| `fix/blg-089-city-h1-font` | 089 | removed inline system-ui font override on 765 city H1s |
| `fix/blg-041-mocktest-noindex` | 041 | layout.tsx with robots noindex meta for /mock-test/[courseSlug] |
| `fix/blg-024-error-styling` | 024 | error.tsx restyled to site theme (Tailwind, brand) |
| `fix/blg-028-privacy-link` | 028 | 5 lead forms: non-www privacy `<a>` → next/link relative |
| `fix/blg-018-blog-skeleton` | 018 | blog hero "Loading…" text → same-shape skeleton |
| `fix/blg-025-loading-states` | 025 | shared PageSkeleton + loading.tsx for blog/courses/events/mentors |
| `fix/blg-045-mobile-h1` | 045 | mobile home hero headline h2 → h1 |
| `fix/blg-055-noopener` | 055 | rel="noopener noreferrer" on 7 external target=_blank links |

**BLG-046** (hero `alt=""`) — **verified, no code change.** Forensic re-inspection
found every `alt=""` is correctly on a decorative image (blurred backdrop layers
with `aria-hidden`, floating decorations, or avatars inside `aria-label`'d buttons);
the main content images already carry proper alt. Phase 4 over-flagged.

**BLG-012** (raw `<img>` → next/image) — **deferred.** Sources span remote Google
user-content photos (need `remotePatterns`), local SVG logos (need
`dangerouslyAllowSVG`), and `CustomFlag`'s flag SVG (where raw `<img>` is correct).
Converting blind without a `next build` to verify risks breaking production
imagery — folded toward Sprint 4 image work (next-sanity-image adoption).

**BLG-052** (PNG→WebP OG images) — **deferred,** folded into the BLG-053 / Q11
OG-image asset re-export task (converting format without fixing dimensions is
half a job).

**BLG-184** (Justdial/Sulekha/Bing Places listings) — external directory work,
not an engineering task.

### Sprint 4 — Performance + Caching (4 branches off `develop`, awaiting merge)

> BLG-003 and BLG-027 (Sanity double-fetch React.cache wraps) were already
> closed in Sprint 1 — no Sprint 4 work needed for them.

| Branch | BLG closed | Summary |
| --- | --- | --- |
| `fix/blg-007-metapixel-lazyload` | 007 | Meta Pixel Script strategy `afterInteractive` → `lazyOnload` |
| `fix/blg-067-blog-wordcount` | 067 | real BlogPosting `wordCount` from Portable Text (was hard-coded 1000) |
| `fix/blg-166-blog-hero-priority` | 166 | blog-hero blur layer de-prioritised; main LCP image keeps priority + `fetchPriority="high"` |
| `fix/blg-009-phone-css-scope` | 009 | `react-phone-number-input/style.css` moved out of root layout into a shared `PhoneNumberInput` wrapper; 32 importers rewired |

**BLG-083 / BLG-145** (adopt `useNextSanityImage`) — **deferred to Cycle 3.**
This is a data-contract refactor: the GROQ queries currently project
`featuredImage` as a resolved URL string (`featuredImage.asset->url`), but
`useNextSanityImage` needs the raw Sanity image object. Changing it touches
`queries.ts` + `types.ts` + 6 components, requires client components for the
hook, and the blast radius is *every blog image*. Cannot be build-verified
here (Sanity-token rule) — belongs in a dedicated, build-tested image pass.
The audit's own Phase 6 originally scoped it as Cycle 3.

**BLG-012** (raw `<img>` → next/image) and **BLG-090** (blur placeholders) —
remain **deferred to that same Cycle 3 Sanity-image refactor pass.**

**BLG-036** (paginate `/blog/all-posts` + `/blog/category/[slug]`) — **deferred,
needs a product decision.** It is a feature, not a fix: it requires choosing
numbered routes vs `?page=` query param, posts-per-page (12–24), whether
`/blog/all-posts` keeps its category-grouped layout, and `rel=next/prev` /
canonical handling. A half-built pagination hurts SEO more than the current
unbounded list. Recommend a dedicated decision + branch.

### Sprint 5 — GEO/AEO + Infra (safe subset: 7 branches off `develop`, awaiting merge)

> Sprint 5 is the roadmap's largest sprint (~3–4 weeks) and mixes safe code
> work with blocked items, external tasks, product decisions and multi-week
> refactors. The self-contained, build-safe subset was done this pass.

| Branch | BLG closed | Summary |
| --- | --- | --- |
| `fix/blg-134-sanity-schema-hardening` | 134, 135, 136, 137, 141, 143, 144, 147, 151, 152, 108 | required validation; post.seo ogImage/noindex/nofollow + maxLength; body block styles (no H1); author expertise/credentials + seo; category featuredImage + seo; certificate issuedDate/expiresAt |
| `fix/blg-148-jobs-queries` | 148, 149 | JOBS_SLUG_QUERY; `_updatedAt` in JOBS_QUERY + SanityJob type |
| `fix/blg-129-robots-ai-bots` | 129 | CCBot → AI allow; Bytespider + Diffbot → bad-bot block |
| `fix/blg-021-sitemap-cache` | 021 | sitemap Sanity fetches wrapped in `unstable_cache` (1h, tagged) |
| `fix/blg-077-breadcrumb-id` | 077 | BreadcrumbList always gets a deterministic `@id` |
| `fix/blg-150-portabletext-link` | 150 | PortableText external-link detection by origin, not leading slash |
| `fix/blg-115-llms-txt` | 115, 116, 117, 118, 119, 120, 121 | llms.txt rewritten — canonical URLs, AI Bootcamp re-categorised, missing courses/certs/city-summary added, NAP + founder + social, "100% placement" removed |

**Sprint 5 deferred items (with reasons):**
- **BLG-005 / BLG-079** (split + refactor the 6,800-line schema-generators.ts /
  57 consolidators) — W-effort refactor, high blast radius, not build-verifiable
  here.
- **BLG-006 / BLG-146 / BLG-139 / BLG-140** (Sanity revalidate webhook, fetch
  cache tags, draftMode + preview routes) — **blocked on Q7** (Sanity webhook
  secret + Studio API token scope).
- **BLG-039** (Sanity-category redirects → middleware) — interacts with the
  existing redirect config; medium-risk, defer.
- **BLG-070** (Crunchbase/Clutch/G2/Wikidata in Org `sameAs`) — blocked until
  those external profiles exist (BLG-130/197/198/199).
- **BLG-081** (Course→Mentor→Article `mentions` cross-refs) — depends on the
  entity graph / Sanity doc types (BLG-133).
- **BLG-096 / BLG-097 / BLG-098 / BLG-113 / BLG-114** (AI-hub restructure,
  cannibalisation disambiguation, DM slug rename, AAA hub→tag, hub
  cross-linking) — **need product decisions** (URL moves + redirect strategy).
- **BLG-104** (Sanity blog-link workflow) — content/process, not code.
- **BLG-122** (`/llms-full.txt` route handler) — D-effort, separate build-out.
- **BLG-123/197, BLG-130/198/199** (Wikidata Q-ID, Crunchbase, Clutch, G2,
  Tracxn) — external profile creation, not code.
- **BLG-133** (7 new Sanity doc types: course/mentor/event/testimonial/
  hiringPartner/service/city) — W-effort, multi-week; do as its own sprint.
- **BLG-156** (plural-slug ranking investigation) — needs live GSC.

### Sprint 6 — Content Cycle (content-light slice only)

> Sprint 6 proper = ~30-35 brand-new pages (tool landing, comparison,
> 4,000-word pillar articles, B2B cluster, case studies, pricing). The
> roadmap itself scopes it at 8-12 weeks of combined engineering + content
> + design and a content-team budget. It is **not autonomously executable**
> — fabricating marketing copy/pricing/alumni data would violate the audit's
> "never guess" rule and thin placeholder pages would hurt SEO. Sprint 6
> proper is parked for a content team. The content-light slice was done:

| Branch | BLG closed | Summary |
| --- | --- | --- |
| `fix/blg-110-year-stamp-refresh` | 110 | Refreshed stale "2025" forward-looking year-stamps → 2026 in 6 live course/section components (Manual Testing WhyLearn/Curriculum/Career, WhyChooseUs, Power BI + Software Testing syllabus headings). |

**Sprint 6 — left for a content team / deferred:**
- All new-page work: tool landing pages (BLG-174), comparison pages
  (BLG-125/167), pillar pages (BLG-099/124/131), B2B corporate cluster
  (BLG-176/048/102), vertical solutions (BLG-103/175), free tools
  (BLG-100/128), case studies (BLG-179/112/170), process pages
  (BLG-178/180/181), mentor profiles (BLG-101), pricing (BLG-177).
- Content rewrites: 765 city-page meta descriptions (BLG-187), /services/sttp
  (BLG-154), interview-question pages (BLG-168), tutorial cluster (BLG-169),
  CDPL Placement Report (BLG-127), stat-citation swaps (BLG-126).
- **Spawned task:** stale course "next batch" dates (FeaturedCoursesSection,
  software-testing data.ts) — real scheduling data CDPL must supply; not
  auto-bumped during BLG-110.

### Sprint 7 — Final Backlog Cleanup (5 branches off `develop`, awaiting merge)

| Branch | BLG closed | Summary |
| --- | --- | --- |
| `fix/blg-016-cms-jsonld` | 016 | Removed dead JSON-LD from the noindex `/cms` layout |
| `fix/blg-019-nextconfig-cleanup` | 019, 020, 040 | Dropped stale webpackBuildWorker comment + unused `@prisma/client`; `X-Robots-Tag: noindex` on `/downloads/*` PDFs |
| `fix/blg-082-unused-deps` | 082 | Removed 4 unused production deps (recharts, react-calendly, react-countup, typewriter-effect) — run a fresh install to update the lockfile |
| `fix/blg-109-blog-seeds` | 109 | Moved 20 dead blog-seed `.tsx` files from `src/content/posts/` to `docs/content-seeds/`; excluded `docs` from tsconfig |
| `fix/blg-023-ga-double-fire` | 023 | GoogleAnalytics no longer double-counts the initial page view |

**BLG-160 — verified, no change needed:** the `/manual-testing-course` legacy
short slug has a healthy `permanent: true` 301 redirect in next.config. (Its
lingering ranking is a Google recrawl-timing matter, not a code defect.)

**BLG-054 — note, not a code fix:** city-course H1s render `heroContent.title`
from `courseData`. The known H1 problems were already addressed — BLG-095
(wrong descriptions, Sprint 1) and BLG-089 (inline font, Sprint 3). A full
content QA of all 765 city titles is a content-team spot-check.

**Sprint 7 deferred:**
- **BLG-017** (dead blog `<Suspense>` fallbacks) — P3, purely cosmetic; and
  `blog/[slug]/page.tsx` already carries 3 pending fix branches — a 4th
  conflicting branch for zero functional gain isn't worth it. Fold into the
  eventual blog-page consolidation.
- **BLG-035** (`/jobs/live-jobs?jobId=` → `/jobs/live-jobs/[jobId]`) — a
  route restructure (D effort) with redirect implications.
- **BLG-037** (`/blog/all-posts` vs `/blog` cannibalisation) — needs a
  canonical-vs-redirect product decision.
- **BLG-049** (`/jobs/live-jobs` content reframe) — content rewrite.
- **BLG-191/192** (EdTech awards, speaking circuit) — external.

---

## Cycle 2 — close-out summary

All seven Cycle-2 sprints' **engineering-executable** work is complete.

| Sprint | Branches | Status |
| --- | --- | --- |
| 1 — Production De-risking | 14 | ✅ merged to `develop` |
| 2 — Schema Parity | 12 | ✅ merged to `develop` |
| 3 — Tooling + Small UX | 12 | ✅ merged to `develop` |
| 4 — Performance + Caching | 4 | ✅ merged to `develop` |
| 5 — GEO/AEO + Infra | 7 (+1: blg-006) | ✅ merged to `develop` |
| 6 — Content Cycle | 1 | ✅ merged to `develop` |
| 7 — Final Backlog Cleanup | 5 | ✅ merged to `develop` |

**All 42 `fix/*` branches built across Sprints 2-7 are merged into `develop`,
typecheck-clean on the integrated branch, pushed to origin, and the server
build PASSED.** Sprint 1's 14 branches were merged earlier. **Cycle 2 is
deployed.**

**Not done — and why (needs the user / a team, not engineering):**
- **Blocked on Q7** (Sanity webhook secret + Studio token): BLG-006/139/140/146.
- **Needs product decisions:** BLG-035/036/037/096/097/098/113/114 (route
  restructures, pagination UX, IA changes — all involve URL moves + redirects).
- **Content team + budget:** Sprint 6 proper (~30-35 pages), BLG-049/126/127/
  154/168/169/187, BLG-104.
- **External profile creation:** BLG-123/197 (Wikidata), BLG-130/198/199
  (Crunchbase/Clutch/G2), BLG-070 (depends on them), BLG-191/192.
- **Multi-week refactors → own sprint:** BLG-005/079 (schema-generators split),
  BLG-133 (7 Sanity doc types), BLG-081.
- **Cycle 3** (CWV + heavy-dep sweep): BLG-004/008/012/014/015/022/083/084/
  090/145/161 — incl. the Sanity-image (`useNextSanityImage`) refactor.
- **Asset re-export:** BLG-052/053 (OG images, → Q11).
- **Verification-only:** BLG-156 (needs live GSC).

**Integration done (2026-05-22):** all 42 branches merged into `develop` —
the 2 expected conflicts resolved keep-both. `tsc --noEmit` passes on the
integrated branch; `develop` pushed; **server build PASSED — Cycle 2 live.**

**Open follow-ups for the user:**
1. ~~Merge/review the `fix/*` branches~~ — ✅ done; Cycle 2 deployed.
2. ~~Answer **Q5** / **Q7**~~ — ✅ both resolved (2026-05-22). Q5: founder
   `sameAs` wired. Q7: webhook secret + Viewer read-token both set; BLG-006
   revalidate webhook + BLG-139/140/146 draft-mode preview all built & merged
   to `develop`.
3. ~~Merge `develop` → `main` to ship the post-Cycle-2 work~~ — ✅ done;
   Q5 founder-`sameAs` + BLG-139/140/146 draft-mode preview live (`main` @
   `4988497`), Presentation tab verified working in `/cms`.
4. Decide **Q11** (OG-image re-export) and the IA-restructure / pagination
   approaches (BLG-035/036/037/096/097/098/113/114).
5. Three spawned side-tasks: careers JobPosting address (Vikhroli→Mira Road),
   stale course batch dates, OG-image dimensions.

---

## Cycle 3 progress (CWV sweep)

> Will populate after Cycle 2 surfaces CWV findings via bundle analyzer baselines.

| Item | Status |
| --- | --- |
| Heavy-library replacement (recharts / leaflet / framer-motion / typewriter-effect / react-phone-number-input) | ⏳ |
| Animation-library sweep (framer-motion → CSS / IntersectionObserver codemod) | ⏳ |
| Server-component conversion (90+ candidates from 250 `'use client'` files) | ⏳ |

---

## Open user-confirmation requests

| # | Question | Asked | Resolved |
| --- | --- | --- | --- |
| Q1 | Authoritative address (Mira Road vs Goregaon East) | 2026-05-19 | ✅ Mira Road |
| Q2 | Founded year (2020 vs 2022) | 2026-05-19 | ✅ 2020 |
| Q3 | Which trust-signal numbers are defensible | 2026-05-19 | ✅ Only 4.9/425 |
| Q4 | Cycle 1 cadence + commit strategy | 2026-05-19 | ✅ Phase-by-phase, commit-per-phase |
| Q5 | Sandeep Maske LinkedIn URL (for Organization.founder.sameAs / BLG-064) | 2026-05-19 Phase 5 | ✅ resolved 2026-05-22 — user supplied `https://www.linkedin.com/in/sandeepmaske/`; wired into `founder.sameAs` (`fix/blg-064-founder-sameas`, merged to `develop`) |
| Q8 | Is `numberOfEmployees: 50` accurate (BLG-071)? | 2026-05-19 Phase 5 | ✅ resolved 2026-05-21 — user said remove the field; done |
| Q9 | Sign-off on removing fabricated reviews from 830 routes (BLG-056) — confirm scope | 2026-05-19 Phase 5 | ✅ resolved — BLG-056 fixed + merged in Sprint 1 |
| Q10 | Actual prices per course (or confirm 25k-65k range is correct for ALL 25 courses) (BLG-058) | 2026-05-19 Phase 5 | ✅ resolved — BLG-058 fixed + merged in Sprint 1 (schema uses real `course.price`) |
| Q11 | OG image re-export — 73/113 `og-images/*` not 1200×630 (BLG-053). Approve batch downscale of the 24 correct-ratio files + design re-export of the 49 wrong-ratio files? | 2026-05-21 Sprint 2 | ⏳ awaiting decision |
| Q6 | GSC property access (for Phase 10 validation) | 2026-05-19 Phase 10 | ⏳ paste GSC exports into [10-gsc-triage.md](10-gsc-triage.md) §10.10 template |
| Q7 | Sanity webhook secret + Studio API token scope (Phase 9 / Cycle 2 Sprint 5) | 2026-05-21 | ✅ resolved 2026-05-22 — **part 1:** `SANITY_REVALIDATE_SECRET` set on the Sanity webhook + hosting env; `/api/revalidate` shipped (BLG-006). **part 2:** Viewer read-token `SANITY_API_READ_TOKEN` confirmed set in `.env.local` + Vercel; draft-mode preview built & merged (BLG-139/140/146) |

---

## Open deferred items

| # | Item | Reason | Unblocks |
| --- | --- | --- | --- |
| D1 | Lighthouse mobile + desktop scores | Needs live Chrome MCP run | Phase 11 |
| D2 | GSC coverage / queries / impressions / CWV field data | Needs GSC access | Phase 10 |
| D3 | Bundle analyzer output | Needs `ANALYZE=true next build` — **deferred until user OK due to Sanity API-token concern** | Phase 6 + Cycle 3 |
| D4 | Competitor backlink data | Needs Ahrefs/SEMrush | Phase 12 |
| D5 | Live DOM / network waterfall for home + 1 course + 1 city + 1 blog | Needs Chrome MCP | Phase 11 |

---

## Activity log

| Timestamp | Activity |
| --- | --- |
| 2026-05-19 | Audit kicked off. Phase 1 (Discovery & Baseline) completed and committed. 4 deliverables + decisions log emitted. 16-item initial issue radar produced. 3 user-confirmation questions answered. |
| 2026-05-19 | Phase 2 (Codebase Architecture Audit) started. |
| 2026-05-19 | Phase 2 complete. 02-codebase-audit.md emitted. **25 backlog entries (BLG-001 → BLG-025) seeded.** Headline P0s: SeoHead client-canonical (BLG-001), broken not-found.tsx Link import (BLG-002), POST_QUERY double-fetch (BLG-003), course-content `ssr:false` invisible to AI crawlers (BLG-004). progress.md introduced and integrated into commit cadence. |
| 2026-05-19 | Phase 3 complete. 03-technical-seo.md emitted. **16 new backlog entries (BLG-026 → BLG-041).** Headline P0s: placeholder `"Your Company"` branding shipping to production in blog/categories (BLG-026), `CATEGORY_QUERY + CATEGORY_POSTS_QUERY` double-fetch in blog/category/[slug] (BLG-027). 0 redirect chains detected in 52 static redirects. Sitemap is comprehensive (~870 URLs, no orphans). AI-crawler content-blindness on course detail pages confirmed as primary GEO blocker (BLG-004 deepening). |
| 2026-05-19 | Phase 4 complete. 04-onpage-audit.md emitted. **14 new backlog entries (BLG-042 → BLG-055).** Headline P0s: `/mock-test` + `/istqb-registration` titles show **"Testriq"** instead of CDPL/Cinute Digital (BLG-042); 30+ pages reference non-defensible claims ("5,000+ placed", "100% placement", "15+ years") in meta descriptions (BLG-044). ~35 titles exceed 60 chars (BLG-043). LSI keyword coverage is strong on course pages (~16 keywords each). 9 generic-anchor occurrences only. **Total backlog so far: 55 entries (6 P0 / 16 P1 / 20 P2 / 13 P3).** |
| 2026-05-19 | Phase 5 complete. 05-schema-audit.md emitted. **26 new backlog entries (BLG-056 → BLG-081).** **Most critical finding of the audit so far:** `generateSingleReviewSchema` emits a **fabricated 5-star review with hard-coded body** ("The training curriculum at CDPL is highly practical…") attributed to "CDPL Student" with `Math.random()` in @id — **~830 routes ship this fake review** (home + 25 course detail + 765 city + blog + categories + more). Direct manual-action risk + violates Google self-serving review policy. Also: `generateCourseSchema` hard-codes 25k-65k price ignoring real prices (BLG-058); Organization description includes non-defensible "100% placement support" (BLG-059). 77 schema generators inventoried; 57 are page-specific consolidators (~4500 lines of dup). **Total backlog: 81 entries (10 P0 / 25 P1 / 28 P2 / 18 P3).** 4 open user-confirmation questions added for Sprint 2. |
| 2026-05-19 | Phase 6 complete. 06-cwv-performance.md emitted. **13 new backlog entries (BLG-082 → BLG-094).** **Discovery:** 4 production deps are installed but never imported anywhere — `recharts`, `react-calendly`, `react-countup`, `typewriter-effect` (BLG-082) → ~250 KB lockfile bloat. `next-sanity-image ^6.2.0` is installed but unused (BLG-083) — adopting it for blog images is the **single biggest blog-CWV win** available (auto width/height/blur from Sanity metadata). `framer-motion` imported in **160 files** (BLG-084) is the biggest aggregated JS cost. Other findings: 4 below-fold company logos marked `priority` (BLG-085), alt text mismatches filename on 3 logo images suggesting placeholder alumni-company badges (BLG-086, P1), inline `font-family: system-ui` override on 765 city H1s (BLG-089). Font strategy is **exemplar** (variable Inter, preload, swap, comprehensive fallback). No images missing dimensions. **Total backlog: 94 entries (12 P0 / 29 P1 / 32 P2 / 21 P3).** |
| 2026-05-19 | Phase 7 complete. 07-content-ia.md emitted. **20 new backlog entries (BLG-095 → BLG-114).** **P0 discovery:** ALL 30+ course descriptions in `headerData.ts` are **wrong boilerplate** — Manual Testing says "Master Scrum", Python says "Master containerization", DM says "Earn PMP certification", BI says "Craft a standout resume". These propagate to **MegaMenu navigation (visible) + Footer + `generateHomePageSchema` ItemList + `generateAllCoursesPageSchema` ItemList (JSON-LD)** — so AI engines ingest wrong descriptions. Other findings: AI hub has only 1 spoke (BLG-096); 3-way ML/Python cannibalization + 4-way Data-Analytics + 4-way AI cannibalization (BLG-097); **0 pillar pages of 3000+ words** (BLG-099); **0 free-tool linkable assets** (BLG-100); no per-mentor profile pages (BLG-101); 21 stray `.tsx` blog seeds in `src/content/posts/` (BLG-109). Strengths: anchor text is keyword-rich across MegaMenu; Sanity author schema has social fields ready for E-E-A-T (just not wired to Article schema). **Total backlog: 114 entries (13 P0 / 36 P1 / 41 P2 / 24 P3).** |
| 2026-05-19 | Phase 8 complete. 08-geo-aeo-strategy.md emitted. **17 new backlog entries (BLG-115 → BLG-131).** `public/llms.txt` exists ✓ but uses 17 old-slug URLs that all 301-redirect (BLG-115), lists AI Bootcamp under wrong category (BLG-116), missing 13+ course pages + city-courses + certifications + NAP + founder (BLG-117/118/119/120), claims "100% placement assistance" (BLG-121 — P0). No `llms-full.txt` (BLG-122). No Wikidata Q-ID — **highest-leverage external GEO action** (BLG-123). All major AI bots already Allowed in robots.ts ✓. **Cross-phase GEO blockers identified:** BLG-004 (ssr:false invisible to AI), BLG-056 (fake reviews), BLG-095 (wrong descriptions), BLG-066 (author no sameAs), BLG-064 (no founder) — all must land Sprint 1-2 before Sprint 5's GEO infra ships. **Total backlog: 131 entries (14 P0 / 45 P1 / 46 P2 / 26 P3).** |
| 2026-05-19 | Phase 9 complete. 09-sanity-schema-audit.md emitted. **21 new backlog entries (BLG-132 → BLG-152).** **P0 discovery:** ALL 3 Sanity image fields (post.featuredImage, author.avatar, certificate.certificateImage) lack `alt` subfield with `Rule.required()` validation (BLG-132) — a11y + image-SEO blocker. **Architectural finding:** No Sanity doc types for `course`, `mentor`, `event`, `testimonial`, `hiringPartner`, `service`, `city` (BLG-133) — content lives in TS data files, blocks BLG-095/BLG-101/BLG-126 fixes. No `validation.required()` on critical fields in post/author/category (BLG-134). job schema missing salary/datePosted/validThrough/description fields required for JobPosting Rich Results (BLG-138 — P1). No draftMode integration / /api/preview routes (BLG-139). PortableTextRenderer DOES use `useNextSanityImage` ✓ but blog hero / list / sidebar / author avatar don't (BLG-145 refined). GROQ projection discipline is excellent ✓. Strong references (post→author, post→category) ✓. **Total backlog: 152 entries (15 P0 / 55 P1 / 52 P2 / 28 P3).** |
| 2026-05-19 | Phase 10 complete. 10-gsc-triage.md emitted. **No new backlog entries** — Phase 10 is methodology + predictive findings only (live GSC data required to validate). Doc provides: §10.10 paste-here template for 8 GSC reports (Coverage/Sitemaps/Performance/Enhancements/Manual Actions/Security/Links/Page Experience); §10.11 cross-reference table linking each prediction to a backlog ID; §10.5 rich-result predictions per type. Top predicted GSC manifestations: BLG-001 will show as "Duplicate without user-selected canonical"; BLG-056 will trigger Review snippet warnings; BLG-058 will surface as Course rich-result "Invalid offer price"; BLG-138 will surface as JobPosting "Missing description/datePosted/validThrough/baseSalary". **Total backlog unchanged: 152 entries.** |
| 2026-05-19 | Phase 10b complete (live GSC investigation via Chrome MCP, browser "sushma"). **10 new backlog entries (BLG-153 → BLG-162).** **Confirmed predictions:** BLG-001 (12 URLs with canonical ambiguity), BLG-056 (16 Review snippet errors on 8 URLs: /blog + 5 categories + /events + /cdpl-affiliate-program — schema malformed, Google ML not yet flagged), BLG-043/044/095 (**0.8% CTR vs 3-5% industry healthy** = 4× CTR drag), BLG-068 (Sitelinks Searchbox ineligible). **Disproved:** BLG-138 (0 invalid JobPosting), Phase 6 INP risk (passing), Phase 6 CLS risk (passing). **New critical findings:** BLG-161 LCP > 2.5s on **ALL 128** mobile URLs (broader than blog-only prediction); BLG-157 880 pages have impressions but only 613 indexed (267 dropped index); BLG-154 /services/sttp is biggest non-brand traffic page (3,623 imps, 0.36% CTR); BLG-156 plural slugs still ranking despite redirect. **Manual Actions clean ✓ Security clean ✓ Sitemap healthy ✓.** Total: 878 clicks / 110K imps / pos 16.6 over 3 mo. **Total backlog: 162 entries (16 P0 / 58 P1 / 56 P2 / 32 P3).** |
| 2026-05-19 | Phase 11 complete (live browser audit via Chrome MCP). **4 new backlog entries (BLG-163 → BLG-166).** **🚨 P0 NEW BLG-163:** Home emits **3 separate canonical tags** — one points to non-existent `/index`. BLG-001 worse than predicted. **NEW BLG-164:** CountUp animated stats render initial value `0` in SSR → AI crawlers ingest "0 training hours / 0 job vacancies" instead of real numbers. **NEW BLG-165:** auto-abbreviator leaves dangling pipe `\| \| CDPL` after stripping "Testriq" on /mock-test title. **NEW BLG-166:** Blog hero `<Image>` is `loading="lazy"` (no priority) — direct cause of LCP universal failure. **DOWNGRADED** BLG-093/011 to P3 (Sanity images route through `/_next/image`, no direct cdn.sanity.io fetch). **Live-verified BLG-001 (3 canonicals), BLG-002 (broken Go Home link), BLG-004 (210 words hero SSR, curriculum invisible), BLG-042 (`/istqb-registration` still has "Testriq"), BLG-056 verbatim payload, BLG-057 random @id `-953`, BLG-058 (25k-65k served despite source 15000), BLG-063 (teaches+level MISSING), BLG-076 @id collision, BLG-095 ("Learn to facilitate Scrum teams" in live JSON-LD).** **Total backlog: 166 entries (17 P0 / 59 P1 / 54 P2 / 36 P3).** |
| 2026-05-19 | Phase 12 complete (competitive gap analysis via Chrome MCP). Audited Simplilearn, Edureka, Intellipaat, Scaler live. **7 new backlog entries (BLG-167 → BLG-173).** **Edureka schema vs CDPL:** Edureka course page has teaches, syllabusSections, coursePrerequisites, educationalCredentialAwarded, video, Product+Course+FAQPage. **Edureka aggregateRating: 4.2 / 49,300 reviews** = 116× CDPL's 425. **Intellipaat strategy:** Product schema (no Course) + "with IIT Certification" titles. **Scaler moat:** verified LinkedIn alumni URLs. **Untapped niches (0 competitors have):** Comparison pages, city-level scale (CDPL already has 765 city pages — unique advantage), vertical-solution pages. **Top content gaps:** tutorials, interview-question pages, comparison pages, verified alumni, salary calculator. **Backlink baseline:** CDPL not on Shiksha (formerly Naukri Learning). **Total backlog: 173 entries (17 P0 / 64 P1 / 56 P2 / 36 P3).** |
| 2026-05-19 | Phase 13 complete (EdTech India optimization). **15 new backlog entries (BLG-174 → BLG-188).** Strategic recommendations: 10 `/tools/*` landing pages for Selenium/Postman/SQL/Cypress/Playwright/Power BI/Tableau (BLG-174 P1); 2 vertical pages BFSI Testing + Healthcare Data Analytics (BLG-175 P2); `/corporate-training` B2B cluster of 5-8 pages (BLG-176 P1 extends BLG-048/BLG-102); pricing transparency (BLG-177 P1); upcoming-batches page (BLG-178 P1); `/case-studies/[slug]` route with LinkedIn-verified alumni (BLG-179 P1 — closes Scaler's moat); claim Shiksha/CollegeDunia/Justdial/Sulekha listings (BLG-183/184); footer CIN+GST+ISO display (BLG-185); city-page meta-description CTR rescue (BLG-187 P1 — cross-cuts BLG-044). **Brand SERP verified live:** GBP + Knowledge Panel exist ✓. Thane separate listing — NAP consistency check needed. **Total Cycle 2 Sprint 6 scope: ~30-35 new pages.** **Total backlog: 188 entries (17 P0 / 70 P1 / 60 P2 / 41 P3).** |
| 2026-05-19 | **CYCLE 1 COMPLETE.** Phase 14 emitted **3 final deliverables**: [14-offpage-strategy.md](14-offpage-strategy.md) (backlink + entity establishment + founder thought leadership), [fix-backlog.md](fix-backlog.md) (199-entry tabular master backlog), [sprint-roadmap.md](sprint-roadmap.md) (7 Cycle 2 sprints + Cycle 3). **11 new backlog entries (BLG-189 → BLG-199):** GSC Links pull (BLG-189), founder cadence (BLG-190), EdTech awards (BLG-191), speaking circuit (BLG-192), review acquisition workflow (BLG-193), Tier-1 directory submission sprint with 15 directories (BLG-194), disavow audit (BLG-195), NAP audit (BLG-196), **Wikidata Q-ID creation (BLG-197 — highest-leverage external GEO action)**, Crunchbase (BLG-198), Clutch (BLG-199). **FINAL TOTAL: 199 backlog entries (18 P0 / 75 P1 / 64 P2 / 42 P3) over 14 phases + live GSC + live browser audit. Cycle 1 branch ready for merge to `develop` at user discretion.** |
| 2026-05-21 | **CYCLE 2 SPRINT 1 COMPLETE** (Production-Risk De-risking) — 14 `fix/*` branches merged to `develop`. Closed 25 backlog entries: BLG-001/002/003/013/026/027/029/030/031/032/038/042/043/044/047/050/051/056/057/058/059/095/132/142/165. Headline: fabricated reviews removed from ~830 routes (BLG-056/057), client-side canonical removed (BLG-001), "Testriq" brand stripped (BLG-042), non-defensible claims swept from titles/descriptions/Org schema (BLG-043/044/059), all 30+ course descriptions rewritten (BLG-095). |
| 2026-05-21 | **CYCLE 2 SPRINT 2 COMPLETE** (Schema Parity) — 12 `fix/*` branches off `develop`, awaiting user merge. Closed 19 backlog entries: BLG-060/061/062/063/064/065/066/068/069/071/072/073/074/075/076/078/080/138/162. Course schema now emits teaches/educationalLevel/coursePrerequisites/educationalCredentialAwarded/audience + CourseInstance dates (BLG-063/074/075). **`generateReviewSchema` foot-gun fixed (BLG-060): 9 call-sites were silently attaching the AggregateRating to the Organization @id — now itemType/itemId are required.** LocalBusiness↔Organization linked (BLG-061); city LocalBusiness on 765 routes (BLG-062); founder added, numberOfEmployees removed (BLG-064/071); BlogPosting subtype + author sameAs (BLG-065/066); WebSite SearchAction + a missed "100% placement" claim removed (BLG-068); home @id collision fixed (BLG-076); Quiz, OfferCatalog, EducationalOccupationalProgram schemas added (BLG-069/073/072); JobPosting re-audited — valid, hiringOrganization URL bug fixed (BLG-138/162). **BLG-053 verified FAILING** — 73/113 OG images off 1200×630 spec (asset re-export task, deferred → Q11). Cycle-3 entries (BLG-004/008/014/015/022/084/090/161) remain deferred. |
| 2026-05-21 | **CYCLE 2 SPRINT 3 COMPLETE** (Tooling + Small UX) — 12 `fix/*` branches off `develop`, awaiting user merge. Closed 16 backlog entries: BLG-010/011/018/024/025/028/041/045/055/085/088/089/091/092/093/094. Highlights: image-optimizer + /api/reviews caching (091/092); direct layout imports + Sanity CDN preconnect (010/011/093); below-fold `priority` removed from logos (085/094); react-icons/lu dropped for lucide-react (088); inline system-ui font removed from 765 city H1s (089); meta-robots noindex layout for /mock-test/[courseSlug] (041); themed error.tsx (024); 5 lead-form privacy links de-redirected (028); blog-hero loading skeleton (018); route loading.tsx states (025); mobile home h1 (045); rel=noopener on 7 external links (055). **BLG-046 verified — no-op** (all `alt=""` correctly decorative). **BLG-012 deferred** (raw-img conversion needs next.config remotePatterns/dangerouslyAllowSVG + build verification → Sprint 4). **BLG-052 deferred** → folded into Q11 OG-image asset task. **BLG-184** is external directory work. |
| 2026-05-21 | **CYCLE 2 SPRINT 4 COMPLETE** (Performance + Caching) — 4 `fix/*` branches off `develop`, awaiting user merge. Closed 4 backlog entries: BLG-007/009/067/166. Meta Pixel deferred to `lazyOnload` (007); real Portable-Text `wordCount` for BlogPosting schema (067); blog-hero LCP image keeps priority while the decorative blur layer no longer competes for preload (166); `react-phone-number-input` stylesheet moved off the root layout into a shared wrapper, 32 importers rewired (009). **BLG-003 + BLG-027 were already closed in Sprint 1** (no work needed). **BLG-083/145 + BLG-012 + BLG-090 deferred to a Cycle 3 Sanity-image refactor pass** — `useNextSanityImage` needs a GROQ/type data-contract change (URL string → image object) across queries + 6 components, build-unverifiable here, blast radius = all blog images; audit Phase 6 originally scoped it Cycle 3. **BLG-036 deferred** — blog pagination is a feature needing a product decision (numbered routes vs `?page=`, posts/page, category-grouping, rel=next/prev). |
| 2026-05-21 | **CYCLE 2 SPRINT 5 — safe subset COMPLETE** (GEO/AEO + Infra) — 7 `fix/*` branches off `develop`, awaiting user merge. Closed 24 backlog entries: BLG-021/077/108/115/116/117/118/119/120/121/129/134/135/136/137/141/143/144/147/148/149/150/151/152. Sanity Studio schemas hardened (required validation, SEO objects, maxLength, certificate dates, author E-E-A-T fields, restricted body block styles); JOBS_SLUG_QUERY + `_updatedAt`; robots.ts explicitly handles CCBot (allow) / Bytespider + Diffbot (block); sitemap Sanity fetches cached; BreadcrumbList always has a deterministic `@id`; PortableText external-link detection fixed; **llms.txt fully rewritten** — canonical URLs, AI Bootcamp re-categorised, missing courses/certs/city-summary added, NAP + founder + social, and the non-defensible "100% placement" claim removed (closes the un-done P0 BLG-121). **Deferred (big/blocked/external/product-decision):** BLG-005/079 (schema-generators refactor), BLG-006/146/139/140 (revalidate webhook + preview — blocked on Q7 secret/token), BLG-039, BLG-070 (blocked on external profiles), BLG-081, BLG-096/097/098/113/114 (IA restructuring — product decisions), BLG-104, BLG-122, BLG-123/197 + BLG-130/198/199 (external profiles), BLG-133 (7 Sanity doc types — multi-week), BLG-156. |
| 2026-05-21 | **CYCLE 2 SPRINT 6 — content-light slice DONE** (Content Cycle). Sprint 6 proper (~30-35 new pages) is a content-team + design + budget effort and is parked. Did the one content-light item: **`fix/blg-110-year-stamp-refresh`** (BLG-110) — refreshed stale "2025" forward-looking year-stamps to 2026 across 6 live course/section components; left real dates, the dead BlogPageNewUI/CategoriesCTASection components, and real "next batch" scheduling data untouched (the latter spawned as a separate task for CDPL to supply real dates). |
| 2026-05-21 | **CYCLE 2 SPRINT 7 COMPLETE** (Final Backlog Cleanup) — 5 `fix/*` branches off `develop`, awaiting user merge. Closed 7 backlog entries: BLG-016/019/020/023/040/082/109. Removed dead JSON-LD from the noindex /cms layout (016); next.config cleanup — stale webpackBuildWorker comment + unused @prisma/client + X-Robots-Tag noindex on /downloads PDFs (019/020/040); removed 4 unused production deps (082); moved 20 dead blog-seed .tsx files out of src/ to docs/content-seeds/ + tsconfig exclude (109); fixed GoogleAnalytics initial-page-view double-count (023). BLG-160 verified (healthy 301 redirect, no change). **Deferred:** BLG-017 (P3 cosmetic, blog page already has 3 pending branches), BLG-035 (route restructure), BLG-037 (cannibalisation — product decision), BLG-049 (content), BLG-191/192 (external). **CYCLE 2 ENGINEERING WORK COMPLETE** — 41 `fix/*` branches across Sprints 2-7 awaiting merge; Sprint 1's 14 already merged. |
| 2026-05-21 | **Q7 part 1 resolved + BLG-006 built.** User set the Sanity revalidate webhook secret (`SANITY_REVALIDATE_SECRET`). `fix/blg-006-revalidate-webhook` branch created off `develop` — adds the `/api/revalidate` route handler (secret-validated, tag/path revalidation). 42nd Cycle-2 `fix/*` branch. |
| 2026-05-22 | **CYCLE 2 INTEGRATED & DEPLOYED.** All 42 `fix/*` branches merged into `develop` in the merge-guide order. The 2 expected conflicts resolved keep-both: `blg-067`↔`blg-065` on `src/app/blog/[slug]/page.tsx` (kept `authorSameAs` + real `wordCount`); `blg-009`↔`blg-010` on `src/app/layout.tsx` (kept direct layout imports + Sanity preconnect + removed phone-input CSS). Full `NODE_OPTIONS=--max-old-space-size=8192 npx tsc --noEmit` passes on integrated `develop`. `develop` pushed to `origin`; recovery tag `pre-cycle2-integration` at `32cb441`. Empty commit `6fd6707` pushed to trigger a fresh hosting build. **Server (Vercel) build of `develop` PASSED.** User then merged `develop` → `main` — **Cycle 2 is live in production.** `SANITY_REVALIDATE_SECRET` confirmed set on the hosting env (Q7 part 1 fully closed). Remaining open work is user-input / product-decision / content-team / external-profile / Cycle-3 bound. |
| 2026-05-22 | **Q5 RESOLVED — BLG-064 fully closed.** User supplied founder Sandeep Maske's verified LinkedIn URL (`https://www.linkedin.com/in/sandeepmaske/`). `fix/blg-064-founder-sameas` branch off `develop` — adds `sameAs: ["https://www.linkedin.com/in/sandeepmaske/"]` to the Organization `founder` Person in `src/lib/schema-generators.ts`. Typecheck clean; merged to `develop` (`fe90166`), pushed. Pending the next `develop` → `main` merge to reach production. |
| 2026-05-22 | **Q7 RESOLVED — BLG-139/140/146 done (draft-mode preview).** Inspection found `SANITY_API_READ_TOKEN` already set in `.env.local` (Viewer perm) and on Vercel — user confirmed both. `fix/blg-139-draft-mode-preview` branch off `develop` (6 files): **BLG-140** `previewClient` (`useCdn:false` + read token + `perspective:'drafts'`) + `readToken` export in `src/sanity/client.ts`; **BLG-146** `sanityFetch` wrapper (`src/sanity/lib/fetch.ts`) — draftMode-aware client selection + `next.tags` so `revalidateTag` has a target; **BLG-139** `/api/draft` (`defineEnableDraftMode`, secret-validated) + `/api/disable-draft` route handlers, and `presentationTool` added to `sanity.config.ts` for the side-by-side preview pane. Blog post page (`blog/[slug]`) routed through `sanityFetch`; `generateStaticParams` kept on the plain client. Typecheck clean; branch build had no errors (user-confirmed); merged to `develop` (`4988497`), pushed. **Scope note:** only the blog post page is wired so far — category/author/listing-page conversions + `<VisualEditing/>` click-to-edit overlays are a deliberate follow-up. **Deployed to production via `develop` → `main` (`origin/main` @ `4988497`) and verified live 2026-05-22 — the "Presentation" tab renders in the `/cms` Studio and the preview pane loads the site with draft mode enabled.** |
| 2026-05-22 | **Draft-preview rollout — BLG-139/146 extended to all blog/jobs pages.** `fix/blg-139b-draft-preview-rollout` (10 files): `sanityFetch` wired into the category + author detail pages, all blog listing pages (`/blog`, `/blog/all-posts`, `/blog/categories`, `/blog/search`), the home latest-posts block and `/jobs/careers`; `generateStaticParams` slug fetches kept on the plain client. Merged to `develop` (`9577f64`). **First production build FAILED** — `server-only` `src/sanity/lib/fetch.ts` poisoned the client bundle: the `@/components/blog` barrel re-exports `BlogSidebar`/`BlogCategoryMenu` (which the rollout had pointed at `sanityFetch`), and the barrel is imported by the client component `AuthorPageContent`. **Fixed on `develop` (`9e047e9`)** — reverted just those 2 barrel-shared components to the plain `client` (every draft-aware *page* keeps `sanityFetch`; pages are route entrypoints so they never poison a client bundle). `develop` → `main`; **production build of `9e047e9` PASSED — draft-preview rollout live 2026-05-22.** Follow-up fix `9bd8a11`: Presentation showed *"Unable to connect to visual editing"* — fixed by mounting `<VisualEditing />` from `next-sanity/visual-editing` in the root layout, gated on `draftMode().isEnabled` (stega off, so JSON-LD/meta stay clean). Deployed; Presentation now connects. |
| 2026-05-22 | **BLG-122 — `/llms-full.txt` live.** `fix/blg-122-llms-full-txt` (`6334a1e`): new App-Router route handler at `src/app/llms-full.txt/route.ts` that serves the curated `llms.txt`-style brand/business/course frame plus the **full body** of every published blog post (Portable Text → plain text via `@portabletext/toolkit`'s `toPlainText`). Cached an hour at the edge (`cache-control` + `revalidate: 3600`); the BLG-006 revalidate webhook refreshes it on demand via `revalidateTag('post')`. Merged to `develop` (`0130fe9`), pushed; `develop` → `main`; production build passed — live at `https://www.cinutedigital.com/llms-full.txt`. |
| 2026-05-22 | **BLG-035 — `/jobs/live-jobs` restructured to clean `[jobId]` route.** `fix/blg-035-live-jobs-route-restructure` (`58eda37`, 4 files): per-job deep links lived at `/jobs/live-jobs?jobId=X` (a query-string detail view served off the listing page) — Google couldn't index each job under its own canonical URL. **New** `src/app/jobs/live-jobs/[jobId]/page.tsx` — SSG via `generateStaticParams` (one pre-rendered page per job in `JOBS`), per-job `Metadata`, single `JobPosting` JSON-LD + breadcrumb. **Listing simplified** — `searchParams.jobId` branch removed; the listing's `JobPosting` schemas point at the new `/[jobId]` canonical. **Share button** in `JobsLiveJobsJobsGridSection` rebuilt to use the new path. **301 redirect** added in `next.config.ts` via the `has: [{ type: 'query', key: 'jobId', value: '(?<jobId>.+)' }]` pattern so legacy `?jobId=X` external links land on `/jobs/live-jobs/X`. Typecheck clean; merged to `develop` (`d47090e`); `develop` → `main`; production build PASSED — live. |
| 2026-05-22 | **BLG-039 — category slug-rename redirects via `previousSlugs`.** `fix/blg-039-category-slug-redirects` (`4dff2f2`, 3 files): the audit's original recommendation was middleware-based redirects, flagged "medium-risk, defer" because middleware runs on every request. Picked a **page-level alternative** — same SEO outcome (HTTP 308 permanent), much lower blast radius. Added a `previousSlugs: string[]` field to the Sanity Category schema (tags input — editors list any retired slugs). New GROQ query `CATEGORY_CURRENT_SLUG_FOR_PREVIOUS_QUERY` maps an old slug → the current canonical slug. `/blog/category/[slug]/page.tsx`: when the live-slug fetch returns `null`, the page consults `previousSlugs` and calls `permanentRedirect` if matched; only falls through to `notFound()` when neither matches. Merged to `develop` (`bc6dfc8`); `develop` → `main`; production build PASSED — live. |
| 2026-05-22 | **BLG-133 v1 — 7 new Sanity doc types scaffolded.** `fix/blg-133-sanity-doc-types-v1` (`cb2ea78`, 8 files, 1040 lines). The biggest "blocked by data model" finding from Phase 9: `course` / `mentor` / `event` / `testimonial` / `hiringPartner` / `service` / `city` all lived as TS files in `src/data/` + `lib/seo-config.ts`, blocking content-team backlog items (BLG-095 boilerplate course descriptions, BLG-101 per-mentor profile pages, BLG-126/127 trust-stat updates, BLG-179 verified alumni case studies, BLG-187 city-page meta rewrites). **Scope discipline:** schemas only — site components still read from the TS files. Each schema includes `defineType` + required validation, alt-text-required image fields (BLG-132/137 a11y pattern), an SEO object on user-facing docs (metaTitle/metaDescription with length warnings + ogImage where pages render one), preview config, and `isActive`/`order` editor toggles. Cross-references between the new doc types are deliberately string-based (slug arrays) for v1 — they can be promoted to typed `reference` fields after content team has populated. **Course schema** maps to existing JSON-LD fields (`learningOutcomes`→`teaches` BLG-063, `prerequisites`→`coursePrerequisites` BLG-075, `certifications`→`educationalCredentialAwarded` BLG-074, `price`→`offers.price` BLG-058). Merged to `develop` (`8e4bdcc`); `develop` → `main`; production build PASSED — Studio at `/cms` now shows the 7 new doc types in the navigator. **Follow-up sprint** (deferred): GROQ queries + component migration to read from these docs instead of TS files. |
| 2026-05-22 | **CLAUDE.md added at repo root.** Captures session working rules so future Claude/agent sessions auto-follow them: do NOT add `Co-Authored-By` trailer to commits (user-only attribution), branch-per-fix off `develop`, user owns `develop`→`main`, no local `next build` / `ANALYZE` (Sanity API token rule) — typecheck only via `tsc --noEmit`, read `docs/seo-audit/progress.md` first on session start. Committed directly to `develop` (`f20fed4`). |
| 2026-05-22 | **Spawned side-task #1 — careers `JobPosting` `streetAddress` NAP fix.** `fix/careers-address-mira-road` (`70c73a4`): `src/app/jobs/careers/page.tsx` hard-coded `streetAddress` to "Vikhroli, Mumbai" for every non-Remote job and defaulted Mumbai postal to `400001` — both wrong. CDPL has no Vikhroli office and the real Mira Road postal is `401107` (Q1 / Phase 1 decision). Both defaults now read from `BUSINESS_INFO.address` (single source of truth, NAP consistent with Organization / LocalBusiness / city-page JSON-LD). Merged to `develop` and `develop`→`main`; production build PASSED — live (`origin/main` @ `3536d3e`). |
| 2026-05-22 | **BLG-039 extended — `previousSlugs` 308 redirects for posts + authors.** `fix/previousslugs-post-author` (`8f139d4`, 5 files): BLG-039 originally added the `previousSlugs` field only to the Category schema. Same pattern now mirrored on Post and Author. Two new GROQ queries (`POST_*` and `AUTHOR_CURRENT_SLUG_FOR_PREVIOUS_QUERY`); `/blog/[slug]/page.tsx` and `/blog/author/[slug]/page.tsx` consult them before falling through to `notFound()` and call `permanentRedirect` if a match is found. All three taxonomy entities (category/post/author) can now be safely renamed without losing accumulated SEO authority. Merged to `develop` (`617e48b`); `develop`→`main`; production build PASSED — live. |
| 2026-05-22 | **BLG-133 follow-up #1 — Hiring Partners migrated to Sanity.** `fix/blg-133-hiring-partners-migration` (`9fc0d40`, 6 files): the first component migration after the BLG-133 v1 schema scaffold. Editors can now add/retire partners from `/cms` instead of the codebase's hard-coded `COMPANIES` array. **Architecture:** new `SanityHiringPartner` type + `HIRING_PARTNERS_QUERY` (ordered by editor-supplied `order`, filtered to active partners with a logo). New `getHiringPartners()` helper in `src/lib/hiring-partners.ts` that fails open to `[]` so a CMS hiccup never errors the page. `PlacementsCompanyWallSection` stays `"use client"` and accepts an optional `sanityPartners` prop — when non-empty the rail renders Sanity-managed partners, otherwise it falls back to the curated local `COMPANIES`/`COMPANY_LOGOS` path exactly as before (zero regression). Home page + `/jobs/placements` (both server) now fetch and pass the prop; `MentorOutcomesSection` (a client component) is intentionally unchanged and keeps the local fallback. Cache: 1h revalidate + `hiringPartner` tag so the BLG-006 webhook refreshes the rail. **LOGO_TWEAKS limitation note:** per-logo visual tweaks (scale/position) are keyed by lowercase name — Sanity partners use defaults unless their name matches an existing entry. Future enhancement can promote those tweaks into the schema. Merged to `develop` (`c3a7440`); `develop`→`main`; production build PASSED — live. **Pattern established** for migrating the remaining 6 doc types (course/mentor/event/testimonial/service/city) when their consumer components are ready. |
| 2026-05-22 | **BLG-133 follow-up #2 — Mentors migrated to Sanity.** `fix/blg-133-mentor-migration` (`bb2d513`, 6 files): mentors moved off the hard-coded `MENTORS` array in `src/lib/mentorShared.ts`. Editors can now publish mentor docs in Studio and they flow through to the `/mentors` page card grid and the page-level `Mentor` JSON-LD. **Schema additions:** `domain` (option list matching the legacy `Mentor['domain']` discriminated union — keeps the page's domain colour chips correct for Sanity-managed mentors) and `location` (city/region string). **`getMentors()` helper** (`src/lib/mentors.ts`) fetches Sanity, maps onto the legacy `Mentor` shape (`expertise` → `highlights`, `social` object → `Social[]` array, `yearsOfExperience` → `'\\d+ years'` string, unknown domain → `'Other'`), and fails open to local `MENTORS` on any error. **`MentorsImpactSection`** (client) drops its direct `MENTORS` import and accepts a `mentors: Mentor[]` prop. **`/mentors`** is now async and passes the resolved list to both `generateMentorsPageAllSchemas` and `MentorsImpactSection`. Cache: 1h + `mentor` tag. **Event + service migrations deferred** — both have `[slug]` detail subdirectories and a larger schema mismatch than mentor (`PastEvent` carries `attendees`, `serviceType`, `trainingDuration`; `TrainingService` carries `icon`-as-React-component, `deliveryFormats`, `whoShouldAttend`) — they need a dedicated session with detail-page migration in scope. Merged to `develop` (`7d9dfd9`); `develop`→`main`; production build PASSED — live. |
| 2026-05-22 | **Spawned side-task #2 — stale 2025 course-batch dates stripped.** `fix/stale-course-batch-dates` (`11a7ac8`, 2 files): the side-task flagged from Sprint 6's BLG-110 audit. Inspection found both stale-date locations were **dead code** — the honest fix was deletion rather than fake-current dates. `FeaturedCoursesSection.tsx` declared `Course.nextBatch: string` and set "Oct 15/12/18, 2025" on every course, but the displayed countdown reads a dynamic `+48h` `Date` — the field was never rendered. `software-testing-course/data/data.ts` exported a `batches = [...]` array carrying three Dec-2025 / Jan-2026 start dates and fabricated-instructor names (`Rakesh Sir 15+ yrs`, `Neha Mam Ex-Accenture`, `Vikram Sir Ex-TCS`) but was **not imported anywhere**. Both removed entirely. No user-visible change — only the bundle is cleaner and future contributors aren't misled into thinking `nextBatch` is the source of truth. Real batch scheduling, when CDPL is ready to publish it, comes from the BLG-133 Sanity `course` doc type. Merged to `develop` (`7606bae`); `develop`→`main`; production build PASSED — live. **2 of 3 spawned side-tasks closed** (#1 careers NAP fix done earlier; #3 OG image dimensions remains — that one is a design/asset re-export task, not engineering). |
| 2026-05-26 | **BLG-133 follow-up #3 — Events migrated to Sanity (`/events` + `/events/[slug]`).** `fix/blg-133-event-migration` (`dd4dda6`, 7 files / +582 / −46): third BLG-133 component migration after Hiring Partners and Mentors, and the largest schema-extension of the three. The v1 event schema (12 fields, registration-style) was missing every editorial field the existing `PastEvent` consumers needed — `category` / `attendees` / `purpose` / `trainingDuration` / `sessionHighlights{title, points[]}[]` / `keyTakeaways{title, description}[]` / `highlights[]` / `specialSession` / `success` / `featured` / `gallery` / `videoUrl` / nested `organizerInfo` / nested `venueInfo`. **Schema extension** (`src/sanity/schemas/event.ts`): 16+ new fields wrapped into 6 fieldset groups (core / editorial / organizer / venue / media / seo); v1 fields (`format`, `startDate`, `endDate`, `speakers[]`, `registrationUrl`, `summary`, `isPublished`) preserved so upcoming registration-style events still get Schema.org Event coverage. **`organizerInfo` defaults** — left blank, mapper substitutes CDPL details from `CDPL_ORG` (the legacy data spread `CDPL_BASE` into every event; preserving that default keeps the detail page's "Organized by" block populated without forcing editors to re-enter CDPL for every event). **Queries** (`src/sanity/lib/queries.ts`): shared `EVENT_PROJECTION` constant used by `EVENTS_QUERY` (newest-first by `startDate`), `EVENT_BY_SLUG_QUERY`, and `EVENT_SLUGS_QUERY`. Image assets projected to URL strings; nested `organizerInfo` / `venueInfo` spread so the mapper sees plain string fields. **Mapper** (`src/lib/events.ts`): `sanityToPastEvent()` produces a full legacy-shape `PastEvent`, including a date formatter (`startDate`/`endDate` → `"YYYY-MM-DD"` or `"YYYY-MM-DD to YYYY-MM-DD"` to match the legacy freeform `date` strings the components print). `getEvents()` + `getEventBySlug()` both `try`/`catch` with fail-open to local `pastEvents`. Cached 1h + tagged `event` so the BLG-006 webhook refreshes the listing on edit. **Pages**: `src/app/events/page.tsx` (was sync) now async, awaits `getEvents()`; `src/app/events/[slug]/page.tsx` now awaits `getEvents()` (related-events corpus + `generateStaticParams`) and `getEventBySlug()` (both the page body and `generateMetadata`). **`RelatedEvents`** dropped its local `getFeaturedEvents()` import — now accepts `events: PastEvent[]` as a prop (same prop-drill pattern as Hiring Partners / Mentors). **Out of scope / spawned:** found 7 dead `EventDetails*Section.tsx` files in `src/components/sections/` — defined but never imported anywhere (they duplicate the active `components/events/` set). Flagged for a separate `chore/remove-dead-event-detail-sections` cleanup, same pattern as the BLG-110 dead-code findings. Typecheck clean. Merged to `develop` (`61def94`); `develop`→`main`; **production build of `61def94` PASSED (3m 46s, Vercel) — live in production.** With Events done, **BLG-133 component migrations: 3 of 7 complete** — remaining sprint-scope items: course (~30 course pages), testimonial (30+ per-course `TestimonialsSection` components), service (`/services` + `/services/[slug]`), city (765 city pages). |
| 2026-05-26 | **BLG-133 follow-up #4 — Services migrated to Sanity (`/services` + `/services/[slug]` + sitemap).** `fix/blg-133-service-migration` (`d0682f4`, 8 files / +473 / −119): fourth BLG-133 component migration. The v1 service schema was a misfit — it treated `icon` as a cover *image*, but every consumer renders a lucide-react component. The new schema (`src/sanity/schemas/service.ts`) has `iconName: string` with an option list of the 11 lucide icons the legacy data uses, plus every editorial field the consumers read: `color`, `shortDescription`, `fullDescription`, `features`, `benefits`, `whoShouldAttend`, `deliveryFormats`, `curriculum`, `outcomes`, `methodology`, `stats`, `keywords`. **Field names match the existing `TrainingService` / `ServiceClient` shapes one-to-one** so the mapper is a flat projection (no rename gymnastics). **Helper** (`src/lib/services.ts`): `getServices()` + `getServiceBySlug()` both return `ServiceClient[]` / `ServiceClient` — the serializable shape used at the RSC boundary. `ICON_NAME_BY_COMPONENT` Map covers the local-fallback path (legacy `icon: ComponentType` → string name). **Incidental bug fix:** the detail page's existing `toClientService` had a hidden default-everywhere bug — no legacy service entry had an `iconName` field set, so every detail page hero rendered `GraduationCap` regardless of which service. The new mapper resolves to the correct lucide icon. **`ServicesGridSection`** dropped `"use client"` (no hooks/state inside) and is now a server component that accepts `services: ServiceClient[]` as a prop and resolves the icon via the same `Icons[key]` pattern as `ServiceDetailHeroSection`/`CTASection`. **Pages**: `/services/page.tsx` is async, awaits `getServices()`; `/services/[slug]/page.tsx` uses the new helper, drops the inline `toClientService` (data already `ServiceClient`), and swaps `pastEvents` for `await getEvents()` so Sanity-published events with a matching `serviceType` show up here too. **Sitemap** (`src/app/sitemap.ts`) enumerates service slugs from `getServices()`. Typecheck clean. Merged to `develop` (`1d89425`), pushed. **Pending user merge `develop`→`main` to reach production.** With Services done, **BLG-133 component migrations: 4 of 7 complete** — remaining sprint-scope items: course (~30 course pages), testimonial (30+ per-course `TestimonialsSection` components), city (765 city pages). |
