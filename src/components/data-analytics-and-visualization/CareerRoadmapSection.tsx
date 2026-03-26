"use client";
import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import EnrollModal from "../EnrollModal";

const learningPath = [
    {
        step: 1,
        title: "You Enquired",
        description: "Start your journey with us",
    },
    {
        step: 2,
        title: "You Enroll",
        description: "Get enrolled in the program",
    },
    {
        step: 3,
        title: "Extensive Training",
        description: "Learn Excel tools & technologies",
    },
    {
        step: 4,
        title: "Projects & Assignments",
        description: "Work on real-world projects",
    },
    {
        step: 5,
        title: "Job Readiness",
        description: "Interview prep and resume building",
    },
    {
        step: 6,
        title: "Market-Ready Excel Expert",
        description: "Become a proficient data analyst",
    },
];


export default function CareerRoadmapSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const courseName = "Advanced Excel for Data Analytics & Visualization";

    return (
        <section className="relative py-10 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Your Learning <span className="bg-gradient-to-r from-[#ff8c00] via-[#ff8c00] to-[#ff8c00] bg-clip-text text-transparent">Journey</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Follow our proven 6-step learning path to become a market-ready Excel expert and secure your dream job.
                    </p>
                </div>

                {/* Learning path timeline */}
                <div className="max-w-4xl mx-auto">
                    {/* Desktop view - vertical timeline */}
                    <div className="hidden md:block">
                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1d4ed8] to-[#4338ca] transform -translate-x-1/2"></div>

                            {/* Timeline items */}
                            <div className="space-y-12">
                                {learningPath.map((item, index) => (
                                    <div key={index} className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                                        {/* Content */}
                                        <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                                            <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${index % 2 === 0 ? "bg-blue-100 text-blue-600" : "bg-indigo-100 text-indigo-600"}`}>
                                                        Step {item.step}
                                                    </span>
                                                </div>
                                                <h3 className="text-xl font-bold text-slate-900 mb-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-slate-600">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Center dot */}
                                        <div className="w-0 flex justify-center">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1d4ed8] to-[#4338ca] border-4 border-white flex items-center justify-center text-white font-bold shadow-lg">
                                                {item.step}
                                            </div>
                                        </div>

                                        {/* Empty space */}
                                        <div className="w-1/2"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Mobile view - vertical cards */}
                    <div className="md:hidden space-y-4">
                        {learningPath.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#1d4ed8] to-[#4338ca] text-white flex items-center justify-center font-bold">
                                        {item.step}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detailed breakdown section */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* What happens at each stage */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">
                            What Happens at Each Stage
                        </h3>
                        <div className="space-y-4">
                            {[
                                {
                                    stage: "Enquiry",
                                    details: "Connect with our counselors to understand your goals and course fit",
                                },
                                {
                                    stage: "Enrollment",
                                    details: "Complete registration and get access to learning materials",
                                },
                                {
                                    stage: "Training",
                                    details: "Learn from experts with hands-on projects and real datasets",
                                },
                                {
                                    stage: "Projects",
                                    details: "Build portfolio with 3 real-world projects across domains",
                                },
                                {
                                    stage: "Readiness",
                                    details: "Interview prep, resume building, and mock interviews",
                                },
                                {
                                    stage: "Placement",
                                    details: "Get placed in top companies with competitive salaries",
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold text-slate-900">{item.stage}</p>
                                        <p className="text-sm text-slate-600">{item.details}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline benefits */}
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200 p-8">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">
                            Why This Approach Works
                        </h3>
                        <div className="space-y-4">
                            {[
                                {
                                    benefit: "Structured Learning",
                                    description: "Follow a proven path that takes you from beginner to expert",
                                },
                                {
                                    benefit: "Continuous Support",
                                    description: "Get guidance at every step from enrollment to placement",
                                },
                                {
                                    benefit: "Practical Experience",
                                    description: "Work on real projects that you can showcase to employers",
                                },
                                {
                                    benefit: "Career Acceleration",
                                    description: "Fast-track your career with industry-recognized certification",
                                },
                                {
                                    benefit: "Job Guarantee",
                                    description: "100% job assistance ensures you land the right opportunity",
                                },
                                {
                                    benefit: "Lifetime Support",
                                    description: "Access to resources and alumni network even after completion",
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold text-slate-900">{item.benefit}</p>
                                        <p className="text-sm text-slate-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Success metrics */}
                <div className="mt-16 bg-white rounded-2xl border border-slate-200 p-12">
                    <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center">
                        Success Metrics of Our Learning Path
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { metric: "95%", label: "Completion Rate", description: "Students who complete all modules" },
                            { metric: "4.8/5", label: "Student Rating", description: "Average course satisfaction score" },
                            { metric: "3 Months", label: "Avg Placement", description: "Time to secure first job" },
                            { metric: "4+ LPA", label: "Avg Salary", description: "Starting salary for freshers" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="text-center p-6 rounded-xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="text-4xl font-bold text-blue-600 mb-2">
                                    {item.metric}
                                </div>
                                <p className="font-semibold text-slate-900 mb-2">{item.label}</p>
                                <p className="text-sm text-slate-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA */}
                <div className="mt-16 text-center">
                    <p className="text-lg text-slate-700 mb-6">
                        Ready to start your transformation journey?
                    </p>
                    <button
                        onClick={() => setIsEnrollOpen(true)}
                        className="
    inline-flex items-center justify-center
    w-full sm:w-auto
    px-4 py-3 sm:px-6 sm:py-3 md:px-10 md:py-4
    text-sm sm:text-base md:text-lg
    bg-gradient-to-r from-[#1d4ed8] to-[#4338ca]
    hover:from-[#1e40af] hover:to-[#3730a3]
    text-white font-semibold
    rounded-lg
    text-center
    shadow-lg hover:shadow-xl
    transition-all duration-300
    cursor-pointer
  "
                    >
                        Begin Your Learning Path Now
                    </button>

                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Data Analytics & Visualization Course Page - Career Roadmap Section - Enroll Now"
                courseName={courseName}
            />
        </section>
    );
}
