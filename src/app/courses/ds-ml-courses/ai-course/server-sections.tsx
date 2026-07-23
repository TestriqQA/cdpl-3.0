'use client';


// HeroSection moved to page.tsx for Static Import (LCP Optimization)

// Direct re-exports — dynamic(ssr:true) only added client Suspense boundaries
// that caused a hydration layout shift (see d34d08e / BLG-010).

export { default as StatsSection } from "@/components/ai-course/StatsSection";

export { default as WhyAIProgram } from "@/components/ai-course/WhyAIProgram";

export { default as CurriculumSection } from "@/components/ai-course/CurriculumSection";

export { default as ProjectsSection } from "@/components/ai-course/ProjectsSection";

export { default as CareerSection } from "@/components/ai-course/CareerSection";

export { default as WhoShouldEnroll } from "@/components/ai-course/WhoShouldEnroll";

export { default as ToolsSection } from "@/components/ai-course/ToolsSection";

export { default as FaqSection } from "@/components/ai-course/FaqSection";

export { default as CareerRoadmapSection } from "@/components/ai-course/CareerRoadmapSection";
