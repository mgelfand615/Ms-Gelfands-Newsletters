import { isBlank, type Text } from "@/content/types";
import { Placeholder, Points, T } from "@/components/t";
import { Rich } from "@/components/rich-text";
import { toneHeading, toneSurface, type Tone } from "@/components/tone";

/** A titled box. Shows a placeholder until the body is written. */
export function SectionCard({
  title,
  emoji,
  body,
  items,
  tone = "plain",
  children,
}: {
  title: Text;
  /** Decorative only — hidden from screen readers. */
  emoji?: string;
  /** A paragraph. Use `items` instead when the field is a list. */
  body?: Text;
  /** Several points. One renders as a sentence, more render as bullets. */
  items?: Text[];
  tone?: Tone;
  children?: React.ReactNode;
}) {
  return (
    <section
      className={`flex flex-col justify-center rounded-card border p-5 sm:p-6 ${toneSurface[tone]}`}
    >
      <h3
        className={`flex items-center gap-2 font-display text-xl font-semibold tracking-tight ${toneHeading[tone]}`}
      >
        {emoji && <span aria-hidden>{emoji}</span>}
        <span>
          <T value={title} />
        </span>
      </h3>
      <div className="mt-3">
        {/* A card given children draws its own contents, so the placeholder
            would sit above real text rather than standing in for it. */}
        {items ? (
          <Points items={items} />
        ) : isBlank(body) ? (
          // A card drawing its own contents doesn't need a placeholder
          // standing in for a body it was never given.
          children ? null : (
            <Placeholder />
          )
        ) : (
          <p className="leading-relaxed text-ink">
            <Rich value={body!} />
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

/** A section heading with a hairline under it. */
export function SectionHeading({
  title,
  emoji,
}: {
  title: Text;
  /** Decorative only — hidden from screen readers, which would read
      "balloon" in the middle of the heading. */
  emoji?: string;
}) {
  return (
    <h2 className="mb-5 flex items-center gap-2.5 border-b border-line pb-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
      {emoji && <span aria-hidden>{emoji}</span>}
      <span>
        <T value={title} />
      </span>
    </h2>
  );
}


