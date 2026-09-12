/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SITE-WIDE SETTINGS — the class, the tabs, and how to reach you.
 *
 *  Page content lives beside this file, one file per page:
 *
 *    content/newsletters.ts        the weekly newsletter
 *    content/teachers.ts           About Your Teachers
 *    content/student-tech.ts       Student Tech at Home
 *    content/classroom-economy.ts  Classroom Economy
 *    content/quick-links.ts        the links at the bottom of a newsletter
 *
 *  Every piece of writing is { en: "...", es: "..." }. Write the English;
 *  add the Spanish whenever you get to it. Leave a field blank and the page
 *  shows a dashed placeholder box there until you fill it in.
 * ─────────────────────────────────────────────────────────────────────────
 */

import { blank, type Text } from "./types";

/* ── The class ──────────────────────────────────────────────────────────── */

export const klass = {
  name: "Ms. Gelfand's 4th Grade",
  shortName: "4th Grade",
  school: { en: "Governors' Village STEM Academy (Lower)", es: "" },
  year: "2026–2027",
  description:
    "Weekly newsletters and family resources for Ms. Gelfand's 4th grade class.",
  /** Used for link previews. Update if the site address ever changes. */
  url: "https://mgelfand615.github.io/Ms-Gelfands-Newsletters",
};

/* ── Navigation ─────────────────────────────────────────────────────────── */

export type NavLink = { label: Text; href: string };

export const nav: NavLink[] = [
  { label: { en: "Newsletter", es: "Boletín" }, href: "/" },
  {
    label: { en: "Past Newsletters", es: "Boletines Anteriores" },
    href: "/newsletters",
  },
  {
    label: { en: "About Your Teachers", es: "Sobre Sus Maestras" },
    href: "/teachers",
  },
  {
    label: { en: "Student Tech at Home", es: "Tecnología en Casa" },
    href: "/student-tech",
  },
  {
    label: { en: "Classroom Economy", es: "Economía del Salón" },
    href: "/classroom-economy",
  },
];

/* ── Contact ────────────────────────────────────────────────────────────── */

export const contact = {
  email: "madisona.gelfand@cms.k12.nc.us",
  hours: blank,
};
