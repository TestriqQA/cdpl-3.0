import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { advanceSoftwareTestingCourse } from "@/data/courses/software-testing/advance-software-testing";

export const metadata = courseMetadata(advanceSoftwareTestingCourse);

export default function Page() {
  return <CoursePage course={advanceSoftwareTestingCourse} />;
}
