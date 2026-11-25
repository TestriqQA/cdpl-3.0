#!/usr/bin/env bash
# C4-12 — the phone numbers and email in the JSON-LD must match what the page
# shows, and the incorrect third number must be gone everywhere.
#
# CDPL publishes TWO correct numbers (confirmed by the business, Nov 2026),
# both of which also take WhatsApp:
#   A  +91 84889 88984  primary NAP number - Organization / LocalBusiness telephone
#   B  +91 78883 83788  admissions helpline + WhatsApp chat
# and one canonical email, contact@cinutedigital.com. +91 98208 53250 and
# info@cinutedigital.com were incorrect and must not appear anywhere.
#
# The ticket's original check - "grep finds exactly one +91 number" - assumed a
# single number. With two correct ones the real requirement is agreement:
# every number shown is A or B, and every number in the schema is also shown.
#
#   bash docs/seo-audit/cycle-4/scripts/verify-c4-12-contact-nap-consistent.sh                      # production
#   bash docs/seo-audit/cycle-4/scripts/verify-c4-12-contact-nap-consistent.sh http://localhost:3000
#   bash docs/seo-audit/cycle-4/scripts/verify-c4-12-contact-nap-consistent.sh <origin> --full      # + every sitemap URL
#
# Needs curl, grep and sed only. Exits non-zero if any check fails.
set -uo pipefail

BASE="${1:-https://www.cinutedigital.com}"
FULL="${2:-}"
UA='Mozilla/5.0 (compatible; CDPL-verify/1.0)'
TMP="$(mktemp)"; trap 'rm -f "$TMP"' EXIT
pass=0; fail=0
A=8488988984; B=7888383788
EMAIL='contact@cinutedigital.com'
# the wrong number in any grouping: 9 8 2 0 8 5 3 2 5 0 with optional separators
WRONG_RE='9[ ().-]*8[ ().-]*2[ ().-]*0[ ().-]*8[ ().-]*5[ ().-]*3[ ().-]*2[ ().-]*5[ ().-]*0'

say() { printf '%-56s %s\n' "$1" "$2"; }
ok()  { pass=$((pass+1)); say "$1" "ok   $2"; }
bad() { fail=$((fail+1)); say "$1" "FAIL $2"; }

fetch() {  # $1 path -> status in $code, body in $TMP (one retry for cold compiles)
  code=$(curl -s -o "$TMP" -A "$UA" --max-time 150 -w '%{http_code}' "$BASE$1") || code=000
  if [ "$code" = "000" ]; then
    code=$(curl -s -o "$TMP" -A "$UA" --max-time 150 -w '%{http_code}' "$BASE$1") || code=000
  fi
}
last10() { sed 's/[^0-9]//g' | grep -oE '[0-9]{10}$'; }
tel_numbers() {  # distinct 10-digit numbers behind tel: and wa.me links
  { grep -oE 'href="tel:[^"]*"' "$TMP" | sed 's/^href="tel://; s/"$//'
    grep -oE 'href="https://wa\.me/[0-9]+' "$TMP" | sed 's|.*wa\.me/||'
  } | while read -r n; do printf '%s\n' "$n" | last10; done | sort -u
}
ld_numbers() {
  grep -oE '"telephone": ?"[^"]*"' "$TMP" | sed 's/.*: \{0,1\}"//; s/"$//' \
    | while read -r n; do printf '%s\n' "$n" | last10; done | sort -u
}
no_wrong() {  # $1 label
  if grep -qE "$WRONG_RE" "$TMP"; then bad "$1" "contains +91 98208 53250"
  elif grep -qi 'info@cinutedigital\.com' "$TMP"; then bad "$1" "contains info@cinutedigital.com"
  else ok "$1" "no incorrect number or email"; fi
}
only_ab() {  # $1 label
  local stray; stray=$(tel_numbers | grep -vxE "$A|$B" | tr '\n' ' ')
  if [ -n "$stray" ]; then bad "$1" "tel/WhatsApp to unknown number: $stray"
  else ok "$1" "every tel:/WhatsApp link is A or B"; fi
}

