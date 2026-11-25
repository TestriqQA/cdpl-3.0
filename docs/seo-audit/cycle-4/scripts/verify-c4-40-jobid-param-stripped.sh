#!/usr/bin/env bash
# C4-40 — legacy ?jobId= job links redirect to the clean path, with the
# parameter dropped. Runnable against any origin.
#
#   bash docs/seo-audit/cycle-4/scripts/verify-c4-40-jobid-param-stripped.sh                      # production
#   bash docs/seo-audit/cycle-4/scripts/verify-c4-40-jobid-param-stripped.sh http://localhost:3000
#
# Needs curl only. Exits non-zero if any check fails.
#
# These checks test the redirect, which does not depend on whether a job is
# live, so they hold whether or not any jobs are posted. A live job's own page
# returns 200; a closed one then 308s to /jobs/live-jobs from the page itself.
set -uo pipefail

BASE="${1:-https://www.cinutedigital.com}"
UA='Mozilla/5.0 (compatible; CDPL-verify/1.0)'
J='deloitte-data-analyst-intern-mumbai'   # the URL Search Console split in two
pass=0; fail=0

say() { printf '%-74s %s\n' "$1" "$2"; }
ok()  { pass=$((pass+1)); say "$1" "ok   $2"; }
bad() { fail=$((fail+1)); say "$1" "FAIL $2"; }

# $1 path, $2 expected status, $3 expected Location path+query ("" = none)
check() {
  local path="$1" want="$2" wantloc="$3" out code loc
  out=$(curl -s -o /dev/null -A "$UA" --max-time 90 -w '%{http_code}|%{redirect_url}' "$BASE$path") \
    || { bad "$path" "curl failed"; return; }
  code="${out%%|*}"; loc="${out#*|}"; loc="${loc#$BASE}"
  if [ "$code" != "$want" ];   then bad "$path" "status $code, want $want"; return; fi
  if [ "$loc" != "$wantloc" ]; then bad "$path" "Location '${loc}', want '${wantloc}'"; return; fi
  ok "$path" "$code${loc:+ -> $loc}"
}

echo "C4-40 verification against $BASE"
echo
echo "1. both ?jobId= forms 301 to the clean path, parameter dropped"
check "/jobs/live-jobs?jobId=$J"         301 "/jobs/live-jobs/$J"
check "/jobs/live-jobs/$J?jobId=$J"      301 "/jobs/live-jobs/$J"

echo
echo "2. other parameters survive the hop (utm attribution)"
check "/jobs/live-jobs?jobId=$J&utm_source=whatsapp" 301 "/jobs/live-jobs/$J?utm_source=whatsapp"

echo
echo "3. edge cases"
check "/jobs/live-jobs?jobId="           301 "/jobs/live-jobs"
check "/jobs/live-jobs?jobId=a/b"        301 "/jobs/live-jobs/a%2Fb"

echo
echo "4. no redirect without jobId, or outside /jobs/live-jobs"
check "/jobs/live-jobs"                  200 ""
check "/jobs/live-jobs?utm_source=x"     200 ""
check "/courses?jobId=$J"                200 ""

echo
echo "5. the old split URL now ends cleanly, with no jobId left anywhere in the chain"
out=$(curl -s -o /dev/null -L -A "$UA" --max-time 120 -w '%{http_code}|%{url_effective}' "$BASE/jobs/live-jobs?jobId=$J")
code="${out%%|*}"; end="${out#*|}"; end="${end#$BASE}"
case "$end" in
  *jobId*) bad "chain end" "still carries jobId: $end" ;;
  *) [ "$code" = 200 ] && ok "chain end" "200 at $end" || bad "chain end" "final $code at $end" ;;
esac

echo
echo "6. a query-string URL never canonicalises to itself"
can=$(curl -s -A "$UA" --max-time 90 "$BASE/jobs/live-jobs?utm_source=x" \
      | grep -oE '<link rel="canonical" href="[^"]*"' | head -1 | sed 's/.*href="//;s/"$//')
case "$can" in
  *\?*) bad "/jobs/live-jobs?utm_source=x" "canonical carries a query: $can" ;;
  "")   bad "/jobs/live-jobs?utm_source=x" "no canonical emitted" ;;
  *)    ok  "/jobs/live-jobs?utm_source=x" "canonical $can" ;;
esac

echo
echo "-------------------------------------------"
echo "passed: $pass    failed: $fail"
[ "$fail" -eq 0 ] || exit 1
