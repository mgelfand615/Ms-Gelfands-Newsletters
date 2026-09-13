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
  itemsLabel?: Text;
  items?: Text[];
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
  {
    id: "bonuses",
    title: { en: "Bonuses", es: "Bonificaciones" },
    body: {
      en: "Earned for positive actions:",
      es: "Se ganan por acciones positivas:",
    },
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
  {
    id: "bonus-notices",
    title: { en: "Bonus Notices", es: "Avisos de Bonificación" },
    body: {
      en: "**+$50**, given for going Above and Beyond or showing Huge Improvement.",
      es: "**+$50**, se dan por esforzarse Más de lo Esperado o por mostrar una Gran Mejoría.",
    },
  },
];

/** Ways students lose money. */
export const breakingBank: EconomyBlock[] = [
  {
    id: "fines",
    title: { en: "Fines", es: "Multas" },
    body: blank,
  },
  {
    id: "minor-violations",
    title: { en: "Minor Violations", es: "Faltas Menores" },
    body: blank,
  },
  {
    id: "tickets",
    title: { en: "Tickets (must be signed)", es: "Boletas (deben firmarse)" },
    body: blank,
  },
  {
    id: "major-violations",
    title: { en: "Major Violations", es: "Faltas Mayores" },
    body: blank,
    itemsLabel: { en: "Immediate ticket", es: "Boleta inmediata" },
    items: [
      { en: "Dishonesty", es: "Deshonestidad" },
      { en: "Disrespect", es: "Falta de respeto" },
      { en: "Unsafe body", es: "Comportamiento inseguro" },
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
