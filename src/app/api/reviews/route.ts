import { NextResponse } from 'next/server';
import { getGoogleReviews } from '@/lib/reviews';

export async function GET() {
    const data = await getGoogleReviews();

    // If there's an error from the utility, we might want to still return the fallback data bundled in 'data'
    // but maybe log it or set status differently if critical.
    // Our utility currently returns fallback data even on error, so we can just return it.

    // BLG-092: cache the response at the CDN/edge. Without this header the
    // route hit the Google Places API on every single page load. Reviews
    // change rarely, so serve a 1h fresh / 24h stale-while-revalidate window.
    return NextResponse.json(data, {
        headers: {
            'Cache-Control':
                'public, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}
