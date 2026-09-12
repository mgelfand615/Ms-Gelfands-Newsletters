import Link from "next/link";
import { NewsletterBody } from "@/components/newsletter-body";
import { NewsletterCard } from "@/components/newsletter-card";
import { latestNewsletter, pastNewsletters } from "@/content/newsletters";
import { klass } from "@/content/site";

export default function HomePage() {
  const latest = latestNewsletter();
  const past = pastNewsletters();

  return (
    <>
      {/* ── Masthead ─────────────────────────────────────────────────────── */}
      <section className="border-b border-line bg-surface-2">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {klass.school} · {klass.year}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            {klass.name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {klass.welcome}
          </p>
        </div>
      </section>

      {/* ── This week's newsletter ───────────────────────────────────────── */}
      <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-ink">
            This week
          </span>
          <span className="text-sm font-medium text-muted">
            Week {latest.week} · {latest.dateRange}
          </span>
        </div>

        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          {latest.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {latest.intro}
        </p>

        <div className="rule my-10" />

        <NewsletterBody newsletter={latest} />

        <p className="no-print mt-10 text-sm text-muted">
          <Link
            href={`/newsletters/${latest.slug}`}
            className="text-accent underline-offset-4 hover:underline"
          >
            Open this newsletter on its own page
          </Link>{" "}
          to print it or share the link.
        </p>
      </article>

      {/* ── Archive ──────────────────────────────────────────────────────── */}
      {past.length > 0 && (
        <section
          id="archive"
          className="border-t border-line bg-surface-2 py-14 sm:py-16"
        >
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
              Past newsletters
            </h2>
            <p className="mt-2 text-muted">
              Every week of the {klass.year} school year, newest first.
            </p>
            <ul className="mt-6 space-y-3">
              {past.map((n) => (
                <NewsletterCard key={n.slug} newsletter={n} />
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
