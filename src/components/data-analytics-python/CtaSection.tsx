"use client";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import EnrollModal from "../EnrollModal";
import CareerSessionModal from "../CareerSessionModal";

export default function CtaSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [isSessionOpen, setIsSessionOpen] = useState(false);
    const courseName = "Advanced Data Analytics with Python";

    return (
        <section className="py-10 bg-gradient-to-r from-slate-900 via-brand to-slate-900 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Main Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                        Ready to Transform Your <span className="text-orange-400">Data Career</span>?
                    </h2>

                    {/* Subheading */}
                    <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
                        Join 500+ successful graduates who have mastered Python data analytics and secured high-paying jobs at top companies. Start your journey today and become a market-ready data professional in just 20 hours.
                    </p>

                    {/* Key Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {[
                            {
                                icon: "⏱️",
                                title: "20 Hours",
                                description: "Intensive, focused training",
                            },
                            {
                                icon: "💼",
                                title: "100% Job Assistance",
                                description: "Placement support included",
                            },
                            {
                                icon: "🎓",
                                title: "Global Certification",
                                description: "Internationally recognized",
                            },
                        ].map((benefit, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 backdrop-blur-sm rounded-lg p-5 border border-white/20"
                            >
                                <div className="text-3xl mb-2">{benefit.icon}</div>
                                <p className="font-bold text-white mb-1">{benefit.title}</p>
                                <p className="text-sm text-slate-300">{benefit.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
                        <button
                            onClick={() => setIsEnrollOpen(true)}
                            className="cursor-pointer flex items-center bg-brand hover:bg-brand text-white font-semibold px-8 py-6 text-base rounded-lg shadow-lg hover:shadow-xl transition-all"
                        >
                            Enroll Now
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                        <button
                            onClick={() => setIsSessionOpen(true)}
                            className="cursor-pointer border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 text-base rounded-lg transition-all"
                        >
                            Schedule Free Demo
                        </button>
                    </div>

                    {/* Limited Time Offer */}
                    <div className="bg-orange-500/20 border-2 border-orange-400 rounded-lg p-6 mb-10">
                        <p className="text-orange-200 font-semibold mb-2">🎉 Limited Time Offer</p>
                        <p className="text-white text-lg font-bold">
                            Get <span className="text-orange-300">20% OFF</span> on enrollment this month!
                        </p>
                        <p className="text-slate-300 text-sm mt-2">
                            Plus, receive free career coaching and resume building session
                        </p>
                    </div>

                    {/* What's Included */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
                        <h3 className="text-2xl font-bold text-white mb-6">What&apos;s Included</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                            {[
                                "20 hours of intensive live training",
                                "7 comprehensive modules with hands-on projects",
                                "Real-time projects from industry domains",
                                "1:1 doubt-solving sessions",
                                "Lifetime access to recorded sessions",
                                "International certification from AAA",
                                "100% job placement assistance",
                                "Resume building and interview prep",
                                "Career coaching and mentoring",
                                "Access to alumni network",
                                "Free tools and resources",
                                "Lifetime email support",
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-200">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="mt-16 text-center border-t border-white/10 pt-8">
                    <p className="text-slate-300 mb-4">Have questions? Get in touch with us!</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white">
                        <Link href="tel:+917888383788" className="cursor-pointer flex items-center gap-2 hover:text-orange-400 transition-colors">
                            <span>📞</span> +91 788-83-83-788
                        </Link>
                        <div className="hidden sm:block w-px h-6 bg-white/20"></div>
                        <Link href="mailto:contact@cinutedigital.com" className="cursor-pointer flex items-center gap-2 hover:text-orange-400 transition-colors">
                            <span>✉️</span> contact@cinutedigital.com
                        </Link>
                    </div>
                </div>
            </div>

            {/* Modals */}
            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Data Analytics Python Course Page - CTA Section - Enroll Now"
                courseName={courseName}
            />
            <CareerSessionModal
                isOpen={isSessionOpen}
                onClose={() => setIsSessionOpen(false)}
                source="Data Analytics Python Course Page - CTA Section - Free Demo"
                courseName={courseName}
            />
        </section>
    );
}
