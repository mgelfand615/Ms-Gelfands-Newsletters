import Link from "next/link";
import { NewsletterBody, NewsletterTitle } from "@/components/newsletter-body";
import { GeneralReminders } from "@/components/general-reminders";
import { QuickLinks } from "@/components/quick-links";
import { latestNewsletter, pastNewsletters } from "@/content/newsletters";
import { T } from "@/components/t";

/**
 * Families land straight on the most recent newsletter — no click needed.
 * Older weeks live on the Past Newsletters tab.
 *
 * General Reminders and Quick Links sit here rather than inside the
 * newsletter itself: they are true all year, so they belong beside whichever
 * week is current, not repeated in every archived one.
 */
export default function HomePage() {
  const latest = latestNewsletter();
  const hasPast = pastNewsletters().length > 0;

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12">
      <div className="mb-12">
        <NewsletterTitle dateRange={latest.dateRange} />
      </div>

      <div className="space-y-12">
        <NewsletterBody newsletter={latest} />
        <GeneralReminders />
        <QuickLinks />
      </div>

      {hasPast && (
        <p className="no-print mt-14 border-t border-line pt-8 text-sm">
          <Link
            href="/newsletters"
            className="font-semibold text-accent underline-offset-4 hover:underline"
          >
            <T
              en="← See all past newsletters"
              es="← Ver todos los boletines anteriores"
            />
          </Link>
        </p>
      )}
    </div>
  );
}
