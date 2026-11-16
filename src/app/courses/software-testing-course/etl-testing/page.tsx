import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { etlTestingCourse } from "@/data/courses/etl-testing";

export const metadata = courseMetadata(etlTestingCourse);

export default function Page() {
  return <CoursePage course={etlTestingCourse} />;
}
