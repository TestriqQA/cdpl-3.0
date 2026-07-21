"use client";

import dynamic from "next/dynamic";

const CurriculumSection = dynamic(
    () => import("@/components/manual-testing-course/CurriculumSection"),
    { ssr: true }
)
const ToolsSection = dynamic(
    () => import("@/components/manual-testing-course/ToolsSection"),
    { ssr: true }
)
const ProjectSection = dynamic(
    () => import("@/components/manual-testing-course/ProjectSection"),
    { ssr: true }
)
const LearningPath = dynamic(
    () => import("@/components/manual-testing-course/LearningPath"),
    { ssr: true }
)
const InstructorSection = dynamic(
    () => import("@/components/manual-testing-course/InstructorSection"),
    { ssr: true }
)
const CareerSection = dynamic(
    () => import("@/components/manual-testing-course/CareerSection"),
    { ssr: true }
)
const TrustSection = dynamic(
    () => import("@/components/manual-testing-course/TrustSection"),
    { ssr: true }
)
const ComparisonSection = dynamic(
    () => import("@/components/manual-testing-course/ComparisonSection"),
    { ssr: true }
)
const OtherCoursesSection = dynamic(
    () => import("@/components/manual-testing-course/OtherCourseSection"),
    { ssr: true }
)
const FaqSection = dynamic(
    () => import("@/components/manual-testing-course/FaqSection"),
    { ssr: true }
)

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
