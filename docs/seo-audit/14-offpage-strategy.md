# Phase 14 — Off-Page & Authority Strategy

> **Date:** 2026-05-19
> **Goal:** map the external strategy — backlink acquisition, digital PR, entity establishment (Wikidata/Wikipedia/Crunchbase/Clutch/G2), founder thought leadership — that compounds the on-site Cycle 2-3 fixes.

---

## 14.1 Current backlink profile (qualitative — Ahrefs/SEMrush data deferred)

Without paid SEO tools we cannot enumerate exact referring domains. **GSC Links report should be the first source** (cross-ref Phase 10 §10.8 paste-template).

| Observed source | Type | CDPL listed? |
| --- | --- | --- |
| Own social profiles (LinkedIn, Twitter, FB, Instagram, YouTube) | self-cite | ✅ |
| Justdial, Sulekha (typical for India businesses) | auto-listing | unconfirmed |
| Shiksha (formerly Naukri Learning) | directory | **❌ NOT FOUND** (Phase 12) |
| CollegeDunia, CareerLauncher | directory | unknown |
| Crunchbase / Tracxn / Clutch / G2 | startup/B2B directories | unknown |
| Wikipedia entity | encyclopedia | **❌ none** |
| Wikidata Q-ID | data graph | **❌ none — single highest-leverage external action (BLG-123)** |

---

## 14.2 Backlink acquisition plan (3-tier prioritisation)

### Tier 1 — Directory submissions (low effort, high baseline)

| Directory | Effort | Expected DR | Action |
| --- | --- | --- | --- |
| **Shiksha** (formerly Naukri Learning) | 1 hr/listing × 30 courses = 30 hrs | DR 80+ | submit each course as separate listing |
| **CollegeDunia** | similar | DR 70+ | submit institute + each course |
| **CareerLauncher** | 2-3 hrs total | DR 60+ | claim institute listing |
| **Justdial** | 1 hr | DR 70+ | claim + verify (already may exist) |
| **Sulekha** | 1 hr | DR 60+ | same |
| **Yellow Pages India** | 30 min | DR 50+ | basic listing |
| **Bing Places** | 30 min | DR 80+ | Bing-side parity with Google Business Profile |
| **Apple Maps Connect** | 30 min | n/a but trust signal | claim |
| **Tracxn** | 1 hr | DR 70+ | India startup directory |
| **Crunchbase** | 1 hr | DR 90+ | global directory — important for Phase 14 entity work |
| **AmbitionBox** (employer side) | 2 hrs | DR 70+ | corporate employer listing |
| **F6S** | 30 min | DR 60+ | startup directory |
| **GoodFirms** (training providers) | 1 hr | DR 70+ | training-provider directory |
| **Clutch** | 2-3 hrs | DR 75+ | B2B services |
| **G2** (training category) | 2-3 hrs | DR 80+ | EdTech directory |

> **BLG-NEW P1:** All Tier-1 directory submissions in Cycle 2 Sprint 1-2 weeks. ~30-50 backlinks acquired in 1 week of effort. Estimated DR lift: +5-10 over 90 days.

### Tier 2 — Content-driven backlinks (linkable assets)

| Asset | Build effort | Backlink potential |
| --- | --- | --- |
| **India Tech Salary Calculator** (BLG-100, BLG-128) | 1-2 weeks dev | high — directly cited by HR blogs / Glassdoor-adjacent content |
| **Free syllabus comparator** (CDPL course vs Simplilearn vs Edureka — apples-to-apples) | 1 week dev | medium — niche tool |
| **India Tech Hiring Report (annual)** | 1 month effort | high — first-party data magnet for journalists |
| **ISTQB Foundation Study Guide** (free PDF gated by email) | 1 week content | medium-high |
| **Career-path quiz** ("Testing vs Data Science vs DM") | 3-5 days dev | medium — viral potential |

### Tier 3 — Earned backlinks (digital PR + thought leadership)

| Source | Approach | Estimated link value |
| --- | --- | --- |
| **YourStory / Inc42 / ET Tech** (founder feature) | Sandeep Maske outreach — story of CDPL formation | DR 80+ each |
| **NASSCOM / TestingMind events** | speaking sponsorship | DR 70+ |
| **Analytics Vidhya** | guest tutorial post | DR 90+ |
| **KDnuggets** | guest tutorial post | DR 90+ |
| **Towards Data Science (Medium)** | trainer-bylined tutorial | DR 95+ |
| **HARO India** (HelpAReporterOut) | quote-source for India tech hiring stories | DR 60-90+ depending on outlet |
| **LinkedIn long-form** (Sandeep Maske + senior trainers) | founder thought leadership | brand mentions + AI citation source |
| **Industry-specific podcasts** | guest appearance | varies |
| **EdTech awards** (Education World, Brainfeed, ET EdTech, BW EdTech) | nominate CDPL | DR 70+ + credibility |

> **Best-effort target:** 50-100 high-quality backlinks over 12 months via Tier 1+2+3. Combined with Cycle 2 Sprint 6 content moat (35 new pages), this drives DR from current estimated ~30-40 to **target DR 50-60** within 12 months.

---

