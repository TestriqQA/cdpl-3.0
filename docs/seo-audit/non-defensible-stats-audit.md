# Non-Defensible Stats Site-Wide Audit

> **Date:** 2026-05-28
> **Backlog:** BLG-205 (NEW — content-team cleanup), BLG-059 regression noted
> **Source rule:** `docs/seo-audit/_decisions.md` — the ONLY defensible trust stat is **"rating 4.9 / reviewCount 425"**. Specifically forbidden in JSON-LD or new copy: "5000 placed", "100% placement", "15+ years", "50 hiring partners".

---

## What's already been fixed

### JSON-LD layer (shipped today via `fix/blg-059-schema-generators-cleanup`, commit `bdfb27e`)

22 occurrences cleaned from `src/lib/schema-generators.ts`. Now emits compliant text to Google in the JSON-LD blobs across ~830 routes that use this file. Verification: `grep -cE "5[,]?000\+? ?(placed|students)|100\s*%\s*place|50\+? ?hiring" src/lib/schema-generators.ts` → 1 (the one match is a Sprint 1 cleanup-comment, meta-reference only).

---

## What still has to be fixed (visible UI — content-team scope)

All findings below were extracted via:

```bash
grep -rnE "5[,]?000\+? ?(placed|students|graduates|hired|alumni)|100\s*%\s*place(ment|d)|15\+? ?years? ?(of)?\s*(experience|industry)|50\+? ?(hiring partners|hiring)|500\+? ?hiring|95\s*%\s*placement|guaranteed (placement|job|interview)" src/ --include="*.tsx" --include="*.ts"
```

These are **rendered HTML / page metadata descriptions** — visible to humans on the live site and indexed by Google as page content (separate from JSON-LD). Replacement copy needs brand-team / marketing-team sign-off — not auto-fixable like the JSON-LD layer.

### Category A — "5,000+ placed" / "5000+ students" (5 occurrences)

| File | Line | Context |
| --- | --- | --- |
| `src/app/courses/software-testing-course/manual-testing-course/page.tsx` | 10 | meta description: "Master Manual Testing in 12 weeks. ISTQB prep, live projects, Jira & Agile training. **5,000+ placed**. Online & classroom batches. Enroll now!" |
| `src/app/our-team/page.tsx` | 20 | meta description: "Meet CDPL's team of expert trainers and mentors with **10+ years of industry experience**… trained **5000+ students**." |
| `src/components/home/HomeFinalCTASection.tsx` | 165 | visible CTA: "Join **5000+ students** who have successfully launched their careers…" |
| `src/components/home/HomeHeroSection.tsx` | 147 | hero subtitle (desktop): "Launch your tech career with industry-leading courses, live projects, and **guaranteed job interviews**. Join **5000+ successful graduates** today." |
| `src/components/home/HomeHeroSection.tsx` | 603 | hero subtitle (mobile): same as above |
| `src/components/masters-in-data-engineering/CtaSection.tsx` | 33 | visible CTA: "Join **5,000+ alumni** who transformed their careers." |

### Category B — "100% placement [support/assistance]" (28 occurrences)

