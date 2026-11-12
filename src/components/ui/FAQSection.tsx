"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { Mail, Phone, Plus } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export type FAQItem = { question: string; answer: string; category?: string };

type Props = {
  /** Unique per page: ties the heading to the section and groups the accordion. */
  id: string;
  title: ReactNode;
  subtitle?: string;
  eyebrow?: string;
  items: FAQItem[];
  /** Shows topic filters when given. */
  categories?: readonly string[];
  className?: string;
};

const CONTACT_LINKS = [
  { label: "WhatsApp Us", href: "https://wa.me/917888383788", Icon: FaWhatsapp, tile: "bg-[#25D366] text-white", external: true },
  { label: "Call Us", href: "tel:+917888383788", Icon: Phone, tile: "bg-sky-600 text-white", external: false },
  { label: "Email Us", href: "mailto:contact@cinutedigital.com", Icon: Mail, tile: "bg-indigo-600 text-white", external: false },
];

export function FAQSection({ id, title, subtitle, eyebrow = "FAQs", items, categories, className = "" }: Props) {
  const [filter, setFilter] = useState("All");
  const filterBar = useRef<HTMLDivElement>(null);
  const barTop = useRef<number | null>(null);

  // Keep the filter bar where it was when the list changes length; otherwise
  // the browser's scroll anchoring can move the page by hundreds of pixels.
  useLayoutEffect(() => {
    if (barTop.current === null || !filterBar.current) return;
    const shift = filterBar.current.getBoundingClientRect().top - barTop.current;
    if (shift) window.scrollBy({ top: shift, behavior: "instant" });
    barTop.current = null;
  }, [filter]);

  const choose = (f: string) => {
    barTop.current = filterBar.current?.getBoundingClientRect().top ?? null;
    setFilter(f);
  };

  const filters = categories ? ["All", ...categories] : [];
  const shown = filter === "All" ? items : items.filter((q) => q.category === filter);
  const countFor = (f: string) => (f === "All" ? items.length : items.filter((q) => q.category === f).length);
  const titleId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={titleId} className={className}>
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">{eyebrow}</p>
          <h2 id={titleId} className="mt-2 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          {subtitle && <p className="mt-3 text-base text-slate-600">{subtitle}</p>}

          {filters.length > 0 && (
            <div ref={filterBar} role="group" aria-label="Filter questions by topic" className="mt-5 flex flex-wrap justify-center gap-2 sm:mt-6">
              {filters.map((f) => {
                const active = filter === f;
                return (
                  <button
                    key={f}
                    type="button"
                    onClick={() => choose(f)}
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
          )}
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl sm:mt-8 border border-slate-200 bg-white shadow-sm">
          <div className="divide-y divide-slate-200">
            {shown.map((item, i) => {
              const showCategory = filter === "All" && !!item.category;
              return (
                // Same `name` makes the accordion exclusive: opening one closes the others.
                <details key={item.question} name={id} open={i === 0} className="group">
                  <summary className="flex cursor-pointer list-none items-start gap-3 px-4 py-3.5 transition hover:bg-slate-50 sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                    <div className="min-w-0 flex-1">
                      {showCategory && (
                        <span className="text-xs font-semibold uppercase tracking-wide text-brand">{item.category}</span>
                      )}
                      <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{item.question}</h3>
                    </div>
                    <span
                      aria-hidden="true"
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-slate-300 text-slate-600 transition group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-white ${showCategory ? "mt-3" : "mt-0.5"}`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </summary>
                  <p className="px-4 pb-4 text-[15px] leading-7 text-slate-600 sm:px-6 sm:pb-5 sm:text-base">{item.answer}</p>
                </details>
              );
            })}
          </div>

          <div className="border-t border-slate-200 bg-brand/5 px-4 py-5 text-center sm:px-6 sm:py-6">
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
