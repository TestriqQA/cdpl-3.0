import { draftMode } from 'next/headers'
import { NextResponse } from 'next/server'

/**
 * BLG-139 — turns Next.js draft mode back off and returns to the home page.
 *
 * Visit `/api/disable-draft` to leave preview mode and see the published
 * site again.
 */
export async function GET(request: Request) {
    ;(await draftMode()).disable()
    return NextResponse.redirect(new URL('/', request.url))
}