| File | Line | Context |
| --- | --- | --- |
| `src/app/courses/bi-courses/masters-in-data-engineering/page.tsx` | 52 | meta description: "…with Spark and Hadoop. **100% placement**." |
| `src/app/courses/software-testing-course/java-course/page.tsx` | 42 | meta description: "Best Java course in Mumbai… **100% placement**. Live projects, global certificate." |
| `src/app/courses/software-testing-course/page.tsx` | 20 | meta description: "…Certified QA training with **100% placement support**." |
| `src/app/courses/software-testing-course/python-course/page.tsx` | 41 | meta description: "Best Python course in Mumbai… **100% placement**." |
| `src/app/page.tsx` | 58 | home page keyword: `"100% placement support"` (in keywords array — feeds `<meta name="keywords">`) |
| `src/app/services/[slug]/page.tsx` | 111 | dynamic meta description fallback: "Join CDPL's ${service.title} training program. Industry-expert led courses with **100% placement support**." |
| `src/components/advance-manual-automation-testing/HeroSection.tsx` | 127 | visible hero: "production-like projects… and get **100% placement assistance**." |
| `src/components/advance-software-testing/CtaSection.tsx` | 53 | visible CTA: "Enroll now for **100% placement support**." |
| `src/components/advance-software-testing/HeroSection.tsx` | 158 | visible hero: "…Get **100% placement support** and become a complete Automation Test Engineer." |
| `src/components/ai-bootcamp/WhyEngineerProgram.tsx` | 199 | "**100% placement assistance** across agencies" |
| `src/components/api-testing/HeroSection.tsx` | 136 | visible hero: "…secure your career with our **100% placement support**." |
| `src/components/automation-testing-course/CtaSection.tsx` | 41 | visible CTA: "ISTQB + AI automation, and **100% placement assistance**." |
| `src/components/data-analytics/CtaSection.tsx` | 36 | visible CTA: "…secure your future with **100% placement assistance** and hands-on tool mastery…" |
| `src/components/data-analytics-python/HeroSection.tsx` | 94 | visible hero: "…with **100% placement support**." |
| `src/components/Digital-Marketing/HeroSection.tsx` | 314 | visible hero: "Become a certified Digital Marketing expert. Learn… with live projects and **100% placement support**." |
| `src/components/digital-marketing-course/CareerSection.tsx` | 67 | visible: "…to secure **100% placement** in top MNCs and Agencies." |
| `src/components/digital-marketing-course/CtaSection.tsx` | 34 | visible CTA: "Join **5,000+ successful learners**… Get **100% placement assistance**…" (also Cat A) |
| `src/components/digital-marketing-course/WhyMasterProgram.tsx` | 82 | visible: "Master… with **100% placement support** to launch your career." |
| `src/components/home/HomeFAQSection.tsx` | 80 | FAQ A: "…hands-on projects, industry certifications, and **100% placement support**." |
| `src/components/home/HomeFAQSection.tsx` | 84 | FAQ A: "…provide **100% placement support** including… **50+ hiring partners**." (also Cat D) |
| `src/components/home/HomeFinalCTASection.tsx` | 173 | bullet: "**'100% placement support guaranteed'**" |
| `src/components/java-course/HeroSection.tsx` | 141 | visible hero: "and get **100% placement assistance**." |
| `src/components/manual-testing-course/HeroManualTesting.tsx` | 419 | visible: "Available in online and classroom modes (Mumbai, Thane) with **100% placement support**." |
| `src/components/python-course/CtaSection.tsx` | 31 | visible CTA: "**100% placement assistance**, portfolio projects, and a…" |
| `src/components/sections/AffiliateContentSection.tsx` | 19 | visible: "Our **100% placement support** and project-based learning approach…" |
| `src/components/sections/FAQSection.tsx` | 52 | FAQ A: "Yes! We offer **100% placement assistance**… direct connections with our **500+ hiring partners**." (also Cat D variant — inflated to 500) |
| `src/components/sections/FAQSection.tsx` | 102 | FAQ A: "…we provide **100% placement assistance**… Our **placement rate is 95%**…" (also Cat E new finding) |
| `src/components/sections/LocationsCTASection.tsx` | 149 | visible: "**100% placement assistance**" |
| `src/components/software-testing-course/data/data.ts` | 454 | FAQ data: "…with **100% placement assistance**…" |
| `src/components/software-testing-course/FAQSection.tsx` | 33 | FAQ A: "…with **100% placement assistance**…" |

### Category C — "15+ years [industry experience]" (18 occurrences)

