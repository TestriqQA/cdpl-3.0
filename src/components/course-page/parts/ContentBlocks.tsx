import { Rich } from "@/components/ui/Rich";
import { CARD, Dot, GRID_GAP, IconTile, SPACE } from "./Section";
import { ICONS, tileColour } from "./icons";
import type { ContentBlock } from "@/types/course-page";

/** Renders a section's one-off `extras` blocks, each SPACE.block below the last. */
export default function ContentBlocks({ blocks }: { blocks?: ContentBlock[] }) {
  if (!blocks?.length) return null;
  return (
    <>
      {blocks.map((b, i) => (
        <div key={i} className={SPACE.block}>
          {b.title && <h3 className="mb-5 text-center text-xl font-bold text-slate-900">{b.title}</h3>}
          <Block block={b} />
        </div>
      ))}
    </>
  );
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.kind) {
    case "cards":
      return (
        <ul className={`grid ${GRID_GAP} md:grid-cols-2 lg:grid-cols-3`}>
          {block.items.map(({ icon, title, description, points }, i) => {
            const Icon = ICONS[icon];
            return (
              <li key={title} className={`${CARD} p-6`}>
                <div className="flex items-center gap-3">
                  <IconTile className={tileColour(i)}>
                    <Icon className="h-5 w-5" />
                  </IconTile>
                  <h4 className="text-base font-bold leading-snug text-slate-900">{title}</h4>
                </div>
                {description && (
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    <Rich text={description} />
                  </p>
                )}
                <Points points={points} />
              </li>
            );
          })}
        </ul>
      );
    case "list":
      return (
        <ul className={`${CARD} mx-auto grid max-w-4xl gap-2.5 p-6 sm:grid-cols-2`}>
          {block.items.map((t) => (
            <li key={t} className="flex items-start gap-2.5 text-sm text-slate-700">
              <Dot />
              <span>
                <Rich text={t} />
              </span>
            </li>
          ))}
        </ul>
      );
    case "stats":
      return (
        <dl className={`mx-auto grid ${GRID_GAP} ${STATS_COLS[Math.min(block.items.length, 4)]}`}>
          {block.items.map((s) => (
            <div key={s.label} className={`${CARD} p-5 text-center`}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-2xl font-extrabold text-slate-900">
                  <Rich text={s.value} />
                </span>
                <span className="mt-1 block text-sm font-medium text-slate-600">{s.label}</span>
                {s.note && (
                  <span className="mt-1 block text-xs text-slate-500">
                    <Rich text={s.note} />
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      );
    case "steps":
      return (
        <ol className={`grid ${GRID_GAP} md:grid-cols-2 lg:grid-cols-3`}>
          {block.items.map((s, i) => (
            <li key={s.title} className={`${CARD} p-6`}>
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-slate-100 text-sm font-bold text-slate-700" aria-hidden="true">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h4 className="text-base font-bold leading-snug text-slate-900">{s.title}</h4>
                  {s.meta && <p className="text-xs font-medium text-slate-500">{s.meta}</p>}
                </div>
              </div>
              {s.description && (
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  <Rich text={s.description} />
                </p>
              )}
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className={`${CARD} mx-auto max-w-4xl overflow-x-auto`}>
          <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                {block.columns.map((c, i) => (
                  <th key={i} scope="col" className="px-5 py-3 font-semibold text-slate-900">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {block.rows.map(([head, ...cells], r) => (
                <tr key={r} className="border-b border-slate-100 align-top last:border-0">
                  <th scope="row" className="px-5 py-3 font-medium text-slate-900">
                    <Rich text={head} />
                  </th>
                  {cells.map((c, i) => (
                    <td key={i} className="px-5 py-3">
                      <Rich text={c} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "text":
      return (
        <p className="mx-auto max-w-4xl text-center text-base leading-7 text-slate-600">
          <Rich text={block.text} />
        </p>
      );
  }
}

// Column classes by item count, so short rows stay centred.
const STATS_COLS: Record<number, string> = {
  1: "max-w-xs grid-cols-1",
  2: "max-w-xl grid-cols-2",
  3: "max-w-4xl grid-cols-1 sm:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
};

/** Bullet list inside a card. */
export function Points({ points }: { points?: string[] }) {
  if (!points?.length) return null;
  return (
    <ul className="mt-4 space-y-2">
      {points.map((p) => (
        <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700">
          <Dot />
          <span>
            <Rich text={p} />
          </span>
        </li>
      ))}
    </ul>
  );
}
