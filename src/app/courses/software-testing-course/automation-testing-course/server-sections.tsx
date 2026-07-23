// HeroSection moved to page.tsx for Static Import (LCP Optimization)

// Direct re-exports — dynamic(ssr:true) only added client Suspense boundaries
// that caused a hydration layout shift (see d34d08e / BLG-010).

export { default as StatsSection } from "@/components/automation-testing-course/StatsSection";

export { default as WhyAutomation } from "@/components/automation-testing-course/WhyAutomation";

export { default as CurriculumSection } from "@/components/automation-testing-course/CurriculumSection";

export { default as ProjectsSection } from "@/components/automation-testing-course/ProjectsSection";

export { default as CareerSection } from "@/components/automation-testing-course/CareerSection";

export { default as WhoShouldEnroll } from "@/components/automation-testing-course/WhoShouldEnroll";

export { default as ToolsSection } from "@/components/automation-testing-course/ToolsSection";

export { default as FaqSection } from "@/components/automation-testing-course/FaqSection";
