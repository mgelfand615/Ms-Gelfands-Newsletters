/**
 * ─────────────────────────────────────────────────────────────────────────
 *  WEEKLY NEWSLETTERS
 *
 *  ADDING A NEW WEEK
 *  -----------------
 *  1. Copy the whole `{ … }` block for the most recent week.
 *  2. Paste it at the TOP of the `newsletters` array below.
 *  3. Change `slug`, `week`, `date`, `dateRange`, and the content.
 *
 *  The newest entry (by `date`) becomes the featured newsletter on the home
 *  page automatically — you never have to move anything else. Every other
 *  week drops into the archive on its own.
 *
 *  Only `slug`, `week`, `date`, `dateRange`, `title`, and `intro` are
 *  required. Delete any optional section you don't need that week and it
 *  simply won't render.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type Newsletter = {
  /** URL segment — lowercase, dashes only. Must be unique. */
  slug: string;
  /** Week number in the school year */
  week: number;
  /** ISO date of the Friday it went out (YYYY-MM-DD). Used for sorting. */
  date: string;
  /** Human-readable span, e.g. "September 8–11, 2026" */
  dateRange: string;
  /** Headline for the week */
  title: string;
  /** Opening note to families — one or two sentences */
  intro: string;

  /** What we studied, by subject */
  learning?: { subject: string; text: string }[];
  /** Dates families need on the calendar */
  dates?: { when: string; what: string }[];
  /** Short action items — permission slips, supplies, logins */
  reminders?: string[];
  /** Conversation starters for the dinner table */
  askYourStudent?: string[];
  /** A celebration, a class win, or a thank-you */
  spotlight?: { title: string; body: string };
};

