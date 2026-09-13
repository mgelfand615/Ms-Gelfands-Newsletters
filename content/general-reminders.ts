/**
 * ─────────────────────────────────────────────────────────────────────────
 *  GENERAL REMINDERS — the box row above Quick Links on every newsletter.
 *
 *  These are the things that are true all year: arrival times, dismissal,
 *  birthday treats. They live here rather than in the weekly newsletter so
 *  you are not retyping them every Friday.
 * ─────────────────────────────────────────────────────────────────────────
 */

import type { Block } from "./types";

export const generalReminders: Block[] = [
  {
    id: "arrival",
    title: { en: "Arrival 7:30am - 8:00am", es: "Llegada 7:30am - 8:00am" },
    body: {
      en: "Students who arrive by car after 8:00am will be marked tardy. Breakfast closes at 7:55am. Please plan accordingly. (Busses that are late will never mark students tardy and will always allow them to grab breakfast before coming to class).",
      es: "Los estudiantes que lleguen en carro después de las 8:00am serán marcados como tarde. El desayuno cierra a las 7:55am. Por favor planifique con tiempo. (Los autobuses que lleguen tarde nunca harán que el estudiante sea marcado como tarde, y siempre se le permitirá tomar el desayuno antes de entrar a clase).",
    },
  },
  {
    id: "early-dismissal",
    title: { en: "Early Dismissal", es: "Salida Temprana" },
    body: {
      en: "Early dismissal ends at 1:45pm. If an emergency arises and you must pick up your child between 1:45pm and 3:00pm, please notify me and I will let the office know you are on your way.",
      es: "La salida temprana termina a la 1:45pm. Si surge una emergencia y necesita recoger a su hijo/a entre la 1:45pm y las 3:00pm, por favor avíseme y yo le informaré a la oficina que viene en camino.",
    },
  },
  {
    id: "birthday-treats",
    title: { en: "Birthdays", es: "Cumpleaños" },
    body: {
      en: "We love to celebrate birthdays at school! Any treats that are sent in, please have them sent in by 10:15am so we can celebrate at lunch. All treats must be pre-packaged and sealed.",
      es: "¡Nos encanta celebrar los cumpleaños en la escuela! Si envía golosinas, por favor envíelas antes de las 10:15am para poder celebrar durante el almuerzo. Todas las golosinas deben venir empaquetadas y selladas.",
    },
  },
];
