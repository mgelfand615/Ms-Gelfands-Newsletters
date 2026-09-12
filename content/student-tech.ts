/**
 * ─────────────────────────────────────────────────────────────────────────
 *  STUDENT TECH AT HOME  →  /student-tech
 *
 *  ⚠ DO NOT PUT REAL PASSWORDS HERE.
 *
 *  This website is public — anyone who finds the address can read it, and
 *  search engines will index it. A shared student password posted here would
 *  let a stranger sign in as your students.
 *
 *  Safe to post:   where to go, what the username *pattern* is
 *                  ("your child's student ID"), and what to click.
 *  Not safe:       the actual password, or anything that completes a login.
 *
 *  Send passwords home on paper, or in an email to that family only.
 * ─────────────────────────────────────────────────────────────────────────
 */

import { blank, type Text } from "./types";

export type TechStep = {
  /** Permanent internal name — never shown. Keep it stable. */
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
    title: { en: "Google Drive & Classroom", es: "Google Drive y Classroom" },
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
