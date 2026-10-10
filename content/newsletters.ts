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

/**
 * One announcement. `points` are the details underneath it, indented — the
 * three things to know about the lunch invitation, say, rather than three
 * more announcements.
 */
export type Update = {
  text: Text;
  points?: Text[];
  /** Set true when the points are steps to follow in order, so they number. */
  ordered?: boolean;
  /** A closing line under the points — what to do once they are done. */
  close?: Text;
};

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
  /** One announcement per entry. Any web address becomes a link on its own. */
  updates: Update[];
  /** A closing line under the updates. */
  updatesClose: Text;

  upcomingDates: DateEntry[];
  /**
   * Dates beyond this week, so families can plan — a book fair, a festival,
   * the end of the quarter. They sit under the week's days, below their own
   * "Looking Ahead" label.
   */
  futureDates: Text[];
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
    slug: "week-5",
    week: 5,
    date: "2026-10-16",
    dateRange: {
      en: "October 12 - October 16",
      es: "12 - 16 de octubre",
    },

    updatesLead: blank,

    updates: [
      {
        text: {
          en: "**Parent-Teacher Conferences** are coming up soon! Please be on the lookout for a sign-up sheet from Mrs. Phoso and me for our joint conference. If you have a tight schedule and need a specific day or time, please reach out to us and we will make sure we can accommodate you.",
          es: "**¡Las conferencias de padres y maestros** se acercan! Esté atento/a a la hoja de inscripción que enviaremos Mrs. Phoso y yo para nuestra conferencia conjunta. Si su horario es muy ajustado y necesita un día o una hora en particular, comuníquese con nosotras y nos aseguraremos de acomodarlo.",
        },
      },
      {
        text: {
          en: "**Google Classroom:** We use Google Classroom for ALL Block and Social Studies to track upcoming and finished work. Tasks are done at school, but parents can log in at home to check progress. New ALL Block work posts every **Monday at 7:30 AM** and counts toward grades and Fun Friday eligibility. Review the **Quick Links** videos in Google Classroom if needed.",
          es: "**Google Classroom:** Usamos Google Classroom para ALL Block y Estudios Sociales, para seguir el trabajo pendiente y el terminado. Las tareas se hacen en la escuela, pero los padres pueden iniciar sesión en casa para ver el progreso. El nuevo trabajo de ALL Block se publica cada **lunes a las 7:30 AM** y cuenta para las calificaciones y para participar en Fun Friday. Repase los videos de **Quick Links** en Google Classroom si lo necesita.",
        },
      },
    ],

    updatesClose: blank,

    upcomingDates: [
      {
        when: { en: "Monday, October 12th", es: "Lunes 12 de octubre" },
        events: [],
      },
      {
        when: { en: "Tuesday, October 13th", es: "Martes 13 de octubre" },
        events: [
          {
            en: "Local author Erika Ferrari Lopez visits 4th grade",
            es: "La autora local Erika Ferrari Lopez visita 4º grado",
          },
        ],
      },
      {
        when: { en: "Wednesday, October 14th", es: "Miércoles 14 de octubre" },
        events: [
          {
            en: "**Early Release Day** — scholars are dismissed at 12pm. Please let your child's homeroom teacher know if they will be going home a different way than usual that day.",
            es: "**Día de salida temprana** — los estudiantes salen a las 12pm. Por favor avise a la maestra del salón si su hijo/a se irá a casa de una manera distinta a la habitual ese día.",
          },
        ],
      },
      {
        when: { en: "Thursday, October 15th", es: "Jueves 15 de octubre" },
        events: [
          {
            en: "**Cowboy/Vaquero Western Day** — students are invited to wear their favorite Cowboy/Vaquero or Western-inspired gear.",
            es: "**Día Vaquero / Western** — los estudiantes pueden venir con su ropa favorita de vaquero o de estilo western.",
          },
          {
            en: "PTA Meeting 5:30-6:30pm — Muffins with Moms",
            es: "Reunión de la PTA de 5:30 a 6:30pm — Muffins con Mamá",
          },
        ],
      },
      {
        when: { en: "Friday, October 16th", es: "Viernes 16 de octubre" },
        events: [
          {
            en: "**Bright Colors Day** — students are invited to wear bright, festive colors as we continue celebrating Hispanic heritage and learn about Día de los Muertos and its cultural traditions.",
            es: "**Día de Colores Brillantes** — los estudiantes pueden vestir colores brillantes y festivos mientras seguimos celebrando la herencia hispana y aprendemos sobre el Día de los Muertos y sus tradiciones culturales.",
          },
        ],
      },
    ],

    futureDates: [
      {
        en: "**Tuesday, 10/20** — Book Fair Family Night 4-6pm",
        es: "**Martes 20/10** — Noche Familiar de la Feria del Libro de 4 a 6pm",
      },
      {
        en: "**Wednesday, 10/21** — SIT Meeting on Teams 4pm",
        es: "**Miércoles 21/10** — Reunión del SIT por Teams a las 4pm",
      },
      {
        en: "**Wednesday, 10/21** — Book Fair for Mrs. Phoso's class",
        es: "**Miércoles 21/10** — Feria del Libro para la clase de Mrs. Phoso",
      },
      {
        en: "**Thursday, 10/22** — Book Fair for Ms. Gelfand's class",
        es: "**Jueves 22/10** — Feria del Libro para la clase de Ms. Gelfand",
      },
      {
        en: "**Friday, 10/23** — PTA Trunk or Treat 4-5pm and PTA Fall Festival 4-6:30pm",
        es: "**Viernes 23/10** — Trunk or Treat de la PTA de 4 a 5pm y Festival de Otoño de la PTA de 4 a 6:30pm",
      },
      {
        en: "**Friday, 10/30** — Last day of Quarter 1",
        es: "**Viernes 30/10** — Último día del primer trimestre",
      },
    ],

    reminders: [
      {
        en: "**Interested in joining the PTA?** Click here to join: https://gvsa.givebacks.com/shop",
        es: "**¿Le interesa unirse a la PTA?** Haga clic aquí para unirse: https://gvsa.givebacks.com/shop",
      },
      {
        en: "**GVSA Popcorn Sales!** 🚀 Share this link with anyone who loves a good snack. The top-selling classroom will earn a pizza party!\n**Link:**\nhttps://poppinpopcornonline.com/store/store.php?sID=00676032",
        es: "**¡Venta de palomitas de GVSA!** 🚀 Comparta este enlace con cualquier persona a la que le guste un buen bocadillo. ¡El salón con más ventas ganará una fiesta de pizza!\n**Enlace:**\nhttps://poppinpopcornonline.com/store/store.php?sID=00676032",
      },
    ],

    birthdays: [
      {
        id: "ariel",
        name: "Ariel",
        date: { en: "October 11th", es: "11 de octubre" },
      },
      {
        id: "nolan",
        name: "Nolan",
        date: { en: "October 14th", es: "14 de octubre" },
      },
      {
        id: "blake",
        name: "Blake",
        date: { en: "October 15th", es: "15 de octubre" },
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
            en: "This week, students are exploring perspective-taking, active listening, and challenging assumptions or stereotypes. Through group debates and partner activities, students are practicing how to step into someone else's shoes, demonstrate active listening skills, and replace judgment with curiosity when encountering something unfamiliar.",
            es: "Esta semana, los estudiantes exploran cómo ver las cosas desde el punto de vista de otra persona, cómo escuchar de forma activa y cómo cuestionar suposiciones o estereotipos. Con debates en grupo y actividades en parejas, practican ponerse en el lugar de los demás, demostrar que están escuchando y cambiar el juicio por la curiosidad ante lo que no conocen.",
          },
          {
            en: "**Continue the Conversation at Home:** Ask your child to share a time this week when they looked at a situation from someone else's point of view, or discovered a shared interest with a classmate! You can also practice **HEAR** active listening together at home by taking turns sharing about your day while focusing on eye contact and acknowledging feelings.",
            es: "**Continúe la conversación en casa:** ¡Pídale a su hijo/a que le cuente un momento de esta semana en que vio una situación desde el punto de vista de otra persona o descubrió un interés en común con un compañero! También pueden practicar juntos la escucha activa **HEAR** en casa, turnándose para contar cómo les fue en el día mientras se enfocan en el contacto visual y en reconocer los sentimientos del otro.",
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
            en: "This week, 4th-grade scholars are completing their original poems inspired by meaningful personal experiences. Students will revise their draft work focusing on precise word choices and intentional punctuation for poetic effect, take their Mid-Unit 3 Assessment on revision skills, and write a formal presentation introduction explaining their inspiration. Finally, students will analyze fluent read-aloud models to set criteria for reading their poetry aloud effectively!",
            es: "Esta semana, los estudiantes de 4º grado terminan sus poemas originales inspirados en experiencias personales importantes. Revisarán sus borradores enfocándose en elegir las palabras con precisión y en usar la puntuación de forma intencional para lograr un efecto poético, tomarán su Evaluación de Mitad de la Unidad 3 sobre destrezas de revisión y escribirán una introducción formal para su presentación explicando qué los inspiró. Por último, ¡analizarán modelos de lectura en voz alta para establecer los criterios de cómo leer bien su poesía en voz alta!",
          },
        ],
        span: "half",
        showHomework: true,
        homework: {
          en: "Weekly Reading Log due Friday, 10/16.",
          es: "El registro de lectura semanal se entrega el viernes 16 de octubre.",
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
            en: "This week, 4th-grade mathematicians are exploring how to multiply whole numbers by non-unit fractions using visual diagrams and equal-group models. Students will discover that multiplying a fraction by a whole number means multiplying the whole number by the numerator while keeping the denominator the same (for example, 5 × 3/10). They will practice rewriting and matching equivalent multiplication expressions using properties of operations, and apply these skills to solve real-world word problems involving recipes and measurements.",
            es: "Esta semana, los matemáticos de 4º grado exploran cómo multiplicar números enteros por fracciones que no son unitarias, usando diagramas visuales y modelos de grupos iguales. Descubrirán que multiplicar una fracción por un número entero significa multiplicar el número entero por el numerador y mantener el mismo denominador (por ejemplo, 5 × 3/10). Practicarán reescribir y emparejar expresiones de multiplicación equivalentes usando las propiedades de las operaciones, y aplicarán estas destrezas para resolver problemas de la vida real con recetas y medidas.",
          },
        ],
        span: "half",
        showHomework: true,
        homework: {
          en: "Worksheet due Friday, 10/16.",
          es: "La hoja de trabajo se entrega el viernes 16 de octubre.",
        },
        directionsLink: "",
        directionsLabel: directions,
      },
      {
        id: "social-studies",
        color: "ice",
        emoji: "🔬",
        name: {
          en: "Science",
          es: "Ciencias",
        },
        body: [
          {
            en: "This week, young scientists are investigating different forms of energy — including light, heat, sound, electrical, and mechanical energy — and exploring how energy transforms from one form to another. Students will learn about potential and kinetic energy, examine how heat moves through conduction, convection, and radiation, and identify materials that act as conductors or insulators.",
            es: "Esta semana, nuestros jóvenes científicos investigan distintas formas de energía — luz, calor, sonido, energía eléctrica y mecánica — y exploran cómo la energía se transforma de una forma a otra. Aprenderán sobre la energía potencial y la cinética, estudiarán cómo se mueve el calor por conducción, convección y radiación, e identificarán qué materiales funcionan como conductores o aislantes.",
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
    slug: "week-4",
    week: 4,
    date: "2026-10-09",
    dateRange: {
      en: "October 5 - October 9",
      es: "5 - 9 de octubre",
    },

    updatesLead: blank,

    updates: [
      {
        text: {
          en: "**i-Ready Family Reports:** This year our i-Ready Family Reports are being shared digitally! You can access your student's report and learning progress through the newly updated i-Ready Family Center.",
          es: "**Informes Familiares de i-Ready:** ¡Este año los Informes Familiares de i-Ready se comparten de forma digital! Puede ver el informe y el progreso de su estudiante en el nuevo Centro para Familias de i-Ready.",
        },
        ordered: true,
        points: [
          {
            en: "Log in to your student's i-Ready dashboard through the district portal. Login information is on the **Student Tech at Home** page.",
            es: "Inicie sesión en el panel de i-Ready de su estudiante desde el portal del distrito. La información para iniciar sesión está en la página **Tecnología del Estudiante en Casa**.",
          },
          {
            en: "Click **For Families** at the top of your student's dashboard to open the Family Center.",
            es: "Haga clic en **For Families** en la parte superior del panel de su estudiante para abrir el Centro para Familias.",
          },
          {
            en: "Enter our school report code: **LVG2X7**",
            es: "Escriba el código de informe de nuestra escuela: **LVG2X7**",
          },
        ],
        close: {
          en: "The Family Center is a great way to stay connected to what your student is learning and how they are growing this year. If you would prefer a printed paper copy of the report, please let me know and I will be happy to provide one!",
          es: "El Centro para Familias es una excelente manera de mantenerse al tanto de lo que su estudiante está aprendiendo y de cómo va creciendo este año. Si prefiere una copia impresa del informe, avíseme y con gusto se la entrego.",
        },
      },
      {
        text: {
          en: "**Google Classroom:** We are now using Google Classroom regularly during ALL Block and Social Studies, so students can see what work is coming up and keep track of what they have finished.",
          es: "**Google Classroom:** Ahora usamos Google Classroom con regularidad durante ALL Block y Estudios Sociales, para que los estudiantes puedan ver qué trabajo viene y llevar la cuenta de lo que ya terminaron.",
        },
        points: [
          {
            en: "All Google Classroom work is expected to be completed at school. Students can also sign in at home — login information is on the **Student Tech at Home** page — so you can see what has and has not been completed.",
            es: "Todo el trabajo de Google Classroom se debe completar en la escuela. Los estudiantes también pueden iniciar sesión en casa — la información para iniciar sesión está en la página **Tecnología del Estudiante en Casa** — para que usted pueda ver qué han terminado y qué no.",
          },
          {
            en: "We are entering our third week of using it. ALL Block assignments are grouped by week — Week 5 and Week 6 are posted now — and a new week posts every **Monday at 7:30 AM.**",
            es: "Estamos entrando en nuestra tercera semana de uso. Las tareas de ALL Block están agrupadas por semana — la Semana 5 y la Semana 6 ya están publicadas — y cada **lunes a las 7:30 AM** se publica una semana nueva.",
          },
          {
            en: "Some ALL Block work is taken for a grade. Each week, completion is also logged as a **Prepare** grade in Infinite Campus, so you can easily keep track of the work your child is getting done.",
            es: "Parte del trabajo de ALL Block se toma como calificación. Además, cada semana se registra el cumplimiento como una calificación de **Prepare** en Infinite Campus, para que pueda seguir fácilmente el trabajo que su hijo/a va completando.",
          },
          {
            en: "Completing these tasks is required in order to attend **Fun Friday** and to shop **The Gelf-Stand** every other Friday.",
            es: "Completar estas tareas es requisito para participar en **Fun Friday** y para comprar en **The Gelf-Stand** cada dos viernes.",
          },
          {
            en: "Students should already be familiar with the expectations, but there are videos in the **Quick Links** section of their Google Classroom that you and your child can review if they are working at home.",
            es: "Los estudiantes ya deben conocer las expectativas, pero hay videos en la sección **Quick Links** de su Google Classroom que usted y su hijo/a pueden repasar si están trabajando en casa.",
          },
        ],
      },
      {
        text: {
          en: "**Lockdown Drill:** Our first lockdown drill will take place on **Monday, October 5th.** Please take a few minutes this weekend to talk with your student about why we conduct these drills and the importance of school safety procedures. Your support helps ensure our students feel prepared, safe, and calm.",
          es: "**Simulacro de encierro:** Nuestro primer simulacro de encierro será el **lunes 5 de octubre.** Por favor tome unos minutos este fin de semana para hablar con su estudiante sobre por qué hacemos estos simulacros y sobre la importancia de los procedimientos de seguridad escolar. Su apoyo ayuda a que nuestros estudiantes se sientan preparados, seguros y tranquilos.",
        },
      },
    ],

    updatesClose: blank,

    upcomingDates: [
      {
        when: { en: "Monday, October 5th", es: "Lunes 5 de octubre" },
        events: [
          { en: "Lockdown Drill", es: "Simulacro de encierro" },
        ],
      },
      {
        when: { en: "Tuesday, October 6th", es: "Martes 6 de octubre" },
        events: [],
      },
      {
        when: { en: "Wednesday, October 7th", es: "Miércoles 7 de octubre" },
        events: [
          {
            en: "Unit 2 Math Test",
            es: "Examen de Matemáticas de la Unidad 2",
          },
        ],
      },
      {
        when: { en: "Thursday, October 8th", es: "Jueves 8 de octubre" },
        events: [],
      },
      {
        when: { en: "Friday, October 9th", es: "Viernes 9 de octubre" },
        events: [
          {
            en: "Module 1 Unit 2 End of Unit Assessment",
            es: "Evaluación de Fin de Unidad del Módulo 1, Unidad 2",
          },
        ],
      },
    ],

    futureDates: [],

    reminders: [
      {
        en: "**Interested in joining the PTA?** Click here to join: https://gvsa.givebacks.com/shop",
        es: "**¿Le interesa unirse a la PTA?** Haga clic aquí para unirse: https://gvsa.givebacks.com/shop",
      },
      {
        en: "**GVSA Popcorn Sales!** 🚀 Share this link with anyone who loves a good snack. The top-selling classroom will earn a pizza party!\n**Link:**\nhttps://poppinpopcornonline.com/store/store.php?sID=00676032",
        es: "**¡Venta de palomitas de GVSA!** 🚀 Comparta este enlace con cualquier persona a la que le guste un buen bocadillo. ¡El salón con más ventas ganará una fiesta de pizza!\n**Enlace:**\nhttps://poppinpopcornonline.com/store/store.php?sID=00676032",
      },
    ],

    birthdays: [],

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
            en: "This week our 4th graders will kick off October's month-long focus on **Respect** by turning the spotlight inward. Through engaging read-alouds, videos, and reflection activities, students will explore Self-Respect, Identity, and Boundaries. They will practice identifying their unique strengths, replacing negative self-talk with positive affirmations, and establishing healthy physical and emotional boundaries. By understanding that treating ourselves with dignity and care is the foundation for how we treat others, students will build confidence and personal accountability to set a positive tone for the school year.",
            es: "Esta semana nuestros estudiantes de 4º grado comenzarán el enfoque de octubre en el **Respeto** mirando hacia adentro. Con lecturas en voz alta, videos y actividades de reflexión, explorarán el respeto por uno mismo, la identidad y los límites personales. Practicarán reconocer sus propias fortalezas, cambiar los pensamientos negativos por afirmaciones positivas y establecer límites físicos y emocionales saludables. Al comprender que tratarnos con dignidad y cuidado es la base de cómo tratamos a los demás, los estudiantes desarrollarán confianza y responsabilidad personal, y marcarán un tono positivo para el año escolar.",
          },
          {
            en: "**Continue the Conversation at Home:**\n**Ask:** \"What is one thing about yourself — a strength, talent, or personality trait — that you feel proud of?\"\n**Discuss:** \"We talked about personal boundaries at school. How do you feel when someone enters your personal space bubble, and how can you politely ask for space?\"\n**Reflect:** \"What does negative self-talk sound like, and how can we help each other reframe unhelpful thoughts at home when things get frustrating?\"",
            es: "**Continúe la conversación en casa:**\n**Pregunte:** «¿Qué cosa de ti mismo — una fortaleza, un talento o un rasgo de tu personalidad — te hace sentir orgulloso?»\n**Converse:** «En la escuela hablamos de los límites personales. ¿Cómo te sientes cuando alguien entra en tu espacio personal y cómo puedes pedir espacio con amabilidad?»\n**Reflexione:** «¿Cómo suenan los pensamientos negativos sobre uno mismo y cómo podemos ayudarnos en casa a cambiarlos cuando algo nos frustra?»",
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
            en: "This week our 4th graders reach an exciting milestone as they write their very first multi-paragraph essay! To build confidence and guide their progress, we will break the writing process down day by day, exploring what inspired a famous poet to create their work — from drafting their introduction and body paragraphs to wrapping up with a thoughtful conclusion. The week culminates on Friday with our Unit 2 Assessment, where students will take constructive feedback from teachers and peers to revise, edit, and polish their finished essays into final masterpieces.",
            es: "¡Esta semana nuestros estudiantes de 4º grado llegan a un momento emocionante al escribir su primer ensayo de varios párrafos! Para darles confianza y guiar su avance, dividiremos el proceso de escritura día por día, explorando qué inspiró a un poeta famoso a crear su obra — desde redactar la introducción y los párrafos del cuerpo hasta cerrar con una conclusión bien pensada. La semana termina el viernes con nuestra Evaluación de la Unidad 2, donde los estudiantes usarán los comentarios de sus maestras y compañeros para revisar, corregir y pulir sus ensayos hasta dejarlos como verdaderas obras maestras.",
          },
        ],
        span: "half",
        showHomework: true,
        homework: {
          en: "Weekly Reading Log due Friday, 10/9.",
          es: "El registro de lectura semanal se entrega el viernes 9 de octubre.",
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
            en: "This week our mathematicians are tying together everything they've learned in Unit 2! We'll spend the first part of the week reviewing key concepts, ordering fractions using various strategies, and taking our Unit 2 Assessment. Then we'll launch right into Unit 3, where students will explore equal groups of fractions. They'll use visual diagrams, drawings, and expressions to represent situations with fractions, and learn how to multiply whole numbers by unit fractions.",
            es: "¡Esta semana nuestros matemáticos unen todo lo que han aprendido en la Unidad 2! Pasaremos la primera parte de la semana repasando los conceptos clave, ordenando fracciones con distintas estrategias y tomando la Evaluación de la Unidad 2. Después comenzaremos la Unidad 3, donde los estudiantes explorarán grupos iguales de fracciones. Usarán diagramas, dibujos y expresiones para representar situaciones con fracciones, y aprenderán a multiplicar números enteros por fracciones unitarias.",
          },
        ],
        span: "half",
        showHomework: true,
        homework: {
          en: "Worksheet due Friday, 10/9.",
          es: "La hoja de trabajo se entrega el viernes 9 de octubre.",
        },
        directionsLink: "",
        directionsLabel: directions,
      },
      {
        id: "social-studies",
        color: "ice",
        emoji: "🌎",
        name: {
          en: "Science & Social Studies",
          es: "Ciencias y Estudios Sociales",
        },
        body: [
          {
            en: "Scholars will learn about North Carolina's culture and diversity, as well as the different groups of people who contribute to our state.",
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
    slug: "week-3",
    week: 3,
    date: "2026-10-02",
    dateRange: {
      en: "September 28 - October 2",
      es: "28 de septiembre - 2 de octubre",
    },

    updatesLead: blank,

    updates: [
      {
        text: {
          en: "**Tuesday, 9/29 — Progress Reports** are available to view on Infinite Campus.",
          es: "**Martes 29/9 — Los informes de progreso** se pueden ver en Infinite Campus.",
        },
        points: [
          {
            en: "Directions on how to set up your Infinite Campus account can be found [here](https://www.cmsk12.org/strategy-innovation/office-of-accountability/infinite-campus-student-information-system). Scroll down to select your language and it will take you to the set-up.",
            es: "Las instrucciones para crear su cuenta de Infinite Campus están [aquí](https://www.cmsk12.org/strategy-innovation/office-of-accountability/infinite-campus-student-information-system). Baje en la página para elegir su idioma y lo llevará a la configuración.",
          },
        ],
      },
      {
        text: {
          en: "**Families are invited to eat lunch with their scholars!**",
          es: "**¡Las familias están invitadas a almorzar con sus estudiantes!**",
        },
        points: [
          {
            en: "Sign in at the front office with your ID and meet us in the cafeteria.",
            es: "Regístrese en la oficina principal con su identificación y encuéntrenos en la cafetería.",
          },
          {
            en: "You are welcome to bring food to enjoy with your child at lunch.",
            es: "Puede traer comida para disfrutar junto a su hijo/a durante el almuerzo.",
          },
          {
            en: "Scholars are seated and ready to eat at 11:20. We leave for recess at 11:45.",
            es: "Los estudiantes están sentados y listos para comer a las 11:20. Salimos al recreo a las 11:45.",
          },
        ],
      },
      {
        text: {
          en: "**Classroom Snacks:** If you would like to bring a snack for your child's homeroom, we currently have 23 students in Ms. Gelfand's class and 26 students in Mrs. Phoso's class.",
          es: "**Bocadillos para el salón:** Si desea traer un bocadillo para el salón de su hijo/a, actualmente hay 23 estudiantes en la clase de Ms. Gelfand y 26 estudiantes en la clase de Mrs. Phoso.",
        },
      },
    ],

    updatesClose: {
      en: "As always, please reach out with any questions or concerns! Thank you for all your support and have a great weekend! 💛\n— Ms. Gelfand and Mrs. Phoso",
      es: "¡Como siempre, comuníquese con nosotras si tiene preguntas o inquietudes! Gracias por todo su apoyo y ¡que tengan un buen fin de semana! 💛\n— Ms. Gelfand y Mrs. Phoso",
    },

    upcomingDates: [
      {
        when: { en: "Monday, September 28th", es: "Lunes 28 de septiembre" },
        events: [],
      },
      {
        when: { en: "Tuesday, September 29th", es: "Martes 29 de septiembre" },
        events: [
          {
            en: "Progress reports are available to view on Infinite Campus",
            es: "Los informes de progreso se pueden ver en Infinite Campus",
          },
        ],
      },
      {
        when: {
          en: "Wednesday, September 30th",
          es: "Miércoles 30 de septiembre",
        },
        events: [],
      },
      {
        when: { en: "Thursday, October 1st", es: "Jueves 1 de octubre" },
        events: [],
      },
      {
        when: { en: "Friday, October 2nd", es: "Viernes 2 de octubre" },
        events: [
          {
            en: "Teacher Workday — No School for Students",
            es: "Día de trabajo docente — No hay clases para los estudiantes",
          },
        ],
      },
    ],

    futureDates: [],

    reminders: [
      {
        en: "**Interested in joining the PTA?** Click here to join: https://gvsa.givebacks.com/shop",
        es: "**¿Le interesa unirse a la PTA?** Haga clic aquí para unirse: https://gvsa.givebacks.com/shop",
      },
      {
        en: "**GVSA Popcorn Sales!** 🚀 Share this link with anyone who loves a good snack. The top-selling classroom will earn a pizza party!\n**Link:**\nhttps://poppinpopcornonline.com/store/store.php?sID=00676032",
        es: "**¡Venta de palomitas de GVSA!** 🚀 Comparta este enlace con cualquier persona a la que le guste un buen bocadillo. ¡El salón con más ventas ganará una fiesta de pizza!\n**Enlace:**\nhttps://poppinpopcornonline.com/store/store.php?sID=00676032",
      },
    ],

    birthdays: [],

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
            en: "This week, our class is exploring how to recognize and manage our own emotions while developing empathy for others. We are also practicing how to take responsibility for our learning, choices, and shared classroom materials to build a strong, supportive community.",
            es: "Esta semana, nuestra clase explora cómo reconocer y manejar nuestras propias emociones mientras desarrollamos empatía por los demás. También practicamos cómo hacernos responsables de nuestro aprendizaje, nuestras decisiones y los materiales que compartimos en el salón, para formar una comunidad fuerte y solidaria.",
          },
          {
            en: "**Continue the Conversation at Home:** Ask your child, \"What is one emotion you felt this week, and how did your body help you recognize it?\" or \"How did you show empathy to a classmate when sharing supplies or working together?\"",
            es: "**Continúe la conversación en casa:** Pregúntele a su hijo/a: «¿Qué emoción sentiste esta semana y cómo te ayudó tu cuerpo a reconocerla?» o «¿Cómo mostraste empatía con un compañero al compartir materiales o trabajar juntos?»",
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
            en: "Scholars are beginning research in preparation for their first essay. Their four-paragraph essay will answer the question: \u201cWhat inspires poets to write poetry?\u201d",
            es: "Los estudiantes comienzan a investigar como preparación para su primer ensayo. Su ensayo de cuatro párrafos responderá a la pregunta: «¿Qué inspira a los poetas a escribir poesía?»",
          },
        ],
        span: "half",
        showHomework: true,
        homework: {
          en: "Weekly Reading Log due Thursday, 10/1. Students are only required to complete 3 sections, as we don't have a full five-day week.",
          es: "El registro de lectura semanal se entrega el jueves 1 de octubre. Los estudiantes solo deben completar 3 secciones, ya que no tenemos una semana completa de cinco días.",
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
          en: "Worksheet due Thursday, 10/1.",
          es: "La hoja de trabajo se entrega el jueves 1 de octubre.",
        },
        directionsLink: "",
        directionsLabel: directions,
      },
      {
        id: "social-studies",
        color: "ice",
        emoji: "🌎",
        name: {
          en: "Science & Social Studies",
          es: "Ciencias y Estudios Sociales",
        },
        body: [
          {
            en: "Scholars will learn about North Carolina's culture and diversity, as well as the different groups of people who contribute to our state.",
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
        text: {
          en: "**Curriculum Night:** Thank you to everyone who came out for curriculum night! If you were unable to attend, the slides are linked below. Please reach out if you have any questions about the information shared there.\n**Curriculum Night slides:**\nhttps://docs.google.com/presentation/d/1WxpypzlAJcSLT1-WIb9Q5PhW6El1ttAaI7hjpR63BzY/edit",
          es: "**Noche de Currículo:** ¡Gracias a todos los que asistieron a la Noche de Currículo! Si no pudo asistir, abajo está el enlace a las diapositivas. Comuníquese conmigo si tiene alguna pregunta sobre la información compartida.\n**Diapositivas de la Noche de Currículo:**\nhttps://docs.google.com/presentation/d/1WxpypzlAJcSLT1-WIb9Q5PhW6El1ttAaI7hjpR63BzY/edit",
        },
      },
      {
        text: {
          en: "**Dressing for the Classroom:** My classroom is quite cold right now, while Mrs. Phoso’s is quite warm. With the weather changing and the classroom temperatures varying, please have students bring layers so they can adjust as needed.",
          es: "**Cómo vestirse para el salón:** Mi salón está bastante frío en este momento, mientras que el de Mrs. Phoso está bastante caluroso. Con el cambio de clima y las distintas temperaturas de los salones, por favor envíe a su hijo/a con varias capas de ropa para que pueda ajustarse según lo necesite.",
        },
      },
      {
        text: {
          en: "**Water Bottles:** Reusable water bottles sent with your child would be greatly appreciated. Coming in from recess we really want to get right to work, so having water with them in the classroom helps minimize our transition time and get right into learning!",
          es: "**Botellas de agua:** Agradeceríamos mucho que su hijo/a traiga una botella de agua reutilizable. Al volver del recreo queremos ponernos a trabajar enseguida, así que tener agua en el salón nos ayuda a acortar la transición y ¡empezar a aprender de inmediato!",
        },
      },
      {
        text: {
          en: "**The Gelf-Stand:** This Friday is the second time our class store will be open! The classroom money students have earned over the past two weeks can be spent there at the very end of the day — after they set aside $280 for their bills, which are due October 2nd. Any and all donations for the store would be greatly appreciated! Some popular items are large candy bars, baby bottle pops, push pops, ring pops, and little squishies. For a closer look at what The Gelf-Stand offers, check out the Classroom Economy tab.",
          es: "**The Gelf-Stand:** ¡Este viernes será la segunda vez que abra la tienda de nuestro salón! El dinero del salón que los estudiantes ganaron en las últimas dos semanas se podrá gastar allí al final del día — después de apartar $280 para sus cuentas, que vencen el 2 de octubre. ¡Agradeceríamos muchísimo cualquier donación para la tienda! Algunos artículos populares son barras de dulce grandes, Baby Bottle Pops, Push Pops, Ring Pops y squishies pequeños. Para ver más de cerca lo que ofrece The Gelf-Stand, visite la pestaña de Economía del Salón.",
        },
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

    futureDates: [],

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
        text: {
          en: "**i-Ready Testing:** i-Ready testing is all finished! Students who were absent on one of the testing days will make it up this coming week. i-Ready scores will be sent home in your child’s takehome folder soon.",
          es: "**Pruebas de i-Ready:** ¡Las pruebas de i-Ready ya terminaron! Los estudiantes que estuvieron ausentes en uno de los días de prueba las recuperarán esta próxima semana. Los resultados de i-Ready se enviarán a casa próximamente en la carpeta de su hijo/a.",
        },
      },
      {
        text: {
          en: "**Interested in joining the PTA?** Click here to join: https://gvsa.givebacks.com/shop",
          es: "**¿Le interesa unirse a la PTA?** Haga clic aquí para unirse: https://gvsa.givebacks.com/shop",
        },
      },
      {
        text: {
          en: "**GVSA Fundraiser:** Our first fundraiser of the school year is kicking off Tuesday, September 22nd, and we’re ready to see which classroom can bring in the BIGGEST popcorn sales! 🚀 Our classroom has its own unique fundraising link that you can share with your families, friends, neighbors, and anyone else who loves a good snack! 🍿 🍕 TOP-SELLING CLASSROOM will earn an EPIC PIZZA PARTY! 🎉🍕\n**Ms. Gelfand’s Homeroom class link:**\nhttps://poppinpopcornonline.com/store/store.php?sID=00676032",
          es: "**Recaudación de fondos de GVSA:** ¡Nuestra primera recaudación de fondos del año escolar comienza el martes 22 de septiembre, y estamos listos para ver qué salón logra las MAYORES ventas de palomitas! 🚀 Nuestro salón tiene su propio enlace de recaudación que puede compartir con su familia, amigos, vecinos y cualquier persona a la que le guste un buen bocadillo. 🍿 🍕 ¡EL SALÓN CON MÁS VENTAS ganará una ÉPICA FIESTA DE PIZZA! 🎉🍕\n**Enlace del salón de Ms. Gelfand:**\nhttps://poppinpopcornonline.com/store/store.php?sID=00676032",
        },
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

    futureDates: [],

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
