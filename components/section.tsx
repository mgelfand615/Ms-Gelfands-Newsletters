import { isBlank, type Text } from "@/content/types";
import { Placeholder, T } from "@/components/t";

/** The pastel each card is tinted with. */
export type Tone = "mint" | "lilac" | "ice" | "plain";

const toneClass: Record<Tone, string> = {
  mint: "bg-highlight-soft/60 border-highlight/25",
  lilac: "bg-accent-soft/50 border-accent/25",
  ice: "bg-sky-soft/50 border-sky-ink/20",
  plain: "bg-surface border-line",
};

const toneHeading: Record<Tone, string> = {
  mint: "text-highlight",
  lilac: "text-accent",
  ice: "text-sky-ink",
  plain: "text-ink",
};

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
    <section
      className={`rounded-card border p-5 sm:p-6 ${toneClass[tone]}`}
    >
      <h3
        className={`font-display text-xl font-semibold tracking-tight ${toneHeading[tone]}`}
      >
        <T value={title} />
      </h3>
      <div className="mt-3">
        {isBlank(body) ? (
          <Placeholder />
        ) : (
          <p className="leading-relaxed text-ink">
            <T value={body!} />
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

/** A page-level heading with a hairline under it. */
export function SectionHeading({ title }: { title: Text }) {
  return (
    <h2 className="mb-5 border-b border-line pb-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
      <T value={title} />
    </h2>
  );
}
