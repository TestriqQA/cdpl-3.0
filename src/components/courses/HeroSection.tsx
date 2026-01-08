"use client";
import Link from "next/link";
import { Award, Users, Star, Home, ChevronRight } from "lucide-react";
import { useState } from "react";
import EnrollModal from "@/components/EnrollModal";
import dynamic from 'next/dynamic';

// Dynamically import the desktop form to save bundle size on mobile
const DesktopLeadForm = dynamic(() => import('./DesktopLeadForm'), {
    loading: () => <div className="w-full h-[500px] bg-white/50 backdrop-blur-sm rounded-2xl animate-pulse" />,
    ssr: false
});

export default function HeroSection() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);

    const breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Courses" },
    ];

    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
                <EnrollModal
                    isOpen={isEnrollOpen}
                    onClose={() => setIsEnrollOpen(false)}
                    source="Courses page Hero section - Enroll Now"
                    courseName="All Courses"
                />

                {/* Background effects */}
                <div className="pointer-events-none absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.08),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.06),transparent_50%)]" />
                </div>
                <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 animate-pulse rounded-full bg-gradient-to-tr from-violet-400/20 to-purple-400/20 blur-3xl" style={{ animationDelay: '2s' }} />

                <div className="mx-auto max-w-7xl px-4 md:px-8 py-10 relative z-10">

                    {/* Breadcrumbs */}
                    <nav aria-label="Breadcrumb" className="mb-6">
                        <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                            {breadcrumbs.map((c, i) => {
                                const isLast = i === breadcrumbs.length - 1;
                                return (
                                    <li key={i} className="flex items-center gap-2 transition-colors hover:text-indigo-600">
                                        {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-3.5 w-3.5 text-slate-400" />}
                                        {c.href ? (
                                            <Link
                                                href={c.href}
                                                className={`hover:text-indigo-700 transition-colors ${isLast ? "font-semibold text-slate-900" : ""}`}
                                            >
                                                {c.label}
                                            </Link>
                                        ) : (
                                            <span
                                                className={`hover:text-indigo-700 transition-colors ${isLast ? "font-semibold text-slate-900" : ""}`}
                                            >
                                                {c.label}
                                            </span>
                                        )}
                                    </li>
                                );
                            })}
                        </ol>
                    </nav>

                    <div className="grid items-start md:gap-5 md:grid-cols-12">
                        {/* LEFT: Content */}
                        <div className="md:col-span-7 lg:col-span-8">
                            <div className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/60 text-blue-700 rounded-full text-[13px] font-semibold mb-6 shadow-sm shadow-blue-100/50 transition-all hover:shadow-md hover:shadow-blue-100 hover:scale-105">
                                <Award className="w-4 h-4 mr-2 animate-pulse" />
                                Industry-Leading Tech Education Platform
                            </div>

                            <h1 className="mt-3 md:mt-0 text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-6">
                                Master In-Demand Tech Skills<br />
                                <span className="relative inline-block mt-2">
                                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent animate-gradient">
                                        Launch Your Career
                                    </span>
                                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] rounded-full" />
                                </span>
                            </h1>

                            {/* Mobile Form: Keeping simple HTML form to avoid bundle bloat */}
                            <div className="sticky md:hidden top-6 mt-10 rounded-3xl border border-slate-200/60 bg-white/95 backdrop-blur-xl p-7 md:p-8 shadow-2xl shadow-slate-900/10 transition-all hover:shadow-slate-900/15">
                                <div className="absolute top-px left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 rounded-t-3xl" />
                                <h3 className="mb-2 text-xl text-slate-900 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text">Request a Callback</h3>
                                <p className="mb-7 text-sm text-slate-600 leading-relaxed">
                                    Enter your details to get the full curriculum, fees, and upcoming batch dates.
                                </p>

                                <form className="space-y-5" action="#" method="post">
                                    <div className="group">
                                        <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-slate-700">Full Name</label>
                                        <input
                                            id="fullName"
                                            name="name"
                                            type="text"
                                            placeholder="e.g., Priya Sharma"
                                            className="block w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 group-hover:border-slate-300"
                                            aria-label="Full Name"
                                        />
                                    </div>

                                    <div className="group">
                                        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">Email</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="name@example.com"
                                            className="block w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 group-hover:border-slate-300"
                                            aria-label="Email"
                                        />
                                    </div>

                                    <div className="group">
                                        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">Phone Number</label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="+91 98XXXXXXXX"
                                            className="block w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-all focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 group-hover:border-slate-300"
                                            aria-label="Phone Number"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="group mt-3 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] px-6 py-4 text-base font-bold text-white shadow-lg shadow-indigo-600/30 transition-all hover:shadow-xl hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        Get Course Details
                                        <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                    </button>

                                    <p className="pt-3 text-xs leading-relaxed text-slate-500 text-center">
                                        🔒 By submitting, you agree to our terms. We&apos;ll never share your data.
                                    </p>
                                </form>
                            </div>

                            <p className="text-lg text-slate-600 max-w-3xl mb-6 leading-relaxed font-medium">
                                Learn from industry experts through hands-on courses in software testing, data science, web development, and digital marketing. Get job-ready with real-world projects and certifications.
                            </p>

                            <p className="text-base text-slate-600 max-w-3xl mb-6 leading-relaxed">
                                Build practical, portfolio-ready skills across{" "}
                                <strong className="text-slate-800 font-semibold">automation testing</strong>, <strong className="text-slate-800 font-semibold">QA engineering</strong>,{" "}
                                <strong className="text-slate-800 font-semibold">full-stack web development</strong>, <strong className="text-slate-800 font-semibold">Python</strong>,{" "}
                                <strong className="text-slate-800 font-semibold">JavaScript</strong>, <strong className="text-slate-800 font-semibold">React</strong>, <strong className="text-slate-800 font-semibold">Node.js</strong>,{" "}
                                <strong className="text-slate-800 font-semibold">data analytics</strong>, and <strong className="text-slate-800 font-semibold">digital marketing strategy</strong>.
                                Our mentor-led training focuses on <strong className="text-slate-800 font-semibold">job placement</strong>,{" "}
                                <strong className="text-slate-800 font-semibold">interview preparation</strong>, and <strong className="text-slate-800 font-semibold">industry certifications</strong> so
                                you can confidently break into tech or accelerate your career.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-10">
                                <button
                                    onClick={() => setIsEnrollOpen(true)}
                                    className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#ff8c00] to-[#ff6b00] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition-all hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105 hover:-translate-y-0.5"
                                    aria-label="Enroll Now"
                                >
                                    Enroll Now
                                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </button>

                                <Link
                                    href="contact-us"
                                    className="group inline-flex items-center justify-center rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 px-7 py-3.5 text-base font-semibold text-emerald-700 shadow-md shadow-emerald-200/50 transition-all hover:border-emerald-300 hover:shadow-lg hover:from-emerald-100 hover:to-teal-100"
                                    aria-label="Free Demo"
                                >
                                    Free Demo
                                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>

                            <ul className="list-none grid gap-4 sm:grid-cols-2 text-slate-700 max-w-3xl mb-10">
                                <li className="flex items-start gap-3 group">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-sm shadow-blue-500/50 group-hover:scale-125 transition-transform" />
                                    <span className="text-base leading-relaxed">Hands-on projects, capstones & portfolio building for real hiring impact</span>
                                </li>
                                <li className="flex items-start gap-3 group">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-sm shadow-emerald-500/50 group-hover:scale-125 transition-transform" />
                                    <span className="text-base leading-relaxed">Tools you&apos;ll use at work: Selenium, Cypress, Playwright, GitHub, Jenkins</span>
                                </li>
                                <li className="flex items-start gap-3 group">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 shadow-sm shadow-amber-500/50 group-hover:scale-125 transition-transform" />
                                    <span className="text-base leading-relaxed">Career services: mock interviews, resume reviews, LinkedIn optimization</span>
                                </li>
                                <li className="flex items-start gap-3 group">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-violet-500 to-violet-600 shadow-sm shadow-violet-500/50 group-hover:scale-125 transition-transform" />
                                    <span className="text-base leading-relaxed">Flexible learning: live online classes, recordings, and classroom options</span>
                                </li>
                            </ul>

                            <div className="flex flex-col w-fit sm:flex-row gap-6 items-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/60 shadow-sm">
                                <div className="flex items-center gap-3 text-slate-700">
                                    <div className="p-2.5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                                        <Users className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl text-slate-900">25,000+</div>
                                        <div className="text-sm text-slate-600">Students Enrolled</div>
                                    </div>
                                </div>
                                <div className="hidden sm:block w-px h-12 bg-slate-200" />
                                <div className="flex items-center gap-3 text-slate-700">
                                    <div className="p-2.5 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl">
                                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl text-slate-900">4.8/5</div>
                                        <div className="text-sm text-slate-600">Average Rating</div>
                                    </div>
                                </div>
                                <div className="hidden sm:block w-px h-12 bg-slate-200" />
                                <div className="flex items-center gap-3 text-slate-700">
                                    <div className="p-2.5 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                                        <Award className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-xl text-slate-900">Industry</div>
                                        <div className="text-sm text-slate-600">Certifications</div>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-8 text-xs text-slate-400 max-w-3xl leading-relaxed">
                                Keywords: software testing course, SDET training, automation testing with Selenium & Cypress, web development course with React & Node.js, data science and analytics, job-oriented IT training, placement assistance, live online classes.
                            </p>
                        </div>

                        {/* RIGHT: Desktop Form (Dynamically Loaded) */}
                        <div className="hidden md:block md:col-span-5 lg:col-span-4 mt-8 md:mt-0">
                            <DesktopLeadForm />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}