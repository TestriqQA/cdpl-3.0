'use client';
import { motion } from 'framer-motion';
import { Building2, ShoppingCart, Heart, CheckCircle } from 'lucide-react';
import { JSX } from 'react';

type Project = {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
};

const projects: Project[] = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: 'Banking Data Warehouse',
    description:
      'Validate 10M+ core-banking transactions into an enterprise DWH with end-to-end reconciliation and SCD handling.',
    features: ['Count Match', 'Sum Validation', 'Data Completeness', 'SCD Type 2'],
  },
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    title: 'E-Commerce ETL Pipeline',
    description:
      'Verify orders, inventory, and customer entities across multi-source feeds with robust data-quality rules.',
    features: ['Duplicate Check', 'NULL Handling', 'Reference Integrity', 'Threshold Alerts'],
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Healthcare Claims ETL',
    description:
      'Ensure HIPAA-ready pipelines with PII masking, lineage tracking, audit logs, and safe re-run strategies.',
    features: ['PII Masking', 'Data Lineage', 'Error Logging', 'Re-run Strategy'],
  },
];

// Distinct, non-repeating card accents (no heavy gradients on cards)
const accents = [
  { card: 'bg-sky-50 border-sky-200', ink: 'text-sky-900', iconTile: 'from-sky-500 to-blue-600', check: 'text-sky-700' },
  { card: 'bg-amber-50 border-amber-200', ink: 'text-amber-900', iconTile: 'from-amber-500 to-orange-600', check: 'text-amber-700' },
  { card: 'bg-emerald-50 border-emerald-200', ink: 'text-emerald-900', iconTile: 'from-emerald-500 to-green-600', check: 'text-emerald-700' },
];

export default function ProjectsSection() {


  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative py-10 bg-white">
      {/* subtle frame lines for a sleek, slightly futuristic vibe */}
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
          <h2 id="projects-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Test Real <span className="text-ST">ETL Pipelines</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Work on <strong>enterprise-grade data flows</strong> used by banks, e-commerce leaders, and healthcare providers.
            Build a portfolio recruiters can verify and trust.
          </p>
        </motion.header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
          {projects.map((p, i) => {
            const a = accents[i % accents.length];
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-12% 0px -8% 0px' }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: 'easeOut' }}
                className={[
                  'group relative h-full overflow-hidden rounded-2xl border p-6 sm:p-7',
                  a.card,
                  'shadow-[0_1px_0_0_rgba(15,23,42,0.05)] hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300',
                ].join(' ')}
              >
                {/* Icon tile with a sleek gradient (icon only) */}
                <div className={`mb-5 grid h-16 w-16 place-items-center rounded-xl text-white bg-gradient-to-br ${a.iconTile}`} aria-hidden="true">
                  {p.icon}
                </div>

                <h3 className={['text-xl font-semibold leading-tight', a.ink].join(' ')}>{p.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{p.description}</p>

                <ul className="mt-4 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className={`mt-0.5 h-4 w-4 flex-shrink-0 ${a.check}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* micro caption for SEO & clarity */}
                <p className="mt-4 text-xs text-slate-500">
                  Deliverables: test design, SQL evidence, reconciliation logs, and audit-ready reports.
                </p>
                {/* focus helper */}
                <span className="absolute inset-0 rounded-2xl" tabIndex={0} />
              </motion.article>
            );
          })}
        </div>

        {/* supportive SEO line */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          Validate <strong>extract</strong>, <strong>transform</strong>, and <strong>load</strong> stages with
          <strong> reconciliation rules</strong>, <strong>schema checks</strong>, and <strong>error handling</strong> to ensure
          analytics-ready data for BI & ML.
        </p>
      </div>

    </section>
  );
}
