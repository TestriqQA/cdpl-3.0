import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { aiBootcampCourse } from "@/data/courses/digital-marketing/ai-bootcamp";

export const metadata = courseMetadata(aiBootcampCourse);

export default function Page() {
  return <CoursePage course={aiBootcampCourse} />;
}
