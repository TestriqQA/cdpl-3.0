import ContentBlocks from "@/components/course-page/parts/ContentBlocks";
import CtaButtons from "@/components/course-page/parts/CtaButtons";
import { CourseSection, SPACE, SectionHeader, SectionOutro } from "@/components/course-page/parts/Section";
import type { SectionProps } from "@/components/course-page/types";
import type { SectionBase } from "@/types/course-page";

/**
 * A plain hub section: heading, intro, optional blocks and link buttons. For
 * short standalone answers such as "Where we teach", which need their own h2
 * but no cards or grid.
 */
export default function HubText({ id, tone, data, sourceName }: SectionProps<SectionBase>) {
  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />
      <ContentBlocks blocks={data.extras} />
      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} source={`${sourceName} - ${data.heading.replace(/\[\[|\]\]/g, "")}`} className={SPACE.block} />
    </CourseSection>
  );
}
