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
  /** The service's own logo, saved in /public/logos. */
  logo?: string;
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
    logo: "/logos/classlink.png",
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
    logo: "/logos/iready.png",
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
          en: "Use the i-Ready website through ClassLink. There is nothing to install.",
          es: "Use el sitio web de i-Ready desde ClassLink. No hay que instalar nada.",
        },
      },
      {
        label: { en: "On an iPad or iPhone", es: "En un iPad o iPhone" },
        text: {
          en: "Install the free **i-Ready Connect for Students** app first — i-Ready will not run in a tablet browser.",
          es: "Instale primero la aplicación gratuita **i-Ready Connect for Students** — i-Ready no funciona en el navegador de una tableta.",
        },
      },
      {
        label: {
          en: "On an Android tablet or phone",
          es: "En una tableta o teléfono Android",
        },
        text: {
          en: "There is no i-Ready app for Android. Please use a Chromebook or computer instead.",
          es: "No existe una aplicación de i-Ready para Android. Por favor use una Chromebook o computadora.",
        },
      },
    ],
    appleApp:
      "https://apps.apple.com/us/app/i-ready-connect-for-students/id1155613065",
  },
  {
    id: "google",
    logo: "/logos/drive.png",
    title: { en: "Google Drive & Classroom", es: "Google Drive y Classroom" },
    body: blank,
    href: "https://accounts.google.com/signin",
    username: blank,
    password: blank,
    notes: [
      {
        label: { en: "Through ClassLink", es: "Desde ClassLink" },
        text: {
          en: "Sign in to ClassLink and tap the Google Drive or Google Classroom tile. Nothing else to enter.",
          es: "Inicie sesión en ClassLink y toque el ícono de Google Drive o Google Classroom. No hay nada más que escribir.",
        },
      },
      {
        label: { en: "Through Google", es: "Desde Google" },
        text: {
          en: "Go to Google and enter your child's school email — **StudentID@student.cms.k12.nc.us** — and it redirects to ClassLink to sign in. There is no separate Google password.",
          es: "Vaya a Google y escriba el correo escolar de su hijo/a — **IDdeEstudiante@student.cms.k12.nc.us** — y lo redirigirá a ClassLink para iniciar sesión. No hay una contraseña aparte de Google.",
        },
      },
    ],
  },
  {
    id: "bank",
    logo: "/logos/bank.png",
    title: { en: "Bank Account", es: "Cuenta Bancaria" },
    body: {
      en: "Where your child checks their classroom savings. **Account type must be set to Student.**",
      es: "Aquí su hijo/a revisa sus ahorros del salón. **El tipo de cuenta debe ser Estudiante.**",
    },
    href: "https://digital.myclassroomeconomy.org/en/login",
    username: {
      en: "First name followed by 2035, with a capital first letter — for example, Millie2035",
      es: "El nombre seguido de 2035, con la primera letra mayúscula — por ejemplo, Millie2035",
    },
    password: {
      en: "In your child's take-home folder",
      es: "En la carpeta que su hijo/a lleva a casa",
    },
  },
];
