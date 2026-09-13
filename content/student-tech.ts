/**
 * ─────────────────────────────────────────────────────────────────────────
 *  STUDENT TECH AT HOME  →  /student-tech
 *
 *  ⚠ NEVER PUT A REAL PASSWORD HERE.
 *
 *  This website is public — anyone who finds the address can read it, and
 *  search engines will index it. A shared student password posted here would
 *  let a stranger sign in as your students.
 *
 *  Safe:      where to go, what to click, and the *pattern* of a username
 *             ("your child's Student ID"), and where the password was sent.
 *  Not safe:  the password itself, or anything that completes a login.
 *
 *  Text here can use **bold**, *italics*, and links — see the README.
 * ─────────────────────────────────────────────────────────────────────────
 */

import { blank, type Text } from "./types";

export type TechStep = {
  /** Permanent internal name — never shown. Keep it stable. */
  id: string;
  title: Text;
  /** What families should do — the steps, in plain language. */
  body: Text;
  /** The website to open. Leave blank to hide the link. */
  href: string;
  /** The username *pattern*. Leave blank to hide the row. */
  username: Text;
  /** Where the password can be found — never the password. Blank hides it. */
  password: Text;
  /**
   * Short labelled sections, for a tool that needs more than a paragraph —
   * how to sign in, what to do on a computer, what to do on a tablet.
   */
  notes?: { label: Text; text: Text }[];
  /** App Store listing, if the service has an app. */
  appleApp?: string;
  /** Google Play listing, if the service has an app. */
  androidApp?: string;
};

export const techIntro: Text = {
  en: "Here is where you'll find links to the academic sites your child uses at home. **See below for links and login information.**",
  es: "Aquí encontrará los enlaces a los sitios académicos que su hijo/a usa en casa. **Abajo están los enlaces y la información para iniciar sesión.**",
};

export const techSteps: TechStep[] = [
  {
    id: "classlink",
    title: { en: "ClassLink / LaunchPad", es: "ClassLink / LaunchPad" },
    body: {
      en: "ClassLink is the front door to everything else. Once your child is signed in here, the other sites open without a second login.",
      es: "ClassLink es la puerta de entrada a todo lo demás. Una vez que su hijo/a inicie sesión aquí, los demás sitios se abren sin tener que iniciar sesión otra vez.",
    },
    href: "https://launchpad.classlink.com/cmsk12",
    username: {
      en: "Your child's Student ID",
      es: "La identificación de estudiante de su hijo/a",
    },
    password: {
      en: "In your child's take-home folder",
      es: "En la carpeta que su hijo/a lleva a casa",
    },
    appleApp: "https://apps.apple.com/us/app/classlink-launchpad/id524297631",
    androidApp:
      "https://play.google.com/store/apps/details?id=com.classlink.launchpad.android",
  },
  {
    id: "iready",
    title: { en: "i-Ready", es: "i-Ready" },
    body: blank,
    href: "https://login.i-ready.com/",
    username: blank,
    password: blank,
    notes: [
      {
        label: { en: "Signing in", es: "Cómo iniciar sesión" },
        text: {
          en: "There is **no i-Ready username or password.** Sign in to ClassLink and tap the i-Ready tile.",
          es: "**No hay usuario ni contraseña de i-Ready.** Inicie sesión en ClassLink y toque el ícono de i-Ready.",
        },
      },
      {
        label: {
          en: "On a Chromebook or computer",
          es: "En una Chromebook o computadora",
        },
        text: {
          en: "Use the i-Ready website. There is nothing to install.",
          es: "Use el sitio web de i-Ready. No hay que instalar nada.",
        },
      },
      {
        label: {
          en: "On a tablet or phone",
          es: "En una tableta o teléfono",
        },
        text: {
          en: "The i-Ready app has to be downloaded first — i-Ready will not run in a tablet or phone browser.",
          es: "Hay que descargar la aplicación de i-Ready primero — i-Ready no funciona en el navegador de una tableta o teléfono.",
        },
      },
    ],
  },
  {
    id: "google",
    title: { en: "Google Drive & Classroom", es: "Google Drive y Classroom" },
    body: {
      en: "Two ways in: open it from ClassLink, or go to Google and sign in with your child's school email. Either way you end up at the same ClassLink sign-in page.",
      es: "Dos maneras de entrar: ábralo desde ClassLink, o vaya a Google e inicie sesión con el correo escolar de su hijo/a. De cualquier forma llegará a la misma página de ClassLink.",
    },
    href: "https://accounts.google.com/signin",
    username: {
      en: "StudentID@student.cms.k12.nc.us",
      es: "IDdeEstudiante@student.cms.k12.nc.us",
    },
    password: {
      en: "The same ClassLink password, in your child's take-home folder",
      es: "La misma contraseña de ClassLink, en la carpeta que su hijo/a lleva a casa",
    },
  },
  {
    id: "bank",
    title: { en: "Bank Account", es: "Cuenta Bancaria" },
    body: {
      en: "Where your child checks their classroom savings. **Account type must be set to Student.**",
      es: "Aquí su hijo/a revisa sus ahorros del salón. **El tipo de cuenta debe ser Estudiante.**",
    },
    href: "https://digital.myclassroomeconomy.org/en/login",
    username: {
      en: "First name followed by 2035, with a capital first letter — for example, Madison2035",
      es: "El nombre seguido de 2035, con la primera letra mayúscula — por ejemplo, Madison2035",
    },
    password: {
      en: "In your child's take-home folder",
      es: "En la carpeta que su hijo/a lleva a casa",
    },
  },
];
