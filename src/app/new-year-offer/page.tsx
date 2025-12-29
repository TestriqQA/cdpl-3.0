import { Suspense } from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
    title: "New Year Special Offer | 50% Flat Discount on All Courses - CDPL",
    description: "Unlock your tech career in 2026 with 50% OFF on Software Testing, Data Science, AI, and Digital Marketing courses. Limited time offer!",
};

const NewYearHeroSection = dynamic(() => import("@/components/sections/new-year/NewYearHeroSection"), {
    ssr: true
});

const NewYearCoursesSection = dynamic(() => import("@/components/sections/new-year/NewYearCoursesSection"), {
    ssr: true
});

const NewYearBreadcrumb = dynamic(() => import("@/components/sections/new-year/NewYearBreadcrumb"), {
    ssr: true
});

export default function NewYearOfferPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <NewYearBreadcrumb />
            <Suspense fallback={<div className="min-h-screen w-full bg-slate-950 flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div></div>}>
                <NewYearHeroSection />
            </Suspense>
            <NewYearCoursesSection />
        </main>
    );
}
