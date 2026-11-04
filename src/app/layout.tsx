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
// Suppresses the marketing chrome on the /cms Studio route — see the component
// for why (the header + footer around <NextStudio/> caused CLS 0.922 there).
import SiteChrome from "@/components/Layout/SiteChrome";
// BLG-139: VisualEditing establishes the connection between a previewed
// page and the Sanity Presentation tool. It is only rendered when Next.js
// draft mode is on, so it never ships to normal visitors.
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import { SiteStatsProvider } from "@/components/stats/SiteStatsProvider";
import { getSiteStats } from "@/lib/liveStats";

const inter = localFont({
  src: './fonts/inter-variable.woff2',
  display: 'swap',
  variable: '--font-inter',
  // preload:false — this lives in the ROOT layout, so preload:true emitted a
  // High-priority `<link rel="preload" as="font">` for 37,924 bytes on every
  // page, including the ones that never render Inter.
  //
  // Only `.font-sans` consumes it (it compiles to
  // `font-family: var(--font-inter), system-ui, sans-serif`), and globals.css
  // sets an *unlayered* `body { font-family: Arial, ... }` which outranks
  // Tailwind's layered utility on <body> itself. So on the home page nothing
  // renders Inter and the preload was pure waste on the LCP critical path.
  // Pages that put `font-sans` on a wrapper div — /mock-test,
  // /istqb-registration, the jobs pages, the blog TOC — do render it, because
  // a directly-applied class beats the inherited Arial.
  //
  // With preload:false the font is fetched only when an element actually needs
  // it: never on home, on demand elsewhere. The typeface is unchanged
  // everywhere. The swap on those pages lands slightly later, which the
  // metric-matched `inter Fallback` face (ascent-override/size-adjust below)
  // and display:'swap' are already there to absorb.
  preload: false,
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Generate global schemas
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  // Generate AI meta tags
  const aiMetaTags = generateAIMetaTags();

  // BLG-139: detect Next.js draft mode. Reading draftMode() does not opt
  // normal (non-preview) requests into dynamic rendering — the published
  // site stays statically generated.
  const { isEnabled: isDraftMode } = await draftMode();
  const siteStats = await getSiteStats();

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

        {/* purecatamphetamine.github.io no longer needs a hint of any kind:
            the country flags are served from our own origin out of
            public/flags/ (see src/components/ui/CustomFlag.tsx). A later
            Lighthouse run had promoted that origin to a "Preconnect
            candidate" worth ~380 ms of LCP, which superseded the earlier
            "Unused preconnect" reading — vendoring the SVGs removes the
            cross-origin handshake outright rather than warming it.
            Still none for connect.facebook.net or googletagmanager.com —
            those are deliberately deferred to post-load idle in MetaPixel and
            GoogleAnalytics, so preconnecting would pull the cost back into the
            window we just moved it out of. */}
      </head>

      <body className={`${inter.variable} font-sans antialiased`}>
        <SiteStatsProvider value={siteStats}>
        <SiteChrome>
          <MetaPixel />

          <div className="sticky top-0 z-[100] w-full">
            <SpecialOfferBanner />
            <Header />
          </div>
        </SiteChrome>

        <main>{children}</main>

        <SiteChrome>
          <Footer />
          <GoogleAnalytics />
        </SiteChrome>

        {/* BLG-139: only mounted inside the Sanity Presentation tool —
            connects the previewed page to the Studio. */}
        {isDraftMode && <VisualEditing />}
        </SiteStatsProvider>
      </body>
    </html>
  );
}
