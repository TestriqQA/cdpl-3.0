'use client';
import { motion } from 'framer-motion';
import {
    MessageSquare,
    Globe,
    FileJson,
    Lock,
    Zap,
    Link2,
    Shield,
    Database,
} from 'lucide-react';
import { JSX } from 'react';

type Tool = {
    name: string;
    icon: JSX.Element;
    // visual tokens per card
    bg: string;       // tile background
    border: string;   // tile border
    ink: string;      // heading/text color
    iconTint: string; // icon color
    chip?: string;    // optional small tag color
};

const tools: Tool[] = [
    {
        name: 'POSTMAN',
        icon: <MessageSquare className="w-6 h-6" />,
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        ink: 'text-brand',
        iconTint: 'text-brand',
        chip: 'bg-orange-100 text-brand border-orange-200',
    },
    {
        name: 'REST APIs',
        icon: <Globe className="w-6 h-6" />,
        bg: 'bg-sky-50',
        border: 'border-sky-200',
        ink: 'text-sky-900',
        iconTint: 'text-sky-700',
        chip: 'bg-sky-100 text-sky-800 border-sky-200',
    },
    {
        name: 'JSON / XML',
        icon: <FileJson className="w-6 h-6" />,
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        ink: 'text-emerald-900',
        iconTint: 'text-emerald-700',
        chip: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    },
    {
        name: 'OAuth 2.0',
        icon: <Lock className="w-6 h-6" />,
        bg: 'bg-fuchsia-50',
        border: 'border-fuchsia-200',
        ink: 'text-fuchsia-900',
        iconTint: 'text-fuchsia-700',
        chip: 'bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200',
    },
    {
        name: 'API Chaining',
        icon: <Link2 className="w-6 h-6" />,
        bg: 'bg-indigo-50',
        border: 'border-indigo-200',
        ink: 'text-indigo-900',
        iconTint: 'text-indigo-700',
        chip: 'bg-indigo-100 text-indigo-800 border-indigo-200',
    },
    {
        name: 'Newman CLI',
        icon: <Zap className="w-6 h-6" />,
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        ink: 'text-amber-900',
        iconTint: 'text-amber-700',
        chip: 'bg-amber-100 text-amber-800 border-amber-200',
    },
    {
        name: 'OWASP ZAP',
        icon: <Shield className="w-6 h-6" />,
        bg: 'bg-rose-50',
        border: 'border-rose-200',
        ink: 'text-rose-900',
        iconTint: 'text-rose-700',
        chip: 'bg-rose-100 text-rose-800 border-rose-200',
    },
    {
        name: 'Mock Servers',
        icon: <Database className="w-6 h-6" />,
        bg: 'bg-slate-50',
        border: 'border-slate-200',
        ink: 'text-slate-900',
        iconTint: 'text-slate-700',
        chip: 'bg-slate-100 text-slate-800 border-slate-200',
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
                <motion.header
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="text-center mb-10 sm:mb-14"
                >
                    <h2 id="tools-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                        <span className='text-ST'>Tools</span> You’ll Master
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
                        Practice with industry-standard tools used by <strong>Fortune 500</strong> teams—perfect for{' '}
                        <strong>API Testing</strong>, <strong>Automation</strong>, and <strong>Security</strong> workflows.
                    </p>
                </motion.header>

                {/* Tools grid */}
                <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
                    {tools.map((tool, i) => (
                        <motion.article
                            key={tool.name}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
                            transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
                            className={[
                                'group relative overflow-hidden rounded-2xl border p-3 sm:p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
                                tool.bg,
                                tool.border,
                            ].join(' ')}
                            aria-label={tool.name}
                        >
                            <div className="mb-4 flex gap-3 items-center justify-between">
                                <div
                                    className={[
                                        'grid h-12 w-12 place-items-center rounded-xl border bg-white shadow-sm',
                                        tool.border,
                                        tool.iconTint,
                                    ].join(' ')}
                                    aria-hidden="true"
                                >
                                    {tool.icon}
                                </div>

                                {/* optional skill tags per tile */}
                                {tool.chip && (
                                    <span
                                        className={[
                                            'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',
                                            tool.chip,
                                        ].join(' ')}
                                    >
                                        Core Skill
                                    </span>
                                )}
                            </div>

                            <h3 className={['text-base sm:text-lg font-semibold', tool.ink].join(' ')}>{tool.name}</h3>
                            <p className="mt-1 text-xs sm:text-sm text-slate-600">
                                Build job-ready skills in configuration, scripting, and CI/CD integration for real-world API testing.
                            </p>

                            {/* micro “progress” line for a futuristic touch */}
                            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/70">
                                <div className={['h-full w-3/4 rounded-full opacity-80', tool.border.replace('border-', 'bg-')].join(' ')} />
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

        </section>
    );
}
