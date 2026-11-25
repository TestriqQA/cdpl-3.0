import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { mockCategories } from "@/data/mock-tests";

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

/**
 * C4-01: an unknown slug must 404 here, on the server.
 *
 * The page is a Client Component that looks the course up in useEffect, so it
 * can only discover a bad slug after HTTP 200 has already been sent - every
 * made-up /mock-test/<anything> was a crawlable 200. This checks the same
 * data `getCourseBySlug` reads (minus its simulated network delay) before any
 * of the page renders. No loading.tsx sits above this segment, so
 * `notFound()` here produces a real 404 status.
 */
export default async function MockTestCourseLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ courseSlug: string }>;
}) {
  const { courseSlug } = await params;
  const exists = mockCategories.some((category) =>
    category.courses.some((course) => course.slug === courseSlug),
  );
  if (!exists) notFound();

  return children;
}
