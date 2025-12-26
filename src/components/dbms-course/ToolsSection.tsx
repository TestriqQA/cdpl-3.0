'use client';
import { motion } from 'framer-motion';
import { Database, Terminal, FileText, Lock, GitBranch, BadgeCheck } from 'lucide-react';

// Keep icon tile gradient colors EXACTLY the same
const tools = [
    { name: 'MySQL Workbench', icon: <Database />, color: 'from-blue-400 to-cyan-500' },
    { name: 'DBeaver', icon: <Terminal />, color: 'from-green-400 to-emerald-500' },
    { name: 'phpMyAdmin', icon: <FileText />, color: 'from-purple-400 to-pink-500' },
    { name: 'MySQL Shell', icon: <Terminal />, color: 'from-indigo-400 to-blue-500' },
    { name: 'Replication', icon: <GitBranch />, color: 'from-yellow-400 to-amber-500' },
    { name: 'Backup Tools', icon: <Lock />, color: 'from-red-500 to-rose-600' },
];

const accents = [
    { bg: 'bg-sky-50', border: 'border-sky-200', ink: 'text-sky-900', chip: 'bg-sky-100 text-sky-800 border-sky-200' },
    { bg: 'bg-emerald-50', border: 'border-emerald-200', ink: 'text-emerald-900', chip: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    { bg: 'bg-amber-50', border: 'border-amber-200', ink: 'text-amber-900', chip: 'bg-amber-100 text-amber-900 border-amber-200' },
    { bg: 'bg-violet-50', border: 'border-violet-200', ink: 'text-violet-900', chip: 'bg-violet-100 text-violet-800 border-violet-200' },
    { bg: 'bg-indigo-50', border: 'border-indigo-200', ink: 'text-indigo-900', chip: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
    { bg: 'bg-rose-50', border: 'border-rose-200', ink: 'text-rose-900', chip: 'bg-rose-100 text-rose-800 border-rose-200' },
];

export default function ToolsSection() {


    return (
        <section id="tools" aria-labelledby="tools-heading" className="relative py-10 bg-white">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
                <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
            </div>

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.header
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="text-center mb-10 sm:mb-14"
                >
                    <p className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
                        <BadgeCheck className="h-4 w-4 text-emerald-600" />
                        Enterprise-grade • DBA approved
                    </p>
                    <h2 id="tools-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                        <span className='text-ST'>Tools</span> You’ll Master
                    </h2>
                    <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
                        Hands-on with <strong>MySQL Workbench</strong>, <strong>DBeaver</strong>, <strong>phpMyAdmin</strong>,{' '}
                        <strong>MySQL Shell</strong>, <strong>replication</strong>, and <strong>backup</strong> utilities.
                    </p>
                </motion.header>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                    {tools.map((tool, i) => {
                        const a = accents[i % accents.length];
                        return (
                            <motion.article
                                key={tool.name}
                                initial={{ opacity: 0, scale: 0.92 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
                                transition={{ duration: 0.45, delay: i * 0.05, ease: 'easeOut' }}
                                aria-label={tool.name}
                                className={[
                                    'group relative h-full rounded-2xl border p-4 sm:p-5',
                                    a.bg,
                                    a.border,
                                    'shadow-[0_1px_0_0_rgba(15,23,42,0.05)] hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300',
                                ].join(' ')}
                            >
                                {/* UPDATED: single icon tile (removed extra wrapper bg/white box) */}
                                <div className={`mb-4 grid h-16 w-16 place-items-center rounded-xl text-white bg-gradient-to-br ${tool.color}`} aria-hidden="true">
                                    {tool.icon}
                                </div>

                                <h3 className={['text-xs sm:text-sm font-semibold leading-snug', a.ink].join(' ')}>{tool.name}</h3>
                                <span className={['mt-2 inline-flex rounded-full border px-2 py-0.5 text-[11px] font-medium', a.chip].join(' ')}>
                                    Essential
                                </span>
                                <span className="absolute inset-0 rounded-2xl focus:outline-none" tabIndex={0} />
                            </motion.article>
                        );
                    })}
                </div>

                {/* SEO supportive line */}
                <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
                    Practice <strong>schema design</strong>, <strong>query optimization</strong>, <strong>replication setup</strong>, and{' '}
                    <strong>backup & restore</strong> workflows to become <strong>job-ready</strong> for DBA, SQL Developer, and Data Engineer roles.
                </p>
            </div>

        </section>
    );
}
