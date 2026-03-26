// src/components/sections/AffiliateFAQSection.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "What can I promote as a CDPL affiliate?",
        a: "Public workshops, corporate training programs, developer events, and select productized services. Assets and deep links are provided.",
    },
    {
        q: "Is there a minimum payout threshold?",
        a: "Yes, the threshold is $50 (or local equivalent). Unpaid balances roll over automatically.",
    },
    {
        q: "How long does approval take?",
        a: "Most applications are reviewed within 2–3 business days. We prioritize creators with relevant, engaged audiences.",
    },
    {
        q: "Do you support custom campaigns?",
        a: "For high-volume partners we co-create webinars, series, and case studies, plus custom landing pages.",
    },
    {
        q: "What’s the cookie window?",
        a: "60 days from the first click. Attribution is last click with fraud protection in place.",
    },
];

export default function AffiliateFAQSection() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <div id="faq">
            <h2 className="text-3xl font-bold tracking-tight">Frequently asked questions</h2>
            <div className="mt-6 divide-y divide-slate-200 rounded-3xl border border-slate-200/70 bg-white">
                {faqs.map((f, i) => {
                    const isOpen = open === i;
                    return (
                        <div key={f.q} className="p-6">
                            <button
                                onClick={() => setOpen(isOpen ? null : i)}
                                className="flex w-full items-center justify-between text-left cursor-pointer"
                            >
                                <span className="text-base font-semibold text-slate-900">{f.q}</span>
                                <ChevronDown
                                    className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : "rotate-0"
                                        }`}
                                />
                            </button>
                            <div
                                className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                    }`}
                            >
                                <p className="mt-3 overflow-hidden text-sm text-slate-600">{f.a}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
