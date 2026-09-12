import type { Metadata } from "next";
import { breakingBank, economyIntro, economySections, makingBank } from "@/content/classroom-economy";
import type { EconomyBlock } from "@/content/classroom-economy";
import type { Text } from "@/content/types";
import { PageHeader } from "@/components/page-header";
import { T } from "@/components/t";
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
            blocks={makingBank}
          />
          <BankColumn
            arrow="↓"
            tone="caution"
            headingClass="text-caution"
            heading={{ en: "Breaking Bank", es: "Perdiendo Dinero" }}
            blocks={breakingBank}
          />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {/* Bills, scores and perks are ordinary reference, not dates — so
              they stay neutral rather than borrowing a colour that means
              something else elsewhere. */}
          {economySections.map((block) => (
            <SectionCard
              key={block.id}
              tone="plain"
              title={block.title}
              body={block.body}
            />
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
}: {
  arrow: string;
  heading: Text;
  headingClass: string;
  tone: Tone;
  blocks: EconomyBlock[];
}) {
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
      <div className="space-y-4">
        {blocks.map((block) => (
          <SectionCard
            key={block.id}
            tone={tone}
            title={block.title}
            body={block.body}
          >
            {block.items && block.items.length > 0 && (
              <div className="mt-4 rounded-xl bg-surface/70 p-4">
                {block.itemsLabel && (
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                    <T value={block.itemsLabel} />
                  </p>
                )}
                <ul className="mt-2 space-y-1.5">
                  {block.items.map((item) => (
                    <li key={item.en} className="flex gap-2.5 text-sm text-ink">
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-caution"
                      />
                      <T value={item} />
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </SectionCard>
        ))}
      </div>
    </section>
  );
}
