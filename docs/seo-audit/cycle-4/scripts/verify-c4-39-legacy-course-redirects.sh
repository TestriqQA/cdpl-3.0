#!/usr/bin/env bash
# C4-39 — the 14 dead original course URLs (13 redirected; 1 held back).
# Acceptance criteria from 23-developer-handover.md, runnable against any origin.
#
#   bash docs/seo-audit/cycle-4/scripts/verify-c4-39-legacy-course-redirects.sh                      # production
#   bash docs/seo-audit/cycle-4/scripts/verify-c4-39-legacy-course-redirects.sh http://localhost:3000
#
# Needs curl only. Exits non-zero if any check fails.
#
# Hop counts: the old URLs were published WITH a trailing slash, and Next.js
# strips it with its own 308 before any redirect in next.config.ts runs. So:
#   /manual-software-testing    -> 301 -> destination       (1 hop)
#   /manual-software-testing/   -> 308 -> 301 -> destination (2 hops)
# next.config.ts cannot avoid the 308, which is also why the four legacy URLs
# the handover lists as already working take two hops. This script expects
# exactly those counts, so a chain that grows any longer still fails.
set -uo pipefail

BASE="${1:-https://www.cinutedigital.com}"
UA='Mozilla/5.0 (compatible; CDPL-verify/1.0)'
pass=0; fail=0

say() { printf '%-66s %s\n' "$1" "$2"; }
ok()  { pass=$((pass+1)); say "$1" "ok   $2"; }
bad() { fail=$((fail+1)); say "$1" "FAIL $2"; }

# $1 path, $2 expected final path, $3 expected hop count
check() {
  local path="$1" want="$2" hops_want="$3" out code rest hops end
  out=$(curl -s -o /dev/null -L -A "$UA" --max-time 90 \
        -w '%{http_code}|%{num_redirects}|%{url_effective}' "$BASE$path") || { bad "$path" "curl failed"; return; }
  code="${out%%|*}"; rest="${out#*|}"; hops="${rest%%|*}"; end="${rest#*|}"; end="${end#$BASE}"
  if [ "$code" != "200" ];        then bad "$path" "final status $code"; return; fi
  if [ "$end" != "$want" ];       then bad "$path" "ended at $end, want $want"; return; fi
  if [ "$hops" != "$hops_want" ]; then bad "$path" "$hops hop(s), want $hops_want"; return; fi
  ok "$path" "$hops hop(s) -> 200"
}

MAP='
/manual-software-testing|/courses/software-testing-course/manual-testing-course
/advanced-software-testing|/courses/software-testing-course/advance-software-testing
/advanced-manual-and-automation-testing-master-program|/courses/software-testing-course/advance-manual-automation-testing
/database-management-system|/courses/software-testing-course/dbms-course
/python-programming|/courses/software-testing-course/python-course
/data-analysis-with-bi-big-data-engineering-master-program|/courses/bi-courses/masters-in-data-engineering
/advanced-business-analyst|/courses/bi-courses/data-analytics
/machine-learning-and-data-science-with-python|/courses/ds-ml-courses/machine-learning-using-python
/advanced-machine-learning-and-data-visualization|/courses/ds-ml-courses/machine-learning-course
/deep-learning-nlp-and-generativeai|/courses/ds-ml-courses/generative-ai-course
/advanced-data-science-and-machine-learning-masterclass|/courses/ds-ml-courses/data-science-course
/comprehensive-data-science-and-ai-master-program|/courses/ds-ml-courses/ai-course
/turbocharged-data-science-course|/courses/ds-ml-courses/data-science-course
'

echo "C4-39 verification against $BASE"
echo
echo "1. each legacy URL reaches its live course page"
while IFS='|' read -r src dst; do
  [ -z "$src" ] && continue
  check "$src"  "$dst" 1
  check "$src/" "$dst" 2
done <<< "$MAP"

echo
echo "2. the four that already worked are unchanged"
check /advanced-automation-testing/          /courses/software-testing-course/automation-testing-course  2
check /api-testing/                          /courses/software-testing-course/api-testing                2
check /java-programming/                     /courses/software-testing-course/java-course                2
check /prompt-engineering-with-generativeai/ /courses/artificial-intelligence-courses/prompt-engineering-course 2

echo
echo "3. held back pending a product decision - must still 404, not point somewhere wrong"
c=$(curl -s -o /dev/null -L -A "$UA" --max-time 90 -w '%{http_code}' "$BASE/big-data-engineering/")
if [ "$c" = "404" ]; then ok "/big-data-engineering/" "404 (intended until decided)"
else bad "/big-data-engineering/" "status $c - was it redirected without a decision?"; fi

echo
echo "4. none of the legacy URLs is in the sitemap"
legacy='manual-software-testing|advanced-software-testing|advanced-manual-and-automation-testing-master-program|database-management-system|python-programming|data-analysis-with-bi-big-data-engineering-master-program|advanced-business-analyst|machine-learning-and-data-science-with-python|advanced-machine-learning-and-data-visualization|deep-learning-nlp-and-generativeai|advanced-data-science-and-machine-learning-masterclass|comprehensive-data-science-and-ai-master-program|turbocharged-data-science-course|big-data-engineering'
# Anchored to the domain root, so /blog/category/python-programming (a real,
# unrelated page) does not count as a hit.
if curl -s -A "$UA" --max-time 90 "$BASE/sitemap.xml" \
   | grep -qE "<loc>https://www\.cinutedigital\.com/($legacy)/?</loc>"; then
  bad "sitemap.xml" "contains a legacy course URL"
else
  ok "sitemap.xml" "clean"
fi

echo
echo "-------------------------------------------"
echo "passed: $pass    failed: $fail"
[ "$fail" -eq 0 ] || exit 1
