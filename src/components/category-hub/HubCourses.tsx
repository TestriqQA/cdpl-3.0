import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CourseCard from "@/components/courses/CourseCard";
import { cardPrice } from "@/data/courses/price-mock";
import ContentBlocks from "@/components/course-page/parts/ContentBlocks";
import CtaButtons from "@/components/course-page/parts/CtaButtons";
import { CourseSection, GRID_GAP, SPACE, SectionHeader, SectionOutro } from "@/components/course-page/parts/Section";
import type { SectionProps } from "@/components/course-page/types";
import type { HubCourses as Courses } from "@/types/category-hub";

/** The category's courses, as the site-wide CourseCard (same card as the homepage). */
export default function HubCourses({ id, tone, data, sourceName }: SectionProps<Courses>) {
  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />

      <div className={`${SPACE.body} mx-auto grid max-w-5xl ${GRID_GAP} sm:grid-cols-2 lg:grid-cols-3`}>
        {data.items.map((c, i) => (
          <CourseCard
            key={c.link}
            course={{ ...c, ...cardPrice(c.link) }}
            index={i}
            subgrid
            source={`${sourceName} - Courses Section - ${c.title} - Download Syllabus`}
          />
        ))}
      </div>

      {data.viewAll && (
        <div className={`${SPACE.block} text-center`}>
          <Link
            href={data.viewAll.href}
            title={data.viewAll.title}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-brand"
          >
            {data.viewAll.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      )}

      <ContentBlocks blocks={data.extras} />
      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} source={`${sourceName} - Courses Section`} className={SPACE.block} />
    </CourseSection>
  );
}
