// Mentors strip. Server Component (it had "use client" but no interactivity).
import Image from "next/image";
import clsx from "clsx";
import { Users, ShieldCheck, Brain, Bot, FlaskConical, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import React from "react";
import SectionHeader from "@/components/ui/SectionHeader";

type Mentor = {
  name: string;
  role: string;
  avatar: string;
  experience?: string; // "12+ yrs"
  tag?: "QA" | "Data" | "Automation" | "AI/ML";
  desc: string;
};

type Props = {
  className?: string;
  mentors?: Mentor[];
  heading?: React.ReactNode;
  subheading?: React.ReactNode;
  primaryCtaHref?: string;
};

const DEFAULT_MENTORS: Mentor[] = [
  { name: "Pravin Mhaske", role: "Data Science Manager at Infosys(India)", avatar: "/mentors_images/Pravin-Maske.jpg", experience: "12+ yrs", tag: "Data", desc: "Pravin Maske is a seasoned professional with over two decades of comprehensive experience in the realm of data science, analytics, and machine learning." },
  { name: "Piyali Mondal", role: "Program Leader | M.Sc (Data science AI & ML) at Exeed College (UAE)", avatar: "/mentors_images/Piyali-Mondal.jpg", experience: "10+ yrs", tag: "Data", desc: "Piyali Mondal is an accomplished academician, engineering professor, and Ph.D. scholar with a wealth of experience in the field." },
  { name: "Revathi Soundarrajan", role: "Data Scientist (PHD) at Electra vehicles (USA)", avatar: "/mentors_images/Revathi-Soundarrajan.jpg", experience: "11+ yrs", tag: "Automation", desc: "Dr. S. Revathi, an accomplished Data Scientist, brings over a decade of expertise in research, teaching, and practical application of machine learning across diverse domains." },
  { name: "Urvi Verma", role: "AVP – Data engineering at Deutsche bank (Germany)", avatar: "/mentors_images/Urvi-Verma.jpg", experience: "9+ yrs", tag: "AI/ML", desc: "I work as Data engineer in deutsche bank. I have experience with big data technologies, java, python, SQL and cloud services like AWS, GCP. I have experience of 5+ years in the industry." },
];

const TAG_ICONS = { QA: ShieldCheck, Data: FlaskConical, Automation: Users, "AI/ML": Bot } as const;

function slugify(input: string): string {
  return input.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function AboutFacultyStrip({
  className,
  mentors = DEFAULT_MENTORS,
  heading = (<>Learn from <span className="text-brand">Mentors</span></>),
  subheading = (<>Extensive hands-on experience across <strong>Software Testing</strong>, <strong>Automation</strong>, <strong>Data Science</strong> & <strong>AI/ML</strong>.</>),
  primaryCtaHref = "/mentors",
}: Props) {
  return (
    <section aria-labelledby="faculty-strip-title" className={clsx("bg-white py-12 lg:py-16", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          id="faculty-strip-title"
          pill={<><Sparkles className="h-4 w-4" aria-hidden="true" />Industry-Aligned Mentors</>}
          title={heading}
          intro={subheading}
        />

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2" aria-label="Mentors and faculty">
          {mentors.map((m) => {
            const id = slugify(m.name);
            const TagIcon = (m.tag && TAG_ICONS[m.tag]) || Brain;
            return (
              <li key={m.name}>
                <article className="flex h-full flex-col items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:shadow-lg sm:flex-row sm:items-start">
                  <figure className="relative h-36 w-36 shrink-0 overflow-hidden rounded-2xl bg-slate-100 ring-4 ring-orange-50" aria-labelledby={`${id}-name`} aria-describedby={`${id}-role`}>
                    <Image
                      src={m.avatar}
                      alt={`${m.name}, ${m.role}`}
                      title={`${m.name}, ${m.role}`}
                      fill
                      sizes="144px"
                      className="object-cover"
                    />
                  </figure>

                  <div className="min-w-0 text-center sm:text-left">
                    <h3 id={`${id}-name`} className="text-lg font-bold text-gray-900">{m.name}</h3>
                    <p id={`${id}-role`} className="mt-0.5 text-sm text-slate-600">
                      {m.role}
                      {m.experience && <> · <span className="font-semibold text-brand">{m.experience}</span></>}
                    </p>
                    {m.tag && (
                      <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-semibold text-brand">
                        <TagIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        {m.tag}
                      </span>
                    )}
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">{m.desc}</p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <div className="mt-10 flex justify-center">
          <Link
            href={primaryCtaHref}
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Meet the Mentors
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <p className="sr-only">
        Expert mentors with real-world experience in Software Testing, Automation Testing, API Testing, Data Science, and
        AI/ML lead our job-ready, industry-aligned training with portfolio-first projects and interview preparation.
      </p>
    </section>
  );
}
