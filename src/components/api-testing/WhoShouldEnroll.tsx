import { Users, GraduationCap, Briefcase, Target, BadgeCheck } from 'lucide-react';
import IconCard from '@/components/ui/IconCard';
import { JSX } from 'react';
import { ArrowRight } from 'lucide-react';
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
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Career Switchers',
    description: 'Non-IT pros. Learn what is API testing in software testing from scratch.',
    bg: 'bg-sky-50', iconColor: 'text-sky-700', border: 'border-sky-200',
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Fresh Graduates',
    description: 'B.Tech/BCA. Get job-ready with API testing javatpoint style easy learning + practicals.',
    bg: 'bg-emerald-50', iconColor: 'text-emerald-700', border: 'border-emerald-200',
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Job Seekers',
    description: 'Upskill with free API testing tools knowledge and commercial tool mastery.',
    bg: 'bg-violet-50', iconColor: 'text-violet-700', border: 'border-violet-200',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Manual Testers',
    description: 'Upgrade from manual to API automation testing.',
    bg: 'bg-amber-50', iconColor: 'text-amber-700', border: 'border-amber-200',
  },
];

export default function WhoShouldEnroll() {
  return (
    <section id="who-should-enroll" aria-labelledby="enroll-heading" className="relative py-10 bg-white">
      {/* subtle separators for a clean, slightly futuristic frame */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header
          className="text-center mb-10 sm:mb-14"
        >
          <p className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
            <BadgeCheck className="h-4 w-4 text-emerald-600" />
            Beginner-friendly • No coding required
          </p>
          <h2 id="enroll-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Who Is This <span className="text-ST">For</span>?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Ideal for <strong>career switchers</strong>, <strong>fresh graduates</strong>, <strong>job seekers</strong>, and
            <strong> manual testers</strong> aiming to master <strong>API testing</strong>, <strong>automation</strong>, and <strong>security</strong>.
          </p>
        </header>

        {/* Audience grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
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

        {/* SEO-supportive line */}
        <div className="mx-auto mt-10 max-w-4xl text-center">
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            Perfect for those asking "how to <strong>learn API testing</strong>?" or looking for a <strong>manual testing course with placement</strong> that includes API skills.
          </p>
        </div>
        {/* CTA */}
        <div
          className="mt-12 text-center"
        >
          <EnrollButton
            source="API Testing Course Page - Who Should Enroll Section - Enroll Now"
            courseName="API Testing"
            className="cursor-pointer inline-flex items-center gap-2 rounded-xl border border-indigo-600 bg-indigo-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-indigo-200"
            ariaLabel="Start Your QA Journey"
          >
            Enroll Now - Become a QA Tester <ArrowRight className="h-5 w-5" />
          </EnrollButton>
        </div>

      </div>
    </section>
  );
}
