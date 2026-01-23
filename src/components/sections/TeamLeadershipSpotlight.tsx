// components/our-team/LeadershipSpotlight.tsx
import {
    Sparkles,
    ShieldCheck,
    Users2,
    GraduationCap,
    Linkedin,
    MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ⬇️ NEW: import the TeamLeaders type and the dataset
import type { TeamLeaders as TeamLeaderType } from "@/app/our-team/types";
import { teamLeaders } from "@/app/our-team/data";
import { ReactNode } from "react";

type TeamMember = {
    id: string;
    name: string;
    title: string;
    role: string;
    avatar?: string;
    linkedin?: string;
    email?: string;
    location?: string;
    bio?: string;
    expertise?: string[];
};

type Props = { data: TeamMember[] };

export default function LeadershipSpotlight({ }: Props) {
    // ⬇️ Source now comes from teamLeaders; filter to Leadership (keeps section semantics)
    const leaders = teamLeaders;

    return (
        <section
            id="leadership"
            aria-labelledby="leadership-heading"
            className="relative mx-auto max-w-7xl px-4 py-6 md:py-16 sm:px-6 lg:px-8"
        >
            {/* Subtle background gradient */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-orange-50/60 to-transparent opacity-60"
            />

            {/* Header Section */}
            <div className="mb-12 text-center">
                <div className="mb-6 flex flex-wrap items-center justify-center gap-3 md:gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm">
                        <Sparkles className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                        Future-Ready Leadership
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm">
                        <ShieldCheck className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                        ISO-Aligned Training
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm">
                        <GraduationCap className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
                        Mentor-Led Learning
                    </span>
                </div>

                <h2
                    id="leadership-heading"
                    className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl"
                >
                    Meet Our Leaders
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
                    Learn from industry veterans who architect{" "}
                    <strong className="text-slate-700">job-ready, mentor-led programs</strong> with{" "}
                    <strong className="text-slate-700">real-world projects</strong>,{" "}
                    <strong className="text-slate-700">placement support</strong>, and continuously updated,{" "}
                    <strong className="text-slate-700">ISO-aligned curriculum</strong>.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="mb-16 grid gap-4 sm:grid-cols-3">
                <StatCard
                    icon={<Users2 className="text-blue-800 w-10 h-10" />}
                    value={
                        <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                            5k+
                        </span>
                    }
                    label="Learners mentored"
                    description="Live cohorts & 1:1 guidance"
                />

                <StatCard
                    icon={<ShieldCheck className="text-emerald-800 w-10 h-10" />}
                    value={
                        <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                            50+
                        </span>
                    }
                    label="Hiring partner touchpoints"
                    description="Referrals & interview prep"
                />

                <StatCard
                    icon={<GraduationCap className="text-lime-800 w-10 h-10" />}
                    value={
                        <span className="text-lime-600">
                            94%
                        </span>
                    }
                    label="Capstone success rate"
                    description="Portfolio-first outcomes"
                />
            </div>
            {/* Leader Cards - Full Width (from teamLeaders) */}
            <div className="space-y-16">
                {leaders.map((leader, index) => (
                    <LeaderCard key={leader.id + "-" + index} leader={leader} index={index} />
                ))}
            </div>


        </section>
    );
}

// Stat Card Component
function StatCard({
    icon,
    value,
    label,
    description,
}: {
    icon: React.ReactNode;
    value: ReactNode;
    label: string;
    description: string;
}) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg">
            <div className="flex items-start gap-4">
                <div>
                    {icon}
                </div>
                <div className="flex-1">
                    <p className="text-3xl font-bold text-slate-900">{value}</p>
                    <p className="mt-1 font-semibold text-slate-800">{label}</p>
                </div>
            </div>
            <p className="mt-4 text-sm text-slate-600">{description}</p>

            {/* Decorative element */}
            <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-orange-500 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20" />
        </div>
    );
}

