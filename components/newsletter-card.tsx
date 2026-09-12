import Link from "next/link";
import type { Newsletter } from "@/content/newsletters";

/** One row in the archive list. */
export function NewsletterCard({ newsletter }: { newsletter: Newsletter }) {
  return (
    <li>
      <Link
        href={`/newsletters/${newsletter.slug}`}
        className="group flex flex-col gap-2 rounded-card border border-line bg-surface p-5 transition-colors hover:border-accent sm:flex-row sm:items-baseline sm:gap-6"
      >
        <span className="shrink-0 sm:w-40">
          <span className="text-sm font-semibold text-accent">
            Week {newsletter.week}
          </span>
          <span className="block text-xs text-muted">
            {newsletter.dateRange}
          </span>
        </span>
        <span className="flex-1">
          <span className="font-display text-lg font-semibold leading-snug text-ink group-hover:text-accent">
            {newsletter.title}
          </span>
          <span className="mt-1 block leading-relaxed text-muted">
            {newsletter.intro}
          </span>
        </span>
      </Link>
    </li>
  );
}
