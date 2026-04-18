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
