import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { aiInDigitalMarketingCourse } from "@/data/courses/digital-marketing/ai-in-digital-marketing";

export const metadata = courseMetadata(aiInDigitalMarketingCourse);

export default function Page() {
  return <CoursePage course={aiInDigitalMarketingCourse} />;
}
