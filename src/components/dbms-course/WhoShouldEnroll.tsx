import { Users, GraduationCap, Briefcase, Target, BadgeCheck, ArrowRight } from 'lucide-react';
import IconCard from '../ui/IconCard';
import { JSX } from 'react';
import EnrollButton from '@/components/course-islands/EnrollButton';

type Audience = {
  icon: JSX.Element;
  title: string;
  description: string;
  bg: string;
  iconColor: string;
  border: string;
};

const audience: Audience[] = [
  { icon: <Users />, title: 'Career Switchers', description: 'Non-tech professionals transitioning to database & SQL roles', bg: 'bg-sky-50', iconColor: 'text-sky-700', border: 'border-sky-200' },
  { icon: <GraduationCap />, title: 'Fresh Graduates', description: 'BSc, BTech, BCA students seeking job-ready MySQL skills', bg: 'bg-emerald-50', iconColor: 'text-emerald-700', border: 'border-emerald-200' },
  { icon: <Briefcase />, title: 'Job Seekers', description: 'Upskill from low-growth roles to in-demand SQL careers', bg: 'bg-amber-50', iconColor: 'text-amber-700', border: 'border-amber-200' },
  { icon: <Target />, title: 'Developers', description: 'Add database design, indexing & optimization to your stack', bg: 'bg-violet-50', iconColor: 'text-violet-700', border: 'border-violet-200' },
];

export default function WhoShouldEnroll() {

  return (
    <section id="who-should-enroll" aria-labelledby="who-heading" className="relative py-10 bg-white">
      {/* subtle top/bottom separators for a sleek, slightly futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* header */}
        <header
          className="text-center mb-10 sm:mb-14"
        >
          <p className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
            <BadgeCheck className="h-4 w-4 text-emerald-600" />
            Beginner-friendly • No prior coding required
          </p>
          <h2 id="who-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Who Should <span className="text-ST">Enroll</span>?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Ideal for <strong>career switchers</strong>, <strong>fresh graduates</strong>, and <strong>developers</strong> who want
            practical expertise in <strong>MySQL</strong>, <strong>SQL querying</strong>, <strong>schema design</strong>, and <strong>performance optimization</strong>.
          </p>
        </header>

        {/* audience grid */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {audience.map((a, i) => (
            <div
              key={a.title}
            >
              <IconCard
                {...a}
                className="h-full hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300"
              />
            </div>
          ))}
        </div>

        {/* supportive SEO line */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          Learn the essentials—<strong>ER modeling</strong>, <strong>index strategies</strong>, <strong>transactions</strong>, and{' '}
          <strong>query optimization</strong>—to stand out for <strong>SQL Developer</strong>, <strong>Database Administrator</strong>,
          and <strong>Data Analyst</strong> roles.
        </p>

        {/* CTA */}
        <div
          className="mt-12 text-center"
        >
          <EnrollButton
            source="DBMS Course Page - Who Should Enroll Section - Enroll Now"
            courseName="MySQL DBMS"
            className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-indigo-600 bg-indigo-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
            ariaLabel="Start Your QA Journey"
          >
            Enroll Now<ArrowRight className="h-5 w-5" />
          </EnrollButton>
        </div>
      </div>

    </section>
  );
}
