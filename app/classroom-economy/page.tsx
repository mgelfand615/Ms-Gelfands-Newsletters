import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import {
  economyAtHome,
  economyIntro,
  economyRules,
  jobs,
  storeItems,
} from "@/content/site";

export const metadata: Metadata = {
  title: "Classroom Economy",
  description:
    "How our classroom economy works: jobs, paychecks, rent, and the class store.",
};

export default function ClassroomEconomyPage() {
  return (
    <>
      <PageHeader
        eyebrow="How our class runs"
        title="Classroom Economy"
        intro={economyIntro}
      />

      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
        {/* ── How it works ───────────────────────────────────────────────── */}
        <section>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            How it works
          </h2>
          <dl className="mt-6 divide-y divide-line rounded-card border border-line bg-surface">
            {economyRules.map((rule) => (
              <div
                key={rule.label}
                className="grid gap-1 p-5 sm:grid-cols-[9rem_1fr] sm:gap-5"
              >
                <dt className="text-sm font-semibold text-accent">
                  {rule.label}
                </dt>
                <dd className="leading-relaxed text-ink">{rule.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── Jobs ───────────────────────────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            Classroom jobs
          </h2>
          <p className="mt-2 text-muted">
            Students apply for a job and hold it for a month, then rotate.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {jobs.map((job) => (
              <li
                key={job.title}
                className="rounded-card border border-line bg-surface p-5"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {job.title}
                  </h3>
                  <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-semibold text-accent">
                    {job.pay}
                  </span>
                </div>
                <p className="mt-2 leading-relaxed text-muted">{job.duties}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Class store ────────────────────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
            The class store
          </h2>
          <p className="mt-2 text-muted">
            Open the last Friday of every month. Everything costs experiences,
            not things — nothing here needs to be bought.
          </p>
          <ul className="mt-6 divide-y divide-line overflow-hidden rounded-card border border-line bg-surface">
            {storeItems.map((item) => (
              <li
                key={item.item}
                className="flex items-baseline justify-between gap-4 px-5 py-4"
              >
                <span className="text-ink">{item.item}</span>
                <span className="shrink-0 font-display text-lg font-semibold text-highlight">
                  {item.cost}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── At home ────────────────────────────────────────────────────── */}
        <section className="mt-14 rounded-card border-l-4 border-l-highlight bg-highlight-soft p-6 sm:p-8">
          <h2 className="font-display text-xl font-semibold text-ink">
            How you can help at home
          </h2>
          <ul className="mt-4 space-y-3">
            {economyAtHome.map((tip) => (
              <li key={tip} className="flex gap-3 leading-relaxed text-ink">
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-highlight"
                />
                {tip}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
