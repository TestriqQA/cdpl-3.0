'use client';
import { motion } from 'framer-motion';
import {
  Globe, Smartphone, Terminal, FileText, Shield, GitBranch, CheckSquare, Bug,
} from 'lucide-react';
import type { JSX } from 'react';

type Tool = {
  name: string;
  icon: JSX.Element;
  accentBg: string;
  accentText: string;
  accentRing: string;
  keywords: string;
};

const tools: Tool[] = [
  { name: 'JIRA', icon: <Bug className="h-7 w-7" />, accentBg: 'bg-sky-50', accentText: 'text-sky-700', accentRing: 'ring-sky-200', keywords: 'JIRA issue tracking, agile boards, bug tracking, sprint planning' },
  { name: 'Selenium', icon: <Globe className="h-7 w-7" />, accentBg: 'bg-emerald-50', accentText: 'text-emerald-700', accentRing: 'ring-emerald-200', keywords: 'Selenium WebDriver, UI automation testing, cross browser testing' },
  { name: 'Appium', icon: <Smartphone className="h-7 w-7" />, accentBg: 'bg-fuchsia-50', accentText: 'text-fuchsia-700', accentRing: 'ring-fuchsia-200', keywords: 'Appium mobile automation, Android iOS testing, real device cloud' },
  { name: 'Postman', icon: <Terminal className="h-7 w-7" />, accentBg: 'bg-orange-50', accentText: 'text-orange-700', accentRing: 'ring-orange-200', keywords: 'Postman API testing, REST, collections, monitors, newman CI' },
  { name: 'Cypress', icon: <FileText className="h-7 w-7" />, accentBg: 'bg-indigo-50', accentText: 'text-indigo-700', accentRing: 'ring-indigo-200', keywords: 'Cypress e2e testing, component testing, flake detection, dashboards' },
  { name: 'Jenkins', icon: <GitBranch className="h-7 w-7" />, accentBg: 'bg-amber-50', accentText: 'text-amber-700', accentRing: 'ring-amber-200', keywords: 'Jenkins CI/CD pipelines, GitHub actions, build automation' },
  { name: 'TestRail', icon: <CheckSquare className="h-7 w-7" />, accentBg: 'bg-rose-50', accentText: 'text-rose-700', accentRing: 'ring-rose-200', keywords: 'TestRail test case management, test runs, traceability, coverage' },
  { name: 'Git', icon: <Shield className="h-7 w-7" />, accentBg: 'bg-slate-50', accentText: 'text-slate-700', accentRing: 'ring-slate-200', keywords: 'Git version control, branching strategy, code reviews, PRs' },
];

export default function ToolsSection() {

  return (
    <section id="tools" aria-labelledby="tools-heading" className="relative bg-white py-10">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 id="tools-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            <span className='text-ST'>Tools</span> You’ll Master
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm sm:text-base text-slate-600">
            Industry-standard QA & automation stack used by top tech companies - designed for <strong>real projects</strong>, <strong>scalable frameworks</strong>, and <strong>CI/CD delivery</strong>.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
            <span className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-sky-700">Job-Ready Skills</span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700">Hands-On Labs</span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-700">CI/CD Focus</span>
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-violet-700">Interview Prep</span>
          </div>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {tools.map((tool, i) => (
            <motion.article
              key={tool.name}
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
              transition={{ duration: 0.35, delay: i * 0.06, ease: 'easeOut' }}
              className="group/card relative"
              aria-label={`${tool.name} card`}
            >
              <div className="rounded-2xl bg-gradient-to-br from-white via-white to-white p-[1px] shadow-[0_1px_0_0_rgba(0,0,0,0.04)]">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300 focus-within:ring-offset-2">
                  <div className={['mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ring-1', tool.accentRing, tool.accentBg, tool.accentText].join(' ')} aria-hidden>
                    {tool.icon}
                  </div>

                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">{tool.name}</h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600">{tool.keywords}</p>

                  {/* Scoped hover underline (only this card) */}
                  <div
                    className={[
                      'accent-line mt-5 h-[2px] w-0 rounded-full transition-all duration-300',
                      // use a solid accent for the underline (not all cards)
                      'bg-current',
                      tool.accentText,
                      'group-hover/card:w-24',
                    ].join(' ')}
                    aria-hidden
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          Learn how these tools work together in <strong>framework design</strong>, <strong>test management</strong>, <strong>API & UI automation</strong>, and <strong>continuous delivery</strong>-so you can ship high-quality software faster.
        </p>
      </div>


    </section>
  );
}
