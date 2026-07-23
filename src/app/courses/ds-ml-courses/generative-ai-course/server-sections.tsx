// Direct re-exports — dynamic(ssr:true) only added client Suspense boundaries
// that caused a hydration layout shift (see d34d08e / BLG-010).

export { default as WhyGenAIProgram } from "@/components/generative-ai-course/WhyGenAIProgram";

export { default as CurriculumSection } from "@/components/generative-ai-course/CurriculumSection";

export { default as ProjectsSection } from "@/components/generative-ai-course/ProjectsSection";

export { default as CareerSection } from "@/components/generative-ai-course/CareerSection";

export { default as WhoShouldEnroll } from "@/components/generative-ai-course/WhoShouldEnroll";

export { default as ToolsSection } from "@/components/generative-ai-course/ToolsSection";

export { default as FaqSection } from "@/components/generative-ai-course/FaqSection";

export { default as CareerRoadmapSection } from "@/components/generative-ai-course/CareerRoadmapSection";
