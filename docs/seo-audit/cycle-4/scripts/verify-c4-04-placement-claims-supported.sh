#!/usr/bin/env bash
# C4-04 — placement claims say what CDPL actually provides: support, not jobs.
# Runnable against any origin; checks the RENDERED pages, not the source.
#
#   bash docs/seo-audit/cycle-4/scripts/verify-c4-04-placement-claims-supported.sh                      # production
#   bash docs/seo-audit/cycle-4/scripts/verify-c4-04-placement-claims-supported.sh http://localhost:3000
#
# Needs curl only. Exits non-zero if any check fails.
#
# Policy (Management, 25 Nov 2026): CDPL guarantees 100% placement SUPPORT.
# It does not guarantee a job. So "100% Placement Support" stays, worded to
# say what the support is; anything promising a job outcome, an unsourced
# salary or a superlative goes. A question such as "Is placement guaranteed?"
# is allowed - its answer must say "No". The handover's source grep would
# have deleted those honest FAQs and the Terms disclaimer; this checks what a
# visitor actually reads instead.
set -uo pipefail

BASE="${1:-https://www.cinutedigital.com}"
UA='Mozilla/5.0 (compatible; CDPL-verify/1.0)'
TMP="$(mktemp)"; trap 'rm -f "$TMP"' EXIT
pass=0; fail=0

say() { printf '%-64s %s\n' "$1" "$2"; }
ok()  { pass=$((pass+1)); say "$1" "ok   $2"; }
bad() { fail=$((fail+1)); say "$1" "FAIL $2"; }

fetch() { curl -s -A "$UA" --max-time 120 -o "$TMP" -w '%{http_code}' "$BASE$1" || echo 000; }

# $1 path, $2 fixed text that must appear, $3 label
has() {
  local c; c=$(fetch "$1")
  if [ "$c" != 200 ]; then bad "$1" "status $c"; return; fi
  if grep -qF -- "$2" "$TMP"; then ok "$1" "has: $3"; else bad "$1" "missing: $3"; fi
}
# $1 path, $2 fixed text that must NOT appear, $3 label
lacks() {
  local c; c=$(fetch "$1")
  if [ "$c" != 200 ]; then bad "$1" "status $c"; return; fi
  if grep -qF -- "$2" "$TMP"; then bad "$1" "still shows: $3"; else ok "$1" "gone: $3"; fi
}

SUPPORT='Resume, mock interviews &amp; referrals'   # as it appears in HTML

echo "C4-04 verification against $BASE"
echo
echo "1. city stat cards: 100% Placement Support, worded as support"
# 181 multi-line cards live in 181 records (mostly data-science pages); the one
# single-line card BLG-205 had set to "Yes" belongs to software-testing in
# Hyderabad. Chennai is a Tier 1, indexable page.
has   /data-science-course-in-chennai       "$SUPPORT" "support description"
lacks /data-science-course-in-chennai       '>Job assistance<' "old vague description"
has   /software-testing-course-in-hyderabad "$SUPPORT" "Hyderabad card (was Yes) aligned"
lacks /software-testing-course-in-hyderabad 'Dedicated career assistance' "old Hyderabad description"

echo
echo "1b. no placement RATE on city heroes (582 cards said 90-95%; all now the support card)"
# Mumbai is Tier 1 and indexable; it showed "92% Job Placement - Within 3 months".
has   /software-testing-course-in-mumbai "$SUPPORT"                   "support card replaces the rate"
lacks /software-testing-course-in-mumbai 'Within 3 months of completion' '"92% Job Placement within 3 months"'
# The 77 "95% Placement Rate" cards were on the AI course pages (all five Tier 1
# cities among them) - checked against the pre-change file, so this page really
# carried the claim, and the "has" line proves the card was replaced, not lost.
has   /artificial-intelligence-course-in-mumbai "$SUPPORT"                  "support card replaces the rate"
lacks /artificial-intelligence-course-in-mumbai 'Placed in top tech companies' '"95% Placement Rate"'

echo
echo "2. no job-outcome promise"
lacks /courses/software-testing-course/advance-software-testing 'until you get hired' '"until you get hired"'

echo
echo "3. no unsourced salary outcome in the Mumbai data-science FAQ"
lacks /data-science-course-in-mumbai '(₹8L+)' 'Data Scientist ₹8L+'
lacks /data-science-course-in-mumbai '(₹5L+)' 'Data Analyst ₹5L+'

echo
echo "4. no superlatives"
lacks /courses/software-testing-course/python-course 'Top 1% Python' '"Top 1% Python Developer"'
has   /courses/software-testing-course/python-course 'Professional Python Development' 'new heading'
lacks /courses/software-testing-course/java-course   '#1 enterprise' '"#1 enterprise language"'

echo
echo "5. 'Is placement guaranteed?' FAQs answer No"
for p in /courses/software-testing-course/dbms-course \
         /courses/software-testing-course/etl-testing \
         /courses/software-testing-course/advance-manual-automation-testing; do
  has "$p" 'a job offer depends on your interviews' 'answer opens with No'
done

echo
echo "6. compliant text is still there (must NOT have been removed)"
has /terms-of-service 'cannot guarantee job placement' 'Terms disclaimer'
has /about-us         'Placement Support'              '/about-us 100% Placement Support card'

echo
echo "-------------------------------------------"
echo "passed: $pass    failed: $fail"
[ "$fail" -eq 0 ] || exit 1
