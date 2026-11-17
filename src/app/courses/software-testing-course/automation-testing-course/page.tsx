import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { automationTestingCourse } from "@/data/courses/automation-testing-course";

export const metadata = courseMetadata(automationTestingCourse);

export default function Page() {
  return <CoursePage course={automationTestingCourse} />;
}
