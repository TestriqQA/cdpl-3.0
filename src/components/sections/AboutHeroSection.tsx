"use client";

import { useState } from "react";
import { motion, type Transition } from "framer-motion";
import Image from "next/image";
import { Sparkles, Star, ShieldCheck, ArrowRight, Check, Home, ChevronRight } from "lucide-react";
import Link from "next/link";
import AdvisorModal from "@/components/ui/AdvisorModal";

const gradientText =
    "bg-clip-text text-transparent bg-[linear-gradient(90deg,#0ea5e9,#2563eb,#22c55e)]";

const easeBezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, ease: easeBezier } as Transition,
};

const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About CDPL", href: "/about-us" },
]


export default function AboutHeroSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section
            aria-labelledby="about-heading"
            className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 isolate overflow-hidden"
            /* ✅ Fade edges so inner whites don't show on both sides */
            style={{
                WebkitMaskImage:
                    "linear-gradient(90deg, transparent 0, black 24px, black calc(100% - 24px), transparent 100%)",
                maskImage:
                    "linear-gradient(90deg, transparent 0, black 24px, black calc(100% - 24px), transparent 100%)",
            }}
        >
            {/* Background aura – constrained to container width */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div
                    className="mx-auto -mt-24 h-56 w-full max-w-7xl rounded-[999px] blur-3xl sm:h-64"
                    style={{
                        background:
                            "radial-gradient(50% 50% at 50% 50%, rgba(14,165,233,0.10) 0%, rgba(34,197,94,0.10) 50%, rgba(37,99,235,0.10) 100%)",
                    }}
                />
            </div>

            {/* Breadcrumbs for SEO & UX */}
            <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
                    {breadcrumbs.map((c, i) => (
                        <li key={i} className="flex items-center gap-2">
                            {i === 0 ? <Home className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                            <Link
                                href={c.href}
                                className={`hover:text-indigo-700 ${i === breadcrumbs.length - 1 ? "font-semibold text-slate-900" : ""}`}
                            >
                                {c.label}
                            </Link>
                        </li>
                    ))}
                </ol>
            </nav>

            <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-2">
                {/* LEFT — first on all viewports */}
                <div className="order-1 lg:order-1">
                    <motion.div {...fadeUp}>
                        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-[11px] font-medium text-slate-700 shadow-sm backdrop-blur dark:border-slate-200/60 dark:bg-white/85 sm:text-xs">
                            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                            Future-Ready EdTech
                        </span>
                    </motion.div>

                    <motion.h1
                        id="about-heading"
                        {...fadeUp}
                        transition={{ ...(fadeUp.transition as Transition), delay: 0.06 }}
                        className={`mt-4 py-1 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl ${gradientText}`}
                    >
                        About <span className="text-[#ea580c]">Cinute Digital</span>
                    </motion.h1>

                    <p
                        className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-700 sm:text-base md:text-lg"
                        style={{ fontSizeAdjust: '0.5' }}
                    >
                        Cinute Digital is a premier <strong>EdTech institute</strong> delivering{" "}
                        <strong>industry-ready training</strong> in <strong>Software Testing</strong>,{" "}
                        <strong>Automation</strong>, <strong>Data Science</strong>, and <strong>AI/ML</strong>. Learn
                        with <strong>live projects</strong>, <strong>expert mentorship</strong>, and{" "}
                        <strong>career &amp; placement support</strong> designed to help you land
                        <strong> high-growth tech jobs</strong>. Our <strong>job-oriented courses</strong> blend hands-on
                        labs, interview prep, and real business case studies—built to boost your{" "}
                        <strong>skills, employability, and salary growth</strong>.
                    </p>

                    <motion.ul
                        {...fadeUp}
                        transition={{ ...(fadeUp.transition as Transition), delay: 0.18 }}
                        className="mt-5 grid gap-2.5 text-sm text-slate-700 sm:text-base"
                    >
                        {[
                            "Live, mentor-led classes with capstones & real client scenarios",
                            "Interview preparation, mock tests, and portfolio-first approach",
                            "Updated curriculum aligned to industry tools & certifications",
                        ].map((t, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <Check className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true" />
                                <span>{t}</span>
                            </li>
                        ))}
                    </motion.ul>

                    <motion.div
                        {...fadeUp}
                        transition={{ ...(fadeUp.transition as Transition), delay: 0.24 }}
                        className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
                    >
                        <Link
                            href='courses'
                            className="inline-flex w-full items-center justify-center rounded-2xl bg-[#c2410c] px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 sm:w-auto"
                        >
                            Explore Courses <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Link>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 dark:border-slate-200/70 dark:bg-white/90 sm:w-auto cursor-pointer"
                        >
                            Talk to an Advisor
                        </button>
                    </motion.div>

                    <motion.div
                        {...fadeUp}
                        transition={{ ...(fadeUp.transition as Transition), delay: 0.3 }}
                        className="mt-7 flex flex-wrap items-center gap-3 text-sm"
                    >
                        <div className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white/85 px-3 py-2 shadow-sm dark:border-slate-200/60 dark:bg-white/85">
                            <Star className="h-4 w-4 text-[#b45309]" aria-hidden="true" />
                            <span className="font-semibold text-[#b45309]">4.8/5</span>
                            <span className="text-slate-500">&nbsp;avg learner rating</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white/85 px-3 py-2 text-slate-800 shadow-sm dark:border-slate-200/60 dark:bg-white/85">
                            <ShieldCheck className="h-4 w-4 text-purple-700" aria-hidden="true" />
                            <span className="font-semibold text-purple-700">Placement Assistance</span>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT — second on mobile; right column on lg+ */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.985 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.55, ease: easeBezier }}
                    className="order-2 lg:order-2 relative top-0 mt-6 lg:mt-8 h-56 w-full overflow-hidden rounded-3xl bg-white/92 ring-1 ring-slate-200 shadow-[0_20px_45px_-20px_rgba(2,6,23,0.25)] backdrop-blur sm:h-64 md:h-80 lg:h-[22rem] dark:bg-white/92"
                    role="img"
                    aria-label="Students collaborating with mentors on live software testing and data science projects"
                >
                    {/* Use fill + object-contain for perfect scaling on any viewport */}
                    <Image
                        src="/images/cdpl-logo.png"
                        alt="Cinute Digital learners collaborating on live tech projects"
                        title="Cinute Digital learners collaborating on live tech projects"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-contain"
                        priority
                    />
                </motion.div>
            </div>

            {/* Logos */}
            <motion.div
                {...fadeUp}
                transition={{ ...(fadeUp.transition as Transition), delay: 0.36 }}
                className="mt-10"
            >
                <p className="text-[11px] uppercase tracking-wider text-slate-500 sm:text-xs">
                    Trusted by learners & teams from
                </p>

                <div className="mt-3 grid grid-cols-2 items-center gap-3 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
                    {[
                        "/images/Testriq-Logo-1.webp",
                        "/company_images/axiom.webp",
                        "/company_images/credility.webp",
                        "/company_images/marqetrix.webp",
                        "/company_images/raw_engineering.webp",
                        "/company_images/vistaar.webp",
                    ].map((src, i) => (
                        <div key={i} className="relative mt-1 h-7 w-full grayscale hover:grayscale-0 transition-all duration-300 sm:h-8 md:h-9 lg:h-10">
                            <Image src={src} alt="Brand logo" title="Brand logo" fill sizes="(max-width: 768px) 33vw, 16vw" className="object-contain" />
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Organization schema is in layout.tsx - no need to duplicate here */}
            <span className="sr-only">
                Cinute Digital — industry-ready courses, live projects, mentorship, and career support.
            </span>

            <AdvisorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
