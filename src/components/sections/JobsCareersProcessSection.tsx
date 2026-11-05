import type { LucideIcon } from "lucide-react";
import { BadgeCheck, FileText, PenTool, Users, Video } from "lucide-react";

// Hiring roadmap as a gently winding road with a milestone pin per step.
// Static SVG + CSS, no client JS.

type Tone = { pin: string; ring: string; text: string; line: string };

const TONES: Tone[] = [
    { pin: "bg-orange-500", ring: "ring-orange-100", text: "text-orange-600", line: "border-orange-300" },
    { pin: "bg-sky-600", ring: "ring-sky-100", text: "text-sky-700", line: "border-sky-300" },
    { pin: "bg-violet-600", ring: "ring-violet-100", text: "text-violet-700", line: "border-violet-300" },
    { pin: "bg-emerald-600", ring: "ring-emerald-100", text: "text-emerald-700", line: "border-emerald-300" },
    { pin: "bg-rose-600", ring: "ring-rose-100", text: "text-rose-700", line: "border-rose-300" },
];

const STEPS: { title: string; desc: string; icon: LucideIcon }[] = [
    { title: "Apply", desc: "Send your resume or portfolio. A short form is okay.", icon: FileText },
    { title: "Intro call", desc: "30 minutes on role fit, expectations and timelines.", icon: Video },
    { title: "Craft exercise", desc: "A practical task based on real CDPL work.", icon: PenTool },
    { title: "Panel", desc: "A deep dive with the Engineering, Product or Success team.", icon: Users },
    { title: "Offer", desc: "We move fast and keep every decision transparent.", icon: BadgeCheck },
];

// viewBox 1000×160; stops sit on the crests/troughs at x = 100…900.
const ROAD = "M0,80 C40,80 60,56 100,56 S240,104 300,104 S440,56 500,56 S640,104 700,104 S840,56 900,56 S980,80 1000,80";
const PIN_POS = [
    { left: "10%", top: "35%" },
    { left: "30%", top: "65%" },
    { left: "50%", top: "35%" },
    { left: "70%", top: "65%" },
    { left: "90%", top: "35%" },
];


function Pin({ i }: { i: number }) {
    const tone = TONES[i];
    const Icon = STEPS[i].icon;
    return (
        <span className={`grid h-12 w-12 place-items-center rounded-full text-white shadow-md ring-4 ${tone.pin} ${tone.ring}`}>
            <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
    );
}

export default function JobsCareersProcessSection() {
    return (
        <section id="process" aria-labelledby="careers-process-heading" className="overflow-hidden bg-white text-slate-900">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
                <header className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand">How we hire</p>
                    <h2 id="careers-process-heading" className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Our <span className="text-brand">Hiring Process</span>
                    </h2>
                    <p className="mt-3 text-base text-slate-600">
                        Respect for your time, practical assessments and quick decisions.
                    </p>
                </header>

                {/* ---------- Desktop: winding road ---------- */}
                <div className="mt-10 hidden lg:block" aria-hidden="true">
                    <div className="relative aspect-[25/4]">
                        <svg viewBox="0 0 1000 160" className="absolute inset-0 h-full w-full overflow-visible">
                            <path d={ROAD} fill="none" stroke="#f1f5f9" strokeWidth="20" strokeLinecap="round" />
                            <path d={ROAD} fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="10 10" strokeLinecap="round" />
                        </svg>

                        {/* connector from each marker down to its step text (stops just above the text row, which sits 1.5rem below) */}
                        {PIN_POS.map((pos, i) => (
                            <span
                                key={`line-${STEPS[i].title}`}
                                className={`absolute -translate-x-1/2 border-l-2 border-dashed ${TONES[i].line}`}
                                style={{ left: pos.left, top: pos.top, bottom: "-1rem" }}
                            />
                        ))}

                        {PIN_POS.map((pos, i) => (
                            <span
                                key={STEPS[i].title}
                                className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                                style={pos}
                            >
                                <Pin i={i} />
                            </span>
                        ))}
                    </div>
                </div>

                {/* Step text: under each pin on desktop; beside a vertical road on smaller screens */}
                <ol className="relative mt-10 space-y-8 lg:mt-6 lg:grid lg:grid-cols-5 lg:space-y-0">
                    {/* vertical road (below lg) */}
                    <span aria-hidden="true" className="absolute bottom-6 left-6 top-6 -translate-x-1/2 border-l-2 border-dashed border-slate-300 lg:hidden" />

                    {STEPS.map((step, i) => {
                        const tone = TONES[i];
                        return (
                            <li key={step.title} className="relative flex gap-5 lg:block lg:px-3 lg:text-center">
                                <span className="relative z-10 shrink-0 lg:hidden">
                                    <Pin i={i} />
                                </span>
                                <div className="min-w-0 pt-1 lg:pt-0">
                                    <p className={`text-xs font-bold uppercase tracking-wider ${tone.text}`}>Step {i + 1}</p>
                                    <h3 className="mt-1 text-lg font-bold text-slate-900">{step.title}</h3>
                                    <p className="mt-1.5 text-sm leading-6 text-slate-600 lg:mx-auto lg:max-w-[14rem]">{step.desc}</p>
                                </div>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}
