import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NewsletterBody, NewsletterTitle } from "@/components/newsletter-body";
import { newsletterBySlug, newsletters } from "@/content/newsletters";

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
    <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-12">
      <Link
        href="/newsletters"
        className="no-print text-sm font-medium text-accent underline-offset-4 hover:underline"
      >
        <span className="lang-en">← Past Newsletters</span>
        <span className="lang-es">← Boletines Anteriores</span>
      </Link>

      <div className="mb-12 mt-4">
        <NewsletterTitle dateRange={newsletter.dateRange} />
      </div>

      <NewsletterBody newsletter={newsletter} />
    </div>
  );
}
