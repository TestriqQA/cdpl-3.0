import EnrollButton from "@/components/course-islands/EnrollButton";
import SyllabusButton from "@/components/course-islands/SyllabusButton";

type Brand = {
  name: string;
  src: string;
  alt: string;
};

const BRANDS: Brand[] = [
  { name: "TCS", src: "/tcs-logo.png", alt: "Tata Consultancy Services (TCS) logo" },
  { name: "Infosys", src: "/infosys-logo.png", alt: "Infosys logo" },
  { name: "Wipro", src: "/wipro-logo.png", alt: "Wipro logo" },
  { name: "Cognizant", src: "/cognizant-logo.png", alt: "Cognizant logo" },
  { name: "Accenture", src: "/accenture-logo.png", alt: "Accenture logo" },
  { name: "Capgemini", src: "/capgemini-logo.png", alt: "Capgemini logo" },
  { name: "HCLTech", src: "/hcl-logo.png", alt: "HCLTech logo" },
  { name: "IBM", src: "/ibm-logo.png", alt: "IBM logo" },
];

// Unique accent palette per card (no repeats)
const ACCENTS = [
  { border: "border-violet-200", text: "text-violet-700", ring: "focus:ring-violet-300", chip: "bg-violet-50" },
  { border: "border-emerald-200", text: "text-emerald-700", ring: "focus:ring-emerald-300", chip: "bg-emerald-50" },
  { border: "border-amber-200", text: "text-amber-700", ring: "focus:ring-amber-300", chip: "bg-amber-50" },
  { border: "border-sky-200", text: "text-sky-700", ring: "focus:ring-sky-300", chip: "bg-sky-50" },
  { border: "border-rose-200", text: "text-rose-700", ring: "focus:ring-rose-300", chip: "bg-rose-50" },
  { border: "border-indigo-200", text: "text-indigo-700", ring: "focus:ring-indigo-300", chip: "bg-indigo-50" },
  { border: "border-teal-200", text: "text-teal-700", ring: "focus:ring-teal-300", chip: "bg-teal-50" },
  { border: "border-fuchsia-200", text: "text-fuchsia-700", ring: "focus:ring-fuchsia-300", chip: "bg-fuchsia-50" },
];

export default function CareerSection() {
  const seoKeywords =
    "ai jobs india, data science jobs, machine learning hiring companies, top companies hiring ai, fresher data analyst jobs, ml engineer roles india, analytics careers, generative ai jobs, python data science careers";


  return (
    <section
      id="careers"
      aria-labelledby="career-heading"
      className="relative py-10 bg-white"
    >
      {/* Subtle futuristic backdrop (fine grid + soft glow; no loud gradients) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,6,23,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.035)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute inset-x-0 top-0 h-[110px] bg-[radial-gradient(700px_140px_at_50%_0%,rgba(99,102,241,0.08),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <header className="mx-auto max-w-4xl">
          <h2
            id="career-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900"
          >
            Top Companies Hiring <span className="text-DS">AI Professionals</span>
          </h2>

          {/* KPI headline */}
          <div className="mt-4 inline-flex items-baseline gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-2 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] backdrop-blur">
            <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-indigo-700">50K+</span>
            <span className="text-sm md:text-base font-semibold text-slate-700">Open Roles in India</span>
          </div>

          <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
            Careers across <strong>Artificial Intelligence</strong>, <strong>Data Science</strong>,{" "}
            <strong>Machine Learning</strong>, <strong>NLP</strong>, and <strong>Generative AI</strong> - from{" "}
            <strong>Data Analyst</strong> to <strong>ML Engineer</strong> and <strong>Applied Scientist</strong>.
          </p>
          {/* SEO helper (visually hidden) */}
          <p className="sr-only">{seoKeywords}</p>

          {/* role chips */}
          <ul
            aria-label="Popular AI job titles"
            className="mx-auto mt-6 flex max-w-3xl flex-wrap justify-center gap-2"
          >
            {["Data Analyst", "Machine Learning Engineer", "Data Scientist", "MLOps Engineer", "NLP Engineer", "GenAI Engineer"].map(
              (role, idx) => {
                const acc = ACCENTS[idx % ACCENTS.length];
                return (
                  <li key={role}>
                    <span
                      className={[
                        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium text-slate-900",
                        acc.border,
                        acc.chip,
                      ].join(" ")}
                    >
                      {role}
                    </span>
                  </li>
                );
              }
            )}
          </ul>
        </header>

        {/* Logo grid */}
        <div
          role="list"
          aria-label="Companies hiring AI & Data professionals"
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto"
        >
          {BRANDS.map((b, i) => {
            const acc = ACCENTS[i % ACCENTS.length];
            return (
              <div
                key={b.name}
                role="listitem"
                tabIndex={0}
                aria-label={b.name}
                className={[
                  "group relative rounded-2xl border bg-white p-4 sm:p-5 shadow-sm transition-all duration-200",
                  "hover:-translate-y-0.5 hover:shadow-md focus-visible:-translate-y-0.5",
                  acc.border,
                  acc.ring,
                  "focus:outline-none focus:ring-2",
                ].join(" ")}
              >
                {/* top accent bar */}
                <div className="absolute left-0 right-0 top-0 h-1 rounded-t-2xl bg-white/70" aria-hidden />
                {/* <div className="flex h-16 sm:h-20 items-center justify-center">
                  <Image
                    src={b.src}
                    alt={b.alt}
                    width={100}
                    height={100}
                    className="max-h-10 sm:max-h-12 w-auto object-contain opacity-90 transition group-hover:opacity-100"
                    loading="lazy"
                  />
                </div> */}
                <div className="mt-3 text-xs font-semibold tracking-wide text-slate-600">
                  Trusted Employer • <span className={acc.text}>{b.name}</span>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-sm md:text-base text-slate-600">…and many more leading product & services companies.</p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <EnrollButton
            source="Generative AI Course Page - Career Section - Placement Assistance"
            courseName="Master Program in Deep Learning, NLP & Generative AI"
            className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-[#7E22CE] bg-[#7E22CE] px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-[#6b21a8] hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-purple-200"
          >
            Apply for Placement Assistance
          </EnrollButton>
          <SyllabusButton
            source="Generative AI Course Page - Career Section - Generative AI - Download Syllabus"
            courseName="Master Program in Deep Learning, NLP & Generative AI"
            className="inline-flex items-center justify-center cursor-pointer rounded-xl border border-slate-300 bg-white px-8 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-purple-200"
          >
            Download Syllabus
          </SyllabusButton>
        </div>
      </div>

    </section>
  );
}
