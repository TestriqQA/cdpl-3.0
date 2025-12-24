"use client";

import React, { useState } from "react";
import EnrollModal from "@/components/EnrollModal";

export default function CareerRoadmapSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const courseName = "AI Bootcamp Course";

    return (
        <section className="py-10 bg-white">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        8 Steps to Your{" "}
                        <span className="text-orange-600">Career Transformation</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        From joining the program to landing your dream job – here is the
                        step-by-step roadmap designed to take you from beginner to job-ready
                        digital marketing professional.
                    </p>
                </div>

                {/* Timeline Roadmap */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 bg-slate-200 transform md:-translate-x-1/2"></div>

                    {/* Step 1: Enrolment */}
                    <div className="relative flex flex-col md:flex-row items-center mb-12 md:mb-16 group">
                        {/* Content Left (Desktop) */}
                        <div className="md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0 mb-4 md:mb-0 w-full text-left order-2 md:order-1">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Enrolment & Orientation
                            </h3>
                            <p className="text-slate-600">
                                Secure your spot in the bootcamp and attend the orientation
                                session to meet your mentors and peers.
                            </p>
                        </div>
                        {/* Icon/Dot */}
                        <div className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full border-4 border-white bg-orange-600 shadow-md flex items-center justify-center transform md:-translate-x-1/2 z-10 order-1 md:order-2">
                            <span className="text-white font-bold">1</span>
                        </div>
                        {/* Empty Right (Desktop) */}
                        <div className="md:w-1/2 hidden md:block order-3"></div>
                    </div>

                    {/* Step 2: Foundation */}
                    <div className="relative flex flex-col md:flex-row items-center mb-12 md:mb-16 group">
                        <div className="md:w-1/2 hidden md:block"></div>
                        <div className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full border-4 border-white bg-orange-600 shadow-md flex items-center justify-center transform md:-translate-x-1/2 z-10">
                            <span className="text-white font-bold">2</span>
                        </div>
                        <div className="md:w-1/2 md:pl-12 pl-16 w-full text-left">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Foundation & Strategy
                            </h3>
                            <p className="text-slate-600">
                                Master the core concepts of digital marketing, consumer
                                psychology, and strategic planning.
                            </p>
                        </div>
                    </div>

                    {/* Step 3: Skill Building */}
                    <div className="relative flex flex-col md:flex-row items-center mb-12 md:mb-16 group">
                        <div className="md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0 mb-4 md:mb-0 w-full text-left order-2 md:order-1">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Advanced Skill Building
                            </h3>
                            <p className="text-slate-600">
                                Dive deep into SEO, Social Media, Paid Ads, and Email Marketing
                                with hands-on exercises.
                            </p>
                        </div>
                        <div className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full border-4 border-white bg-orange-600 shadow-md flex items-center justify-center transform md:-translate-x-1/2 z-10 order-1 md:order-2">
                            <span className="text-white font-bold">3</span>
                        </div>
                        <div className="md:w-1/2 hidden md:block order-3"></div>
                    </div>

                    {/* Step 4: AI Integration */}
                    <div className="relative flex flex-col md:flex-row items-center mb-12 md:mb-16 group">
                        <div className="md:w-1/2 hidden md:block"></div>
                        <div className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full border-4 border-white bg-blue-600 shadow-md flex items-center justify-center transform md:-translate-x-1/2 z-10">
                            <span className="text-white font-bold">4</span>
                        </div>
                        <div className="md:w-1/2 md:pl-12 pl-16 w-full text-left">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                AI Tools Mastery
                            </h3>
                            <p className="text-slate-600">
                                Integrate AI tools like ChatGPT and Canva into your workflow for
                                faster, smarter marketing.
                            </p>
                        </div>
                    </div>

                    {/* Step 5: Live Projects */}
                    <div className="relative flex flex-col md:flex-row items-center mb-12 md:mb-16 group">
                        <div className="md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0 mb-4 md:mb-0 w-full text-left order-2 md:order-1">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Live Projects & Portfolio
                            </h3>
                            <p className="text-slate-600">
                                Apply your skills on real client projects and build a portfolio
                                that proves your expertise.
                            </p>
                        </div>
                        <div className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full border-4 border-white bg-orange-600 shadow-md flex items-center justify-center transform md:-translate-x-1/2 z-10 order-1 md:order-2">
                            <span className="text-white font-bold">5</span>
                        </div>
                        <div className="md:w-1/2 hidden md:block order-3"></div>
                    </div>

                    {/* Step 6: Career Prep */}
                    <div className="relative flex flex-col md:flex-row items-center mb-12 md:mb-16 group">
                        <div className="md:w-1/2 hidden md:block"></div>
                        <div className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full border-4 border-white bg-orange-600 shadow-md flex items-center justify-center transform md:-translate-x-1/2 z-10">
                            <span className="text-white font-bold">6</span>
                        </div>
                        <div className="md:w-1/2 md:pl-12 pl-16 w-full text-left">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Career Prep & Branding
                            </h3>
                            <p className="text-slate-600">
                                Optimize your LinkedIn profile, build a resume, and prepare for
                                behavioral and technical interviews.
                            </p>
                        </div>
                    </div>

                    {/* Step 7: Interviews */}
                    <div className="relative flex flex-col md:flex-row items-center mb-12 md:mb-16 group">
                        <div className="md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0 mb-4 md:mb-0 w-full text-left order-2 md:order-1">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Unlock Job Opportunities
                            </h3>
                            <p className="text-slate-600">
                                Get connected with our hiring partners and start attending
                                interviews for relevant roles.
                            </p>
                        </div>
                        <div className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full border-4 border-white bg-green-600 shadow-md flex items-center justify-center transform md:-translate-x-1/2 z-10 order-1 md:order-2">
                            <span className="text-white font-bold">7</span>
                        </div>
                        <div className="md:w-1/2 hidden md:block order-3"></div>
                    </div>

                    {/* Step 8: Hired */}
                    <div className="relative flex flex-col md:flex-row items-center group">
                        <div className="md:w-1/2 hidden md:block"></div>
                        <div className="absolute left-0 md:left-1/2 w-12 h-12 rounded-full border-4 border-white bg-green-600 shadow-md flex items-center justify-center transform md:-translate-x-1/2 z-10">
                            <span className="text-white font-bold">8</span>
                        </div>
                        <div className="md:w-1/2 md:pl-12 pl-16 w-full text-left">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                Get Hired & Grow
                            </h3>
                            <p className="text-slate-600">
                                Land your job, start your career, and continue to grow with our
                                alumni network and support.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-20">
                    <button
                        onClick={() => setIsEnrollOpen(true)}
                        className="cursor-pointer inline-flex items-center justify-center px-8 py-4 rounded-full bg-slate-900 text-white font-bold text-lg hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
                    >
                        Start Your 8-Step Journey Today
                    </button>
                    <p className="mt-4 text-slate-500">
                        Join the next cohort and start your transformation.
                    </p>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="AI Bootcamp - Career Roadmap"
                courseName={courseName}
            />
        </section>
    );
}