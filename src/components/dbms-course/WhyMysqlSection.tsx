import { Shield, Zap, Database, Globe, Lock, TrendingUp, BadgeCheck } from 'lucide-react';
import IconCard from '../ui/IconCard';
import { JSX } from 'react';

type Benefit = {
  icon: JSX.Element;
  title: string;
  description: string;
  bg: string;
  iconColor: string;
  border: string;
};

const benefits: Benefit[] = [
  { icon: <Database />, title: 'Powers Modern Platforms', description: 'Run product catalogs, user data & analytics on proven MySQL engines.', bg: 'bg-sky-50', iconColor: 'text-sky-700', border: 'border-sky-200' },
  { icon: <Zap />, title: 'Optimized Query Speed', description: 'Master indexing, EXPLAIN plans, caching, and query optimization.', bg: 'bg-amber-50', iconColor: 'text-amber-700', border: 'border-amber-200' },
  { icon: <Shield />, title: 'Secure & Compliant', description: 'Built-in encryption, RBAC, auditing—supports GDPR & HIPAA controls.', bg: 'bg-emerald-50', iconColor: 'text-emerald-700', border: 'border-emerald-200' },
  { icon: <Globe />, title: 'Scales to Millions', description: 'Replication, clustering, and sharding for high-traffic apps.', bg: 'bg-violet-50', iconColor: 'text-violet-700', border: 'border-violet-200' },
  { icon: <Lock />, title: 'ACID Transactions', description: 'Guarantee data integrity with InnoDB isolation & recovery.', bg: 'bg-indigo-50', iconColor: 'text-indigo-700', border: 'border-indigo-200' },
  { icon: <TrendingUp />, title: 'High-Demand Skill', description: 'Top hiring keyword across QA, Data, Backend & DevOps roles.', bg: 'bg-rose-50', iconColor: 'text-rose-700', border: 'border-rose-200' },
];

export default function WhyMysqlSection() {


  return (
    <section id="why-mysql" aria-labelledby="why-mysql-heading" className="relative py-10 bg-white">
      {/* subtle separators for a clean, slightly futuristic frame */}
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
            Beginner-friendly • Industry-relevant
          </p>
          <h2 id="why-mysql-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            Why Master <span className="text-ST">MySQL</span> in 2025?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-3xl mx-auto">
            Build production-ready skills for <strong>backend engineering</strong>, <strong>QA automation</strong>,{' '}
            <strong>data analysis</strong>, and <strong>DevOps</strong> using a battle-tested, high-performance relational database.
          </p>
        </header>

        {/* benefits grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={b.title}
            >
              <IconCard
                {...b}
                className="h-full hover:shadow-md focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300"
              />
            </div>
          ))}
        </div>

        {/* supportive SEO line */}
        <div className="mx-auto mt-10 max-w-4xl text-center">
          <p className="text-sm sm:text-base leading-relaxed text-slate-600">
            Learn <strong>schema design</strong>, <strong>index strategies</strong>, <strong>query optimization</strong>,{' '}
            <strong>replication & backups</strong>, and <strong>security hardening</strong> to stand out for{' '}
            <strong>Database Developer</strong>, <strong>Backend Engineer</strong>, and <strong>Data Analyst</strong> roles.
          </p>
        </div>
      </div>

    </section>
  );
}
