import { FaqSection } from "@/components/ui/FaqSection";
import { PLACEMENTS_FAQ_CATEGORIES, PLACEMENTS_FAQS } from "@/data/faqs/placements";

export default function PlacementsFaqSection() {
  return (
    <FaqSection
      id="placements-faq"
      title={<>Placement <span className="text-brand">FAQs</span></>}
      subtitle="Referrals, mock interviews, program details, fees, and support after you get placed."
      items={PLACEMENTS_FAQS}
      categories={PLACEMENTS_FAQ_CATEGORIES}
    />
  );
}
