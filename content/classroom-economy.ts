/**
 * ─────────────────────────────────────────────────────────────────────────
 *  CLASSROOM ECONOMY  →  /classroom-economy
 *
 *  Two columns — ways to earn, ways to lose — then the boxes underneath.
 * ─────────────────────────────────────────────────────────────────────────
 */

import { blank, type Block, type Text } from "./types";

/**
 * One box on the page. `items` is an optional bulleted list shown under the
 * paragraph — used for the behaviours that draw an immediate ticket.
 *
 * The list lives on the block it belongs to. It used to be a separate array
 * the page matched up by comparing heading text, which meant rewording
 * "Major Violations" silently deleted the list.
 */
export type EconomyBlock = Block & {
  /**
   * Lists under the paragraph. A list with no label sits directly beneath
   * it; a labelled one gets its own inset box, for an aside like "Examples".
   */
  lists?: { id: string; label?: Text; items: Text[] }[];
};

/**
 * The opening blurb about the goal of the economy.
 *
 * **double asterisks** make text bold and *single ones* make it italic.
 * A blank line starts a new paragraph.
 */
export const economyIntro: Text = {
  en: "**Welcome to Our Classroom Economy!**\n\n*Where real-world financial skills meet everyday learning.*\n\nOur classroom runs on teamwork and real-world responsibility. Students earn a salary through daily jobs, manage monthly bills, and spend their hard-earned savings at the class store. Along the way, they navigate real-life financial moments: earning bonuses for going above and beyond, and paying fines for poor choices.\n\n**Explore below to see how our economy works!**",
  es: "**¡Bienvenidos a la Economía de Nuestro Salón!**\n\n*Donde las habilidades financieras del mundo real se unen al aprendizaje diario.*\n\nNuestro salón funciona con trabajo en equipo y responsabilidad del mundo real. Los estudiantes ganan un salario por sus trabajos diarios, manejan cuentas mensuales y gastan sus ahorros en la tienda de la clase. En el camino, viven momentos financieros de la vida real: ganan bonificaciones por esforzarse más de lo esperado y pagan multas por malas decisiones.\n\n**¡Explore a continuación para ver cómo funciona nuestra economía!**",
};

/** Sits under the "Making Bank" heading, above the boxes. */
export const makingBankIntro: Text = {
  en: "Students earn money through base paychecks and positive behavioral choices.",
  es: "Los estudiantes ganan dinero con su salario base y con buenas decisiones de comportamiento.",
};

/** Ways students earn. */
export const makingBank: EconomyBlock[] = [
  {
    id: "jobs",
    title: { en: "Classroom Jobs", es: "Trabajos del Salón" },
    body: {
      en: "Every student applies for and holds a classroom job.",
      es: "Cada estudiante solicita y desempeña un trabajo en el salón.",
    },
    lists: [
      {
        id: "pay",
        items: [
      {
        en: "**$200 bi-weekly** — the base paycheck for holding a job (Tech Support, Teacher Assistant, Errand Runner, and more).",
        es: "**$200 cada dos semanas** — el salario base por tener un trabajo (Soporte Técnico, Asistente de la Maestra, Mensajero y más).",
      },
      {
        en: "**Performance raises (+$25/month)** — performing job duties reliably, without reminders, earns a monthly raise!",
        es: "**Aumentos por desempeño (+$25 al mes)** — cumplir con las tareas del trabajo de manera confiable y sin recordatorios gana un aumento mensual.",
      },
        ],
      },
    ],
  },
  {
    id: "bonuses",
    title: { en: "Bonuses", es: "Bonificaciones" },
    body: {
      en: "Earned for positive actions:",
      es: "Se ganan por acciones positivas:",
    },
    lists: [
      {
        id: "amounts",
        items: [
      { en: "**$10** — Happy to see your face", es: "**$10** — Qué gusto verte" },
      {
        en: "**$25** — Good Report from another teacher",
        es: "**$25** — Buen reporte de otro maestro",
      },
      {
        en: "**$25** — Homework Turned In",
        es: "**$25** — Tarea entregada",
      },
      {
        en: "**$100** — Academic Goal Met",
        es: "**$100** — Meta académica alcanzada",
      },
        ],
      },
    ],
  },
  {
    id: "bonus-notices",
    title: { en: "Bonus Notices", es: "Avisos de Bonificación" },
    body: {
      en: "**+$50**, given for going Above and Beyond or showing Huge Improvement.",
      es: "**+$50**, se dan por esforzarse Más de lo Esperado o por mostrar una Gran Mejoría.",
    },
  },
];

