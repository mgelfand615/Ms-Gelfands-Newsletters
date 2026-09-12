/**
 * Card tones, named for what they mean rather than what colour they are.
 *
 * Picking "good" instead of "mint" is what stops the palette drifting back
 * into decoration: if no role fits, the answer is `plain`, not a new colour.
 *
 *   good     earning, celebrating          green
 *   caution  fines, tickets, warnings      clay
 *   info     dates and deadlines           blue
 *   brand    the site's own voice          purple
 *   plain    ordinary content              white
 */

export type Tone = "good" | "caution" | "info" | "brand" | "plain";

/** Background + border for a tinted card. */
export const toneSurface: Record<Tone, string> = {
  good: "bg-good-soft border-good/30",
  caution: "bg-caution-soft border-caution/30",
  info: "bg-info-soft border-info/30",
  brand: "bg-accent-soft border-accent/30",
  plain: "bg-surface border-line",
};

/** Heading colour that reads against that background. */
export const toneHeading: Record<Tone, string> = {
  good: "text-good",
  caution: "text-caution",
  info: "text-info",
  brand: "text-accent",
  plain: "text-ink",
};
