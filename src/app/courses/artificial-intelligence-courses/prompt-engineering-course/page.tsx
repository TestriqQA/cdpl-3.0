import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { promptEngineeringCourse } from "@/data/courses/prompt-engineering-course";

export const metadata = courseMetadata(promptEngineeringCourse);

export default function Page() {
  return <CoursePage course={promptEngineeringCourse} />;
}
