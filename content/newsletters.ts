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

/**
 * One day in Upcoming Dates: the day in bold, with its events bulleted
 * underneath. An empty `events` list shows a single "None" bullet, so a quiet
 * day still appears rather than going missing from the week.
 */
export type DateEntry = { when: Text; events: Text[] };

/** One birthday, in its own box. */
export type Birthday = { id: string; name: string; date: Text };

export type Subject = {
  /**
   * A short, permanent name used internally — never shown to anyone.
   * Keep it the same even if you reword the heading.
   */
  id: string;
  name: Text;
  /** Shown beside the heading. Decorative — screen readers skip it. */
  emoji: string;
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

  /** A sentence or two opening the week, above the bulleted updates. */
  updatesLead: Text;
  /** One point per entry. Any web address becomes a link on its own. */
  updates: Text[];
  /** A closing line under the updates. */
  updatesClose: Text;

  upcomingDates: DateEntry[];
  /**
   * Notices that belong to the whole week rather than to one day — a sign-up
   * that is still open, a fundraiser that is running. They sit under the days
   * in the same box, and the box's heading grows to say "& Reminders".
   */
  reminders: Text[];

  birthdays: Birthday[];
  learning: Subject[];
};

const directions: Text = { en: "Directions", es: "Instrucciones" };

