"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronsUpDown, Check, X } from "lucide-react";
import { SanityJob } from "@/sanity/types";

import JobsCareersJobsGridSection from "./JobsCareersJobsGridSection";

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

  return (
    <section id="open-roles" className="py-12 sm:py-14 lg:py-16">
      {/* ⬇️ Content container only; section itself stays full-bleed */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mb-8 sm:mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Open roles</h2>
          <p className="mt-3 text-base text-slate-600">
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

        {/* List + detail */}
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
