'use client';

/**
 * Searchable country picker for react-phone-number-input, passed as its
 * `countrySelectComponent` (see PhoneNumberInput.tsx). Replaces the native
 * <select> with a button + popover listing each country's flag, name and
 * calling code, filterable by name, code ("+91" / "91") or ISO code ("IN").
 *
 * - Loaded only inside the phone input's lazy chunk, so `getCountryCallingCode`
 *   (and its metadata) stays out of every page's main bundle.
 * - The popover is portalled to <body> with fixed positioning: many phone
 *   fields sit inside modals with `overflow-hidden`, which would clip an
 *   inline dropdown. It opens upward when there is no room below.
 * - Native mousedown/keydown propagation is stopped at the popover, so the
 *   document-level "click outside" / Escape handlers of surrounding modals
 *   and forms don't treat a click in the list as a click outside them.
 * - The root keeps the library's `PhoneInputCountry` class, which a number of
 *   forms style (divider, background).
 */
import React, { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { getCountryCallingCode, type Country } from 'react-phone-number-input';
import { Check, ChevronDown, Globe, Search } from 'lucide-react';

type Option = { value?: Country; label: string; divider?: boolean };

type IconProps = { country?: Country; label: string; aspectRatio?: number };

export type CountrySelectProps = {
  name?: string;
  value?: Country;
  options: Option[];
  onChange: (value?: Country) => void;
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
  disabled?: boolean;
  readOnly?: boolean;
  iconComponent: React.ComponentType<IconProps>;
  'aria-label'?: string;
};

const POPOVER_WIDTH = 300;
const POPOVER_MAX_HEIGHT = 320;

const callingCode = (country?: Country) => {
  if (!country) return '';
  try {
    return `+${getCountryCallingCode(country)}`;
  } catch {
    return '';
  }
};

export default function CountrySelect({
  name,
  value,
  options,
  onChange,
  onFocus,
  onBlur,
  disabled,
  readOnly,
  iconComponent: Icon,
  'aria-label': ariaLabel = 'Country',
}: CountrySelectProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState<{ left: number; top?: number; bottom?: number; maxHeight: number } | null>(null);

  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = useId();

  const items = useMemo(
    () =>
      options
        .filter((o) => !o.divider)
        .map((o) => ({ ...o, code: callingCode(o.value) })),
    [options],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase().replace(/^\+/, '');
    if (!q) return items;
    return items.filter(
      (o) =>
        o.label.toLowerCase().includes(q) ||
        o.code.replace('+', '').startsWith(q) ||
        (o.value ?? '').toLowerCase() === q,
    );
  }, [items, query]);

  const selected = items.find((o) => o.value === value);

  // Place the popover under the whole phone field (falls back to this button).
  const place = useCallback(() => {
    const anchor = rootRef.current?.closest('.PhoneInput') ?? rootRef.current;
    if (!anchor) return;
    const r = anchor.getBoundingClientRect();
    const left = Math.max(8, Math.min(r.left, window.innerWidth - POPOVER_WIDTH - 8));
    const below = window.innerHeight - r.bottom - 12;
    const above = r.top - 12;
    if (below >= 220 || below >= above) {
      setPos({ left, top: r.bottom + 6, maxHeight: Math.min(POPOVER_MAX_HEIGHT, below) });
    } else {
      setPos({ left, bottom: window.innerHeight - r.top + 6, maxHeight: Math.min(POPOVER_MAX_HEIGHT, above) });
    }
  }, []);

  const openPicker = () => {
    if (disabled || readOnly) return;
    setQuery('');
    setActive(Math.max(0, items.findIndex((o) => o.value === value)));
    place();
    setOpen(true);
  };

  const close = useCallback((focusButton = true) => {
    setOpen(false);
    if (focusButton) buttonRef.current?.focus();
  }, []);

  const choose = (country?: Country) => {
    onChange(country);
    close(false);
  };

  // Keep position in sync while open; close on outside click.
  useEffect(() => {
    if (!open) return;
    const onMove = () => place();
    const onDown = (e: MouseEvent) => {
      if (rootRef.current?.contains(e.target as Node)) return;
      setOpen(false);
    };
    window.addEventListener('scroll', onMove, true);
    window.addEventListener('resize', onMove);
    document.addEventListener('mousedown', onDown);
    return () => {
      window.removeEventListener('scroll', onMove, true);
      window.removeEventListener('resize', onMove);
      document.removeEventListener('mousedown', onDown);
    };
  }, [open, place]);

  // On open: focus the search box and centre the current country in the list.
  useLayoutEffect(() => {
    if (!open) return;
    searchRef.current?.focus({ preventScroll: true });
    const list = listRef.current;
    const row = list?.querySelector<HTMLElement>('[aria-selected="true"]');
    if (list && row) list.scrollTop = row.offsetTop - list.clientHeight / 2 + row.clientHeight / 2;
  }, [open]);

  // Keep the highlighted row in view.
  useEffect(() => {
    if (!open) return;
    listRef.current?.querySelector<HTMLElement>(`[data-index="${active}"]`)?.scrollIntoView({ block: 'nearest' });
  }, [active, open]);

  const onSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const option = filtered[active];
      if (option) choose(option.value);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      close();
    } else if (e.key === 'Tab') {
      close(false);
    }
  };

  return (
    <div ref={rootRef} className="PhoneInputCountry">
      {name && <input type="hidden" name={name} value={value ?? ''} />}
      <button
        ref={buttonRef}
        type="button"
        disabled={disabled}
        aria-label={`${ariaLabel}: ${selected?.label ?? 'International'}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        onClick={() => (open ? close() : openPicker())}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            openPicker();
          }
        }}
        onFocus={onFocus}
        onBlur={onBlur}
        className="flex h-full cursor-pointer items-center gap-1 pr-2 outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded-l-lg disabled:cursor-not-allowed"
      >
        <Icon country={value} label={selected?.label ?? 'International'} aspectRatio={1.5} />
        <ChevronDown
          className={`h-3.5 w-3.5 text-slate-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>

      {open &&
        pos &&
        createPortal(
          <div
            role="dialog"
            aria-label="Choose a country"
            onMouseDown={(e) => e.nativeEvent.stopPropagation()}
            onKeyDown={(e) => e.nativeEvent.stopPropagation()}
            style={{ position: 'fixed', left: pos.left, top: pos.top, bottom: pos.bottom, width: POPOVER_WIDTH }}
            className="z-[10000] flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl ring-1 ring-black/5 cdpl-animate-fade-in"
          >
            <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-2.5">
              <Search className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
              <input
                ref={searchRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={onSearchKeyDown}
                placeholder="Search country or code"
                aria-label="Search country or code"
                aria-controls={listId}
                aria-activedescendant={filtered[active] ? `${listId}-${active}` : undefined}
                className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
                autoComplete="off"
                spellCheck={false}
              />
            </div>

            <ul
              ref={listRef}
              id={listId}
              role="listbox"
              aria-label="Countries"
              style={{ maxHeight: pos.maxHeight - 48 }}
              className="overflow-y-auto overscroll-contain py-1"
            >
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-slate-500">No country found</li>
              )}
              {filtered.map((o, i) => {
                const isSelected = o.value === value;
                return (
                  <li
                    key={o.value ?? 'international'}
                    id={`${listId}-${i}`}
                    data-index={i}
                    role="option"
                    aria-selected={isSelected}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => choose(o.value)}
                    className={`flex cursor-pointer items-center gap-3 px-3 py-2 text-sm ${
                      i === active ? 'bg-orange-50' : ''
                    } ${isSelected ? 'font-semibold text-slate-900' : 'text-slate-700'}`}
                  >
                    {o.value ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={`/flags/3x2/${o.value}.svg`}
                        alt=""
                        width={21}
                        height={14}
                        loading="lazy"
                        decoding="async"
                        className="h-3.5 w-[21px] shrink-0 rounded-[2px] object-cover ring-1 ring-black/10"
                      />
                    ) : (
                      <Globe className="h-4 w-[21px] shrink-0 text-slate-400" aria-hidden="true" />
                    )}
                    <span className="min-w-0 flex-1 truncate">{o.label}</span>
                    {o.code && <span className="shrink-0 tabular-nums text-xs text-slate-400">{o.code}</span>}
                    {isSelected && <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />}
                  </li>
                );
              })}
            </ul>
          </div>,
          document.body,
        )}
    </div>
  );
}
