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
    dateRange: blank,

    updates: [
      {
        en: "i-Ready testing is all finished!  For students who were absent this on one of the testing days will make it up this coming week.  i-Ready scores will be sent home in your child’s takehome folder soon.",
        es: "",
      },
      {
        en: "Interested in joining the PTA? Click here to join: https://gvsa.givebacks.com/shop",
        es: "",
      },
      {
        en: "GVSA Fundraiser: Our first fundraiser of the school year is kicking off Tuesday, September 22nd, and we’re ready to see which classroom can bring in the BIGGEST popcorn sales! 🚀 Our classroom has its own unique fundraising link that you can share with your families, friends, neighbors, and anyone else who loves a good snack! 🍿 🍕 TOP-SELLING CLASSROOM will earn an EPIC PIZZA PARTY! 🎉🍕\nLink: https://poppinpopcornonline.com/store/store.php?sID=00676032",
        es: "",
      },
    ],

    upcomingDates: [
      {
        when: { en: "Tuesday, September 15th", es: "" },
        what: {
          en: "Chuck E. Cheese Fundraiser 3:30pm-9:00pm at 7970 Lyles Lane NW, Concord, NC 28027",
          es: "",
        },
      },
      {
        when: { en: "Wednesday, September 16th", es: "" },
        what: { en: "Curriculum Night 5-6pm", es: "" },
      },
      {
        when: { en: "Thursday, September 17th", es: "" },
        what: { en: "End Unit Reading Test", es: "" },
      },
      {
        when: { en: "Friday, September 18th", es: "" },
        what: { en: "Math Unit 1 Retest", es: "" },
      },
    ],

    birthdays: [
      { id: "tebi", name: "Tebi", date: { en: "September 14th", es: "" } },
      { id: "tabi", name: "Tabi", date: { en: "September 14th", es: "" } },
      {
        id: "antonella",
        name: "Antonella",
        date: { en: "September 14th", es: "" },
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
            es: "",
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
            es: "",
          },
          {
            en: "Our End Unit Assessment will take place Thursday. Scholars will answer both multiple choice questions and open response questions requiring them to identify character feelings using evidence from the text. They will also participate in a small group discussion about what they have read in class so far.",
            es: "",
          },
        ],
        span: "half",
        showHomework: true,
        homework: { en: "Weekly Reading Log due Friday, 9/18.", es: "" },
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
            es: "",
          },
          {
            en: "Scholars will have the opportunity to retest for Unit 1 on Friday. The Unit 1 Review Study Guide is attached.",
            es: "",
          },
        ],
        span: "half",
        showHomework: true,
        homework: {
          en: "The worksheet that will be sent home on Monday. Due Friday, 9/18.",
          es: "",
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
            es: "",
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
