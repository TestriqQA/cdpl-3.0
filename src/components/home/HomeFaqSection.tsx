import { FaqSection } from "@/components/ui/FaqSection";
import { HOME_FAQS } from "@/data/faqs/home";

/**
 * HomeFaqSection - the shared FAQ section with the homepage's questions.
 * The same HOME_FAQS feed the homepage FAQPage schema (see app/page.tsx).
 */
export default function HomeFaqSection() {
  return (
    <FaqSection
      id="home-faq"
      title={<>Frequently Asked <span className="text-brand">Questions</span></>}
      subtitle="Find everything you need to know about our courses, placements, and training methodology."
      items={HOME_FAQS}
      className="bg-gray-50"
    />
  );
}