/** Sits under the "Breaking Bank" heading, above the boxes. */
export const breakingBankIntro: Text = {
  en: "When violations occur, fines reduce a student's balance.",
  es: "Cuando hay una falta, las multas reducen el saldo del estudiante.",
};

/** Ways students lose money. */
export const breakingBank: EconomyBlock[] = [
  {
    id: "minor-violations",
    title: { en: "Minor Violations", es: "Faltas Menores" },
    body: {
      en: "The same three steps every time:",
      es: "Siempre los mismos tres pasos:",
    },
    lists: [
      {
        id: "progression",
        items: [
          {
            en: "**1st violation** — one free warning.",
            es: "**1ª falta** — una advertencia gratis.",
          },
          {
            en: "**2nd violation** — $20 fine (Agenda Score: 2).",
            es: "**2ª falta** — multa de $20 (Puntaje de Agenda: 2).",
          },
          {
            en: "**3rd violation** — $30 Expectation Notice, sent home to be signed (Agenda Score: 1).",
            es: "**3ª falta** — Aviso de Expectativas de $30, que se envía a casa para firmar (Puntaje de Agenda: 1).",
          },
        ],
      },
      {
        id: "examples",
        label: { en: "Examples", es: "Ejemplos" },
        items: [
          {
            en: "Talking during instruction",
            es: "Hablar durante la instrucción",
          },
          {
            en: "Out of seat without permission",
            es: "Levantarse del asiento sin permiso",
          },
          {
            en: "Calling out instead of raising a hand",
            es: "Gritar la respuesta en vez de levantar la mano",
          },
          {
            en: "Coming to class unprepared — no pencil, no agenda",
            es: "Llegar a clase sin lo necesario — sin lápiz, sin agenda",
          },
          {
            en: "Off task during work time",
            es: "Distraerse durante el tiempo de trabajo",
          },
          {
            en: "Not following directions the first time",
            es: "No seguir las instrucciones a la primera",
          },
        ],
      },
    ],
  },
  {
    id: "major-violations",
    title: { en: "Major Violations", es: "Faltas Mayores" },
    body: {
      en: "These skip the warnings entirely: **an immediate $50 Expectation Notice and an Agenda Score of 1.**",
      es: "Estas se saltan las advertencias por completo: **un Aviso de Expectativas de $50 de inmediato y un Puntaje de Agenda de 1.**",
    },
    lists: [
      {
        id: "immediate-ticket",
        label: { en: "Immediate ticket", es: "Boleta inmediata" },
        items: [
          {
            en: "**Dishonesty** — lying to an adult, copying another student's work, taking something that isn't yours.",
            es: "**Deshonestidad** — mentirle a un adulto, copiar el trabajo de otro estudiante, tomar algo que no le pertenece.",
          },
          {
            en: "**Disrespect** — talking back, name-calling, refusing a direction from an adult.",
            es: "**Falta de respeto** — contestar de mala manera, poner apodos, negarse a seguir la indicación de un adulto.",
          },
          {
            en: "**Unsafe Body** — hitting, kicking, pushing, throwing objects, or leaving the room without permission.",
            es: "**Comportamiento inseguro** — pegar, patear, empujar, lanzar objetos o salir del salón sin permiso.",
          },
        ],
      },
    ],
  },
];

/** The remaining sections, each its own box across the bottom. */
export const economySections: EconomyBlock[] = [
  {
    id: "monthly-bills",
    title: { en: "Monthly Bills", es: "Cuentas Mensuales" },
    body: blank,
  },
  {
    id: "agenda-scores",
    title: { en: "Agenda Scores", es: "Puntos de Agenda" },
    body: blank,
  },
  {
    id: "perks",
    title: { en: "The Perks", es: "Los Beneficios" },
    body: blank,
  },
];
