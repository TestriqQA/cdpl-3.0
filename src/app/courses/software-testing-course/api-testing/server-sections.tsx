// Direct re-exports — dynamic(ssr:true) only added client Suspense boundaries
// that caused a hydration layout shift (see d34d08e / BLG-010).

export { default as StatsSection } from "@/components/api-testing/StatsSection";
export { default as WhyApiTesting } from "@/components/api-testing/WhyApiTesting";
export { default as CurriculumSection } from "@/components/api-testing/CurriculumSection";
export { default as ToolsSection } from "@/components/api-testing/ToolsSection";
export { default as ProjectsSection } from "@/components/api-testing/ProjectsSection";
export { default as CareerSection } from "@/components/api-testing/CareerSection";
export { default as WhoShouldEnroll } from "@/components/api-testing/WhoShouldEnroll";
export { default as FaqSection } from "@/components/api-testing/FaqSection";
