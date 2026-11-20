import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { dataAnalyticsPythonCourse } from "@/data/courses/bi/data-analytics-python";

export const metadata = courseMetadata(dataAnalyticsPythonCourse);

export default function Page() {
  return <CoursePage course={dataAnalyticsPythonCourse} />;
}
