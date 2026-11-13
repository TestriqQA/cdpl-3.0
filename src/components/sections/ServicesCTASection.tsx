// src/components/sections/ServicesCTASection.tsx
// Same orange band as the Careers, Placements and Our Team closing CTAs, with
// the services actions: consultation request and a scroll back to programs.
"use client";

import { useCallback, useState } from "react";
import { ArrowRight, CircleCheck } from "lucide-react";
import WorkshopRequestModal from "../WorkshopRequestModal";
import { SiteStat } from "@/components/stats/SiteStatsProvider";

export default function ServicesCTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollToGrid = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById("services-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const proof = [
    { key: "events", content: "150+ partner events" },
    { key: "schedule", content: "On-site, remote or hybrid" },
    {
      key: "rating",
      content: (
        <>
          <SiteStat k="rating" /> average rating
        </>
      ),
    },
  ];

  return (
    <section aria-labelledby="services-cta-heading" className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 px-6 py-10 text-white shadow-lg sm:px-10 lg:py-12">
        <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-amber-300/20 blur-2xl" />

        <div className="relative flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <h2 id="services-cta-heading" className="text-2xl font-bold sm:text-3xl">
              Ready to transform your teams with job-ready skills?
            </h2>
            <p className="mt-3 text-white/90">
              Tailored programs in Software Testing, Automation, Data Science, and AI/ML. We handle content, labs,
              assessments, and outcomes, so you get <span className="font-semibold text-white">measurable impact</span>.
            </p>
            <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-medium text-white/95 lg:justify-start">
              {proof.map(({ key, content }) => (
                <li key={key} className="inline-flex items-center gap-1.5">
                  <CircleCheck className="h-4 w-4" aria-hidden="true" />
                  {content}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex shrink-0 flex-col items-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-orange-600 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Schedule a Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={scrollToGrid}
              className="inline-flex cursor-pointer items-center rounded-xl border-2 border-white/80 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Programs
            </button>
          </div>
        </div>
      </div>

      <WorkshopRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        source="Services Page - CTA Section"
        title="Schedule a Consultation"
        subtitle="Tailored guidance for your organization"
      />
    </section>
  );
}
