import { FAQSection } from "@/components/ui/FAQSection";
import { CONTACT_FAQ_CATEGORIES, CONTACT_FAQS } from "@/data/contactFaqs";

export function ContactFAQSection() {
  return (
    <FAQSection
      id="faq"
      title={<>Frequently <span className="text-brand">Asked</span> Questions</>}
      subtitle="Admissions, live mentor-led learning, EMI & scholarships, and placement assistance at Cinute Digital."
      items={CONTACT_FAQS}
      categories={CONTACT_FAQ_CATEGORIES}
      className="bg-slate-50 dark:[color-scheme:light]"
    />
  );
}
