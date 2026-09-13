/**
 * ─────────────────────────────────────────────────────────────────────────
 *  ABOUT YOUR TEACHERS  →  /teachers
 *
 *  One entry per teacher. Leave a field blank — or a list empty — and that
 *  part of the card shows a dashed placeholder until you fill it in.
 * ─────────────────────────────────────────────────────────────────────────
 */

import { blank, type Text } from "./types";

/** One line of Education: the school, and what was earned there. */
export type Degree = { school: Text; credential: Text };

/** One line of Favorites: "Snack" and "Trail mix". */
export type Favorite = { label: Text; value: Text };

export type Teacher = {
  /** Permanent internal name — never shown. Keep it stable. */
  id: string;
  name: string;
  /** Subjects this teacher covers, e.g. "Reading" or "Math" */
  subject: Text;
  /** Drop a photo in /public and put the filename here, e.g. "/gelfand.jpg" */
  photo: string;
  /** Shown under the name as a link. Leave blank to hide it. */
  email: string;
  /** Shown beside the email. Leave blank to hide it. */
  phone: string;
  aboutMe: Text;
  education: Degree[];
  favorites: Favorite[];
};

export const teachers: Teacher[] = [
  {
    id: "gelfand",
    name: "Ms. Gelfand",
    subject: { en: "Reading", es: "Lectura" },
    photo: "/ms-gelfand.jpg",
    email: "madisona.gelfand@cms.k12.nc.us",
    phone: "(330) 348-7950",
    aboutMe: {
      en: "My name is Madison Gelfand and I'm from Cleveland, OH. This is my fifth year teaching at GVSA. I previously taught 2nd and 3rd grade, and I'm super excited to start my journey as a 4th grade reading teacher. I'm a proud pet parent to two cats, Orion and Aquila, and one dog, Echo. Some of my favorite things include reading, kayaking, and going on walks with Echo.",
      es: "Me llamo Madison Gelfand y soy de Cleveland, Ohio. Este es mi quinto año enseñando en GVSA. Anteriormente enseñé segundo y tercer grado, y estoy muy emocionada de comenzar mi camino como maestra de lectura de cuarto grado. Soy orgullosa dueña de dos gatos, Orion y Aquila, y un perro, Echo. Algunas de mis cosas favoritas son leer, hacer kayak y salir a caminar con Echo.",
    },
    education: [
      {
        school: { en: "University of Rochester", es: "University of Rochester" },
        credential: {
          en: "B.A. in Psychology & American Sign Language",
          es: "Licenciatura en Psicología y Lenguaje de Señas Americano",
        },
      },
      {
        school: { en: "East Carolina University", es: "East Carolina University" },
        credential: {
          en: "Teaching License Certification",
          es: "Certificación de Licencia Docente",
        },
      },
      {
        school: { en: "UNC Charlotte", es: "UNC Charlotte" },
        credential: {
          en: "M.Ed. in Curriculum & Instruction · expected 2027",
          es: "Maestría en Currículo e Instrucción · previsto para 2027",
        },
      },
    ],
    favorites: [
      {
        label: { en: "Colors", es: "Colores" },
        value: { en: "Green and purple", es: "Verde y morado" },
      },
      {
        label: { en: "Snack", es: "Botana" },
        value: { en: "Trail mix", es: "Mezcla de frutos secos" },
      },
      {
        label: { en: "Treat", es: "Golosina" },
        value: {
          en: "Anything chocolate",
          es: "Cualquier cosa de chocolate",
        },
      },
      {
        label: { en: "Hobby", es: "Pasatiempo" },
        value: { en: "Reading", es: "Leer" },
      },
    ],
  },
  {
    // Replace with your co-teacher's name.
    id: "second-teacher",
    name: "«Second Teacher»",
    subject: { en: "Math", es: "Matemáticas" },
    photo: "",
    email: "",
    phone: "",
    aboutMe: blank,
    education: [],
    favorites: [],
  },
];
