// components/sections/ToolsSection.tsx
// Server component — sleek, slightly futuristic, accessible, fully responsive.

import {
  Bot,
  BarChart3,
  Brain,
  Sparkles,
  Globe2,
  Calendar,
  Link2,
  Search,
} from 'lucide-react';

type Tool = {
  name: string;
  desc: string;
  icon: React.ReactNode;
  accent: { bg: string; text: string; border: string; ring: string; chip: string };
};

// Distinct soft-accent cards (no obvious color repetition)
const TOOLS: Tool[] = [
  {
    name: 'ChatGPT',
    desc: 'AI copy, ad creatives, keyword ideation, workflows',
    icon: <Bot className="h-5 w-5" />,
    accent: { bg: 'bg-sky-50', text: 'text-sky-900', border: 'border-sky-200', ring: 'focus:ring-sky-300', chip: 'bg-sky-100 text-sky-800' },
  },
  {
    name: 'Google Insights',
    desc: 'Core Web Vitals & performance optimization',
    icon: <BarChart3 className="h-5 w-5" />,
    accent: { bg: 'bg-emerald-50', text: 'text-emerald-900', border: 'border-emerald-200', ring: 'focus:ring-emerald-300', chip: 'bg-emerald-100 text-emerald-800' },
  },
  {
    name: 'Grok',
    desc: 'Trend mining, research prompts, competitive analysis',
    icon: <Brain className="h-5 w-5" />,
    accent: { bg: 'bg-amber-50', text: 'text-amber-900', border: 'border-amber-200', ring: 'focus:ring-amber-300', chip: 'bg-amber-100 text-amber-900' },
  },
  {
    name: 'DeepSeek',
    desc: 'Long-form planning, content outlines, data summarization',
    icon: <Sparkles className="h-5 w-5" />,
    accent: { bg: 'bg-violet-50', text: 'text-violet-900', border: 'border-violet-200', ring: 'focus:ring-violet-300', chip: 'bg-violet-100 text-violet-900' },
  },
  {
    name: 'Meta Ads',
    desc: 'Paid social campaigns, creatives testing, pixel checks',
    icon: <Globe2 className="h-5 w-5" />,
    accent: { bg: 'bg-rose-50', text: 'text-rose-900', border: 'border-rose-200', ring: 'focus:ring-rose-300', chip: 'bg-rose-100 text-rose-900' },
  },
  {
    name: 'Google Calendar',
    desc: 'Campaign cadences, sprint schedules, launch timelines',
    icon: <Calendar className="h-5 w-5" />,
    accent: { bg: 'bg-indigo-50', text: 'text-indigo-900', border: 'border-indigo-200', ring: 'focus:ring-indigo-300', chip: 'bg-indigo-100 text-indigo-900' },
  },
  {
    name: 'Ahrefs',
    desc: 'Backlinks, keyword gaps, content clusters',
    icon: <Link2 className="h-5 w-5" />,
    accent: { bg: 'bg-teal-50', text: 'text-teal-900', border: 'border-teal-200', ring: 'focus:ring-teal-300', chip: 'bg-teal-100 text-teal-900' },
  },
  {
    name: 'SEMrush',
    desc: 'Technical SEO audits, SERP tracking, PPC insights',
    icon: <Search className="h-5 w-5" />,
    accent: { bg: 'bg-fuchsia-50', text: 'text-fuchsia-900', border: 'border-fuchsia-200', ring: 'focus:ring-fuchsia-300', chip: 'bg-fuchsia-100 text-fuchsia-900' },
  },
];

export default function ToolsSection() {


  return (
    <section id="tools" aria-labelledby="tools-heading" className="relative py-10 bg-white">
      {/* Subtle futuristic backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(760px_150px_at_50%_0%,rgba(251,146,60,0.12),transparent_60%)]" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 xl:p-10">
        <header className="text-center max-w-4xl mx-auto">
          <h2 id="tools-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            <span className='text-green-700'>Tools</span> & <span className='text-green-700'>Technologies</span> You Will Learn
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Practice on a modern <strong>AI + SEO + Ads</strong> stack - from <strong>ChatGPT</strong> ideation and{' '}
            <strong>Meta Ads</strong> execution to <strong>Ahrefs</strong>/<strong>SEMrush</strong> audits and{' '}
            <strong>Google Insights</strong> performance tuning. Everything is <em>job-ready and portfolio-ready</em>.
          </p>
        </header>

        {/* Tools grid */}
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {TOOLS.map((t) => (
            <li key={t.name}>
              <article
                className={[
                  'group relative rounded-2xl border p-5 shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition',
                  'hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2',
                  t.accent.bg,
                  t.accent.border,
                  t.accent.ring,
                ].join(' ')}
                tabIndex={0}
                aria-label={t.name}
                title={t.name}
              >
                {/* top accent line */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-slate-300/50 to-transparent opacity-60"
                />
                <div className="flex items-center gap-3">
                  <span
                    className={[
                      'inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white border border-black/5',
                      t.accent.text,
                    ].join(' ')}
                  >
                    {t.icon}
                  </span>
                  <div>
                    <h3 className={['text-base font-bold', t.accent.text].join(' ')}>{t.name}</h3>
                    <p className="mt-0.5 text-xs text-slate-600">{t.desc}</p>
                  </div>
                </div>

                {/* chips */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${t.accent.chip} border border-black/5`}>
                    Hands-on
                  </span>
                  <span className="rounded-full px-2.5 py-1 text-[11px] font-semibold bg-white text-slate-700 border border-slate-200">
                    Real use-cases
                  </span>
                  <span className="rounded-full px-2.5 py-1 text-[11px] font-semibold bg-white text-slate-700 border border-slate-200">
                    Job-ready
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* SEO supportive copy */}
        <p className="mx-auto mt-10 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          Learn end-to-end execution: <strong>keyword research</strong>, <strong>content clustering</strong>,{' '}
          <strong>technical SEO fixes</strong>, <strong>ad budgeting</strong>, <strong>landing page CRO</strong>,{' '}
          <strong>GA4 + Looker Studio reporting</strong>, and <strong>automation</strong> with AI-assisted workflows.
        </p>
      </div>

    </section>
  );
}
