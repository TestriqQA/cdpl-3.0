import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { digitalMarketingCourse } from "@/data/courses/digital-marketing-course";

export const metadata = courseMetadata(digitalMarketingCourse);

export default function Page() {
  return <CoursePage course={digitalMarketingCourse} />;
}
