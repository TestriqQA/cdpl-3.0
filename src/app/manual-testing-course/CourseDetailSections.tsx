"use client";

import dynamic from "next/dynamic";

const CurriculumSection = dynamic(
    () => import("@/components/manual-testing-course/CurriculumSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading additional content..." /> }
)
const ToolsSection = dynamic(
    () => import("@/components/manual-testing-course/ToolsSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading additional content..." /> }
)
const ProjectSection = dynamic(
    () => import("@/components/manual-testing-course/ProjectSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading additional content..." /> }
)
const LearningPath = dynamic(
    () => import("@/components/manual-testing-course/LearningPath"),
    { ssr: true, loading: () => <SectionLoader label="Loading additional content..." /> }
)
const InstructorSection = dynamic(
    () => import("@/components/manual-testing-course/InstructorSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading additional content..." /> }
)
const CareerSection = dynamic(
    () => import("@/components/manual-testing-course/CareerSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading additional content..." /> }
)
const TrustSection = dynamic(
    () => import("@/components/manual-testing-course/TrustSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading additional content..." /> }
)
const ComparisonSection = dynamic(
    () => import("@/components/manual-testing-course/ComparisonSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading additional content..." /> }
)
const OtherCoursesSection = dynamic(
    () => import("@/components/manual-testing-course/OtherCourseSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading additional content..." /> }
)
const FaqSection = dynamic(
    () => import("@/components/manual-testing-course/FaqSection"),
    { ssr: true, loading: () => <SectionLoader label="Loading additional content..." /> }
)

function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16 min-h-[60vh]">
            <p className="text-gray-500">{label}</p>
        </div>
    );
}

export default function CourseDetailSections() {
    return (
        <>
            <section id="curriculum"><CurriculumSection /></section>
            <section id="tools"><ToolsSection /></section>
            <section id="projects"><ProjectSection /></section>
            <section id="learning-path"><LearningPath /></section>
            <section id="instructor"><InstructorSection /></section>
            <section id="career"><CareerSection /></section>
            <section id="trust"><TrustSection /></section>
            <section id="comparison"><ComparisonSection /></section>
            <section id="other-courses"><OtherCoursesSection /></section>
            <section id="faq"><FaqSection /></section>
        </>
    );
}
