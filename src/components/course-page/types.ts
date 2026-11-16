/** Props every course-page body section receives from CoursePage. */
export type SectionProps<T> = {
  id: string;
  tone: "white" | "muted";
  data: T;
  courseName: string;
  sourceName: string;
};
