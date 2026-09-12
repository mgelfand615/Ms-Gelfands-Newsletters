/**
 * ─────────────────────────────────────────────────────────────────────────
 *  ABOUT YOUR TEACHERS  →  /teachers
 *
 *  One entry per teacher. Leave a field blank and that box shows a dashed
 *  placeholder until you fill it in.
 * ─────────────────────────────────────────────────────────────────────────
 */

import { blank, type Text } from "./types";

export type Teacher = {
  /** Permanent internal name — never shown. Keep it stable. */
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
