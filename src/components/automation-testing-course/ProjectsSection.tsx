'use client';
import { Globe, Smartphone, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { JSX } from 'react';

/** ----------------------------------------------------------------
 * Sleek, light-theme project cards with distinct accents (no repeats),
 * accessible semantics, SEO-friendly copy + JSON-LD
 * ---------------------------------------------------------------- */
type Project = {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  // visual accents (no heavy gradients; subtle option allowed on icon chip)
  accent: {
    cardBg: string;
    cardBorder: string;
    ink: string;
    iconChipFrom?: string; // optional soft gradient start
    iconChipTo?: string;   // optional soft gradient end
    iconRing: string;
    bullet: string;
    chip: string; // feature chip border
    chipText: string;
  };
};

const projects: Project[] = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Netflix Clone Automation',
    description:
      'Enterprise-grade test automation suite: AI self-healing, visual regression, and real-time reporting at scale.',
    features: ['Cypress + Playwright', 'AI Flaky Fix', 'Docker Grid', 'Grafana Dashboard'],
    accent: {
      cardBg: 'bg-sky-50',
      cardBorder: 'border-sky-200',
      ink: 'text-sky-900',
      iconChipFrom: 'from-sky-400',
      iconChipTo: 'to-cyan-500',
      iconRing: 'ring-sky-200',
      bullet: 'text-sky-700',
      chip: 'border-sky-300',
      chipText: 'text-sky-800',
    },
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Banking App (iOS/Android)',
    description:
      'End-to-end mobile automation on real devices with secure auth, biometrics, and cloud farm execution.',
    features: ['Appium + WDIO', 'Biometric Flows', 'Push Notifications', 'Device Cloud'],
    accent: {
      cardBg: 'bg-emerald-50',
      cardBorder: 'border-emerald-200',
      ink: 'text-emerald-900',
      iconChipFrom: 'from-emerald-400',
      iconChipTo: 'to-teal-500',
      iconRing: 'ring-emerald-200',
      bullet: 'text-emerald-700',
      chip: 'border-emerald-300',
      chipText: 'text-emerald-800',
    },
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Chaos & Performance Suite',
    description:
      'Shift-left resiliency with controlled failures, load tests, and security scans to harden releases.',
    features: ['k6 Load Testing', 'Chaos Monkey', 'OWASP ZAP', 'SLO Monitoring'],
    accent: {
      cardBg: 'bg-violet-50',
      cardBorder: 'border-violet-200',
      ink: 'text-violet-900',
      iconChipFrom: 'from-violet-400',
      iconChipTo: 'to-indigo-500',
      iconRing: 'ring-violet-200',
      bullet: 'text-violet-700',
      chip: 'border-violet-300',
      chipText: 'text-violet-800',
    },
  },
];

export default function ProjectsSection() {


  return (
    <section id="projects" className="relative py-10 bg-white">
      {/* subtle rails for a clean, slightly futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
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
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Build Elite <span className="text-ST">SDET Projects</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Ship <strong>production-grade automation frameworks</strong> with <em>AI self-healing</em>,{' '}
            <strong>visual testing</strong>, <strong>secure mobile E2E</strong>, and <strong>reliability engineering-</strong>
            the exact portfolio hiring managers search for.
          </p>
        </motion.header>

        {/* Cards */}
        <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease: 'easeOut' }}
              aria-label={`${p.title} — ${p.description}`}
              className={[
                'group relative overflow-hidden rounded-2xl border p-5 sm:p-6',
                p.accent.cardBg,
                p.accent.cardBorder,
                'shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
              ].join(' ')}
            >
              {/* Icon chip (tiny, sleek gradient only inside the chip) */}
              <div
                className={[
                  'mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ring-4',
                  p.accent.iconRing,
                  p.accent.iconChipFrom && p.accent.iconChipTo
                    ? `bg-gradient-to-br ${p.accent.iconChipFrom} ${p.accent.iconChipTo} text-white`
                    : 'bg-slate-900 text-white',
                ].join(' ')}
                aria-hidden="true"
              >
                {p.icon}
              </div>

              {/* Title & description */}
              <h3 className={['text-lg sm:text-xl font-semibold leading-tight', p.accent.ink].join(' ')}>{p.title}</h3>
              <p className="mt-2 text-sm sm:text-base text-slate-700">{p.description}</p>

              {/* Feature list as compact chips */}
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className={[
                      'inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium',
                      p.accent.chip,
                      p.accent.chipText,
                      'bg-white/70 backdrop-blur-sm',
                    ].join(' ')}
                  >
                    <CheckCircle className={['h-3.5 w-3.5', p.accent.bullet].join(' ')} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Footer microcopy for SEO */}
              <p className="mt-4 text-[11px] leading-5 text-slate-500">
                Includes CI/CD setup, evidence reporting, and scalability patterns used in modern product teams.
              </p>
            </motion.li>
          ))}
        </ol>

        {/* Supporting SEO copy */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          These <strong>SDET portfolio projects</strong> highlight <em>test design strategy</em>,{' '}
          <strong>framework architecture</strong>, <strong>observability</strong>, and{' '}
          <strong>developer-friendly pipelines</strong>—helping you stand out in interviews and code reviews.
        </p>
      </div>

    </section>
  );
}
