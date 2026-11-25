#!/usr/bin/env bash
# C4-01 — unknown slugs must 404, and a 404 must carry no canonical.
# Acceptance criteria from 23-developer-handover.md, runnable against any origin.
#
#   bash docs/seo-audit/cycle-4/scripts/verify-c4-01-unknown-slugs-404.sh                      # production
#   bash docs/seo-audit/cycle-4/scripts/verify-c4-01-unknown-slugs-404.sh http://localhost:3000
#   bash docs/seo-audit/cycle-4/scripts/verify-c4-01-unknown-slugs-404.sh <origin> --full      # + every sitemap URL
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
  code=$(curl -s -o "$TMP" -A "$UA" --max-time 90 -w '%{http_code}' "$BASE$1") || code=000
}

echo "C4-01 verification against $BASE"
echo
echo "1+2. made-up slugs return 404 with no canonical"
for p in /blog/does-not-exist-test /blog/category/does-not-exist-test \
         /blog/author/does-not-exist-test /events/does-not-exist-test \
         /mock-test/does-not-exist-test /does-not-exist-test; do
  fetch "$p"
  if [ "$code" != "404" ]; then bad "$p" "status $code, want 404"; continue; fi
  if grep -q '<link rel="canonical"' "$TMP"; then bad "$p" "404 but emits a canonical"
  else ok "$p" "404, no canonical"; fi
done

echo
echo "4. valid slugs still render"
for p in /blog/4-pillars-of-oops-in-python /blog/category/web-development \
         /blog/author/sushma-pal /events/job-fair /mock-test/manual-testing-course; do
  fetch "$p"
  if [ "$code" = "200" ]; then ok "$p" "200"; else bad "$p" "status $code, want 200"; fi
done

echo
echo "   listing pages moved into (listing) route groups — URLs must be unchanged"
for p in /blog /blog/all-posts /blog/categories "/blog/search?q=python" /events; do
  fetch "$p"
  if [ "$code" = "200" ]; then ok "$p" "200"; else bad "$p" "status $code, want 200"; fi
done

if [ "$FULL" = "--full" ]; then
  echo
  echo "3. every sitemap URL still returns 200"
  n=0; bad_n=0
  while read -r loc; do
    p="${loc#https://www.cinutedigital.com}"; p="${p:-/}"
    c=$(curl -s -o /dev/null -A "$UA" --max-time 120 -w '%{http_code}' "$BASE$p") || c=000
    n=$((n+1)); [ "$c" = "200" ] || { bad_n=$((bad_n+1)); say "$p" "FAIL $c"; }
  done < <(curl -s -A "$UA" --max-time 90 "$BASE/sitemap.xml" | grep -oE '<loc>[^<]*' | sed 's/<loc>//')
  if [ "$bad_n" -eq 0 ]; then ok "sitemap ($n URLs)" "all 200"; else bad "sitemap ($n URLs)" "$bad_n not 200"; fi
fi

echo
echo "-------------------------------------------"
echo "passed: $pass    failed: $fail"
[ "$fail" -eq 0 ] || exit 1
