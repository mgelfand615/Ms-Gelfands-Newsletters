import type { Metadata } from "next";
import {
  breakingBank,
  breakingBankIntro,
  economyIntro,
  economySections,
  gelfStand,
  gelfStandIntro,
  makingBank,
  makingBankIntro,
  spendingIntro,
} from "@/content/classroom-economy";
import type { EconomyBlock, StoreTier } from "@/content/classroom-economy";
import type { Text } from "@/content/types";
import { PageHeader } from "@/components/page-header";
import { T } from "@/components/t";
import { Rich } from "@/components/rich-text";
import { SectionCard } from "@/components/section";
import { subjectSurface, type Tone } from "@/components/tone";

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
        <div className="grid items-stretch gap-8 lg:grid-cols-2">
          <BankColumn
            arrow="📈"
            tone="good"
            headingClass="text-good"
            heading={{ en: "Making Bank", es: "Ganando Dinero" }}
            intro={makingBankIntro}
            blocks={makingBank}
          />
          <BankColumn
            arrow="📉"
            tone="caution"
            headingClass="text-caution"
            heading={{ en: "Breaking Bank", es: "Perdiendo Dinero" }}
            intro={breakingBankIntro}
            blocks={breakingBank}
          />
        </div>

        <section>
          <h2 className="mb-1 font-display text-2xl font-semibold tracking-tight text-info sm:text-3xl">
            <span aria-hidden className="mr-2.5">🛒</span>
            <T en="Spending" es="Gastando" />
          </h2>
          <p className="mb-5 leading-relaxed text-muted">
            <Rich value={spendingIntro} />
          </p>
          {/* Bills and the store are ordinary reference rather than a signal,
              so they stay neutral instead of borrowing a colour that means
              something else elsewhere on the page. */}
          <div className="grid gap-5 md:grid-cols-2">
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

          <GelfStand />
        </section>
      </div>
    </>
  );
}

/**
 * The class store's price board, one column per tier.
 *
 * A tier is a column rather than a row so a family can scan a price band
 * top to bottom — "what can my child afford today?" is the question this
 * board exists to answer. On a phone the columns stack in price order.
 */
function GelfStand() {
  return (
    <div className="mt-10">
      <h3 className="flex items-center gap-2.5 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
        <span aria-hidden>🏪</span>
        <span>
          <T en="The Gelf-Stand" es="The Gelf-Stand" />
        </span>
      </h3>
      <p className="mt-2 leading-relaxed text-muted">
        <Rich value={gelfStandIntro} />
      </p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {gelfStand.map((tier) => (
          <Tier key={tier.id} tier={tier} />
        ))}
      </div>
    </div>
  );
}

function Tier({ tier }: { tier: StoreTier }) {
  return (
    <section className={`rounded-card border p-5 ${subjectSurface[tier.color]}`}>
      <h4 className="font-display text-lg font-semibold tracking-tight text-ink">
        <T value={tier.name} />
      </h4>
      <p className="text-sm font-medium text-muted">{tier.range}</p>

      <ul className="mt-4 space-y-2.5">
        {tier.items.map((item) => (
          <li
            key={item.id}
            className="flex items-baseline justify-between gap-3 border-b border-ink/10 pb-2.5 last:border-0 last:pb-0"
          >
            <span className="leading-snug text-ink">
              <T value={item.name} />
            </span>
            {/* Tabular figures so the column of prices lines up on the
                decimal rather than drifting with the digit widths. */}
            <span className="shrink-0 font-semibold tabular-nums text-ink">
              {item.price}
            </span>
          </li>
        ))}
      </ul>
    </section>
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
    <section className="flex h-full flex-col">
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
      <div className="flex flex-1 flex-col gap-4 [&>*]:grow">
        {blocks.map((block) => (
          <SectionCard
            key={block.id}
            tone={tone}
            emoji={block.emoji}
            title={block.title}
            body={block.body}
            textClass="text-[17px]"
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
          <ul
            className={
              list.columns === 2
                ? "space-y-2 sm:columns-2 sm:gap-x-6"
                : "space-y-2"
            }
          >
            {list.items.map((item) => (
              <li
                key={item.en}
                className="flex gap-2.5 break-inside-avoid text-[17px] leading-relaxed text-ink"
              >
                <span
                  aria-hidden
                  className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${bullet}`}
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
