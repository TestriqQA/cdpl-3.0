import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { powerBiCourse } from "@/data/courses/bi/power-bi-course";

export const metadata = courseMetadata(powerBiCourse);

export default function Page() {
  return <CoursePage course={powerBiCourse} />;
}
