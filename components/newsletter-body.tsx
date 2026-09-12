import type { Newsletter, Subject } from "@/content/newsletters";
import { isBlank, spanish, type Text } from "@/content/types";
import { Prose, T } from "@/components/t";
import { SectionCard, SectionHeading } from "@/components/section";
import { QuickLinks } from "@/components/quick-links";

/**
 * The page title: "September 11 Newsletter", with a rule under it.
 *
 * Word order differs between the two languages, so each is composed
 * separately rather than gluing the date onto a shared label.
 */
export function NewsletterTitle({ dateRange }: { dateRange: Text }) {
  const dated = !isBlank(dateRange);

  return (
    <h1 className="border-b border-line pb-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
      <T
        en={dated ? `${dateRange.en} Newsletter` : "Newsletter"}
        es={dated ? `Boletín del ${spanish(dateRange)}` : "Boletín"}
      />
    </h1>
  );
}

/**
 * One newsletter: Updates, Upcoming Dates and Birthdays across the top, then
 * What We're Learning, then Quick Links.
 *
 * Shared by the main page and each past newsletter, so a week only ever
 * looks one way.
 */
export function NewsletterBody({ newsletter }: { newsletter: Newsletter }) {
  return (
    <div className="space-y-14">
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

      {/* A two-column grid. Subjects marked "full" span both columns, so the
          order in content/newsletters.ts is the order on the page. */}
      <section>
        <SectionHeading
          title={{ en: "What We're Learning", es: "Lo Que Estamos Aprendiendo" }}
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {newsletter.learning.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      </section>

      <QuickLinks />
    </div>
  );
}

function SubjectCard({ subject }: { subject: Subject }) {
  const full = subject.span === "full";

  return (
    <article
      className={`rounded-card border border-line bg-surface p-5 sm:p-6 ${
        full ? "sm:col-span-2" : "flex flex-col sm:min-h-80"
      }`}
    >
      <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
        <T value={subject.name} />
      </h3>

      <div className={full ? "mt-2" : "mt-3 flex-1"}>
        <Prose value={subject.body} />
      </div>

      {subject.showHomework && (
        <div className="mt-5 rounded-xl bg-surface-2 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            <T en="Homework" es="Tarea" />
          </p>
          <div className="mt-2">
            <Prose
              value={subject.homework}
              placeholder={{
                en: "Add this week's homework here.",
                es: "Agregue la tarea de esta semana aquí.",
              }}
              placeholderClassName="text-sm italic text-muted"
            />
          </div>
        </div>
      )}

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
  );
}
