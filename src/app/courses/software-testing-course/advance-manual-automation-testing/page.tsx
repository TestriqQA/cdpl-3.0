import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { advanceManualAutomationTestingCourse } from "@/data/courses/advance-manual-automation-testing";

export const metadata = courseMetadata(advanceManualAutomationTestingCourse);

export default function Page() {
  return <CoursePage course={advanceManualAutomationTestingCourse} />;
}
