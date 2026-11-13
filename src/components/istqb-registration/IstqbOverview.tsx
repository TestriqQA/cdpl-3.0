import { BookOpen, CalendarCheck, Compass, Presentation, Briefcase } from 'lucide-react';
import { SiteStat } from '@/components/stats/SiteStatsProvider';

const LEVELS = [
    { code: 'FL', title: 'ISTQB Foundation Level', desc: 'Ideal for beginners to understand core testing principles.' },
    { code: 'AL', title: 'ISTQB Advanced Level', desc: 'Designed for experienced testers looking to deepen their expertise.' },
    { code: 'AT', title: 'ISTQB Agile Foundation Extension', desc: 'Focused on Agile testing methodologies.' },
];

// Condensed from the original overview copy and the consultation step.
const SUPPORT = [
    { Icon: Compass, title: 'Right-level guidance', desc: 'Expert advice on which certification fits you.' },
    { Icon: CalendarCheck, title: 'Exam booking help', desc: 'Registration, exam options and scheduling.' },
    { Icon: Presentation, title: 'Interactive training', desc: 'Research-driven, industry-aligned content.' },
    { Icon: Briefcase, title: 'Career outcomes', desc: 'Skills for large-scale enterprise projects.' },
];

export default function IstqbOverview() {
    return (
        <div className="h-full rounded-3xl border border-white/50 bg-white/50 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange-100 text-brand" aria-hidden="true">
                    <BookOpen className="h-5 w-5" />
                </span>
                {/* The page's only h1 (the form and sections below use h2). */}
                <h1 className="text-xl font-bold leading-snug text-slate-900">
                    ISTQB Certification <span className="text-brand">Course Overview</span>
                </h1>
            </div>

            <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                Software testing ensures a product is reliable before release, and the demand for skilled testers
                keeps growing. At CDPL, we offer comprehensive ISTQB certification training at multiple levels, from
                your first Foundation exam to Advanced and Agile tracks.
            </p>

            <h2 className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Certification levels we train for
            </h2>
            <ul className="mt-3 space-y-2.5">
                {LEVELS.map(({ code, title, desc }) => (
                    <li key={code} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3.5">
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-orange-50 text-xs font-bold text-brand ring-1 ring-orange-100" aria-hidden="true">
                            {code}
                        </span>
                        <div className="min-w-0">
                            <p className="text-sm font-semibold text-slate-900">{title}</p>
                            <p className="mt-0.5 text-sm leading-snug text-slate-600">{desc}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <h2 className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                How CDPL helps you get certified
            </h2>
            <ul className="mt-3 grid gap-x-4 gap-y-3 sm:grid-cols-2">
                {SUPPORT.map(({ Icon, title, desc }) => (
                    <li key={title} className="flex items-start gap-3">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-brand ring-1 ring-orange-100" aria-hidden="true">
                            <Icon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                            <p className="text-sm font-semibold text-slate-900">{title}</p>
                            <p className="text-sm leading-snug text-slate-600">{desc}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <dl className="mt-6 grid grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-white py-3 text-center">
                <div>
                    <dt className="sr-only">Learner rating</dt>
                    <dd className="text-lg font-extrabold text-brand"><SiteStat k="rating" /></dd>
                    <dd className="text-xs font-medium text-slate-500">Learner rating</dd>
                </div>
                <div>
                    <dt className="sr-only">Reviews</dt>
                    <dd className="text-lg font-extrabold text-brand"><SiteStat k="reviews" /></dd>
                    <dd className="text-xs font-medium text-slate-500">Reviews</dd>
                </div>
                <div>
                    <dt className="sr-only">Students placed</dt>
                    <dd className="text-lg font-extrabold text-brand"><SiteStat k="studentsPlaced" /></dd>
                    <dd className="text-xs font-medium text-slate-500">Students placed</dd>
                </div>
            </dl>
        </div>
    );
}
