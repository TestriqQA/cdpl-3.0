'use client';
import { CheckCircle } from 'lucide-react';

type Module = { title: string; topics: string[] };

/** Extracted from “API Testing using POSTMAN & RestAPIs” course brochure */
const curriculum: Module[] = [
  {
    title: 'Basics of API Testing',
    topics: [
      'What is API Testing',
      'POSTMAN Introduction',
      'POSTMAN Installation',
      'JavaScript Object Notation (JSON)',
      'Creating Dummy APIs for API Testing',
      'How to Create Own APIs',
    ],
  },
  {
    title: 'Postman Workspace & Collections',
    topics: [
      'Creating Workspace',
      'Creating a Collection',
      'Saving & Editing Requests',
      'Exporting & Importing Collections',
      'Operations on Collections',
    ],
  },
  {
    title: 'HTTP Requests in Postman',
    topics: [
      'Creating Requests – GET, POST, PUT, PATCH & DELETE',
      'HTTP Request Validation in POSTMAN',
      'Request/Response Structure',
    ],
  },
  {
    title: 'Validation & Test Scripts',
    topics: [
      'Validating Response with Test Scripts in Postman',
      'Testing Status Codes',
      'Testing Headers & Cookies',
      'Testing Response Time',
      'Testing Response Body',
      'Testing JSON Schema',
    ],
  },
  {
    title: 'Environments & Variables',
    topics: [
      'Creating Environments in POSTMAN',
      'Benefits of Environment Variables',
      'How to Use Environment Variables',
    ],
  },
  {
    title: 'Hands-On Project: Employee.json API',
    topics: [
      'Create Server and .json File',
      'Execute Test Cases for HTTP Requests',
      'Create Variables & Environments',
      'Add Validation Scripts',
    ],
  },
  {
    title: 'Hands-On Project: Contact List (Live)',
    topics: [
      'Create User via API Link using Postman',
      'Create Collections for Different Modules',
      'Write & Execute Test Cases',
      'Use Authorization ID (Token)',
    ],
  },
  {
    title: 'Security Practice: OWASP Juice Shop',
    topics: [
      'Overview of OWASP Juice Shop',
      'Security Training & Awareness Use-cases',
      'Practice for Pen-Testing/CTFs',
    ],
  },
];

// Distinct accents
const accents = [
  { cardBg: 'bg-sky-50', cardBorder: 'border-sky-200', badgeBg: 'bg-sky-600', badgeText: 'text-white', ink: 'text-sky-800', icon: 'text-sky-700' },
  { cardBg: 'bg-amber-50', cardBorder: 'border-amber-200', badgeBg: 'bg-amber-600', badgeText: 'text-white', ink: 'text-amber-800', icon: 'text-amber-700' },
  { cardBg: 'bg-emerald-50', cardBorder: 'border-emerald-200', badgeBg: 'bg-emerald-600', badgeText: 'text-white', ink: 'text-emerald-800', icon: 'text-emerald-700' },
  { cardBg: 'bg-violet-50', cardBorder: 'border-violet-200', badgeBg: 'bg-violet-600', badgeText: 'text-white', ink: 'text-violet-800', icon: 'text-violet-700' },
  { cardBg: 'bg-rose-50', cardBorder: 'border-rose-200', badgeBg: 'bg-rose-600', badgeText: 'text-white', ink: 'text-rose-800', icon: 'text-rose-700' },
];

import { useState } from 'react';
import SyllabusDownloadModal from '@/components/SyllabusDownloadModal';
import CareerSessionModal from '@/components/CareerSessionModal';

export default function CurriculumSection() {
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section className="relative py-10 bg-white">
      {/* subtle separators */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl text-center text-slate-900 font-bold mb-4">
          Industry Ready <span className="text-ST">Curriculum</span>
        </h2>

        <p className="mx-auto mb-8 max-w-3xl text-center text-sm leading-relaxed text-slate-600 sm:text-base">
          Master <strong>Postman</strong>, <strong>REST</strong>, <strong>GraphQL</strong>, <strong>JSON Schema</strong>, <strong>automation scripts</strong>, and <strong>OWASP API security</strong>.
          Build a portfolio with real-world API projects to become job-ready for QA and Automation roles.
        </p>

        {/* Cards */}
        <ol className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
          {curriculum.map((mod, i) => {
            const a = accents[i % accents.length];
            return (
              <li
                key={mod.title}
                className={[
                  'group relative overflow-hidden rounded-2xl border p-6 md:p-7',
                  'md:pt-12',
                  a.cardBg,
                  a.cardBorder,
                  'shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
                ].join(' ')}
              >
                {/* index badge */}
                <div
                  className={[
                    'absolute right-4 top-4 grid place-items-center rounded-xl font-bold shadow-sm',
                    'h-8 w-8 text-[13px] sm:h-9 sm:w-9 sm:text-sm',
                    a.badgeBg,
                    a.badgeText,
                  ].join(' ')}
                  aria-hidden="true"
                >
                  {i + 1}
                </div>

                <h3 className={['mb-4 text-xl font-semibold leading-snug break-words', a.ink, 'pr-14 sm:pr-0'].join(' ')}>
                  {mod.title}
                </h3>

                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {mod.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle className={['mt-0.5 h-5 w-5 flex-shrink-0', a.icon].join(' ')} />
                      <span className="text-sm">{t}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-4 text-xs text-slate-500">
                  Outcomes: hands-on labs, assessment checklists, and take-home exercises for mastery.
                </p>
              </li>
            );
          })}
        </ol>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setIsDemoModalOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl bg-indigo-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-200"
          >
            Book a Free Demo
          </button>
          <button
            onClick={() => setIsSyllabusModalOpen(true)}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl border-2 border-green-700 bg-white px-4 py-2 text-sm font-semibold text-green-800 shadow-sm transition hover:bg-green-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-emerald-200"
          >
            Get Syllabus PDF
          </button>
        </div>
      </div>

      <SyllabusDownloadModal
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        courseName="API Testing"
        source="API Testing Course Page - Curriculum Section - Syllabus Download"
      />

      <CareerSessionModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        source="API Testing Course Page - Curriculum Section - Book Free Demo"
      />

    </section>
  );
}