| File | Line | Context |
| --- | --- | --- |
| `src/components/advance-manual-automation-testing/HeroSection.tsx` | 34 | hero badge: `description: '15+ yrs in QA'` |
| `src/components/AI-Courses/HeroSection.tsx` | 186 | hero stat: `<div>**15+ Years**</div>` |
| `src/components/AI-Courses/HeroSection.tsx` | 216 | hero badge: `<span>**15+ Years Industry Experience**</span>` |
| `src/components/BI-Courses/HeroSection.tsx` | 176 | hero stat: same pattern |
| `src/components/BI-Courses/HeroSection.tsx` | 204 | hero badge: same pattern |
| `src/components/data-analytics-python/HeroSection.tsx` | 151 | "<strong>**15+ Years**</strong> Industry Experience" |
| `src/components/dbms-course/HeroSection.tsx` | 27 | hero badge: `description: '15+ yrs MySQL & Oracle certified'` |
| `src/components/Digital-Marketing/HeroSection.tsx` | 174 | hero stat: same pattern |
| `src/components/Digital-Marketing/HeroSection.tsx` | 202 | hero badge: same pattern |
| `src/components/DS&ML-Courses/HeroSection.tsx` | 176 | hero stat: same pattern |
| `src/components/DS&ML-Courses/HeroSection.tsx` | 208 | hero badge: same pattern |
| `src/components/etl-testing/HeroSection.tsx` | 50 | `description: '15+ yrs in Data Warehousing & BI'` |
| `src/components/home/HomeHeroSection.tsx` | 55 | hero badge: `**15+ Years Industry Experience**` |
| `src/components/home/HomeHeroSection.tsx` | 182 | hero stat: same pattern |
| `src/components/manual-testing-course/InstructorSection.tsx` | 164 | `<InstructorFeature text="**15+ Years in Quality Assurance**" ...>` |
| `src/components/software-testing-course/HeroSection.tsx` | 167 | hero stat: same pattern |
| `src/components/software-testing-course/HeroSection.tsx` | 196 | hero badge: same pattern |
| `src/lib/seo-config.ts` | 326 | `'15+ Years Experience'` (probably feeds an OG / meta keyword somewhere) |

