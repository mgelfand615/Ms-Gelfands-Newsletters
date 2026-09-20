import type { Metadata } from "next";
import { pastNewsletters } from "@/content/newsletters";
import type { Newsletter } from "@/content/newsletters";
import { isBlank, spanish } from "@/content/types";
import { PageHeader } from "@/components/page-header";
import { NewsletterBody } from "@/components/newsletter-body";
import { T } from "@/components/t";

export const metadata: Metadata = {
  title: "Past Newsletters",
  description: "Every newsletter from this school year.",
};

export default function PastNewslettersPage() {
  const past = pastNewsletters();

  return (
    <>
      <PageHeader
        title={{ en: "Past Newsletters", es: "Boletines Anteriores" }}
        intro={{
          en: "Every week of this school year, newest first. Tap a week to open it.",
          es: "Cada semana de este año escolar, la más reciente primero. Toque una semana para abrirla.",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14">
        {past.length === 0 ? (
          <p className="rounded-card border border-dashed border-line bg-surface-2 px-6 py-10 text-center italic text-muted">
            <T
              en="Past newsletters will appear here once there is more than one week."
              es="Los boletines anteriores aparecerán aquí cuando haya más de una semana."
            />
          </p>
        ) : (
          <div className="space-y-4">
            {past.map((newsletter) => (
              <ArchivedWeek key={newsletter.slug} newsletter={newsletter} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

/**
 * One week, closed until someone opens it.
 *
 * Built on <details>, so it works with the keyboard, is announced correctly,
 * opens without JavaScript, and a browser's find-on-page can still reach the
 * text inside.
 */
function ArchivedWeek({ newsletter }: { newsletter: Newsletter }) {
  const dated = !isBlank(newsletter.dateRange);

  return (
    <details className="group rounded-card border border-line bg-surface">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
        <span className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          <T
            en={
              dated
                ? `${newsletter.dateRange.en} Newsletter`
                : `Week ${newsletter.week}`
            }
            es={
              dated
                ? `Boletín del ${spanish(newsletter.dateRange)}`
                : `Semana ${newsletter.week}`
            }
          />
        </span>

        <span
          aria-hidden
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted transition-transform group-open:rotate-180"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </summary>

      <div className="border-t border-line p-5 sm:p-6">
        <NewsletterBody newsletter={newsletter} />
      </div>
    </details>
  );
}
