import type { Newsletter, Subject } from "@/content/newsletters";
import { isBlank, spanish, type Text } from "@/content/types";
import { Placeholder, T } from "@/components/t";
import { Rich } from "@/components/rich-text";
import { SectionCard, SectionHeading } from "@/components/section";
import { subjectSurface, type SubjectColor } from "@/components/tone";
import { asset } from "@/lib/asset";

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
 * One week's newsletter: news and dates, birthdays, What We're Learning.
 *
 * Stops there on purpose. General Reminders and Quick Links are true all
 * year, so they live on the home page beside the current newsletter rather
 * than being repeated inside every archived week.
 *
 * Shared by the home page and the archive, so a week only ever looks one way.
 */
export function NewsletterBody({ newsletter }: { newsletter: Newsletter }) {
  return (
    <div className="space-y-12">
      <div className="grid gap-5 md:grid-cols-2">
        <SectionCard title={{ en: "Updates", es: "Novedades" }}>
          <Bullets items={newsletter.updates} />
        </SectionCard>

        <SectionCard
          tone="info"
          title={{ en: "Upcoming Dates", es: "Próximas Fechas" }}
        >
          <Dates newsletter={newsletter} />
        </SectionCard>
      </div>

      <Birthdays newsletter={newsletter} />

      <section>
        <SectionHeading
          title={{ en: "What We're Learning", es: "Lo Que Estamos Aprendiendo" }}
        />
        <Learning subjects={newsletter.learning} />
      </section>

    </div>
  );
}

