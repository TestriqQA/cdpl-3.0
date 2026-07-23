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

  const affiliateFaqs = [
    {
      question: "How much commission can I earn as a CDPL affiliate?",
      answer: "CDPL affiliates earn between 15-25% commission based on their tier level. Commission rates increase as you refer more students and generate higher revenue.",
    },
    {
      question: "When do I get paid as an affiliate?",
      answer: "Affiliate commissions are paid monthly via bank transfer or your preferred payment method. Minimum payout threshold applies.",
    },
    {
      question: "What can I promote as a CDPL affiliate?",
      answer: "You can promote all CDPL offerings including certification courses (AAA, ACTD), corporate training programs, developer events, workshops, and professional services.",
    },
    {
      question: "Is there a cost to join the CDPL affiliate program?",
      answer: "No, joining the CDPL Affiliate Program is completely free. There are no signup fees or hidden costs.",
    },
    {
      question: "Do I need a website to become an affiliate?",
      answer: "While having a website helps, it's not mandatory. You can promote CDPL through social media, YouTube, email lists, or other digital channels.",
    },
  ];

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

      {/* Page background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(1000px 400px at 20% 0%, rgba(59,130,246,0.08), transparent 60%), radial-gradient(800px 300px at 80% 20%, rgba(16,185,129,0.08), transparent 60%)",
        }}
      />

      {/* Sections (100% width wrapper, content bounded to max-w-7xl) */}
      <AffiliateHeroSection />

      <section className="w-full">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <AffiliateBenefitsSection />
        </div>
      </section>

      {/* New SEO Content Section */}
      <AffiliateContentSection />

      <AffiliateHowItWorksSection />

      <section className="w-full" id="tiers">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <AffiliateTiersSection />
        </div>
      </section>

      <section className="w-full" id="payouts">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <AffiliatePayoutsSection />
        </div>
      </section>

      <section className="w-full" id="faq">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <AffiliateFAQSection />
        </div>
      </section>

      <section className="w-full" id="apply">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <AffiliateCTASection />
        </div>
      </section>
    </div>
  );
}
