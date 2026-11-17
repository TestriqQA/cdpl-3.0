import { FAQSection } from "@/components/ui/FAQSection";
import { Heading } from "@/components/ui/Rich";
import { TONE_BG, type Tone } from "./parts/Section";
import type { CourseFaq as Faq } from "@/types/coursePage";

export default function CourseFaq({ id, tone, data }: { id: string; tone: Tone; data: Faq }) {
  return (
    <FAQSection
      id={id}
      className={`scroll-mt-32 ${TONE_BG[tone]}`}
      title={<Heading text={data.heading ?? "Frequently Asked [[Questions]]"} />}
      subtitle={data.intro}
      items={data.items}
      categories={data.categories}
    />
  );
}
