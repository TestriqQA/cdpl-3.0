"use client";

import { useState } from "react";
import { Rich } from "@/components/ui/Rich";
import { CARD, Dot, GRID_GAP } from "@/components/course-page/parts/Section";
import type { HubTrack } from "@/types/categoryHub";

/**
 * Track tabs for the hub curriculum. All panels are rendered (so every track's
 * modules are in the HTML); inactive ones are `hidden`.
 */
export default function TrackTabs({ id, tracks }: { id: string; tracks: HubTrack[] }) {
  const [active, setActive] = useState(0);

  return (
    <>
      {tracks.length > 1 && (
        <div role="tablist" aria-label="Program tracks" className="flex flex-wrap justify-center gap-2">
          {tracks.map((t, i) => {
            const selected = i === active;
            return (
              <button
                key={t.id}
                id={`${id}-tab-${t.id}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls={`${id}-panel-${t.id}`}
                onClick={() => setActive(i)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  selected
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {t.title}
              </button>
            );
          })}
        </div>
      )}

      {tracks.map((t, i) => (
        <div
          key={t.id}
          id={`${id}-panel-${t.id}`}
          role="tabpanel"
          aria-labelledby={`${id}-tab-${t.id}`}
          hidden={i !== active}
          className={tracks.length > 1 ? "mt-8" : ""}
        >
          <ol className={`grid ${GRID_GAP} md:grid-cols-2`}>
            {t.modules.map((m, j) => (
              <li key={`${m.title}-${j}`} className={`${CARD} p-6`}>
                <div className="flex items-start gap-3">
                  <span
                    className="grid h-9 min-w-9 shrink-0 place-items-center rounded-xl bg-slate-100 px-2 text-sm font-bold text-slate-700"
                    aria-hidden="true"
                  >
                    {m.number ?? String(j + 1).padStart(2, "0")}
                  </span>
                  <h3 className="pt-1 text-lg font-bold leading-snug text-slate-900">{m.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  <Rich text={m.description} />
                </p>
                {m.deliverables && m.deliverables.length > 0 && (
                  <>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Learning Outcomes</p>
                    <ul className="mt-2 space-y-2">
                      {m.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <Dot />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </>
  );
}
