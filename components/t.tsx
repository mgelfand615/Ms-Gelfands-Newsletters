import { isBlank, type Text } from "@/content/types";

/**
 * Renders a bilingual string. Both languages go into the page and CSS shows
 * whichever one the Spanish toggle has selected (see globals.css).
 *
 * When no Spanish has been written yet, the English is shown in both — so a
 * half-translated site still reads correctly.
 */
export function T({ value }: { value: Text }) {
  const spanish = value.es?.trim() ? value.es : value.en;

  return (
    <>
      <span className="lang-en">{value.en}</span>
      <span className="lang-es">{spanish}</span>
    </>
  );
}

const defaultLabel: Text = {
  en: "Add your content here.",
  es: "Agregue su contenido aquí.",
};

/**
 * A dashed box standing in for writing that hasn't been added yet. Fill in
 * the matching field in content/ and it disappears on its own.
 */
export function Placeholder({ label }: { label?: Text }) {
  return (
    <p className="rounded-xl border border-dashed border-line bg-surface-2 px-4 py-5 text-sm italic text-muted">
      <T value={label ?? defaultLabel} />
    </p>
  );
}

/** Shows the text, or a placeholder box if it's still empty. */
export function TextOrPlaceholder({
  value,
  label,
  className,
}: {
  value?: Text;
  label?: Text;
  className?: string;
}) {
  if (isBlank(value)) return <Placeholder label={label} />;
  return (
    <p className={className ?? "leading-relaxed text-ink"}>
      <T value={value!} />
    </p>
  );
}
