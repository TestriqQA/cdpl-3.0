import { FAQSection } from "@/components/ui/FAQSection";
import { HOME_FAQS } from "@/data/homeFaqs";

/**
 * HomeFAQSection - the shared FAQ section with the homepage's questions.
 * The same HOME_FAQS feed the homepage FAQPage schema (see app/page.tsx).
 */
export default function HomeFAQSection() {
  return (
    <FAQSection
      id="home-faq"
      title={<>Frequently Asked <span className="text-brand">Questions</span></>}
      subtitle="Find everything you need to know about our courses, placements, and training methodology."
      items={HOME_FAQS}
      className="bg-gray-50"
    />
  );
}
