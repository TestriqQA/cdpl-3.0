"use client";

import CurriculumSection from "@/components/manual-testing-course/CurriculumSection";
import ToolsSection from "@/components/manual-testing-course/ToolsSection";
import ProjectSection from "@/components/manual-testing-course/ProjectSection";
import LearningPath from "@/components/manual-testing-course/LearningPath";
import InstructorSection from "@/components/manual-testing-course/InstructorSection";
import CareerSection from "@/components/manual-testing-course/CareerSection";
import TrustSection from "@/components/manual-testing-course/TrustSection";
import ComparisonSection from "@/components/manual-testing-course/ComparisonSection";
import OtherCoursesSection from "@/components/manual-testing-course/OtherCourseSection";
import FaqSection from "@/components/manual-testing-course/FaqSection";

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
