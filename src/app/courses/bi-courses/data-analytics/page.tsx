import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { dataAnalyticsCourse } from "@/data/courses/bi/data-analytics";

export const metadata = courseMetadata(dataAnalyticsCourse);

export default function Page() {
  return <CoursePage course={dataAnalyticsCourse} />;
}
