import Link from "next/link";
import type { Metadata } from "next";
import { pastNewsletters } from "@/content/newsletters";
import { isBlank } from "@/content/types";
import { T } from "@/components/t";

export const metadata: Metadata = {
  title: "Past Newsletters",
  description: "Every newsletter from this school year.",
};

export default function PastNewslettersPage() {
  const past = pastNewsletters();

  return (
    <>
      <header className="border-b border-line bg-gradient-to-b from-sky-soft/50 to-transparent">
        <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            <span className="lang-en">Past Newsletters</span>
            <span className="lang-es">Boletines Anteriores</span>
          </h1>
          <p className="mt-3 text-lg text-muted">
            <span className="lang-en">
              Every week of this school year, newest first.
            </span>
            <span className="lang-es">
              Cada semana de este año escolar, la más reciente primero.
            </span>
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-14">
        {past.length === 0 ? (
          <p className="rounded-card border border-dashed border-line bg-surface-2 px-6 py-10 text-center italic text-muted">
            <span className="lang-en">
              Past newsletters will appear here once there is more than one
              week.
            </span>
            <span className="lang-es">
              Los boletines anteriores aparecerán aquí cuando haya más de una
              semana.
            </span>
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
                      <span className="lang-en">Week {n.week}</span>
                      <span className="lang-es">Semana {n.week}</span>
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
