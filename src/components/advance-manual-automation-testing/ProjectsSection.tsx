import { Building2, ShoppingCart, Smartphone, CheckCircle } from 'lucide-react';
import { JSX } from 'react';


type Project = {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  // visual accents (unique per card; no repeating colors)
  cardBg: string;
  border: string;
  headBg: string;
  iconInk: string;
  dot: string;
  chip: string;
  ring: string;
};

const projects: Project[] = [
  {
    icon: <Building2 className="w-7 h-7" />,
    title: 'Banking Web + Mobile App',
    description:
      'Design manual test cases and automate critical flows with Selenium (Web) and Appium (Android/iOS). CI ready.',
    features: ['Master Test Plan', '300+ Test Cases', 'POM Framework', 'Jenkins CI'],
    cardBg: 'bg-sky-50/60',
    border: 'border-sky-200',
    headBg: 'bg-sky-700',
    iconInk: 'text-sky-700',
    dot: 'bg-sky-500',
    chip: 'bg-white text-sky-800 border-sky-200',
    ring: 'ring-sky-200',
  },
  {
    icon: <ShoppingCart className="w-7 h-7" />,
    title: 'E-Commerce Full Suite',
    description:
      'Blend exploratory + API validation with Postman and end-to-end Cypress automation for storefront and checkout.',
    features: ['Risk Analysis', 'Postman API Tests', 'Cypress E2E', 'Allure Reports'],
    cardBg: 'bg-amber-50/60',
    border: 'border-amber-200',
    headBg: 'bg-amber-700',
    iconInk: 'text-amber-700',
    dot: 'bg-amber-500',
    chip: 'bg-white text-amber-800 border-amber-200',
    ring: 'ring-amber-200',
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: 'FinTech Hybrid App',
    description:
      'Translate user stories into BDD scenarios and run Playwright across web-views with living documentation.',
    features: ['User Stories → BDD', 'Cucumber Specs', 'Playwright', 'Live Demo Review'],
    cardBg: 'bg-violet-50/60',
    border: 'border-violet-200',
    headBg: 'bg-violet-700',
    iconInk: 'text-violet-700',
    dot: 'bg-violet-500',
    chip: 'bg-white text-violet-800 border-violet-200',
    ring: 'ring-violet-200',
  },
];

export default function ProjectsSection() {


  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle frame lines for a sleek/futuristic feel */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center">
          <h2
            id="projects-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Build Your <span className="text-ST">QA Portfolio</span>
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm sm:text-base text-slate-600">
            Real applications, real defects, <strong>production-like data</strong>, and{' '}
            <strong>CI/CD-ready frameworks</strong>. These projects showcase <em>manual testing</em> depth
            and <em>automation</em> mastery-exactly what recruiters search for.
          </p>

          {/* Micro badges */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-800">
              Job-Ready Portfolio
            </span>
            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-indigo-800">
              E2E • API • Mobile
            </span>
            <span className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-rose-800">
              CI/CD • Reporting
            </span>
          </div>
        </header>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="group/card relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md"
            >
              {/* Accent top bar */}
              <span aria-hidden className={`absolute left-0 right-0 top-0 h-1.5 ${p.headBg}`} />

              {/* Header */}
              <div className="px-6 pt-6 md:px-7 md:pt-7">
                <div className="flex items-center gap-3">
                  <div
                    className={[
                      'grid h-12 w-12 place-items-center rounded-xl border bg-white shadow-sm',
                      p.border,
                    ].join(' ')}
                  >
                    <span className={p.iconInk}>{p.icon}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-lg sm:text-xl font-semibold text-slate-900">
                      {p.title}
                    </h3>
                    <div className="mt-1 flex items-center gap-1.5">
                      <span className={`inline-block h-1.5 w-1.5 rounded-full ${p.dot}`} />
                      <span className="text-xs font-medium text-slate-600">Portfolio Project</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-slate-700">
                  {p.description}
                </p>
              </div>

              {/* Features */}
              <div className="px-6 pb-6 pt-4 md:px-7 md:pb-7">
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-800">
                      <CheckCircle className={`mt-0.5 h-4.5 w-4.5 flex-shrink-0 ${p.iconInk}`} />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Chips row */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${p.chip} border`}>
                    Recruiter-Friendly
                  </span>
                  <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                    Evidence-Based Reports
                  </span>
                  <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                    Clean Git Commits
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supportive SEO copy */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          Each project demonstrates <strong>test strategy</strong>, <strong>defect reporting</strong>,{' '}
          <strong>traceability</strong>, and <strong>automation depth</strong> (UI • API • Mobile) with
          CI/CD and dashboards-making you stand out for <strong>QA Engineer</strong>, <strong>Automation
            Tester</strong>, and <strong>SDET</strong> roles.
        </p>
      </div>

    </section>
  );
}
