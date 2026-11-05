"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, Plus } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT_FAQ_CATEGORIES, CONTACT_FAQS, type ContactFaqCategory } from "@/data/contactFaqs";

type Filter = "All" | ContactFaqCategory;

const FILTERS: Filter[] = ["All", ...CONTACT_FAQ_CATEGORIES];
const countFor = (f: Filter) => (f === "All" ? CONTACT_FAQS.length : CONTACT_FAQS.filter((q) => q.category === f).length);

const CONTACT_LINKS = [
  { label: "WhatsApp Us", href: "https://wa.me/917888383788", Icon: FaWhatsapp, tile: "bg-[#25D366] text-white", external: true },
  { label: "Call Admissions", href: "tel:+917888383788", Icon: Phone, tile: "bg-sky-600 text-white", external: false },
  { label: "Email Us", href: "mailto:contact@cinutedigital.com", Icon: Mail, tile: "bg-indigo-600 text-white", external: false },
];

export function ContactFAQSection() {
  const [filter, setFilter] = useState<Filter>("All");
  const items = filter === "All" ? CONTACT_FAQS : CONTACT_FAQS.filter((q) => q.category === filter);

  return (
    <section id="faq" aria-labelledby="contact-faq-title" className="bg-slate-50 dark:[color-scheme:light]">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 md:px-8 md:py-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">FAQs</p>
          <h2 id="contact-faq-title" className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            Frequently <span className="text-brand">Asked</span> Questions
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Admissions, live mentor-led learning, EMI & scholarships, and placement assistance at Cinute Digital.
          </p>

          <div
            role="group"
            aria-label="Filter questions by topic"
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            {FILTERS.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  aria-pressed={active}
                  className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition ${
                    active
                      ? "border-brand bg-brand text-white shadow-sm"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {f}
                  <span className={`rounded-full px-2 text-xs ${active ? "bg-white/20" : "bg-slate-100 text-slate-500"}`}>
                    {countFor(f)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="divide-y divide-slate-200">
            {items.map((item, i) => (
              // Same `name` makes the accordion exclusive: opening one closes the others.
              <details key={item.question} name="contact-faq" open={i === 0} className="group">
                <summary className="flex cursor-pointer list-none items-start gap-4 px-5 py-4 transition hover:bg-slate-50 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                  <div className="min-w-0 flex-1">
                    {filter === "All" && (
                      <span className="text-xs font-semibold uppercase tracking-wide text-brand">{item.category}</span>
                    )}
                    <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{item.question}</h3>
                  </div>
                  <span
                    aria-hidden="true"
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-slate-300 text-slate-600 transition group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-white ${filter === "All" ? "mt-3" : "mt-0.5"}`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </summary>
                <p className="px-5 pb-5 leading-7 text-slate-600 sm:px-6">{item.answer}</p>
              </details>
            ))}
          </div>

          <div className="border-t border-slate-200 bg-brand/5 px-5 py-6 text-center sm:px-6">
            <p className="font-semibold text-slate-900">Still have questions?</p>
            <p className="mt-0.5 text-sm text-slate-600">Our advisors can help with courses, careers, and financing.</p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2">
              {CONTACT_LINKS.map(({ label, href, Icon, tile, external }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1 pl-1 pr-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:shadow"
                  >
                    <span aria-hidden="true" className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${tile}`}>
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
