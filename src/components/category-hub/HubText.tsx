import Image from "next/image";
import ContentBlocks from "@/components/course-page/parts/ContentBlocks";
import CtaButtons from "@/components/course-page/parts/CtaButtons";
import { CourseSection, SPACE, SectionHeader, SectionOutro } from "@/components/course-page/parts/Section";
import type { SectionProps } from "@/components/course-page/types";
import type { HubTextSection } from "@/types/category-hub";

/**
 * A plain hub section: heading, intro, optional image, blocks and link
 * buttons. For short standalone answers ("Online data science courses",
 * "Where we teach") that need their own h2 but no cards or grid.
 */
export default function HubText({ id, tone, data, sourceName }: SectionProps<HubTextSection>) {
  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />
      {data.image && (
        <figure className={`${SPACE.body} mx-auto max-w-[40rem] rounded-3xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4`}>
          <Image
            src={data.image.src}
            alt={data.image.alt}
            width={data.image.width}
            height={data.image.height}
            className="h-auto w-full rounded-2xl"
            sizes="(max-width: 640px) 95vw, (max-width: 1024px) 80vw, 640px"
            quality={50}
          />
        </figure>
      )}
      <ContentBlocks blocks={data.extras} />
      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} source={`${sourceName} - ${data.heading.replace(/\[\[|\]\]/g, "")}`} className={SPACE.block} />
    </CourseSection>
  );
}
