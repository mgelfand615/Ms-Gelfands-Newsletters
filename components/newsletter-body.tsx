import type { Newsletter } from "@/content/newsletters";

/**
 * Renders one newsletter's content. Shared by the featured newsletter on the
 * home page and the individual /newsletters/[slug] pages, so a week only ever
 * looks one way. Optional sections that are absent simply don't render.
 */
export function NewsletterBody({ newsletter }: { newsletter: Newsletter }) {
  const { learning, dates, reminders, askYourStudent, spotlight } = newsletter;

  return (
    <div className="space-y-12">
      {learning && learning.length > 0 && (
        <Section title="What we learned">
          <dl className="divide-y divide-line rounded-card border border-line bg-surface">
            {learning.map((row) => (
              <div
                key={row.subject}
                className="grid gap-1 p-5 sm:grid-cols-[9rem_1fr] sm:gap-5"
              >
                <dt className="text-sm font-semibold text-accent">
                  {row.subject}
                </dt>
                <dd className="leading-relaxed text-ink">{row.text}</dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      {dates && dates.length > 0 && (
        <Section title="Mark your calendar">
          <ul className="space-y-3">
            {dates.map((d) => (
              <li
                key={`${d.when}-${d.what}`}
                className="flex flex-col gap-1 rounded-xl border border-line bg-surface p-4 sm:flex-row sm:items-baseline sm:gap-5"
              >
                <span className="shrink-0 text-sm font-semibold text-highlight sm:w-32">
                  {d.when}
                </span>
                <span className="text-ink">{d.what}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {reminders && reminders.length > 0 && (
        <Section title="Quick reminders">
          <ul className="space-y-3">
            {reminders.map((r) => (
              <li key={r} className="flex gap-3 leading-relaxed text-ink">
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                {r}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {askYourStudent && askYourStudent.length > 0 && (
        <Section title="Ask your student">
          <p className="mb-4 text-muted">
            Better than &ldquo;how was school?&rdquo; — try one of these at
            dinner.
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {askYourStudent.map((q) => (
              <li
                key={q}
                className="rounded-xl border border-line bg-accent-soft p-4 leading-relaxed text-ink"
              >
                &ldquo;{q}&rdquo;
              </li>
            ))}
          </ul>
        </Section>
      )}

      {spotlight && (
        <section
          aria-labelledby="spotlight-heading"
          className="rounded-card border-l-4 border-l-highlight bg-highlight-soft p-6 sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-highlight">
            Class spotlight
          </p>
          <h2
            id="spotlight-heading"
            className="mt-2 font-display text-2xl font-semibold text-ink"
          >
            {spotlight.title}
          </h2>
          <p className="mt-3 leading-relaxed text-ink">{spotlight.body}</p>
        </section>
      )}
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-4 font-display text-2xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      {children}
    </section>
  );
}
