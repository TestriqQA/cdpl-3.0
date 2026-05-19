# Audit decisions log

> User-confirmed factual decisions. Phase 5 (schema) and fix-backlog work from this.

## 2026-05-19 — Phase 1 confirmations

| Decision | Value | Implication |
| --- | --- | --- |
| **Authoritative address** | `Mira Road` — `Office #1, 2nd Floor, Ashley Tower, Kanakia Road, Vagad Nagar, Beverly Park, Mira Road, Mira Bhayandar, Mumbai 401107` (current source-code value in [src/lib/seo-config.ts:68-79](../../src/lib/seo-config.ts#L68)) | LocalBusiness / Organization / PostalAddress JSON-LD uses this. NAP must match across Google Business Profile, Justdial, Sulekha, Shiksha, CollegeDunia, Crunchbase, Clutch, LinkedIn. |
| **Founded year** | `2020` (current source-code value in [src/lib/seo-config.ts:95](../../src/lib/seo-config.ts#L95)) | Organization JSON-LD `foundingDate: "2020"`. `yearsOfExperience: 15` is therefore **incorrect** and a trust-signal liability — Phase 5 will recommend dropping/correcting. |
| **AggregateRating verifiable** | ✅ `rating: 4.9` + `reviewCount: 425` — confirmed real | OK to emit `AggregateRating` in JSON-LD on home + reviews + course detail pages. |
| **studentsPlaced: 5000** | ❌ **Not confirmed defensible** | **Do NOT include in JSON-LD.** May be used as a marketing claim in body copy, but Phase 5 will not surface this in machine-readable schema. Treat as soft trust signal only. |
| **successRate: 100% placement** | ❌ **Not confirmed defensible** | **Do NOT include in JSON-LD.** A 100% placement claim is hard to substantiate and is exactly the kind of YMYL-adjacent over-claim that draws regulatory attention in India EdTech. Phase 5 + Phase 7 will recommend rephrasing to "Placement assistance" rather than "100% placement". |
| **hiringPartners: 50** | ❌ **Not confirmed defensible** (only 9 named in `HIRING_PARTNERS` array) | **Do NOT include "50+ hiring partners" in JSON-LD.** Use the actual named list. Phase 7 / Sprint 6 will recommend a content effort to grow the named list. |
| **yearsOfExperience: 15** | ❌ **Inconsistent with founded year (2020)** | Phase 5 will recommend removing or replacing with the founder's personal experience (Sandeep Maske's 15 yrs in IT, **if** that is the intended claim — separate from company age). |
| **Founder** | `Sandeep Maske` (per brief — not in source) | Phase 5 will recommend adding `founder: { @type: Person, name: "Sandeep Maske" }` to Organization schema with LinkedIn `sameAs`. User to confirm Sandeep Maske LinkedIn URL in Phase 5. |
| **Twitter handle** | `@cinutedigital` / `https://x.com/cinutedigital` (per source) | Verify profile exists in Phase 11. |
