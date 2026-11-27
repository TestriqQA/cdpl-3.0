import { Rich } from "@/components/ui/Rich";
import CountUp from "@/components/ui/CountUp";
import CtaButtons from "./parts/CtaButtons";
import ContentBlocks from "./parts/ContentBlocks";
import { CARD, CourseSection, GRID_GAP, SPACE, SectionHeader, SectionNote, SectionOutro } from "./parts/Section";
import type { CourseStats as Stats } from "@/types/course-page";
import type { SectionProps } from "./types";

type Stat = Stats["items"][number];

// A plain figure ("50 hrs", "1,01,000+", "25%") splits into the number, which
// counts up on scroll, and its unit, shown in brand orange. Values with
// formatting, {placeholders} or a second number (ratios like "80 : 20")
// render as they are.
const FIGURE = /^(\d[\d,]*(?:\.\d+)?)([^\d*{}[\]]*)$/;

function figure(value: Stat["value"]) {
  return typeof value === "string" ? FIGURE.exec(value) : null;
}

function StatValue({ value }: { value: Stat["value"] }) {
  const m = figure(value);
  if (!m) return <Rich text={value} />;
  return (
    <>
      <CountUp value={m[1]} />
      {m[2] && <span className="text-brand">{m[2]}</span>}
    </>
  );
}

// Fewer than 4 figures: one plain row.
const ROW_COLS: Record<number, string> = { 1: "lg:grid-cols-1", 2: "lg:grid-cols-2", 3: "lg:grid-cols-3" };

// Bento (4+ figures): the largest figure is a big tile on the left (3 of 9
// columns, all rows); the rest fill the right 6 columns in rows of 3 or 2,
// so every row is full. Spans are full class strings so Tailwind sees them.
const SPAN_BY_ROW_SIZE: Record<number, string> = { 1: "lg:col-span-6", 2: "lg:col-span-3", 3: "lg:col-span-2" };
const ROW_SPAN: Record<number, string> = { 1: "lg:row-span-1", 2: "lg:row-span-2", 3: "lg:row-span-3", 4: "lg:row-span-4" };

/** Split n tiles into rows of 3, using rows of 2 so no row has one tile. */
function rowSizes(n: number): number[] {
  const rows: number[] = [];
  while (n > 0) {
    const size = n === 4 || n === 2 ? 2 : n === 1 ? 1 : 3;
    rows.push(size);
    n -= size;
  }
  return rows;
}

/** Index of the largest plain figure (e.g. 1,01,000+); the first one if none parse. */
function featuredIndex(items: Stat[]): number {
  let best = 0;
  let bestValue = -1;
  items.forEach((s, i) => {
    const m = figure(s.value);
    const n = m ? Number(m[1].replace(/,/g, "")) : -1;
    if (n > bestValue) {
      best = i;
      bestValue = n;
    }
  });
  return best;
}

export default function CourseStats({ id, tone, data, courseName, sourceName }: SectionProps<Stats>) {
  const items = data.items;
  const bento = items.length >= 4;
  const featured = bento ? featuredIndex(items) : -1;

  // Column span for each non-featured tile, in DOM order.
  const others = items.length - (bento ? 1 : 0);
  const rows = rowSizes(others);
  const spans = rows.flatMap((size) => Array<string>(size).fill(SPAN_BY_ROW_SIZE[size]));

  let k = 0;
  return (
    <CourseSection id={id} tone={tone}>
      <SectionHeader id={id} eyebrow={data.eyebrow} heading={data.heading} intro={data.intro} />

      {/* Items stay in their data order in the HTML; the featured tile is moved
          visually (order / explicit grid placement), so the text is unchanged. */}
      <dl
        className={`${SPACE.body} grid grid-cols-2 ${GRID_GAP} ${
          bento ? "lg:grid-flow-row-dense lg:grid-cols-9" : ROW_COLS[items.length]
        }`}
      >
        {items.map((s, i) => {
          if (i === featured) {
            return (
              <div
                key={s.label}
                className={`${CARD} col-span-2 order-first border-orange-100 bg-gradient-to-br from-orange-50 via-white to-white p-6 sm:p-8 lg:order-none lg:col-span-3 lg:col-start-1 lg:row-start-1 ${ROW_SPAN[rows.length] ?? "lg:row-span-2"}`}
              >
                <dt className="sr-only">{s.label}</dt>
                {/* Same markup order as the other tiles (value, label, note);
                    the label is lifted to the top with flex order. */}
                <dd className="flex h-full flex-col">
                  <span className="block text-5xl font-extrabold tracking-tight text-slate-900 tabular-nums sm:text-6xl">
                    <StatValue value={s.value} />
                  </span>
                  <span className="order-first mb-8 text-sm font-semibold text-slate-600 lg:mb-auto">{s.label}</span>
                  <span className="mt-4 block h-1 w-12 rounded-full bg-brand" aria-hidden="true" />
                  {s.note && (
                    <span className="mt-3 block text-sm text-slate-500">
                      <Rich text={s.note} />
                    </span>
                  )}
                </dd>
              </div>
            );
          }

          const n = k++;
          // On phones (2 columns) an odd last tile spans both columns.
          const wideOnPhone = n === others - 1 && others % 2 === 1;
          return (
            <div
              key={s.label}
              className={`${CARD} p-5 transition-colors duration-300 hover:border-orange-200 sm:p-6 ${wideOnPhone ? "col-span-2" : ""} ${bento ? spans[n] : "lg:col-span-1"}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-3xl font-extrabold tracking-tight text-slate-900 tabular-nums">
                  <StatValue value={s.value} />
                </span>
                <span className="mt-1.5 block text-sm font-medium text-slate-600">{s.label}</span>
                {s.note && (
                  <span className="mt-1 block text-xs text-slate-500">
                    <Rich text={s.note} />
                  </span>
                )}
              </dd>
            </div>
          );
        })}
      </dl>
      <SectionNote text={data.footnote} />

      <ContentBlocks blocks={data.extras} />
      <SectionOutro text={data.outro} />
      <CtaButtons actions={data.ctas} courseName={courseName} source={`${sourceName} - Stats Section`} className={SPACE.block} />
    </CourseSection>
  );
}
