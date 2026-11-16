import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CourseCard from "@/components/courses/CourseCard";
import { COURSES } from "@/components/AI-Courses/data/data";

/** The hub's courses, as the site-wide CourseCard (same card as the homepage). */
export default function CoursesSection() {
    return (
        <section className="py-10 bg-gray-50" id='courses'>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 bg-orange-100 text-brand rounded-full text-sm font-semibold mb-4">
                        Popular Courses
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Explore Our <span className="text-brand">Industry-Ready</span> Courses
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Choose from our comprehensive range of courses designed to make you job-ready with hands-on projects and expert mentorship.
                    </p>
                </div>

                {/* Course Cards Grid */}
                <div className="mx-auto grid max-w-5xl gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {COURSES.map((course, index) => (
                        <CourseCard
                            key={course.id}
                            course={{ ...course, linkTitle: course.titleAttribute }}
                            index={index}
                            subgrid
                            source={`Artificial Intelligence Course Category Page - Courses Section - ${course.title} - Download Syllabus`}
                        />
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-12">
                    <Link
                        href="/courses"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-bold rounded-xl shadow-md border-2 border-gray-200 hover:border-brand transition-all duration-300"
                    >
                        <span>View All Courses</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
