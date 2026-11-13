import type { CSSProperties } from 'react';
import type { ServiceClient } from '@/types/service';
import { ServiceSectionHeader } from './serviceDetailShared';

/** Gradient ends: a light orange, and the brand orange a shade darker. */
const FROM = '#ffd9a8';
const TO = '#e67a00';

/**
 * Shapes.
 *
 * Phones: a vertical chevron flow. Every step is a full-width block whose
 * bottom points down (14px) into the next; every step after the first has a
 * matching notch on top, and overlaps the one above so the point sits in it.
 *
 * From `lg`: a rising staircase. The first step is a plain base block, every
 * later step an upward arrow (20px head). Hover grow: each step reserves 12px
 * of hidden headroom that hovering reveals by animating the clip-path, so only
 * the outline moves and no other step shifts.
 */
const BASE_SHAPE =
  'rounded-t-lg pt-3.5 [clip-path:polygon(0_0,100%_0,100%_calc(100%_-_14px),50%_100%,0_calc(100%_-_14px))] ' +
  'lg:rounded-none lg:pt-[22px] ' +
  'lg:[clip-path:inset(12px_0_0_0_round_8px)] lg:hover:[clip-path:inset(0_0_0_0_round_8px)]';
const ARROW_SHAPE =
  '-mt-[10px] pt-7 [clip-path:polygon(0_0,50%_14px,100%_0,100%_calc(100%_-_14px),50%_100%,0_calc(100%_-_14px))] ' +
  'lg:pt-11 ' +
  'lg:[clip-path:polygon(50%_12px,100%_32px,100%_100%,0_100%,0_32px)] ' +
  'lg:hover:[clip-path:polygon(50%_0,100%_20px,100%_100%,0_100%,0_20px)]';

/**
 * Skill Trajectory. One light-orange-to-brand gradient runs through the steps
 * (each step starts where the previous ended): top to bottom on phones, left
 * to right from `lg`. The outcome is written inside each step.
 *
 * From `lg`: columns on one baseline. The grid row is as tall as the tallest
 * column needs; each column is pulled down by (1 - q) × 120px, so the first
 * is just tall enough for its text and each later one is taller.
 */
export default function ServiceDetailOutcomesSection({ service }: { service: ServiceClient }) {
  const outcomes = (service.outcomes ?? [])
    .filter(Boolean)
    .map((o) => (Array.isArray(o) ? o.join(', ') : o));
  if (outcomes.length === 0) return null;

  const n = outcomes.length;
  // 0 for the first step, 1 for the last.
  const step = (i: number) => (n === 1 ? 1 : i / (n - 1));
  const mix = (t: number) => `color-mix(in srgb, ${TO} ${Math.round(100 * t)}%, ${FROM})`;

  return (
    <section className="bg-gray-50 py-12 lg:py-16" aria-labelledby="outcomes-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ServiceSectionHeader
          id="outcomes-heading"
          pill="Outcomes"
          title={<>Skill <span className="text-brand">Trajectory</span></>}
          intro="The skills and results your team builds, one step at a time."
        />

        {/* drop-shadow (not box-shadow) so the outline follows the shapes */}
        <ol
          className="mx-auto max-w-md drop-shadow-md sm:max-w-lg lg:grid lg:max-w-5xl lg:grid-cols-[repeat(var(--n),minmax(0,1fr))] lg:gap-2.5"
          style={{ '--n': n } as CSSProperties}
        >
          {outcomes.map((text, i) => (
            <li
              key={`outcome-${i}`}
              style={{ '--q': step(i), '--from': mix(i / n), '--to': mix((i + 1) / n) } as CSSProperties}
              className={[
                'relative flex items-center justify-center px-4 pb-7 text-center text-slate-900',
                'bg-[linear-gradient(to_bottom,var(--from),var(--to))] lg:bg-[linear-gradient(to_right,var(--from),var(--to))]',
                // lg: left-aligned text at the bottom; shorter columns are pulled down from the top.
                'lg:items-end lg:justify-start lg:px-3 lg:pb-3 lg:text-left lg:mt-[calc((1-var(--q))*120px)]',
                // Hover (lg): the outline grows 12px taller (see BASE_SHAPE / ARROW_SHAPE).
                'lg:transition-[clip-path] lg:duration-300 lg:ease-out motion-reduce:transition-none',
                i === 0 ? BASE_SHAPE : ARROW_SHAPE,
              ].join(' ')}
            >
              {/* min-w-0 + break-words: long tokens like "Academic/professional" wrap inside narrow columns */}
              <p className="min-w-0 break-words text-sm font-semibold leading-snug">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
