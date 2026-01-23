// =============================
// components/our-team/TestimonialsBand.tsx
// =============================
"use client";

import Image from "next/image";
import { motion, type Transition } from "framer-motion";
import { Quote, Star, CheckCircle2, Link } from "lucide-react";

type Testimonial = {
    name: string;
    role: string;
    company: string;
    avatar: string;
    quote: string;
    course: string;
    outcomes: string[];
    rating: number; // 1..5
    location?: string;
};

const BRAND = "#ff8c00";
const easeBezier: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.55, ease: easeBezier } as Transition,
};

const testimonials: Testimonial[] = [
    {
        name: "Aarav Sharma",
        role: "QA Engineer",
        company: "FinPay Systems",
        avatar: "/images/avatars/aarav.webp",
        course: "Automation Testing with Selenium & Playwright",
        rating: 5,
        outcomes: ["Portfolio with 5 live test suites", "2 offers in 6 weeks", "132% salary jump"],
        quote:
            "Cinute Digital transformed my manual testing background into a job-ready automation profile. The mentor feedback, CI/CD pipelines, and Git best practices gave me confidence in real interviews.",
        location: "Bengaluru",
    },
    {
        name: "Meera Iyer",
        role: "API Test Analyst",
        company: "HealthCore",
        avatar: "/images/avatars/meera.webp",
        course: "API Testing with Postman & REST Assured",
        rating: 5,
        outcomes: ["Postman collections + Newman reports", "Hired via partner referral", "Real-world defect triage"],
        quote:
            "The API labs were incredibly practical—auth flows, schema validation, and load tests. I showcased clean documentation and dashboards that hiring managers loved.",
        location: "Pune",
    },
    {
        name: "Rohit Verma",
        role: "SDET",
        company: "NeoRetail",
        avatar: "/images/avatars/rohit.webp",
        course: "SDET Career Track (JS + Playwright + Docker)",
        rating: 5,
        outcomes: ["Containerized test environments", "End-to-end coverage", "Interview bootcamp"],
        quote:
            "From test strategy to observability, the SDET track mirrored on-the-job expectations. Capstones and mock interviews made my transition smooth and fast.",
        location: "Gurugram",
    },
    {
        name: "Aisha Khan",
        role: "Junior QA",
        company: "CloudSpire",
        avatar: "/images/avatars/aisha.webp",
        course: "Manual to Automation Bridge Program",
        rating: 4.8,
        outcomes: ["Jira + Agile ceremonies", "Defect analytics", "Offer in 5 weeks"],
        quote:
            "Career services were outstanding—ATS-friendly resume, portfolio reviews, and targeted interview prep. I felt supported end-to-end.",
        location: "Hyderabad",
    },
];

const avgRating =
    testimonials.reduce((s, t) => s + t.rating, 0) / Math.max(testimonials.length, 1);

