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

/** The opening blurb about the goal of the economy. */
export const economyIntro: Text = blank;

/** Ways students earn. */
export const makingBank: EconomyBlock[] = [
  {
    id: "jobs",
    title: { en: "Classroom Jobs", es: "Trabajos del Salón" },
    body: blank,
  },
  {
    id: "bonuses",
    title: { en: "Bonuses", es: "Bonificaciones" },
    body: blank,
  },
  {
    id: "bonus-notices",
    title: { en: "Bonus Notices", es: "Avisos de Bonificación" },
    body: blank,
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