// Leader Card Component - Full Width with Futuristic Design
function LeaderCard({ leader, index }: { leader: TeamLeaderType; index: number }) {
    const isEven = index % 2 === 0;

    return (
        <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50/50 to-white shadow-lg backdrop-blur-sm transition-all duration-500 hover:border-orange-300/50 hover:shadow-2xl">
            {/* Decorative gradient overlay */}
            <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,140,0,0.05),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
            />

            <div
                className={`relative flex flex-col gap-5 p-5 lg:flex-row lg:items-center lg:gap-24 lg:p-12 ${isEven ? "" : "lg:flex-row-reverse"}`}
            >
                {/* Avatar Section with Futuristic Frame */}
                <div className="relative mx-auto shrink-0 lg:mx-0">
                    <div className="relative h-55 w-55 lg:h-90 lg:w-90 overflow-hidden rounded-full transition-all duration-500 group-hover:border-orange-300">
                        {leader.avatar ? (
                            <Image
                                src={leader.avatar}
                                alt={`${leader.name} - ${leader.title}`}
                                title={`${leader.name} - ${leader.title}`}
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                                loading="lazy"
                                sizes="(max-width: 1024px) 256px, 360px"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center text-7xl font-bold text-brand">
                                {leader.name.charAt(0)}
                            </div>
                        )}
                    </div>

                    {/* Floating gradient blob */}
                    <div
                        className={`absolute -z-10 top-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(255,140,0,1),transparent)] opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-30 ${isEven ? "-left-[30%]" : "-right-[30%]"}`}
                        aria-hidden="true"
                    />
                </div>

                {/* Content Section */}
                <div className="flex-1 space-y-6">
                    {/* Header */}
                    <div className="space-y-3">
                        <div className="flex mt-3 items-start justify-between gap-4">
                            <h3 className="text-3xl font-bold leading-tight text-slate-900 lg:text-4xl">
                                {leader.name}
                            </h3>
                        </div>

                        <div className="space-y-2">
                            <p className="text-lg font-semibold text-brand lg:text-xl">
                                {leader.title}
                            </p>

                            <div className="flex mt-5 flex-row items-center gap-3 text-gray-600">
                                <p className="bg-gray-100 px-3 py-1 rounded-full text-xs border border-[#ff8c00]">
                                    {leader.experience}
                                </p>
                                <p className="text-sm">{leader.specialization}</p>

                                {leader.location && (
                                    <p className="flex items-center gap-2 text-sm text-slate-600">
                                        <MapPin className="h-4 w-4 text-brand" />
                                        {leader.location}
                                    </p>
                                )}
                            </div>


                        </div>
                    </div>

                    {/* Bio */}
                    {leader.bio && (
                        <p className="text-base leading-relaxed text-slate-600 lg:text-lg">
                            {leader.bio}
                        </p>
                    )}

                    {/* Expertise Pills */}
                    {leader.expertise && leader.expertise.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {leader.expertise.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-sm font-medium text-slate-700 backdrop-blur-sm transition-all hover:border-orange-300 hover:bg-orange-50"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}

                    {leader.achievements.length > 0 && (
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-gray-900 mb-3">
                                Key Achievements
                            </h4>
                            <div className="space-y-2">
                                {leader.achievements.map((achievement, achIndex) => (
                                    <div key={achIndex} className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-brand rounded-full"></div>
                                        <span className="text-gray-700">{achievement}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                        {leader.linkedin && (
                            <Link
                                href={leader.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Connect with ${leader.name} on LinkedIn`}
                                className="flex items-center group rounded-xl border-2 p-2 border-slate-400 bg-white transition-all hover:border-orange-300 hover:bg-orange-50"
                            >
                                <Linkedin className="mr-2 h-4 w-4 text-brand" />
                                <p className="font-semibold text-brand ">Connect on LinkedIn</p>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Animated scan line effect */}
            <div
                className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 transition-all duration-1000 group-hover:scale-x-100 group-hover:opacity-100"
                aria-hidden="true"
            />
        </div>
    );
}
