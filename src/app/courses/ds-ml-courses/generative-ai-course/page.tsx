import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { generativeAiCourse } from "@/data/courses/generative-ai-course";

export const metadata = courseMetadata(generativeAiCourse);

export default function Page() {
  return <CoursePage course={generativeAiCourse} />;
}
