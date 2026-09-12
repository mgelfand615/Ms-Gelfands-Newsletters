/**
 * ─────────────────────────────────────────────────────────────────────────
 *  WEEKLY NEWSLETTERS
 *
 *  ADDING A NEW WEEK
 *  -----------------
 *  1. Copy the whole `{ … }` block below.
 *  2. Paste it at the TOP of the `newsletters` array.
 *  3. Change `slug`, `week`, `date`, `dateRange`, and fill in the writing.
 *
 *  The newest entry by `date` automatically becomes the one families land
 *  on, and last week's moves to the Past Newsletters tab. You never have to
 *  move anything else.
 *
 *  Every field is { en: "...", es: "..." }. Write the English; add Spanish
 *  when you can. Anything left blank shows a dashed placeholder box.
 * ─────────────────────────────────────────────────────────────────────────
 */

import { blank, type Text } from "./types";

export type Subject = {
  /**
   * A short, permanent name used internally — never shown to anyone.
   * Keep it the same even if you reword the heading.
   */
  id: string;
  name: Text;
  /** What we're doing in this subject this week. */
  body: Text;

  /**
   * How wide the box is.
   *   "full" — stretches all the way across; good for a few sentences.
   *   "half" — sits beside the next "half" box; the big ones.
   *
   * Order matters: boxes fill left to right in the order listed below.
   */
  span: "full" | "half";

  /** Set false to hide the homework box for this subject entirely. */
  showHomework: boolean;

  /** This week's homework for this subject. */
  homework: Text;
  /** Optional link to directions, a slide deck, a practice site… */
  directionsLink: string;
  /** The words families click for that link. */
  directionsLabel: Text;
};

export type Newsletter = {
  /** URL segment — lowercase with dashes. Must be unique. */
  slug: string;
  week: number;
  /** YYYY-MM-DD. This is what decides which newsletter is newest. */
  date: string;
  /** How the week is written out, e.g. "September 8–11" */
  dateRange: Text;

  updates: Text;
  upcomingDates: Text;
  birthdays: Text;
  learning: Subject[];
};

const directions: Text = { en: "Directions", es: "Instrucciones" };

/** A fresh, empty week. Copy this block to start each newsletter. */
export const newsletters: Newsletter[] = [
  {
    slug: "week-1",
    week: 1,
    date: "2026-09-11",
    dateRange: blank,

    updates: blank,
    upcomingDates: blank,
    birthdays: blank,

    // Listed in the order they appear on the page.
    learning: [
      {
        // Across the top — a few sentences.
        id: "sel",
        name: {
          en: "Social Emotional Learning",
          es: "Aprendizaje Socioemocional",
        },
        body: blank,
        span: "full",
        showHomework: false,
        homework: blank,
        directionsLink: "",
        directionsLabel: directions,
      },
      {
        // Left-hand big box.
        id: "reading",
        name: { en: "Reading", es: "Lectura" },
        body: blank,
        span: "half",
        showHomework: true,
        homework: blank,
        directionsLink: "",
        directionsLabel: directions,
      },
      {
        // Right-hand big box.
        id: "math",
        name: { en: "Math", es: "Matemáticas" },
        body: blank,
        span: "half",
        showHomework: true,
        homework: blank,
        directionsLink: "",
        directionsLabel: directions,
      },
      {
        // Across the bottom.
        id: "social-studies",
        name: { en: "Social Studies", es: "Estudios Sociales" },
        body: blank,
        span: "full",
        showHomework: false,
        homework: blank,
        directionsLink: "",
        directionsLabel: directions,
      },
    ],
  },
];

/* ── Checks ─────────────────────────────────────────────────────────────────
   These run when the site is built. They turn two easy mistakes into a plain
   sentence telling you what to fix, instead of a confusing framework error
   several steps later.                                                      */

if (newsletters.length === 0) {
  throw new Error(
    "content/newsletters.ts: the `newsletters` list is empty. The site needs " +
      "at least one newsletter — paste the template block back in.",
  );
}

const slugsSeen = new Set<string>();
for (const entry of newsletters) {
  if (slugsSeen.has(entry.slug)) {
    throw new Error(
      `content/newsletters.ts: two newsletters both use slug "${entry.slug}". ` +
        'Each week needs its own, e.g. "week-1", "week-2".',
    );
  }
  slugsSeen.add(entry.slug);
}

/* ── Helpers ────────────────────────────────────────────────────────────── */

/** All newsletters, newest first. */
export function allNewsletters(): Newsletter[] {
  return [...newsletters].sort((a, b) => b.date.localeCompare(a.date));
}

/** The one families land on. Guaranteed to exist by the check above. */
export function latestNewsletter(): Newsletter {
  return allNewsletters()[0];
}

/** Everything except the newest — the Past Newsletters tab. */
export function pastNewsletters(): Newsletter[] {
  return allNewsletters().slice(1);
}

export function newsletterBySlug(slug: string): Newsletter | undefined {
  return newsletters.find((n) => n.slug === slug);
}
