import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * ============================================================================
 * GLOBAL MIDDLEWARE — DOMAIN CANONICALIZATION & SUBDOMAIN PROXY
 * ============================================================================
 *
 * SEO FIX (April 2026):
 * 1. Forces a 301 redirect from non-www to www to eliminate duplicate content
 *    signals that were causing Google to split crawl budget between two domains.
 *
 * 2. Handles proxy/redirection for the 'validate' subdomain for certificate
 *    verification (consolidated from previous proxy.ts).
 *
 * This middleware runs on the Edge Runtime (Vercel) for near-zero latency.
 */
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // --- 1. Subdomain Proxy (Certificate Validation) ---
  // Matches validate.cinutedigital.com and www.validate.cinutedigital.com
  if (hostname.includes('validate.cinutedigital.com') || hostname.includes('validate.localhost')) {
    const targetUrl = new URL('https://www.cinutedigital.com/cdpl-certificate-validation');
    const path = url.pathname.replace(/^\//, '');

    if (path && path !== '') {
      targetUrl.searchParams.set('id', path);
    }

    // Preserve any existing query parameters
    url.searchParams.forEach((value, key) => {
      if (key !== 'id') {
        targetUrl.searchParams.set(key, value);
      }
    });

    return NextResponse.redirect(targetUrl, 301);
  }

  // --- 2. WWW Redirect (Domain Canonicalization) ---
  if (
    hostname === 'cinutedigital.com' ||
    hostname === 'cinutedigital.com:443'
  ) {
    url.host = 'www.cinutedigital.com';
    url.port = '';

    return NextResponse.redirect(url, 301);
  }

  // --- 3. Job-link canonicalisation (C4-40, formerly BLG-035) ---
  // `?jobId=` is the old way job links were shared, and they keep arriving -
  // WhatsApp shares outlive the drives they advertise. Two forms:
  //   /jobs/live-jobs?jobId=<id>         -> /jobs/live-jobs/<id>
  //   /jobs/live-jobs/<id>?jobId=<any>   -> /jobs/live-jobs/<id>
  // The parameter carries nothing the path does not, so it is dropped. That
  // was the bug: as a next.config.ts redirect this passed the query string
  // through, landing on /jobs/live-jobs/<id>?jobId=<id> - a duplicate of the
  // clean URL. Search Console recorded it as a separate page (8,414
  // impressions beside the clean URL's 22,821). Every OTHER parameter is
  // kept, so utm_* attribution survives the hop.
  //
  // An expired job then 308s on to /jobs/live-jobs from its own page - that
  // is the page's decision (it needs Sanity to know), not this rule's.
  if (
    (url.pathname === '/jobs/live-jobs' || url.pathname.startsWith('/jobs/live-jobs/')) &&
    url.searchParams.has('jobId')
  ) {
    const jobId = url.searchParams.get('jobId') ?? '';
    url.searchParams.delete('jobId');
    if (url.pathname === '/jobs/live-jobs' && jobId) {
      url.pathname = `/jobs/live-jobs/${encodeURIComponent(jobId)}`;
    }
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

/**
 * Matcher: Run on all paths EXCEPT internal Next.js assets, API routes, and static media.
 * This prevents middleware from running on images, scripts, and stylesheets,
 * saving computation for every static request.
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - api (api routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - static assets (.svg, .png, .jpg, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
  ],
};