echo "C4-12 verification against $BASE"
echo
echo "1. /contact-us — schema and visible page agree"
fetch /contact-us
if [ "$code" != "200" ]; then bad "/contact-us" "status $code, want 200"
else
  no_wrong "/contact-us"
  only_ab  "/contact-us"

  shown=$(tel_numbers)
  for n in $A $B; do
    if printf '%s\n' "$shown" | grep -qx "$n"; then ok "/contact-us visible number $n" "shown"
    else bad "/contact-us visible number $n" "not shown"; fi
  done

  missing=""
  for n in $(ld_numbers); do printf '%s\n' "$shown" | grep -qx "$n" || missing="$missing $n"; done
  if [ -z "$missing" ]; then ok "/contact-us JSON-LD telephone" "every one is also a visible link"
  else bad "/contact-us JSON-LD telephone" "not on the page:$missing"; fi

  adm=$(grep -oE '"telephone": ?"[^"]*", ?"contactType": ?"admissions"' "$TMP" | head -1 | last10)
  if [ "$adm" = "$B" ]; then ok "/contact-us admissions contactPoint" "B, matches the Admissions Helpline"
  else bad "/contact-us admissions contactPoint" "is '${adm:-none}', want $B (the visible helpline)"; fi
  cs=$(grep -oE '"telephone": ?"[^"]*", ?"contactType": ?"customer service"' "$TMP" | head -1 | last10)
  if [ "$cs" = "$A" ]; then ok "/contact-us customer-service contactPoint" "A"
  else bad "/contact-us customer-service contactPoint" "is '${cs:-none}', want $A"; fi

  if grep -q 'TollFree' "$TMP"; then bad "/contact-us contactOption" "claims TollFree for a mobile number"
  else ok "/contact-us contactOption" "no TollFree claim"; fi

  stray_mail=$( { grep -oE '"email": ?"[^"]*"' "$TMP" | sed 's/.*: \{0,1\}"//; s/"$//'
                  grep -oE 'href="mailto:[^"?]*' "$TMP" | sed 's/href="mailto://'; } \
                | grep -E '@cinutedigital\.com$' | grep -vx "$EMAIL" | sort -u | tr '\n' ' ')
  if [ -z "$stray_mail" ]; then ok "/contact-us email" "schema and mailto are all $EMAIL"
  else bad "/contact-us email" "other address: $stray_mail"; fi
fi

echo
echo "2. other pages carrying NAP (Organization schema is site-wide)"
for p in / /about-us /privacy-policy /terms-of-service \
         /courses/software-testing-course/manual-testing-course \
         /software-testing-course-in-mira-road; do
  fetch "$p"
  if [ "$code" != "200" ]; then bad "$p" "status $code, want 200"; continue; fi
  no_wrong "$p"; only_ab "$p"
done

if [ "$FULL" = "--full" ]; then
  echo
  echo "3. every sitemap URL: no incorrect number/email, tel/WhatsApp only to A or B"
  n=0; bad_n=0
  while read -r loc; do
    p="${loc#https://www.cinutedigital.com}"; p="${p:-/}"
    fetch "$p"; n=$((n+1))
    if [ "$code" != "200" ]; then bad_n=$((bad_n+1)); say "$p" "FAIL $code"; continue; fi
    if grep -qE "$WRONG_RE" "$TMP" || grep -qi 'info@cinutedigital\.com' "$TMP"; then
      bad_n=$((bad_n+1)); say "$p" "FAIL incorrect number or email"; continue; fi
    stray=$(tel_numbers | grep -vxE "$A|$B" | tr '\n' ' ')
    [ -n "$stray" ] && { bad_n=$((bad_n+1)); say "$p" "FAIL unknown number $stray"; }
  done < <(curl -s -A "$UA" --max-time 90 "$BASE/sitemap.xml" | grep -oE '<loc>[^<]*' | sed 's/<loc>//')
  if [ "$bad_n" -eq 0 ]; then ok "sitemap ($n URLs)" "all clean"
  else bad "sitemap ($n URLs)" "$bad_n failing"; fi
fi

echo
echo "-------------------------------------------"
echo "passed: $pass    failed: $fail"
[ "$fail" -eq 0 ] || exit 1