export const newsletters: Newsletter[] = [
  {
    slug: "week-4",
    week: 4,
    date: "2026-09-11",
    dateRange: "September 8–11, 2026",
    title: "Rounding, revising, and our first paychecks",
    intro:
      "A four-day week that did the work of five. We finished our first writing pieces, rounded numbers up to the hundred-thousands, and every student was paid for the first time.",
    learning: [
      {
        subject: "Math",
        text: "Rounding multi-digit whole numbers to any place. We used open number lines rather than the rhyme, so ask your child to draw one — they can explain why 4,681 rounds to 5,000 much better than they can recite a rule.",
      },
      {
        subject: "Reading",
        text: "Summarizing nonfiction. Students practiced pulling the main idea out of a passage without simply retelling the whole thing, which is genuinely hard at this age.",
      },
      {
        subject: "Writing",
        text: "First personal narratives went to final draft. They revised for a strong lead and a real ending — not \"and then I woke up.\"",
      },
      {
        subject: "Science",
        text: "Energy transfer. We built marble ramps and measured how far a cup slid, which was loud and completely worth it.",
      },
      {
        subject: "Social Studies",
        text: "The three regions of North Carolina. We started our region maps, due next Thursday.",
      },
    ],
    dates: [
      { when: "Mon, Sept 14", what: "Picture day — smile, retakes are in October" },
      { when: "Thu, Sept 17", what: "NC region maps due" },
      { when: "Fri, Sept 18", what: "Math quiz: place value and rounding" },
      { when: "Tue, Sept 22", what: "Curriculum Night, 6:00 PM in our classroom" },
    ],
    reminders: [
      "Return the signed field trip form by Friday, Sept 18.",
      "Devices should come to school charged each morning.",
      "Library books are due back Wednesdays.",
    ],
    askYourStudent: [
      "Show me how you round a number on a number line.",
      "What job did you get in our classroom economy, and what do you have to do for it?",
      "What did you change about your story when you revised it?",
    ],
    spotlight: {
      title: "First payday",
      body: "Every student received their first paycheck Friday, paid rent on their desk, and banked the rest. Several of them immediately started saving for the $50 teacher's chair. I admire the ambition.",
    },
  },
  {
    slug: "week-3",
    week: 3,
    date: "2026-09-04",
    dateRange: "August 31 – September 4, 2026",
    title: "Place value clicks, and jobs are assigned",
    intro:
      "We got into the real work this week. Students applied for classroom jobs, and I was genuinely impressed by how seriously they took the applications.",
    learning: [
      {
        subject: "Math",
        text: "Place value through 1,000,000, and the idea that each place is ten times the one to its right. This is the foundation for everything we do in multiplication later this year.",
      },
      {
        subject: "Reading",
        text: "Asking and answering questions using text evidence. \"Where does it say that?\" has become our most-used question.",
      },
      {
        subject: "Writing",
        text: "Drafting personal narratives, focused on small moments rather than whole vacations.",
      },
      {
        subject: "Science",
        text: "Introduced energy — what it is, and the forms we can actually observe.",
      },
      {
        subject: "Social Studies",
        text: "Mapping skills: latitude, longitude, and locating North Carolina on a US map.",
      },
    ],
    dates: [
      { when: "Mon, Sept 7", what: "No school — Labor Day" },
      { when: "Fri, Sept 11", what: "First classroom payday" },
      { when: "Mon, Sept 14", what: "Picture day" },
    ],
    reminders: [
      "Classroom economy job assignments came home Friday — ask to see it.",
      "Please send in a refillable water bottle, labeled with your child's name.",
    ],
    askYourStudent: [
      "What job did you apply for, and why that one?",
      "How many tens are in one hundred? How many hundreds are in one thousand?",
    ],
    spotlight: {
      title: "Job applications",
      body: "Students wrote real applications for their classroom jobs — why they wanted it and what makes them a good fit. Several rewrote theirs without being asked. That is exactly the habit I want.",
    },
  },
  {
    slug: "week-2",
    week: 2,
    date: "2026-08-28",
    dateRange: "August 24–28, 2026",
    title: "Routines, devices, and our first read-aloud",
    intro:
      "Week two is when a class starts to feel like a class. We set up devices, launched our read-aloud, and practiced our routines until they stopped needing reminders.",
    learning: [
      {
        subject: "Math",
        text: "Reviewing addition and subtraction with regrouping so we can build on it. We also set up our math notebooks.",
      },
      {
        subject: "Reading",
        text: "Started our first read-aloud and practiced how to have a real discussion about a book — including how to disagree with someone kindly.",
      },
      {
        subject: "Writing",
        text: "Generating ideas. Every student built a list of small moments they could write about.",
      },
      { subject: "Science", text: "Science safety and how we use our notebooks to record what we observe." },
      { subject: "Social Studies", text: "What geographers do and why maps are made the way they are." },
    ],
    dates: [
      { when: "Fri, Aug 28", what: "Device agreements due" },
      { when: "Mon, Aug 31", what: "Classroom job applications open" },
    ],
    reminders: [
      "Sign in to Canvas with your child once this week so we know the login works.",
      "Headphones stay at school — please send a pair if you haven't.",
    ],
    askYourStudent: [
      "What book are we reading together as a class?",
      "What are the rules for using your school device?",
    ],
    spotlight: {
      title: "Device setup, zero tears",
      body: "All 24 students logged in to Canvas and i-Ready on the first try. That never happens. Thank you to the families who set up accounts over the weekend.",
    },
  },
  {
    slug: "week-1",
    week: 1,
    date: "2026-08-21",
    dateRange: "August 17–21, 2026",
    title: "Welcome to 4th grade",
    intro:
      "We made it through the first week. This year I'll post a newsletter here every Friday, so you never have to dig through a backpack to find out what happened.",
    learning: [
      {
        subject: "All subjects",
        text: "Our first week was about how we work together: how we start the morning, how we move through the hallway, how we ask for help, and what to do when something is hard.",
      },
    ],
    dates: [
      { when: "Mon, Aug 24", what: "Full academic schedule begins" },
      { when: "Fri, Aug 28", what: "Device agreements due" },
    ],
    reminders: [
      "Return the student information form and device agreement.",
      "Bookmark this site — it's where every newsletter will live.",
    ],
    askYourStudent: [
      "Who did you sit next to this week?",
      "What's one thing you're looking forward to this year?",
    ],
    spotlight: {
      title: "Hopes and dreams",
      body: "On day one, every student wrote one goal for the year. They're posted above the window, and we'll revisit them in May.",
    },
  },
];

/* ── Helpers ────────────────────────────────────────────────────────────── */

/** All newsletters, newest first. */
export function allNewsletters(): Newsletter[] {
  return [...newsletters].sort((a, b) => b.date.localeCompare(a.date));
}

/** The newsletter featured on the home page. */
export function latestNewsletter(): Newsletter {
  return allNewsletters()[0];
}

/** Every week except the featured one. */
export function pastNewsletters(): Newsletter[] {
  return allNewsletters().slice(1);
}

export function newsletterBySlug(slug: string): Newsletter | undefined {
  return newsletters.find((n) => n.slug === slug);
}
