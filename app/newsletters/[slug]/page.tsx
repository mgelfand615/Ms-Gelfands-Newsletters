import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NewsletterBody } from "@/components/newsletter-body";
import {
  allNewsletters,
  newsletterBySlug,
  newsletters,
} from "@/content/newsletters";

/** One static page per newsletter at build time. */
export async function generateStaticParams() {
  return newsletters.map((n) => ({ slug: n.slug }));
}

/** Static export only serves the pages generated above. */
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const newsletter = newsletterBySlug(slug);
  if (!newsletter) return {};

  return {
    title: `Week ${newsletter.week} — ${newsletter.title}`,
    description: newsletter.intro,
  };
}

export default async function NewsletterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const newsletter = newsletterBySlug(slug);
  if (!newsletter) notFound();

  // Neighbours in date order, so families can page through the year.
  const ordered = allNewsletters();
  const index = ordered.findIndex((n) => n.slug === newsletter.slug);
  const newer = index > 0 ? ordered[index - 1] : undefined;
  const older = index < ordered.length - 1 ? ordered[index + 1] : undefined;

  return (
    <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-16">
      <Link
        href="/"
        className="no-print text-sm text-accent underline-offset-4 hover:underline"
      >
        ← All newsletters
      </Link>

      <header className="mt-6">
        <p className="text-sm font-semibold text-accent">
          Week {newsletter.week} · {newsletter.dateRange}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          {newsletter.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          {newsletter.intro}
        </p>
      </header>

      <div className="rule my-10" />

      <NewsletterBody newsletter={newsletter} />

      {/* ── Previous / next week ───────────────────────────────────────── */}
      {(newer || older) && (
        <nav
          aria-label="Other weeks"
          className="no-print mt-14 grid gap-3 border-t border-line pt-8 sm:grid-cols-2"
        >
          {older ? (
            <NeighbourLink
              direction="Previous week"
              slug={older.slug}
              week={older.week}
              title={older.title}
            />
          ) : (
            <span />
          )}
          {newer && (
            <NeighbourLink
              direction="Next week"
              slug={newer.slug}
              week={newer.week}
              title={newer.title}
              align="right"
            />
          )}
        </nav>
      )}
    </article>
  );
}

function NeighbourLink({
  direction,
  slug,
  week,
  title,
  align = "left",
}: {
  direction: string;
  slug: string;
  week: number;
  title: string;
  align?: "left" | "right";
}) {
  return (
    <Link
      href={`/newsletters/${slug}`}
      className={`group rounded-card border border-line bg-surface p-4 transition-colors hover:border-accent ${
        align === "right" ? "sm:text-right" : ""
      }`}
    >
      <span className="text-xs font-semibold uppercase tracking-wide text-muted">
        {direction}
      </span>
      <span className="mt-1 block font-display font-semibold leading-snug text-ink group-hover:text-accent">
        Week {week}: {title}
      </span>
    </Link>
  );
}
