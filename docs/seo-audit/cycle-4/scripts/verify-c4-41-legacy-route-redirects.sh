#!/usr/bin/env bash
# C4-41 — legacy 404 routes. Acceptance criteria from
# 23-developer-handover.md, runnable against any origin.
#
#   bash docs/seo-audit/cycle-4/scripts/verify-c4-41-legacy-route-redirects.sh                      # production
#   bash docs/seo-audit/cycle-4/scripts/verify-c4-41-legacy-route-redirects.sh http://localhost:3000
#
# Needs curl only. Exits non-zero if any check fails, so it can gate a deploy.
set -uo pipefail

BASE="${1:-https://www.cinutedigital.com}"
UA='Mozilla/5.0 (compatible; CDPL-verify/1.0)'
pass=0; fail=0

say()  { printf '%-58s %s\n' "$1" "$2"; }
ok()   { pass=$((pass+1)); say "$1" "ok   $2"; }
bad()  { fail=$((fail+1)); say "$1" "FAIL $2"; }

# $1 path, $2 expected status, $3 expected Location (optional, suffix match)
check_redirect() {
  local path="$1" want="$2" wantloc="${3:-}"
  local out code loc
  out=$(curl -s -o /dev/null -A "$UA" --max-time 45 \
        -w '%{http_code}|%{redirect_url}' "$BASE$path") || { bad "$path" "curl failed"; return; }
  code="${out%%|*}"; loc="${out##*|}"
  if [ "$code" != "$want" ]; then bad "$path" "status $code, want $want"; return; fi
  if [ -n "$wantloc" ] && [ "${loc%$wantloc}" = "$loc" ]; then
    bad "$path" "Location $loc, want *$wantloc"; return
  fi
  ok "$path" "$code -> ${loc:-(none)}"
}

# $1 path — must end at 200 in exactly one hop
check_single_hop() {
  local path="$1" out code hops
  out=$(curl -s -o /dev/null -L -A "$UA" --max-time 60 \
        -w '%{http_code}|%{num_redirects}' "$BASE$path") || { bad "$path" "curl failed"; return; }
  code="${out%%|*}"; hops="${out##*|}"
  if [ "$code" = "200" ] && [ "$hops" = "1" ]; then ok "$path" "1 hop -> 200"
  else bad "$path" "final $code in $hops hop(s)"; fi
}

echo "C4-41 verification against $BASE"
echo

echo "1. /blog/post/{slug} strips the prefix"
check_redirect "/blog/post/4-pillars-of-oops-in-python" 301 "/blog/4-pillars-of-oops-in-python"
check_redirect "/blog/post/advanced-dax-formulas-patterns" 301 "/blog/advanced-dax-formulas-patterns"

echo
echo "2. single hop to a live page (no redirect chains)"
for s in 4-pillars-of-oops-in-python advanced-dax-formulas-patterns \
         30-must-know-functions-with-real-datasets; do
  check_single_hop "/blog/post/$s"
done

echo
echo "3. no reverse loop — the destination must not redirect back"
for s in 4-pillars-of-oops-in-python advanced-dax-formulas-patterns; do
  check_redirect "/blog/$s" 200
done

echo
echo "4. the bare prefix no longer soft-404s"
check_redirect "/blog/post" 301 "/blog"

echo
echo "5. event routes never 404"
check_redirect "/event/job-fair" 301 "/events/job-fair"
check_redirect "/event/1-day-program-at-universal-college-of-engineering-on-it-trends-and-opportunities" 301 \
               "/events/1-day-program-at-universal-college-of-engineering-on-it-trends-and-opportunities"
check_redirect "/event-venue/cinute-digital-pvt-ltd" 301 "/events"
check_redirect "/event-venue/vidyavardhinis-college-of-engineering-and-technology" 301 "/events"

echo
echo "6. legacy paths absent from the sitemap"
if curl -s -A "$UA" --max-time 90 "$BASE/sitemap.xml" \
   | grep -qE '/blog/post/|/event/|/event-venue/'; then
  bad "sitemap.xml" "contains a legacy path"
else
  ok "sitemap.xml" "clean"
fi

echo
echo "-------------------------------------------"
echo "passed: $pass    failed: $fail"
[ "$fail" -eq 0 ] || exit 1