export default function TeamTestimonialsSection() {
    return (
        <section
            aria-labelledby="testimonials-heading"
            className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
        >
            {/* JSON-LD for rich results (AggregateRating + Reviews) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOrganization",
                        name: "Cinute Digital",
                        url: "https://cinutedigital.com",
                        aggregateRating: {
                            "@type": "AggregateRating",
                            ratingValue: avgRating.toFixed(1),
                            reviewCount: testimonials.length,
                        },
                        review: testimonials.map((t) => ({
                            "@type": "Review",
                            reviewBody: t.quote,
                            reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: "5" },
                            author: { "@type": "Person", name: t.name },
                            itemReviewed: { "@type": "Course", name: t.course },
                        })),
                    }),
                }}
            />

            <div
                className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
                style={{
                    boxShadow:
                        "0 8px 30px -10px rgba(15,23,42,0.10), inset 0 0 0 1px rgba(2,6,23,0.02)",
                }}
            >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-2">
                        <Quote className="h-5 w-5 text-slate-800" aria-hidden />
                        <h2
                            id="testimonials-heading"
                            className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
                        >
                            Learner Stories & Career Outcomes
                        </h2>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                        <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < Math.round(avgRating) ? "fill-yellow-400 text-yellow-400" : "text-slate-300"
                                        }`}
                                    aria-hidden
                                />
                            ))}
                        </div>
                        <span className="text-slate-600">
                            {avgRating.toFixed(1)} / 5 · {testimonials.length} reviews
                        </span>
                    </div>
                </div>

                {/* SEO tags */}
                <p className="mt-3 text-sm text-slate-600">
                    Real outcomes from job-ready training: hands-on projects,{" "}
                    <span className="font-medium">industry-recognized certification</span>, portfolio-first
                    learning, and mentor-led interview preparation for{" "}
                    <span className="font-medium">high-growth tech careers</span>.
                </p>

                <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((t) => (
                        <motion.figure
                            key={t.name}
                            {...fadeUp}
                            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                        >
                            {/* Glow border on hover */}
                            <div
                                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                style={{
                                    background:
                                        "radial-gradient(600px 120px at 50% -40px, rgba(255,140,0,0.12), transparent 60%)",
                                }}
                                aria-hidden
                            />

                            <div className="flex items-center gap-3">
                                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-slate-100">
                                    <Image
                                        src={t.avatar}
                                        alt={`${t.name} avatar`}
                                        fill
                                        sizes="40px"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <figcaption className="truncate text-sm font-semibold text-slate-900">
                                        {t.name}
                                    </figcaption>
                                    <p className="truncate text-xs text-slate-600">
                                        {t.role} · {t.company}
                                        {t.location ? ` · ${t.location}` : ""}
                                    </p>
                                </div>
                            </div>

                            <blockquote className="mt-3 text-[15px] leading-relaxed text-slate-700">
                                &quot;{t.quote}&quot;
                            </blockquote>

                            <div className="mt-4 flex flex-wrap gap-1.5">
                                {/* Course tag */}
                                <span
                                    className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700"
                                    aria-label={`Course: ${t.course}`}
                                >
                                    {t.course}
                                </span>

                                {/* Outcome chips */}
                                {t.outcomes.map((o) => (
                                    <span
                                        key={o}
                                        className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-0.5 text-[11px] font-medium text-brand ring-1 ring-inset ring-orange-200"
                                    >
                                        <CheckCircle2 className="h-3.5 w-3.5" aria-hidden />
                                        {o}
                                    </span>
                                ))}
                            </div>

                            {/* Rating row */}
                            <div className="mt-3 flex items-center gap-1" aria-label={`Rating ${t.rating} of 5`}>
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < Math.round(t.rating) ? "fill-yellow-400 text-yellow-400" : "text-slate-300"
                                            }`}
                                        aria-hidden
                                    />
                                ))}
                                <span className="ml-1 text-xs text-slate-500">{t.rating.toFixed(1)}</span>
                            </div>

                            {/* Accent line */}
                            <div
                                className="mt-5 h-px w-full"
                                style={{
                                    background:
                                        "linear-gradient(90deg, rgba(2,6,23,0), rgba(255,140,0,0.35), rgba(2,6,23,0))",
                                }}
                                aria-hidden
                            />

                            {/* Slight gradient badge in the corner */}
                            <div
                                className="pointer-events-none absolute -right-1.5 -top-1.5 h-16 w-16 rounded-bl-2xl"
                                style={{
                                    background: `conic-gradient(from 180deg at 100% 0%, ${BRAND}22, transparent 60%)`,
                                    maskImage:
                                        "radial-gradient(56px 56px at 100% 0%, rgba(0,0,0,0.9), transparent 68%)",
                                }}
                                aria-hidden
                            />
                        </motion.figure>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <p className="text-sm text-slate-600">
                        Explore how learners build <span className="font-medium">job-ready skills</span> through
                        live projects, structured mentorship, and{" "}
                        <span className="font-medium">career services</span>.
                    </p>
                    <Link
                        href="/success-stories"
                        className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:shadow"
                        style={{ boxShadow: "0 8px 20px -10px rgba(255,140,0,0.35)" }}
                    >
                        Read more success stories
                    </Link>
                </div>
            </div>
        </section>
    );
}
