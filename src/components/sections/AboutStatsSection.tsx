// Server Component. The figures are plain text in the HTML (the old count-up
// rendered "0" until it scrolled into view, with the real value only in an
// sr-only copy).
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const STATS = [
    { value: "5K+", label: "Learners Trained", desc: "Upskilled in software testing, data science & AI/ML", strip: "bg-pink-600", text: "text-pink-600" },
    { value: "50+", label: "Hiring Partners", desc: "Product companies, startups & global tech leaders", strip: "bg-emerald-600", text: "text-emerald-600" },
    { value: "60+", label: "Mentors & SMEs", desc: "Industry experts, QA leads & data scientists", strip: "bg-violet-600", text: "text-violet-600" },
    { value: "100%", label: "Placement Support", desc: "Career guidance, mock interviews & referrals", strip: "bg-brand", text: "text-brand" },
];

const BADGES = ["Job-Oriented Curriculum", "Live Projects & Capstones", "Mentor-Led Learning"];

export default function AboutStatsSection() {
    return (
        <section aria-labelledby="about-stats-heading" className="bg-white py-12 lg:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    id="about-stats-heading"
                    pill="Outcomes that matter"
                    title={<>Career-focused results with <span className="text-brand">Cinute Digital</span></>}
                    intro={
                        <>
                            Real <strong>EdTech</strong> impact: <strong>industry-ready skills</strong>,{" "}
                            <strong>mentor-led learning</strong>, and <strong>placement assistance</strong> designed
                            for <strong>software testing</strong>, <strong>automation</strong>,{" "}
                            <strong>data science</strong>, and <strong>AI/ML</strong> careers.
                        </>
                    }
                />

                <ul className="mb-8 flex flex-wrap items-center justify-center gap-3">
                    {BADGES.map((b) => (
                        <li key={b} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                            {b}
                        </li>
                    ))}
                </ul>

                <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                    {STATS.map((s) => (
                        <div
                            key={s.label}
                            className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6"
                        >
                            <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1 ${s.strip}`} />
                            <p className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${s.text}`}>{s.value}</p>
                            <p className="mt-1 font-semibold text-slate-900">{s.label}</p>
                            <p className="mt-2 text-sm leading-5 text-slate-600">{s.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        href="/reviews"
                        className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                    >
                        Read Learner Reviews
                    </Link>
                    <Link
                        href="/jobs/placements"
                        className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm transition-colors duration-300 hover:border-brand hover:text-brand"
                    >
                        Explore Placements
                    </Link>
                </div>

                <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-slate-500">
                    Build <strong>job-ready skills</strong> with an <strong>industry-aligned edtech program</strong> in{" "}
                    <strong>software testing</strong>, <strong>automation</strong>,{" "}
                    <strong>data science</strong>, and <strong>AI/ML</strong>—with{" "}
                    <strong>mentorship</strong>, <strong>portfolio projects</strong>, and{" "}
                    <strong>placement assistance</strong>.
                </p>
            </div>
        </section>
    );
}
