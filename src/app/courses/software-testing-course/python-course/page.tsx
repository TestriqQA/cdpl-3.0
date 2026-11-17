import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { pythonCourse } from "@/data/courses/software-testing/python-course";

export const metadata = courseMetadata(pythonCourse);

export default function Page() {
  return <CoursePage course={pythonCourse} />;
}
