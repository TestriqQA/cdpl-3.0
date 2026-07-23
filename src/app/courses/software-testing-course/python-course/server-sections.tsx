'use client';

// HeroSection moved to page.tsx for Static Import (LCP Optimization)

// Direct re-exports — dynamic(ssr:true) only added client Suspense boundaries
// that caused a hydration layout shift (see d34d08e / BLG-010).

export { default as StatsSection } from "@/components/python-course/StatsSection";

export { default as WhyPythonProgram } from "@/components/python-course/WhyPythonProgram";

export { default as CurriculumSection } from "@/components/python-course/CurriculumSection";

export { default as ProjectsSection } from "@/components/python-course/ProjectsSection";

export { default as CareerSection } from "@/components/python-course/CareerSection";

export { default as WhoShouldEnroll } from "@/components/python-course/WhoShouldEnroll";

export { default as ToolsSection } from "@/components/python-course/ToolsSection";

export { default as CareerRoadmapSection } from "@/components/python-course/CareerRoadmapSection";
