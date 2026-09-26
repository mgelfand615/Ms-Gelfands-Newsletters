import type { ReactNode } from "react";
import { spanish, type Text } from "@/content/types";

/**
 * Content text, with the few conveniences writing a newsletter actually
 * needs — so putting a word in bold never means writing markup:
 *
 *   **bold**            →  bold
 *   *italic*            →  italic
 *   [words](https://…)  →  those words, linked
 *
 * Emphasised text is left exactly as written — nothing inside **…** or *…*
 * is turned into a link. That is what lets a username pattern like
 * **StudentID@student.cms.k12.nc.us** be shown without inviting a parent to
 * email it.
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

/**
 * Web addresses and email addresses, kept when splitting.
 *
 * Asterisks are excluded on both sides: without that, "**you@x.org**" is
 * matched whole, asterisks and all, and comes out as a broken link with the
 * asterisks showing.
 */
const LINKABLE =
  /(https?:\/\/[^\s<>"')*]+|[^\s<>"'(),;:*]+@[^\s<>"'(),;:*]+\.[a-z]{2,})/gi;

/**
 * [words](https://example.com) — a link that reads as words rather than as
 * a pasted address. Read before anything else, so the address inside the
 * brackets is never linkified a second time on its own.
 */
const LABELLED_LINK = /(\[[^\]\n]+\]\(https?:\/\/[^\s)]+\))/g;

/** **bold** or *italic*, kept when splitting. */
const EMPHASIS = /(\*\*[^*\n]+\*\*|\*[^*\n]+\*)/g;

const isUrl = (s: string) => /^https?:\/\//.test(s);
const isEmail = (s: string) => /^[^\s@*]+@[^\s@*]+\.[a-z]{2,}$/i.test(s);

function render(text: string): ReactNode {
  // A blank line starts a new paragraph; a single break is just a new line.
  const paragraphs = text.split(/\n{2,}/);

  // One paragraph stays inline, so a phrase used mid-sentence — a date's
  // detail after its colon, say — does not get pushed onto its own line.
  if (paragraphs.length === 1) return lines(paragraphs[0]);

  return paragraphs.map((paragraph, p) => (
    <span key={p} className={p > 0 ? "mt-3 block" : "block"}>
      {lines(paragraph)}
    </span>
  ));
}

function lines(paragraph: string): ReactNode {
  return paragraph.split("\n").map((line, l) => (
    <span key={l}>
      {l > 0 && <br />}
      {labelledLinks(line)}
    </span>
  ));
}

/** [words](https://…), for a link that should read as words. */
function labelledLinks(line: string): ReactNode[] {
  return line.split(LABELLED_LINK).map((piece, i) => {
    const match = /^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/.exec(piece);
    if (!match) return <span key={i}>{emphasise(piece)}</span>;

    return (
      <a
        key={i}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-accent underline underline-offset-2"
      >
        {match[1]}
      </a>
    );
  });
}

/** Links, for the stretches of a line that are not emphasised. */
function linkify(text: string): ReactNode[] {
  return text.split(LINKABLE).map((part, i) => {
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
    return <span key={i}>{part}</span>;
  });
}

/**
 * Emphasis is read first, so a **…** pair is never broken up by a link
 * sitting inside it.
 */
function emphasise(line: string): ReactNode[] {
  return line.split(EMPHASIS).map((piece, i) => {
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
    return <span key={i}>{linkify(piece)}</span>;
  });
}
