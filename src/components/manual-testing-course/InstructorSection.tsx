"use client";

import { LuBadgeCheck, LuUsers, LuBuilding, LuBookOpenCheck, LuShieldCheck, LuSparkles, LuClock, LuAward, LuThumbsUp, LuQuote } from "react-icons/lu";
import Link from "next/link";
import { useMemo } from "react";

/* ==================== Types ==================== */
type Accent =
  | "indigo"
  | "cyan"
  | "emerald"
  | "amber"
  | "rose"
  | "slate"
  | "purple";

interface StatProps {
  label: string;
  value: string;
  sublabel?: string;
  accent?: Accent;
}
interface FeatureProps {
  text: string;
  icon?: React.ReactNode;
}
interface BadgeProps {
  text: string;
  accent?: Accent;
}
interface ReviewProps {
  quote: string;
  name: string;
  role: string;
}

/* ==================== Helpers ==================== */
const accentMap: Record<Accent, string> = {
  indigo: "text-indigo-700 bg-indigo-50 ring-indigo-100",
  cyan: "text-cyan-700 bg-cyan-50 ring-cyan-100",
  emerald: "text-emerald-700 bg-emerald-50 ring-emerald-100",
  amber: "text-amber-700 bg-amber-50 ring-amber-100",
  rose: "text-rose-700 bg-rose-50 ring-rose-100",
  slate: "text-slate-700 bg-slate-50 ring-slate-100",
  purple: "text-purple-700 bg-purple-50 ring-purple-100"
};

/* ==================== Small UI Primitives ==================== */
const Stat: React.FC<StatProps> = ({ label, value, sublabel, accent = "indigo" }) => {
  const classes = accentMap[accent];
  return (
    <div className={`rounded-2xl ${classes} ring-1 p-5 shadow-sm`}>
      <p className="text-3xl font-extrabold leading-none">{value}</p>
      <p className="mt-1 text-sm font-medium">{label}</p>
      {sublabel ? <p className="mt-0.5 text-xs opacity-80">{sublabel}</p> : null}
    </div>
  );
};

const InstructorFeature: React.FC<FeatureProps> = ({ text, icon }) => (
  <li className="flex items-start gap-3">
    <span className="mt-0.5 inline-flex rounded-full bg-emerald-50 p-1.5 ring-1 ring-emerald-100">
      {icon ?? <LuBadgeCheck className="h-4 w-4 text-emerald-600" aria-hidden="true" />}
    </span>
    <span className="text-sm md:text-base text-slate-700">{text}</span>
  </li>
);

