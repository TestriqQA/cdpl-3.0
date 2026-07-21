"use client";

import dynamic from "next/dynamic";

import StickyNav from "@/components/manual-testing-course/StickyNav";
import HeroManualTesting from "@/components/manual-testing-course/HeroManualTesting"; // Static Import for LCP

// ssr:true (was ssr:false): these sections carry the entire course body —
// curriculum, projects, FAQ, etc. With ssr:false that content was absent from
// the server HTML, invisible to search/AI crawlers and painting only after
// hydration. They are still code-split (below the fold, client components), but
// now server-render their markup. Their window/document access is confined to
// scroll/click handlers, so SSR is safe. The min-h-[60vh] "Loading…" fallbacks
// are dropped — with ssr:true the real markup is already present.
const WhyLearnSection = dynamic(
    () => import("@/components/manual-testing-course/WhyLearnSection"),
    { ssr: true }
)
const CourseDetailSections = dynamic(
    () => import("./CourseDetailSections"),
    { ssr: true }
)

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
