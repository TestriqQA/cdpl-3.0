# Phase 10e — BLG-202 `cinutedigital.net` WHOIS Investigation

> **Date pulled:** 2026-05-28 via Verisign RDAP (the official ICANN-mandated WHOIS-replacement protocol)
> **Source:** `curl https://rdap.verisign.com/net/v1/domain/cinutedigital.net`
> **Backlog:** BLG-202 (Phase 10d follow-up)
> **TL;DR:** The `.net` is **actively owned by a third party** who registered it 2 years before CDPL was founded, has it parked, and renewed it in January 2026. Not retrievable by waiting for expiry. Three forward options laid out below.

---

## 10e.1 Public registry data

| Field | Value |
| --- | --- |
| Domain | **cinutedigital.net** |
| Status | `client transfer prohibited` (standard registrar lock — prevents unauthorised transfer) |
| Registrar | **HOSTINGER operations, UAB** (Lithuania-based budget hosting / domain reseller; IANA Registrar ID 1636) |
| Abuse contact | `abuse-tracker@hostinger.com` / `+370 64503378` |
| Registered | **2018-01-17** |
| Expiration | **2027-01-17** (~8 months out at time of pull) |
| Last changed | **2026-01-06** (recently renewed for another year — actively paid for) |
| Nameservers | `NS1.DNS-PARKING.COM`, `NS2.DNS-PARKING.COM` |
| DNSSEC | Not enabled |
| Registrant identity | Hidden by WHOIS privacy — Hostinger applies privacy to most registrations by default |
| Live HTTP response | `curl -sIL https://cinutedigital.net` → nothing (parked, no web server) |

---

## 10e.2 Reading the data

### Three facts that matter

1. **The domain predates CDPL.** Registered **2018-01-17**, two full years before Cinute Digital Pvt. Ltd. was incorporated (`_decisions.md`: founded 2020). Whoever registered it could not have been infringing CDPL's trademark at the time — the trademark didn't exist yet.

2. **The domain is actively paid for.** Last renewal was January 2026 — a recent owner-initiated payment, not a passive auto-renewal that auto-cancels if the owner walks away. The owner cares enough to keep paying.

