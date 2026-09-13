import type { ReactNode } from "react";
import { spanish, type Text } from "@/content/types";

/**
 * Content text, with the few conveniences writing a newsletter actually
 * needs — so putting a word in bold never means writing markup:
 *
 *   **bold**            →  bold
 *   *italic*            →  italic
 *   a pasted web address or email  →  a link
 *   one line break      →  a new line
 *   a blank line        →  a new paragraph
 *
 * Labels and headings keep using <T>; they never contain any of this.
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

/** Web addresses and email addresses, kept when splitting. */
const LINKABLE =
  /(https?:\/\/[^\s<>"')]+|[^\s<>"'(),;:]+@[^\s<>"'(),;:]+\.[a-z]{2,})/gi;

/** **bold** or *italic*, kept when splitting. */
const EMPHASIS = /(\*\*[^*\n]+\*\*|\*[^*\n]+\*)/g;

const isUrl = (s: string) => /^https?:\/\//.test(s);
const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(s);

function render(text: string): ReactNode {
  // A blank line starts a new paragraph; a single break is just a new line.
  const paragraphs = text.split(/\n{2,}/);

  return paragraphs.map((paragraph, p) => (
    <span key={p} className={p > 0 ? "mt-3 block" : "block"}>
      {paragraph.split("\n").map((line, l) => (
        <span key={l}>
          {l > 0 && <br />}
          {inline(line)}
        </span>
      ))}
    </span>
  ));
}

function inline(line: string): ReactNode[] {
  return line.split(LINKABLE).map((part, i) => {
    if (isUrl(part) || isEmail(part)) {
      return (
        <a
          key={i}
          href={isUrl(part) ? part : `mailto:${part}`}
          {...(isUrl(part)
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="break-all font-medium text-accent underline underline-offset-2"
        >
          {part}
        </a>
      );
    }
    return <span key={i}>{emphasise(part)}</span>;
  });
}

function emphasise(part: string): ReactNode[] {
  return part.split(EMPHASIS).map((piece, i) => {
    if (/^\*\*[^*]+\*\*$/.test(piece)) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {piece.slice(2, -2)}
        </strong>
      );
    }
    if (/^\*[^*]+\*$/.test(piece)) {
      return <em key={i}>{piece.slice(1, -1)}</em>;
    }
    return piece;
  });
}
