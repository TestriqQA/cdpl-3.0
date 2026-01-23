// src/components/sections/EventDetailsSidebarSection.tsx
"use client";

import { Calendar, Users, Building2 } from "lucide-react";
import type { PastEvent } from "@/data/eventsData";
import { useCallback } from "react";

type Props = { event: PastEvent };

export default function EventDetailsSidebarSection({ event }: Props) {
  const openCorporate = useCallback(() => {
    const evt = new CustomEvent("openCorporateRegistration", {
      detail: { service: event.category },
    });
    window.dispatchEvent(evt);
  }, [event.category]);

  return (
    <aside className="space-y-6">
      {/* Organization card */}
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white text-neutral-900 shadow-sm">
        {/* Clean, pastel gradient header with dark text */}
        <div
          className="p-6"
          style={{
            background:
              "linear-gradient(90deg, rgba(56,189,248,.14), rgba(129,140,248,.14))", // sky→indigo subtle
          }}
        >
          <div className="flex items-center gap-3">
            <Building2 className="h-6 w-6 text-slate-700" />
            <h3 className="text-lg font-bold text-slate-900">Organized By</h3>
          </div>
          <p className="mt-2 text-slate-800">{event.organization}</p>
        </div>

        <div className="p-6 space-y-4">
          <Line
            icon={<Calendar className="h-4 w-4 text-brand" />}
            label="Event Date"
            value={event.date}
          />
          <Line
            icon={<Users className="h-4 w-4 text-sky-600" />}
            label="Participants"
            value={`${event.attendees} people attended`}
          />
        </div>
      </div>

      {/* CTA (unchanged) */}
      <div className="rounded-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-sky-50 p-6">
        <h4 className="text-lg font-bold">Want Similar Training?</h4>
        <p className="mt-2 text-sm text-neutral-700">
          Bring this expert-led training to your organization. Customized programs for corporates & institutes.
        </p>
        <button
          type="button"
          onClick={openCorporate}
          className="mt-4 inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0"
          aria-label="Open corporate training request"
        >
          Request Corporate Training
        </button>
      </div>

      {/* Benefits (unchanged) */}
      <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
        <h5 className="mb-3 text-sm font-semibold">What You Get</h5>
        <ul className="grid gap-2 text-[13.5px] text-neutral-700">
          {[
            "Expert trainers from industry",
            "Customized content for your needs",
            "Hands-on practical sessions",
            "Certificates for participants",
            "Post-training support",
          ].map((x) => (
            <li key={x} className="flex items-start gap-2">
              <span className="mt-0.5 text-emerald-600">✓</span>
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function Line({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-9 w-9 place-items-center rounded-lg bg-white shadow-sm ring-1 ring-black/5">
        {icon}
      </div>
      <div>
        <p className="text-xs text-neutral-500">{label}</p>
        <p className="text-sm font-semibold">{value}</p>
      </div>
    </div>
  );
}
