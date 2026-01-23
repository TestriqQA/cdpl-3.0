"use client";


import Image from "next/image";
import type { Trainer } from "@/app/trainers/types";
import { Linkedin, Globe, Link } from "lucide-react";


function initials(name: string) {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
}


export default function TrainersCardSection({ t }: { t: Trainer }) {
    return (
        <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {/* Media / Image header */}
            <div className="relative aspect-[3/2] w-full">
                {t.avatar ? (
                    <Image
                        src={t.avatar}
                        alt={`${t.name} — ${t.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 600px"
                        priority={false}
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-orange-100">
                        <span className="text-3xl font-semibold text-brand">{initials(t.name)}</span>
                    </div>
                )}

                {/* Gradient + primary info overlay */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-4">
                    <div className="flex items-end gap-3">
                        <div className="min-w-0 text-white drop-shadow-sm">
                            <h3 className="truncate text-base font-semibold">{t.name}</h3>
                            <p className="truncate text-xs opacity-90">{t.title}</p>
                            {t.location && (
                                <p className="truncate text-[11px] opacity-80">{t.location}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="p-5">
                {/* Bio */}
                <p className="line-clamp-3 text-sm text-slate-700">{t.bio}</p>

                {/* Skills */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                    {t.skills.slice(0, 6).map((s) => (
                        <span
                            key={s}
                            className="inline-flex items-center rounded-full bg-orange-50 px-2 py-0.5 text-[11px] font-medium text-brand ring-1 ring-inset ring-orange-200"
                        >
                            {s}
                        </span>
                    ))}
                    {t.skills.length > 6 && (
                        <span className="inline-flex items-center rounded-full bg-slate-50 px-2 py-0.5 text-[11px] text-slate-600 ring-1 ring-slate-200">
                            +{t.skills.length - 6} more
                        </span>
                    )}
                </div>

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between">
                    <div className="text-xs text-slate-600">{t.yearsExp ?? "5"}+ yrs exp</div>
                    <div className="flex items-center gap-2">
                        {t.socials?.linkedin && (
                            <Link
                                href={t.socials.linkedin}
                                aria-label={`LinkedIn profile of ${t.name}`}
                                className="inline-flex items-center rounded-lg border border-slate-200 bg-white p-1.5 text-slate-800 hover:bg-slate-50"
                            >
                                <Linkedin className="h-4 w-4" />
                            </Link>
                        )}
                        {t.socials?.website && (
                            <Link
                                href={t.socials.website}
                                aria-label={`Website of ${t.name}`}
                                className="inline-flex items-center rounded-lg border border-slate-200 bg-white p-1.5 text-slate-800 hover:bg-slate-50"
                            >
                                <Globe className="h-4 w-4" />
                            </Link>
                        )}
                        <Link
                            href="/apply"
                            className="inline-flex items-center justify-center rounded-xl bg-brand px-3 py-1.5 text-xs font-semibold text-white hover:opacity-95"
                        >
                            Book a Demo
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}

