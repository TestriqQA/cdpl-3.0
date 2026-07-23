// Direct re-exports — dynamic(ssr:true) only added client Suspense boundaries
// that caused a hydration layout shift (see d34d08e / BLG-010).

export { default as WhyMLProgram } from "@/components/machine-learning-course/WhyMLProgram";

export { default as CurriculumSection } from "@/components/machine-learning-course/CurriculumSection";

export { default as ProjectsSection } from "@/components/machine-learning-course/ProjectsSection";

export { default as CareerSection } from "@/components/machine-learning-course/CareerSection";

export { default as WhoShouldEnroll } from "@/components/machine-learning-course/WhoShouldEnroll";

export { default as ToolsSection } from "@/components/machine-learning-course/ToolsSection";

export { default as FaqSection } from "@/components/machine-learning-course/FaqSection";

export { default as CareerRoadmapSection } from "@/components/machine-learning-course/CareerRoadmapSection";
