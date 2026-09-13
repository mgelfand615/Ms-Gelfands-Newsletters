import type { Metadata } from "next";
import {
  breakingBank,
  breakingBankIntro,
  economyIntro,
  economySections,
  makingBank,
  makingBankIntro,
} from "@/content/classroom-economy";
import type { EconomyBlock } from "@/content/classroom-economy";
import type { Text } from "@/content/types";
import { PageHeader } from "@/components/page-header";
import { T } from "@/components/t";
import { Rich } from "@/components/rich-text";
import { SectionCard } from "@/components/section";
import type { Tone } from "@/components/tone";

export const metadata: Metadata = {
  title: "Classroom Economy",
  description: "How our classroom economy works.",
};

export default function ClassroomEconomyPage() {
  return (
    <>
      <PageHeader
        title={{ en: "Classroom Economy", es: "Economía del Salón" }}
        intro={economyIntro}
      />

      <div className="mx-auto max-w-5xl space-y-12 px-5 py-12 sm:px-8 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-2">
          <BankColumn
            arrow="↑"
            tone="good"
            headingClass="text-good"
            heading={{ en: "Making Bank", es: "Ganando Dinero" }}
            intro={makingBankIntro}
            blocks={makingBank}
          />
          <BankColumn
            arrow="↓"
            tone="caution"
            headingClass="text-caution"
            heading={{ en: "Breaking Bank", es: "Perdiendo Dinero" }}
            intro={breakingBankIntro}
            blocks={breakingBank}
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {/* Bills, scores and perks are ordinary reference, not dates — so
              they stay neutral rather than borrowing a colour that means
              something else elsewhere. */}
          {economySections.map((block) => (
            <SectionCard
              key={block.id}
              tone="plain"
              title={block.title}
              body={block.body}
            >
              <BlockLists block={block} bullet="bg-muted/50" />
            </SectionCard>
          ))}
        </div>
      </div>
    </>
  );
}

function BankColumn({
  arrow,
  heading,
  headingClass,
  tone,
  blocks,
  intro,
}: {
  arrow: string;
  heading: Text;
  headingClass: string;
  tone: Tone;
  blocks: EconomyBlock[];
  intro?: Text;
}) {
  const bullet = tone === "good" ? "bg-good" : "bg-caution";

  return (
    <section>
      <h2
        className={`mb-5 flex items-center gap-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl ${headingClass}`}
      >
        <span aria-hidden>{arrow}</span>
        <span>
          <T value={heading} />
        </span>
      </h2>
      {intro && (
        <p className="mb-5 leading-relaxed text-muted">
          <Rich value={intro} />
        </p>
      )}
      <div className="space-y-4">
        {blocks.map((block) => (
          <SectionCard
            key={block.id}
            tone={tone}
            title={block.title}
            body={block.body}
          >
            <BlockLists block={block} bullet={bullet} />
          </SectionCard>
        ))}
      </div>
    </section>
  );
}

/**
 * The lists under a card's paragraph. Shared by the two bank columns and the
 * boxes along the bottom — when it lived only inside the columns, Monthly
 * Bills and The Perks silently dropped theirs.
 *
 * A labelled list gets its own inset box; an unlabelled one is just the
 * detail of the paragraph above it.
 */
function BlockLists({
  block,
  bullet,
}: {
  block: EconomyBlock;
  bullet: string;
}) {
  if (!block.lists || block.lists.length === 0) return null;

  return (
    <>
      {block.lists.map((list) => (
        <div
          key={list.id}
          className={list.label ? "mt-4 rounded-xl bg-surface/70 p-4" : "mt-3"}
        >
          {list.label && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
              <T value={list.label} />
            </p>
          )}
          <ul className="space-y-2">
            {list.items.map((item) => (
              <li
                key={item.en}
                className="flex gap-2.5 text-sm leading-relaxed text-ink"
              >
                <span
                  aria-hidden
                  className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${bullet}`}
                />
                <span>
                  <Rich value={item} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
