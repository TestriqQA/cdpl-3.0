"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { mockCategories, MockCourse } from "@/data/mockTestData";
import CourseCategoryCard from "@/components/mock-test/CourseCategoryCard";
import RegistrationModal, { RegistrationData } from "@/components/mock-test/RegistrationModal";
import { ChevronRight, Home, Sparkles } from "lucide-react";
import Link from "next/link";

export default function MockTestLandingPage() {
    const router = useRouter();
    const [selectedCourse, setSelectedCourse] = useState<MockCourse | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCourseClick = (course: MockCourse) => {
        setSelectedCourse(course);
        setIsModalOpen(true);
    };

    const handleRegister = async (data: RegistrationData) => {
        if (!selectedCourse) return;

        try {
            // Save to session (keep existing behavior)
            if (typeof window !== "undefined") {
                sessionStorage.setItem("mockTestUser", JSON.stringify(data));
            }

            // Send to Admin API
            console.log("MockTest: Sending registration data...");
            const res = await fetch("/api/mock-test/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...data,
                    courseName: selectedCourse.name,
                }),
            });
            console.log("MockTest: API Response status:", res.status);

            if (!res.ok) {
                console.error("MockTest: API failed");
                // Optional: Early return or show error
            }

            // Redirect
            console.log("MockTest: Redirecting to", `/mock-test/${selectedCourse.slug}`);
            setIsModalOpen(false);
            router.push(`/mock-test/${selectedCourse.slug}`);

        } catch (error) {
            console.error("Registration failed", error);
            // Proceed anyway to not block user
            setIsModalOpen(false);
            router.push(`/mock-test/${selectedCourse.slug}`);
        }
    };

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Mock Tests' },
    ];

    return (
        <div className="min-h-screen bg-[#fafafa]">

            {/* Hero Section */}
            <div className="relative bg-white border-b border-gray-100 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[80px] -translate-x-1/3 translate-y-1/3"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 relative z-10 text-center">

                    {/* Breadcrumbs */}
                    <nav aria-label="Breadcrumb" className="mb-8">
                        <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                            {breadcrumbs.map((c, i) => {
                                const isLast = i === breadcrumbs.length - 1;
                                return (
                                    <li key={i} className="flex items-center gap-2">
                                        {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                        {c.href ? (
                                            <Link href={c.href} className={`hover:text-indigo-700 ${isLast ? 'font-semibold text-slate-900' : ''}`}>
                                                {c.label}
                                            </Link>
                                        ) : (
                                            <span className={`hover:text-indigo-700 ${isLast ? 'font-semibold text-slate-900' : ''}`}>{c.label}</span>
                                        )}
                                    </li>
                                );
                            })}
                        </ol>
                    </nav>

                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-medium mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <Sparkles className="w-4 h-4" /> New Feature
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-5 duration-700">
                        Master Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-purple-600">Tech Skills</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                        Challenge yourself with our industry-standard mock tests. Select a course below, take a 30-minute assessment, and receive instant personalized feedback.
                    </p>


                </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockCategories.map((category, idx) => (
                        <div
                            key={category.id}
                            className="animate-in fade-in slide-in-from-bottom-8 duration-700"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            <CourseCategoryCard
                                category={category}
                                onCourseClick={handleCourseClick}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {selectedCourse && (
                <RegistrationModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onRegister={handleRegister}
                    courseName={selectedCourse.name}
                />
            )}
        </div>
    );
}
