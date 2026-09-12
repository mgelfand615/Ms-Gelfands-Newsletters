/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SITE CONTENT — everything on this site except the weekly newsletters.
 *
 *  This is the one file to edit for class info, the teacher bios, the
 *  Tech at Home page, and the Classroom Economy page. Weekly newsletters
 *  live in their own file: content/newsletters.ts
 *
 *  Text wrapped in «guillemets» is a placeholder — swap it for your own.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type NavLink = { label: string; href: string };

/* ── The class ──────────────────────────────────────────────────────────── */

export const klass = {
  /** Shown in the header and browser tab */
  name: "Mrs. Gelfand's 4th Grade",
  shortName: "4th Grade",
  grade: "4th Grade",
  school: "«Your School» Elementary",
  district: "Charlotte-Mecklenburg Schools",
  year: "2026–2027",
  /** One-line description used for search results and link previews */
  description:
    "Weekly newsletters, classroom news, and family resources for Mrs. Gelfand's 4th grade class.",
  /** Used for link previews. Update after you deploy. */
  url: "https://mgelfand615.github.io/Ms-Gelfands-Newsletters",
  /** Short welcome shown under the site title on the home page */
  welcome:
    "Every Friday I post that week's newsletter here — what we learned, what's coming up, and how you can help at home. Past weeks are always available below.",
};

/* ── Primary navigation ─────────────────────────────────────────────────── */

export const nav: NavLink[] = [
  { label: "This Week", href: "/" },
  { label: "Our Teachers", href: "/teachers" },
  { label: "Tech at Home", href: "/tech-at-home" },
  { label: "Classroom Economy", href: "/classroom-economy" },
];

/* ── Contact ────────────────────────────────────────────────────────────── */

export const contact = {
  email: "madisona.gelfand@cms.k12.nc.us",
  /** Best times to reach you — shown in the footer and on Our Teachers */
  hours: "Weekdays, 3:15–4:00 PM",
  /** How you prefer families reach out first */
  preferred:
    "Email is the fastest way to reach me. I answer every message within one school day.",
};

/* ── Our Teachers ───────────────────────────────────────────────────────── */

export type Teacher = {
  name: string;
  role: string;
  email: string;
  /** Optional photo: drop a file in /public and point here, e.g. "/gelfand.jpg" */
  photo?: string;
  /** Short bio paragraphs */
  bio: string[];
  /** Quick facts shown as chips */
  facts: { label: string; value: string }[];
};

export const teachers: Teacher[] = [
  {
    name: "Madison Gelfand",
    role: "4th Grade Homeroom · Math & Science",
    email: "madisona.gelfand@cms.k12.nc.us",
    photo: "",
    bio: [
      "I'm a Charlotte-Mecklenburg Schools teacher, and this is my first year with 4th grade after teaching 3rd and 2nd. I'm currently finishing a Master of Education in Curriculum & Instruction at UNC Charlotte.",
      "My teaching philosophy revolves around supporting students in any way possible, starting with a classroom where kids feel safe enough to take a risk and get something wrong. From there, I work to meet every student exactly where they are.",
      "Technology is one of the best tools I have for doing both of those things, which is why you'll see it woven through our week — and why the Tech at Home page exists.",
    ],
    facts: [
      { label: "Teaching since", value: "«2021»" },
      { label: "Reach me", value: "Weekdays 3:15–4:00 PM" },
      { label: "Ask me about", value: "Anything your child brings home" },
    ],
  },
  {
    name: "«Co-Teacher Name»",
    role: "4th Grade · ELA & Social Studies",
    email: "«email»@cms.k12.nc.us",
    photo: "",
    bio: [
      "«A short paragraph in your co-teacher's own words — where they've taught, what they teach on our team, and what they want families to know.»",
      "«A second paragraph about their approach with students, or something personal families enjoy knowing.»",
    ],
    facts: [
      { label: "Teaching since", value: "«year»" },
      { label: "Reach me", value: "«times»" },
      { label: "Ask me about", value: "«topic»" },
    ],
  },
];

/* ── Tech at Home ───────────────────────────────────────────────────────── */

export type Tool = {
  name: string;
  /** What it is, in one plain sentence for families */
  what: string;
  /** What it's used for in our class */
  use: string;
  /** How a family signs in or gets to it */
  access: string;
  href?: string;
};

