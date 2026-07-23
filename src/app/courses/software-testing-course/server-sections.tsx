// Direct re-exports — dynamic(ssr:true) only added client Suspense boundaries
// that caused a hydration layout shift (see d34d08e / BLG-010).
export { default as HeroSection } from "@/components/software-testing-course/HeroSection";
export { default as FeaturesSection } from "@/components/software-testing-course/FeaturesSection";
export { default as CurriculumSection } from "@/components/software-testing-course/CurriculumSection";
export { default as CoursesSection } from "@/components/software-testing-course/CoursesSection";
export { default as ProjectsSection } from "@/components/software-testing-course/ProjectsSection";
export { default as CareerPathSection } from "@/components/software-testing-course/CareerPathSection";
export { default as FAQSection } from "@/components/software-testing-course/FAQSection";
