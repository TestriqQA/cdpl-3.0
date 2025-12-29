// components/sections/EventsPastEventsCTASection.tsx
"use client";

import { PropsWithChildren, useState } from "react";
import { Check, Building2, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
const WorkshopRequestModal = dynamic(() => import("@/components/WorkshopRequestModal"), { ssr: false });

type Bullet = { label: string; sub?: string };

const CARD_GRADS = [
  "from-sky-50 via-cyan-50 to-emerald-50",
  "from-fuchsia-50 via-rose-50 to-amber-50",
  "from-indigo-50 via-violet-50 to-pink-50",
] as const;

const EDGE_RINGS = ["ring-sky-200", "ring-rose-200", "ring-violet-200"] as const;

const STAT_NUMBER_GRADS = [
  "from-sky-600 via-cyan-600 to-emerald-600",
  "from-amber-600 via-orange-600 to-rose-600",
  "from-indigo-600 via-violet-600 to-fuchsia-600",
] as const;

export default function EventsPastEventsCTASection({
  title = "Want Similar Training for Your Organization?",
  subtitle = "We’ll tailor any of these programs for your team, hands-on, outcomes-driven, delivered on your schedule.",
  bullets = [
    { label: "Customized curriculum", sub: "Mapped to your tools, workflows & KPIs" },
    { label: "Real project labs", sub: "Scenarios from your domain for faster transfer" },
    { label: "Reporting & outcomes", sub: "Pre/post assessments with skill deltas" },
  ],
  badges = ["On-site", "Virtual", "Hybrid"],
  children,
}: PropsWithChildren<{
  title?: string;
  subtitle?: string;
  bullets?: Bullet[];
  badges?: string[];
}>) {
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    variant: 'workshop' | 'service' | 'general' | 'consultation';
    title: string;
    subtitle: string;
    source: string;
  }>({
    isOpen: false,
    variant: 'workshop',
    title: '',
    subtitle: '',
    source: '',
  });

  const openModal = (variant: 'workshop' | 'consultation', title: string, subtitle: string, source: string) => {
    setModalConfig({
      isOpen: true,
      variant,
      title,
      subtitle,
      source,
    });
  };

  const closeModal = () => {
    setModalConfig(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <section className="w-full overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Gradient border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-300 via-emerald-300 to-fuchsia-300 opacity-70" />
          <div className="relative m-[1px] rounded-[calc(theme(borderRadius.3xl)-1px)] bg-white shadow-[0_10px_40px_-10px_rgba(2,6,23,0.12)]">
            <BackgroundDecor />

            <div className="relative grid gap-6 py-6 px-4 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-12">
              {/* Left column */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs text-slate-600 shadow-sm backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Enterprise & High-impact Team Upskilling</span>
                </div>

                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                  {title}
                </h2>
                <p className="mt-2 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base">
                  {subtitle}
                </p>

                {/* Badges */}
                {badges?.length ? (
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    {badges.map((b, i) => (
                      <span
                        key={b}
                        className={`rounded-full border border-slate-200 bg-gradient-to-r ${CARD_GRADS[i % CARD_GRADS.length]} px-3 py-1 text-xs font-medium text-slate-800`}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                ) : null}

                {/* Bullets */}
                <ul className="mt-5 grid gap-3 sm:gap-4 sm:grid-cols-2">
                  {bullets.map((b, i) => (
                    <li
                      key={i}
                      className={`group relative w-full max-w-full min-w-0 rounded-2xl border border-slate-200/80 bg-gradient-to-br ${CARD_GRADS[i % CARD_GRADS.length]} p-4 sm:p-5 shadow-md shadow-slate-900/5 ring-1 ${EDGE_RINGS[i % EDGE_RINGS.length]} backdrop-blur transition hover:shadow-lg`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 grid h-7 w-7 place-items-center rounded-full bg-white/80 ring-1 ring-inset ring-white/60">
                          <Check className="h-4 w-4 text-slate-800" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[15px] font-semibold text-slate-900 sm:text-sm">{b.label}</p>
                          {b.sub ? <p className="mt-1 text-sm text-slate-700/90">{b.sub}</p> : null}
                        </div>
                      </div>
                      <div className="pointer-events-none absolute inset-x-4 bottom-0 h-px translate-y-1 bg-gradient-to-r from-transparent via-slate-300/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <button
                    onClick={() => openModal('workshop', 'Corporate Training Request', 'Tailored training programs for your team.', 'CTA - Request Training')}
                    className="cursor-pointer group inline-flex w-full max-w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold text-white shadow-md ring-1 ring-black/5 transition hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:w-auto sm:px-5 sm:py-2.5"
                    style={{ backgroundColor: "#0069A8" }}
                  >
                    <span className="text-center leading-tight whitespace-normal sm:whitespace-nowrap">
                      Request Training for Your Organization
                    </span>
                    <ArrowRight className="h-4 w-4 flex-shrink-0 transition group-hover:translate-x-0.5" />
                  </button>

                  <Link
                    href="/mentors"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 sm:w-auto sm:py-2.5"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </Link>

                  {/* Render children here, typically for extra buttons or custom actions */}
                  {children}
                </div>
              </div>

              {/* Right column */}
              <aside className="lg:col-span-5">
                <div className="relative rounded-2xl border border-slate-200 bg-white/70 p-5 sm:p-6 shadow-lg backdrop-blur">
                  <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-sky-200 to-emerald-200 opacity-60 blur-2xl" />
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-slate-900 p-2.5 text-white">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Team Programs</p>
                      <p className="text-xs text-slate-600">For 8–300 learners</p>
                    </div>
                  </div>

                  {/* Steps */}
                  <div className="mt-4 grid gap-3">
                    {[
                      { h: "Discovery & skills map", p: "Align goals, roles, and impact metrics" },
                      { h: "Sprints & capstone", p: "Hands-on labs with your stack & data" },
                      { h: "Reports & next steps", p: "Evidence of progress + hiring signals" },
                    ].map((row, i) => (
                      <div
                        key={row.h}
                        className={`w-full max-w-full rounded-xl border border-white/60 bg-gradient-to-br ${CARD_GRADS[i % CARD_GRADS.length]} p-3.5 sm:p-4 ring-1 ${EDGE_RINGS[i % EDGE_RINGS.length]} shadow-sm`}
                      >
                        <p className="text-sm font-medium text-slate-900">{row.h}</p>
                        <p className="text-xs text-slate-700/90">{row.p}</p>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {[
                      { k: "NPS", v: "78" },
                      { k: "Avg. uplift", v: "+42%" },
                      { k: "On-time", v: "99%" },
                    ].map((s, i) => (
                      <div
                        key={s.k}
                        className={`w-full max-w-full rounded-xl border border-slate-200 bg-white p-3 text-center ring-1 ${EDGE_RINGS[i % EDGE_RINGS.length]} shadow-sm`}
                      >
                        <div className="text-xs text-slate-500">{s.k}</div>
                        <div
                          className={`text-base font-extrabold bg-gradient-to-r ${STAT_NUMBER_GRADS[i % STAT_NUMBER_GRADS.length]} bg-clip-text text-transparent tracking-tight`}
                        >
                          {s.v}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Contact rail */}
                  <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
                    <p className="text-sm font-medium text-slate-900">Have an RFP or quick scope?</p>
                    <p className="mt-1 text-xs text-slate-600">
                      Share timelines & goals, we’ll reply with a crisp plan.
                    </p>
                    <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                      <button
                        onClick={() => openModal('consultation', 'Schedule a Consultation', 'Discuss your training needs.', 'CTA - Book a Call')}
                        className="cursor-pointer inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-95 sm:w-auto sm:py-2.5"
                      >
                        Book a call
                      </button>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* Background decor for the main card */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,theme(colors.sky.200/.6),transparent)] blur-2xl sm:h-72 sm:w-72" />
            <div className="pointer-events-none absolute -right-16 top-12 h-56 w-56 rounded-full bg-[radial-gradient(closest-side,theme(colors.emerald.200/.6),transparent)] blur-2xl sm:h-64 sm:w-64" />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-multiply"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 32 32\\' width=\\'32\\' height=\\'32\\'><path d=\\'M0 31.5H32M31.5 0V32\\' stroke=\\'%23cbd5e1\\' stroke-width=\\'1\\' opacity=\\'0.65\\'/></svg>')",
              }}
            />
            <div className="pointer-events-none absolute inset-x-0 -top-6 h-16 bg-gradient-to-b from-white/80 to-transparent sm:h-24" />
            <div className="pointer-events-none absolute inset-x-0 -bottom-6 h-16 bg-gradient-to-t from-white to-transparent sm:h-24" />
          </div>
        </div>
      </div>
      <WorkshopRequestModal
        isOpen={modalConfig.isOpen}
        onClose={closeModal}
        source={modalConfig.source}
        title={modalConfig.title}
        subtitle={modalConfig.subtitle}
        variant={modalConfig.variant}
      />
    </section>
  );
}

// Helper component for background decoration
function BackgroundDecor() {
  return (
    <>
      {/* Add any specific background decorations here if needed */}
    </>
  );
}
