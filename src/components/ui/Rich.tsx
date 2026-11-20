// Tiny inline-markup renderer shared by server and client components.
//   Rich    — **bold**, *em*, and {rating} {ratingValue} {reviews} {studentsPlaced}
//             replaced with the live site stats. `\*` is a literal asterisk.
//   Heading — [[key phrase]] rendered in the brand colour.
// stripMarkup() (from lib/richText) returns plain text for JSON-LD and aria labels.

import { Fragment, type ReactNode } from "react";
import { SiteStat } from "@/components/stats/SiteStatsProvider";
import { escapeStars, unescapeStars } from "@/lib/rich-text";

export { stripMarkup } from "@/lib/rich-text";

const STAT_KEYS = ["rating", "ratingValue", "reviews", "studentsPlaced"] as const;
type StatKey = (typeof STAT_KEYS)[number];

const TOKEN = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|\{(?:rating|ratingValue|reviews|studentsPlaced)\})/g;
const STAT_TOKEN = /(\{(?:rating|ratingValue|reviews|studentsPlaced)\})/g;

/** Plain text with stat tokens swapped for live values (used inside bold/em). */
function WithStats({ text }: { text: string }) {
  return (
    <>
      {text.split(STAT_TOKEN).map((part, i) => {
        const k = part.slice(1, -1) as StatKey;
        return part.startsWith("{") && STAT_KEYS.includes(k) ? (
          <SiteStat key={i} k={k} />
        ) : (
          <Fragment key={i}>{unescapeStars(part)}</Fragment>
        );
      })}
    </>
  );
}

export function Rich({ text }: { text: string }) {
  const parts = escapeStars(text).split(TOKEN);
  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-slate-900">
              <WithStats text={part.slice(2, -2)} />
            </strong>
          );
        }
        if (part.startsWith("{") && part.endsWith("}")) {
          const k = part.slice(1, -1) as StatKey;
          if (STAT_KEYS.includes(k)) return <SiteStat key={i} k={k} />;
        }
        if (part.length > 2 && part.startsWith("*") && part.endsWith("*")) {
          return (
            <em key={i}>
              <WithStats text={part.slice(1, -1)} />
            </em>
          );
        }
        return <Fragment key={i}>{unescapeStars(part)}</Fragment>;
      })}
    </>
  );
}

export function Heading({ text, accentClassName = "text-brand" }: { text: string; accentClassName?: string }): ReactNode {
  return (
    <>
      {text.split(/(\[\[[^\]]+\]\])/g).map((part, i) =>
        part.startsWith("[[") ? (
          <span key={i} className={accentClassName}>{part.slice(2, -2)}</span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
