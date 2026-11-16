import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { dataScienceCourse } from "@/data/courses/data-science-course";

export const metadata = courseMetadata(dataScienceCourse);

export default function Page() {
  return <CoursePage course={dataScienceCourse} />;
}
