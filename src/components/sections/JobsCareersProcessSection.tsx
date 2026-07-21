"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { JSX } from "react";

/**
 * JobsCareersProcessSection — No gradients
 * - Solid colors only (badges, titles, icons, lines).
 * - Smooth dotted path through steps 1→5.
 * - TS ref type fixed by widening hook param to HTMLElement | null.
 */

type Step = { title: string; desc: string; icon: JSX.Element };

// Per-step solid accents
const ACCENTS = ["#ff8c00", "#0ea5e9", "#7c3aed", "#10b981", "#f43f5e"];

// ---------- Path utilities ----------
function makeSmoothPath(points: { x: number; y: number }[]) {
    if (points.length < 2) return "";
    const d: string[] = [];
    d.push(`M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`);
    for (let i = 1; i < points.length; i++) {
        const p0 = points[i - 1];
        const p1 = points[i];
        const dx = (p1.x - p0.x) / 2;
        const c1 = { x: p0.x + dx, y: p0.y };
        const c2 = { x: p1.x - dx, y: p1.y };
        d.push(
            `C ${c1.x.toFixed(1)} ${c1.y.toFixed(1)}, ${c2.x.toFixed(1)} ${c2.y.toFixed(
                1
            )}, ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}`
        );
    }
    return d.join(" ");
}

// Accepts HTMLDivElement ref without error
function useFlowPath(containerRef: React.RefObject<HTMLElement | null>) {
    const [pathD, setPathD] = useState("");

    useEffect(() => {
        function compute() {
            const el = containerRef.current;
            if (!el) return;

            const anchors = Array.from(
                el.querySelectorAll<HTMLElement>('[data-flow-anchor="true"]')
            ).sort(
                (a, b) =>
                    Number(a.getAttribute("data-step")) - Number(b.getAttribute("data-step"))
            );
            if (!anchors.length) return;

            const containerRect = el.getBoundingClientRect();
            const pts = anchors.map((a) => {
                const r = a.getBoundingClientRect();
                const cx = r.left + r.width / 2 - containerRect.left;
                const cy = r.top + r.height / 2 - containerRect.top;
                return { x: cx, y: cy };
            });

            setPathD(makeSmoothPath(pts));
        }

        compute();
        const ro = new ResizeObserver(() => compute());
        if (containerRef.current) ro.observe(containerRef.current);
        window.addEventListener("resize", compute);
        window.addEventListener("orientationchange", compute);
        const t = setTimeout(compute, 50);

        return () => {
            ro.disconnect();
            window.removeEventListener("resize", compute);
            window.removeEventListener("orientationchange", compute);
            clearTimeout(t);
        };
    }, [containerRef]);

    return pathD;
}

