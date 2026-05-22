import type { Metadata } from "next";

/**
 * BLG-041: defense-in-depth noindex for /mock-test/[courseSlug].
 *
 * These routes are client-only ("use client" + useEffect) — Googlebot
 * renders an empty spinner, so they are already noindex'd via an
 * X-Robots-Tag HTTP header in next.config.ts. This metadata adds an
 * in-HTML <meta name="robots" content="noindex, nofollow"> as well,
 * since some AI crawlers honour the meta tag but not the HTTP header.
 *
 * The page component is a Client Component and cannot export metadata,
 * so this server-component layout carries it.
 */
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function MockTestCourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
