import { Globe2, TrendingUp, Clock, Wallet, ShieldCheck, Layers, type LucideIcon } from 'lucide-react';

// Headline facts, all taken from the reasons below.
const FACTS = [
    { value: '130+', label: 'Countries recognise it' },
    { value: '1M+', label: 'Certified professionals' },
    { value: '3', label: 'Levels: Foundation to Expert' },
    { value: 'Lifetime', label: 'Validity, no renewals' },
];

const REASONS: { title: string; Icon: LucideIcon; points: string[] }[] = [
    {
        title: 'Globally Recognized & Industry Standard',
        Icon: Globe2,
        points: [
            'Accepted in 130+ countries with over 1 million certified professionals',
            'Recognized by top companies as the gold standard for software testing',
            'Aligns with international best practices',
        ],
    },
    {
        title: 'Structured Learning Path',
        Icon: Layers,
        points: [
            'Multiple levels for career growth: Foundation, Advanced, and Expert',
            'Covers Manual Testing, Automation, Agile, and Test Management',
        ],
    },
    {
        title: 'Enhances Career & Salary Prospects',
        Icon: TrendingUp,
        points: [
            'Certified professionals earn higher salaries',
            'Boosts job opportunities in top companies and global enterprises',
            'Essential for roles like QA Engineer, Test Manager, and Automation Engineer',
        ],
    },
    {
        title: 'No Expiry: Lifetime Validity',
        Icon: Clock,
        points: ['Unlike other certifications, ISTQB never expires, so no renewals are needed'],
    },
    {
        title: 'Cost-Effective & Flexible',
        Icon: Wallet,
        points: [
            'More affordable than many other certifications',
            'No mandatory training required; self-study is an option',
            'Available in multiple languages and global locations',
        ],
    },
    {
        title: 'Industry-Aligned & Future-Proof',
        Icon: ShieldCheck,
        points: [
            'Regularly updated to reflect trends (Agile, DevOps, AI in Testing)',
            'Keeps professionals ahead in the evolving testing landscape',
        ],
    },
];

export default function WhyIstqbSection() {
    return (
        <section aria-labelledby="why-istqb-heading" className="relative py-12">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 md:p-12">
                <header className="mx-auto max-w-3xl text-center">
                    <h2 id="why-istqb-heading" className="text-3xl font-bold text-slate-900">
                        Why ISTQB is the Best <span className="text-orange-500">Testing Certification?</span>
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-slate-600">
                        The ISTQB (International Software Testing Qualifications Board) certification is widely
                        recognized as the best in software testing due to its global recognition, structured learning
                        path, and career-boosting benefits. Here&rsquo;s why it stands out:
                    </p>
                </header>

                {/* Key facts */}
                <dl className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {FACTS.map(({ value, label }) => (
                        <div key={label} className="rounded-2xl border border-orange-100 bg-orange-50/60 px-4 py-5 text-center">
                            <dt className="sr-only">{label}</dt>
                            <dd>
                                <span className="block text-2xl font-extrabold text-orange-500 sm:text-3xl">{value}</span>
                                <span className="mt-1 block text-sm font-medium text-slate-600">{label}</span>
                            </dd>
                        </div>
                    ))}
                </dl>

                {/* Reasons */}
                <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {REASONS.map(({ title, Icon, points }) => (
                        <li
                            key={title}
                            className="rounded-2xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
                        >
                            <div className="flex items-center gap-3">
                                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-orange-50 text-orange-500 ring-1 ring-orange-100" aria-hidden="true">
                                    <Icon className="h-5 w-5" />
                                </span>
                                <h3 className="text-base font-bold leading-snug text-slate-800">{title}</h3>
                            </div>
                            <ul className="mt-4 space-y-2.5">
                                {points.map((text) => (
                                    <li key={text} className="flex items-start gap-2.5">
                                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" aria-hidden="true" />
                                        <span className="text-sm leading-snug text-slate-600">{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
