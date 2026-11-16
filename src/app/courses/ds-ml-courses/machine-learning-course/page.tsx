import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { machineLearningCourse } from "@/data/courses/machine-learning-course";

export const metadata = courseMetadata(machineLearningCourse);

export default function Page() {
  return <CoursePage course={machineLearningCourse} />;
}
