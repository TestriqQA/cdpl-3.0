"use client";
// components/powerbi/HeroSection.tsx
import React, { useState } from 'react';
import { Clock, CheckCircle, Award, Briefcase, ArrowRight, CloudDownload, ArrowDownNarrowWide, Star, Users, TrendingUp, Home, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import ApiCourseLeadForm from "../forms/ApiCourseLeadForm";
import dynamic from "next/dynamic";

const EnrollModal = dynamic(() => import("../EnrollModal"), { ssr: false });
const SyllabusDownloadModal = dynamic(() => import("../SyllabusDownloadModal"), { ssr: false });

// Interface for the key features under the main title
interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100">
        <div className="text-blue-600 mb-2">{icon}</div>
        <p className="text-sm font-semibold text-gray-700 text-center">{title}</p>
    </div>
);


const HeroSection: React.FC = () => {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);
    const courseName = "Data Analytics & Visualization with Power BI";

    const features = [
        { icon: <CheckCircle size={24} />, title: 'Real-World Projects' },
        { icon: <Users size={24} />, title: 'Expert Instructors' },
        { icon: <Award size={24} />, title: 'Global Certification' },
        { icon: <Briefcase size={24} />, title: '100% Job Assistance' },
    ];

    const stats = [
        { icon: <Star size={20} className="text-yellow-500" />, text: '4.8/5 Average Rating' },
        { icon: <Users size={20} className="text-blue-500" />, text: '500+ Successful Graduates' },
        { icon: <TrendingUp size={20} className="text-green-500" />, text: '14+ Years Industry Experience' },
    ];

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: 'BI Courses', href: '/courses/bi-courses' },
        { label: "Data Analytics & Visualization with Power BI" },
    ];

    return (
        <section className="bg-gray-50 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {breadcrumbs.map((c, i) => {
                            const isLast = i === breadcrumbs.length - 1;
                            return (
                                <li key={i} className="flex items-center gap-2">
                                    {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                    {c.href ? (
                                        <Link
                                            href={c.href}
                                            className={`hover:text-indigo-700 ${isLast ? 'font-semibold text-slate-900' : ''}`}
                                        >
                                            {c.label}
                                        </Link>
                                    ) : (
                                        <span
                                            className={`hover:text-indigo-700 ${isLast ? 'font-semibold text-slate-900' : ''}`}
                                        >
                                            {c.label}
                                        </span>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                    {/* Left Column: Course Details */}
                    <div className="md:col-span-7 lg:col-span-8">
                        <div className="mb-4">
                            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                                <Clock size={16} className="mr-2" />
                                Duration: 20 Hours Master Program
                            </span>
                        </div>

                        <h1 className="md:mt-0 max-w-3xl text-3xl md:text-4xl xl:text-5xl font-extrabold leading-snug md:leading-tight tracking-tight text-slate-900 break-words">
                            #1 <span className="text-blue-600">Power BI Course</span> in Mumbai & Thane with <span className="text-brand">100% Placement</span>
                        </h1>

                        <div className="md:hidden mt-6 mb-6 min-h-[500px]">
                            <ApiCourseLeadForm source="Power BI Course Page - Hero Section (Mobile)" />
                        </div>

                        <p className="mt-3 text-lg text-gray-600 mb-8 max-w-3xl">
                            Is Power BI worth learning? Yes! Master the world's most in-demand business intelligence tool. Learn <strong>how to create dashboards in Power BI</strong> from scratch, master DAX, and use <strong>Power BI Service</strong> to launch your career as a high-paid <strong>Power BI Developer</strong> in Mumbai.
                        </p>




                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-8 mb-12">
                            <button
                                onClick={() => setIsEnrollOpen(true)}
                                className="w-full sm:w-auto min-h-[60px] flex sm:inline-flex items-center justify-center px-6 py-5 my-2 text-base font-semibold text-white bg-brand rounded-xl shadow-none hover:bg-brand transition-all duration-300 cursor-pointer"
                            >
                                Enroll Now <ArrowRight size={20} className="ml-2" />
                            </button>
                            <button
                                onClick={() => setIsSyllabusOpen(true)}
                                className="w-full sm:w-auto min-h-[60px] flex sm:inline-flex items-center justify-center px-6 py-5 my-2 text-base font-semibold text-white bg-brand rounded-xl shadow-none hover:bg-brand transition-all duration-300 cursor-pointer"
                            >
                                Download Syllabus <CloudDownload size={20} className="ml-2" />
                            </button>
                            <Link
                                href="#curriculum"
                                className="flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl shadow-md hover:bg-gray-100 transition-all duration-300 cursor-pointer"
                            >
                                View Curriculum <ArrowDownNarrowWide size={20} className="ml-2" />
                            </Link>
                        </div>

                        {/* Feature Cards */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
                            {features.map((feature, index) => (
                                <FeatureCard key={index} icon={feature.icon} title={feature.title} />
                            ))}
                        </div>

                        {/* Mini Stats Bar */}
                        <div className="flex flex-wrap gap-6 border-t pt-6 border-gray-200">
                            {stats.map((stat, index) => (
                                <div key={index} className="flex items-center text-gray-600">
                                    {stat.icon}
                                    <span className="ml-2 font-medium">{stat.text}</span>
                                </div>
                            ))}
                        </div>
                        <br />
                        <p className="text-base text-gray-500 mb-10">
                            **Key Skills:** Power BI Desktop, Power BI Service, DAX Calculations, Power Query (M), Data Modeling, and Advanced Visualization, Report Publishing, and Collaboration.
                        </p>
                    </div>

                    {/* Right Column: Lead Form */}
                    <div className="hidden md:block md:col-span-5 lg:col-span-4 md:top-8 sticky min-h-[600px]">
                        <ApiCourseLeadForm source="Power BI Course Page - Hero Section (Desktop)" />
                    </div>

                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollOpen}
                onClose={() => setIsEnrollOpen(false)}
                source="Power BI Course Page - Hero Section - Enroll Now"
                courseName={courseName}
            />
            <SyllabusDownloadModal
                isOpen={isSyllabusOpen}
                onClose={() => setIsSyllabusOpen(false)}
                source="Power BI Course Page - Hero Section - Power BI - Download Syllabus"
                courseName={courseName}
            />
        </section>
    );
};

export default HeroSection;
