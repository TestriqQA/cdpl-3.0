import { FAQSection } from "@/components/ui/FAQSection";
import { PLACEMENTS_FAQ_CATEGORIES, PLACEMENTS_FAQS } from "@/data/placementsFaqs";

export default function PlacementsFAQSection() {
  return (
    <FAQSection
      id="placements-faq"
      title={<>Placement <span className="text-brand">FAQs</span></>}
      subtitle="Referrals, mock interviews, program details, fees, and support after you get placed."
      items={PLACEMENTS_FAQS}
      categories={PLACEMENTS_FAQ_CATEGORIES}
    />
  );
}
