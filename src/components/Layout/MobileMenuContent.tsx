"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { courseCategories } from "@/data/headerData";

type MobileMenuContentProps = {
    closeMenu: () => void;
    openEnquire: () => void;
};

export default function MobileMenuContent({ closeMenu, openEnquire }: MobileMenuContentProps) {
    const pathname = usePathname();

    const [mobileSections, setMobileSections] = useState<{
        courses: boolean;
        jobs: boolean;
        about: boolean;
        openCategoryId: string | null;
    }>({
        courses: false,
        jobs: false,
        about: false,
        openCategoryId: null,
    });

    const toggleMobileSection = (key: "courses" | "jobs" | "about") => {
        setMobileSections((s) => {
            const next = { ...s, [key]: !s[key] };
            if (key === "courses" && s.courses) next.openCategoryId = null;
            return next;
        });
    };

    const toggleMobileCategory = (categoryId: string) => {
        setMobileSections((s) => ({ ...s, openCategoryId: s.openCategoryId === categoryId ? null : categoryId }));
    };

    const isCoursesMenuOpen = mobileSections.courses;

    return (
        <div className="px-4 pt-2 pb-6 space-y-1">
            <Link
                href="/"
                className={`block px-4 py-3 rounded-lg transition-colors text-sm sm:text-base active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname === "/" ? "text-brand font-semibold bg-white" : "text-gray-700 hover:text-brand hover:bg-white"}`}
                onClick={closeMenu}
            >
                Home
            </Link>

            {/* Mobile Courses Accordion */}
            <div className="space-y-2">
                <button
                    onClick={() => toggleMobileSection("courses")}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors text-sm sm:text-base active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${isCoursesMenuOpen ? "text-brand font-semibold bg-white" : "text-gray-700 hover:text-brand hover:bg-white"}`}
                    aria-expanded={mobileSections.courses}
                    aria-controls="mobile-courses"
                >
                    <span>Courses</span>
                    <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${mobileSections.courses ? "rotate-180" : ""}`}
                    />
                </button>

                {mobileSections.courses && (
                    <div id="mobile-courses" className="pl-4 space-y-2">
                        {courseCategories.map((category) => {
                            const isOpen = mobileSections.openCategoryId === category.id;
                            return (
                                <div key={category.id} className="space-y-2">
                                    <button
                                        onClick={() => toggleMobileCategory(category.id)}
                                        className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover:text-brand hover:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none rounded-lg transition-colors outline-none"
                                        aria-expanded={isOpen}
                                        aria-controls={`mobile-category-${category.id}`}
                                    >
                                        <span>{category.name}</span>
                                        <ChevronRight
                                            className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-90" : ""}`}
                                        />
                                    </button>

                                    {isOpen && (
                                        <div id={`mobile-category-${category.id}`} className="pl-4 space-y-1">
                                            {category.courses.map((course, idx) => {
                                                const href = course.slug ? `/${course.slug}` : undefined;
                                                return href ? (
                                                    <Link
                                                        key={idx}
                                                        href={href}
                                                        className={`block px-4 py-2 text-sm rounded-lg transition-colors active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname === href ? "text-brand font-semibold bg-white" : "text-gray-600 hover:text-brand hover:bg-white"}`}
                                                        onClick={closeMenu}
                                                    >
                                                        &bull; {course.name}
                                                    </Link>
                                                ) : (
                                                    <div
                                                        key={idx}
                                                        className="block px-4 py-2 text-sm text-gray-600 rounded-lg"
                                                    >
                                                        &bull; {course.name}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                        <Link
                            href="/courses"
                            className={`block px-4 py-2 text-sm font-medium active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname === "/courses" ? "text-brand" : "text-brand hover:text-brand"}`}
                            onClick={closeMenu}
                        >
                            View All Courses &rarr;
                        </Link>
                    </div>
                )}
            </div>

            {/* Mobile Services Link */}
            <Link
                href="/services"
                className={`block px-4 py-3 rounded-lg transition-colors text-sm sm:text-base active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname.startsWith("/services") ? "text-brand font-semibold bg-white" : "text-gray-700 hover:text-brand hover:bg-white"}`}
                onClick={closeMenu}
            >
                Services
            </Link>

            {/* Mobile Jobs Accordion */}
            <div className="space-y-2">
                <button
                    onClick={() => toggleMobileSection("jobs")}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors text-sm sm:text-base active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname.startsWith("/jobs") ? "text-brand font-semibold bg-white" : "text-gray-700 hover:text-brand hover:bg-white"}`}
                    aria-expanded={mobileSections.jobs}
                    aria-controls="mobile-jobs"
                >
                    <span>Jobs</span>
                    <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${mobileSections.jobs ? "rotate-180" : ""}`}
                    />
                </button>
                {mobileSections.jobs && (
                    <div id="mobile-jobs" className="pl-4 space-y-1">
                        <Link
                            href="/jobs/live-jobs"
                            className={`block px-4 py-2 text-sm rounded-lg transition-colors active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname === "/jobs/live-jobs" ? "text-brand font-semibold bg-white" : "text-gray-600 hover:text-brand hover:bg-white"}`}
                            onClick={closeMenu}
                        >
                            &bull; Live Jobs
                        </Link>
                        <Link
                            href="/jobs/placements"
                            className={`block px-4 py-2 text-sm rounded-lg transition-colors active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname === "/jobs/placements" ? "text-brand font-semibold bg-white" : "text-gray-600 hover:text-brand hover:bg-white"}`}
                            onClick={closeMenu}
                        >
                            &bull; Placements
                        </Link>
                        <Link
                            href="/jobs/careers"
                            className={`block px-4 py-2 text-sm rounded-lg transition-colors active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname === "/jobs/careers" ? "text-brand font-semibold bg-white" : "text-gray-600 hover:text-brand hover:bg-white"}`}
                            onClick={closeMenu}
                        >
                            &bull; Careers
                        </Link>
                        <Link
                            href="/jobs/job-openings"
                            className={`block px-4 py-2 text-sm rounded-lg transition-colors active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname === "/jobs/job-openings" ? "text-brand font-semibold bg-white" : "text-gray-600 hover:text-brand hover:bg-white"}`}
                            onClick={closeMenu}
                        >
                            &bull; Job Openings
                        </Link>
                    </div>
                )}
            </div>

            {/* Mobile About Accordion */}
            <div className="space-y-2">
                <button
                    onClick={() => toggleMobileSection("about")}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors text-sm sm:text-base active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname.startsWith("/about") || pathname.startsWith("/our-team") ? "text-brand font-semibold bg-white" : "text-gray-700 hover:text-brand hover:bg-white"}`}
                    aria-expanded={mobileSections.about}
                    aria-controls="mobile-about"
                >
                    <span>About</span>
                    <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${mobileSections.about ? "rotate-180" : ""}`}
                    />
                </button>
                {mobileSections.about && (
                    <div id="mobile-about" className="pl-4 space-y-1">
                        <Link
                            href="/about-us"
                            className={`block px-4 py-2 text-sm rounded-lg transition-colors active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname === "/about-us" ? "text-brand font-semibold bg-white" : "text-gray-600 hover:text-brand hover:bg-white"}`}
                            onClick={closeMenu}
                        >
                            &bull; About CDPL
                        </Link>
                        <Link
                            href="/our-team"
                            className={`block px-4 py-2 text-sm rounded-lg transition-colors active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname === "/our-team" ? "text-brand font-semibold bg-white" : "text-gray-600 hover:text-brand hover:bg-white"}`}
                            onClick={closeMenu}
                        >
                            &bull; Our Team
                        </Link>
                    </div>
                )}
            </div>

            <Link
                href="/events"
                className={`block px-4 py-3 rounded-lg transition-colors text-sm sm:text-base active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname.startsWith("/events") ? "text-brand font-semibold bg-white" : "text-gray-700 hover:text-brand hover:bg-white"}`}
                onClick={closeMenu}
            >
                Event
            </Link>
            <Link
                href="/mentors"
                className={`block px-4 py-3 rounded-lg transition-colors text-sm sm:text-base active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname.startsWith("/mentors") ? "text-brand font-semibold bg-white" : "text-gray-700 hover:text-brand hover:bg-white"}`}
                onClick={closeMenu}
            >
                Mentors
            </Link>
            <Link
                href="/blog"
                className={`block px-4 py-3 rounded-lg transition-colors text-sm sm:text-base active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname.startsWith("/blog") ? "text-brand font-semibold bg-white" : "text-gray-700 hover:text-brand hover:bg-white"}`}
                onClick={closeMenu}
            >
                Blog
            </Link>
            <Link
                href="/contact-us"
                className={`block px-4 py-3 rounded-lg transition-colors text-sm sm:text-base active:bg-white active:text-orange-500 focus:text-orange-500 active:transition-none focus:transition-none outline-none ${pathname.startsWith("/contact-us") ? "text-brand font-semibold bg-white" : "text-gray-700 hover:text-brand hover:bg-white"}`}
                onClick={closeMenu}
            >
                Contact
            </Link>
            <button
                onClick={() => {
                    closeMenu();
                    openEnquire();
                }}
                className="w-full block px-4 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg text-center text-sm sm:text-base font-semibold"
            >
                Free Demo
            </button>
        </div>
    );
}
