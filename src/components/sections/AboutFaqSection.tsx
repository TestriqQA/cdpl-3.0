import { FaqSection } from "@/components/ui/FaqSection";
import { ABOUT_FAQ_CATEGORIES, ABOUT_FAQS } from "@/data/faqs/about";

export default function AboutFaqSection() {
    return (
        <FaqSection
            id="about-faq"
            title={<>Frequently Asked <span className="text-brand">Questions</span></>}
            subtitle="Everything you need to know about our industry-aligned, job-ready programs, designed to help you launch or upskill your tech career."
            items={ABOUT_FAQS}
            categories={ABOUT_FAQ_CATEGORIES}
            className="bg-gray-50"
        />
    );
}
