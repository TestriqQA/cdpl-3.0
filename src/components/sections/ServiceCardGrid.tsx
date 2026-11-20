"use client";

import { useState, useSyncExternalStore, type ReactNode } from "react";
import ServiceCard from "./ServiceCard";

export type ServiceCardItem = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  href: string;
  color?: string;
  icon: ReactNode;
};

// Column count per breakpoint (matches Tailwind sm / lg).
const QUERIES: [string, number][] = [
  ["(min-width: 1024px)", 3],
  ["(min-width: 640px)", 2],
];

function getColumns(): number {
  for (const [q, n] of QUERIES) if (window.matchMedia(q).matches) return n;
  return 1;
}

function subscribe(onChange: () => void) {
  const lists = QUERIES.map(([q]) => window.matchMedia(q));
  lists.forEach((m) => m.addEventListener("change", onChange));
  return () => lists.forEach((m) => m.removeEventListener("change", onChange));
}

/**
 * Collapsible /services program cards, laid out as independent columns rather
 * than grid rows: opening a card only pushes down the cards beneath it in the
 * same column, instead of growing the whole row and leaving gaps in the
 * others. Cards are dealt into columns left-to-right, so reading order matches
 * a normal row-by-row grid. Only one card is open at a time.
 */
export default function ServiceCardGrid({ items }: { items: ServiceCardItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  // 0 = plain CSS grid. That is what the server renders (it can't know the
  // viewport) and what hydration starts from; the client then switches to
  // columns. With every card closed the two layouts look identical, so the
  // swap causes no layout shift, and the server HTML keeps the natural order.
  const columns = useSyncExternalStore(subscribe, getColumns, () => 0);

  const renderCard = ({ id, ...card }: ServiceCardItem) => (
    <ServiceCard
      key={id}
      {...card}
      open={openId === id}
      onToggle={() => setOpenId((cur) => (cur === id ? null : id))}
    />
  );

  if (columns === 0) {
    return <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">{items.map(renderCard)}</div>;
  }

  const stacks: ServiceCardItem[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, i) => stacks[i % columns].push(item));

  return (
    <div className="flex items-start gap-4">
      {stacks.map((stack, c) => (
        <div key={c} className="flex min-w-0 flex-1 flex-col gap-4">
          {stack.map(renderCard)}
        </div>
      ))}
    </div>
  );
}
