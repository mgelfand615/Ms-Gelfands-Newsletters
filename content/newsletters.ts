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
  name: Text;
  /** What we're doing in this subject this week. */
  body: Text;
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

    learning: [
      {
        name: { en: "Spelling", es: "Ortografía" },
        body: blank,
        homework: blank,
        directionsLink: "",
        directionsLabel: { en: "Directions", es: "Instrucciones" },
      },
      {
        name: { en: "Reading", es: "Lectura" },
        body: blank,
        homework: blank,
        directionsLink: "",
        directionsLabel: { en: "Directions", es: "Instrucciones" },
      },
      {
        name: { en: "Math", es: "Matemáticas" },
        body: blank,
        homework: blank,
        directionsLink: "",
        directionsLabel: { en: "Directions", es: "Instrucciones" },
      },
      {
        name: { en: "Social Studies", es: "Estudios Sociales" },
        body: blank,
        homework: blank,
        directionsLink: "",
        directionsLabel: { en: "Directions", es: "Instrucciones" },
      },
    ],
  },
];

/* ── Helpers ────────────────────────────────────────────────────────────── */

/** All newsletters, newest first. */
export function allNewsletters(): Newsletter[] {
  return [...newsletters].sort((a, b) => b.date.localeCompare(a.date));
}

/** The one families land on. */
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
