import { isBlank, spanish, type Text } from "@/content/types";

/**
 * Renders a bilingual string. Both languages go into the page and CSS shows
 * whichever one the toggle has selected (see globals.css).
 *
 * Two ways to call it:
 *
 *     <T value={newsletter.updates} />        // text from content/
 *     <T en="Homework" es="Tarea" />          // a label written inline
 *
 * The second form exists so nothing in the app has to hand-write the
 * `lang-en` / `lang-es` span pair, which is easy to get subtly wrong.
 *
 * When no Spanish has been written yet, the English is shown in both — so a
 * half-translated site still reads correctly.
 */
type TProps = { value: Text } | { en: string; es?: string };

export function T(props: TProps) {
  const value: Text = "value" in props ? props.value : props;

  return (
    <>
      <span className="lang-en" lang="en">
        {value.en}
      </span>
      {/* lang="es" tells screen readers to switch pronunciation — without it
          a Spanish sentence is read aloud with English phonetics. */}
      <span className="lang-es" lang="es">
        {spanish(value)}
      </span>
    </>
  );
}

const addYourContent: Text = {
  en: "Add your content here.",
  es: "Agregue su contenido aquí.",
};

/**
 * A dashed box standing in for writing that hasn't been added yet. Fill in
 * the matching field in content/ and it disappears on its own.
 */
export function Placeholder({
  label = addYourContent,
  className = "rounded-xl border border-dashed border-line bg-surface-2 px-4 py-5 text-sm italic text-muted",
}: {
  label?: Text;
  className?: string;
}) {
  return (
    <p className={className}>
      <T value={label} />
    </p>
  );
}

/**
 * The site's most repeated pattern: show the writing, or a placeholder if
 * that field is still empty.
 */
export function Prose({
  value,
  placeholder,
  placeholderClassName,
  className = "leading-relaxed text-ink",
}: {
  value?: Text;
  /** Override the placeholder wording for this spot. */
  placeholder?: Text;
  /** Override the placeholder's styling (e.g. a plain line, not a box). */
  placeholderClassName?: string;
  className?: string;
}) {
  if (isBlank(value)) {
    return (
      <Placeholder label={placeholder} className={placeholderClassName} />
    );
  }

  return (
    <p className={className}>
      <T value={value!} />
    </p>
  );
}

/**
 * A field that may hold several points — upcoming dates, or two things
 * happening in one subject this week.
 *
 * One point renders as a sentence; several render as bullets. A lone bullet
 * looks like a mistake, so the shape follows the content rather than being
 * fixed in advance.
 */
export function Points({
  items,
  placeholder,
  placeholderClassName,
}: {
  items?: Text[];
  placeholder?: Text;
  placeholderClassName?: string;
}) {
  const written = (items ?? []).filter((item) => !isBlank(item));

  if (written.length === 0) {
    return (
      <Placeholder label={placeholder} className={placeholderClassName} />
    );
  }

  if (written.length === 1) {
    return <Prose value={written[0]} />;
  }

  return (
    <ul className="space-y-2">
      {written.map((item) => (
        <li key={item.en} className="flex gap-2.5 leading-relaxed text-ink">
          <span
            aria-hidden
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted/50"
          />
          <span>
            <T value={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}
