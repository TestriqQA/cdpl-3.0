"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Globe } from "lucide-react";
import { courseCategories, type LogoItem } from "@/data/headerData";

interface MegaMenuContentProps {
    closeMega: () => void;
}

export default function MegaMenuContent({ closeMega }: MegaMenuContentProps) {
    const [selectedCategory, setSelectedCategory] = useState<string>(courseCategories[0].id);
    const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

    // Derived
    const selectedCategoryData = courseCategories.find((cat) => cat.id === selectedCategory)!;
    const hoveredCourseData = selectedCategoryData?.courses.find((c) => c.name === hoveredCourse);

    // Prefer explicit rightColumnImages, else fall back to first two governingBodies
    const rightColumnBodies: LogoItem[] = (() => {
        const src = hoveredCourse
            ? hoveredCourseData?.rightColumnImages ?? hoveredCourseData?.rightColumnImages ?? []
            : selectedCategoryData?.rightColumnImages ?? selectedCategoryData?.rightColumnImages ?? [];
        return (src || []).slice(0, 2);
    })();

    const displayDescription =
        hoveredCourse ? hoveredCourseData?.description : selectedCategoryData?.description;

    return (
        <div className="grid grid-cols-12 gap-4 p-4 sm:p-6 lg:p-6">
            {/* Column 1: Categories */}
            <div className="col-span-12 sm:col-span-4 lg:col-span-3 border-r border-gray-200 pr-4">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 sm:mb-4">Categories</h3>
                <div className="space-y-1 max-h-[420px] overflow-y-auto pr-2">
                    {courseCategories.map((category) => {
                        const href = category.slug ? `/${category.slug}` : undefined;
                        return href ? (
                            <Link
                                href={href}
                                key={category.id}
                                onMouseEnter={() => {
                                    setSelectedCategory(category.id);
                                    setHoveredCategory(category.id);
                                    setHoveredCourse(null);
                                }}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between group text-sm ${selectedCategory === category.id ? "bg-orange-50 text-brand font-medium" : "text-gray-700 hover:bg-gray-50"
                                    }`}
                                aria-current={selectedCategory === category.id ? "true" : "false"}
                            >
                                <span>{category.name}</span>
                                <ChevronRight
                                    className={`h-4 w-4 transition-transform ${selectedCategory === category.id ? "text-brand" : "text-gray-400"
                                        }`}
                                />
                            </Link>
                        ) : (
                            <div
                                key={category.id}
                                onMouseEnter={() => {
                                    setSelectedCategory(category.id);
                                    setHoveredCategory(category.id);
                                    setHoveredCourse(null);
                                }}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between group text-sm ${selectedCategory === category.id ? "bg-orange-50 text-brand font-medium" : "text-gray-700 hover:bg-gray-50"
                                    }`}
                                aria-current={selectedCategory === category.id ? "true" : "false"}
                            >
                                <span>{category.name}</span>
                                <ChevronRight
                                    className={`h-4 w-4 transition-transform ${selectedCategory === category.id ? "text-brand" : "text-gray-400"
                                        }`}
                                />
                            </div>
                        )
                    })}
                </div>
                <Link href="/courses" className="mt-4 flex items-center text-brand hover:text-brand font-medium text-sm group" onClick={closeMega}>
                    View All Courses
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* Column 2: Courses */}
            <div className="col-span-12 sm:col-span-4 lg:col-span-5 pr-0 sm:pr-4">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 sm:mb-4">Courses</h3>
                <div className="grid grid-cols-1 gap-1 max-h-[420px] overflow-y-auto pr-2">
                    {selectedCategoryData?.courses.map((course, index) => {
                        const isHovered = hoveredCourse === course.name;
                        const href = course.slug ? `/${course.slug}` : undefined;
                        const itemClasses = `flex items-start px-3 py-2 rounded-lg transition-all duration-200 group ${isHovered ? "bg-orange-50 text-brand" : "text-gray-700 hover:bg-orange-50 hover:text-brand"
                            }`;

                        const inner = (
                            <>
                                <div className="flex-shrink-0 mt-1">
                                    <div
                                        className={`w-2 h-2 rounded-full transition-transform ${isHovered ? "bg-brand scale-125" : "bg-brand group-hover:scale-125"
                                            }`}
                                    />
                                </div>
                                <div className="ml-3">
                                    <p className="font-medium text-sm">{course.name}</p>
                                </div>
                            </>
                        );

                        return href ? (
                            <Link
                                key={index}
                                href={href}
                                onMouseEnter={() => setHoveredCourse(course.name)}
                                className={itemClasses}
                                onClick={closeMega}
                            >
                                {inner}
                            </Link>
                        ) : (
                            <div
                                key={index}
                                onMouseEnter={() => setHoveredCourse(course.name)}
                                className={itemClasses}
                                role="button"
                                tabIndex={0}
                            >
                                {inner}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Column 3: Two stacked images (distinct slots) */}
            <div className="col-span-12 sm:col-span-4 lg:col-span-4 bg-gradient-to-br from-orange-50 to-purple-50 rounded-xl p-4">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    {hoveredCourse || hoveredCategory ? "Certifications" : "Governing Bodies"}
                </h3>
                <p className="text-xs text-gray-600 mb-4">
                    {hoveredCourse
                        ? "Certified by leading organizations"
                        : hoveredCategory
                            ? "Certified by leading organizations"
                            : "Hover over a category or course to see its certifications"}
                </p>

                <div className="grid grid-rows-2 gap-4">
                    {[0, 1].map((i) => {
                        const body = rightColumnBodies[i];
                        return (
                            <div
                                key={i + (body?.name || "placeholder")}
                                className="bg-white rounded-lg p-4 hover:shadow-md transition-all duration-200 flex items-center justify-center h-32"
                            >
                                {body ? (
                                    <Image
                                        src={body.logo}
                                        alt={body.name}
                                        className="object-contain h-full w-auto rounded-md"
                                        width={400}
                                        height={128}
                                        priority={false}
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full w-full text-gray-300 text-xs">
                                        Image slot
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <p className="text-xs text-gray-600 mt-4 mb-4">
                    {displayDescription || "Select a category or course to view its description"}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center text-xs text-gray-600">
                        <Globe className="h-4 w-4 mr-2 text-brand flex-shrink-0" />
                        <span>Globally Recognized Certifications</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
