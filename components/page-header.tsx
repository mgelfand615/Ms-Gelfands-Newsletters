import type { Text } from "@/content/types";
import { Prose, T } from "@/components/t";
import { toneWash, type Tone } from "@/components/tone";

/**
 * The masthead shared by every page except the newsletter itself (which uses
 * its own compact dated title). Four pages had their own copy of this markup;
 * a spacing tweak meant editing all four.
 */
export function PageHeader({
  title,
  intro,
  tone,
  width = "max-w-5xl",
  children,
}: {
  title: Text;
  /** Optional lead paragraph. Renders a placeholder while it's empty. */
  intro?: Text;
  tone: Exclude<Tone, "plain">;
  width?: string;
  children?: React.ReactNode;
}) {
  return (
    <header
      className={`border-b border-line bg-gradient-to-b ${toneWash[tone]} to-transparent`}
    >
      <div className={`mx-auto ${width} px-5 py-12 sm:px-8 sm:py-16`}>
        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
          <T value={title} />
        </h1>
        {intro !== undefined && (
          <div className="mt-5 max-w-2xl">
            <Prose
              value={intro}
              className="text-lg leading-relaxed text-muted"
            />
          </div>
        )}
        {children}
      </div>
    </header>
  );
}
