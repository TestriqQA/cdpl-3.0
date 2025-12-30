"use client";

import dynamic from "next/dynamic";

function SectionLoader({ label = "Loading..." }: { label?: string }) {
    return (
        <div className="flex items-center justify-center py-16 min-h-[60vh]">
            <p className="text-gray-500">{label}</p>
        </div>
    );
}

import StickyNav from "@/components/manual-testing-course/StickyNav";
import HeroManualTesting from "@/components/manual-testing-course/HeroManualTesting";
import WhyLearnSection from "@/components/manual-testing-course/WhyLearnSection";
const CourseDetailSections = dynamic(
    () => import("./CourseDetailSections"),
    { ssr: true, loading: () => <SectionLoader label="Loading additional content..." /> }
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

            {/* Grouped sections for performance */}
            <CourseDetailSections />
        </main>
    );
}
