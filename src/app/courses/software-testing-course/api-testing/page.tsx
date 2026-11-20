import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { apiTestingCourse } from "@/data/courses/software-testing/api-testing";

export const metadata = courseMetadata(apiTestingCourse);

export default function Page() {
  return <CoursePage course={apiTestingCourse} />;
}
