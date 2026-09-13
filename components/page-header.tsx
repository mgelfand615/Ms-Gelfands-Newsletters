import { isBlank, type Text } from "@/content/types";
import { Prose, T } from "@/components/t";
import { Rich } from "@/components/rich-text";

/**
 * The masthead on every page except the newsletter, which has its own dated
 * title in the same shape.
 *
 * No coloured wash behind it. With the header and footer now sitting on
 * their own band, a third tinted strip directly under the nav read as
 * clutter — and colour is reserved for saying something, which a decorative
 * gradient does not.
 */
export function PageHeader({
  title,
  intro,
  width = "max-w-5xl",
}: {
  title: Text;
  /** Optional lead paragraph. Renders a placeholder while it's empty. */
  intro?: Text;
  width?: string;
}) {
  return (
    <header className={`mx-auto ${width} px-5 pt-10 sm:px-8 sm:pt-12`}>
      <h1 className="border-b border-line pb-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        <T value={title} />
      </h1>
      {intro !== undefined && (
        <div className="mt-5">
          {isBlank(intro) ? (
            <Prose value={intro} />
          ) : (
            <div className="text-lg leading-relaxed text-muted">
              <Rich value={intro!} />
            </div>
          )}
        </div>
      )}
    </header>
  );
}
