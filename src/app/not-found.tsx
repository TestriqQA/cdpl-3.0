import type { Metadata } from "next";
import Link from "next/link";

/**
 * C4-01: a 404 must not declare a canonical.
 *
 * The root layout builds its metadata with `url: "/"`, so it carries
 * `alternates.canonical` = the home page, and Next.js inherits any field a
 * segment does not set. Without this override every 404 on the site - a typo,
 * a deleted post, a made-up slug - told Google it *was* the home page.
 * `canonical: null` is the documented way to cancel the inherited value.
 */
export const metadata: Metadata = {
  title: "Page Not Found | CDPL",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', color: '#333' }}>404 - Page Not Found</h1>
        <p style={{ color: '#666' }}>The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>Go Home</Link>
      </div>
    </div>
  );
}
