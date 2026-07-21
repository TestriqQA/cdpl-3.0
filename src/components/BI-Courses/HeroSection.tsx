'use client';

import React, { useState, useCallback } from 'react';
import {
    Play,
    Download,
    Sparkles,
    Award,
    Users,
    Star,
    Cpu,
    BarChart3,
    PieChart,
    CheckCircle2,
    Home,
    ChevronRight
} from 'lucide-react';

// Local components
import { EnrollPopup } from '@/components/EnrollForms';
import BrochureDownloadModal from '@/components/home/BrochureDownloadModal';
import YouTubeVideoModal from '@/components/home/YouTubeVideoModal';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const LeadForm = dynamic(() => import('./LeadForm'), {
    loading: () => <div className="w-full h-[450px] bg-slate-50 animate-pulse rounded-xl" />,
    ssr: false
});

/**
 * Redesigned desktop left content: sleek layered cards, micro-illustration,
 * testimonial, feature chips, and refined CTA layout. Preserves the handlers.
 *
 * Content updated for Business Intelligence Courses (SEO-optimized). Everything
 * else in the component is intentionally left unchanged.
 */
const DesktopHeroContent: React.FC<{ onOpenBrochure: () => void; onOpenVideo: () => void; onOpenEnroll: () => void }> = ({ onOpenBrochure, onOpenVideo }) => {

    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Courses', href: '/courses' },
        { label: 'Business Intelligence' },
    ];

    return (
        <div className="relative">

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
                                        title={c.label}
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

            {/* Decorative soft gradient blob */}
            <div aria-hidden className="absolute -left-24 -top-20 w-96 h-96 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-orange-200 to-yellow-100 pointer-events-none" />

            {/* Small badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-full px-3 py-1 text-sm font-medium text-slate-700 shadow-sm">
                <Sparkles className="h-4 w-4 text-amber-500" />
                <span>India's comprehensive Business Intelligence Training Institute</span>
            </div>

            {/* Headline + micro graphic */}
            <div className="mt-6 flex gap-8 items-start">
                <div className="max-w-5xl">
                    <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
                        Master <span className="text-brand">Business Intelligence</span> & Data Analytics - Turn data into actionable insights
                    </h1>

                    <p className="mt-4 text-base text-slate-600">
                        Industry-focused training in Business Intelligence with hands-on projects using SQL, Power BI, Tableau, Python (Pandas), and ETL workflows. Learn data modeling, KPI design, dashboarding, storytelling with data, and best practices for data governance. Build a BI portfolio and get placement support for BI Analyst, Data Analyst, and Analytics Engineer roles.
                    </p>

                    {/* Feature chips (clean minimal icons) */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-sm text-slate-700 shadow-sm">
                            <BarChart3 className="w-4 h-4 text-indigo-500" />
                            <span className="font-medium">Hands-on BI Projects</span>
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-sm text-slate-700 shadow-sm">
                            <Cpu className="w-4 h-4 text-amber-500" />
                            <span className="font-medium">Power BI, Tableau & SQL</span>
                        </div>

                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-sm text-slate-700 shadow-sm">
                            <PieChart className="w-4 h-4 text-emerald-500" />
                            <span className="font-medium">Data Visualization & Dashboards</span>
                        </div>
                    </div>

                    {/* CTA row — keeps original handlers intact */}
                    <div className="mt-6 flex items-center gap-3">
                        <button
                            onClick={onOpenBrochure}
                            className="inline-flex items-center gap-2 px-5 py-4 bg-brand text-white rounded-lg text-md font-semibold shadow hover:bg-brand hover:translate-y-[-1px] transition-all"
                        >
                            <Download className="h-4 w-4" />
                            Download Brochure
                        </button>

                        <button
                            onClick={onOpenVideo}
                            className="inline-flex items-center gap-2 px-5 py-4 bg-white border border-slate-300 text-slate-800 rounded-lg text-md font-semibold shadow-sm hover:bg-slate-50 transition"
                        >
                            <Play className="h-4 w-4" />
                            Watch CDPL
                        </button>
                    </div>

                    {/* Trust Indicators - 3 Cards */}
                    <div
                        className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4"
                    >
                        {/* Card 1 - Students Placed */}
                        <div className="flex flex-col lg:flex-row items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                                <Users className="h-5 w-5 text-white" />
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-xl font-bold text-slate-900">5,000+</div>
                                <div className="text-xs text-slate-600">Students Placed</div>
                            </div>
                        </div>

                        {/* Card 2 - Rating */}
                        <div className="flex flex-col lg:flex-row items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-500 to-brand rounded-lg flex items-center justify-center">
                                <Star className="h-5 w-5 text-white fill-white" />
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-xl font-bold text-slate-900">4.9/5</div>
                                <div className="text-xs text-slate-600">Student Rating</div>
                            </div>
                        </div>

                        {/* Card 3 - Experience */}
                        <div className="flex flex-col lg:flex-row items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <Award className="h-5 w-5 text-white" />
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-xl font-bold text-slate-900">Industry-Led</div>
                                <div className="text-xs text-slate-600">Expert Mentors</div>
                            </div>
                        </div>
                    </div>

                    {/* microcopy for SEO and trust */}
                    <p className="mt-3 text-sm text-slate-600 max-w-2xl">
                        CDPL’s Business Intelligence program covers Data Integration (ETL), SQL for analytics, Data Modeling, Dashboarding with Power BI and Tableau, Advanced Excel, Python for data manipulation, KPI design, storytelling with data, and governance best practices. The curriculum is tailored for beginners and working professionals aiming for BI Analyst, Data Analyst, and Analytics Engineer roles.
                    </p>
                </div>
            </div>
        </div>
    );
};

