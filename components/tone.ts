/**
 * The pastel each card is tinted with — one definition for the whole site.
 *
 * Previously the card colors and the teacher-field colors were two separate
 * copies of the same values, which meant a palette change had to be made in
 * two files and silently drifted if you forgot one.
 */

export type Tone = "mint" | "lilac" | "ice" | "plain";

/** Background + border for a tinted card. */
export const toneSurface: Record<Tone, string> = {
  mint: "bg-highlight-soft/60 border-highlight/25",
  lilac: "bg-accent-soft/50 border-accent/25",
  ice: "bg-sky-soft/50 border-sky-ink/20",
  plain: "bg-surface border-line",
};

/** Heading color that reads against that background. */
export const toneHeading: Record<Tone, string> = {
  mint: "text-highlight",
  lilac: "text-accent",
  ice: "text-sky-ink",
  plain: "text-ink",
};

/** The wash behind a page's masthead. */
export const toneWash: Record<Exclude<Tone, "plain">, string> = {
  mint: "from-highlight-soft/60",
  lilac: "from-accent-soft/50",
  ice: "from-sky-soft/60",
};
