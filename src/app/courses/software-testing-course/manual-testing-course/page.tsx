import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { manualTestingCourse } from "@/data/courses/software-testing/manual-testing-course";

export const metadata = courseMetadata(manualTestingCourse);

export default function Page() {
  return <CoursePage course={manualTestingCourse} />;
}
