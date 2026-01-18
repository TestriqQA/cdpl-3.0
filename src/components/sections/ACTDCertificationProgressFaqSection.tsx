"use client";

import { useState } from "react";

export default function ACTDCertificationProgressFaqSection() {
  const steps = ["Enroll", "Learn", "Build", "Assess", "Share"];
  const [idx, setIdx] = useState(1);
  const pct = Math.round(((idx + 1) / steps.length) * 100);

  const faqs = [
    {
      q: "How is ACTD different from AAA?",
      a: "ACTD emphasizes demonstrable, practical skills and case execution, while AAA is broader on blueprint coverage.",
    },
    {
      q: "Do I get placement support?",
      a: "Yes—eligible graduates are surfaced to CDPL partners and receive resume + interview support.",
    },
    {
      q: "Is the certificate digital?",
      a: "Yes, you’ll receive a shareable link with a unique verification ID.",
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-extrabold">Cohort flow</h3>
          <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-800">
              <span>Progress</span>
              <span>{pct}%</span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${pct}%`,
                  background:
                    "linear-gradient(90deg, #ff8c00 0%, #ffb558 55%, #ffd19e 100%)",
                }}
              />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {steps.map((s, i) => (
                <button
                  key={s}
                  onClick={() => setIdx(i)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${i === idx
                    ? "border-zinc-300 text-zinc-900 shadow-sm"
                    : "border-zinc-200 text-zinc-600 hover:border-zinc-300"
                    }`}
                  style={
                    i === idx
                      ? {
                        background:
                          "linear-gradient(90deg, #ff8c00 0%, #ffb558 55%, #ffd19e 100%)",
                      }
                      : undefined
                  }
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {faqs.map((f) => (
              <FaqRow key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="p-3">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-xl bg-white px-4 py-3 text-left text-sm font-semibold ring-1 ring-slate-200 transition hover:bg-slate-50"
        aria-expanded={open}
      >
        <span>{q}</span>
        <span className={`transition ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      {open && <p className="px-4 py-3 text-sm text-slate-800">{a}</p>}
    </div>
  );
}
