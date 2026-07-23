// Direct re-exports — dynamic(ssr:true) only added client Suspense boundaries
// that caused a hydration layout shift (see d34d08e / BLG-010).

// HeroSection and StatsSection removed (now static in page.tsx)

export { default as WhyPromptGenProgram } from "@/components/prompt-engineering-course/WhyPromptGenProgram";

export { default as CurriculumSection } from "@/components/prompt-engineering-course/CurriculumSection";

export { default as ProjectsSection } from "@/components/prompt-engineering-course/ProjectsSection";

export { default as CareerSection } from "@/components/prompt-engineering-course/CareerSection";

export { default as WhoShouldEnroll } from "@/components/prompt-engineering-course/WhoShouldEnroll";

export { default as ToolsSection } from "@/components/prompt-engineering-course/ToolsSection";

export { default as FaqSection } from "@/components/prompt-engineering-course/FaqSection";

export { default as CareerRoadmapSection } from "@/components/prompt-engineering-course/CareerRoadmapSection";

// JsonLd removed (now static in page.tsx)
