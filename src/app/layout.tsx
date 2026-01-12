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

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-phone-number-input/style.css'; // Restored to fix UI regression (Broken flag dropdown)
import dynamic from "next/dynamic";
import {
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/schema-generators";
import { generateMetadata, generateAIMetaTags } from "@/lib/metadata-generator";
import { SITE_CONFIG, SEO_DEFAULTS } from "@/lib/seo-config";
import JsonLd from "@/components/JsonLd";
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
});

// ============================================================================
// DYNAMIC IMPORTS (for performance)
// ============================================================================

// import Header from "@/components/Layout/Header";
const Header = dynamic(() => import("@/components/Layout/Header"), { ssr: true });
const Footer = dynamic(() => import("@/components/Layout/Footer"), { ssr: true });
const SpecialOfferBanner = dynamic(() => import("@/components/SpecialOfferBanner"), { ssr: true });

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
    <html lang="en" dir="ltr">
      <head>
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

        {/* Resource hints for performance - only for actually used origins */}



      </head>

      <body className={`${inter.variable} font-sans antialiased`}>
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
