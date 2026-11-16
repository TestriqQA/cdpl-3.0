import ReviewsMarquee from "@/components/sections/ReviewMarque";
import { getGoogleReviews } from "@/lib/reviews";
import CtaButtons from "./parts/CtaButtons";
import ContentBlocks from "./parts/ContentBlocks";
import { CourseSection, SPACE, SectionHeader, SectionOutro } from "./parts/Section";
import type { CourseTestimonials as Testimonials } from "@/types/coursePage";
import type { SectionProps } from "./types";

// Reviews are fetched on the server (cached daily in lib/reviews) so they are
// in the HTML instead of appearing after a client-side load.
export default async function CourseTestimonials({ id, tone, data, courseName, sourceName }: SectionProps<Testimonials>) {
  const { reviews } = await getGoogleReviews();

  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />
      <div className={SPACE.body}>
        <ReviewsMarquee initialReviews={reviews} />
      </div>
      <ContentBlocks blocks={data.extras} />
      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} courseName={courseName} source={`${sourceName} - Testimonials Section`} className={SPACE.block} />
    </CourseSection>
  );
}