3. **The domain serves no content.** Nameservers point at `DNS-PARKING.COM` — a generic domain-parking service. There's no website, no email, no redirect. The 3 backlinks Phase 10d found pointing AT this domain don't transfer link equity (the linked URL doesn't actually serve a page), but they don't hurt CDPL either (Google treats them as 3rd-party text mentions of a string, not as quality signals).

### What scenario fits

| Scenario | Likelihood | Notes |
| --- | --- | --- |
| **A.** Speculative domain squatter waiting for a sale | **Medium** | Squatters often hold cheap-to-renew brand-shaped domains and wait for someone to offer to buy. But squatters often let them lapse if no buyer materialises; this one renewed. |
| **B.** Independent person / business with the same name idea | **Low** | "Cinute Digital" is a coined / brandable name, not a generic phrase — unlikely two unrelated parties picked it. |
| **C.** A former CDPL founder / employee, registered before incorporating at `.com` | **Medium** | Plausible — common pattern where someone registers multiple TLDs early then lets the unused ones park. Worth checking internally if anyone at CDPL knows. |
| **D.** Different "Cinute Digital" entity in another country | **Low** | No content to verify, no LinkedIn / business registration surfaces. |

The renewal pattern + the WHOIS privacy block + the parked state are most consistent with **A or C**.

---

## 10e.3 Forward options

### Option 1 — Do nothing (status quo)

- **Cost:** $0
- **Risk:** Domain owner could one day stand up content at `cinutedigital.net` that confuses users searching for CDPL, redirects to a competitor, or hosts spam under CDPL's brand name.
- **Benefit:** No spend, no legal exposure.
- **When this is right:** if there's no evidence the owner is acting in bad faith and CDPL has no current trademark complaint.

### Option 2 — Defensive monitoring (recommended baseline)

- **Cost:** $0–60/yr for a domain-monitoring service (e.g., Whoisology, Domaintools Monitor, ICANN expired-domain alerts).
- **What it does:** alerts CDPL if the domain (a) expires and goes to auction — snipe-buy opportunity, (b) changes registrar, (c) changes nameservers from parking to a live web server (early warning of activation), (d) WHOIS data otherwise shifts.
- **Effort:** 15-min setup, then passive.
- **When this is right:** always — this is the floor every brand should do for an unused TLD variant of their name.

### Option 3 — Make an offer to buy

- **Cost:** Unknown; typical ask for a parked brand-shaped `.net` is $100-1,500. Use the registrar's broker channel (Hostinger has a "domain marketplace" feature) or a service like Sedo / GoDaddy Auctions. Negotiate, don't pay the initial ask.
- **Effort:** A few hours of negotiation; instant transfer if accepted; ~7-14 days through escrow.
- **Why it's worth considering:**
  - Recovers the 3 existing backlinks (set up a 301 from `cinutedigital.net` → `https://www.cinutedigital.com/` and the link equity transfers, modest but real).
  - Brand-protection — prevents any future activation against CDPL's interests.
  - Single-shot fix, no recurring legal exposure.
- **When this is right:** if you have budget under ~$1,500 and want to close the matter cleanly without legal process.

### Option 4 — UDRP (Uniform Domain-Name Dispute-Resolution Policy) complaint

- **Cost:** $1,500–4,000 in filing fees (WIPO / NAF / ADNDRC). Plus internal time / IP-lawyer fees.
- **Timeline:** 2-4 months.
- **Why it might fail here:** UDRP requires proving all three of:
  1. The disputed domain is identical or confusingly similar to a trademark CDPL owns — **likely PASSES** (assuming CDPL has the Indian trademark registered for "Cinute Digital").
  2. The registrant has no legitimate rights or interests in the name — **uncertain** (registrant could claim coincidental name choice; parked state doesn't conclusively prove no interest).
  3. The domain was **registered AND** is being used in bad faith — **likely FAILS** because the domain was registered in **2018, before CDPL existed**. Bad-faith registration requires the registrant to have known about the trademark; if the trademark didn't exist yet, the prong is hard to meet.
- **When this is right:** only if a buy-offer is refused AND the owner shifts the domain to live content that demonstrably damages CDPL (then it becomes "bad faith USE" even if not bad-faith registration — though this prong-3 distinction is contested).

### Option 5 — Wait it out

- **Cost:** $0
- **Timeline:** Indefinite. Next concrete decision point is 2027-01-17 (expiration). If the owner doesn't renew, the domain enters a 30-day grace, then auction, then drops to public availability ~75 days post-expiration.
- **When this is right:** if the cost of (3) and (4) exceed the harm scenario, and Option 2 (monitoring) gives sufficient defensive coverage.

---

## 10e.4 Recommendation

**Adopt Option 2 (monitoring) immediately + budget Option 3 (purchase offer) if convenient.**

Rationale:
- Option 2 is free / near-free and covers the worst-case scenarios (the domain becoming actively malicious).
- Option 3 is a defensible brand-protection spend at the under-$1,500 budget range and converts the 3 dead backlinks into 3 redirected SEO-positive backlinks.
- Options 4–5 should only be considered if Option 3 negotiation reveals a hostile registrant or if the owner stands up demonstrably-damaging content.

**Concrete next steps for whoever owns brand protection:**

1. Set up a free expiry-watch on `cinutedigital.net` via [icann.org WHOIS lookups](https://lookup.icann.org/) or a service like [WhoisXMLAPI free monitor](https://whois.whoisxmlapi.com/).
2. Cross-check internally: does anyone at CDPL (Sandeep Maske / co-founders / early employees) know if they personally registered `.net` in 2018? If yes — recover the credentials and consolidate ownership.
3. If "no" to step 2: contact Hostinger's broker channel and request an introduction to the registrant to negotiate a purchase. Open at $200, ceiling at $1,000–1,500.
4. Update this doc when the situation resolves.

---

## 10e.5 The 3 GSC backlinks pointing here

Per Phase 10d, 3 backlinks reference `cinutedigital.net`. Since the domain serves no content:

- They transfer **no SEO equity** to CDPL today.
- They are **not harmful** — Google doesn't penalise CDPL for being mentioned via a parked domain.
- They **would become useful** if Option 3 succeeds and CDPL adds a 301 redirect from `cinutedigital.net/*` → `https://www.cinutedigital.com/*` (then the 3 historical mentions start passing modest equity).
- They are **NOT a disavow candidate** — `disavow.txt` lists actively-harmful domains, not parked brand variants.

---

## 10e.6 Verification commands

```bash
# Re-pull the WHOIS / RDAP data at any time:
curl -s https://rdap.verisign.com/net/v1/domain/cinutedigital.net | python -m json.tool

# Check if the domain has been activated (nameservers off parking):
dig +short NS cinutedigital.net
# Currently: ns1.dns-parking.com / ns2.dns-parking.com
# Target if activated: a non-parking nameserver

# Check live HTTP (should be empty while parked):
curl -sIL https://cinutedigital.net | head -1
# Currently: no response (no web server)
```
