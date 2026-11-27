import { courseRoute } from "@/components/course-page/course-route";

// Every course in this family, built at deploy time from the "ds-ml" entries
// in src/data/courses/registry.ts. A slug that is not one of them is a 404.
const route = courseRoute("ds-ml");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
