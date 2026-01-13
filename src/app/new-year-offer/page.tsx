import { Metadata } from "next";
import NewYearHeroSection from "@/components/sections/new-year/NewYearHeroSection";
import NewYearCoursesSection from "@/components/sections/new-year/NewYearCoursesSection";
import NewYearBreadcrumb from "@/components/sections/new-year/NewYearBreadcrumb";

export const metadata: Metadata = {
    title: "New Year Special Offer | 50% Flat Discount on All Courses - CDPL",
    description: "Unlock your tech career in 2026 with 50% OFF on Software Testing, Data Science, AI, and Digital Marketing courses. Limited time offer!",
};

export default function NewYearOfferPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <NewYearBreadcrumb />
            <NewYearHeroSection />
            <NewYearCoursesSection />
        </main>
    );
}
