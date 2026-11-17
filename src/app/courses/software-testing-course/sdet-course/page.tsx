import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { sdetCourse } from "@/data/courses/sdet-course";

export const metadata = courseMetadata(sdetCourse);

export default function Page() {
  return <CoursePage course={sdetCourse} />;
}
