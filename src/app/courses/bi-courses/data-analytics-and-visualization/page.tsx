import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { dataAnalyticsAndVisualizationCourse } from "@/data/courses/data-analytics-and-visualization";

export const metadata = courseMetadata(dataAnalyticsAndVisualizationCourse);

export default function Page() {
  return <CoursePage course={dataAnalyticsAndVisualizationCourse} />;
}
