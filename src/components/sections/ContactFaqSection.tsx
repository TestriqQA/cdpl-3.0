import { FaqSection } from "@/components/ui/FaqSection";
import { CONTACT_FAQ_CATEGORIES, CONTACT_FAQS } from "@/data/faqs/contact";

export function ContactFaqSection() {
  return (
    <FaqSection
      id="faq"
      title={<>Frequently <span className="text-brand">Asked</span> Questions</>}
      subtitle="Admissions, live mentor-led learning, EMI & scholarships, and placement assistance at Cinute Digital."
      items={CONTACT_FAQS}
      categories={CONTACT_FAQ_CATEGORIES}
      className="bg-slate-50 dark:[color-scheme:light]"
    />
  );
}
