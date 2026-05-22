/**
 * ============================================================================
 * ROOT LAYOUT - CENTRALIZED SEO IMPLEMENTATION
 * ============================================================================
 * 
 * This file implements the centralized SEO architecture for the entire site.
 * It includes global metadata, Organization and Website schemas, and AI
 * crawler optimization tags.
 * 
 * @version 2.0.0
 * @updated 2025-11-12
 */
import MetaPixel from '@/components/MetaPixel'
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/schema-generators";
import { generateMetadata, generateAIMetaTags } from "@/lib/metadata-generator";
import { SITE_CONFIG, SEO_DEFAULTS } from "@/lib/seo-config";
import JsonLd from "@/components/JsonLd";
import GoogleAnalytics from '@/components/GoogleAnalytics';
// BLG-010: Header/Footer/SpecialOfferBanner are always rendered with
// ssr:true — dynamic() only added an extra code-split chunk with no
// lazy-loading benefit. Imported directly instead.
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import SpecialOfferBanner from "@/components/SpecialOfferBanner";

const inter = localFont({
  src: './fonts/inter-variable.woff2',
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
  weight: '100 900',
});

// ============================================================================
// GLOBAL METADATA (using the new generator)
// ============================================================================

export const metadata: Metadata = generateMetadata({
  title: SEO_DEFAULTS.defaultTitle,
  description: SEO_DEFAULTS.defaultDescription,
  keywords: SEO_DEFAULTS.defaultKeywords,
  url: "/",
});

// Add metadataBase to resolve Next.js warning
metadata.metadataBase = new URL(SITE_CONFIG.url);

// ============================================================================
// ROOT LAYOUT COMPONENT
// ============================================================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate global schemas
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  // Generate AI meta tags
  const aiMetaTags = generateAIMetaTags();

  return (
    <html lang="en" dir="ltr" data-scroll-behavior="smooth">
      <head>
        {/* Canonical URL: handled server-side by Next.js Metadata API
            via `alternates.canonical` in each route's generateMetadata.
            Previously had a client-rendered <SeoHead /> here which
            duplicated the canonical tag (BLG-001). */}

        {/* ========================================
            STRUCTURED DATA (Schema.org)
            ======================================== */}
        <JsonLd id="organization-schema" schema={organizationSchema} />
        <JsonLd id="website-schema" schema={websiteSchema} />

        {/* ========================================
            AI CRAWLER OPTIMIZATION
            ======================================== */}
        {Object.entries(aiMetaTags).map(([name, content]) => (
          <meta key={name} name={name} content={content} />
        ))}

        {/* ========================================
            ADDITIONAL SEO & UX TAGS
            ======================================== */}
        <meta name="theme-color" content={SITE_CONFIG.themeColor} />
        <link rel="apple-touch-icon" href={SITE_CONFIG.appleTouchIcon} />
        <link rel="icon" href={SITE_CONFIG.favicon} />

        {/* Resource hints for performance - only for actually used origins.
            BLG-011/093: all blog and course imagery is served from the
            Sanity CDN — preconnect cuts the TLS/handshake cost of the
            first image fetch. */}
        <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
      </head>

      <body className={`${inter.variable} font-sans antialiased`}>
        <MetaPixel />

        <div className="sticky top-0 z-[100] w-full">
          <SpecialOfferBanner />
          <Header />
        </div>
        <main>{children}</main>
        <Footer />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
