import type { Metadata } from 'next';
import { ContactHeroSection } from '@/components/sections/ContactHeroSection';
import { ContactMethodsSection } from '@/components/sections/ContactMethodSection';

// Sections imported directly — next/dynamic(ssr:true) only added client Suspense
// boundaries that caused a hydration layout shift (see BLG-010 / commit 5ffc1db).
import { ContactOfficeMapSection } from '@/components/sections/ContactOfficeMapSection';
import { ContactBookCallSection } from '@/components/sections/ContactBookCall';
import { ContactFAQSection } from '@/components/sections/ContactFAQSection';
import ContactReviewSection from '@/components/sections/ContactReviewSection';

import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateContactPageAllSchemas } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

// ============================================================================
// SEO METADATA - Optimized for Contact Page
// ============================================================================
export const metadata: Metadata = generateStaticPageMetadata({
  title: 'Contact Us | Software Testing & Data Science Training',
  description: 'Get in touch with CDPL (Cinute Digital) for course inquiries, admissions and career guidance. Call, email, or visit our Mira Road, Mumbai office.',
  keywords: [
    'contact CDPL',
    'Cinute Digital contact',
    'CDPL admissions',
    'software testing course inquiry',
    'data science training contact',
    'CDPL Mumbai office',
    'CDPL phone number',
    'CDPL email',
    'course inquiry',
    'admissions support',
    'career guidance',
    'training institute contact',
    'software testing institute mumbai',
    'data science course mumbai'
  ],
  url: '/contact-us',
  image: '/og-images/contact-us-og.webp',
});

// ============================================================================
// CONTACT PAGE COMPONENT
// ============================================================================
export default function ContactPage() {
  const schemas = generateContactPageAllSchemas();

  return (
    <>
      {/* Schema Injection */}
      {schemas.map((schema, index) => (
        <JsonLd key={`contact-schema-${index}`} id={`contact-schema-${index}`} schema={schema} />
      ))}

      {/* Main Content - Semantic HTML Structure */}
      <div className="relative min-h-[220vh]">
        <ContactHeroSection />
        <ContactMethodsSection />
        <ContactOfficeMapSection />
        <ContactReviewSection />
        <ContactBookCallSection />
        <ContactFAQSection />
      </div>
    </>
  );
}
