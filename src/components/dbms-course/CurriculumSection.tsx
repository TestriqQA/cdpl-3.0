import { CheckCircle } from 'lucide-react';
import CareerSessionButton from '@/components/course-islands/CareerSessionButton';
import SyllabusButton from '@/components/course-islands/SyllabusButton';

type Module = { title: string; topics: string[] };

const curriculum: Module[] = [
  {
    title: 'Module 1: Introduction to DBMS & MySQL',
    topics: [
      'Understanding DBMS: definition, importance, types (Relational, NoSQL, Hierarchical)',
      'Key concepts: data models, schemas, data independence',
      'Introduction to MySQL: overview, history, features',
      'Advantages & use cases in modern databases',
    ],
  },
  {
    title: 'Module 2: Getting Started with MySQL',
    topics: [
      'Installation & setup: system requirements, MySQL Server/Workbench',
      'Basic configuration: user accounts, security settings',
      'MySQL interfaces: CLI basics',
      'MySQL Workbench: GUI features for design & queries',
    ],
  },
  {
    title: 'Module 3: Database Design & Modeling',
    topics: [
      'Database design concepts: ER modeling (entities, relationships)',
      'Relational schema conversion from ER models',
      'Schema implementation: normalization (1NF–BCNF) & denormalization trade-offs',
      'Table creation: data types, keys, constraints; indexing basics (single/composite)',
    ],
  },
  {
    title: 'Module 4: SQL Basics & Essential Clauses',
    topics: [
      'Basic SQL queries: SELECT, WHERE; retrieving data from single/multiple tables',
      'Essential filters: IN, BETWEEN, LIKE, IS NULL; ORDER BY, LIMIT/OFFSET',
      'MySQL operators: arithmetic, concatenation; logical & comparison operators',
      'Transactions intro: COMMIT/ROLLBACK for integrity',
    ],
  },
  {
    title: 'Module 5: Advanced SQL',
    topics: [
      'Joins: INNER, LEFT, SELF, CROSS; USING & NATURAL JOIN',
      'Subqueries: scalar & correlated; UNION/UNION ALL',
      'Aggregations: GROUP BY, HAVING, aggregate functions; multi-level summaries',
      'Window functions: ROW_NUMBER, RANK, DENSE_RANK with OVER; running totals & moving averages',
    ],
  },
  {
    title: 'Module 6: Database Administration',
    topics: [
      'User management: create accounts; grant/revoke; security best practices',
      'DDL/DML: CREATE/ALTER/DROP; INSERT/UPDATE/DELETE',
      'Backup & recovery: full/incremental with mysqldump; restore',
      'Query optimization: EXPLAIN, indexing strategies; B-tree, hash, full-text',
      'Server configuration: tuning parameters; slow query logs',
      'TCL & DCL: COMMIT/ROLLBACK/SAVEPOINT; GRANT/REVOKE',
    ],
  },
  {
    title: 'Module 7: SQL Advanced Features',
    topics: [
      'As titled in brochure; detailed bullets not listed in the PDF page',
      'Covered live during class with hands-on exercises',
    ],
  },
  {
    title: 'Module 8: SQL Objects',
    topics: [
      'Views: virtual tables for simplified access',
      'Stored procedures: reusable code blocks',
      'Functions & triggers: UDFs and automation',
      'CTEs & temporary tables: common patterns',
    ],
  },
  {
    title: 'Module 9: Real-World Applications',
    topics: [
      'Case studies: sales/finance database designs; best practices',
      'Capstone project: design, implement, optimize a business-scenario DB',
    ],
  },
  {
    title: 'Module 10: Assessment & Certification',
    topics: [
      'Final assessment test: practical & theoretical coverage',
      'Certification',
    ],
  },
];

// Distinct, non-repeating accents (no heavy gradients)
const accents = [
  { cardBg: 'bg-sky-50', cardBorder: 'border-sky-200', badgeBg: 'bg-sky-600', ink: 'text-sky-900', icon: 'text-sky-700' },
  { cardBg: 'bg-emerald-50', cardBorder: 'border-emerald-200', badgeBg: 'bg-emerald-600', ink: 'text-emerald-900', icon: 'text-emerald-700' },
  { cardBg: 'bg-amber-50', cardBorder: 'border-amber-200', badgeBg: 'bg-amber-600', ink: 'text-amber-900', icon: 'text-amber-700' },
  { cardBg: 'bg-violet-50', cardBorder: 'border-violet-200', badgeBg: 'bg-violet-600', ink: 'text-violet-900', icon: 'text-violet-700' },
  { cardBg: 'bg-rose-50', cardBorder: 'border-rose-200', badgeBg: 'bg-rose-600', ink: 'text-rose-900', icon: 'text-rose-700' },
];

export default function CurriculumSection() {

  return (
    <section id="curriculum" aria-labelledby="curriculum-heading" className="relative py-10 bg-white">
      {/* subtle top/bottom separators for a clean, slightly futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-slate-900 text-center font-bold mb-4">
          Industry-Ready <span className="text-ST">MySQL Curriculum</span>
        </h2>

        <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
          Learn <strong>DBMS foundations</strong>, <strong>SQL (basic to advanced)</strong>,{' '}
          <strong>database design</strong>, <strong>administration & performance</strong>, and build{' '}
          <strong>production-style MySQL databases</strong> through case studies and a capstone.
        </p>

        {/* Modules grid */}
        <ol className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {curriculum.map((mod, i) => {
            const a = accents[i % accents.length];
            return (
              <li
                key={mod.title}
                className={[
                  'group relative overflow-hidden rounded-2xl border p-6 md:p-7',
                  'pt-14 md:pt-10',
                  a.cardBg,
                  a.cardBorder,
                  'shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
                ].join(' ')}
              >
                {/* Number badge */}
                <div
                  className={[
                    'absolute right-4 top-4 grid place-items-center rounded-xl font-bold text-white shadow-sm',
                    'h-8 w-8 text-[13px] sm:h-9 sm:w-9 sm:text-sm',
                    a.badgeBg,
                  ].join(' ')}
                  aria-hidden="true"
                >
                  {i + 1}
                </div>

                <h3 className={['mb-4 text-xl font-semibold leading-snug pr-14 sm:pr-0', a.ink].join(' ')}>{mod.title}</h3>

                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {mod.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className={['mt-0.5 h-5 w-5 flex-shrink-0', a.icon].join(' ')} />
                      <span className="text-sm">{t}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs text-slate-500">
                  Outcomes: hands-on labs, performance drills, and a portfolio-ready capstone.
                </p>
              </li>
            );
          })}
        </ol>

        {/* Inline CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <CareerSessionButton
            source="DBMS Course Page - Curriculum Section - Book Free Demo"
            className="cursor-pointer inline-flex items-center justify-center rounded-xl bg-indigo-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            Book a Free Demo
          </CareerSessionButton>
          <SyllabusButton
            source="DBMS Course Page - Curriculum Section - Syllabus Download"
            courseName="MySQL DBMS"
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border-2 border-emerald-700 bg-white px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm transition hover:bg-emerald-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-emerald-200"
          >
            Get Syllabus PDF
          </SyllabusButton>
        </div>
      </div>

    </section>
  );
}
