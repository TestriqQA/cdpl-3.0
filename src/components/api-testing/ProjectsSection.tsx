import { Shield, Database, Smartphone, CheckCircle, Github } from 'lucide-react';
import { JSX } from 'react';
import Link from 'next/link';

type Project = {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  bg: string;
  border: string;
  ink: string;
  chip: string;
  iconTint: string;
};

const projects: Project[] = [
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: 'Contact List CRUD API',
    description:
      'Full-stack contact manager with user authentication, request validation, and country-wise filtering for modern micro-frontends.',
    features: ['JWT Authentication', 'CRUD Operations', 'Data Validation', 'Robust Error Handling'],
    bg: 'bg-sky-50',
    border: 'border-sky-200',
    ink: 'text-sky-900',
    chip: 'bg-sky-100 text-sky-800 border-sky-200',
    iconTint: 'text-sky-700',
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'OWASP Juice Shop Security Testing',
    description:
      'Hands-on security testing lab using a deliberately vulnerable app to practice OWASP API Top-10 attack detection and prevention.',
    features: ['SQL Injection', 'XSS Testing', 'Broken Auth', 'Rate Limiting'],
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    ink: 'text-amber-900',
    chip: 'bg-amber-100 text-amber-800 border-amber-200',
    iconTint: 'text-amber-700',
  },
  {
    icon: <Database className="w-7 h-7" />,
    title: 'Employee Management System',
    description:
      'Enterprise-grade HR API with role-based access control, pagination, and searchable audit logs for compliance-ready workflows.',
    features: ['RBAC Testing', 'Pagination', 'Search & Filter', 'Audit Trail'],
    bg: 'bg-violet-50',
    border: 'border-violet-200',
    ink: 'text-violet-900',
    chip: 'bg-violet-100 text-violet-800 border-violet-200',
    iconTint: 'text-violet-700',
  },
];

export default function ProjectsSection() {


  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative py-10 bg-white">
      {/* subtle frame lines for a futuristic feel */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <header
          className="text-center mb-10 sm:mb-14"
        >
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Build Your <span className='text-ST'>Portfolio</span> with <span className='text-ST'>Real Projects</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Don't just <strong>learn API testing</strong> theory. Execute <strong>API testing examples</strong> on live apps. Practice <strong>api testing means</strong> delivering bug-free code with these capstones.
          </p>
        </header>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={[
                'group relative overflow-hidden rounded-2xl border shadow-[0_1px_0_0_rgba(15,23,42,0.05)] transition hover:shadow-md focus-within:ring-2 focus-within:ring-slate-300',
                p.bg,
                p.border,
              ].join(' ')}
              aria-label={p.title}
            >
              {/* top content */}
              <div className="p-6 sm:p-7">
                {/* icon + chips */}
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div
                    className={[
                      'grid h-12 w-12 place-items-center rounded-xl border bg-white shadow-sm',
                      p.border,
                      p.iconTint,
                    ].join(' ')}
                    aria-hidden="true"
                  >
                    {p.icon}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {/* stack chips */}
                    <span className={['inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium', p.chip].join(' ')}>
                      Postman
                    </span>
                    <span className={['inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium', p.chip].join(' ')}>
                      REST
                    </span>
                    <span className={['inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium', p.chip].join(' ')}>
                      CI/CD
                    </span>
                  </div>
                </div>

                <h3 className={['text-xl font-semibold leading-tight', p.ink].join(' ')}>{p.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{p.description}</p>

                <ul className="mt-4 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-700 text-sm">
                      <CheckCircle className={['mt-0.5 h-4 w-4 flex-shrink-0', p.iconTint].join(' ')} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* card footer actions */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact-us"
                    title="Contact us to learn more about projects"
                    className={[
                      'inline-flex items-center justify-center gap-2 rounded-xl border bg-white px-4 py-2 text-sm font-semibold shadow-sm transition hover:bg-slate-50 focus:outline-none',
                      p.border,
                      p.ink,
                    ].join(' ')}
                    aria-label={`View ${p.title} on GitHub`}
                  >
                    <Github className="h-4 w-4" />
                    GitHub Sample
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* SEO-supportive copy */}
        <div className="mx-auto mt-10 max-w-4xl text-center">
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            These portfolio projects demonstrate <strong>API automation</strong>, <strong>schema validation</strong>, <strong>contract testing</strong>, and
            <strong> security best practices</strong>. Showcase measurable outcomes—coverage reports, response time trends, and CI/CD pipelines—to stand out for
            <strong> QA Engineer</strong> and <strong>Automation Tester</strong> roles.
          </p>
        </div>
      </div>


    </section>
  );
}
