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

/**
 * An empty slot — renders as a placeholder box until you fill it in.
 *
 * Frozen because a single object is shared by every blank field on the site;
 * without this, one accidental write would edit all of them at once.
 */
export const blank: Text = Object.freeze({ en: "", es: "" });

/** True when nothing has been written yet. */
export function isBlank(text?: Text): boolean {
  return !text || text.en.trim() === "";
}

/** The Spanish to display, falling back to English when untranslated. */
export function spanish(text: Text): string {
  return text.es?.trim() ? text.es : text.en;
}

/** A link families can click. `label` is bilingual; `href` is just a URL. */
export type LinkItem = {
  /** Permanent internal name — never shown. */
  id: string;
  label: Text;
  /** Paste the web address here, e.g. "https://launchpad.classlink.com/cms" */
  href: string;
  /**
   * The service's own logo, saved in /public/logos. Leave it out and the
   * link shows its first letter instead, which reads just as well.
   */
  logo?: string;
};

/**
 * A titled box holding a paragraph.
 *
 * `id` is a stable key that never changes even when you reword the title —
 * so React keeps track of the box correctly, and layout never depends on
 * what the heading happens to say.
 */
export type Block = {
  id: string;
  title: Text;
  body: Text;
};
