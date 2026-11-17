// Pure helpers for the inline markup used in course content (see
// src/components/ui/Rich.tsx): **bold**, *em*, [[accent]], `\*` = literal *.

const ESC = "\u0000";

/** Swap `\*` for a placeholder so it isn't read as markup. */
export const escapeStars = (s: string) => s.replace(/\\\*/g, ESC);

/** Restore placeholders from escapeStars as literal asterisks. */
export const unescapeStars = (s: string) => s.replace(/\u0000/g, "*");

/** Plain text for JSON-LD and aria labels. */
export function stripMarkup(text: string): string {
  return unescapeStars(
    escapeStars(text)
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\*([^*\s][^*]*)\*/g, "$1")
      .replace(/\[\[([^\]]+)\]\]/g, "$1"),
  );
}
