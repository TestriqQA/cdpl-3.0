// components/Sections/JobsLiveJobsFilterBarSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { Search, X, ChevronDown, Check, MapPin } from "lucide-react";
import type { JobsFilters } from "./JobsLiveJobsListingSection";

/** Accessible custom select (keyboard + mouse + click-outside) */
function FancySelect({
  value,
  onChange,
  options,
  placeholder = "All",
  leadingIcon,
  label,
}: {
  value: string;
  onChange: (v: string) => void;
  options: Array<{ label: string; value: string }>;
  placeholder?: string;
  leadingIcon?: React.ReactNode;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const current = options.find((o) => (value ?? "") === o.value)?.label || value || placeholder;

  // Close on outside click / Esc
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const toggle = () => {
    setOpen((o) => !o);
    setActiveIdx(Math.max(0, options.findIndex((o) => o.value === value)));
  };

  function onKeyDown(e: React.KeyboardEvent) {
    if (!open && (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      setOpen(true);
      setActiveIdx(Math.max(0, options.findIndex((o) => o.value === value)));
      return;
    }
    if (!open) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(options.length - 1, (i < 0 ? -1 : i) + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(0, (i < 0 ? 0 : i) - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const pick = options[Math.max(0, activeIdx)];
      if (pick) {
        onChange(pick.value);
        setOpen(false);
        btnRef.current?.focus();
      }
    } else if (e.key === "Escape") {
      setOpen(false);
      btnRef.current?.focus();
    }
  }

  return (
    <div ref={wrapRef} className="relative">
      <button
        ref={btnRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${label}: ${current}`}
        onClick={toggle}
        onKeyDown={onKeyDown}
        className="flex w-full cursor-pointer items-center justify-between gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-left text-base text-slate-900 focus:border-brand focus:outline-none focus:ring-4 focus:ring-orange-100"
      >
        <span className="flex min-w-0 items-center gap-2">
          {leadingIcon}
          <span className="truncate">{current}</span>
        </span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-slate-500 transition ${open ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>

      {open && (
        <div
          role="listbox"
          tabIndex={-1}
          aria-label={label}
          aria-activedescendant={activeIdx >= 0 ? `loc-opt-${activeIdx}` : undefined}
          className="scrollbar-thin absolute left-0 right-0 z-30 mt-2 max-h-72 overflow-auto rounded-xl border border-slate-200 bg-white py-1 shadow-lg"
          onKeyDown={onKeyDown}
        >
          {options.map((opt, i) => {
            const active = i === activeIdx;
            const selected = value === opt.value;
            return (
              <button
                id={`loc-opt-${i}`}
                key={opt.value || opt.label}
                role="option"
                aria-selected={selected}
                type="button"
                onMouseEnter={() => setActiveIdx(i)}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                  btnRef.current?.focus();
                }}
                className={`flex w-full cursor-pointer items-center justify-between px-4 py-2 text-left text-sm ${active ? "bg-orange-50" : "bg-white"} ${selected ? "font-semibold text-brand" : "text-slate-800"}`}
              >
                <span className="truncate">{opt.label}</span>
                {selected && <Check className="ml-2 h-4 w-4 text-brand" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

const TYPES = ["Walk-in", "Full-time", "Internship", "Contract"] as const;

/**
 * Filter card: search (role, skill, company), a location menu and job-type
 * chips, with a clear button once anything is set.
 */
export function JobsLiveJobsFilterBarSection({
  value,
  onChange,
  locations,
}: {
  value: JobsFilters;
  onChange: (v: JobsFilters) => void;
  locations: string[];
}) {
  // local state for debounced search typing
  const [qDraft, setQDraft] = useState(value.q);
  useEffect(() => setQDraft(value.q), [value.q]);

  useEffect(() => {
    const t = setTimeout(() => {
      if (qDraft !== value.q) onChange({ ...value, q: qDraft });
    }, 250);
    return () => clearTimeout(t);
  }, [qDraft]); // eslint-disable-line react-hooks/exhaustive-deps

  const hasFilters = Boolean(value.q || value.loc || value.type);
  const locationOptions = [{ label: "All locations", value: "" }, ...locations.map((l) => ({ label: l, value: l }))];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="grid gap-3 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="relative">
          <label htmlFor="jobs-search" className="sr-only">Search jobs</label>
          <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
          <input
            id="jobs-search"
            type="search"
            value={qDraft}
            onChange={(e) => setQDraft(e.target.value)}
            placeholder="Role, skill or company"
            autoComplete="off"
            className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-12 pr-12 text-base text-slate-900 placeholder:text-slate-400 focus:border-brand focus:outline-none focus:ring-4 focus:ring-orange-100 [&::-webkit-search-cancel-button]:hidden"
          />
          {qDraft && (
            <button
              type="button"
              onClick={() => setQDraft("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 grid h-8 w-8 -translate-y-1/2 cursor-pointer place-items-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-900"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>

        <FancySelect
          label="Location"
          value={value.loc}
          onChange={(v) => onChange({ ...value, loc: v })}
          options={locationOptions}
          leadingIcon={<MapPin className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />}
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <div role="group" aria-label="Filter by job type" className="flex flex-wrap gap-2">
          {[{ label: "All types", v: "" }, ...TYPES.map((t) => ({ label: t, v: t }))].map(({ label, v }) => {
            const active = value.type === v;
            return (
              <button
                key={label}
                type="button"
                aria-pressed={active}
                onClick={() => onChange({ ...value, type: v })}
                className={`cursor-pointer rounded-xl px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${active
                  ? "bg-brand text-white shadow-md"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-brand hover:text-brand"
                  }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {hasFilters && (
          <button
            type="button"
            onClick={() => onChange({ q: "", loc: "", type: "" })}
            className="ml-auto inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
          >
            <X className="h-4 w-4" aria-hidden="true" />
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}
