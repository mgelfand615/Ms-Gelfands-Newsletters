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

/** Splits on web addresses, keeping them (the capture group). */
const URL = /(https?:\/\/[^\s<>"')]+)/g;

function render(text: string) {
  return text.split("\n").map((line, lineIndex) => (
    <span key={lineIndex}>
      {lineIndex > 0 && <br />}
      {line.split(URL).map((part, i) =>
        /^https?:\/\//.test(part) ? (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
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
