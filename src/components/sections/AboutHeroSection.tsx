"use client";

import { useState } from "react";
import Image from "next/image";
import {
    Sparkles,
    Star,
    ShieldCheck,
    ArrowRight,
    Check,
    Home,
    ChevronRight,
} from "lucide-react";
import Link from "next/link";
import AdvisorModal from "@/components/ui/AdvisorModal";
import { SiteStat } from "@/components/stats/SiteStatsProvider";

const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About CDPL", href: "/about-us" },
];

const HIGHLIGHTS = [
    "Live, mentor-led classes with capstones & real client scenarios",
    "Interview preparation, mock tests, and portfolio-first approach",
    "Updated curriculum aligned to industry tools & certifications",
];

const PARTNER_LOGOS = [
    { src: "/images/Testriq-Logo-1.webp", name: "Testriq" },
    { src: "/company_images/axiom.webp", name: "Axiom" },
    { src: "/company_images/credility.webp", name: "Credility" },
    { src: "/company_images/marqetrix.webp", name: "Marqetrix" },
    { src: "/company_images/raw_engineering.webp", name: "Raw Engineering" },
    { src: "/company_images/vistaar.webp", name: "Vistaar" },
];

export default function AboutHeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section aria-labelledby="about-heading" className="relative isolate overflow-hidden">
            {/* Background glows — full-bleed, so they are not boxed by the 7xl
                content container. The page background shows through the rest. */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -left-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-sky-200/40 blur-3xl" />
                <div className="absolute -right-24 top-0 h-[32rem] w-[32rem] rounded-full bg-brand-200/40 blur-3xl" />
            </div>

            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                {/* Breadcrumbs for SEO & UX */}
                <nav aria-label="Breadcrumb" className="mb-6">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                        {breadcrumbs.map((c, i) => {
                            const isLast = i === breadcrumbs.length - 1;
                            return (
                                <li key={c.href} className="flex items-center gap-2">
                                    {i === 0 ? <Home className="h-4 w-4" aria-hidden="true" /> : <ChevronRight className="h-4 w-4" aria-hidden="true" />}
                                    <Link
                                        href={c.href}
                                        aria-current={isLast ? "page" : undefined}
                                        className={`transition-colors hover:text-brand ${isLast ? "font-semibold text-slate-900" : ""}`}
                                    >
                                        {c.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ol>
                </nav>

                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                    {/* LEFT — copy */}
                    <div className="lg:col-span-7">
                        <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-brand">
                            <Sparkles className="h-4 w-4" aria-hidden="true" />
                            Future-Ready EdTech
                        </span>

                        <h1
                            id="about-heading"
                            className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl"
                        >
                            <span className="text-slate-900">About</span> <span className="text-brand">Cinute Digital</span>
                        </h1>

                        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
                            Cinute Digital is a premier EdTech institute delivering{" "}
                            <strong className="text-slate-800">industry-ready training</strong> in Software Testing,
                            Automation, Data Science, and AI/ML. Learn with live projects, expert mentorship, and{" "}
                            <strong className="text-slate-800">career &amp; placement support</strong> designed to help
                            you land high-growth tech jobs. Our job-oriented courses blend hands-on labs, interview prep,
                            and real business case studies, built to boost your skills, employability, and salary growth.
                        </p>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                            <Link
                                href="/courses"
                                className="inline-flex w-full items-center justify-center rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 sm:w-auto"
                            >
                                Explore Courses <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                            </Link>
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex w-full cursor-pointer items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm transition-colors duration-300 hover:border-brand hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 sm:w-auto"
                            >
                                Talk to an Advisor
                            </button>
                        </div>

                        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-600">
                            <span className="inline-flex items-center gap-1.5">
                                <Star className="h-4 w-4 fill-amber-400 stroke-amber-400" aria-hidden="true" />
                                <span className="font-semibold text-slate-800"><SiteStat k="rating" /></span> avg learner rating
                            </span>
                            <span aria-hidden="true" className="hidden text-slate-300 sm:inline">|</span>
                            <span className="inline-flex items-center gap-1.5">
                                <ShieldCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                                <span className="font-semibold text-slate-800">Placement Assistance</span>
                            </span>
                        </div>

                        <ul className="mt-7 grid gap-3 border-t border-slate-200/70 pt-6 text-[15px] text-slate-700 sm:text-base">
                            {HIGHLIGHTS.map((t) => (
                                <li key={t} className="flex items-start gap-3">
                                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
                                        <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                                    </span>
                                    <span>{t}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT — logo on a soft glow. Lifted 48px from lg: the grid centres
                        it on the whole left column, tick list included, which sat it
                        visibly low against the heading and copy. */}
                    <div className="flex justify-center lg:col-span-5 lg:justify-end lg:-translate-y-12">
                        <div className="relative w-full max-w-[16rem] p-6 sm:max-w-[20rem] lg:max-w-[24rem]">
                            <div aria-hidden="true" className="absolute inset-6 rounded-full bg-brand/20 blur-2xl" />
                            <Image
                                src="/images/cdpl-logo.png"
                                alt="Cinute Digital (CDPL) logo"
                                title="Cinute Digital (CDPL)"
                                width={495}
                                height={498}
                                sizes="(max-width: 640px) 208px, (max-width: 1024px) 272px, 336px"
                                className="relative h-auto w-full drop-shadow-xl"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Partner logos */}
                <div className="mt-12">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Trusted by learners &amp; teams from
                    </p>

                    <ul className="mt-4 grid grid-cols-2 items-center gap-x-6 gap-y-5 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-6">
                        {PARTNER_LOGOS.map(({ src, name }) => (
                            <li key={src} className="relative h-8 w-full opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-9 lg:h-10">
                                <Image src={src} alt={`${name} logo`} title={name} fill sizes="(max-width: 768px) 33vw, 16vw" className="object-contain" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Organization schema is in layout.tsx - no need to duplicate here */}
            <span className="sr-only">
                Cinute Digital — industry-ready courses, live projects, mentorship, and career support.
            </span>

            <AdvisorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
