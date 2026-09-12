/**
 * ─────────────────────────────────────────────────────────────────────────
 *  BILINGUAL TEXT
 *
 *  Every piece of writing on this site is a `Text` — an English version and
 *  a Spanish version:
 *
 *      { en: "Picture day is Monday.", es: "El día de fotos es el lunes." }
 *
 *  The Spanish toggle in the header switches between them. If you leave
 *  `es` blank, the English shows in both — so you can write in English now
 *  and add Spanish later without anything breaking.
 *
 *  If `en` is blank, the site shows a dashed "add your content here" box in
 *  that spot instead. That's how the placeholders work: fill in the text and
 *  the box disappears on its own.
 * ─────────────────────────────────────────────────────────────────────────
 */

export type Text = { en: string; es?: string };

/** An empty slot — renders as a placeholder box until you fill it in. */
export const blank: Text = { en: "", es: "" };

/** True when nothing has been written yet. */
export function isBlank(text?: Text): boolean {
  return !text || text.en.trim() === "";
}

/** A link families can click. `label` is bilingual; `href` is just a URL. */
export type LinkItem = {
  label: Text;
  /** Paste the web address here, e.g. "https://launchpad.classlink.com/cms" */
  href: string;
};

/** A titled box that holds a paragraph of writing. */
export type Block = {
  title: Text;
  body: Text;
};

/** A list of short items under one heading. */
export type ListBlock = {
  title: Text;
  items: Text[];
};