export const techIntro = [
  "Every student in our class has a district device and a CMS account. These are the tools we actually use — what each one is for, and how to get into it at home.",
  "You do not need to buy anything. If a login isn't working or a device is damaged, email me and we'll sort it out the same day.",
];

export const tools: Tool[] = [
  {
    name: "Canvas",
    what: "The district's online classroom.",
    use: "Assignments, due dates, and anything your child needs to turn in.",
    access:
      "Sign in with your child's CMS student email and password. Families can also use the Canvas Parent app with an observer code — email me and I'll send yours.",
    href: "https://cms.instructure.com",
  },
  {
    name: "PowerSchool",
    what: "The district gradebook.",
    use: "Grades, attendance, and report cards.",
    access:
      "Parent Portal account at the CMS website. If you've never set one up, the front office can create one for you.",
    href: "https://www.cmsk12.org",
  },
  {
    name: "i-Ready",
    what: "Adaptive reading and math practice.",
    use: "Assigned lessons — we aim for about 45 minutes per subject per week, most of it done in class.",
    access: "Signs in automatically through Clever on the school device.",
  },
  {
    name: "Google Workspace",
    what: "Docs, Slides, and Drive.",
    use: "Writing, projects, and anything your child creates with a partner.",
    access: "Signs in with the CMS student account.",
  },
];

export const techHabits = [
  {
    title: "Charge it every night",
    body: "Devices come home charged and should go back charged. A dead battery costs your child the first half of the morning.",
  },
  {
    title: "Screens in a common room",
    body: "Homework on a device goes better at the kitchen table than behind a closed door. This is the single biggest thing families tell me helps.",
  },
  {
    title: "Ask to see the work, not the score",
    body: "\"Show me what you made today\" gets a much better conversation than \"what did you get?\"",
  },
  {
    title: "Report problems early",
    body: "Cracked screen, missing charger, forgotten password — tell me on day one, not on test day. There's no trouble for any of it.",
  },
];

/* ── Classroom Economy ──────────────────────────────────────────────────── */

export const economyIntro = [
  "Our class runs on a classroom economy. Students hold a job, earn a paycheck, pay rent on their desk, and decide what to do with what's left. It's how we practice the 4th grade money standards with real stakes — and how we build responsibility without a behavior chart.",
  "Nothing here involves real money, and nothing a student earns or owes affects their grade.",
];

export type Job = { title: string; pay: string; duties: string };

export const jobs: Job[] = [
  { title: "Banker", pay: "$12/week", duties: "Runs payday and keeps the class ledger accurate." },
  { title: "Librarian", pay: "$10/week", duties: "Checks books in and out; keeps the class library shelved." },
  { title: "Tech Helper", pay: "$12/week", duties: "Cart check, charging, and first-stop help with device problems." },
  { title: "Supply Manager", pay: "$10/week", duties: "Restocks tables and keeps shared supplies usable." },
  { title: "Line Leader", pay: "$8/week", duties: "Gets us to specials and lunch on time and quietly." },
  { title: "Greeter", pay: "$8/week", duties: "Welcomes visitors and gets new students set up." },
];

export const economyRules = [
  { label: "Payday", value: "Every Friday morning" },
  { label: "Desk rent", value: "$5/week, due at payday" },
  { label: "Bonuses", value: "Earned for going beyond your job — never for behavior alone" },
  { label: "Fines", value: "Small and predictable: missing homework, unsafe device use" },
  { label: "Store day", value: "Last Friday of each month" },
];

export const storeItems = [
  { item: "Extra library trip", cost: "$5" },
  { item: "Flexible seating for a day", cost: "$15" },
  { item: "Class DJ for math rotations", cost: "$20" },
  { item: "Homework pass", cost: "$30" },
  { item: "Lunch with the teacher", cost: "$40" },
  { item: "Teacher's chair for a day", cost: "$50" },
];

export const economyAtHome = [
  "Ask what job your child holds this month and what it actually requires of them.",
  "When a paycheck comes home, ask what they're saving for. Savings goals are where the real learning happens.",
  "If they get fined, let it stand. The fine is small on purpose, and it teaches more than it costs.",
];
