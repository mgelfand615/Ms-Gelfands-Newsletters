import type { Metadata } from "next";
import {
  breakingBank,
  economyIntro,
  economySections,
  majorViolations,
  makingBank,
} from "@/content/site";
import { isBlank } from "@/content/types";
import { Placeholder, T } from "@/components/t";
import { SectionCard } from "@/components/section";

export const metadata: Metadata = {
  title: "Classroom Economy",
  description: "How our classroom economy works.",
};

export default function ClassroomEconomyPage() {
  return (
    <>
      <header className="border-b border-line bg-gradient-to-b from-highlight-soft/60 to-transparent">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            <span className="lang-en">Classroom Economy</span>
            <span className="lang-es">Economía del Salón</span>
          </h1>
          <div className="mt-5 max-w-2xl">
            {isBlank(economyIntro) ? (
              <Placeholder
                label={{
                  en: "Add a short blurb about the goal of the economy.",
                  es: "Agregue una breve descripción del objetivo de la economía.",
                }}
              />
            ) : (
              <p className="text-lg leading-relaxed text-muted">
                <T value={economyIntro} />
              </p>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl space-y-12 px-5 py-12 sm:px-8 sm:py-14">
        {/* ── Making Bank / Breaking Bank ──────────────────────────────────── */}
        <div className="grid gap-8 lg:grid-cols-2">
          <section>
            <h2 className="mb-5 flex items-center gap-3 font-display text-2xl font-semibold tracking-tight text-highlight sm:text-3xl">
              <span aria-hidden>↑</span>
              <span>
                <span className="lang-en">Making Bank</span>
                <span className="lang-es">Ganando Dinero</span>
              </span>
            </h2>
            <div className="space-y-4">
              {makingBank.map((block) => (
                <SectionCard
                  key={block.title.en}
                  tone="mint"
                  title={block.title}
                  body={block.body}
                />
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-5 flex items-center gap-3 font-display text-2xl font-semibold tracking-tight text-accent sm:text-3xl">
              <span aria-hidden>↓</span>
              <span>
                <span className="lang-en">Breaking Bank</span>
                <span className="lang-es">Perdiendo Dinero</span>
              </span>
            </h2>
            <div className="space-y-4">
              {breakingBank.map((block) => (
                <SectionCard
                  key={block.title.en}
                  tone="lilac"
                  title={block.title}
                  body={block.body}
                >
                  {/* The three behaviours that draw an immediate ticket. */}
                  {block.title.en === "Major Violations" && (
                    <div className="mt-4 rounded-xl bg-surface/70 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                        <span className="lang-en">Immediate ticket</span>
                        <span className="lang-es">Boleta inmediata</span>
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {majorViolations.map((item) => (
                          <li
                            key={item.en}
                            className="flex gap-2.5 text-sm text-ink"
                          >
                            <span
                              aria-hidden
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
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
        </div>

        {/* ── Bills / Agenda Scores / Perks ────────────────────────────────── */}
        <div className="grid gap-5 md:grid-cols-3">
          {economySections.map((block) => (
            <SectionCard
              key={block.title.en}
              tone="ice"
              title={block.title}
              body={block.body}
            />
          ))}
        </div>
      </div>
    </>
  );
}
