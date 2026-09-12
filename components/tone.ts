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

/**
 * Subject tints for What We're Learning.
 *
 * Here colour marks the subject rather than a role — keep a subject on the
 * same colour every week and families learn where to look. Headings and body
 * stay black on these, which is why they are the palest tints.
 *
 * They reuse the role tint tokens so dark mode is handled: a pastel light
 * enough for black text would be blinding on a dark page.
 */
export type SubjectColor = "mint" | "lilac" | "ice" | "clay";

export const subjectSurface: Record<SubjectColor, string> = {
  mint: "bg-good-soft border-good/25",
  lilac: "bg-accent-soft border-accent/25",
  ice: "bg-info-soft border-info/25",
  clay: "bg-caution-soft border-caution/25",
};

/** The panel inside a subject card — a step further from the card's tint. */
export const subjectPanel: Record<SubjectColor, string> = {
  mint: "bg-surface/70",
  lilac: "bg-surface/70",
  ice: "bg-surface/70",
  clay: "bg-surface/70",
};
