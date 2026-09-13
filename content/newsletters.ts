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
import type { SubjectColor } from "@/components/tone";

/** One line in Upcoming Dates. The day is bolded; the detail is not. */
export type DateEntry = { when: Text; what: Text };

/** One birthday, in its own box. */
export type Birthday = { id: string; name: string; date: Text };

export type Subject = {
  /**
   * A short, permanent name used internally — never shown to anyone.
   * Keep it the same even if you reword the heading.
   */
  id: string;
  name: Text;
  /**
   * What we're doing in this subject this week. One point renders as a
   * sentence; two or more render as bullets.
   */
  body: Text[];

  /**
   * How wide the box is.
   *   "full" — stretches all the way across; good for a few sentences.
   *   "half" — sits beside the next "half" box; the big ones.
   *
   * Order matters: boxes fill left to right in the order listed below.
   */
  span: "full" | "half";

  /**
   * The card's tint. Within a newsletter, colour marks the subject — keep a
   * subject on the same colour every week and families learn to find it.
   */
  color: SubjectColor;

  /** Set false to hide the homework box for this subject entirely. */
  showHomework: boolean;

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

  /** One point per entry. Any web address becomes a link on its own. */
  updates: Text[];
  upcomingDates: DateEntry[];
  birthdays: Birthday[];
  learning: Subject[];
};

const directions: Text = { en: "Directions", es: "Instrucciones" };

/** A fresh, empty week. Copy this block to start each newsletter. */
export const newsletters: Newsletter[] = [
  {
    slug: "week-1",
    week: 1,
    date: "2026-09-11",
    dateRange: { en: "September 14 - September 18", es: "14 - 18 de septiembre" },

    updates: [
      {
        en: "i-Ready testing is all finished!  For students who were absent this on one of the testing days will make it up this coming week.  i-Ready scores will be sent home in your child’s takehome folder soon.",
        es: "¡Las pruebas de i-Ready ya terminaron! Los estudiantes que estuvieron ausentes en uno de los días de prueba las recuperarán esta próxima semana. Los resultados de i-Ready se enviarán a casa próximamente en la carpeta de su hijo/a.",
      },
      {
        en: "Interested in joining the PTA? Click here to join: https://gvsa.givebacks.com/shop",
        es: "¿Le interesa unirse a la PTA? Haga clic aquí para unirse: https://gvsa.givebacks.com/shop",
      },
      {
        en: "GVSA Fundraiser: Our first fundraiser of the school year is kicking off Tuesday, September 22nd, and we’re ready to see which classroom can bring in the BIGGEST popcorn sales! 🚀 Our classroom has its own unique fundraising link that you can share with your families, friends, neighbors, and anyone else who loves a good snack! 🍿 🍕 TOP-SELLING CLASSROOM will earn an EPIC PIZZA PARTY! 🎉🍕\nLink: https://poppinpopcornonline.com/store/store.php?sID=00676032",
        es: "Recaudación de fondos de GVSA: ¡Nuestra primera recaudación de fondos del año escolar comienza el martes 22 de septiembre, y estamos listos para ver qué salón logra las MAYORES ventas de palomitas! 🚀 Nuestro salón tiene su propio enlace de recaudación que puede compartir con su familia, amigos, vecinos y cualquier persona a la que le guste un buen bocadillo. 🍿 🍕 ¡EL SALÓN CON MÁS VENTAS ganará una ÉPICA FIESTA DE PIZZA! 🎉🍕\nEnlace: https://poppinpopcornonline.com/store/store.php?sID=00676032",
      },
    ],

    upcomingDates: [
      {
        when: { en: "Tuesday, September 15th", es: "Martes 15 de septiembre" },
        what: {
          en: "Chuck E. Cheese Fundraiser 3:30pm-9:00pm at 7970 Lyles Lane NW, Concord, NC 28027",
          es: "Recaudación de fondos en Chuck E. Cheese de 3:30pm a 9:00pm en 7970 Lyles Lane NW, Concord, NC 28027",
        },
      },
      {
        when: { en: "Wednesday, September 16th", es: "Miércoles 16 de septiembre" },
        what: { en: "Curriculum Night 5-6pm", es: "Noche de Currículo de 5 a 6pm" },
      },
      {
        when: { en: "Thursday, September 17th", es: "Jueves 17 de septiembre" },
        what: { en: "End Unit Reading Test", es: "Examen de Lectura de Fin de Unidad" },
      },
      {
        when: { en: "Friday, September 18th", es: "Viernes 18 de septiembre" },
        what: { en: "Math Unit 1 Retest", es: "Reexamen de Matemáticas de la Unidad 1" },
      },
    ],

    birthdays: [
      { id: "tebi", name: "Tebi", date: { en: "September 14th", es: "14 de septiembre" } },
      { id: "tabi", name: "Tabi", date: { en: "September 14th", es: "14 de septiembre" } },
      {
        id: "antonella",
        name: "Antonella",
        date: { en: "September 14th", es: "14 de septiembre" },
      },
    ],

    // Listed in the order they appear on the page.
    learning: [
      {
        // Across the top — a few sentences.
        id: "sel",
        color: "mint",
        name: {
          en: "Social Emotional Learning",
          es: "Aprendizaje Socioemocional",
        },
        body: [
          {
            en: "This week, students will focus on being responsible at home and school while practicing active listening skills to build trust within their classroom community. Through activities like class graphing and Venn diagrams, they will explore their similarities and unique differences to foster mutual respect and connection. Finally, students will reflect on their weekly progress to celebrate achievements and set goals for continuous growth.",
            es: "Esta semana, los estudiantes se enfocarán en ser responsables en casa y en la escuela mientras practican la escucha activa para construir confianza dentro de la comunidad de su salón. A través de actividades como gráficas de clase y diagramas de Venn, explorarán sus semejanzas y sus diferencias únicas para fomentar el respeto mutuo y la conexión. Por último, reflexionarán sobre su progreso semanal para celebrar sus logros y fijar metas de crecimiento continuo.",
          },
        ],
        span: "full",
        showHomework: false,
        homework: blank,
        directionsLink: "",
        directionsLabel: directions,
      },
      {
        // Left-hand big box.
        id: "reading",
        color: "lilac",
        name: { en: "Reading", es: "Lectura" },
        body: [
          {
            en: "Scholars will continue to read Love That Dog and identify the main character’s feelings and how they change throughout the story. They will also read and analyze poems to identify the theme and summary.",
            es: "Los estudiantes continuarán leyendo Love That Dog e identificarán los sentimientos del personaje principal y cómo cambian a lo largo de la historia. También leerán y analizarán poemas para identificar el tema y el resumen.",
          },
          {
            en: "Our End Unit Assessment will take place Thursday. Scholars will answer both multiple choice questions and open response questions requiring them to identify character feelings using evidence from the text. They will also participate in a small group discussion about what they have read in class so far.",
            es: "Nuestra evaluación de fin de unidad será el jueves. Los estudiantes responderán preguntas de opción múltiple y preguntas de respuesta abierta en las que deberán identificar los sentimientos de los personajes usando evidencia del texto. También participarán en una conversación en grupo pequeño sobre lo que han leído en clase hasta ahora.",
          },
        ],
        span: "half",
        showHomework: true,
        homework: {
          en: "Weekly Reading Log due Friday, 9/18.",
          es: "El registro de lectura semanal se entrega el viernes 18 de septiembre.",
        },
        directionsLink: "/weekly-reading-log-directions.pdf",
        directionsLabel: {
          en: "Weekly Reading Log Directions",
          es: "Instrucciones del Registro de Lectura Semanal",
        },
      },
      {
        // Right-hand big box.
        id: "math",
        color: "clay",
        name: { en: "Math", es: "Matemáticas" },
        body: [
          {
            en: "Scholars will use a variety of strategies (number line, multiples of the denominator, visual representations) to identify and compare fractions.",
            es: "Los estudiantes usarán una variedad de estrategias (recta numérica, múltiplos del denominador, representaciones visuales) para identificar y comparar fracciones.",
          },
          {
            en: "Scholars will have the opportunity to retest for Unit 1 on Friday. The Unit 1 Review Study Guide is attached.",
            es: "Los estudiantes tendrán la oportunidad de volver a tomar el examen de la Unidad 1 el viernes. La guía de repaso de la Unidad 1 está adjunta.",
          },
        ],
        span: "half",
        showHomework: true,
        homework: {
          en: "The worksheet that will be sent home on Monday. Due Friday, 9/18.",
          es: "La hoja de trabajo que se enviará a casa el lunes. Se entrega el viernes 18 de septiembre.",
        },
        directionsLink: "",
        directionsLabel: directions,
      },
      {
        // Across the bottom.
        id: "social-studies",
        color: "ice",
        name: { en: "Social Studies", es: "Estudios Sociales" },
        body: [
          {
            en: "Scholars will continue learning about the three regions of North Carolina, and the impact they have had on the state.",
            es: "Los estudiantes seguirán aprendiendo sobre las tres regiones de Carolina del Norte y el impacto que han tenido en el estado.",
          },
        ],
        span: "full",
        showHomework: false,
        homework: blank,
        directionsLink: "",
        directionsLabel: directions,
      },
    ],
  },
];

