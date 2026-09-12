import type { Text } from "@/content/types";
import { Prose, T } from "@/components/t";
import { toneHeading, toneSurface, type Tone } from "@/components/tone";

/** A titled box. Shows a placeholder until the body is written. */
export function SectionCard({
  title,
  body,
  tone = "plain",
  children,
}: {
  title: Text;
  body?: Text;
  tone?: Tone;
  children?: React.ReactNode;
}) {
  return (
    <section className={`rounded-card border p-5 sm:p-6 ${toneSurface[tone]}`}>
      <h3
        className={`font-display text-xl font-semibold tracking-tight ${toneHeading[tone]}`}
      >
        <T value={title} />
      </h3>
      <div className="mt-3">
        <Prose value={body} />
        {children}
      </div>
    </section>
  );
}

/** A section heading with a hairline under it. */
export function SectionHeading({ title }: { title: Text }) {
  return (
    <h2 className="mb-5 border-b border-line pb-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
      <T value={title} />
    </h2>
  );
}

/** A small uppercase label above a value. */
export function FieldLabel({ label }: { label: Text }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
      <T value={label} />
    </p>
  );
}

/** A tinted box holding one labelled field — used on About Your Teachers. */
export function Field({
  label,
  value,
  tone,
}: {
  label: Text;
  value: Text;
  tone: Tone;
}) {
  return (
    <div className={`rounded-card border p-5 ${toneSurface[tone]}`}>
      <FieldLabel label={label} />
      <div className="mt-2">
        <Prose
          value={value}
          placeholderClassName="text-sm italic text-muted"
        />
      </div>
    </div>
  );
}