/** A fresh, empty week. Copy this block to start each newsletter. */
export const newsletters: Newsletter[] = [
  {
    slug: "week-2",
    week: 2,
    date: "2026-09-25",
    dateRange: {
      en: "September 21 - September 25",
      es: "21 - 25 de septiembre",
    },

    updatesLead: {
      en: "Another great week with lots of learning happening!",
      es: "¡Otra gran semana con mucho aprendizaje!",
    },

    updates: [
      {
        en: "**Curriculum Night:** Thank you to everyone who came out for curriculum night! If you were unable to attend, the slides are linked below. Please reach out if you have any questions about the information shared there.\n**Curriculum Night slides:**\nhttps://docs.google.com/presentation/d/1WxpypzlAJcSLT1-WIb9Q5PhW6El1ttAaI7hjpR63BzY/edit",
        es: "**Noche de Currículo:** ¡Gracias a todos los que asistieron a la Noche de Currículo! Si no pudo asistir, abajo está el enlace a las diapositivas. Comuníquese conmigo si tiene alguna pregunta sobre la información compartida.\n**Diapositivas de la Noche de Currículo:**\nhttps://docs.google.com/presentation/d/1WxpypzlAJcSLT1-WIb9Q5PhW6El1ttAaI7hjpR63BzY/edit",
      },
      {
        en: "**Dressing for the Classroom:** My classroom is quite cold right now, while Mrs. Phoso’s is quite warm. With the weather changing and the classroom temperatures varying, please have students bring layers so they can adjust as needed.",
        es: "**Cómo vestirse para el salón:** Mi salón está bastante frío en este momento, mientras que el de Mrs. Phoso está bastante caluroso. Con el cambio de clima y las distintas temperaturas de los salones, por favor envíe a su hijo/a con varias capas de ropa para que pueda ajustarse según lo necesite.",
      },
      {
        en: "**Water Bottles:** Reusable water bottles sent with your child would be greatly appreciated. Coming in from recess we really want to get right to work, so having water with them in the classroom helps minimize our transition time and get right into learning!",
        es: "**Botellas de agua:** Agradeceríamos mucho que su hijo/a traiga una botella de agua reutilizable. Al volver del recreo queremos ponernos a trabajar enseguida, así que tener agua en el salón nos ayuda a acortar la transición y ¡empezar a aprender de inmediato!",
      },
      {
        en: "**The Gelf-Stand:** This Friday is the second time our class store will be open! The classroom money students have earned over the past two weeks can be spent there at the very end of the day — after they set aside $280 for their bills, which are due October 2nd. Any and all donations for the store would be greatly appreciated! Some popular items are large candy bars, baby bottle pops, push pops, ring pops, and little squishies. For a closer look at what The Gelf-Stand offers, check out the Classroom Economy tab.",
        es: "**The Gelf-Stand:** ¡Este viernes será la segunda vez que abra la tienda de nuestro salón! El dinero del salón que los estudiantes ganaron en las últimas dos semanas se podrá gastar allí al final del día — después de apartar $280 para sus cuentas, que vencen el 2 de octubre. ¡Agradeceríamos muchísimo cualquier donación para la tienda! Algunos artículos populares son barras de dulce grandes, Baby Bottle Pops, Push Pops, Ring Pops y squishies pequeños. Para ver más de cerca lo que ofrece The Gelf-Stand, visite la pestaña de Economía del Salón.",
      },
    ],

    updatesClose: {
      en: "Here’s a quick look at what we’ll be learning and what’s coming up next week!",
      es: "¡Aquí tiene un vistazo rápido a lo que aprenderemos y a lo que viene la próxima semana!",
    },

    upcomingDates: [
      {
        when: { en: "Monday, September 21st", es: "Lunes 21 de septiembre" },
        events: [
          {
            en: "Teacher Work Day — NO SCHOOL for students",
            es: "Día de trabajo docente — NO HAY CLASES para los estudiantes",
          },
        ],
      },
      {
        when: { en: "Tuesday, September 22nd", es: "Martes 22 de septiembre" },
        events: [],
      },
      {
        when: {
          en: "Wednesday, September 23rd",
          es: "Miércoles 23 de septiembre",
        },
        events: [
          {
            en: "School Improvement Team (SIT) Meeting on Teams at 4pm",
            es: "Reunión del Equipo de Mejora Escolar (SIT) por Teams a las 4pm",
          },
        ],
      },
      {
        when: { en: "Thursday, September 24th", es: "Jueves 24 de septiembre" },
        events: [
          {
            en: "Reading Quiz: Writing an Informative Paragraph Describing a Character",
            es: "Prueba de Lectura: escribir un párrafo informativo que describa a un personaje",
          },
          {
            en: "Second Harvest Food Drive in the bus lot 5-6pm",
            es: "Colecta de alimentos de Second Harvest en el estacionamiento de autobuses de 5 a 6pm",
          },
        ],
      },
      {
        when: { en: "Friday, September 25th", es: "Viernes 25 de septiembre" },
        events: [],
      },
    ],

    reminders: [
      {
        en: "**Interested in joining the PTA?** Click here to join: https://gvsa.givebacks.com/shop",
        es: "**¿Le interesa unirse a la PTA?** Haga clic aquí para unirse: https://gvsa.givebacks.com/shop",
      },
      {
        en: "**GVSA Fundraiser:** Our first fundraiser of the school year is kicking off Tuesday, September 22nd, and we’re ready to see which classroom can bring in the BIGGEST popcorn sales! 🚀 Our classroom has its own unique fundraising link that you can share with your families, friends, neighbors, and anyone else who loves a good snack! 🍿 🍕 TOP-SELLING CLASSROOM will earn an EPIC PIZZA PARTY! 🎉🍕\n**Link:**\nhttps://poppinpopcornonline.com/store/store.php?sID=00676032",
        es: "**Recaudación de fondos de GVSA:** ¡Nuestra primera recaudación de fondos del año escolar comienza el martes 22 de septiembre, y estamos listos para ver qué salón logra las MAYORES ventas de palomitas! 🚀 Nuestro salón tiene su propio enlace de recaudación que puede compartir con su familia, amigos, vecinos y cualquier persona a la que le guste un buen bocadillo. 🍿 🍕 ¡EL SALÓN CON MÁS VENTAS ganará una ÉPICA FIESTA DE PIZZA! 🎉🍕\n**Enlace:**\nhttps://poppinpopcornonline.com/store/store.php?sID=00676032",
      },
    ],

    birthdays: [
      {
        id: "caleb",
        name: "Caleb",
        date: { en: "September 22nd", es: "22 de septiembre" },
      },
      {
        id: "addy",
        name: "Addy",
        date: { en: "September 25th", es: "25 de septiembre" },
      },
      {
        id: "alex",
        name: "Alex",
        date: { en: "September 26th", es: "26 de septiembre" },
      },
    ],

    learning: [
      {
        id: "sel",
        color: "mint",
        emoji: "💛",
        name: {
          en: "Social Emotional Learning",
          es: "Aprendizaje Socioemocional",
        },
        body: [
          {
            en: "This week in SEL, our class is exploring how to make school a happy and safe place for everyone by recognizing and building positive emotions. Students are also practicing ‘Think, Pair, Share’ to take quiet moments to reflect before sharing their ideas with peers.",
            es: "Esta semana en Aprendizaje Socioemocional, nuestra clase explora cómo hacer de la escuela un lugar feliz y seguro para todos, reconociendo y cultivando las emociones positivas. Los estudiantes también practican ‘Piensa, Comparte en Pareja’ para tomarse un momento de reflexión antes de compartir sus ideas con sus compañeros.",
          },
        ],
        span: "full",
        showHomework: false,
        homework: blank,
        directionsLink: "",
        directionsLabel: directions,
      },
      {
        id: "reading",
        color: "lilac",
        emoji: "📚",
        name: { en: "ELA", es: "Lengua y Literatura" },
        body: [
          {
            en: "Scholars will continue to read *Love That Dog* and identify the main character’s feelings and how they change throughout the story. They will also read and analyze poems to identify the theme and summary.",
            es: "Los estudiantes seguirán leyendo *Love That Dog* e identificarán los sentimientos del personaje principal y cómo cambian a lo largo de la historia. También leerán y analizarán poemas para identificar el tema y el resumen.",
          },
          {
            en: "We begin the writing portion of our module this week. Students will write an informative paragraph describing what inspires the main character of our book to write poetry.",
            es: "Esta semana comenzamos la parte de escritura de nuestro módulo. Los estudiantes escribirán un párrafo informativo que describa qué inspira al personaje principal de nuestro libro a escribir poesía.",
          },
        ],
        span: "half",
        showHomework: true,
        homework: {
          en: "Weekly Reading Log due Friday, 9/25.",
          es: "El registro de lectura semanal se entrega el viernes 25 de septiembre.",
        },
        // The reading log is the same every week, so the link stays put.
        directionsLink: "/weekly-reading-log-directions.pdf",
        directionsLabel: {
          en: "Weekly Reading Log Directions",
          es: "Instrucciones del Registro de Lectura Semanal",
        },
      },
      {
        id: "math",
        color: "clay",
        emoji: "➗️",
        name: { en: "Math", es: "Matemáticas" },
        body: [
          {
            en: "Scholars will continue to use a variety of strategies (number line, multiples of the denominator, visual representations) to identify and compare fractions.",
            es: "Los estudiantes seguirán usando una variedad de estrategias (la recta numérica, los múltiplos del denominador, las representaciones visuales) para identificar y comparar fracciones.",
          },
        ],
        span: "half",
        showHomework: true,
        homework: {
          en: "Worksheet due Friday, 9/25.",
          es: "La hoja de trabajo se entrega el viernes 25 de septiembre.",
        },
        directionsLink: "",
        directionsLabel: directions,
      },
      {
        id: "social-studies",
        color: "ice",
        emoji: "🌎",
        name: {
          en: "Science / Social Studies",
          es: "Ciencias / Estudios Sociales",
        },
        body: [
          {
            en: "Scholars will learn about North Carolina’s culture and diversity, as well as the different groups of people who contribute to our state.",
            es: "Los estudiantes aprenderán sobre la cultura y la diversidad de Carolina del Norte, así como sobre los diferentes grupos de personas que contribuyen a nuestro estado.",
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
  {
    slug: "week-1",
    week: 1,
    date: "2026-09-18",
    dateRange: { en: "September 14 - September 18", es: "14 - 18 de septiembre" },

    updatesLead: blank,

    updates: [
      {
        en: "**i-Ready Testing:** i-Ready testing is all finished! Students who were absent on one of the testing days will make it up this coming week. i-Ready scores will be sent home in your child’s takehome folder soon.",
        es: "**Pruebas de i-Ready:** ¡Las pruebas de i-Ready ya terminaron! Los estudiantes que estuvieron ausentes en uno de los días de prueba las recuperarán esta próxima semana. Los resultados de i-Ready se enviarán a casa próximamente en la carpeta de su hijo/a.",
      },
      {
        en: "**Interested in joining the PTA?** Click here to join: https://gvsa.givebacks.com/shop",
        es: "**¿Le interesa unirse a la PTA?** Haga clic aquí para unirse: https://gvsa.givebacks.com/shop",
      },
      {
        en: "**GVSA Fundraiser:** Our first fundraiser of the school year is kicking off Tuesday, September 22nd, and we’re ready to see which classroom can bring in the BIGGEST popcorn sales! 🚀 Our classroom has its own unique fundraising link that you can share with your families, friends, neighbors, and anyone else who loves a good snack! 🍿 🍕 TOP-SELLING CLASSROOM will earn an EPIC PIZZA PARTY! 🎉🍕\n**Ms. Gelfand’s Homeroom class link:**\nhttps://poppinpopcornonline.com/store/store.php?sID=00676032",
        es: "**Recaudación de fondos de GVSA:** ¡Nuestra primera recaudación de fondos del año escolar comienza el martes 22 de septiembre, y estamos listos para ver qué salón logra las MAYORES ventas de palomitas! 🚀 Nuestro salón tiene su propio enlace de recaudación que puede compartir con su familia, amigos, vecinos y cualquier persona a la que le guste un buen bocadillo. 🍿 🍕 ¡EL SALÓN CON MÁS VENTAS ganará una ÉPICA FIESTA DE PIZZA! 🎉🍕\n**Enlace del salón de Ms. Gelfand:**\nhttps://poppinpopcornonline.com/store/store.php?sID=00676032",
      },
    ],

    updatesClose: blank,

    upcomingDates: [
      {
        when: { en: "Monday, September 14th", es: "Lunes 14 de septiembre" },
        events: [],
      },
      {
        when: { en: "Tuesday, September 15th", es: "Martes 15 de septiembre" },
        events: [
          {
            en: "Chuck E. Cheese Fundraiser 3:30pm-9:00pm at 7970 Lyles Lane NW, Concord, NC 28027",
            es: "Recaudación de fondos en Chuck E. Cheese de 3:30pm a 9:00pm en 7970 Lyles Lane NW, Concord, NC 28027",
          },
        ],
      },
      {
        when: {
          en: "Wednesday, September 16th",
          es: "Miércoles 16 de septiembre",
        },
        events: [
          {
            en: "Curriculum Night 5-6pm",
            es: "Noche de Currículo de 5 a 6pm",
          },
        ],
      },
      {
        when: { en: "Thursday, September 17th", es: "Jueves 17 de septiembre" },
        events: [
          {
            en: "End Unit Reading Test",
            es: "Examen de Lectura de Fin de Unidad",
          },
          {
            en: "Chick-fil-A Night 4:00-7:00pm at 8700 University Executive Park Dr, Charlotte, NC 28262",
            es: "Noche de Chick-fil-A de 4:00 a 7:00pm en 8700 University Executive Park Dr, Charlotte, NC 28262",
          },
        ],
      },
      {
        when: { en: "Friday, September 18th", es: "Viernes 18 de septiembre" },
        events: [
          {
            en: "Math Unit 1 Retest",
            es: "Reexamen de Matemáticas de la Unidad 1",
          },
        ],
      },
    ],

    reminders: [],

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
        emoji: "💛",
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
        emoji: "📚",
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
        emoji: "🔢",
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
        emoji: "🗺️",
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
