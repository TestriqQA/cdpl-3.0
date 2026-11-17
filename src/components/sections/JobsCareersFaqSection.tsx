import { FaqSection } from "@/components/ui/FaqSection";
import { CAREERS_FAQ_CATEGORIES, CAREERS_FAQS } from "@/data/faqs/careers";

export default function JobsCareersFaqSection() {
    return (
        <FaqSection
            id="careers-faq"
            title={<>Careers <span className="text-brand">FAQs</span></>}
            subtitle="Working at CDPL, remote roles, and how our hiring process works."
            items={CAREERS_FAQS}
            categories={CAREERS_FAQ_CATEGORIES}
        />
    );
}