## 14.3 Entity establishment (highest GEO leverage)

Cross-references Phase 8 §8.6 + BLG-123 + BLG-070.

### 14.3.1 Wikidata Q-ID (free, immediate, P1)

**Action:** Create Wikidata entity for "Cinute Digital Private Limited" with:

```turtle
instance of: educational organization (Q2385804)
                private limited company (Q15911314)
country: India (Q668)
headquarters location: Mira-Bhayandar, Mumbai
founded: 2020
founder: Sandeep Maske
official website: https://www.cinutedigital.com/
LinkedIn ID: cinute-digital
Twitter username: cinutedigital
Instagram username: cinutedigital
Facebook ID: cinutedigital
YouTube channel: @cinutedigital
ISTQB partner: yes
AAA accredited: yes
ACTD accredited: yes
```

Zero notability bar for Wikidata (unlike Wikipedia). Estimated effort: 1 hour.

> **Once Wikidata Q-ID exists**, update `generateOrganizationSchema` `sameAs` array to include `https://www.wikidata.org/wiki/Q<ID>` — closes the entity-graph loop for AI engines.

### 14.3.2 Crunchbase profile (P1)

Founder Sandeep Maske should:
1. Claim/create CDPL Crunchbase profile
2. Add founders, funding (if any), team, news mentions
3. Link to LinkedIn, official site

Effort: 1-2 hours. DR 90+ backlink + trust signal.

### 14.3.3 Clutch profile (P1)

B2B services directory — important for B2B Corporate Training cluster (Sprint 6 BLG-176).

Effort: 2-3 hours (including review collection from past corporate clients).

### 14.3.4 G2 profile (P2)

Training category. Less essential than Clutch for India market but builds international footprint.

### 14.3.5 Tracxn profile (P2)

India startup directory. Lower priority unless seeking fundraising.

### 14.3.6 Wikipedia article (P3 — long-term)

Wikipedia notability requires 3+ independent reliable-source citations:
- HT / TOI / ET / Mint / FE coverage of CDPL
- YourStory / Inc42 founder feature
- NASSCOM / IT industry coverage

**Only attempt after Cycle 2-3 content cycle + 6-12 months of digital PR generates the source coverage.**

---

## 14.4 Founder thought leadership — Sandeep Maske

Per audit brief, founder content drives:
- Entity linkage CDPL → Sandeep Maske → Industry
- E-E-A-T at organizational level
- Personal brand SERP for "Sandeep Maske" queries (Knowledge Panel eligibility)

### Outreach plan

| Platform | Cadence | Content angle |
| --- | --- | --- |
| LinkedIn long-form | 2x/month | India IT hiring trends, CDPL alumni success patterns, ISTQB perspective |
| YourStory founder series | 1x | "How CDPL trained 425+ alumni in 4 years" |
| Inc42 op-ed | 1x | "Why India needs vertical-specific software testing institutes" |
| ET Tech interview | 1x | when news-pegged (e.g., new ISTQB syllabus, new course launch) |
| BW Education / Education World awards | nominate | annual cycle |

> **BLG-NEW P2 (extends BLG-064/BLG-123):** Founder content cadence + outreach. **Phase 14 deliverable for the user is the strategy; execution belongs to user / external PR partner.**

---

## 14.5 EdTech awards & speaking circuit

### Awards CDPL should nominate for

| Award | Window | Effort |
| --- | --- | --- |
| BW EdTech 40 Under 40 | annual | nomination |
| Education World awards | annual | nomination |
| Brainfeed awards | annual | nomination |
| ET EdTech awards | annual | nomination |
| ISTQB / ASTQB Excellence | varies | per-cycle |
| NASSCOM EdTech recognition | varies | per-cycle |

### Speaking circuit

| Event | Effort | Value |
| --- | --- | --- |
| TestingMind workshops | sponsor + speak | high — QA-vertical authority |
| NASSCOM events | sponsor | medium-high |
| EdTech India summit | speak | high |
| TiE Global Summit (Mumbai chapter) | speak | medium — founder networking |
| Mumbai University faculty workshops (FDP) | host | medium — content + backlinks from edu.in domains |

---

## 14.6 Internal "free tools" as linkable assets

Per Phase 12 BLG-100/BLG-128 + audit brief Sprint 6:

| Tool | Effort | Build location |
| --- | --- | --- |
| **India Tech Salary Calculator** | 1-2 weeks dev | `/tools/it-salary-calculator-india` |
| **Career Path Quiz** ("Testing vs Data vs DM") | 3-5 days | `/tools/career-path-quiz` |
| **Course Syllabus Comparator** (CDPL vs Simplilearn vs Edureka — apples-to-apples) | 1 week | `/tools/course-comparator` |
| **ISTQB Mock Test** | already exists | `/mock-test` (needs content depth — BLG-NEW) |
| **IT Salary Negotiation Cheatsheet** (gated PDF) | 1 week content | `/resources/salary-negotiation-guide` |

> Each linkable asset = potential 50-200 backlinks over 12 months from HR blogs, career sites, college TPO pages, freelance LinkedIn shares.

---

## 14.7 Brand SERP optimization — Knowledge Panel

