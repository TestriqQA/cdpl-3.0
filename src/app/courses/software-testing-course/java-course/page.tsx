import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { javaCourse } from "@/data/courses/software-testing/java-course";

export const metadata = courseMetadata(javaCourse);

export default function Page() {
  return <CoursePage course={javaCourse} />;
}
