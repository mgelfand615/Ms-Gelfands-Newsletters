import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NewsletterBody } from "@/components/newsletter-body";
import { newsletterBySlug, newsletters } from "@/content/newsletters";
import { isBlank } from "@/content/types";
import { T } from "@/components/t";

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
  return { title: `Week ${newsletter.week}` };
}

export default async function NewsletterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const newsletter = newsletterBySlug(slug);
  if (!newsletter) notFound();

  return (
    <>
      <header className="border-b border-line bg-gradient-to-b from-accent-soft/50 to-transparent">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <Link
            href="/newsletters"
            className="no-print text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            <span className="lang-en">← Past Newsletters</span>
            <span className="lang-es">← Boletines Anteriores</span>
          </Link>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            <span className="lang-en">Week {newsletter.week}</span>
            <span className="lang-es">Semana {newsletter.week}</span>
          </h1>
          {!isBlank(newsletter.dateRange) && (
            <p className="mt-3 text-lg text-muted">
              <T value={newsletter.dateRange} />
            </p>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14">
        <NewsletterBody newsletter={newsletter} />
      </div>
    </>
  );
}
