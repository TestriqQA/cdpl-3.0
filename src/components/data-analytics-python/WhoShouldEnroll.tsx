"use client";
import { CheckCircle, ArrowRight, Download } from "lucide-react";
import { useState } from "react";
import EnrollModal from "../EnrollModal";
import SyllabusDownloadModal from "../SyllabusDownloadModal";

interface AudienceSegment {
    title: string;
    description: string;
    icon: string;
    requirements: string[];
}

export default function WhoShouldEnroll() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

    const courseName = "Advanced Data Analytics with Python";

    const audiences: AudienceSegment[] = [
        {
            title: "Beginners with Basic Python",
            description: "If you have basic Python knowledge and want to dive into data analytics, this course is perfect for you.",
            icon: "🎯",
            requirements: [
                "Basic understanding of Python variables and loops",
                "Familiarity with fundamental programming concepts",
                "Willingness to learn and practice regularly",
            ],
        },
        {
            title: "Intermediate Users",
            description: "Enhance your analytics and visualization expertise with advanced Python libraries and techniques.",
            icon: "📈",
            requirements: [
                "Intermediate Python programming skills",
                "Basic understanding of data structures",
                "Experience with simple data manipulation",
            ],
        },
        {
            title: "Professionals Seeking Career Change",
            description: "Professionals from finance, healthcare, retail, technology, marketing, or research looking to transition into data analytics.",
            icon: "💼",
            requirements: [
                "Basic Python knowledge (recommended)",
                "Domain expertise in your industry",
                "Motivation to learn new technical skills",
            ],
        },
        {
            title: "Students & Graduates",
            description: "Recent graduates or students looking to build practical skills for job readiness in the data analytics field.",
            icon: "🎓",
            requirements: [
                "Basic Python knowledge or willingness to learn",
                "Strong analytical thinking",
                "Commitment to hands-on learning",
            ],
        },
    ];

    const prerequisites = [
        {
            category: "Essential",
            items: [
                "Basic Python knowledge (variables, loops, functions)",
                "Familiarity with data concepts (datasets, tables)",
                "Computer with Python installed",
            ],
        },
        {
            category: "Recommended",
            items: [
                "Basic statistics knowledge",
                "Experience with spreadsheets (Excel)",
                "Understanding of basic SQL",
            ],
        },
        {
            category: "Nice to Have",
            items: [
                "Previous experience with data analysis tools",
                "Familiarity with visualization concepts",
                "Experience with Jupyter Notebook",
            ],
        },
    ];

    return (
        <section className="py-10 bg-gradient-to-b from-white to-slate-50">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Who Should <span className="text-[#d04502]">Enroll</span>?
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        This course is designed for diverse learners. Whether you&apos;re a beginner or a professional seeking to advance your skills, we have the right program for you.
                    </p>
                </div>

                {/* Audience Segments */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {audiences.map((audience, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-xl p-8 border-2 border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="text-4xl mb-4">{audience.icon}</div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {audience.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-600 leading-relaxed mb-5">
                                {audience.description}
                            </p>

                            {/* Requirements */}
                            <div>
                                <p className="text-sm font-semibold text-slate-900 mb-3">
                                    What You Need:
                                </p>
                                <ul className="space-y-2">
                                    {audience.requirements.map((req, ridx) => (
                                        <li
                                            key={ridx}
                                            className="flex items-start gap-2 text-sm text-slate-600"
                                        >
                                            <CheckCircle className="w-4 h-4 text-[#d04502] flex-shrink-0 mt-0.5" />
                                            <span>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Prerequisites Section */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-8">Prerequisites & Requirements</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {prerequisites.map((prereq, idx) => (
                            <div key={idx}>
                                <h4 className="text-lg font-bold text-[#d04502] mb-4">
                                    {prereq.category}
                                </h4>
                                <ul className="space-y-3">
                                    {prereq.items.map((item, iidx) => (
                                        <li key={iidx} className="flex items-start gap-3">
                                            <span className="text-[#d04502] mt-1">✓</span>
                                            <span className="text-slate-200 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Success Factors */}
                <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200 mb-12">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Keys to Success</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Regular Practice",
                                description: "Dedicate time daily to hands-on coding and projects",
                            },
                            {
                                title: "Active Participation",
                                description: "Engage in doubt-solving sessions and ask questions",
                            },
                            {
                                title: "Project Focus",
                                description: "Complete all real-world projects to build your portfolio",
                            },
                            {
                                title: "Continuous Learning",
                                description: "Stay updated with latest tools and industry trends",
                            },
                        ].map((factor, idx) => (
                            <div key={idx} className="flex gap-4">
                                <div className="text-3xl flex-shrink-0">
                                    {idx === 0 ? "⏰" : idx === 1 ? "🤝" : idx === 2 ? "🎯" : "📚"}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">{factor.title}</h4>
                                    <p className="text-sm text-slate-600">{factor.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={() => setIsEnrollOpen(true)}
                        className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl bg-[#d04502] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-orange-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-orange-300"
                    >
                        Enroll Now
                        <ArrowRight className="h-5 w-5" />
                    </button>
                    <button
                        onClick={() => setIsSyllabusOpen(true)}
                        className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl border-2 border-orange-200 bg-white px-8 py-4 text-base font-semibold text-[#d04502] shadow-sm transition-all hover:border-orange-300 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-orange-200"
                    >
                        <Download className="h-5 w-5" />
                        Download Syllabus
                    </button>
                </div>
            </div>

            {/* Modals */}
            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Data Analytics Python Course Page - Who Should Enroll - Enroll Now"
                courseName={courseName}
            />
            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="Data Analytics Python Course Page - Who Should Enroll - Download Syllabus"
                courseName={courseName}
            />
        </section>
    );
}
