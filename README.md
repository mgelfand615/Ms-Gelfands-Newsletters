# Class Newsletters

A website for weekly class newsletters. The home page always shows the most
recent week; every past week lives in the archive below it and on its own page.

Built with Next.js 16 and Tailwind CSS v4, exported as a fully static site so it
can be hosted free on GitHub Pages.

## Running it on your computer

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Adding this week's newsletter

This is the only thing you need to do each Friday.

1. Open [`content/newsletters.ts`](content/newsletters.ts).
2. Copy the entire `{ … }` block for the most recent week.
3. Paste the copy at the **top** of the `newsletters` array.
4. Change `slug`, `week`, `date`, `dateRange`, `title`, `intro`, and the content.

That's it. The newest entry by `date` automatically becomes the featured
newsletter on the home page, and last week's slides down into the archive. You
never have to move anything else or touch another file.

Every section below `intro` is optional — delete any you don't need that week
and it won't render:

| Field | What it is |
| --- | --- |
| `learning` | What we studied, by subject |
| `dates` | Dates families need on the calendar |
| `reminders` | Short action items (forms, supplies, logins) |
| `askYourStudent` | Dinner-table conversation starters |
| `spotlight` | A celebration, class win, or thank-you |

## Editing the other pages

Everything else on the site lives in [`content/site.ts`](content/site.ts):

- **Class info & navigation** — the `klass` and `nav` objects
- **Our Teachers** — the `teachers` array (one entry per teacher)
- **Tech at Home** — `techIntro`, `tools`, and `techHabits`
- **Classroom Economy** — `economyIntro`, `jobs`, `economyRules`,
  `storeItems`, and `economyAtHome`

Placeholders are marked with `«guillemets»` — search for `«` to find everything
still waiting on you.

## Colors

The whole site is themed from a handful of CSS variables at the top of
[`app/globals.css`](app/globals.css). Change `--accent` and `--highlight` and
the entire site re-skins. Dark mode follows the reader's device setting
automatically.

## Publishing to GitHub Pages

1. Create a GitHub repository named **`Ms-Gelfands-Newsletters`** and push this folder
   to its `main` branch.
2. In the repo, go to **Settings → Pages** and set **Source** to
   **GitHub Actions**.
3. Every push to `main` now rebuilds and republishes the site automatically
   (see [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

Your site will be at `https://<your-username>.github.io/Ms-Gelfands-Newsletters/`.

If you name the repository something other than `Ms-Gelfands-Newsletters`, update
`NEXT_PUBLIC_BASE_PATH` in the workflow file to match the new name exactly, and
set `klass.url` in `content/site.ts` to the published address.

## Project layout

```
app/
  page.tsx                      Home — this week's newsletter + archive
  newsletters/[slug]/page.tsx   One page per past newsletter
  teachers/page.tsx             Our Teachers
  tech-at-home/page.tsx         Tech at Home
  classroom-economy/page.tsx    Classroom Economy
  globals.css                   Colors, fonts, print styles
components/                     Shared pieces (header, footer, newsletter body)
content/
  newsletters.ts                ← edit weekly
  site.ts                       ← edit for everything else
```

## A note on privacy

Anything published here is public on the internet. Student names, photos, and
work should only appear with family permission, and never alongside anything
that identifies a child's schedule or location.
