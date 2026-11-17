import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { dbmsCourse } from "@/data/courses/dbms-course";

export const metadata = courseMetadata(dbmsCourse);

export default function Page() {
  return <CoursePage course={dbmsCourse} />;
}
