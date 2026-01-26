import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const host = request.headers.get('host') || '';

    console.log(`Middleware running. Host: ${host}, Path: ${url.pathname}`);

    // Check if the request is for the 'validate' subdomain
    // This matches validate.cinutedigital.com and www.validate.cinutedigital.com
    if (host.includes('validate.cinutedigital.com') || host.includes('validate.localhost')) {
        console.log('Redirecting validate subdomain...');
        const targetUrl = new URL('https://www.cinutedigital.com/cdpl-certificate-validation');

        // Extract path (e.g., /XYZ) and convert to ?id=XYZ
        const path = url.pathname.replace(/^\//, ''); // remove leading slash

        if (path && path !== '') {
            targetUrl.searchParams.set('id', path);
        }

        // Preserve any existing query parameters
        url.searchParams.forEach((value, key) => {
            // If we already set 'id' from the path, it takes precedence unless 'id' is already in searchParams
            if (key !== 'id') {
                targetUrl.searchParams.set(key, value);
            }
        });

        return NextResponse.redirect(targetUrl, 301);
    }

    return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (api routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