const Badge: React.FC<BadgeProps> = ({ text, accent = "slate" }) => {
  const classes = useMemo(() => {
    const m: Record<Accent, string> = {
      indigo: "bg-indigo-50 text-indigo-700 ring-indigo-100 py-2 text-[13px] shadow-md",
      cyan: "bg-cyan-50 text-cyan-700 ring-cyan-100",
      emerald: "bg-emerald-50 text-emerald-700 ring-emerald-100",
      amber: "bg-amber-50 text-amber-700 ring-amber-100",
      rose: "bg-rose-50 text-rose-700 ring-rose-100",
      slate: "bg-slate-50 text-slate-700 ring-slate-100",
      purple: "bg-purple-50 text-purple-700 ring-purple-100"
    };
    return m[accent];
  }, [accent]);

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ${classes}`}>
      {text}
    </span>
  );
};

const ReviewCard: React.FC<ReviewProps> = ({ quote, name, role }) => (
  <figure className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm p-5">
    <div className="flex items-center gap-2 text-amber-500">
      <LuQuote className="h-4 w-4" aria-hidden="true" />
      <span className="text-xs font-semibold tracking-wide uppercase">Verified Review</span>
    </div>
    <blockquote className="mt-3 text-slate-700 italic">“{quote}”</blockquote>
    <figcaption className="mt-4">
      <p className="text-sm font-semibold text-slate-900">{name}</p>
      <p className="text-xs text-slate-600">{role}</p>
    </figcaption>
  </figure>
);

/* ==================== Instructor Section ==================== */
export default function InstructorSection() {


  return (
    <section
      id="instructor"
      className="py-10 bg-white"
      aria-label="Learn from Industry Leaders"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <Badge text="Mentor-Led Learning" accent="indigo" />
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">
            Learn from <span className="text-blue-700">Industry Leaders</span>
          </h2>
          <p className="mt-3 text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            ISTQB-certified <strong>QA expert</strong> with <strong>15+ years</strong> in Fortune 500 teams.
            Practical <strong>manual & automation testing</strong>, <strong>real projects</strong>, and
            <strong> job-ready skills</strong> that rank for <em>“best software testing course with placement”</em>.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-xl p-6 md:p-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            {/* Left: Copy + Features */}
            <div>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center">
                  <span className="text-lg font-extrabold text-slate-800" itemProp="name">RS</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900" itemProp="employee">
                    <span itemProp="name">Rajesh Sharma</span>
                  </h3>
                  <p className="text-sm font-medium text-indigo-700">Lead QA Instructor • ISTQB Advanced</p>
                </div>
              </div>

              <p className="mt-5 text-slate-700">
                Rajesh has led <strong>end-to-end testing</strong> for enterprise apps at Microsoft, Amazon, and Google,
                coaching teams on <strong>Agile QA</strong>, <strong>API testing</strong>, and <strong>test automation strategy</strong>.
                His mentorship focuses on <strong>hands-on learning</strong>, <strong>interview preparation</strong>,
                and <strong>career acceleration</strong>—built for searchers of “<em>job oriented software testing course</em>”.
              </p>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge text="ISTQB Certified" accent="emerald" />
                <Badge text="Fortune 500 Experience" accent="amber" />
                <Badge text="Placement Support" accent="cyan" />
                <Badge text="Interview Prep" accent="rose" />
                <Badge text="Live Doubt Solving" accent="purple" />
              </div>

              {/* Features */}
              <ul className="mt-8 grid sm:grid-cols-2 gap-4">
                <InstructorFeature text="15+ Years in Quality Assurance" icon={<LuClock className="h-4 w-4 text-emerald-600" />} />
                <InstructorFeature text="Trained 3,000+ Testers with 95% Placement" icon={<LuUsers className="h-4 w-4 text-emerald-600" />} />
                <InstructorFeature text="ISTQB Advanced Test Manager" icon={<LuAward className="h-4 w-4 text-emerald-600" />} />
                <InstructorFeature text="Automation & API Testing Expertise" icon={<LuBookOpenCheck className="h-4 w-4 text-emerald-600" />} />
                <InstructorFeature text="SDET Mindset & Test Strategy" icon={<LuShieldCheck className="h-4 w-4 text-emerald-600" />} />
                <InstructorFeature text="Real-World Projects from E-com to FinTech" icon={<LuBuilding className="h-4 w-4 text-emerald-600" />} />
              </ul>

              {/* CTA */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="contact-us"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold ring-1 ring-slate-300 text-slate-800 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300"
                >
                  Book a Free Demo
                </Link>
                <div className="inline-flex items-center gap-2 text-sm text-slate-600">
                  <LuThumbsUp className="h-4 w-4 text-emerald-600" />
                  <span>100% Live Mentor Support</span>
                </div>
              </div>
            </div>

            {/* Right: Stats + Video + Logos + Reviews */}
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid justify-center md:grid-cols-2 gap-4">
                <Stat label="Students Trained" value="5,000+" sublabel="Across 12 countries" accent="indigo" />
                <Stat label="Placement Rate" value="92%" sublabel="Interview prep + referrals" accent="emerald" />
                <Stat label="Avg. Salary Hike" value="1.5×" sublabel="After course completion" accent="amber" />
                <Stat label="Industry Projects" value="10+" sublabel="E-com • BFSI • HealthTech" accent="cyan" />
              </div>

              {/* Short Intro Video (placeholder thumbnail) */}
              {/* <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200 bg-slate-50">
                <button
                  type="button"
                  className="group w-full text-left"
                  aria-label="Play instructor introduction video"
                >
                  <div className="aspect-video relative">
                    <Image
                      src="/images/instructor/intro-thumb.jpg"
                      alt="Instructor introduction preview"
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 480px, 100vw"
                      priority={false}
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold ring-1 ring-slate-200 shadow-sm">
                        <Video className="h-4 w-4 text-slate-900" />
                        Watch 90s Intro
                      </span>
                    </span>
                  </div>
                </button>
              </div> */}

              {/* Certifications / Logos */}
              {/* <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-4">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-3">
                  Certifications & Associations
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Logo src="/logos/istqb.svg" alt="ISTQB Certified Tester" />
                  <Logo src="/logos/scrum-alliance.svg" alt="Scrum Alliance" />
                  <Logo src="/logos/aws.svg" alt="AWS Projects Exposure" />
                  <Logo src="/logos/postman.svg" alt="Postman API Expert" />
                  <Logo src="/logos/selenium.svg" alt="Selenium Automation" />
                </div>
              </div> */}

              {/* Reviews */}
              <div className="grid sm:grid-cols-2 gap-4">
                <ReviewCard
                  quote="The live projects and feedback helped me crack my first QA role within 6 weeks."
                  name="Aditi P."
                  role="QA Analyst, FinTech"
                />
                <ReviewCard
                  quote="Crystal-clear explanations of API testing and strategy. The mock interviews are gold."
                  name="Rahul S."
                  role="SDET, E-commerce"
                />
              </div>

              {/* Social proof banner */}
              <div className="flex items-center w-fit justify-between gap-3 rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4">
                <div className="flex items-center gap-2">
                  <LuSparkles className="h-4 w-4 text-rose-600" />
                  <p className="text-sm font-semibold text-slate-800">
                    Top-Rated QA Mentor • 4.8/5
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom SEO Rich Text (subtle, readable) */}
        <div className="mt-10 text-center">
          <p className="text-sm text-slate-600 max-w-5xl mx-auto">
            Looking for the <strong>best software testing course with placement</strong> led by an{" "}
            <strong>industry expert mentor</strong>? Our <strong>manual testing</strong> and{" "}
            <strong>automation testing</strong> program includes <strong>API testing with Postman</strong>,
            <strong> Selenium</strong>, real <strong>Agile projects</strong>, and <strong>interview preparation</strong>—designed to help you
            <strong> get hired faster</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
