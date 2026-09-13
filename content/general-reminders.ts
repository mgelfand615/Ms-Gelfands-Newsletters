/**
 * ─────────────────────────────────────────────────────────────────────────
 *  GENERAL REMINDERS — the box row above Quick Links on every newsletter.
 *
 *  These are the things that are true all year: arrival, dismissal, birthday
 *  treats, transportation. They live here rather than in the weekly
 *  newsletter so you are not retyping them every Friday.
 * ─────────────────────────────────────────────────────────────────────────
 */

import type { Block } from "./types";

export const generalReminders: Block[] = [
  {
    id: "arrival",
    title: { en: "Arrival · 7:30–8:00 AM", es: "Llegada · 7:30–8:00 AM" },
    body: {
      en: "Students dropped off by car after 8:00 AM are marked tardy, and breakfast closes at 7:55 AM — please plan accordingly. A late bus is never counted against your child: they will not be marked tardy, and they will still get breakfast before coming to class.",
      es: "Los estudiantes que llegan en carro después de las 8:00 AM se marcan como tarde, y el desayuno cierra a las 7:55 AM — por favor planifique con tiempo. Un autobús que llega tarde nunca perjudica a su hijo/a: no se le marcará tarde y todavía podrá desayunar antes de entrar a clase.",
    },
  },
  {
    id: "early-dismissal",
    title: {
      en: "Early Dismissal · Ends 1:45 PM",
      es: "Salida Temprana · Termina a la 1:45 PM",
    },
    body: {
      en: "Early dismissal ends at 1:45 PM. If an emergency means you need to pick your child up between 1:45 and 3:00 PM, let me know and I will tell the office you are on your way.",
      es: "La salida temprana termina a la 1:45 PM. Si por una emergencia necesita recoger a su hijo/a entre la 1:45 y las 3:00 PM, avíseme y yo le informaré a la oficina que viene en camino.",
    },
  },
  {
    id: "birthday-treats",
    title: { en: "Birthday Treats", es: "Golosinas de Cumpleaños" },
    body: {
      en: "We love celebrating birthdays! If you are sending treats, please have them here by 10:15 AM so we can celebrate at lunch. All treats must arrive pre-packaged and sealed.",
      es: "¡Nos encanta celebrar los cumpleaños! Si envía golosinas, por favor que lleguen antes de las 10:15 AM para poder celebrar durante el almuerzo. Todas las golosinas deben llegar empaquetadas y selladas.",
    },
  },
  {
    id: "transportation",
    title: { en: "Transportation Home", es: "Transporte a Casa" },
    body: {
      en: "However your child went home during the first week of school is how they will go home every day. If that ever changes, tell me as early as you can — a ParentSquare message, a text, or a note in your child's agenda that they hand me in the morning. Without word from a guardian, your child goes home their usual way.",
      es: "La manera en que su hijo/a se fue a casa durante la primera semana de clases es la que usará todos los días. Si eso cambia alguna vez, avíseme lo antes posible: un mensaje por ParentSquare, un mensaje de texto, o una nota en la agenda de su hijo/a que me entregue en la mañana. Sin aviso de un guardián, su hijo/a se irá a casa de la manera acostumbrada.",
    },
  },
];
