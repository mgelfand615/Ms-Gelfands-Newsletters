import Link from "next/link";
import type { Metadata } from "next";
import { pastNewsletters } from "@/content/newsletters";
import { isBlank } from "@/content/types";
import { PageHeader } from "@/components/page-header";
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
        tone="ice"
        width="max-w-4xl"
        title={{ en: "Past Newsletters", es: "Boletines Anteriores" }}
        intro={{
          en: "Every week of this school year, newest first.",
          es: "Cada semana de este año escolar, la más reciente primero.",
        }}
      />

      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-14">
        {past.length === 0 ? (
          <p className="rounded-card border border-dashed border-line bg-surface-2 px-6 py-10 text-center italic text-muted">
            <T
              en="Past newsletters will appear here once there is more than one week."
              es="Los boletines anteriores aparecerán aquí cuando haya más de una semana."
            />
          </p>
        ) : (
          <ul className="space-y-3">
            {past.map((n) => (
              <li key={n.slug}>
                <Link
                  href={`/newsletters/${n.slug}`}
                  className="group flex items-baseline justify-between gap-4 rounded-card border border-line bg-surface p-5 transition-colors hover:border-accent"
                >
                  <span>
                    <span className="block font-display text-lg font-semibold text-ink group-hover:text-accent">
                      <T en={`Week ${n.week}`} es={`Semana ${n.week}`} />
                    </span>
                    {!isBlank(n.dateRange) && (
                      <span className="mt-0.5 block text-sm text-muted">
                        <T value={n.dateRange} />
                      </span>
                    )}
                  </span>
                  <span aria-hidden className="text-muted">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
