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

import { blank, type LinkItem, type Text } from "./types";

/* ── The class ──────────────────────────────────────────────────────────── */

export const klass = {
  name: "Ms. Gelfand's 4th Grade",
  shortName: "4th Grade",
  school: { en: "", es: "" } as Text,
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
  { label: { en: "Parent Sign-In", es: "Registro de Padres" }, href: "" },
  { label: { en: "AlphaPoint", es: "AlphaPoint" }, href: "" },
  { label: { en: "Forms", es: "Formularios" }, href: "" },
  { label: { en: "Google Form", es: "Formulario de Google" }, href: "" },
  { label: { en: "CMS Volunteer", es: "Voluntarios de CMS" }, href: "" },
  { label: { en: "Infinite Campus", es: "Infinite Campus" }, href: "" },
];

/* ── About Your Teachers ────────────────────────────────────────────────── */

export type Teacher = {
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
    title: { en: "ClassLink / LaunchPad", es: "ClassLink / LaunchPad" },
    body: blank,
    href: "",
    username: blank,
    password: blank,
  },
  {
    title: { en: "i-Ready", es: "i-Ready" },
    body: blank,
    href: "",
    username: blank,
    password: blank,
  },
  {
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
    title: { en: "Bank Account", es: "Cuenta Bancaria" },
    body: blank,
    href: "",
    username: blank,
    password: blank,
  },
];

/* ── Classroom Economy ──────────────────────────────────────────────────── */

export type EconomyBlock = { title: Text; body: Text };

/** The opening blurb about the goal of the economy. */
export const economyIntro: Text = blank;

/** Ways students earn. */
export const makingBank: EconomyBlock[] = [
  { title: { en: "Classroom Jobs", es: "Trabajos del Salón" }, body: blank },
  { title: { en: "Bonuses", es: "Bonificaciones" }, body: blank },
  { title: { en: "Bonus Notices", es: "Avisos de Bonificación" }, body: blank },
];

/** Ways students lose money. */
export const breakingBank: EconomyBlock[] = [
  { title: { en: "Fines", es: "Multas" }, body: blank },
  { title: { en: "Minor Violations", es: "Faltas Menores" }, body: blank },
  {
    title: { en: "Tickets (must be signed)", es: "Boletas (deben firmarse)" },
    body: blank,
  },
  {
    title: { en: "Major Violations", es: "Faltas Mayores" },
    body: blank,
  },
];

/** The three immediate-ticket behaviours from the sketch. */
export const majorViolations: Text[] = [
  { en: "Dishonesty", es: "Deshonestidad" },
  { en: "Disrespect", es: "Falta de respeto" },
  { en: "Unsafe body", es: "Comportamiento inseguro" },
];

/** The remaining economy sections, each its own box on the page. */
export const economySections: EconomyBlock[] = [
  { title: { en: "Monthly Bills", es: "Cuentas Mensuales" }, body: blank },
  { title: { en: "Agenda Scores", es: "Puntos de Agenda" }, body: blank },
  { title: { en: "The Perks", es: "Los Beneficios" }, body: blank },
];
