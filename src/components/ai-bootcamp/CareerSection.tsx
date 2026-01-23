"use client";

import React, { ReactNode, useState } from 'react';
import { Briefcase, Users, TrendingUp, Award, ArrowRight } from 'lucide-react';
import EnrollModal from "@/components/EnrollModal";

interface CareerRole {
    title: string;
    description: string;
    icon: ReactNode;
}

const careerRoles: CareerRole[] = [
    {
        title: 'Digital Marketing Strategist',
        description: 'The architect of online success, designing comprehensive marketing strategies.',
        icon: <TrendingUp className="w-8 h-8" />,
    },
    {
        title: 'SEO Specialist',
        description: 'The master of organic traffic and search rankings.',
        icon: <Award className="w-8 h-8" />,
    },
    {
        title: 'PPC & Google Ads Specialist',
        description: 'The expert in maximizing ROI from paid media campaigns.',
        icon: <Briefcase className="w-8 h-8" />,
    },
    {
        title: 'Social Media Manager',
        description: 'The voice and engagement driver for brand communities.',
        icon: <Users className="w-8 h-8" />,
    },
    {
        title: 'Digital Analytics Manager',
        description: 'The data scientist of marketing, turning insights into action.',
        icon: <TrendingUp className="w-8 h-8" />,
    },
    {
        title: 'Content Marketing Manager',
        description: 'The storyteller who creates compelling brand narratives.',
        icon: <Award className="w-8 h-8" />,
    },
];

const hiringCompanies = [
    'Google',
    'Meta',
    'Amazon',
    'Deloitte',
    'KPMG',
    'Oracle',
    'Infosys',
    'Wipro',
    'TCS',
    'HCL',
    'Accenture',
    'Cognizant',
];

export default function CareerSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const courseName = "AI Bootcamp Course";

    return (
        <section className="py-10 bg-white">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-slate-900">
                        Your <span className="text-brand">Digital Marketing Career Path</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Unlock high-demand careers in{" "}
                        <strong>digital marketing, SEO, performance marketing, social media marketing,</strong> and{" "}
                        <strong>digital analytics</strong>. The skills you gain are directly mapped to
                        in-demand <strong>digital marketing jobs in India and abroad</strong>, including agency,
                        in-house, and freelance roles.
                    </p>
                    <p className="mt-3 text-sm md:text-base text-slate-500 max-w-3xl mx-auto">
                        This <strong>advanced digital marketing course</strong> helps you become job-ready for{" "}
                        <strong>search engine optimization (SEO), Google Ads, Meta Ads, content marketing, email
                            marketing,</strong> and marketing analytics roles across top brands and startups.
                    </p>
                </div>

                {/* Career Roles Grid – layout like the reference section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {careerRoles.map((role, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border-2 border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group"
                        >
                            {/* Icon */}
                            <div className="flex items-center justify-center mb-4">
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white shadow-sm group-hover:scale-110 transition-transform">
                                    <span className="text-orange-500">{role.icon}</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-slate-900 mb-2 text-center">
                                {role.title}
                            </h3>

                            {/* Description + SEO keywords */}
                            <p className="text-sm text-slate-600 leading-relaxed text-center">
                                {role.description} Work on{" "}
                                <strong>real-world digital campaigns, SEO projects, paid ads,</strong> and{" "}
                                <strong>social media strategy</strong> to build a portfolio that stands out to
                                hiring managers and recruiters.
                            </p>
                        </div>
                    ))}
                </div>

                {/* Career Growth Section – adapted for Digital Marketing */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white mb-12">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">
                        Career Growth & Opportunities in Digital Marketing
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <TrendingUp className="w-8 h-8" />,
                                title: "High-Growth Industry",
                                description:
                                    "Digital marketing roles in SEO, SEM, social media, and performance marketing are among the fastest-growing careers, with strong demand across startups, agencies, and MNCs.",
                            },
                            {
                                icon: <Briefcase className="w-8 h-8" />,
                                title: "Multiple Career Paths",
                                description:
                                    "Start as a Digital Marketing Executive and grow into roles like Digital Marketing Manager, Growth Marketer, Performance Marketer, or Marketing Automation Specialist.",
                            },
                            {
                                icon: <Users className="w-8 h-8" />,
                                title: "Global & Remote Opportunities",
                                description:
                                    "Work with global brands, international clients, and remote marketing teams. Build a career in freelancing, consulting, or agency leadership with strong digital skills.",
                            },
                        ].map((item, idx) => (
                            <div key={idx} className="text-center">
                                <div className="flex justify-center mb-4 text-orange-400">
                                    {item.icon}
                                </div>
                                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <p className="mt-6 text-sm md:text-base text-slate-300">
                        With the right <strong>digital marketing certification</strong>, you can accelerate your
                        growth into <strong>leadership roles</strong> and stand out in competitive job markets like
                        Mumbai, Bengaluru, Delhi NCR, Pune, and international hubs.
                    </p>
                </div>

                {/* Top Hiring Companies – layout like reference section but using your companies */}
                <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
                        Top Companies Hiring Digital Marketing Professionals
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 max-w-3xl mx-auto mb-8 text-center">
                        Our learners have the skills to apply for{" "}
                        <strong>digital marketing specialist, SEO expert, PPC analyst, performance marketer,</strong>{" "}
                        and <strong>social media manager</strong> roles at leading product companies, IT firms,
                        global agencies, and startups.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {hiringCompanies.map((company, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-lg p-3 lg:p-6 border border-orange-200 text-center hover:shadow-lg transition-shadow"
                            >
                                <p className="font-bold text-slate-900">{company}</p>
                                <p className="text-xs text-slate-600 mt-2">
                                    Actively investing in{" "}
                                    <strong>digital marketing & growth teams</strong>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <p className="text-slate-600 mb-4 md:mb-6 text-lg">
                        Our <strong>100% job assistance</strong> helps you build a winning resume, optimize your
                        LinkedIn profile, and prepare for{" "}
                        <strong>digital marketing interviews, SEO interviews, and performance marketing roles</strong>.
                    </p>
                    <p className="text-sm text-slate-500 mb-6 max-w-2xl mx-auto">
                        Enroll now to start your journey towards a{" "}
                        <strong>high-paying digital marketing career</strong> with hands-on projects, live campaigns,
                        and expert mentorship.
                    </p>
                    <button
                        onClick={() => setIsEnrollOpen(true)}
                        className="cursor-pointer inline-flex items-center justify-center px-8 py-3 rounded-full bg-brand text-white font-semibold text-base md:text-lg shadow-md hover:bg-brand transition-colors"
                    >
                        Start Your Digital Marketing Career Journey
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="AI Bootcamp - Career Section"
                courseName={courseName}
            />
        </section>
    );
}
