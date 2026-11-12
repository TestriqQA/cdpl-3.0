// components/our-team/LeadershipSpotlight.tsx
import {
    Sparkles,
    ShieldCheck,
    GraduationCap,
    Linkedin,
    MapPin,
    CircleCheck,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ⬇️ NEW: import the TeamLeaders type and the dataset
import type { TeamLeaders as TeamLeaderType } from "@/app/our-team/types";
import { teamLeaders } from "@/app/our-team/data";

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

            {/* Leader Cards - Full Width (from teamLeaders) */}
            <div className="space-y-6">
                {leaders.map((leader, index) => (
                    <LeaderCard key={leader.id + "-" + index} leader={leader} />
                ))}
            </div>


        </section>
    );
}

// Compact leader card: photo beside details, two-column achievements.
function LeaderCard({ leader }: { leader: TeamLeaderType }) {
    return (
        <article
            aria-label={`${leader.name}, ${leader.title}`}
            className="group relative isolate overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50/70 via-white to-white p-5 shadow-md transition-all duration-500 hover:border-orange-300 hover:shadow-lg sm:p-6 lg:p-8"
        >
            {/* Hover glow (as on the original leader cards) */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,140,0,0.05),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <div className="flex flex-col gap-6 md:flex-row md:items-start lg:gap-10">
                {/* Photo (circle cut-outs shown as is; avatarMask crops rectangular photos), LinkedIn below */}
                <div className="relative mx-auto flex shrink-0 flex-col items-center gap-3 md:mx-0">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-2 left-1/2 -z-10 h-48 w-48 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,140,0,1),transparent)] opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-15 lg:top-4"
                    />
                    <div className={`relative h-44 w-44 lg:h-56 lg:w-56 ${leader.avatarMask ? "overflow-hidden rounded-full shadow-md" : ""}`}>
                        {leader.avatar ? (
                            <Image
                                src={leader.avatar}
                                alt={`${leader.name} - ${leader.title}`}
                                title={`${leader.name} - ${leader.title}`}
                                fill
                                className={leader.avatarMask ? "object-cover" : "object-contain drop-shadow-md"}
                                sizes="(max-width: 1024px) 176px, 224px"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center text-6xl font-bold text-brand">
                                {leader.name.charAt(0)}
                            </div>
                        )}
                    </div>
                    {leader.linkedin && (
                        <Link
                            href={leader.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Connect with ${leader.name} on LinkedIn`}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-orange-300 bg-white px-3 py-1.5 text-sm font-semibold text-brand transition hover:bg-orange-50"
                        >
                            <Linkedin className="h-4 w-4" aria-hidden="true" />
                            LinkedIn
                        </Link>
                    )}
                </div>

                {/* Details */}
                <div className="min-w-0 flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold leading-tight text-slate-900 lg:text-3xl">{leader.name}</h3>
                    <p className="mt-1 font-semibold text-brand">{leader.title}</p>

                    <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-slate-600 md:justify-start">
                        <span className="rounded-full border border-orange-300 bg-white px-2.5 py-0.5 text-xs font-medium text-slate-700">
                            {leader.experience}
                        </span>
                        <span>{leader.specialization}</span>
                        {leader.location && (
                            <span className="inline-flex items-center gap-1">
                                <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
                                {leader.location}
                            </span>
                        )}
                    </div>

                    {leader.bio && <p className="mt-4 leading-relaxed text-slate-600">{leader.bio}</p>}

                    {leader.achievements.length > 0 && (
                        <ul className="mt-4 grid gap-x-6 gap-y-2 text-left text-sm text-slate-700 sm:grid-cols-2">
                            {leader.achievements.map((achievement, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                                    <span>{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="mt-5 flex flex-wrap items-center justify-center gap-2 md:justify-start">
                        {leader.expertise?.map((skill, i) => (
                            <span
                                key={i}
                                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            {/* Scan line along the top edge on hover */}
            <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-0 transition-all duration-1000 group-hover:scale-x-100 group-hover:opacity-60"
            />
        </article>
    );
}
