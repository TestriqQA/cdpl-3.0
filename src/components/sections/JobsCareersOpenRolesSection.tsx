"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { ChevronsUpDown, Check, X } from "lucide-react";
import { SanityJob } from "@/sanity/types";




/* Loader for the dynamic section */
function SectionLoader({ label = "Loading..." }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-16">
      <p className="text-gray-500 dark:text-gray-500">{label}</p>
    </div>
  );
}

/* ===== Dynamic import (typed) ===== */
const JobsCareersJobsGridSection = dynamic(
  () => import("./JobsCareersJobsGridSection").then((m) => m.default),
  { ssr: false, loading: () => <SectionLoader label="Loading roles..." /> }
);


/* --------------------------- Styled Select (custom) --------------------------- */
/** Fully styled, accessible-ish custom select with keyboard support.
 *  - Arrow icon, hover states, active option highlight
 *  - Uses Tailwind only. No extra deps.
 */
function StyledSelect({
  value,
  onChange,
  options,
  className = "",
  ariaLabel,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  className?: string;
  ariaLabel?: string;
}) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(() =>
    Math.max(0, options.findIndex((o) => o === value))
  );
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  // close on outside click
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // manage active index when opening
  useEffect(() => {
    if (open) {
      const idx = Math.max(0, options.findIndex((o) => o === value));
      setActiveIndex(idx);
      // ensure scroll to active item
      setTimeout(() => {
        const el = listRef.current?.querySelector<HTMLLIElement>(
          `[data-index="${idx}"]`
        );
        el?.scrollIntoView({ block: "nearest" });
      }, 0);
    }
  }, [open, options, value]);

  function commit(v: string) {
    onChange(v);
    setOpen(false);
    btnRef.current?.focus();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (
      !open &&
      (e.key === "ArrowDown" ||
        e.key === "ArrowUp" ||
        e.key === " " ||
        e.key === "Enter")
    ) {
      e.preventDefault();
      setOpen(true);
      return;
    }
    if (!open) return;

    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      btnRef.current?.focus();
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(options.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
    } else if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setActiveIndex(options.length - 1);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      commit(options[activeIndex]);
    }
  }

  return (
    <div className={`relative ${className}`} ref={wrapRef}>
      <button
        ref={btnRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={ariaLabel}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
        className="w-full sm:w-56 inline-flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm hover:border-amber-200 focus:outline-none focus:ring-4 focus:ring-amber-100"
      >
        <span className="truncate">{value}</span>
        <ChevronsUpDown className="h-4 w-4 text-slate-400" />
      </button>

      {open && (
        <ul
          ref={listRef}
          role="listbox"
          tabIndex={-1}
          aria-label={ariaLabel}
          className="absolute z-40 mt-2 max-h-64 w-full sm:w-56 overflow-auto rounded-xl border border-slate-200 bg-white p-1 shadow-lg"
          onKeyDown={onKeyDown}
        >
          {options.map((opt, i) => {
            const selected = opt === value;
            const active = i === activeIndex;
            return (
              <li
                key={opt}
                role="option"
                aria-selected={selected}
                data-index={i}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => commit(opt)}
                className={`flex cursor-pointer items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-sm
                  ${active ? "bg-amber-50" : ""}
                  ${selected ? "font-medium text-slate-900" : "text-slate-700"}
                  hover:bg-amber-50`}
              >
                <span className="truncate">{opt}</span>
                {selected ? (
                  <Check className="h-4 w-4 text-amber-600 shrink-0" />
                ) : (
                  <span className="h-4 w-4 shrink-0" />
                )}
              </li>
            );
          })}
          {/* Clear button when not on "All" */}
          {value !== "All" && options.includes("All") && (
            <>
              <li className="mx-1 my-1 h-px bg-slate-100" aria-hidden />
              <li
                role="option"
                aria-selected={false}
                onClick={() => commit("All")}
                className="flex cursor-pointer items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-amber-50"
              >
                <span>Clear filter</span>
                <X className="h-4 w-4 text-slate-400" />
              </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
}

/* --------------------------- Open Roles Section --------------------------- */

export default function JobsCareersOpenRolesSection({ jobs }: { jobs: SanityJob[] }) {
  const teams = useMemo(
    () => ["All", ...Array.from(new Set(jobs.map((j) => j.team)))],
    [jobs]
  );
  const locations = useMemo(
    () => ["All", ...Array.from(new Set(jobs.map((j) => j.location)))],
    [jobs]
  );

  const [team, setTeam] = useState("All");
  const [location, setLocation] = useState("All");

  const filtered = useMemo(
    () =>
      jobs.filter(
        (j) =>
          (team === "All" || j.team === team) &&
          (location === "All" || j.location === location)
      ),
    [jobs, team, location]
  );

  /** Force the job-detail header to be sticky by discovering the scroll pane
   *  and first heading block dynamically (no child edits).
   */
  useEffect(() => {
    const NAV_TOP =
      Number(
        getComputedStyle(document.documentElement)
          .getPropertyValue("--nav-height")
          .replace("px", "")
          .trim()
      ) || 72;

    const section = document.getElementById("open-roles");
    if (!section) return;

    // Find the right-pane scroll container (the one that actually scrolls)
    const candidates = Array.from(
      section.querySelectorAll<HTMLElement>("*")
    ).filter((el) => {
      const cs = getComputedStyle(el);
      const canScroll =
        (cs.overflowY === "auto" || cs.overflowY === "scroll") &&
        el.scrollHeight > el.clientHeight &&
        el.clientHeight > 200; // avoid tiny elements
      return canScroll;
    });

    const scrollPane = candidates[0];
    if (!scrollPane) return;

    // Find the header block: closest block ancestor around the first H1/H2/H3
    const heading =
      scrollPane.querySelector<HTMLElement>("h1, h2, h3") ||
      scrollPane.querySelector<HTMLElement>("[data-title], [itemprop='title']");
    if (!heading) return;

    let headerBlock: HTMLElement | null = heading;
    // climb a few levels to catch the padded container wrapping the title & meta
    for (let i = 0; i < 4 && headerBlock; i++) {
      const cs = getComputedStyle(headerBlock);
      const hasPadding =
        parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom) > 0;
      const isBlocky =
        ["block", "flex", "grid"].includes(cs.display) && headerBlock.clientHeight > 40;
      if (hasPadding && isBlocky) break;
      headerBlock = headerBlock.parentElement as HTMLElement | null;
    }
    if (!headerBlock) return;

    // Apply sticky styles
    Object.assign(headerBlock.style, {
      position: "sticky",
      top: `${NAV_TOP}px`,
      zIndex: "30",
      background: headerBlock.style.background || "white",
      // subtle separator to indicate stickiness without changing layout
      borderBottom: headerBlock.style.borderBottom || "1px solid rgba(148,163,184,0.25)",
    });

    // Ensure the pane itself establishes the sticky containing block
    const prev = scrollPane.style.overflowY;
    if (!prev) scrollPane.style.overflowY = "auto";

    // Cleanup not required (styles are idempotent), but keep for safety
    return () => {
      // no-op: we intentionally keep styles while component is mounted
    };
  }, []);

  return (
    <section id="open-roles" className="py-10 sm:py-12 lg:py-16">
      {/* ⬇️ Content container only; section itself stays full-bleed */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-6 sm:mb-8">
          {/* Match non-hero heading scale used above (list section): strong but not oversized */}
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Open roles</h2>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-600">
            If impact, ownership, and craft excite you, there’s a seat for you here.
          </p>
        </header>

        {/* Filters: text-sm weight/size consistent with the list section meta/controls */}
        <div className="mb-6 flex flex-col sm:flex-row gap-3">
          <StyledSelect
            value={team}
            onChange={setTeam}
            options={teams}
            ariaLabel="Filter by team"
          />
          <StyledSelect
            value={location}
            onChange={setLocation}
            options={locations}
            ariaLabel="Filter by location"
          />
        </div>

        {/* LinkedIn-style list + detail */}
        <JobsCareersJobsGridSection jobs={filtered} />

        {filtered.length === 0 && (
          <div className="mt-6 rounded-xl border border-dashed border-slate-200 p-6 text-center text-sm text-slate-600">
            No roles match your filters right now. Try switching team or location.
          </div>
        )}
      </div>
    </section>
  );
}