/** Plain bulleted points, with any pasted web address turned into a link. */
function Bullets({ items }: { items: Text[] }) {
  const written = items.filter((item) => !isBlank(item));
  if (written.length === 0) return <Placeholder />;

  return (
    <ul className="space-y-3">
      {written.map((item) => (
        <li key={item.en} className="flex gap-2.5 leading-relaxed text-ink">
          <span
            aria-hidden
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted/50"
          />
          <span>
            <Rich value={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

/** The day in bold, with its events bulleted underneath. */
function Dates({ newsletter }: { newsletter: Newsletter }) {
  const dates = newsletter.upcomingDates.filter((d) => !isBlank(d.when));
  if (dates.length === 0) return <Placeholder />;

  return (
    <ul className="space-y-4">
      {dates.map((date) => {
        const events = date.events.filter((event) => !isBlank(event));

        return (
          <li key={date.when.en}>
            <p className="font-semibold text-ink">
              <T value={date.when} />
            </p>
            <ul className="mt-1.5 space-y-1.5">
              {events.length === 0 ? (
                // A quiet day still gets a line, so the week reads straight
                // through instead of skipping days.
                <Event>
                  <T en="None" es="Ninguno" />
                </Event>
              ) : (
                events.map((event) => (
                  <Event key={event.en}>
                    <Rich value={event} />
                  </Event>
                ))
              )}
            </ul>
          </li>
        );
      })}
    </ul>
  );
}

function Event({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2.5 leading-relaxed text-ink">
      <span
        aria-hidden
        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-info/60"
      />
      <span>{children}</span>
    </li>
  );
}

/**
 * The boxes cycle through the palette in order, so a week with several
 * birthdays looks like a party rather than a list. Reorder this to change
 * which child gets which colour.
 */
const BIRTHDAY_TINTS: SubjectColor[] = ["mint", "lilac", "ice", "clay"];

/** One box per birthday, with the name large enough to spot from across the page. */
function Birthdays({ newsletter }: { newsletter: Newsletter }) {
  return (
    <section>
      <SectionHeading
        emoji="🎈"
        title={{
          en: "HAPPY BIRTHDAY TO...",
          es: "¡FELIZ CUMPLEAÑOS A...",
        }}
      />
      {newsletter.birthdays.length === 0 ? (
        <Placeholder
          label={{
            en: "Add this week's birthdays here.",
            es: "Agregue los cumpleaños de esta semana aquí.",
          }}
        />
      ) : (
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {newsletter.birthdays.map((birthday, i) => (
          <li
            key={birthday.id}
            className={`rounded-card border px-5 py-6 text-center ${
              subjectSurface[BIRTHDAY_TINTS[i % BIRTHDAY_TINTS.length]]
            }`}
          >
            <p className="font-display text-3xl font-semibold leading-tight text-ink">
              {birthday.name}
            </p>
            {!isBlank(birthday.date) && (
              <p className="mt-1.5 text-sm font-medium text-muted">
                <T value={birthday.date} />
              </p>
            )}
          </li>
        ))}
      </ul>
      )}
    </section>
  );
}

/**
 * Lays the subjects out in the order they are listed. A subject marked
 * "full" gets a row to itself; consecutive "half" subjects pair up.
 *
 * A pair shares its row tracks (CSS subgrid), so the two cards' headings,
 * bodies and homework boxes line up with each other no matter how much text
 * is in either one. Simply bottom-aligning them is not enough: whichever box
 * holds more text grows upward and the two stop matching.
 */
function Learning({ subjects }: { subjects: Subject[] }) {
  const groups: { full: boolean; items: Subject[] }[] = [];
  for (const subject of subjects) {
    const last = groups[groups.length - 1];
    if (subject.span === "half" && last && !last.full) last.items.push(subject);
    else groups.push({ full: subject.span === "full", items: [subject] });
  }

  return (
    <div className="space-y-5">
      {groups.map((group) =>
        group.full ? (
          <SubjectCard key={group.items[0].id} subject={group.items[0]} />
        ) : (
          <div
            key={group.items[0].id}
            className="grid gap-x-5 gap-y-4 sm:grid-cols-2 sm:grid-rows-[auto_1fr_auto]"
          >
            {group.items.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} paired />
            ))}
          </div>
        ),
      )}
    </div>
  );
}

function SubjectCard({
  subject,
  paired = false,
}: {
  subject: Subject;
  paired?: boolean;
}) {
  const points = subject.body.filter((item) => !isBlank(item));

  return (
    <article
      className={`rounded-card border p-5 sm:p-6 ${subjectSurface[subject.color]} ${
        paired ? "sm:row-span-3 sm:grid sm:grid-rows-subgrid" : ""
      }`}
    >
      <h3 className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-ink">
        <span aria-hidden>{subject.emoji}</span>
        <span>
          <T value={subject.name} />
        </span>
      </h3>

      <div className={paired ? "" : "mt-2"}>
        {points.length === 0 ? (
          <Placeholder />
        ) : points.length === 1 ? (
          <p className="leading-relaxed text-ink">
            <Rich value={points[0]} />
          </p>
        ) : (
          <ul className="space-y-2.5">
            {points.map((point) => (
              <li
                key={point.en}
                className="flex gap-2.5 leading-relaxed text-ink"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted/50"
                />
                <span>
                  <Rich value={point} />
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {subject.showHomework ? (
        <div className={`rounded-xl bg-surface/70 p-4 ${paired ? "" : "mt-5"}`}>
          {/* The attachment sits on the label line rather than below the
              text. That keeps every homework box the same shape, which is
              what makes Reading's and Math's line up exactly. */}
          <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              <T en="Homework" es="Tarea" />
            </p>
            {subject.directionsLink && (
              <a
                href={asset(subject.directionsLink)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-accent underline-offset-4 hover:underline"
              >
                <T value={subject.directionsLabel} />
                <span aria-hidden> ↗</span>
              </a>
            )}
          </div>
          <div className="mt-2">
            {isBlank(subject.homework) ? (
              <p className="text-sm italic text-muted">
                <T
                  en="Add this week's homework here."
                  es="Agregue la tarea de esta semana aquí."
                />
              </p>
            ) : (
              <p className="leading-relaxed text-ink">
                <T value={subject.homework} />
              </p>
            )}
          </div>
        </div>
      ) : (
        // Keeps a paired card's row count the same, so a subject without
        // homework doesn't pull its partner's box out of line.
        paired && <div />
      )}
    </article>
  );
}