### Current state (Phase 13 §13.8)

✅ **GBP + Knowledge Panel already exist** for "cinute digital mumbai"

### Optimization tactics

| Tactic | BLG | Effort |
| --- | --- | --- |
| Add `founder: { @type: Person, name: "Sandeep Maske", sameAs: [LinkedIn] }` to Organization JSON-LD | **BLG-064** | 5 min |
| Add Wikidata Q-ID to `sameAs` array | BLG-070 | 5 min after Q-ID created |
| Add Crunchbase, Clutch, G2 URLs to `sameAs` array | BLG-070 | 5 min |
| Ensure NAP consistency: same address on website + GBP + Justdial + Sulekha + Shiksha | BLG-182 + Phase 1 §1.7 | manual audit |
| Encourage Google reviews from real alumni (target: 4.9 / 1000+ reviews over 12 months) | BLG-173 | review-collection workflow |
| Add `description` field to GBP — drop non-defensible claims | BLG-044 (cross-cut) | 10 min |
| Add GBP posts (weekly cadence) for new batches / events / certifications | external | 30 min/week |

---

## 14.8 Off-page risk audit

### Toxic / spammy backlinks

Cannot enumerate without GSC Links + Ahrefs disavow data. **Phase 14 follow-up:**

1. Pull GSC Links → Top external linking sites
2. For any clearly-spammy domains (link farms, irrelevant niches), prepare disavow file
3. Submit to Google via `https://search.google.com/search-console/disavow-links`

**Risk assessment based on Phase 10b GSC data:** Manual Actions clean ✓, no spam signals. **Low toxic-backlink risk.**

### Negative SEO surface

- Bot block list in robots.txt (Phase 3 §3.1) blocks `MJ12bot`, `DotBot`, `BLEXBot`, `DataForSeoBot`, `PetalBot` — already disciplined.
- **No CDN-level rate-limiting** observed — vulnerable to scrape/clone attacks if competitive pressure mounts. P3.

---

## 14.9 Phase 14 backlog additions

| ID | Issue | Severity |
| --- | --- | --- |
| **BLG-189** | Pull GSC Links report → Top external + Top anchor distribution for baseline | P1 — pre-Phase 14 execution |
| **BLG-190** | Founder LinkedIn content cadence + YourStory/Inc42/ET Tech outreach | P2 (cross-cuts BLG-064) |
| **BLG-191** | EdTech awards nomination cycle (BW, Education World, Brainfeed, ET EdTech) | P3 |
| **BLG-192** | Speaking circuit pipeline (TestingMind, NASSCOM, EdTech India) | P3 |
| **BLG-193** | Real-alumni review acquisition workflow (target 4.9/1000+ reviews) | P1 (long-term, extends BLG-173) |
| **BLG-194** | Tier-1 directory submission sprint (Shiksha, CollegeDunia, Justdial, Crunchbase, Clutch — 15 directories total) | **P1** |
| **BLG-195** | Disavow audit + submit (after GSC Links pulled) | P2 |
| **BLG-196** | NAP consistency audit across all external listings (website + GBP + directories) | **P1** (extends BLG-182) |
| **BLG-197** | Wikidata Q-ID creation for Cinute Digital Pvt Ltd | **P1** (single highest-leverage external GEO action — BLG-123) |
| **BLG-198** | Crunchbase profile claim/create | P1 |
| **BLG-199** | Clutch profile create | P1 |

---

## 14.10 Phase 14 summary

### Top 5 highest-leverage external actions

| # | Action | Effort | Backlinks gained | When |
| --- | --- | --- | --- | --- |
| 1 | **Tier-1 directory submission sprint** (BLG-194) | 2-3 weeks | 30-50 | Cycle 2 Sprint 1-3 |
| 2 | **Wikidata Q-ID** (BLG-197) | 1 hr | 1 (but huge for GEO) | Cycle 2 Sprint 5 |
| 3 | **NAP consistency audit + GBP optimization** (BLG-196) | 4-6 hrs | n/a — quality signal | Cycle 2 Sprint 1 |
| 4 | **Founder thought leadership cadence** (BLG-190) | ongoing | 12-24/year | Cycle 2 Sprint 5+ |
| 5 | **Build 3 linkable free tools** (Salary Calc + Career Quiz + Syllabus Comparator) | 3-4 weeks dev | 100-300 over 12 mo | Cycle 2 Sprint 6 |

### External-strategy KPIs for 12 months

| KPI | Current | 12-month target |
| --- | --- | --- |
| Referring domains | unknown (likely 50-150) | 250+ |
| DR (Ahrefs) | unknown (~30-40 est.) | 50-60 |
| Google reviews on GBP | ~425 | 1000+ |
| Wikidata Q-ID | none | ✅ |
| Founder LinkedIn followers (Sandeep Maske) | unknown | +5000 |
| Brand mention monthly (Google Alerts) | unknown | 50+ |
| AI-engine citation rate ("best software testing institute India" queries) | unknown | trackable via brand monitoring after Cycle 2 |

### Backlog after Phase 14

**Total: 199 entries** (18 P0 / 75 P1 / 64 P2 / 42 P3)
