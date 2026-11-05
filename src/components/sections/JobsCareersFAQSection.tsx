import { FAQSection } from "@/components/ui/FAQSection";
import { CAREERS_FAQ_CATEGORIES, CAREERS_FAQS } from "@/data/careersFaqs";

export default function JobsCareersFAQSection() {
    return (
        <FAQSection
            id="careers-faq"
            title={<>Careers <span className="text-brand">FAQs</span></>}
            subtitle="Working at CDPL, remote roles, and how our hiring process works."
            items={CAREERS_FAQS}
            categories={CAREERS_FAQ_CATEGORIES}
        />
    );
}
