import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { mastersInDataEngineeringCourse } from "@/data/courses/masters-in-data-engineering";

export const metadata = courseMetadata(mastersInDataEngineeringCourse);

export default function Page() {
  return <CoursePage course={mastersInDataEngineeringCourse} />;
}
