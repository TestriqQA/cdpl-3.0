// components/Sections/JobsLiveJobsFilterBarSection.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Search, Filter, X, ChevronDown, Check } from "lucide-react";
import type { JobsFilters } from "./JobsLiveJobsListingSection";

/** Accessible custom select (keyboard + mouse + click-outside) */
function FancySelect({
  value,
  onChange,
  options,
  placeholder = "All",
  className = "",
  buttonClassName = "",
  optionHeight = 36,
  maxHeight = 280,
  leadingIcon,
}: {
  value: string;
  onChange: (v: string) => void;
  options: Array<{ label: string; value: string }>;
  placeholder?: string;
  className?: string;
  buttonClassName?: string;
  optionHeight?: number;
  maxHeight?: number;
  leadingIcon?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const label =
    options.find((o) => (value ?? "") === o.value)?.label ||
    (value || placeholder);

  // Close on outside click / Esc
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
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
    <div ref={wrapRef} className={`relative ${className}`}>
      <button
        ref={btnRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={onKeyDown}
        className={`flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-left text-sm text-slate-900 shadow-sm backdrop-blur focus:outline-none focus:ring-2 focus:ring-orange-400 ${buttonClassName}`}
      >
        <span className="flex min-w-0 items-center gap-2">
          {leadingIcon}
          <span className="truncate">{label}</span>
        </span>
        <ChevronDown
          className={`ml-2 h-4 w-4 shrink-0 text-slate-500 transition ${open ? "rotate-180" : ""
            }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          tabIndex={-1}
          aria-activedescendant={activeIdx >= 0 ? `opt-${activeIdx}` : undefined}
          className="custom-options absolute left-0 right-0 z-30 mt-2 overflow-auto rounded-xl border border-slate-200 bg-white shadow-lg"
          style={{ maxHeight }}
          onKeyDown={onKeyDown}
        >
          {options.map((opt, i) => {
            const active = i === activeIdx;
            const selected = value === opt.value;
            return (
              <button
                id={`opt-${i}`}
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
                className={`flex w-full items-center justify-between px-3 text-left text-sm transition ${active ? "bg-orange-50/60" : "bg-white"
                  } ${selected ? "font-semibold text-slate-900" : "text-slate-800"}`}
                style={{ height: optionHeight }}
              >
                <span className="truncate">{opt.label}</span>
                {selected ? (
                  <Check className="ml-2 h-4 w-4 text-[#c2410c]" />
                ) : (
                  <span className="ml-2 h-4 w-4" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* dropdown scrollbar & outline polish */}
      <style jsx global>{`
        .custom-options {
          scrollbar-width: thin;
          scrollbar-color: rgba(194, 65, 12, 0.6) transparent;
        }
        .custom-options::-webkit-scrollbar {
          width: 10px;
        }
        .custom-options::-webkit-scrollbar-thumb {
          background: linear-gradient(
            180deg,
            rgba(194, 65, 12, 0.6),
            rgba(194, 65, 12, 0.6)
          );
          border-radius: 9999px;
          border: 3px solid transparent;
          background-clip: padding-box;
        }
        .custom-options::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            180deg,
            rgba(194, 65, 12, 0.8),
            rgba(194, 65, 12, 0.8)
          );
        }
      `}</style>
    </div>
  );
}

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

  // debounce search for nicer UX
  useEffect(() => {
    const t = setTimeout(() => {
      if (qDraft !== value.q) onChange({ ...value, q: qDraft });
    }, 250);
    return () => clearTimeout(t);
  }, [qDraft]); // eslint-disable-line react-hooks/exhaustive-deps

  const clearAll = () => onChange({ q: "", loc: "", type: "" });

  const activeCount = useMemo(
    () => (value.q ? 1 : 0) + (value.loc ? 1 : 0) + (value.type ? 1 : 0),
    [value]
  );

  // Options for custom selects
  const locationOptions = useMemo(
    () => [{ label: "All", value: "" }, ...locations.map((l) => ({ label: l, value: l }))],
    [locations]
  );
  const typeOptions = [
    { label: "All", value: "" },
    { label: "Walk-in", value: "Walk-in" },
    { label: "Full-time", value: "Full-time" },
    { label: "Internship", value: "Internship" },
    { label: "Contract", value: "Contract" },
  ];

  return (
    <div className="relative">
      {/* soft rail */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-3 h-16 rounded-2xl opacity-30 blur-2xl"
        style={{
          background:
            "linear-gradient(90deg, rgba(194,65,12,.20), rgba(125,211,252,.22))",
        }}
      />
      <div className="relative grid gap-2 sm:grid-cols-12">
        {/* Search */}
        <div className="sm:col-span-6">
          <label className="block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Search
            </span>
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-3 py-2 shadow-sm backdrop-blur">
              <Search className="h-4 w-4 text-slate-500" />
              <input
                value={qDraft}
                onChange={(e) => setQDraft(e.target.value)}
                placeholder="Role, skill, company…"
                className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
              {qDraft && (
                <button
                  type="button"
                  onClick={() => setQDraft("")}
                  className="rounded p-1 text-slate-500 hover:bg-slate-100"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </label>
        </div>

        {/* Location (custom select) */}
        <div className="sm:col-span-3">
          <label className="block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Location
            </span>
            <FancySelect
              value={value.loc}
              onChange={(v) => onChange({ ...value, loc: v })}
              options={locationOptions}
            />
          </label>
        </div>

        {/* Type (custom select) */}
        <div className="sm:col-span-3">
          <label className="block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-500">
              Type
            </span>
            <FancySelect
              value={value.type}
              onChange={(v) => onChange({ ...value, type: v })}
              options={typeOptions}
              leadingIcon={<Filter className="h-4 w-4 text-slate-500" />}
              buttonClassName="pl-2"
            />
          </label>
        </div>

        {/* Footer row */}
        <div className="sm:col-span-12 mt-1 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            Tip: Filters are for quick narrowing. Full details inside each card.
          </p>
          <button
            type="button"
            onClick={clearAll}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:-translate-y-[1px] hover:shadow-sm"
            title="Clear all filters"
          >
            <X className="h-3.5 w-3.5" /> Clear {activeCount ? `(${activeCount})` : ""}
          </button>
        </div>
      </div>
    </div>
  );
}
