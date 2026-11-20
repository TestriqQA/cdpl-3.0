import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { aiCourse } from "@/data/courses/ds-ml/ai-course";

export const metadata = courseMetadata(aiCourse);

export default function Page() {
  return <CoursePage course={aiCourse} />;
}
