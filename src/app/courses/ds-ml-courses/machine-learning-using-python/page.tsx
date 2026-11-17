import CoursePage, { courseMetadata } from "@/components/course-page/CoursePage";
import { machineLearningUsingPythonCourse } from "@/data/courses/ds-ml/machine-learning-using-python";

export const metadata = courseMetadata(machineLearningUsingPythonCourse);

export default function Page() {
  return <CoursePage course={machineLearningUsingPythonCourse} />;
}
