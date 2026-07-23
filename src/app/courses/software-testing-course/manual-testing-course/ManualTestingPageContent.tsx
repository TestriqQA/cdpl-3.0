"use client";

import StickyNav from "@/components/manual-testing-course/StickyNav";
import HeroManualTesting from "@/components/manual-testing-course/HeroManualTesting"; // Static Import for LCP

// Direct imports — dynamic(ssr:true) only added client Suspense boundaries
// that caused a hydration layout shift (see d34d08e / BLG-010).
import WhyLearnSection from "@/components/manual-testing-course/WhyLearnSection";
import CourseDetailSections from "./CourseDetailSections";

export default function ManualTestingPageContent() {
    // <div>, not <main>: the root layout already provides the single <main>
    // landmark, so this nested <main> was a duplicate-landmark a11y defect.
    return (
        <div className="relative">
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
        </div>
    );
}
