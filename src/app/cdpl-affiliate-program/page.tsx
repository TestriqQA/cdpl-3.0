import type { Metadata } from "next";
import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import {
  generateBreadcrumbSchema,
  generateAffiliateProgram8PointSchema
} from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).
import AffiliateHeroSection from "@/components/sections/AffiliateHeroSection";
import AffiliateBenefitsSection from "@/components/sections/AffiliateBenefitsSection";
import AffiliateHowItWorksSection from "@/components/sections/AffiliateHowItWorksSection";
import AffiliateTiersSection from "@/components/sections/AffiliateTiersSection";
import AffiliatePayoutsSection from "@/components/sections/AffiliatePayoutsSection";
import AffiliateFAQSection from "@/components/sections/AffiliateFAQSection";
import AffiliateCTASection from "@/components/sections/AffiliateCTASection";
import AffiliateContentSection from "@/components/sections/AffiliateContentSection";
import { AFFILIATE_FAQS } from "@/data/affiliateFaqs";

// ---------- SEO ----------
export const metadata: Metadata = generateStaticPageMetadata({
  title: "CDPL Affiliate Program: Earn 25% Commission | CDPL",
  description:
    "Join the CDPL Affiliate Program and earn recurring commissions by promoting world-class IT training, certification courses, events, and services. Get transparent tracking, fast payouts, and dedicated support. Start earning 15-25% commission today!",
  keywords: [
    "CDPL affiliate program",
    "IT training affiliate",
    "affiliate marketing training",
    "corporate training affiliate",
    "certification course affiliate",
    "tech training partner program",
    "earn commission online",
    "passive income affiliate",
    "software testing affiliate",
    "data science affiliate",
    "cloud training affiliate",
    "DevOps training affiliate",
    "recurring commission program",
    "affiliate partner India",
    "tech education affiliate",
  ],
  url: "/cdpl-affiliate-program",
  image: "/og-images/cdpl-affiliate-program-og.webp",
});

export default async function AffiliateProgramPage() {
  // ---------- Generated Schemas ----------
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Affiliate Program", url: "/cdpl-affiliate-program" },
  ]);

  // Same list the visible FAQ renders, so the FAQPage schema always matches it.
  const affiliateFaqs = AFFILIATE_FAQS.map(({ question, answer }) => ({ question, answer }));

  const affiliateHowToSteps = [
    {
      name: "Sign Up",
      text: "Complete the affiliate application form with your details and promotional channels",
      url: "/cdpl-affiliate-program#apply",
    },
    {
      name: "Get Approved",
      text: "Our team reviews your application and approves qualified partners within 2-3 business days",
    },
    {
      name: "Promote CDPL",
      text: "Use your unique affiliate links to promote CDPL courses, events, and services on your platforms",
    },
    {
      name: "Earn Commissions",
      text: "Earn 15-25% recurring commissions on every successful referral with transparent tracking",
    },
    {
      name: "Get Paid",
      text: "Receive fast payouts monthly via bank transfer or preferred payment method",
    },
  ];

  const affiliateBenefits = [
    "Recurring Commissions (15-25%)",
    "Transparent Real-time Tracking",
    "Dedicated Partner Support",
    "Marketing Collateral & Assets",
    "Early Access to New Courses",
    "Networking with Tech Industry Leaders"
  ];

  const consolidatedSchemas = generateAffiliateProgram8PointSchema({
    faqs: affiliateFaqs,
    howToSteps: affiliateHowToSteps,
    benefits: affiliateBenefits
  });

  return (
    <div
      className="relative min-h-screen bg-white text-slate-800 [color-scheme:light] dark:[color-scheme:light]"
    >
      {/* Structured data for SEO */}
      <JsonLd schema={breadcrumbSchema} id="affiliate-breadcrumb" />
      {consolidatedSchemas.map((schema, index) => (
        <JsonLd key={`affiliate-schema-${index}`} id={`affiliate-schema-${index}`} schema={schema} />
      ))}

      <AffiliateHeroSection />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8">
        <AffiliateBenefitsSection />
      </div>

      {/* Long-form SEO content */}
      <AffiliateContentSection />

      <AffiliateHowItWorksSection />

      <section id="tiers" aria-labelledby="tiers-heading" className="scroll-mt-24 bg-slate-50/70">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8">
          <AffiliateTiersSection />
        </div>
      </section>

      <section id="payouts" aria-labelledby="payouts-heading" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8">
          <AffiliatePayoutsSection />
        </div>
      </section>

      {/* Central FAQ (renders its own <section id="faq">) */}
      <AffiliateFAQSection />

      <section id="apply" aria-labelledby="apply-heading" className="scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8">
          <AffiliateCTASection />
        </div>
      </section>
    </div>
  );
}
