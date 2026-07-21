import { Shield, Zap, Target, TrendingUp, Globe, Lock, CheckCircle2 } from 'lucide-react';
import IconCard from '@/components/ui/IconCard';



export default function WhyApiTesting() {


  return (
    <section id="why" aria-labelledby="why-heading" className="relative py-10">
      {/* Subtle, light backdrop (no heavy gradients) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading / Intro */}
        <header
          className="mx-auto mb-10 text-center sm:mb-14"
        >
          <p className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            Industry-Relevant • Job-Ready • 2025
          </p>

          <h2 id="why-heading" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Why Master <span className="text-ST">API Testing</span> in 2026?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            <strong>What is API testing in software testing?</strong> It is the backbone of modern applications. With <strong>online API testing</strong> becoming critical for banking and e-commerce, <strong>API checker</strong> roles and <strong>API automation testing</strong> experts are in high demand.
          </p>

          {/* Quick proof points */}
          <ul className="mx-auto mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-3 text-sm text-slate-700">
            <li className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1">
              <TrendingUp className="h-4 w-4 text-emerald-700" /> 25% CAGR (2020–2030)
            </li>
            <li className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1">
              <Shield className="h-4 w-4 text-amber-700" /> Security-first QA
            </li>
            <li className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1">
              <Zap className="h-4 w-4 text-sky-700" /> Faster releases
            </li>
          </ul>
        </header>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Shield className="w-6 h-6" />,
              title: 'Secure APIs = Trusted Apps',
              description: 'Validate authentication, encryption, and prevent data leaks. Learn api testing methods to block OWASP vulnerabilities.',
              bg: 'bg-emerald-500', iconColor: 'text-emerald-700', border: 'border-emerald-200',
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: 'Catch Bugs Early',
              description: 'Find integration issues 10× faster than UI tests. Master how to do api testing to save cost and time.',
              bg: 'bg-amber-500', iconColor: 'text-amber-700', border: 'border-amber-200',
            },
            {
              icon: <Target className="w-6 h-6" />,
              title: 'Ensure 100% Functionality',
              description: 'Verify endpoints and schemas. Use public api for testing scenarios to practice test api post request workflows.',
              bg: 'bg-violet-500', iconColor: 'text-violet-700', border: 'border-violet-200',
            },
            {
              icon: <TrendingUp className="w-6 h-6" />,
              title: 'High-Demand Skill',
              description: 'API testing tools expertise earns you 20–30% more. Future-proof your career in API automation.',
              bg: 'bg-sky-500', iconColor: 'text-sky-700', border: 'border-sky-200',
            },
            {
              icon: <Globe className="w-6 h-6" />,
              title: 'Backbone of Modern Tech',
              description: 'Everything runs on APIs. From rest api example validation to diverse api testing examples, be the quality gatekeeper.',
              bg: 'bg-cyan-500', iconColor: 'text-cyan-700', border: 'border-cyan-200',
            },
            {
              icon: <Lock className="w-6 h-6" />,
              title: 'OWASP & Compliance Ready',
              description: 'Test for rate limits and SQLi. Understand api testing means security first with OAuth2/JWT.',
              bg: 'bg-rose-500', iconColor: 'text-rose-700', border: 'border-rose-200',
            },
          ].map((b, i) => (
            <div
              key={b.title}
            >
              <IconCard
                {...b}
                className="hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300"
              />
            </div>
          ))}
        </div>

        {/* SEO-supportive paragraph */}
        <div className="mx-auto mt-10 max-w-4xl text-center">
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Learn <strong>API automation</strong>, <strong>schema validation</strong>, <strong>contract testing</strong>, <strong>CI/CD integration</strong>, and
            <strong> OWASP API security</strong> to deliver reliable services. Become the quality gatekeeper for microservices, mobile backends, and cloud-native apps.
          </p>
        </div>
      </div>

    </section>
  );
}
