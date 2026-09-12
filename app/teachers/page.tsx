import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { contact, klass, teachers } from "@/content/site";

export const metadata: Metadata = {
  title: "Our Teachers",
  description: `Meet the teaching team for ${klass.name}.`,
};

export default function TeachersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Meet the team"
        title="Our Teachers"
        intro={[
          "You should know who spends the day with your child. Here's a little about each of us, and the fastest way to reach us.",
        ]}
      />

      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="space-y-12">
          {teachers.map((teacher) => (
            <section
              key={teacher.name}
              className="rounded-card border border-line bg-surface p-6 sm:p-8"
            >
              <div className="flex items-center gap-5">
                {teacher.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    className="h-20 w-20 shrink-0 rounded-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden
                    className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-accent-soft font-display text-2xl font-semibold text-accent"
                  >
                    {initials(teacher.name)}
                  </span>
                )}
                <div>
                  <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                    {teacher.name}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {teacher.role}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {teacher.bio.map((p) => (
                  <p key={p} className="leading-relaxed text-ink">
                    {p}
                  </p>
                ))}
              </div>

              <dl className="mt-6 grid gap-3 sm:grid-cols-3">
                {teacher.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-xl bg-surface-2 px-4 py-3"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-ink">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <a
                href={`mailto:${teacher.email}`}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
              >
                Email {teacher.name.split(" ")[0]}
              </a>
            </section>
          ))}
        </div>

        <section className="mt-12 rounded-card border-l-4 border-l-highlight bg-highlight-soft p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-ink">
            Reaching us
          </h2>
          <p className="mt-3 leading-relaxed text-ink">{contact.preferred}</p>
          <p className="mt-3 text-sm text-muted">
            Available {contact.hours}. If something is urgent during the school
            day, please call the front office rather than emailing.
          </p>
        </section>
      </div>
    </>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