(`src/lib/jobsData.ts:272` has `exp: "2–15 yrs"` — this is a JOB POSTING's required-experience range, NOT a CDPL years-of-operation claim. Defensible. Leave alone.)

### Category D — "50+ hiring partners" / "500+ hiring partners" (5 occurrences)

| File | Line | Context |
| --- | --- | --- |
| `src/components/home/HomeFAQSection.tsx` | 84 | FAQ A: "…**50+ hiring partners**." |
| `src/components/home/HomePlacementSupportSection.tsx` | 34 | "Direct referrals to our **50+ hiring partners** across India for guaranteed interviews." |
| `src/components/home/HomeWhyChooseSection.tsx` | 81 | "Guaranteed interview opportunities with our **50+ hiring partners** and dedicated placement support." |
| `src/components/manual-testing-course/CareerSection.tsx` | 297 | `description="**50+ partner companies**, curated openings, and weekly recruiter connects."` |
| `src/components/sections/FAQSection.tsx` | 52 | FAQ A: "…direct connections with our **500+ hiring partners**." (**500**, inflated even further from 50) |

### Category E — Other non-defensible claims (bonus findings)

| File | Line | Claim | Notes |
| --- | --- | --- | --- |
| `src/components/sections/FAQSection.tsx` | 102 | "**Our placement rate is 95%**" | New stat not in `_decisions.md` forbidden list, but **equally non-defensible** without a source — should be removed |
| `src/app/courses/digital-marketing-courses/digital-marketing-course/page.tsx` | 42 | "…with **guaranteed placement assistance**." | "Guaranteed" + "placement" = legally risky (FTC-style false advertising in many jurisdictions). Use "placement support" instead |
| `src/app/courses/software-testing-course/page.tsx` | 20 | "Certified QA training with **guaranteed interviews**." | Same — "guaranteed interviews" can't be guaranteed |
| `src/components/AI-Courses/data/data.ts` | 19 | "…**guaranteed interview opportunities**." | Same |
| `src/components/BI-Courses/data/data.ts` | 19 | "…**guaranteed interview opportunities**." | Same |
| `src/components/data-analytics-with-tableau/WhyTableauProgram.tsx` | 65 | "…and **guaranteed job support**." | Same |
| `src/components/DS&ML-Courses/data/data.ts` | 18 | "…**guaranteed interview opportunities**." | Same |
| `src/components/home/HomeFAQSection.tsx` | 84 | "…**guaranteed interview opportunities** with our 50+ hiring partners." | Same |
| `src/components/home/HomeHeroSection.tsx` | 147 + 603 | "…**guaranteed job interviews**." | Same |

---

## Summary

| Category | Count | Defensible? |
| --- | --- | --- |
| A. "5,000+ placed/students/alumni" | 6 | No — never verified at this scale |
| B. "100% placement [support/assistance]" | 28 | No — false precision; CDPL itself says elsewhere "placement rate is 95%" |
| C. "15+ years industry experience" | 18 | No — CDPL was founded 2020 (5 yrs); claim refers to individual instructors' careers, not CDPL's operating history. Confusing at minimum |
| D. "50+ / 500+ hiring partners" | 5 | No — never verified; 500 vs 50 is internally inconsistent |
| E. Other (95% rate, "guaranteed") | 9 | No — "guaranteed" + job/placement is legally risky |
| **TOTAL (visible UI)** | **66** | |
| **(JSON-LD layer, already fixed today via bdfb27e)** | (22) | Now compliant |

---

## Recommended fix sequence (content team)

1. **Category A + B + D + E** can largely be cleaned with the **same substitution pattern** the JSON-LD cleanup used:
   - `"100% placement support"` → `"placement support"`
   - `"100% placement assistance"` → `"placement assistance"`
   - `"5,000+ placed"` / `"5000+ students"` / `"5000+ successful graduates"` → drop the phrase (or, if a number IS wanted: use the defensible `"425+ verified reviews"`)
   - `"50+ hiring partners"` / `"500+ hiring partners"` → `"our hiring partner network"`
   - `"guaranteed (job|interview|placement) (support|assistance|interviews?)"` → drop `guaranteed`
   - `"95% placement rate"` → drop the line

2. **Category C (15+ years)** needs a different framing decision:
   - Option (a): change to **"led by instructors with 15+ years of industry experience"** — accurate (referring to the trainer's career, not CDPL's) but still uses a number CDPL hasn't sourced
   - Option (b): change to **"led by industry-veteran instructors"** — fully qualitative, no number
   - Option (c): drop the badge entirely from hero sections; leave the "15+ years" text only in the per-instructor bio where it's literally about that individual

3. **Replacement copy needs marketing/brand sign-off** before pushing — most of these are above-the-fold hero text where CDPL has previously decided to use these claims commercially. A find-replace alone isn't enough; new copy needs to convey value without the inflated stats. The audit can't make that call.

4. After replacement copy is approved, the actual edits are **mechanical** (~1-2 hours for one engineer or content editor working through the punch-list above).

---

## Raised as BLG-205 (P0 — content team)

The visible-UI cleanup is genuinely P0 because:

- "100% placement" is **legally risky** (false-advertising claims in India and most other jurisdictions if not literally true)
- Inconsistent stats (50 vs 500 hiring partners) damage CDPL's credibility when prospects notice
- The audit's own `_decisions.md` explicitly forbids these claims
- Cycle 2 Sprint 1 already cleaned the JSON-LD/meta layer but the visible UI was deliberately deferred per Cycle 2 scope — this audit closes the loop on what's still pending

Severity bumped from "spawned chip" (the original homepage hero observation) to **P0 backlog item** with concrete punch-list of 66 file:line locations.