const MobileFeatureList: React.FC<{ onOpenBrochure: () => void; onOpenVideo: () => void }> = ({ onOpenBrochure, onOpenVideo }) => (
    <div className="mt-6 space-y-4">
        <div className="grid grid-cols-2 gap-3 text-sm text-slate-700">
            <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="font-semibold">425+ Verified Reviews</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="font-semibold">4.9/5 Student Rating</span>
            </div>
            <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                <span className="font-semibold">Industry-Led Training</span>
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="font-semibold">100% Live Interactive Classes</span>
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="font-semibold">90+ Real-World BI Projects</span>
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="font-semibold">Industry Certifications (Power BI, Tableau, SQL)</span>
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="font-semibold">Job Support</span>
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="font-semibold">Flexible Batches</span>
            </div>
            <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                <span className="font-semibold">Lifetime Access</span>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
            <button
                onClick={onOpenBrochure}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-brand text-white text-sm font-semibold rounded-lg w-full"
            >
                <Download className="h-4 w-4" />
                Download Brochure
            </button>

            <button
                onClick={onOpenVideo}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-white border border-slate-200 text-slate-800 rounded-lg w-full"
            >
                <Play className="h-4 w-4" />
                Watch CDPL
            </button>
        </div>
    </div>
);

export default function HeroSection(): React.JSX.Element {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const [isBrochureOpen, setIsBrochureOpen] = useState(false);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const videoUrl = 'https://www.youtube.com/watch?v=8kB2wESj1n8';

    const openBrochure = useCallback(() => setIsBrochureOpen(true), []);
    const openVideo = useCallback(() => setIsVideoOpen(true), []);
    const openEnrollPopup = useCallback(() => setIsEnrollOpen(true), []);

    // Mobile breadcrumbs (kept in sync with DesktopHeroContent)
    const breadcrumbs = [
        { label: 'Home', href: '/' },
        { label: 'Courses', href: '/courses' },
        { label: 'Business Intelligence' },
    ];

    return (
        <section className="relative bg-white py-10 overflow-hidden">
            <EnrollPopup isOpen={isEnrollOpen} onClose={() => setIsEnrollOpen(false)} onSubmit={() => { }} source="Business Intelligence Course Category Page - Hero Section - Enroll Now" />
            <BrochureDownloadModal isOpen={isBrochureOpen} onClose={() => setIsBrochureOpen(false)} source="Business Intelligence Course Category Page - Hero Section - Download Brochure" />
            <YouTubeVideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} videoUrl={videoUrl} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Mobile */}
                <div className="md:hidden">
                    {/* Breadcrumbs visible on mobile */}
                    <nav aria-label="Breadcrumb" className="mb-8 md:hidden">
                        <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                            {breadcrumbs.map((c, i) => {
                                const isLast = i === breadcrumbs.length - 1;
                                return (
                                    <li key={i} className="flex items-center gap-2">
                                        {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                                        {c.href ? (
                                            <Link
                                                href={c.href}
                                                title={c.label}
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

                    <div className="inline-flex items-center gap-2 bg-white border border-slate-100 rounded-full px-3 py-1 text-sm font-medium text-slate-700 shadow-sm mb-4">
                        <Sparkles className="h-4 w-4 text-amber-500" />
                        <span>India's comprehensive Business Intelligence Training Institute</span>
                    </div>

                    <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                        Master <span className="text-brand">Business Intelligence</span> & Data Analytics
                    </h2>

                    <p className="mt-3 text-base text-slate-600">
                        Become a certified Business Intelligence professional. Learn SQL, Power BI, Tableau, data modeling, dashboard design, and storytelling with data — build a portfolio of real BI projects with placement-ready skills.
                    </p>

                    {/* Form below heading on mobile */}
                    <div className="my-8">
                        <div className="bg-white p-5 rounded-xl shadow-lg border border-slate-100">
                            <LeadForm
                                title="Start Your Free Demo"
                                subtitle="Chat with an expert advisor"
                                showCourse={false}
                                source="Business Intelligence Course Category Page - Hero Section - Mobile Form"
                            />
                        </div>
                    </div>

                    <MobileFeatureList onOpenBrochure={openBrochure} onOpenVideo={openVideo} />
                </div>

                {/* Desktop */}
                <div className="hidden md:block">
                    <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12">
                        {/* Left content - 7 columns */}
                        <div className="md:col-span-7 lg:col-span-8 relative">
                            <div className="relative z-10">
                                <DesktopHeroContent onOpenBrochure={openBrochure} onOpenVideo={openVideo} onOpenEnroll={openEnrollPopup} />
                            </div>
                        </div>

                        {/* Right form - 5 columns */}
                        <div className="md:col-span-5 lg:col-span-4">
                            <div
                                className="sticky top-24"
                            >
                                <div className="mt-10 bg-white p-6 rounded-2xl shadow-2xl border border-slate-200">
                                    <LeadForm
                                        title="Start Your Free Demo"
                                        subtitle="Chat with an expert advisor & unlock a personalised learning plan"
                                        showCourse={false}
                                        source="Business Intelligence Course Category Page - Hero Section - Right Form"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
