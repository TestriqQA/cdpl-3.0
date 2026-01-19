"use client";
import React, { useState } from "react";
import ReviewsMarquee from "../sections/ReviewMarque";
import EnrollModal from "../EnrollModal";

export default function TestimonialsSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const courseName = "Data Analytics & Visualization with Tableau";

    return (
        <section className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Student Testimonials
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear from our successful graduates who have transformed their careers through our Tableau training
                    </p>
                </div>

                <ReviewsMarquee />


                {/* Student Success Stats */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center p-8 bg-blue-50 rounded-xl border-2 border-blue-200">
                        <div className="text-5xl font-bold text-gray-950 mb-2">500+</div>
                        <p className="text-gray-700 font-semibold">Successful Graduates</p>
                        <p className="text-sm text-gray-600 mt-2">
                            Placed in top companies
                        </p>
                    </div>

                    <div className="text-center p-8 bg-orange-50 rounded-xl border-2 border-orange-200">
                        <div className="text-5xl font-bold text-gray-950 mb-2">4.8/5</div>
                        <p className="text-gray-700 font-semibold">Average Rating</p>
                        <p className="text-sm text-gray-600 mt-2">
                            Across all platforms
                        </p>
                    </div>

                    <div className="text-center p-8 bg-green-50 rounded-xl border-2 border-green-200">
                        <div className="text-5xl font-bold text-gray-950 mb-2">75%</div>
                        <p className="text-gray-700 font-semibold">Job Satisfaction</p>
                        <p className="text-sm text-gray-600 mt-2">
                            Among professionals
                        </p>
                    </div>

                    <div className="text-center p-8 bg-purple-50 rounded-xl border-2 border-purple-200">
                        <div className="text-5xl font-bold text-gray-950 mb-2">4 LPA</div>
                        <p className="text-gray-700 font-semibold">Average Salary</p>
                        <p className="text-sm text-gray-600 mt-2">
                            Fresher&apos;s starting salary
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 text-lg mb-6">
                        Join hundreds of successful students who have transformed their careers with our Tableau training
                    </p>
                    <button
                        onClick={() => setIsEnrollOpen(true)}
                        className="bg-[#431407] hover:bg-[#c2410c] text-white font-bold py-3 px-8 rounded-lg transition-all inline-block cursor-pointer"
                    >
                        Start Your Success Story →
                    </button>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Tableau Course Page - Testimonials Section - Enroll Now"
                courseName={courseName}
            />
        </section>
    );
}
