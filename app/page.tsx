import Link from "next/link";
import { NewsletterBody } from "@/components/newsletter-body";
import { latestNewsletter, pastNewsletters } from "@/content/newsletters";
import { isBlank } from "@/content/types";
import { T } from "@/components/t";

/**
 * Families land straight on the most recent newsletter — no click needed.
 * Older weeks live on the Past Newsletters tab.
 */
export default function HomePage() {
  const latest = latestNewsletter();
  const hasPast = pastNewsletters().length > 0;

  return (
    <>
      <header className="border-b border-line bg-gradient-to-b from-accent-soft/50 to-transparent">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <span className="lang-en">This week</span>
            <span className="lang-es">Esta semana</span>
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            <span className="lang-en">Newsletter</span>
            <span className="lang-es">Boletín</span>
          </h1>
          <p className="mt-3 text-lg text-muted">
            <span className="lang-en">Week {latest.week}</span>
            <span className="lang-es">Semana {latest.week}</span>
            {!isBlank(latest.dateRange) && (
              <>
                {" · "}
                <T value={latest.dateRange} />
              </>
            )}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14">
        <NewsletterBody newsletter={latest} />

        {hasPast && (
          <p className="no-print mt-14 border-t border-line pt-8 text-sm">
            <Link
              href="/newsletters"
              className="font-semibold text-accent underline-offset-4 hover:underline"
            >
              <span className="lang-en">← See all past newsletters</span>
              <span className="lang-es">← Ver todos los boletines anteriores</span>
            </Link>
          </p>
        )}
      </div>
    </>
  );
}
