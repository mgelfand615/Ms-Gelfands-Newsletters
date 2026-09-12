import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { contact, techHabits, techIntro, tools } from "@/content/site";

export const metadata: Metadata = {
  title: "Tech at Home",
  description:
    "The apps and devices our class uses, how to sign in at home, and habits that help.",
};

export default function TechAtHomePage() {
  return (
    <>
      <PageHeader
        eyebrow="For families"
        title="Tech at Home"
        intro={techIntro}
      />

      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
        {/* ── The tools ──────────────────────────────────────────────────── */}
        <section>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            What we use
          </h2>
          <div className="mt-6 space-y-4">
            {tools.map((tool) => (
              <article
                key={tool.name}
                className="rounded-card border border-line bg-surface p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {tool.name}
                  </h3>
                  {tool.href && (
                    <a
                      href={tool.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-accent underline-offset-4 hover:underline"
                    >
                      Open site ↗
                    </a>
                  )}
                </div>
                <p className="mt-1 text-muted">{tool.what}</p>

                <dl className="mt-4 space-y-3 border-t border-line pt-4">
                  <div className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4">
                    <dt className="text-sm font-semibold text-accent">
                      We use it for
                    </dt>
                    <dd className="leading-relaxed text-ink">{tool.use}</dd>
                  </div>
                  <div className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4">
                    <dt className="text-sm font-semibold text-accent">
                      Signing in
                    </dt>
                    <dd className="leading-relaxed text-ink">{tool.access}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </section>

        {/* ── Habits ─────────────────────────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            Four habits that help
          </h2>
          <p className="mt-2 text-muted">
            None of these require you to know anything about technology.
          </p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2">
            {techHabits.map((habit, i) => (
              <li
                key={habit.title}
                className="rounded-card border border-line bg-surface p-5"
              >
                <span
                  aria-hidden
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft text-sm font-bold text-accent"
                >
                  {i + 1}
                </span>
                <h3 className="mt-3 font-semibold text-ink">{habit.title}</h3>
                <p className="mt-1 leading-relaxed text-muted">{habit.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Trouble ────────────────────────────────────────────────────── */}
        <section className="mt-14 rounded-card border-l-4 border-l-highlight bg-highlight-soft p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-ink">
            Something not working?
          </h2>
          <p className="mt-3 leading-relaxed text-ink">
            Broken screen, lost charger, forgotten password, an app that won&rsquo;t
            load — email me and we&rsquo;ll fix it. Your child is never in trouble for
            a device problem, and I would much rather hear about it the day it
            happens.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
          >
            {contact.email}
          </a>
        </section>
      </div>
    </>
  );
}
