// Direct re-exports — dynamic(ssr:true) only added client Suspense boundaries
// that caused a hydration layout shift (see d34d08e / BLG-010).

export { default as WhyDSProgram } from "@/components/data-science-course/WhyDSProgram";

export { default as CurriculumSection } from "@/components/data-science-course/CurriculumSection";

export { default as ProjectsSection } from "@/components/data-science-course/ProjectsSection";

export { default as CareerSection } from "@/components/data-science-course/CareerSection";

export { default as WhoShouldEnroll } from "@/components/data-science-course/WhoShouldEnroll";

export { default as ToolsSection } from "@/components/data-science-course/ToolsSection";

export { default as FaqSection } from "@/components/data-science-course/FaqSection";

export { default as CareerRoadmapSection } from "@/components/data-science-course/CareerRoadmapSection";

export { default as JsonLd } from "@/components/JsonLd";
