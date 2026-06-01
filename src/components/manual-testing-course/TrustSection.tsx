
import { LuUsers, LuStar, LuBuilding, LuBriefcase, LuAward, LuShieldCheck, LuClock, LuBookOpenCheck } from "react-icons/lu";
import React from "react";

/*
  ========================= TRUST / SOCIAL PROOF =========================
  - Light theme, sleek and slightly futuristic (subtle borders, soft shadow)
  - Fully responsive (2 → 4 → 6 columns)
  - Color accents without loud gradients
  - SEO-friendly copy + JSON‑LD for EducationalOrganization
  - Simple, accessible, and easy to drop into any page
*/

// Small, reusable stat card
function StatCard({
    icon: Icon,
    label,
    value,
    caption,
    accent = "indigo",
}: {
    icon: React.ElementType;
    label: string;
    value: string;
    caption?: string;
    accent?: "indigo" | "cyan" | "emerald" | "violet" | "rose" | "amber";
}) {
    const accents: Record<string, string> = {
        indigo:
            "text-indigo-700 bg-indigo-800 ring-indigo-100 group-hover:ring-indigo-200",
        cyan: "text-cyan-700 bg-cyan-800 ring-cyan-100 group-hover:ring-cyan-200",
        emerald:
            "text-emerald-700 bg-emerald-800 ring-emerald-100 group-hover:ring-emerald-200",
        violet:
            "text-violet-700 bg-violet-800 ring-violet-100 group-hover:ring-violet-200",
        rose: "text-rose-700 bg-rose-800 ring-rose-100 group-hover:ring-rose-200",
        amber: "text-amber-800 bg-amber-800 ring-amber-100 group-hover:ring-amber-200",
    };

    return (
        <div className="group relative overflow-hidden rounded-2xl border-2 border-gray-300 bg-slate-50 p-3 md:p-5 transition-shadow hover:shadow-lg focus-within:shadow-lg">
            <div className="gap-4">
                <div
                    className={`shrink-0 rounded-xl ring-1 w-fit p-2.5 ${accents[accent]} transition-all`}
                    aria-hidden
                >
                    <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="min-w-0 mt-3">
                    <div className="text-2xl font-semibold tracking-tight text-gray-900">
                        {value}
                    </div>
                    <div className="mt-0.5 text-sm font-medium text-gray-700">
                        {label}
                    </div>
                    {caption ? (
                        <p className="mt-1 text-xs text-gray-500 leading-5">{caption}</p>
                    ) : null}
                </div>
            </div>
        </div>
    );
}


export default function TrustSection() {


    return (
        <section
            className="relative bg-white/80 backdrop-blur-sm border-y border-gray-200"
            aria-label="Student outcomes, ratings, and hiring partners"
        >
            <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(75%_60%_at_50%_0%,black,transparent)]" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
                {/* Header copy with SEO keywords */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
                        Trusted Outcomes for <span className="text-blue-700">Career-Ready Learning</span>
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Outcome-based programs with <strong>placement assistance</strong>,
                        <strong> live projects</strong>, and <strong>industry certifications</strong>.
                        Learn <strong>Software Testing</strong>, <strong>Full Stack Development</strong>,
                        and <strong>Data Science</strong> with a <em>job‑ready curriculum</em> designed with
                        hiring managers.
                    </p>
                </div>

                {/* Stats grid */}
                <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
                    <StatCard
                        icon={LuUsers}
                        value="4.9/5"
                        label="Learner Rating"
                        caption="From 425+ verified reviews"
                        accent="indigo"
                    />
                    <StatCard
                        icon={LuBriefcase}
                        value="Live"
                        label="Mentor-Led Classes"
                        caption="Dedicated Career Services & referrals"
                        accent="emerald"
                    />
                    <StatCard
                        icon={LuStar}
                        value="4.8/5"
                        label="Average Rating"
                        caption="3,200+ verified learner reviews"
                        accent="amber"
                    />
                    <StatCard
                        icon={LuBuilding}
                        value="50+"
                        label="Hiring Companies"
                        caption="Top MNCs & high‑growth startups"
                        accent="violet"
                    />
                    <StatCard
                        icon={LuBookOpenCheck}
                        value="80+"
                        label="Live Projects"
                        caption="Real tools: Jira, Postman, Git, Selenium"
                        accent="cyan"
                    />
                    <StatCard
                        icon={LuAward}
                        value="ISO 9001:2015"
                        label="Quality Certified"
                        caption="Process‑driven training & assessments"
                        accent="rose"
                    />
                </div>

                {/* Trust badges / partner strip */}
                {/* <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                    <TrustBadge src="/logos/google.png" alt="Google Reviews" label="4.8 ★ Google Reviews" />
                    <TrustBadge src="/logos/nasscom.png" alt="NASSCOM" label="NASSCOM aligned" />
                    <TrustBadge src="/logos/iso.png" alt="ISO" label="ISO 9001:2015" />
                    <TrustBadge src="/logos/aws.png" alt="AWS" label="AWS Academy Content" />
                    <TrustBadge src="/logos/atlassian.png" alt="Atlassian" label="Jira for Agile" />
                    <TrustBadge src="/logos/microsoft.png" alt="Microsoft" label="MS Learn integrated" />
                </div> */}

                {/* Social proof blurb */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-gray-200 bg-white p-5">
                        <div className="flex items-center gap-2 text-gray-900">
                            <LuShieldCheck className="h-5 w-5 text-emerald-600" />
                            <p className="text-sm font-semibold">Job‑focused & outcome‑driven</p>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                            Master in‑demand skills through mentored labs, interview preparation,
                            and capstone evaluations mapped to <strong>real job roles</strong> like
                            QA Engineer, SDET, Automation Tester, and Full‑Stack Developer.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-white p-5">
                        <div className="flex items-center gap-2 text-gray-900">
                            <LuClock className="h-5 w-5 text-indigo-600" />
                            <p className="text-sm font-semibold">Flexible schedules & blended learning</p>
                        </div>
                        <p className="mt-2 text-sm text-gray-600">
                            Weekend & weekday cohorts, live online or classroom, with lifetime
                            access to updated content and doubt‑clearing support in our
                            learner community.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
