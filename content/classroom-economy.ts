/**
 * ─────────────────────────────────────────────────────────────────────────
 *  CLASSROOM ECONOMY  →  /classroom-economy
 *
 *  Two columns — ways to earn, ways to lose — then the boxes underneath.
 * ─────────────────────────────────────────────────────────────────────────
 */

import type { SubjectColor } from "@/components/tone";
import type { Block, Text } from "./types";

/**
 * One box on the page. `items` is an optional bulleted list shown under the
 * paragraph — used for the behaviours that draw an immediate ticket.
 *
 * The list lives on the block it belongs to. It used to be a separate array
 * the page matched up by comparing heading text, which meant rewording
 * "Major Violations" silently deleted the list.
 */
export type EconomyBlock = Block & {
  /** Shown beside the heading. Decorative — screen readers skip it. */
  emoji?: string;
  /**
   * Lists under the paragraph. A list with no label sits directly beneath
   * it; a labelled one gets its own inset box, for an aside like "Examples".
   */
  lists?: {
    id: string;
    label?: Text;
    items: Text[];
    /** Set 2 for a long list of short phrases, so it stops running tall. */
    columns?: 2;
  }[];
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
    emoji: "💼",
    title: { en: "Classroom Jobs", es: "Trabajos del Salón" },
    body: {
      en: "Every student applies for and holds a classroom job. Paychecks arrive every other Friday — the same day the class store opens.",
      es: "Cada estudiante solicita y desempeña un trabajo en el salón. Los pagos llegan cada dos viernes — el mismo día que abre la tienda de la clase.",
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
    emoji: "⭐",
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
      {
        id: "bonuses-at-home",
        label: { en: "At home", es: "En casa" },
        items: [
          {
            en: "Ask which bonus your child earned this week. Bonuses are the quickest way to grow a balance, and they add on top of the regular paycheck.",
            es: "Pregúntele qué bonificación ganó su hijo/a esta semana. Las bonificaciones son la manera más rápida de aumentar el saldo y se suman al pago regular.",
          },
        ],
      },
    ],
  },
  {
    id: "bonus-notices",
    emoji: "🎉",
    title: { en: "Bonus Notices", es: "Avisos de Bonificación" },
    body: {
      en: "**+$50**, given for going Above and Beyond or showing Huge Improvement. It is stapled into your child's agenda.",
      es: "**+$50**, se dan por esforzarse Más de lo Esperado o por mostrar una Gran Mejoría. Se engrapa en la agenda de su hijo/a.",
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
    emoji: "⚠️",
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
    emoji: "🛑",
    title: { en: "Major Violations", es: "Faltas Mayores" },
    body: {
      en: "These skip the warnings entirely: **an immediate $50 Expectation Notice and an Agenda Score of 1.** An Expectation Notice is a coloured slip stapled into your child's agenda — please sign it and send it back the next day.",
      es: "Estas se saltan las advertencias por completo: **un Aviso de Expectativas de $50 de inmediato y un Puntaje de Agenda de 1.** El Aviso de Expectativas es una hoja de color que se engrapa en la agenda de su hijo/a — por favor fírmela y devuélvala al día siguiente.",
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

/** Sits under the "Spending" heading, above the boxes. */
export const spendingIntro: Text = {
  en: "Bills are due the first Friday of the month and the store opens every other Friday, so the two rarely land on the same day. Students set their bill money aside first — whatever is left after that is theirs to spend.",
  es: "Las cuentas vencen el primer viernes del mes y la tienda abre cada dos viernes, así que rara vez caen el mismo día. Los estudiantes apartan primero el dinero de sus cuentas — lo que quede después es suyo para gastar.",
};

/** The remaining sections, each its own box across the bottom. */
export const economySections: EconomyBlock[] = [
  {
    id: "monthly-bills",
    emoji: "🧾",
    title: { en: "Monthly Bills", es: "Cuentas Mensuales" },
    body: {
      en: "Just like in the real world, students are responsible for paying monthly living expenses on the **first Friday of each month**:",
      es: "Como en el mundo real, los estudiantes son responsables de pagar sus gastos mensuales el **primer viernes de cada mes**:",
    },
    lists: [
      {
        id: "bills",
        items: [
          { en: "**Cubby Rent** — $200", es: "**Renta del cubby** — $200" },
          {
            en: "**Chromebook Rent** — $50",
            es: "**Renta de la Chromebook** — $50",
          },
          {
            en: "**Utilities** — $30 · Electricity $10, Water $10, Wi-Fi $10",
            es: "**Servicios** — $30 · Electricidad $10, Agua $10, Wi-Fi $10",
          },
          {
            en: "**Total monthly bills — $280**",
            es: "**Total de cuentas mensuales — $280**",
          },
        ],
      },
    ],
  },
  {
    id: "perks",
    emoji: "🎁",
    title: { en: "The Perks", es: "Los Beneficios" },
    body: {
      en: "Students shop **The Gelf-Stand**, our classroom store, every payday — **every other Friday**, at the very end of the day. Before spending anything, students set aside the **$280** they owe for that month's bills. Whatever is left after that is theirs to spend. Everything on the shelves is priced below.",
      es: "Los estudiantes compran en **The Gelf-Stand**, la tienda de nuestro salón, cada día de pago — **cada dos viernes**, al final del día. Antes de gastar, los estudiantes apartan los **$280** que deben para las cuentas de ese mes. Lo que quede después es suyo para gastar. Abajo están los precios de todo lo que hay en la tienda.",
    },
    lists: [
      {
        id: "donations",
        label: { en: "Donations", es: "Donaciones" },
        items: [
          {
            en: "Any and all donations for the store are greatly appreciated! Popular items are large candy bars, baby bottle pops, push pops, ring pops, and little squishies.",
            es: "¡Agradecemos muchísimo cualquier donación para la tienda! Los artículos más populares son barras de dulce grandes, Baby Bottle Pops, Push Pops, Ring Pops y squishies pequeños.",
          },
        ],
      },
    ],
  },
];

/**
 * ─────────────────────────────────────────────────────────────────────────
 *  THE GELF-STAND  — the class store's price board.
 *
 *  Tiers are bands of price, cheapest first. To change a price, edit the
 *  `price` beside the item; to retire an item, delete its line.
 * ─────────────────────────────────────────────────────────────────────────
 */
export type StoreTier = {
  /** Permanent internal name — never shown. */
  id: string;
  name: Text;
  /** The price band, shown beside the tier name. */
  range: string;
  /** The tier's tint. Runs coolest to richest, ending on purple. */
  color: SubjectColor;
  items: { id: string; name: Text; price: string }[];
};

export const gelfStandIntro: Text = {
  en: "Everything students can buy, and what it costs. Bills are set aside first — the rest is theirs to spend.",
  es: "Todo lo que los estudiantes pueden comprar y cuánto cuesta. Primero apartan el dinero de las cuentas — el resto es suyo para gastar.",
};

export const gelfStand: StoreTier[] = [
  {
    id: "low",
    name: { en: "Low Tier", es: "Nivel Bajo" },
    range: "$0 – $100",
    color: "ice",
    items: [
      { id: "candy-bin", name: { en: "Candy Bin", es: "Bote de dulces" }, price: "$25" },
      { id: "line-jumper", name: { en: "Line Jumper", es: "Pase para saltar la fila" }, price: "$50" },
      { id: "pen-day", name: { en: "Pen Day", es: "Día de pluma" }, price: "$50" },
      { id: "free-draw", name: { en: "Free Draw Pass", es: "Pase de dibujo libre" }, price: "$100" },
      { id: "text-home", name: { en: "Positive Text Home", es: "Mensaje positivo a casa" }, price: "$100" },
    ],
  },
  {
    id: "medium",
    name: { en: "Medium Tier", es: "Nivel Medio" },
    range: "$100 – $250",
    color: "mint",
    items: [
      { id: "midsize-candy", name: { en: "Midsize Candy", es: "Dulce mediano" }, price: "$100" },
      { id: "snack-box", name: { en: "Snack Box", es: "Caja de bocadillos" }, price: "$200" },
      { id: "small-treasure", name: { en: "Small Treasure Box", es: "Cofre del tesoro pequeño" }, price: "$200" },
      { id: "call-home", name: { en: "Positive Call Home", es: "Llamada positiva a casa" }, price: "$200" },
      { id: "teacher-desk", name: { en: "Sit at Teacher Desk", es: "Sentarse en el escritorio de la maestra" }, price: "$250" },
    ],
  },
  {
    id: "high",
    name: { en: "High Tier", es: "Nivel Alto" },
    range: "$250 – $400",
    color: "clay",
    items: [
      { id: "homework-pass", name: { en: "Homework Pass", es: "Pase de tarea" }, price: "$250" },
      { id: "large-candy", name: { en: "Large Candy", es: "Dulce grande" }, price: "$300" },
      { id: "lunch", name: { en: "Lunch with Teacher/Friend", es: "Almuerzo con la maestra o con un amigo" }, price: "$300" },
      { id: "secret-agent", name: { en: "Secret Agent", es: "Agente secreto" }, price: "$300" },
      { id: "large-treasure", name: { en: "Large Treasure Box", es: "Cofre del tesoro grande" }, price: "$350" },
    ],
  },
  {
    id: "premier",
    name: { en: "Premier Tier", es: "Nivel Premier" },
    range: "$400+",
    color: "lilac",
    items: [
      { id: "takis", name: { en: "Takis", es: "Takis" }, price: "$400" },
      { id: "squishies", name: { en: "Squishies", es: "Squishies" }, price: "$400" },
    ],
  },
];
