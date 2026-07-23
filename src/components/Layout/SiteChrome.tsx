"use client";

import { usePathname } from "next/navigation";

/** The Sanity Studio admin route. Everything under it is the CMS, not the site. */
const STUDIO_ROUTE_PREFIX = "/cms";

export function isStudioRoute(pathname: string | null | undefined): boolean {
    if (!pathname) return false;
    return pathname === STUDIO_ROUTE_PREFIX || pathname.startsWith(`${STUDIO_ROUTE_PREFIX}/`);
}

/**
 * Renders the marketing chrome (offer banner, header, footer, analytics) on the
 * public site and NOTHING on the Sanity Studio route.
 *
 * Why: /cms mounts <NextStudio/>, a full-screen third-party SPA. The root layout
 * was still wrapping it in the site header and the (very large) footer, so the
 * page painted our chrome first and the Studio then took over the whole viewport
 * — measured as CLS 0.922 on /cms/structure, which also failed the Agentic
 * Browsing CLS check. Rendering nothing here removes that shift, keeps the
 * Studio's DOM clean, and stops Meta Pixel / GA from loading on an admin screen.
 *
 * Implemented as a wrapper rather than an early return inside Header/Footer so
 * we don't have to reorder those components' hooks. usePathname() is available
 * during SSR, so the chrome is absent from the served HTML too — not just hidden
 * after hydration.
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    if (isStudioRoute(pathname)) return null;
    return <>{children}</>;
}
