/**
 * ─────────────────────────────────────────────────────────────────────────
 *  ABOUT YOUR TEACHERS  →  /teachers
 *
 *  One entry per teacher. Leave a field blank and that box shows a dashed
 *  placeholder until you fill it in.
 *
 *  A line break (\n) inside a field becomes a line break on the page, which
 *  is what lets Education and Favorites be lists rather than paragraphs.
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
    photo: "/ms-gelfand.jpg",
    aboutMe: {
      en: "My name is Madison Gelfand and I'm from Cleveland, OH. This is my fifth year teaching at GVSA. I previously taught 2nd and 3rd grade, and I'm super excited to start my journey as a 4th grade reading teacher. I'm a proud pet parent to two cats, Orion and Aquila, and one dog, Echo. Some of my favorite things include reading, kayaking, and going on walks with Echo.",
      es: "Me llamo Madison Gelfand y soy de Cleveland, Ohio. Este es mi quinto año enseñando en GVSA. Anteriormente enseñé segundo y tercer grado, y estoy muy emocionada de comenzar mi camino como maestra de lectura de cuarto grado. Soy orgullosa dueña de dos gatos, Orion y Aquila, y un perro, Echo. Algunas de mis cosas favoritas son leer, hacer kayak y salir a caminar con Echo.",
    },
    contact: {
      en: "madisona.gelfand@cms.k12.nc.us\n(330) 348-7950",
      es: "madisona.gelfand@cms.k12.nc.us\n(330) 348-7950",
    },
    education: {
      en: "University of Rochester — B.A. in Psychology & American Sign Language\nEast Carolina University — Teaching License Certification\nUNC Charlotte (expected 2027) — M.Ed. in Curriculum & Instruction",
      es: "University of Rochester — Licenciatura en Psicología y Lenguaje de Señas Americano\nEast Carolina University — Certificación de Licencia Docente\nUNC Charlotte (previsto para 2027) — Maestría en Currículo e Instrucción",
    },
    favorites: {
      en: "Colors: Green and purple\nSnack: Trail mix\nTreat: Anything chocolate\nHobby: Reading",
      es: "Colores: Verde y morado\nBotana: Mezcla de frutos secos\nGolosina: Cualquier cosa de chocolate\nPasatiempo: Leer",
    },
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
