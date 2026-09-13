import { spanish, type Text } from "@/content/types";

/**
 * Content text, with two conveniences the plain <T> doesn't have:
 *
 *   • a pasted web address becomes a link, so writing content never means
 *     writing markup;
 *   • a line break in the text becomes a line break on the page.
 *
 * Labels and headings keep using <T> — they never contain either.
 */
export function Rich({ value }: { value: Text }) {
  return (
    <>
      <span className="lang-en" lang="en">
        {render(value.en)}
      </span>
      <span className="lang-es" lang="es">
        {render(spanish(value))}
      </span>
    </>
  );
}

/** Splits on web addresses and email addresses, keeping them. */
const LINKABLE = /(https?:\/\/[^\s<>"')]+|[^\s<>"'(),;:]+@[^\s<>"'(),;:]+\.[a-z]{2,})/gi;

function render(text: string) {
  return text.split("\n").map((line, lineIndex) => (
    <span key={lineIndex}>
      {lineIndex > 0 && <br />}
      {line.split(LINKABLE).map((part, i) =>
        /^https?:\/\//.test(part) || /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(part) ? (
          <a
            key={i}
            href={/^https?:\/\//.test(part) ? part : `mailto:${part}`}
            {...(/^https?:\/\//.test(part)
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="break-all font-medium text-accent underline underline-offset-2"
          >
            {part}
          </a>
        ) : (
          part
        ),
      )}
    </span>
  ));
}
