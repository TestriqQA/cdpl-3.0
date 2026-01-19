'use client';
import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Terminal,
  Zap,
  Shield,
  GitBranch,
  Database,
  FileText,
} from 'lucide-react';
import { JSX } from 'react';

type Tool = {
  name: string;
  icon: JSX.Element;
  color: string; // tailwind gradient tokens: "from-... to-..."
  accent: string; // light accent for card frame (no repetition-heavy gradients)
};

const tools: Tool[] = [
  { name: 'Selenium', icon: <Globe />, color: 'from-blue-500 to-cyan-500', accent: 'bg-sky-50 border-sky-200' },
  { name: 'Appium', icon: <Smartphone />, color: 'from-green-500 to-emerald-500', accent: 'bg-emerald-50 border-emerald-200' },
  { name: 'REST Assured', icon: <Terminal />, color: 'from-purple-500 to-pink-500', accent: 'bg-fuchsia-50 border-fuchsia-200' },
  { name: 'Cypress', icon: <Zap />, color: 'from-amber-500 to-yellow-500', accent: 'bg-amber-50 border-amber-200' },
  { name: 'JMeter', icon: <Shield />, color: 'from-rose-600 to-red-500', accent: 'bg-rose-50 border-rose-200' },
  { name: 'Jenkins', icon: <GitBranch />, color: 'from-indigo-500 to-blue-600', accent: 'bg-indigo-50 border-indigo-200' },
  { name: 'Postman', icon: <FileText />, color: 'from-orange-500 to-red-500', accent: 'bg-orange-50 border-orange-200' },
  { name: 'Git', icon: <Database />, color: 'from-slate-500 to-gray-600', accent: 'bg-slate-50 border-slate-200' },
];

export default function ToolsSection() {


  return (
    <section
      id="tools"
      aria-labelledby="tools-heading"
      className="relative py-10 bg-white"
    >
      {/* subtle rails for a clean, slightly futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center"
        >
          <h2
            id="tools-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            <span className='text-ST'>Tools</span> You’ll Master
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Master an industry-proven <strong>SDET toolchain</strong> — build stable frameworks, integrate with{' '}
            <strong>CI/CD</strong>, and automate <strong>UI / API / Performance</strong> testing to ship quality at speed.
          </p>
          <ul className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
            <li className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
              Enterprise Ready
            </li>
            <li className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
              Cross-Platform
            </li>
            <li className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
              CI/CD Friendly
            </li>
          </ul>
        </motion.header>

        {/* Tools Grid */}
        <ul
          role="list"
          className="mt-8 sm:mt-10 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-4"
        >
          {tools.map((tool, i) => (
            <motion.li
              key={tool.name}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-15% 0px -10% 0px' }}
              transition={{ duration: 0.35, delay: i * 0.05, ease: 'easeOut' }}
            >
              {/* Card: light accent frame, no heavy gradient backgrounds */}
              <div
                className={[
                  'group relative rounded-2xl border p-1',
                  tool.accent,
                  'shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition',
                  'hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300',
                ].join(' ')}
                aria-label={tool.name}
              >
                {/* Inner card */}
                <div className="rounded-xl bg-white p-5 sm:p-6">
                  {/* Icon puck with a sleek gradient (kept minimal and consistent) */}
                  <div
                    className={[
                      'mx-auto flex h-16 w-16 items-center justify-center rounded-xl text-white',
                      'bg-gradient-to-br',
                      tool.color,
                      'transition will-change-transform group-hover:scale-105',
                    ].join(' ')}
                    aria-hidden="true"
                  >
                    {tool.icon}
                  </div>

                  <h3 className="mt-4 text-center text-sm font-bold text-slate-900 sm:text-base">
                    {tool.name}
                  </h3>

                  {/* tiny helper copy for SEO & clarity */}
                  <p className="mt-2 text-center text-xs text-slate-700">
                    Widely used in automation pipelines for scalable, maintainable testing.
                  </p>
                </div>

                {/* decorative corner dot for futuristic vibe */}
                <span className="pointer-events-none absolute right-3 top-3 h-1.5 w-1.5 rounded-full bg-slate-300/70 transition-transform group-hover:scale-125" />
              </div>
            </motion.li>
          ))}
        </ul>

        {/* SEO supporting paragraph */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          This curated toolset helps you implement <strong>Page Object Models</strong>,{' '}
          <strong>API contract testing</strong>, <strong>load testing</strong>, and{' '}
          <strong>continuous integration</strong>—increasing reliability and reducing release risk.
        </p>
      </div>


    </section>
  );
}
