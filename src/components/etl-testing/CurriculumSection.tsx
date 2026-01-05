'use client';
import { CheckCircle } from 'lucide-react';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const SyllabusDownloadModal = dynamic(() => import('@/components/SyllabusDownloadModal'), { ssr: false, loading: () => <SectionLoader label="Loading syllabus modal..." /> });
const CareerSessionModal = dynamic(() => import('@/components/CareerSessionModal'), { ssr: false, loading: () => <SectionLoader label="Loading career modal..." /> });

const SectionLoader = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-900"></div>
      <span className="ml-2 text-gray-900">{label}</span>
    </div>
  );
};

type Module = {
  title: string;
  topics: string[];
  duration: string;        // e.g., "2 Hours"
  isoDuration: string;     // e.g., "PT2H" (for JSON-LD)
};

const curriculum: Module[] = [
  {
    title: 'Introduction to ETL',
    topics: [
      'Overview of ETL vs ELT',
      'Importance in data pipelines',
      'Roles: ETL testers & developers',
    ],
    duration: '2 Hours',
    isoDuration: 'PT2H',
  },
  {
    title: 'Data Warehousing Concepts',
    topics: [
      'DW architecture',
      'Star vs Snowflake schema',
      'Relational vs Dimensional models',
    ],
    duration: '4 Hours',
    isoDuration: 'PT4H',
  },
  {
    title: 'SQL for ETL Testing',
    topics: [
      'Basic to advanced SQL',
      'Data validation with SQL',
      'Debugging SQL-based ETL jobs',
    ],
    duration: '16 Hours',
    isoDuration: 'PT16H',
  },
  {
    title: 'Manual ETL Testing',
    topics: [
      'Test plans & strategy',
      'Test case design (completeness & accuracy)',
      'Defect management',
    ],
    duration: '10 Hours',
    isoDuration: 'PT10H',
  },
  {
    title: 'Automation in ETL Testing',
    topics: [
      'Python-based automation',
      'Selenium for ETL validation',
      'Parameterization & reporting',
    ],
    duration: '20 Hours',
    isoDuration: 'PT20H',
  },
  {
    title: 'Talend for ETL Development',
    topics: [
      'Talend Studio essentials',
      'tMap & tJoin',
      'Dynamic schemas',
      'Multi-source integration',
    ],
    duration: '10 Hours',
    isoDuration: 'PT10H',
  },
  {
    title: 'Informatica for ETL Development',
    topics: [
      'Workflows',
      'Transformations',
      'Debugging',
      'Optimization',
    ],
    duration: '10 Hours',
    isoDuration: 'PT10H',
  },
  {
    title: 'Data Transformation & Validation',
    topics: [
      'Null handling',
      'Deduplication',
      'Business rules',
      'Real-time validation',
    ],
    duration: '10 Hours',
    isoDuration: 'PT10H',
  },
  {
    title: 'ETL Tools Overview',
    topics: [
      'Snowflake',
      'SnapLogic',
      'Power BI in ETL workflows',
    ],
    duration: '10 Hours',
    isoDuration: 'PT10H',
  },
  {
    title: 'Capstone Projects',
    topics: [
      'Retail sales data ETL testing',
      'E-commerce ETL design & validation',
      'Multi-tool integration (Talend, Informatica, Python, Selenium)',
      'Insights & reporting with Power BI',
    ],
    duration: '8 Hours',
    isoDuration: 'PT8H',
  },
];

// Distinct, non-repeating accents (no heavy gradients)
const accents = [
  { cardBg: 'bg-sky-50', cardBorder: 'border-sky-200', title: 'text-sky-900', icon: 'text-sky-700', pill: 'bg-sky-600 text-white' },
  { cardBg: 'bg-emerald-50', cardBorder: 'border-emerald-200', title: 'text-emerald-900', icon: 'text-emerald-700', pill: 'bg-emerald-600 text-white' },
  { cardBg: 'bg-amber-50', cardBorder: 'border-amber-200', title: 'text-amber-900', icon: 'text-amber-700', pill: 'bg-amber-600 text-white' },
  { cardBg: 'bg-violet-50', cardBorder: 'border-violet-200', title: 'text-violet-900', icon: 'text-violet-700', pill: 'bg-violet-600 text-white' },
  { cardBg: 'bg-rose-50', cardBorder: 'border-rose-200', title: 'text-rose-900', icon: 'text-rose-700', pill: 'bg-rose-600 text-white' },
];

export default function CurriculumSection() {
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);
  const [isCareerModalOpen, setIsCareerModalOpen] = useState(false);

  return (
    <section id="curriculum" aria-labelledby="curriculum-heading" className="relative py-10 bg-white">
      {/* subtle top/bottom separators for a sleek frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="curriculum-heading" className="text-3xl md:text-4xl text-slate-900 text-center font-bold mb-4">
          Industry-Ready <span className="text-ST">ETL Testing</span> Curriculum
        </h2>

        {/* SEO supportive line */}
        <p className="mx-auto mt-4 mb-6 max-w-3xl text-center text-sm sm:text-base text-slate-600">
          Learn <strong>DW architecture</strong>, <strong>SQL-based ETL validation</strong>, <strong>manual & automated testing</strong>, and
          development with <strong>Talend</strong> and <strong>Informatica</strong>. Wrap up with <strong>capstone projects</strong> integrating
          Snowflake, SnapLogic, and Power BI.
        </p>

        {/* Responsive grid */}
        <ol className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2" aria-label="Course modules">
          {curriculum.map((mod, i) => {
            const a = accents[i % accents.length];
            return (
              <li
                key={mod.title}
                className={[
                  'group relative overflow-hidden rounded-2xl border p-5 sm:p-6',
                  a.cardBg,
                  a.cardBorder,
                  'shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
                ].join(' ')}
              >
                {/* index + duration pill row */}
                <div className="mb-3 flex items-center gap-2">
                  <span className={['inline-flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-sm font-bold', a.pill].join(' ')}>
                    {i + 1}
                  </span>
                  <h3 className={['text-lg sm:text-xl font-semibold leading-tight', a.title].join(' ')}>{mod.title}</h3>
                </div>

                {/* duration */}
                <div className="mb-3">
                  <span className="inline-flex items-center rounded-md border border-current px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                    {mod.duration}
                  </span>
                </div>

                {/* topics */}
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {mod.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className={['mt-0.5 h-5 w-5 flex-shrink-0', a.icon].join(' ')} />
                      <span className="text-sm">{t}</span>
                    </li>
                  ))}
                </ul>

                {/* outcome microcopy */}
                <p className="mt-4 text-xs text-slate-500">
                  Outcomes: hands-on labs, checklists, and review rubrics to validate every ETL stage (extract → transform → load).
                </p>
              </li>
            );
          })}
        </ol>

        {/* Optional CTA row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setIsCareerModalOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl bg-indigo-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            Book a Free Demo
          </button>
          <button
            onClick={() => setIsSyllabusModalOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border-2 border-emerald-700 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm transition hover:bg-emerald-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-emerald-200"
          >
            Get Syllabus PDF
          </button>
        </div>
      </div>

      <SyllabusDownloadModal
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        courseName="ETL Testing"
        source="ETL Testing Course Page - Curriculum Section - Syllabus Download"
      />

      <CareerSessionModal
        isOpen={isCareerModalOpen}
        onClose={() => setIsCareerModalOpen(false)}
        source="ETL Testing Course Page - Curriculum Section - Book Free Demo"
      />

    </section>
  );
}
