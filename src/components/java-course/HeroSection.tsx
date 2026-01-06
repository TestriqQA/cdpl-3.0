// components/java-course/HeroSection.tsx
'use client';
import {
    Code2,
    Users,
    Award,
    Briefcase,
    ArrowRight,
    Star,
    Globe2,
    CheckCircle2,
    Cpu,
    Home,
    ChevronRight,
    CloudDownload,
    ArrowDownNarrowWide,
} from "lucide-react";
import { motion } from "framer-motion";
import IconCard from "@/components/ui/IconCard";
import LeadForm from "../forms/ApiCourseLeadForm";
import Link from "next/link";
import { useState } from "react";
import EnrollModal from "@/components/EnrollModal";
import SyllabusDownloadModal from "@/components/SyllabusDownloadModal";

const features = [
    {
        icon: <Code2 />,
        title: "80% Hands-On",
        description: "Real Java labs & reviews",
        bg: "bg-emerald-50",
        iconColor: "text-emerald-700",
        border: "border-emerald-200",
    },
    {
        icon: <Users />,
        title: "Expert Faculty",
        description: "10+ yrs industry mentors",
        bg: "bg-indigo-50",
        iconColor: "text-indigo-700",
        border: "border-indigo-200",
    },
    {
        icon: <Award />,
        title: "Global Certificate",
        description: "QR-verified completion",
        bg: "bg-amber-50",
        iconColor: "text-amber-700",
        border: "border-amber-200",
    },
    {
        icon: <Briefcase />,
        title: "100% Placement",
        description: "Resume + mock interviews",
        bg: "bg-rose-50",
        iconColor: "text-rose-700",
        border: "border-rose-200",
    },
];

export default function HeroSection() {
    const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
    const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Courses", href: "/courses" },
        { label: "Java Master Program" },
    ];

    return (
        <section id="hero" aria-labelledby="java-hero" className="relative overflow-hidden">
            {/* Subtle background frame */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 [background-image:radial-gradient(circle_at_18%_8%,rgba(13,148,136,0.08),transparent_40%),radial-gradient(circle_at_82%_10%,rgba(37,99,235,0.07),transparent_35%),linear-gradient(180deg,#fafafa,white)]" />
                <div className="absolute inset-0 [mask-image:radial-gradient(1200px_600px_at_50%_-10%,black,transparent)]" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
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

                <div className="grid items-start gap-10 md:grid-cols-12">
                    {/* Left column */}
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="md:col-span-7 lg:col-span-8"
                    >
                        {/* Top identity strip */}
                        <div className="mb-5 hidden lg:flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-900">
                                <Star className="h-4 w-4 fill-current text-amber-500" />
                                4.9/5 Rated
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-800">
                                <Globe2 className="h-4 w-4" />
                                Live Online & Classroom
                            </span>
                            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800">
                                <Cpu className="h-4 w-4" />
                                Project-Based
                            </span>
                        </div>

                        {/* H1 */}
                        <h1
                            id="java-hero"
                            className="mt-3 md:mt-0 text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
                        >
                            Master Program in <span className="text-indigo-600">Java Programming</span>
                        </h1>

                        {/* Mobile form */}
                        <div className="mt-6 block md:hidden">
                            <LeadForm variant="elevated" source="Java Course Page - Hero Section" />
                        </div>

                        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
                            Master <strong>Core Java</strong>, <strong>Spring Boot</strong>, <strong>Microservices</strong>,{' '}
                            <strong>Hibernate</strong>, and <strong>AWS Cloud</strong>. Build{' '}
                            <strong>enterprise-grade applications</strong>, earn a <strong>QR-verified certificate</strong>,
                            and get <strong>100% placement assistance</strong>.
                        </p>
                        <p className="mt-3 max-w-3xl text-sm text-slate-600">
                            Topics include OOP, Collections, Multithreading, REST APIs, SQL, Docker, Kubernetes, and
                            system design fundamentals.
                        </p>

                        {/* CTAs */}
                        <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
                            <button
                                onClick={() => setIsEnrollModalOpen(true)}
                                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                aria-label="Enroll now in Java program"
                            >
                                Enroll Now
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </button>

                            <button
                                onClick={() => setIsSyllabusModalOpen(true)}
                                className="cursor-pointer group inline-flex items-center justify-center rounded-xl border border-indigo-600 bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
                                aria-label="Download Java Syllabus"
                            >
                                Download Syllabus
                                <CloudDownload className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </button>

                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    const el = document.getElementById('curriculum');
                                    if (el) {
                                        window.scrollTo({ top: el.offsetTop - 150, behavior: 'smooth' });
                                    }
                                }}
                                className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-sky-300 bg-white px-6 py-3 text-base font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50 focus:outline-none focus:ring-4 focus:ring-sky-200"
                                aria-label="View full Java curriculum"
                            >
                                View Curriculum
                                <ArrowDownNarrowWide className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                            </button>
                        </div>

                        {/* Highlights */}
                        <ul className="mt-7 grid max-w-3xl grid-cols-1 gap-3 text-sm text-slate-700 sm:grid-cols-2">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                                80% practical labs with code reviews
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-sky-600" />
                                Spring Boot & Microservices focus
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-rose-600" />
                                Interview prep & system design
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-600" />
                                QR-verified certificate + placement
                            </li>
                        </ul>

                        {/* Desktop feature grid */}
                        <div className="mt-6 hidden lg:grid lg:grid-cols-4 gap-3">
                            {features.map((f, i) => (
                                <IconCard
                                    key={i}
                                    {...f}
                                    className="hover:shadow-md p-4 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300"
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Right column: Desktop form */}
                    <motion.aside
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
                        className="hidden md:col-span-5 lg:col-span-4 md:block"
                    >
                        <LeadForm variant="elevated" source="Java Course Page - Hero Section" />
                    </motion.aside>
                </div>

                {/* Social proof */}
                <div className="mt-8 text-center">
                    <div className="mx-auto inline-flex items-center gap-2">
                        <div aria-hidden className="text-yellow-500 text-xl">★★★★★</div>
                        <span className="text-[13px] font-semibold text-amber-900">
                            #1 Mumbai’s Premium Training Institute
                        </span>
                    </div>
                </div>
            </div>

            <EnrollModal
                isOpen={isEnrollModalOpen}
                onClose={() => setIsEnrollModalOpen(false)}
                courseName="Java Programming"
                source="Java Course Page - Hero Section - Enroll Now"
            />

            <SyllabusDownloadModal
                isOpen={isSyllabusModalOpen}
                onClose={() => setIsSyllabusModalOpen(false)}
                courseName="Java Programming"
                source="Java Course Page - Hero Section - Java - Download Syllabus"
            />

        </section>
    );
}
