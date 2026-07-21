import { Globe, Bot, Zap, Shield, GitBranch, Cpu, Terminal, Eye } from 'lucide-react';
import type { JSX } from 'react';

type Tool = { name: string; icon: JSX.Element };
const tools: Tool[] = [
  { name: 'Selenium 4', icon: <Globe className="w-7 h-7" /> },
  { name: 'Cypress', icon: <Zap className="w-7 h-7" /> },
  { name: 'Playwright', icon: <Terminal className="w-7 h-7" /> },
  { name: 'Applitools', icon: <Eye className="w-7 h-7" /> },
  { name: 'k6', icon: <Shield className="w-7 h-7" /> },
  { name: 'Jenkins', icon: <GitBranch className="w-7 h-7" /> },
  { name: 'Docker', icon: <Cpu className="w-7 h-7" /> },
  { name: 'AI Testing', icon: <Bot className="w-7 h-7" /> },
];

/** Distinct light accents + explicit icon text colors (fixes invisible icons) */
const accents = [
  { wrap: 'bg-sky-50 border-sky-200', iconBg: 'bg-sky-100 ring-sky-300', iconText: 'text-sky-700', title: 'text-sky-900' },
  { wrap: 'bg-emerald-50 border-emerald-200', iconBg: 'bg-emerald-100 ring-emerald-300', iconText: 'text-emerald-700', title: 'text-emerald-900' },
  { wrap: 'bg-violet-50 border-violet-200', iconBg: 'bg-violet-100 ring-violet-300', iconText: 'text-violet-700', title: 'text-violet-900' },
  { wrap: 'bg-amber-50 border-amber-200', iconBg: 'bg-amber-100 ring-amber-300', iconText: 'text-amber-700', title: 'text-amber-900' },
  { wrap: 'bg-indigo-50 border-indigo-200', iconBg: 'bg-indigo-100 ring-indigo-300', iconText: 'text-indigo-700', title: 'text-indigo-900' },
  { wrap: 'bg-rose-50 border-rose-200', iconBg: 'bg-rose-100 ring-rose-300', iconText: 'text-rose-700', title: 'text-rose-900' },
  { wrap: 'bg-cyan-50 border-cyan-200', iconBg: 'bg-cyan-100 ring-cyan-300', iconText: 'text-cyan-700', title: 'text-cyan-900' },
  { wrap: 'bg-lime-50 border-lime-200', iconBg: 'bg-lime-100 ring-lime-300', iconText: 'text-lime-700', title: 'text-lime-900' },
];

export default function ToolsSection() {


  return (
    <section id="tools" aria-labelledby="tools-heading" className="relative py-10 bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header
          className="text-center"
        >
          <h2 id="tools-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            <span className="text-ST">Tools </span> You&apos;ll Master
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Master a <strong>production-ready automation stack</strong> across UI, API, performance and CI/CD.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
          {tools.map((tool, i) => {
            const a = accents[i % accents.length];
            return (
              <div
                key={tool.name}
                className={[
                  'group relative overflow-hidden rounded-2xl border p-4 sm:p-5',
                  a.wrap,
                  'shadow-[0_1px_0_0_rgba(15,23,42,0.04)] hover:shadow-md transition',
                ].join(' ')}
              >
                <span className="pointer-events-none absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-slate-300/70" />
                {/* Icon wrapper sets the color (currentColor) so the icon is visible */}
                <div className={['mb-4 grid h-14 w-14 place-items-center rounded-xl ring-1', a.iconBg, a.iconText].join(' ')}>
                  {tool.icon}
                </div>
                <h3 className={['text-sm sm:text-base font-semibold leading-tight', a.title].join(' ')}>{tool.name}</h3>
                <p className="mt-1 text-xs sm:text-[13px] leading-5 text-slate-600">
                  Learn setup, best practices, and real-world patterns with <strong>scalable test design</strong> and <strong>pipeline integration</strong>.
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
