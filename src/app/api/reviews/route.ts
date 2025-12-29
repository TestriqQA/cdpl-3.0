import { NextResponse } from 'next/server';
import { getGoogleReviews } from '@/lib/reviews';

export async function GET() {
    const data = await getGoogleReviews();

    // If there's an error from the utility, we might want to still return the fallback data bundled in 'data' 
    // but maybe log it or set status differently if critical.
    // Our utility currently returns fallback data even on error, so we can just return it.

    return NextResponse.json(data);
}
