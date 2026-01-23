"use client";
import { useState } from "react";
import ReviewsMarquee from "../sections/ReviewMarque";
import EnrollModal from "../EnrollModal";

export default function TestimonialsSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const courseName = "Advanced Excel for Data Analytics & Visualization";

    return (
        <section className="relative py-10 bg-white overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        What Our <span className="bg-gradient-to-r from-[#ff8c00] via-[#ff8c00] to-[#ff8c00] bg-clip-text text-transparent">Students Say</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Join thousands of successful students who have transformed their careers with our training.
                    </p>
                </div>

                <ReviewsMarquee />

                {/* Stats section */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-12">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
                        <p className="text-slate-700 font-semibold">Students Trained</p>
                        <p className="text-sm text-slate-600">Across all programs</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-indigo-600 mb-2">4.8/5</div>
                        <p className="text-slate-700 font-semibold">Average Rating</p>
                        <p className="text-sm text-slate-600">Based on student reviews</p>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
                        <p className="text-slate-700 font-semibold">Placement Rate</p>
                        <p className="text-sm text-slate-600">Within 3 months</p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <button
                        onClick={() => setIsEnrollOpen(true)}
                        className="bg-brand hover:bg-brand text-white font-bold py-3 px-8 rounded-lg transition-all inline-block cursor-pointer"
                    >
                        Join Our Success Story
                    </button>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Data Analytics & Visualization Course Page - Testimonials Section - Join Success Story"
                courseName={courseName}
            />
        </section>
    );
}
