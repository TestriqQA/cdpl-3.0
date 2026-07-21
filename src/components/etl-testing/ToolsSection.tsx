import { Database, FileText, Terminal, Shuffle, Zap, Shield, BadgeCheck } from 'lucide-react';
import { JSX } from 'react';

type Tool = {
  name: string;
  icon: JSX.Element;
  color: string; // gradient for icon chip only
};

const tools: Tool[] = [
  { name: 'SQL Developer', icon: <Database />, color: 'from-blue-400 to-cyan-500' },
  { name: 'Informatica', icon: <Shuffle />, color: 'from-purple-400 to-pink-500' },
  { name: 'Talend', icon: <Terminal />, color: 'from-green-400 to-emerald-500' },
  { name: 'Datastage', icon: <FileText />, color: 'from-indigo-400 to-blue-500' },
  { name: 'SSIS', icon: <Zap />, color: 'from-yellow-400 to-amber-500' },
  { name: 'Control-M', icon: <Shield />, color: 'from-red-500 to-rose-600' },
];

// Distinct, non-repeating, light accents per card (no heavy gradients)
const accents = [
  { card: 'bg-sky-50 border-sky-200', text: 'text-slate-900', chipRing: 'ring-sky-200' },
  { card: 'bg-emerald-50 border-emerald-200', text: 'text-slate-900', chipRing: 'ring-emerald-200' },
  { card: 'bg-amber-50 border-amber-200', text: 'text-slate-900', chipRing: 'ring-amber-200' },
  { card: 'bg-violet-50 border-violet-200', text: 'text-slate-900', chipRing: 'ring-violet-200' },
  { card: 'bg-rose-50 border-rose-200', text: 'text-slate-900', chipRing: 'ring-rose-200' },
  { card: 'bg-indigo-50 border-indigo-200', text: 'text-slate-900', chipRing: 'ring-indigo-200' },
];

export default function ToolsSection() {


  return (
    <section id="tools" aria-labelledby="tools-heading" className="relative py-10 bg-white">
      {/* subtle separators for a sleek, slightly futuristic frame */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-slate-100" />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-px max-w-7xl bg-slate-100" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header
          className="text-center mb-10 sm:mb-14"
        >
          <p className="mx-auto mb-3 inline-flex items-center shadow-md gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700">
            <BadgeCheck className="h-4 w-4 text-emerald-600" />
            Enterprise-grade stack • Job-ready workflows
          </p>
          <h2 id="tools-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            <span className='text-ST'>Tools</span> You’ll Master
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Learn the <strong>ETL & orchestration</strong> platforms used across data teams—hands-on, project-driven, and hiring manager approved.
          </p>
        </header>

        {/* Tools grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-6">
          {tools.map((tool, i) => {
            const a = accents[i % accents.length];
            return (
              <div
                key={tool.name}
              >
                <article
                  className={[
                    'h-full rounded-2xl border p-4 sm:p-5 text-center',
                    a.card,
                    'shadow-[0_1px_0_0_rgba(15,23,42,0.05)] hover:shadow-md transition',
                    'focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-300',
                  ].join(' ')}
                >
                  {/* Icon chip with a sleek gradient, no extra outer gradient blocks */}
                  <div
                    className={[
                      'mx-auto mb-4 grid h-16 w-16 place-items-center rounded-xl text-white',
                      'bg-gradient-to-br',
                      tool.color,
                      'ring-2', a.chipRing,
                    ].join(' ')}
                    aria-hidden="true"
                  >
                    {tool.icon}
                  </div>

                  <h3 className={['text-sm font-semibold', a.text ?? 'text-slate-900'].join(' ')}>
                    {tool.name}
                  </h3>

                  {/* microcopy for SEO & clarity */}
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Practice real <strong>ETL jobs</strong>, <strong>reconciliation checks</strong>, and <strong>schedule automation</strong>.
                  </p>

                  {/* invisible focus target for keyboard users */}
                  <span className="absolute inset-0 rounded-2xl" tabIndex={0} />
                </article>
              </div>
            );
          })}
        </div>

        {/* SEO supportive line */}
        <p className="mx-auto mt-8 max-w-4xl text-center text-sm sm:text-base text-slate-600">
          Apply each tool to <strong>data quality rules</strong>, <strong>job orchestration</strong>, and{' '}
          <strong>audit-ready reporting</strong> so your pipelines are reliable, observable, and production-ready.
        </p>
      </div>

    </section>
  );
}
