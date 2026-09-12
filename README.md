# Ms. Gelfand's Newsletters

A class newsletter website. Families land straight on the most recent
newsletter; older weeks live on the Past Newsletters tab. Everything on the
site can be shown in English or Spanish with the toggle in the header.

Built with Next.js 16 and Tailwind CSS v4, exported as a fully static site so
it can be hosted free on GitHub Pages.

## Running it on your computer

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## The pages

One file per page, so you only ever open the one you're changing:

| Page | File to edit |
| --- | --- |
| Newsletter (home) | `content/newsletters.ts` |
| Past Newsletters | fills itself in automatically |
| About Your Teachers | `content/teachers.ts` |
| Student Tech at Home | `content/student-tech.ts` |
| Classroom Economy | `content/classroom-economy.ts` |
| Quick Links | `content/quick-links.ts` |
| Class name, tabs, contact | `content/site.ts` |

Anywhere you haven't written anything yet shows a dashed **placeholder box**.
Fill in that field and the box disappears on its own — so you can see at a
glance what's left to do.

## Writing in two languages

Every piece of text is a pair:

```ts
{ en: "Picture day is Monday.", es: "El día de fotos es el lunes." }
```

Write the English first. If you leave `es` blank, the English shows in both
languages — nothing breaks, so you can add Spanish whenever you get to it.

The toggle is instant (both languages are already in the page) and remembers
each family's choice on their own device.

## Adding this week's newsletter

This is the only thing you do each week.

1. Open [`content/newsletters.ts`](content/newsletters.ts).
2. Copy the entire `{ … }` block.
3. Paste the copy at the **top** of the `newsletters` array.
4. Change `slug`, `week`, `date`, and `dateRange`, then fill in the writing.

The newest entry by `date` automatically becomes the one families land on, and
last week's moves to Past Newsletters. You never move anything else.

Each week holds: Updates, Upcoming Dates, Birthdays, and What We're Learning
(one card per subject, each with its own homework and an optional directions
link).

## ⚠ Never put passwords on this site

The site is public. Anyone who finds the address can read it, and search
engines will index it. A shared student password posted here would let a
stranger sign in as your students.

On the Student Tech page:

- **Safe** — where to go, what to click, and the username *pattern*
  ("your child's student ID").
- **Not safe** — the actual password, or anything that completes a login.

Send passwords home on paper, or by email to that one family.

## Tests

```bash
npm test          # run once
npm run test:watch  # re-run as you edit
```

They also run automatically on every push — a failure stops the site from
publishing, so a mistake never reaches families.

The suite covers the things that would quietly break:

- **Which newsletter is current** — that the newest `date` wins no matter what
  order the weeks are typed in, and that it's left out of the archive.
- **Content mistakes** — an empty newsletter list or two weeks sharing a
  `slug` fail with a plain sentence naming the file.
- **Duplicate `id`s** — the likeliest mistake, since you add a teacher or a
  tool by copying an existing one.
- **Both languages render**, English fills in for missing Spanish, and the
  Spanish is tagged `lang="es"` so screen readers pronounce it correctly.
- **Placeholders** appear when a field is empty and disappear when it's filled.
- **The language toggle** — saving, reloading, and two tabs staying in step.

## Colors

The classroom palette lives at the top of
[`app/globals.css`](app/globals.css):

```
mint  #c5f7db    green  #6befb2
lilac #dbc9f8    purple #9289e2
ice   #bcf9ff    sky    #5ac5f2
```

Those pastels are too light to hold small text, so each has a deeper partner
(`--accent`, `--highlight`, `--sky-ink`) used for headings, links, and buttons.
Change these variables and the whole site re-skins. Dark mode follows the
reader's device setting.

## Publishing to GitHub Pages

1. Create a GitHub repository named **`Ms-Gelfands-Newsletters`** and push this
   folder to its `main` branch.
2. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Every push to `main` rebuilds and republishes the site automatically
   (see [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

The site will be at
`https://<your-username>.github.io/Ms-Gelfands-Newsletters/`.

If you name the repository something else, update `NEXT_PUBLIC_BASE_PATH` in
the workflow to match exactly, and set `klass.url` in `content/site.ts`.

## Project layout

```
app/
  page.tsx                      Home — the newest newsletter
  newsletters/page.tsx          Past Newsletters
  newsletters/[slug]/page.tsx   One page per past week
  teachers/page.tsx             About Your Teachers
  student-tech/page.tsx         Student Tech at Home
  classroom-economy/page.tsx    Classroom Economy
  globals.css                   Colors, fonts, language CSS, print styles
components/                     Header, footer, cards, the EN/ES toggle
content/
  newsletters.ts                ← edit weekly
  teachers.ts                   ← one file per page
  student-tech.ts
  classroom-economy.ts
  quick-links.ts
  site.ts                       Class name, tabs, contact
  types.ts                      The bilingual Text type
tests/                          Run with `npm test`
```

## A note on privacy

Student names, photos, and work should only appear with family permission, and
never alongside anything that identifies a child's schedule or location.
