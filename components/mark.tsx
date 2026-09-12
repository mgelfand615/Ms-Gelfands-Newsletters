/**
 * ─────────────────────────────────────────────────────────────────────────
 *  THE SITE MARK — a paper airplane climbing out of an apple.
 *
 *  Construction notes, so a later change keeps the drawing honest:
 *
 *  • The apple is symmetric about x=16 and its own weight sits high, so its
 *    optical centre is ≈(16, 18) — lower than the box centre at 16.
 *  • The plane is drawn upright, centred on that point, then rotated about
 *    that same point. Rotating about the optical centre is what lets it look
 *    angled and still sit centred inside the apple.
 *  • The stem stays upright. A still apple under a climbing plane is what
 *    gives the mark its sense of motion.
 *  • Everything stays inside a 3px safe area, so nothing clips when a phone
 *    masks the icon into a circle.
 *
 *  app/icon.svg carries the same three paths for the browser tab. A test
 *  (tests/mark.test.ts) fails if the two ever drift apart.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const APPLE_PATH =
  "M16 11.4C14.6 9.4 11.9 9 10.2 10.4 8.2 12 7.6 15.4 8.6 18.8 9.5 21.9 11.3 24.6 13 24.6c1 0 1.8-.5 3-.5s2 .5 3 .5c1.7 0 3.5-2.7 4.4-5.8 1-3.4.4-6.8-1.6-8.4C20.1 9 17.4 9.4 16 11.4Z";

export const STEM_PATH = "M16 11.4c-.1-1.9.9-3.3 2.5-3.9";

export const PLANE_PATH = "M16 12 20.6 20.6 16 17.2 11.4 20.6Z";

/** Degrees clockwise, turned about the apple's optical centre. */
export const PLANE_ROTATION = "rotate(35 16 18)";

const PURPLE = "#5b4fc7";
const MINT = "#6befb2";
const PALE_MINT = "#c5f7db";

/** The mark, for use inside the app (the browser tab uses app/icon.svg). */
export function Mark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role="img"
      aria-label="Ms. Gelfand's 4th Grade"
    >
      <rect width="32" height="32" rx="8" fill={PURPLE} />
      <path d={APPLE_PATH} fill={MINT} />
      <path
        d={STEM_PATH}
        fill="none"
        stroke={PALE_MINT}
        strokeWidth="1.9"
        strokeLinecap="round"
      />
      <path d={PLANE_PATH} fill={PURPLE} transform={PLANE_ROTATION} />
    </svg>
  );
}
