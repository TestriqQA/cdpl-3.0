#!/usr/bin/env bash
# C4-15 — no page may emit HowTo / HowToStep structured data.
# Google retired HowTo rich results; the markup only adds weight and noise.
# Acceptance criteria from 23-developer-handover.md, runnable against any origin.
#
#   bash docs/seo-audit/cycle-4/scripts/verify-c4-15-no-howto-schema.sh                      # production
#   bash docs/seo-audit/cycle-4/scripts/verify-c4-15-no-howto-schema.sh http://localhost:3000
#   bash docs/seo-audit/cycle-4/scripts/verify-c4-15-no-howto-schema.sh <origin> --full      # + every sitemap URL
#
# Needs curl only. Exits non-zero if any check fails.
set -uo pipefail

BASE="${1:-https://www.cinutedigital.com}"
FULL="${2:-}"
UA='Mozilla/5.0 (compatible; CDPL-verify/1.0)'
TMP="$(mktemp)"; trap 'rm -f "$TMP"' EXIT
pass=0; fail=0

say() { printf '%-52s %s\n' "$1" "$2"; }
ok()  { pass=$((pass+1)); say "$1" "ok   $2"; }
bad() { fail=$((fail+1)); say "$1" "FAIL $2"; }

fetch() {  # $1 path -> status in $code, body in $TMP
  code=$(curl -s -o "$TMP" -A "$UA" --max-time 120 -w '%{http_code}' "$BASE$1") || code=000
}
# JSON-LD may be serialised with or without a space after the colon.
has_howto() { grep -qE '"@type": ?"HowTo(Step)?"' "$TMP"; }

echo "C4-15 verification against $BASE"
echo
echo "1. pages that emitted HowTo before the fix — must emit none, still 200"
for p in / /courses /about-us /contact-us /services /services/sttp /events \
         /our-team /mentors /jobs/careers /jobs/placements /locations-we-serve \
         /reviews /privacy-policy /terms-of-service /cookies-policy \
         /cancellation-refund-policy /cdpl-affiliate-program /istqb-registration \
         /mock-test /aaa-certification /actd-certification /cdpl-certificate-validation \
         /courses/software-testing-course/manual-testing-course \
         /courses/ds-ml-courses/data-science-course \
         /software-testing-course-in-mira-road /services/corporate-training; do
  fetch "$p"
  if [ "$code" != "200" ]; then bad "$p" "status $code, want 200"; continue; fi
  if has_howto; then bad "$p" "still emits HowTo"; else ok "$p" "200, no HowTo"; fi
done

echo
echo "2. steps that were ALSO visible content must still render"
fetch /cdpl-certificate-validation
if grep -q 'Obtain Certificate ID' "$TMP" && grep -q 'Verify Authenticity' "$TMP"; then
  ok "/cdpl-certificate-validation" "validation steps visible"
else bad "/cdpl-certificate-validation" "validation steps missing from page"; fi
fetch /aaa-certification
if grep -q 'Proctored exam' "$TMP"; then ok "/aaa-certification" "outcome steps visible"
else bad "/aaa-certification" "outcome steps missing from page"; fi

echo
echo "3. no other schema type lost alongside HowTo"
fetch /courses/software-testing-course/manual-testing-course
for t in Course FAQPage BreadcrumbList; do
  if grep -qE "\"@type\": ?\"$t\"" "$TMP"; then ok "manual-testing-course $t" "present"
  else bad "manual-testing-course $t" "missing"; fi
done
fetch /
for t in FAQPage WebPage; do
  if grep -qE "\"@type\": ?\"$t\"" "$TMP"; then ok "/ $t" "present"
  else bad "/ $t" "missing"; fi
done

if [ "$FULL" = "--full" ]; then
  echo
  echo "4. every sitemap URL: 200 and no HowTo"
  n=0; bad_n=0
  while read -r loc; do
    p="${loc#https://www.cinutedigital.com}"; p="${p:-/}"
    fetch "$p"; n=$((n+1))
    if [ "$code" != "200" ]; then bad_n=$((bad_n+1)); say "$p" "FAIL $code"
    elif has_howto; then bad_n=$((bad_n+1)); say "$p" "FAIL emits HowTo"; fi
  done < <(curl -s -A "$UA" --max-time 90 "$BASE/sitemap.xml" | grep -oE '<loc>[^<]*' | sed 's/<loc>//')
  if [ "$bad_n" -eq 0 ]; then ok "sitemap ($n URLs)" "all 200, no HowTo"
  else bad "sitemap ($n URLs)" "$bad_n failing"; fi
fi

echo
echo "-------------------------------------------"
echo "passed: $pass    failed: $fail"
[ "$fail" -eq 0 ] || exit 1
