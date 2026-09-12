import Link from "next/link";
import { NewsletterBody, NewsletterTitle } from "@/components/newsletter-body";
import { latestNewsletter, pastNewsletters } from "@/content/newsletters";

/**
 * Families land straight on the most recent newsletter — no click needed.
 * Older weeks live on the Past Newsletters tab.
 */
export default function HomePage() {
  const latest = latestNewsletter();
  const hasPast = pastNewsletters().length > 0;

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12">
      <div className="mb-12">
        <NewsletterTitle dateRange={latest.dateRange} />
      </div>

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
  );
}
