import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { dataVisualizationInRProgrammingCourse } from "@/data/courses/ds-ml/data-visualization-in-r-programming";

export const metadata = courseMetadata(dataVisualizationInRProgrammingCourse);

export default function Page() {
  return <CoursePage course={dataVisualizationInRProgrammingCourse} />;
}
