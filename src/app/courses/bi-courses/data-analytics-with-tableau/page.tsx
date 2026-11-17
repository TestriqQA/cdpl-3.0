import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { dataAnalyticsWithTableauCourse } from "@/data/courses/bi/data-analytics-with-tableau";

export const metadata = courseMetadata(dataAnalyticsWithTableauCourse);

export default function Page() {
  return <CoursePage course={dataAnalyticsWithTableauCourse} />;
}
