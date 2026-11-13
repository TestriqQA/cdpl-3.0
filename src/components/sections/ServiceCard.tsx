"use client";

import { useId, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";

type Props = {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  href: string;
  /** Tailwind gradient stops, e.g. "from-blue-500 to-cyan-500". Optional in the CMS. */
  color?: string;
  /** Rendered icon (resolved on the server so lucide's full set never ships to the client). */
  icon: ReactNode;
  open: boolean;
  onToggle: () => void;
};

/**
 * /services program card. Closed, it is just the gradient bar with icon and
 * title, so the whole catalogue fits on one screen; clicking it slides open the
 * tagline, description, key features and the View Details link. The content
 * stays in the DOM while closed (crawlable) and is inert for keyboard users.
 * Open state lives in ServiceCardGrid so only one card is open at a time.
 */
export default function ServiceCard({ title, tagline, description, features, href, color = "from-sky-500 to-indigo-600", icon, open, onToggle }: Props) {
  const panelId = useId();

  return (
    <article
      className={`self-start overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200/70 transition-shadow duration-300 hover:shadow-xl ${open ? "shadow-xl" : ""}`}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className={`flex min-h-[5.5rem] w-full cursor-pointer items-center gap-3 bg-gradient-to-r ${color} px-5 py-4 text-left text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-white/60`}
        >
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/20 backdrop-blur-sm" aria-hidden="true">
            {icon}
          </span>
          <span className="flex-1 text-lg font-bold leading-snug">{title}</span>
          <ChevronDown
            className={`h-5 w-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      </h3>

      <div
        id={panelId}
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-400 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="p-5">
            <p className="text-sm font-semibold text-slate-500">{tagline}</p>
            <p
              className={`mt-2 text-gray-700 transition-all duration-300 ${open ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"}`}
            >
              {description}
            </p>

            <h4 className="mt-5 mb-3 text-sm font-semibold text-gray-900">Key Features:</h4>
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li
                  key={idx}
                  className={`flex items-start gap-2 text-sm text-gray-700 transition-all duration-300 ${open ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
                  style={{ transitionDelay: open ? `${120 + idx * 70}ms` : "0ms" }}
                >
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" aria-hidden="true" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={href}
              aria-label={`View details and past events for ${title}`}
              className={`mt-5 flex min-h-[44px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${color} px-4 py-3 text-sm font-semibold text-white shadow-lg transition-shadow duration-300 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 sm:text-base`}
            >
              View Details
              <ArrowRight className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
