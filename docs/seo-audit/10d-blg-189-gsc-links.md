# Phase 10d — BLG-189 GSC Links Report Pull

> **Date pulled:** 2026-05-28 via Chrome MCP (browser "sushma")
> **Property:** `https://www.cinutedigital.com/` — URL-prefix
> **Account:** `seo@testriq.com`
> **Investigation scope:** BLG-189 (GSC Links report pull — baseline backlink + internal-link data the audit didn't have). Feeds **BLG-194** (directory-submission sprint), **BLG-195** (disavow audit), **BLG-196** (NAP audit), **BLG-070** (Org sameAs once profiles exist).

---

## 10d.1 Headline metrics

| Metric | Value | Read |
| --- | --- | --- |
| **Total external links** | **204** | Very low for a 6-year-old site with ~600 indexed pages — sub-1 external link per page on average. Confirms the audit's hypothesis that CDPL's organic ceiling is link-equity-bound, not on-page-bound. |
| **Total internal links** | **85,880** | Healthy — confirms internal cross-linking from MegaMenu / Footer / sidebars / sitemap is fanning out signal correctly. |
| **Unique external linking domains** | **46** | Long tail: 9 domains contribute 2+ links, 37 domains contribute exactly 1 link each. |
| **Concentration: top 2 domains** | **128 / 204 = 63%** | Of which **35% from a single Turkish SEO-spam domain** (see §10d.4). |

The 204 external-link figure is the **single most important number in this report**. For comparison, the Edureka / Simplilearn / Intellipaat competitor backlinks audited in Phase 12 ran into the tens of thousands. CDPL is link-poor by orders of magnitude, which directly explains the position-16 average rank in Phase 10b — the on-page content is mostly fine; the authority isn't there.

---

## 10d.2 Top linked pages — external

| URL | External links |
| --- | --- |
| `https://www.cinutedigital.com/` | **128** |
| `/blog` | 5 |
| `/aaa-certification` | 1 |
| `/about-us` | 1 |
| `/actd-certification` | 1 |
| _(35+ more pages with 1 link each, mostly the long tail)_ | |

**Reading:** 128 of 204 (63%) external links point at the home page. Almost no commercial-keyword landing pages (city-courses, course-detail, services) have ANY external backlinks. This is a textbook "all brand mentions, no deep links" profile — what gets people to the site is brand search, and once they're there, internal links carry them deeper. The downstream consequence is that high-intent landing pages (`/software-testing-course-in-mumbai`, `/services/sttp`) have no off-page authority signal beyond what flows through the internal-link graph.

---

## 10d.3 Top linked pages — internal

| URL | Internal links |
| --- | --- |
| `/` | **1,557** |
| `/courses/software-testing-course/python-course` | **953** |
| `/about-us` | 921 |
| `/contact-us` | 899 |
| `/jobs/job-openings` | 888 |
| `/reviews` | 887 |
| `/blog/category/software-testing` | 882 |
| `/jobs/live-jobs` | 882 |
| `/software-testing-course-in-ahmedabad` | _shown but truncated count_ |
| `/software-testing-course-in-mumbai` | _shown but truncated count_ |

**Reading:** Two anomalies worth flagging:

1. **`/courses/software-testing-course/python-course` is internally-linked 953 times — same order of magnitude as `/about-us` (921) and `/contact-us` (899).** That's far more than any other course detail page. Some component (Footer? per-course sidebar?) likely cross-references python-course on every page. Either it's intentional (python is the entry-point most cities link to) or it's an accidental hard-coded sibling link. Worth a code-side check.

2. The two city pages visible — `software-testing-course-in-ahmedabad` and `software-testing-course-in-mumbai` — are evidence the internal city-page interlinking is working (each city page links to every other city page for the same family). Healthy.

---

## 10d.4 Top linking sites — external (full breakdown)

**46 unique linking domains.** Listed in clicks-descending order, with read:

| # | Site | Linking pages | Target pages | Read |
| --- | --- | --- | --- | --- |
| 1 | **websitedesing.com.tr** | **71** | **71** | **🚨 SPAM** — Turkish SEO link-farm. Title: _"Profesyonel Web Tasarım Hizmetleri"_, sells _"single-page websites delivered in 10 minutes for 20 Euros"_. Domain name itself misspells "websitedesign" → "websitedesing" (classic spam-fingerprint). 1-link-per-target-page across 71 different CDPL URLs = automated link injection, not organic mention. **Strongest disavow candidate. Single biggest cleanup item.** |
| 2 | linkedin.com | 57 | 2 | ✅ Healthy — LinkedIn shares/posts concentrating on 2 CDPL pages (probably `/` + `/about-us`). Brand mentions, real authority signal. |
| 3 | bonjourdewi.com | 10 | 1 | ⚠️ Unclear — single-target spread across 10 pages on one domain. Worth a sample check. |
| 4 | medium.com | 7 | 2 | ✅ Healthy — Medium articles citing CDPL. Real authority. |
| 5 | hondaikmciledug.co.id | 4 | 1 | 🚨 Likely spam — Indonesian domain, irrelevant niche. |
| 6 | koreaportal.com | 4 | 1 | 🚨 Likely spam — Korean portal, irrelevant. |
| 7 | anarkismo.net | 3 | 1 | 🚨 Almost certainly spam — leftist/anarchist political site, zero topical relevance to EdTech. |
| 8 | **cinutedigital.net** | 3 | 1 | ⚠️ **Domain doesn't currently resolve** (`curl -sIL` returns nothing). Either an expired CDPL-owned variant whose links Google still indexes, a typo-domain someone registered speculatively, or a parked domain. Not actively serving content — lower priority concern, but worth a defensive WHOIS check (BLG-NEW). |
| 9 | orangepi.org | 3 | 1 | ⚠️ Unclear — hardware brand site, unclear context. |
| 10 | clickindia.com | 2 | 1 | ✅ Indian classifieds — legit-ish. |
| 11 | pinterest.com | 2 | 1 | ✅ Legit. |
| 12 | siliconindia.com | 2 | 1 | ✅ Tech publication — real authority. |
| 13 | trustpilot.com | 2 | 1 | ✅ Reviews platform — legit. |
| 14 | yandex.ru | 2 | 1 | ✅ Search engine — syndicated. |

**Single-link long tail (32 domains, 1 link each — selected):**

| Domain | Read |
| --- | --- |
| sulekha.com | ✅ Indian directory — matches existing BLG-184 (Justdial/Sulekha/Bing Places listings). Already 1 backlink; need full claim/optimize. |
| tracxn.com | ✅ Startup database — matches BLG-199 (Tracxn profile create). Already 1 link; need actual profile. |
| internshala.com | ✅ Indian internships site — relevant niche. |
| zoominfo.com | ✅ B2B database — legit. |
| f6s.com | ✅ Startup directory — legit. |
| coursevidya.com | ✅ Educational directory — relevant. |
| bhavans.ac.in | ✅ Academic — probably from FDP / MoU partnerships (Phase 11 events list). |
| opendatascience.com | ✅ Tech community — relevant. |
| glassdoor.ie | ✅ Reviews — legit. |
| twitter.com | ✅ Social mention. |
| about.me | ✅ Personal profile, probably a mentor. |
| izolacniskla.cz | 🚨 Czech "insulating glass" — totally irrelevant niche. Spam. |
| horazdovice.cz | 🚨 Czech, irrelevant. |
| forumtransportu.pl | 🚨 Polish transport forum — irrelevant. |
| fanart-central.net | 🚨 Fan-art community — irrelevant. |
| godnamegenerator.com | 🚨 Random-content generator — irrelevant. |
| _(other long tail domains: actfornet.com, bharathlisting.com, bloomberry.com, enterpriseleague.com, loktej.com, opendi.in, phacility.com, pnndigital.com, sangritimes.com, techfeed.io, up18news.com, uplers.com, uscgq.com, websrvcs.com — read each individually before disavow)_ | |

**Disavow shortlist (high confidence):**
- websitedesing.com.tr (entire domain — 71 links, single biggest spam vector)
- hondaikmciledug.co.id
- koreaportal.com
- anarkismo.net
- izolacniskla.cz
- horazdovice.cz
- forumtransportu.pl
- fanart-central.net
- godnamegenerator.com

**Disavow shortlist (medium confidence — investigate before adding):**
- bonjourdewi.com, orangepi.org, the unfamiliar `.cz` / single-link foreign domains in irrelevant niches.

---

## 10d.5 Top anchor text — external

| # | Anchor text | Read |
| --- | --- | --- |
| 1 | `https cinutedigital com` | URL-shaped |
| 2 | `www cinutedigital com` | URL-shaped |
| 3 | `cinutedigital com` | URL-shaped |
| 4 | `cinute digital` | Brand |
| 5 | `certification preparation` | **Only real keyword anchor in the top 5** |

**Reading:** **4 of top 5 anchors are URL-shaped or pure brand.** This is the textbook signature of a link profile dominated by:
- Automated/scraper sites that include the URL as the anchor (the websitedesing.com.tr footprint)
- Social-media pasted URLs (LinkedIn shares)
- Generic directory listings ("Cinute Digital" as company name)

It's NOT the signature of an editorial backlink profile where journalists / bloggers / partners link with descriptive anchor text like _"the best software testing course in Mumbai"_ or _"data science certification with placement"_. Those keyword-rich anchors would feed Google's understanding of WHAT CDPL ranks for. Their absence means CDPL's link equity contributes to ranking for "cinute digital" branded queries (where the site already dominates) but minimally helps the commercial keyword targets (`software testing course`, `data science training`, etc.) where the position-16 ceiling lives.

This is hard to fix externally — you can't easily control what anchor text other sites use. The practical lever: when CDPL participates in BLG-194 directory submissions, BLG-191 EdTech awards, or BLG-193 review acquisition, **request descriptive anchor text** ("Software Testing Course in Mumbai by Cinute Digital", not just "Cinute Digital"). Templates / outreach copy should pre-write the desired anchor.

---

## 10d.6 Findings & recommendations

### 10d.6.1 Reaffirms existing backlog items

| # | Existing entry | What this data adds |
| --- | --- | --- |
| **BLG-194** | Tier-1 directory submission sprint (15 directories) | 9 of 15 already have 1 link each (sulekha, tracxn, internshala, zoominfo, f6s, coursevidya, glassdoor, opendi, bharathlisting) → those listings exist as orphan mentions; the directory sprint should **claim + optimize** rather than create-from-scratch. Lower effort than originally scoped. |
| **BLG-195** | Disavow audit | **Now actionable** — concrete shortlist of 9 high-confidence disavow domains identified (above). websitedesing.com.tr alone is 35% of the entire backlink profile. Drafting a disavow.txt for these is a 30-min task; uploading to GSC is another 15 min. Estimated impact: cleaner profile, no more confusion from spam signals diluting topical relevance. |
| **BLG-196** | NAP audit | Existing 46 external linking domains are the universe to NAP-audit against. Cross-reference each domain's CDPL mention against the canonical NAP (Mira Road address, +91 8488988984, founded 2020) — flag any divergences. |
| **BLG-070** | Org `sameAs` once external profiles exist | linkedin.com (57 links to 2 pages) confirms the LinkedIn company page is established → can already be added to Org `sameAs`. Tracxn, Sulekha existing as 1-link mentions suggest claimable profiles. After claiming + optimizing them, add to `sameAs`. |
| **BLG-184** | Sulekha + Justdial + Bing Places listings | sulekha.com already has 1 backlink → there's at least an unclaimed listing. Verify + claim. |
| **BLG-199** | Tracxn profile create | tracxn.com already has 1 link → unclaimed listing exists, claim it. |

### 10d.6.2 New backlog entries

| # | Title | Severity |
| --- | --- | --- |
| **BLG-202** (new) | `cinutedigital.net` domain investigation — domain doesn't resolve but 3 backlinks reference it. Defensive WHOIS lookup: is this an expired CDPL registration that should be renewed (brand-protection + recover the link equity by 301-redirecting `.net` → `.com`), a typo-domain to ignore, or a third-party speculative registration? | P3 |
| **BLG-203** (new) | Anchor-text outreach template — when participating in directory submissions / award submissions / review platforms, request descriptive keyword anchors rather than plain brand mentions. Pre-write the requested anchor text in outreach copy ("Software Testing Course in Mumbai by Cinute Digital", not "Cinute Digital"). Hard to control externally but worth the ask. | P3 |
| **BLG-204** (new — code) | Internal-link audit: `/courses/software-testing-course/python-course` has 953 internal links, far more than any other course detail page (next-highest course detail is the city-pages at ~885). Either intentional (python is anchor course) or a hard-coded sibling link in some component. Worth a code-side check — if accidental, redistribute the link signal more evenly. | P3 |

### 10d.6.3 The headline ask

CDPL is **link-poor**, not on-page-poor. The audit's existing Cycle 2 + post-Cycle-2 work has fixed almost every on-page issue (schema, canonicals, redirects, metadata, content cleanup, AI-ingestion endpoints, Sanity migration of 4 entity types). The remaining ceiling is authority. Sprint priority should now lean heavily on:

1. **BLG-195 disavow** (~1 hour to draft + upload). Removes the single biggest source of negative signal.
2. **BLG-194 directory claim-and-optimize sprint** (~1 week content-team work). Lower effort than originally scoped because 9 of 15 directories already have orphan mentions.
3. **BLG-191 / BLG-192 EdTech awards + speaking circuit** (multi-month, founder-driven).
4. **BLG-197 / BLG-198 / BLG-199 / BLG-130** Wikidata + Crunchbase + Clutch + G2 profile creation (multi-week, external-team).

---

## 10d.7 Verification commands

```bash
# 1. Verify cinutedigital.net non-resolution (BLG-202)
curl -sIL https://www.cinutedigital.net | head -1
# Currently: nothing (no DNS). Target for BLG-202: decide on action.

# 2. Verify the python-course internal-link concentration (BLG-204)
#    Grep the components folder for hard-coded references
grep -rE 'python-course' src/components --include='*.tsx' | wc -l
# Sanity check: if > ~30, there's a high-volume reference somewhere.

# 3. After disavow ship (BLG-195), re-check 28-day external-link count
#    (Google takes ~weeks to honour disavow; first sign is GSC Links count dropping)
```
