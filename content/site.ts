/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SITE CONTENT — everything except the weekly newsletters.
 *
 *  Weekly newsletters live in their own file: content/newsletters.ts
 *
 *  Every piece of writing is { en: "...", es: "..." }. Write the English;
 *  add the Spanish whenever you get to it. Leave a field blank and the page
 *  shows a dashed placeholder box there until you fill it in.
 * ─────────────────────────────────────────────────────────────────────────
 */

import { blank, type Block, type LinkItem, type Text } from "./types";

/* ── The class ──────────────────────────────────────────────────────────── */

export const klass = {
  name: "Ms. Gelfand's 4th Grade",
  shortName: "4th Grade",
  school: blank,
  district: "Charlotte-Mecklenburg Schools",
  year: "2026–2027",
  description:
    "Weekly newsletters and family resources for Ms. Gelfand's 4th grade class.",
  /** Update this after you publish the site. Used for link previews. */
  url: "https://mgelfand615.github.io/Ms-Gelfands-Newsletters",
};

/* ── Navigation ─────────────────────────────────────────────────────────── */

export const nav: { label: Text; href: string }[] = [
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

/* ── Quick Links (bottom of the main page) ──────────────────────────────────
   Paste each web address into `href`. A link with a blank href still shows,
   greyed out, so you can see what's left to fill in.                        */

export const quickLinks: LinkItem[] = [
  { id: "parent-sign-in", label: { en: "Parent Sign-In", es: "Registro de Padres" }, href: "" },
  { id: "alphapoint", label: { en: "AlphaPoint", es: "AlphaPoint" }, href: "" },
  { id: "forms", label: { en: "Forms", es: "Formularios" }, href: "" },
  { id: "google-form", label: { en: "Google Form", es: "Formulario de Google" }, href: "" },
  { id: "cms-volunteer", label: { en: "CMS Volunteer", es: "Voluntarios de CMS" }, href: "" },
  { id: "infinite-campus", label: { en: "Infinite Campus", es: "Infinite Campus" }, href: "" },

];

/* ── About Your Teachers ────────────────────────────────────────────────── */

export type Teacher = {
  /** Permanent internal name — never shown. */
  id: string;
  name: string;
  /** Subjects this teacher covers, e.g. "Reading" or "Math" */
  subject: Text;
  /** Drop a photo in /public and put the filename here, e.g. "/gelfand.jpg" */
  photo: string;
  aboutMe: Text;
  contact: Text;
  education: Text;
  favorites: Text;
};

export const teachers: Teacher[] = [
  {
    id: "gelfand",
    name: "Ms. Gelfand",
    subject: { en: "Reading", es: "Lectura" },
    photo: "",
    aboutMe: blank,
    contact: blank,
    education: blank,
    favorites: blank,
  },
  {
    // Replace with your co-teacher's name.
    id: "second-teacher",
    name: "«Second Teacher»",
    subject: { en: "Math", es: "Matemáticas" },
    photo: "",
    aboutMe: blank,
    contact: blank,
    education: blank,
    favorites: blank,
  },
];

/* ── Student Tech at Home ───────────────────────────────────────────────────
   ⚠ DO NOT PUT REAL PASSWORDS HERE.

   This website is public — anyone who finds the address can read it, and
   search engines will index it. A shared student password posted here would
   let a stranger sign in as your students.

   Safe to post:   where to go, what the username *pattern* is
                   ("your child's student ID"), and what to click.
   Not safe:       the actual password, or anything that completes a login.

   Send passwords home on paper, or in an email to that family only.        */

export type TechStep = {
  /** Permanent internal name — never shown. */
  id: string;
  title: Text;
  /** What families should do — the steps, in plain language. */
  body: Text;
  /** The website to open, if there is one. */
  href: string;
  /** Describe the username pattern, e.g. "Your child's student ID". */
  username: Text;
  /** Say how the password was sent home — never the password itself. */
  password: Text;
};

export const techIntro: Text = blank;

export const techSteps: TechStep[] = [
  {
    id: "classlink",
    title: { en: "ClassLink / LaunchPad", es: "ClassLink / LaunchPad" },
    body: blank,
    href: "",
    username: blank,
    password: blank,
  },
  {
    id: "iready",
    title: { en: "i-Ready", es: "i-Ready" },
    body: blank,
    href: "",
    username: blank,
    password: blank,
  },
  {
    id: "google",
    title: {
      en: "Google Drive & Classroom",
      es: "Google Drive y Classroom",
    },
    body: blank,
    href: "",
    username: blank,
    password: blank,
  },
  {
    id: "bank",
    title: { en: "Bank Account", es: "Cuenta Bancaria" },
    body: blank,
    href: "",
    username: blank,
    password: blank,
  },
];

/* ── Classroom Economy ──────────────────────────────────────────────────── */

/**
 * One box on the Classroom Economy page. `items` is an optional bulleted
 * list shown underneath the paragraph — used for the behaviours that draw an
 * immediate ticket.
 *
 * The list lives on the block it belongs to. It used to be a separate array
 * that the page matched up by comparing the heading text, which meant
 * rewording "Major Violations" silently deleted the list.
 */
export type EconomyBlock = Block & {
  itemsLabel?: Text;
  items?: Text[];
};

/** The opening blurb about the goal of the economy. */
export const economyIntro: Text = blank;

/** Ways students earn. */
export const makingBank: EconomyBlock[] = [
  {
    id: "jobs",
    title: { en: "Classroom Jobs", es: "Trabajos del Salón" },
    body: blank,
  },
  {
    id: "bonuses",
    title: { en: "Bonuses", es: "Bonificaciones" },
    body: blank,
  },
  {
    id: "bonus-notices",
    title: { en: "Bonus Notices", es: "Avisos de Bonificación" },
    body: blank,
  },
];

/** Ways students lose money. */
export const breakingBank: EconomyBlock[] = [
  {
    id: "fines",
    title: { en: "Fines", es: "Multas" },
    body: blank,
  },
  {
    id: "minor-violations",
    title: { en: "Minor Violations", es: "Faltas Menores" },
    body: blank,
  },
  {
    id: "tickets",
    title: { en: "Tickets (must be signed)", es: "Boletas (deben firmarse)" },
    body: blank,
  },
  {
    id: "major-violations",
    title: { en: "Major Violations", es: "Faltas Mayores" },
    body: blank,
    itemsLabel: { en: "Immediate ticket", es: "Boleta inmediata" },
    items: [
      { en: "Dishonesty", es: "Deshonestidad" },
      { en: "Disrespect", es: "Falta de respeto" },
      { en: "Unsafe body", es: "Comportamiento inseguro" },
    ],
  },
];

/** The remaining economy sections, each its own box on the page. */
export const economySections: EconomyBlock[] = [
  {
    id: "monthly-bills",
    title: { en: "Monthly Bills", es: "Cuentas Mensuales" },
    body: blank,
  },
  {
    id: "agenda-scores",
    title: { en: "Agenda Scores", es: "Puntos de Agenda" },
    body: blank,
  },
  {
    id: "perks",
    title: { en: "The Perks", es: "Los Beneficios" },
    body: blank,
  },
];
