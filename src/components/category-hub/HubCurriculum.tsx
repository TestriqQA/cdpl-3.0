import { Award } from "lucide-react";
import ContentBlocks from "@/components/course-page/parts/ContentBlocks";
import CtaButtons from "@/components/course-page/parts/CtaButtons";
import { CourseSection, SPACE, SectionHeader, SectionOutro } from "@/components/course-page/parts/Section";
import type { SectionProps } from "@/components/course-page/types";
import type { HubCurriculum as Curriculum } from "@/types/categoryHub";
import TrackTabs from "./TrackTabs";

/**
 * Curriculum by program track. Every track is server-rendered (crawlable);
 * TrackTabs only switches which one is visible.
 */
export default function HubCurriculum({ id, tone, data, sourceName }: SectionProps<Curriculum>) {
  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />

      {data.facts && data.facts.length > 0 && (
        <ul className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2">
          {data.facts.map((f) => (
            <li
              key={f}
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700"
            >
              <Award className="h-4 w-4 text-slate-500" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
      )}

      <div className={SPACE.body}>
        <TrackTabs id={id} tracks={data.tracks} />
      </div>

      <ContentBlocks blocks={data.extras} />
      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} source={`${sourceName} - Curriculum Section`} className={SPACE.block} />
    </CourseSection>
  );
}
