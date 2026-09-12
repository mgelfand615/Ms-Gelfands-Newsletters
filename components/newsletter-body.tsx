import type { Newsletter } from "@/content/newsletters";
import { isBlank } from "@/content/types";
import { Placeholder, T } from "@/components/t";
import { SectionCard, SectionHeading } from "@/components/section";
import { quickLinks } from "@/content/site";

/**
 * One newsletter, laid out the way the paper newsletter is: Updates,
 * Upcoming Dates and Birthdays across the top, then What We're Learning by
 * subject, then Quick Links.
 *
 * Shared by the main page and each past newsletter, so a week only ever
 * looks one way.
 */
export function NewsletterBody({ newsletter }: { newsletter: Newsletter }) {
  return (
    <div className="space-y-14">
      {/* ── Updates / Upcoming Dates / Birthdays ─────────────────────────── */}
      <div className="grid gap-5 md:grid-cols-3">
        <SectionCard
          tone="lilac"
          title={{ en: "Updates", es: "Novedades" }}
          body={newsletter.updates}
        />
        <SectionCard
          tone="ice"
          title={{ en: "Upcoming Dates", es: "Próximas Fechas" }}
          body={newsletter.upcomingDates}
        />
        <SectionCard
          tone="mint"
          title={{ en: "Birthdays", es: "Cumpleaños" }}
          body={newsletter.birthdays}
        />
      </div>

      {/* ── What We're Learning ──────────────────────────────────────────── */}
      <section>
        <SectionHeading
          title={{ en: "What We're Learning", es: "Lo Que Estamos Aprendiendo" }}
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {newsletter.learning.map((subject) => (
            <article
              key={subject.name.en}
              className="rounded-card border border-line bg-surface p-5 sm:p-6"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                <T value={subject.name} />
              </h3>

              <div className="mt-3">
                {isBlank(subject.body) ? (
                  <Placeholder />
                ) : (
                  <p className="leading-relaxed text-ink">
                    <T value={subject.body} />
                  </p>
                )}
              </div>

              {/* Homework */}
              <div className="mt-5 rounded-xl bg-surface-2 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  <span className="lang-en">Homework</span>
                  <span className="lang-es">Tarea</span>
                </p>
                <div className="mt-2">
                  {isBlank(subject.homework) ? (
                    <p className="text-sm italic text-muted">
                      <span className="lang-en">
                        Add this week&rsquo;s homework here.
                      </span>
                      <span className="lang-es">
                        Agregue la tarea de esta semana aquí.
                      </span>
                    </p>
                  ) : (
                    <p className="leading-relaxed text-ink">
                      <T value={subject.homework} />
                    </p>
                  )}
                </div>
              </div>

              {subject.directionsLink && (
                <a
                  href={subject.directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-4 hover:underline"
                >
                  <T value={subject.directionsLabel} />
                  <span aria-hidden>↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ── Quick Links ──────────────────────────────────────────────────── */}
      <section className="no-print">
        <SectionHeading title={{ en: "Quick Links", es: "Enlaces Rápidos" }} />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link) =>
            link.href ? (
              <li key={link.label.en}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-2 rounded-xl border border-line bg-surface px-4 py-3 font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  <T value={link.label} />
                  <span aria-hidden className="text-muted">
                    ↗
                  </span>
                </a>
              </li>
            ) : (
              <li
                key={link.label.en}
                className="flex items-center justify-between gap-2 rounded-xl border border-dashed border-line bg-surface-2 px-4 py-3 font-medium text-muted"
              >
                <T value={link.label} />
                <span className="text-xs italic">
                  <span className="lang-en">add link</span>
                  <span className="lang-es">agregar enlace</span>
                </span>
              </li>
            ),
          )}
        </ul>
      </section>
    </div>
  );
}