// ---------- Main ----------
export default function JobsCareersProcessSection() {
    const steps: Step[] = useMemo(
        () => [
            {
                title: "Apply",
                desc: "Send your resume/portfolio. A short form is okay.",
                icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                        <path d="M4 7a2 2 0 0 1 2-2h9l5 5v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M15 5v4a2 2 0 0 0 2 2h4" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                ),
            },
            {
                title: "Intro call",
                desc: "30 mins: role fit, expectations, timelines.",
                icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                        <path d="M3 5h14v10H3z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M17 9l4-2v6l-4-2z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                ),
            },
            {
                title: "Craft exercise",
                desc: "Practical task aligned to real CDPL work.",
                icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                        <path d="M4 4h16v16H4z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M8 12h8M8 8h8M8 16h5" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                ),
            },
            {
                title: "Panel",
                desc: "Deep dive with Engineering/Product/Success.",
                icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                        <circle cx="7" cy="8" r="2.5" stroke="currentColor" fill="none" strokeWidth="1.5" />
                        <circle cx="17" cy="8" r="2.5" stroke="currentColor" fill="none" strokeWidth="1.5" />
                        <path d="M3.5 18a4.5 4.5 0 0 1 9 0M11 18a4.5 4.5 0 0 1 9 0" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                ),
            },
            {
                title: "Offer",
                desc: "We move fast and keep it transparent.",
                icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                        <path d="M6 7h12v12H6z" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M8.5 13.5l2.5 2.5 4.5-5.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                    </svg>
                ),
            },
        ],
        []
    );

    const flowContainerRef = useRef<HTMLDivElement>(null);
    const pathD = useFlowPath(flowContainerRef);

    return (
        <section
            id="process"
            aria-labelledby="careers-process-heading"
            className="relative overflow-hidden bg-white py-12 sm:py-14 lg:py-16 text-neutral-900"
        >
            {/* subtle, solid feather blocks (no gradients) */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute inset-x-0 -top-28 h-72 bg-orange-100/20" />
                <div className="absolute -left-40 bottom-[-18%] h-[28rem] w-[28rem] bg-orange-100/10 rounded-full" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <header className="mb-6 sm:mb-8">
                    <h2 id="careers-process-heading" className="text-2xl sm:text-3xl font-bold tracking-tight">
                        Hiring process
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Respect for your time, signal-rich assessments, and quick decisions.
                    </p>
                </header>

                {/* Measure + draw flow curve */}
                <div ref={flowContainerRef} className="relative">
                    {pathD && (
                        <svg aria-hidden className="hidden md:block pointer-events-none absolute inset-0" style={{ zIndex: 0 }}>
                            <path
                                d={pathD}
                                fill="none"
                                stroke="#2563eb"            /* solid blue */
                                strokeWidth="3.6"
                                strokeLinecap="round"
                                strokeDasharray="0 13"
                                style={{ filter: "drop-shadow(0 2px 6px rgba(37,99,235,.25))" }}
                            >
                                <animate attributeName="stroke-dashoffset" from="0" to="-160" dur="7s" repeatCount="indefinite" />
                            </path>
                        </svg>
                    )}

                    {/* MOBILE */}
                    <ol className="md:hidden relative z-10">
                        <span className="absolute left-3 top-0 h-full w-px bg-orange-100" aria-hidden />
                        {steps.map((s, i) => (
                            <li
                                key={s.title}
                                className="relative mb-4 last:mb-0 pl-8"
                            >
                                <span className="absolute left-3 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-orange-300 ring-4 ring-orange-100" />
                                <span
                                    data-flow-anchor="true"
                                    data-step={i + 1}
                                    className="absolute top-6 left-8 h-2 w-2 rounded-full"
                                    style={{ opacity: 0 }}
                                />
                                <Card index={i} step={s} pointerSide="left" isFinal={i === steps.length - 1} />
                            </li>
                        ))}
                    </ol>

                    {/* DESKTOP */}
                    <div className="hidden md:grid grid-cols-[1fr_64px_1fr] gap-6 lg:gap-8 items-stretch relative z-10">
                        <div className="col-start-2 relative">
                            <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-orange-100" />
                            <span className="absolute left-1/2 -translate-x-1/2 top-6 h-2 w-2 rounded-full bg-orange-300 animate-float" />
                            <span className="absolute left-1/2 -translate-x-1/2 top-40 h-2 w-2 rounded-full bg-orange-300 animate-float delay-150" />
                            <span className="absolute left-1/2 -translate-x-1/2 top-72 h-2 w-2 rounded-full bg-orange-300 animate-float delay-300" />
                        </div>

                        {/* LEFT column: 1,3,5 */}
                        <div className="col-start-1 space-y-6 lg:space-y-8">
                            {[0, 2, 4].map((idx) => {
                                const s = steps[idx];
                                if (!s) return null;
                                return (
                                    <div
                                        key={s.title}
                                        className="relative"
                                    >
                                        <span
                                            data-flow-anchor="true"
                                            data-step={idx + 1}
                                            className="absolute top-10 -right-6 h-2 w-2 rounded-full"
                                            style={{ opacity: 0 }}
                                        />
                                        <Curve toward="right" />
                                        <Card index={idx} step={s} pointerSide="right" isFinal={idx === steps.length - 1} />
                                    </div>
                                );
                            })}
                        </div>

                        {/* RIGHT column: 2,4 */}
                        <div className="col-start-3 space-y-6 lg:space-y-8">
                            {[1, 3].map((idx) => {
                                const s = steps[idx];
                                if (!s) return null;
                                return (
                                    <div
                                        key={s.title}
                                        className="relative"
                                    >
                                        <span
                                            data-flow-anchor="true"
                                            data-step={idx + 1}
                                            className="absolute top-10 -left-6 h-2 w-2 rounded-full"
                                            style={{ opacity: 0 }}
                                        />
                                        <Curve toward="left" />
                                        <Card index={idx} step={s} pointerSide="left" isFinal={idx === steps.length - 1} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
          @keyframes float { 0% { transform: translateY(0) } 50% { transform: translateY(-6px) } 100% { transform: translateY(0) } }
          .animate-float { animation: float 4s ease-in-out infinite; }

          @keyframes dash { to { stroke-dashoffset: -100; } }
        `,
                }}
            />
        </section>
    );
}

// ---------- Decorative Curve (solid stroke) ----------
function Curve({ toward }: { toward: "left" | "right" }) {
    const flip = toward === "left" ? -1 : 1;
    return (
        <svg
            aria-hidden
            className="pointer-events-none absolute top-10 hidden md:block"
            style={{ [toward === "left" ? "left" : "right"]: "-56px" } as React.CSSProperties}
            width="60"
            height="40"
            viewBox="0 0 60 40"
        >
            <path
                d={`M ${toward === "left" ? 60 : 0} 20 C ${30 + 10 * flip} 20, ${30 + 22 * flip} 0, ${toward === "left" ? 0 : 60} 0`}
                fill="none"
                stroke="#2563eb"          /* solid blue */
                strokeWidth="2"
                strokeDasharray="12 24"
                style={{ animation: "dash 6s linear infinite" }}
            />
        </svg>
    );
}

// ---------- Card ----------
function Card({
    index,
    step,
    pointerSide,
    isFinal = false,
}: {
    index: number;
    step: Step;
    pointerSide: "left" | "right";
    isFinal?: boolean;
}) {
    const accent = ACCENTS[index % ACCENTS.length];

    return (
        <div
            className={`group relative rounded-2xl border border-orange-100 bg-white/92 p-4 sm:p-5 shadow-sm backdrop-blur-[2px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${isFinal ? "after:absolute after:-z-10 after:inset-0 after:rounded-2xl" : ""
                }`}
            style={{
                backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(2,6,23,0.025) 0px, rgba(2,6,23,0.025) 1px, transparent 1px, transparent 10px)",
            }}
        >
            {/* hidden per-card anchor the global curve connects to */}
            <span
                data-flow-anchor="true"
                data-step={index + 1}
                className={`absolute top-10 ${pointerSide === "left" ? "-left-6" : "-right-6"} h-2 w-2 rounded-full`}
                style={{ opacity: 0 }}
            />

            {/* pointer “beak” */}
            <span
                aria-hidden
                className={`absolute top-8 h-3 w-3 rotate-45 bg-white border border-orange-100 ${pointerSide === "left" ? "-left-1" : "-right-1"}`}
            />

            <div className="flex items-start gap-3">
                {/* Number badge (solid) */}
                <span
                    className="inline-grid place-items-center h-9 w-9 rounded-full text-[11px] font-bold text-white ring-1 ring-white/60 shadow-sm"
                    style={{ backgroundColor: accent, boxShadow: `0 6px 18px rgba(0,0,0,.1)` }}
                >
                    {index + 1}
                </span>

                <div className="min-w-0">
                    <div className="flex items-center gap-2">
                        <div
                            className="grid h-8 w-8 place-items-center rounded-xl"
                            style={{ border: `1px solid ${accent}22`, backgroundColor: "#ffffff" }}
                        >
                            <span style={{ color: accent }}>{step.icon}</span>
                        </div>

                        <h3 className="truncate text-base font-semibold" style={{ color: accent }}>
                            {step.title}
                        </h3>
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-gray-700">{step.desc}</p>

                    {/* solid accent underline on hover */}
                    <span
                        className="mt-3 block h-[3px] w-0 rounded-full transition-all duration-500 group-hover:w-24"
                        style={{ backgroundColor: accent }}
                        aria-hidden
                    />
                </div>
            </div>
        </div>
    );
}