/* ── Checks ─────────────────────────────────────────────────────────────────
   These run when the site is built. They turn two easy mistakes into a plain
   sentence telling you what to fix, instead of a confusing framework error
   several steps later.                                                      */

/**
 * Throws a readable error if the newsletter list can't work.
 *
 * Exported separately from the data so the rules can be tested directly
 * rather than by breaking the real content.
 */
export function validateNewsletters(list: Newsletter[]): void {
  if (list.length === 0) {
    throw new Error(
      "content/newsletters.ts: the `newsletters` list is empty. The site needs " +
        "at least one newsletter — paste the template block back in.",
    );
  }

  const seen = new Set<string>();
  for (const entry of list) {
    if (seen.has(entry.slug)) {
      throw new Error(
        `content/newsletters.ts: two newsletters both use slug "${entry.slug}". ` +
          'Each week needs its own, e.g. "week-1", "week-2".',
      );
    }
    seen.add(entry.slug);
  }
}

validateNewsletters(newsletters);

/* ── Helpers ────────────────────────────────────────────────────────────────
   Each takes the list to work on, defaulting to the real one. Passing a list
   in is what lets the tests check the sorting rules against fixed data.     */

/** All newsletters, newest first. */
export function allNewsletters(list: Newsletter[] = newsletters): Newsletter[] {
  return [...list].sort((a, b) => b.date.localeCompare(a.date));
}

/** The one families land on. Guaranteed to exist by the check above. */
export function latestNewsletter(list: Newsletter[] = newsletters): Newsletter {
  return allNewsletters(list)[0];
}

/** Everything except the newest — the Past Newsletters tab. */
export function pastNewsletters(
  list: Newsletter[] = newsletters,
): Newsletter[] {
  return allNewsletters(list).slice(1);
}

export function newsletterBySlug(
  slug: string,
  list: Newsletter[] = newsletters,
): Newsletter | undefined {
  return list.find((n) => n.slug === slug);
}
