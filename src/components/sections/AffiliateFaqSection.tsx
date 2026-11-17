// src/components/sections/AffiliateFaqSection.tsx
// The site's central FAQ, fed from the same list the page sends as its
// FAQPage schema (src/data/faqs/affiliate.ts).
import { FaqSection } from "@/components/ui/FaqSection";
import { AFFILIATE_FAQ_CATEGORIES, AFFILIATE_FAQS } from "@/data/faqs/affiliate";

export default function AffiliateFaqSection() {
    return (
        <FaqSection
            id="faq"
            title={<>Frequently Asked <span className="text-brand">Questions</span></>}
            subtitle="Commission, payouts, approval and what you can promote: everything you need to know before you apply."
            items={AFFILIATE_FAQS}
            categories={AFFILIATE_FAQ_CATEGORIES}
            className="bg-gray-50"
        />
    );
}
