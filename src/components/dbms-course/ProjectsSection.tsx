'use client';
import { motion } from 'framer-motion';
import { ShoppingCart, Building2, BarChart3, CheckCircle, BadgeCheck } from 'lucide-react';
import { JSX } from 'react';

type Project = {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  // visual tokens
  bg: string;        // card background
  border: string;    // card border
  ink: string;       // heading/text color
  iconTint: string;  // icon color
  chip: string;      // small tag style
};

const projects: Project[] = [
  {
    icon: <ShoppingCart className="w-7 h-7" />,
    title: 'E-Commerce Database',
    description: 'Multi-vendor marketplace: products, orders, reviews, inventory, and promotions.',
    features: ['Normalization', 'Complex JOINs', 'Triggers', 'Stored Procedures'],
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    ink: 'text-sky-900',
    iconTint: 'text-sky-700',
    chip: 'bg-sky-100 text-sky-800 border-sky-200',
  },
  {
    icon: <Building2 className="w-7 h-7" />,
    title: 'Inventory Management',
    description: 'Real-time stock tracking with supplier integration and alerting.',
    features: ['Views', 'Indexes', 'Transactions', 'Backup Strategy'],
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    ink: 'text-emerald-900',
    iconTint: 'text-emerald-700',
    chip: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: 'Analytics Dashboard DB',
    description: 'Sales, user behavior, and performance KPIs with optimized queries.',
    features: ['Window Functions', 'Partitioning', 'Materialized Views', 'EXPLAIN'],
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    ink: 'text-amber-900',
    iconTint: 'text-amber-700',
    chip: 'bg-amber-100 text-amber-900 border-amber-200',
  },
];

export default function ProjectsSection() {


  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative py-10 bg-white">
      {/* subtle frame lines for a clean, slightly futuristic vibe */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
            <BadgeCheck className="h-4 w-4 text-emerald-600" />
            Portfolio-ready • Industry use cases
          </p>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Build <span className="text-ST">Real Databases</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Design, optimize, and deploy <strong>production-grade MySQL</strong> schemas. Practice{' '}
            <strong>indexing</strong>, <strong>transactions</strong>, <strong>query optimization</strong>, and{' '}
            <strong>backup & recovery</strong>—skills recruiters search for.
          </p>
        </motion.header>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
              className={[
                'group relative overflow-hidden rounded-2xl border p-6 md:p-5',
                p.bg,
                p.border,
                'shadow-[0_1px_0_0_rgba(15,23,42,0.05)] hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300',
              ].join(' ')}
              aria-label={p.title}
            >
              {/* Icon tile */}
              <div
                className={[
                  'mb-5 grid h-14 w-14 place-items-center rounded-xl border bg-white shadow-sm',
                  p.border,
                  p.iconTint,
                ].join(' ')}
                aria-hidden="true"
              >
                {p.icon}
              </div>

              {/* Title + chip */}
              <div className="mb-2 flex items-center justify-between gap-2">
                <h3 className={['text-lg sm:text-xl font-semibold', p.ink].join(' ')}>{p.title}</h3>
                <span
                  className={[
                    'hidden sm:inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium',
                    p.chip,
                  ].join(' ')}
                >
                  Project
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-700">{p.description}</p>

              <ul className="mt-4 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className={['h-4 w-4 flex-shrink-0', p.iconTint].join(' ')} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* subtle progress rail for futuristic touch */}
              <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/70">
                <div className={['h-full w-3/4 rounded-full opacity-80', p.border.replace('border-', 'bg-')].join(' ')} />
              </div>
            </motion.article>
          ))}
        </div>

        {/* SEO-supportive line */}
        <div className="mx-auto mt-10 max-w-4xl text-center">
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            Showcase <strong>real SQL schemas</strong>, <strong>EXPLAIN plans</strong>, and <strong>performance benchmarks</strong> on GitHub to
            win interviews for <strong>Database Developer</strong>, <strong>Backend Engineer</strong>, and <strong>Data Analyst</strong> roles.
          </p>
        </div>
      </div>

    </section>
  );
}
