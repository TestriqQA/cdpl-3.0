"use client";

import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { ArrowRight, Star, MapPin, Home, ChevronRight } from "lucide-react";

import CityCourseLeadFormSkeleton from "@/components/skeletons/CityCourseLeadFormSkeleton";

const EnrollModal = dynamic(() => import("@/components/EnrollModal"), { ssr: false });
const CityCourseLeadForm = dynamic(
    () => import("@/components/city-courses/CityCourseLeadForm"),
    {
        loading: () => <CityCourseLeadFormSkeleton />,
        ssr: false, // Defer to client-side to prioritize initial HTML for LCP (H1)
    }
);

import type { CourseData } from "@/types/courseData";
import Link from "next/link";

interface HeroSectionProps {
    data: CourseData;
}

/**
 * Dual-colour hero headings, following the course-family convention the rest of
 * the site already uses: software-testing pages highlight part of the heading in
 * ST blue, data-science / AI pages in DS purple. Both are defined in
 * tailwind.config.ts and used by ~90 components ("High-Paying <span
 * className='text-ST'>QA Careers</span> After Selenium Training" and the like).
 * City heroes were the exception — their H1 rendered in a single flat slate.
 *
 * ⚠️  Keyed by page slug, not by course family, and that is deliberate: this
 * component renders all 765 city pages, so keying on `courseName` would restyle
 * every software-testing and data-science city at once. Only the two pages
 * below were asked for. Adding another city is one line here.
 */
const HERO_ACCENTS: Record<string, { className: string; highlight: string }> = {
    "software-testing-course-in-mumbai": {
        className: "text-indigo-700",
        highlight: "Software Testing Course",
    },
    "data-science-course-in-mumbai": {
        className: "text-indigo-700",
        highlight: "Data Science Course",
    },
};

/**
 * Splits an H1 so `highlight` renders in the page's theme colour. Falls back to
 * the plain single-colour heading whenever the slug has no accent or the copy
 * has since been reworded and no longer contains the phrase — so an edit to the
 * title can never break the heading, it just loses the colour.
 */
function renderHeroTitle(slug: string | undefined, title: string): React.ReactNode {
    const accent = slug ? HERO_ACCENTS[slug.toLowerCase()] : undefined;
    if (!accent) return title;

    const at = title.indexOf(accent.highlight);
    if (at === -1) return title;

    return (
        <>
            {title.slice(0, at)}
            <span className={accent.className}>{accent.highlight}</span>
            {title.slice(at + accent.highlight.length)}
        </>
    );
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
    const { heroContent, location } = data;

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    const crumbs = useMemo(() => {
        if (data.breadcrumbs?.length) return data.breadcrumbs;
        return [
            { label: "Home", href: "/" },
            { label: "Courses", href: "/courses" },
            { label: data.courseName, href: `/courses/${data.slug}` },
            { label: location },
        ];
    }, [data.breadcrumbs, data.courseName, data.slug, location]);

    return (
        <section className="relative overflow-hidden bg-white">
            {/* Simplified background - removed blur effects for faster render */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-indigo-50" aria-hidden="true" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 md:pb-14 pb-8 md:pt-8 pt-4 sm:px-6 lg:px-8 lg:pb-20 lg:pt-10">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-6">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {crumbs.map((c, i) => (
                            <li key={i} className="flex items-center gap-2">
                                {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}

                                {c.href ? (
                                    <Link
                                        href={c.href}
                                        className={`hover:text-indigo-700 ${i === crumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}
                                        aria-current={i === crumbs.length - 1 ? "page" : undefined}
                                    >
                                        {c.label}
                                    </Link>
                                ) : (
                                    <span
                                        className={`${i === crumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}
                                        aria-current={i === crumbs.length - 1 ? "page" : undefined}
                                    >
                                        {c.label}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>

                <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
                    {/* LEFT: Heading + Form (mobile) + Description + Stats */}
                    <div className="md:col-span-7 lg:col-span-8">
                        {/* Location chip */}
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-slate-700 shadow-sm backdrop-blur">
                            <MapPin className="h-4 w-4 text-indigo-600" />
                            <span className="text-xs font-medium">
                                {location}, {data.state}
                            </span>
                        </div>

                        {/* BLG-089: inline fontFamily:system-ui removed — it
                            overrode the site's Inter font on all 765 city H1s. */}
                        <h1
                            className="text-4xl font-extrabold leading-12 tracking-tight text-slate-900 sm:text-5xl"
                        >
                            {renderHeroTitle(data.slug, heroContent.title)}
                        </h1>

                        {/* Mobile form uses reusable CityCourseLeadForm */}
                        <div className="md:hidden mt-6">
                            <CityCourseLeadForm
                                tracks={data.specializations}
                                courseName={data.courseName}
                                cityName={location}
                                source={`(${location} ${data.courseName}) - Hero Section - Mobile Form`}
                            />
                        </div>

                        <p className="mt-7 md:mt-3 text-lg font-semibold text-indigo-700">
                            {heroContent.subtitle}
                        </p>

                        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700">
                            {heroContent.description}
                        </p>

                        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
                            {heroContent.stats.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
                                >
                                    <p className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-2xl font-extrabold text-transparent">
                                        {stat.number}
                                    </p>
                                    <p className="mt-1 text-sm font-semibold text-slate-900">{stat.label}</p>
                                    <p className="mt-0.5 text-xs text-slate-600">{stat.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 space-y-2">
                            <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                                Certifications & Benefits
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {heroContent.certifications.map((cert, i) => (
                                    <span
                                        key={i}
                                        className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700"
                                    >
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA buttons */}
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="group inline-flex items-center justify-center cursor-pointer rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 font-semibold text-white shadow-md transition hover:shadow-lg"
                            >
                                Enroll Now
                                <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-0.5" />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT column form (desktop only) now reusable */}
                    <div className="hidden md:block md:col-span-5 lg:col-span-4 md:-mt-2 lg:-mt-10">
                        <CityCourseLeadForm
                            tracks={data.specializations}
                            className="mt-6"
                            courseName={data.courseName}
                            cityName={location}
                            source={`(${location} ${data.courseName}) - Hero Section - Desktop Form`}
                        />
                    </div>
                </div>

                {heroContent.landmarks?.length ? (
                    <div className="mt-14 border-t border-slate-200 pt-10">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-600">
                            Serving {location}
                        </p>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                            {heroContent.landmarks.map((lm, i) => (
                                <div
                                    key={i}
                                    className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-center text-sm text-slate-700 shadow-sm"
                                >
                                    {lm}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>

            {/* Popup now uses generic EnrollModal */}
            {isMounted && (
                <EnrollModal
                    isOpen={isPopupOpen}
                    onClose={() => setIsPopupOpen(false)}
                    courseName={data.courseName}
                    location={location}
                    source={`(${location} ${data.courseName}) - Hero Section - Enroll Now`}
                />
            )}
        </section>
    );
};

export default HeroSection;
