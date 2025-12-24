// components/sections/WhyMasterProgram.tsx
// Server component — no client/runtime JS needed

export default function WhyMasterProgram() {


  const highlights = [
    { label: '2-Months Duration', accent: 'bg-sky-50 text-sky-900 border-sky-200' },
    { label: '40–50 Learning Hours', accent: 'bg-emerald-50 text-emerald-900 border-emerald-200' },
    { label: '6 hrs / week', accent: 'bg-amber-50 text-amber-900 border-amber-200' },
    { label: 'No Prerequisite', accent: 'bg-violet-50 text-violet-900 border-violet-200' },
    { label: '9.6/10 Rated', accent: 'bg-rose-50 text-rose-900 border-rose-200' },
  ];

  const pillars = [
    {
      title: 'AI-Driven Curriculum',
      copy:
        'Prompt engineering for marketers, content ops automation, and creative generation workflows to scale campaigns responsibly.',
      chip: 'AI + Automation',
      color: 'text-sky-700 border-sky-200 bg-sky-50',
    },
    {
      title: 'Job-Ready Portfolio',
      copy:
        'Ship 3 capstones: SEO + content hub, GA4 dashboard with attribution, and profitable ads funnel with landing pages.',
      chip: 'Portfolio Projects',
      color: 'text-emerald-700 border-emerald-200 bg-emerald-50',
    },
    {
      title: 'Performance Mindset',
      copy:
        'Hands-on with GA4, Looker Studio, conversion APIs, and A/B testing to lift ROAS, CTR, and CAC-to-LTV ratios.',
      chip: 'Analytics + ROAS',
      color: 'text-amber-700 border-amber-200 bg-amber-50',
    },
    {
      title: 'Mentor-Led Cohort',
      copy:
        'Live reviews, feedback loops, and career guidance. Mock interviews and LinkedIn + resume optimization.',
      chip: 'Mentorship',
      color: 'text-violet-700 border-violet-200 bg-violet-50',
    },
    {
      title: 'Career Outcomes',
      copy:
        'Interview prep, portfolio walkthroughs, and referral network. Roles: Performance Marketer, SEO Specialist, Marketing Analyst.',
      chip: 'Placement Focus',
      color: 'text-rose-700 border-rose-200 bg-rose-50',
    },
    {
      title: 'Always-Updated',
      copy:
        'Syllabus refreshes to match platform changes (Meta, Google Ads, YouTube, LinkedIn) and privacy-first measurement.',
      chip: 'Up-to-date',
      color: 'text-indigo-700 border-indigo-200 bg-indigo-50',
    },
  ];

  return (
    <section
      id="why-master-program"
      aria-labelledby="why-master-heading"
      className="relative overflow-hidden py-10 bg-white"
    >
      {/* Subtle, slightly futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 [background-image:radial-gradient(800px_300px_at_50%_0%,rgba(2,132,199,0.06),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 xl:px-10">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="why-master-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Your Path to the <span className="text-green-700">Top&nbsp;1% Digital Marketer</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700">
            A mentor-led, AI-powered program that blends{' '}
            <strong>performance marketing</strong>, <strong>SEO</strong>, <strong>GA4 analytics</strong>, and{' '}
            <strong>creative strategy</strong>-so you can launch campaigns that scale with measurable ROI.
          </p>
        </header>

        {/* Responsive highlight chips (distinct colors, no repeated accents) */}
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {highlights.map((h) => (
            <li key={h.label}>
              <span
                className={[
                  'block w-full rounded-xl border px-4 py-3 text-center text-sm font-semibold shadow-[0_1px_0_0_rgba(15,23,42,0.04)]',
                  'transition hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300',
                  h.accent,
                ].join(' ')}
              >
                {h.label}
              </span>
            </li>
          ))}
        </ul>

        {/* Pillars grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300"
            >
              {/* top accent line fills slightly on hover */}
              <span
                aria-hidden
                className={`absolute left-5 right-5 top-0 h-1.5 rounded-b-full bg-slate-200 transition-all duration-300 group-hover/right:left-4 group-hover/right:right-4`}
              />
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                <span
                  className={[
                    'whitespace-nowrap rounded-full border px-3 py-1 text-xs font-semibold',
                    p.color,
                  ].join(' ')}
                >
                  {p.chip}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">{p.copy}</p>
            </article>
          ))}
        </div>

        {/* Outcome strip */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-800 font-semibold">
              Portfolio-First Training
            </div>
            <div className="rounded-xl border border-sky-200 bg-sky-50 px-5 py-4 text-sky-800 font-semibold">
              Analytics & GA4 Mastery
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-amber-800 font-semibold">
              Placement Support & Prep
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-slate-600">
            Build case studies, land interviews, and demonstrate ROI with real dashboards and campaigns.
          </p>
        </div>
      </div>

    </section>
  );
}
