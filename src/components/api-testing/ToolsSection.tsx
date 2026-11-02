import Image from 'next/image';
import {
    FileJson,
    Link2,
    Database,
} from 'lucide-react';
import { JSX } from 'react';

type Tool = {
    name: string;
    logo?: string;
    icon?: JSX.Element;
    // visual tokens per card
    bg: string;       // tile background
    border: string;   // tile border
    ink: string;      // heading/text color
    iconTint: string; // icon color
    chip?: string;    // optional small tag color
    bar: string;      // progress fill (literal class so Tailwind generates it)
};

const tools: Tool[] = [
    {
        name: 'POSTMAN',
        logo: '/techstack_logos/postman-logo.svg',
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        ink: 'text-orange-700',
        iconTint: 'text-orange-600',
        chip: 'bg-orange-100 text-orange-800 border-orange-200',
        bar: 'bg-orange-300',
    },
    {
        name: 'REST APIs',
        logo: '/techstack_logos/REST-API-logo.png',
        bg: 'bg-sky-50',
        border: 'border-sky-200',
        ink: 'text-sky-900',
        iconTint: 'text-sky-700',
        chip: 'bg-sky-100 text-sky-800 border-sky-200',
        bar: 'bg-sky-300',
    },
    {
        name: 'JSON / XML',
        icon: <FileJson className="w-5 h-5" />,
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        ink: 'text-emerald-900',
        iconTint: 'text-emerald-700',
        chip: 'bg-emerald-100 text-emerald-800 border-emerald-200',
        bar: 'bg-emerald-300',
    },
    {
        name: 'OAuth 2.0',
        logo: '/techstack_logos/OAuth2-logo.jpg',
        bg: 'bg-fuchsia-50',
        border: 'border-fuchsia-200',
        ink: 'text-fuchsia-900',
        iconTint: 'text-fuchsia-700',
        chip: 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200',
        bar: 'bg-fuchsia-300',
    },
    {
        name: 'API Chaining',
        icon: <Link2 className="w-5 h-5" />,
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        ink: 'text-indigo-900',
        iconTint: 'text-indigo-700',
        chip: 'bg-indigo-100 text-indigo-800 border-indigo-200',
        bar: 'bg-indigo-300',
    },
    {
        name: 'Newman CLI',
        logo: '/techstack_logos/postman-logo.svg',
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        ink: 'text-amber-900',
        iconTint: 'text-amber-700',
        chip: 'bg-amber-100 text-amber-800 border-amber-200',
        bar: 'bg-amber-300',
    },
    {
        name: 'OWASP ZAP',
        logo: '/techstack_logos/owasp-zap-logo.svg',
        bg: 'bg-rose-50',
        border: 'border-rose-200',
        ink: 'text-rose-900',
        iconTint: 'text-rose-700',
        chip: 'bg-rose-100 text-rose-800 border-rose-200',
        bar: 'bg-rose-300',
    },
    {
        name: 'Mock Servers',
        icon: <Database className="w-5 h-5" />,
        bg: 'bg-slate-50',
        border: 'border-slate-200',
        ink: 'text-slate-900',
        iconTint: 'text-slate-700',
        chip: 'bg-slate-100 text-slate-800 border-slate-200',
        bar: 'bg-slate-300',
    },
];

export default function ToolsSection() {


    return (
        <section id="tools" aria-labelledby="tools-heading" className="relative py-10 bg-white">
            {/* subtle separators for a clean, futuristic frame */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
                <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <header
                    className="text-center mb-10 sm:mb-14"
                >
                    <h2 id="tools-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                        <span className='text-ST'>Tools</span> You’ll Master
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
                        Get hands-on with top <strong>free API testing tools</strong> and enterprise platforms. Learn <strong>how to test api</strong> effectively using industry-standard <strong>API testing tools</strong>.
                    </p>
                </header>

                {/* Tools grid */}
                <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
                    {tools.map((tool, i) => (
                        <article
                            key={tool.name}
                            className={[
                                'group relative overflow-hidden rounded-2xl border p-3 sm:p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
                                tool.bg,
                                tool.border,
                            ].join(' ')}
                            aria-label={tool.name}
                        >
                            {/* optional skill tags per tile */}
                            {tool.chip && (
                                <span
                                    className={[
                                        'mb-3 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',
                                        tool.chip,
                                    ].join(' ')}
                                >
                                    Core Skill
                                </span>
                            )}

                            <div className="flex items-center gap-3">
                                {tool.logo ? (
                                    <Image src={tool.logo} alt="" width={40} height={40} className="h-8 w-8 shrink-0 object-contain sm:h-10 sm:w-10" aria-hidden />
                                ) : (
                                    <div
                                        className={[
                                            'grid h-8 w-8 shrink-0 place-items-center rounded-lg border bg-white shadow-sm sm:h-10 sm:w-10',
                                            tool.border,
                                            tool.iconTint,
                                        ].join(' ')}
                                        aria-hidden="true"
                                    >
                                        {tool.icon}
                                    </div>
                                )}
                                <h3 className={['min-w-0 text-base sm:text-lg font-semibold', tool.ink].join(' ')}>{tool.name}</h3>
                            </div>
                            <p className="mt-3 text-xs sm:text-sm text-slate-600">
                                Build job-ready skills in configuration, scripting, and CI/CD integration for real-world API testing.
                            </p>

                            {/* micro “progress” line for a futuristic touch */}
                            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white ring-1 ring-inset ring-slate-900/10">
                                <div className={['h-full w-3/4 rounded-full', tool.bar].join(' ')} />
                            </div>
                        </article>
                    ))}
                </div>
            </div>

        </section>
    );
}
