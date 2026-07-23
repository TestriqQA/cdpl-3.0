'use client';


// HeroSection moved to page.tsx for Static Import (LCP Optimization)

// Direct re-exports — dynamic(ssr:true) only added client Suspense boundaries
// that caused a hydration layout shift (see d34d08e / BLG-010).

export { default as StatsSection } from "@/components/advance-software-testing/StatsSection";

export { default as WhyAdvancedTesting } from "@/components/advance-software-testing/WhyAdvancedTesting";

export { default as CurriculumSection } from "@/components/advance-software-testing/CurriculumSection";

export { default as ProjectsSection } from "@/components/advance-software-testing/ProjectsSection";

export { default as CareerSection } from "@/components/advance-software-testing/CareerSection";

export { default as WhoShouldEnroll } from "@/components/advance-software-testing/WhoShouldEnroll";

export { default as ToolsSection } from "@/components/advance-software-testing/ToolsSection";

export { default as FaqSection } from "@/components/advance-software-testing/FaqSection";
