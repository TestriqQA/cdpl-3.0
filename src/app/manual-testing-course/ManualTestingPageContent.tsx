"use client";

import dynamic from "next/dynamic";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16">
            <p className="text-gray-500">{label}</p>
        </div>
    );
}

const StickyNav = dynamic(
    () => import("@/components/manual-testing-course/StickyNav"),
    { ssr: true, loading: () => <SectionLoader label="Loading sticky nav..." /> }
)

const CareerSection = dynamic(
    () => import("@/components/manual-testing-course/CareerSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading career..." /> }
)
const ComparisonSection = dynamic(
    () => import("@/components/manual-testing-course/ComparisonSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading comparison..." /> }
)
const CurriculumSection = dynamic(
    () => import("@/components/manual-testing-course/CurriculumSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading curriculum..." /> }
)
const FaqSection = dynamic(
    () => import("@/components/manual-testing-course/FaqSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading FAQ..." /> }
)
const HeroManualTesting = dynamic(
    () => import("@/components/manual-testing-course/HeroManualTesting"),
    { ssr: true, loading: () => <SectionLoader label="Loading hero..." /> }
)
const InstructorSection = dynamic(
    () => import("@/components/manual-testing-course/InstructorSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading instructor..." /> }
)
const LearningPath = dynamic(
    () => import("@/components/manual-testing-course/LearningPath"),
    { ssr: true, loading: () => <SectionLoader label="Loading learning path..." /> }
)
const OtherCoursesSection = dynamic(
    () => import("@/components/manual-testing-course/OtherCourseSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading other courses..." /> }
)
const ProjectsSection = dynamic(
    () => import("@/components/manual-testing-course/ProjectSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading projects..." /> }
)
const ToolsSection = dynamic(
    () => import("@/components/manual-testing-course/ToolsSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading tools..." /> }
)
const TrustSection = dynamic(
    () => import("@/components/manual-testing-course/TrustSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading trust..." /> }
)
const WhyLearnSection = dynamic(
    () => import("@/components/manual-testing-course/WhyLearnSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading why learn..." /> }
)

export default function ManualTestingPageContent() {
    return (
        <main className="relative">
            {/* HERO (with additional padding-top to prevent overlap with sticky nav) */}
            <HeroManualTesting />

            {/* Sticky nav must appear right after hero */}
            <div className="hidden md:block sticky top-0 z-20">
                <StickyNav />
            </div>

            {/* Ensure each subsequent section wrapper has the correct id */}
            <section id="why-learn"><WhyLearnSection /></section>
            <section id="curriculum"><CurriculumSection /></section>
            <section id="tools"><ToolsSection /></section>
            <section id="projects"><ProjectsSection /></section>
            <section id="learning-path"><LearningPath /></section>
            <section id="instructor"><InstructorSection /></section>
            <section id="career"><CareerSection /></section>
            <section id="trust"><TrustSection /></section>
            <section id="comparison"><ComparisonSection /></section>
            <section id="other-courses"><OtherCoursesSection /></section>
            <section id="faq"><FaqSection /></section>
        </main>
    );
}
