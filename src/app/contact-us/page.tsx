import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ContactHeroSection } from '@/components/sections/ContactHeroSection';
import { ContactMethodsSection } from '@/components/sections/ContactMethodSection';

const ContactOfficeMapSection = dynamic(() => import('@/components/sections/ContactOfficeMapSection').then(mod => mod.ContactOfficeMapSection), { ssr: true });
const ContactBookCallSection = dynamic(() => import('@/components/sections/ContactBookCall').then(mod => mod.ContactBookCallSection), { ssr: true });
const ContactFAQSection = dynamic(() => import('@/components/sections/ContactFAQSection').then(mod => mod.ContactFAQSection), { ssr: true });
const ContactReviewSection = dynamic(() => import('@/components/sections/ContactReviewSection'), { ssr: true });

import { generateStaticPageMetadata } from "@/lib/metadata-generator";
import { generateContactPageAllSchemas } from "@/lib/schema-generators";
import JsonLd from "@/components/JsonLd";

// ============================================================================
// SEO METADATA - Optimized for Contact Page
// ============================================================================
export const metadata: Metadata = generateStaticPageMetadata({
  title: 'Contact Us | Software Testing & Data Science Training',
  description: 'Get in touch with CDPL (Cinute Digital) for course inquiries, admissions, and career guidance. Call us, email, or visit our Mumbai office. 100% Placement Support.',
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
