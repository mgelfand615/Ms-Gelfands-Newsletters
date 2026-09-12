import { quickLinks } from "@/content/quick-links";
import { T } from "@/components/t";
import { SectionHeading } from "@/components/section";

/**
 * The row of family links at the bottom of a newsletter.
 *
 * Site-wide config rather than newsletter content, so it lives in its own
 * component instead of inside NewsletterBody — which previously reached into
 * content/site.ts to fetch it.
 */
export function QuickLinks() {
  return (
    <section className="no-print">
      <SectionHeading title={{ en: "Quick Links", es: "Enlaces Rápidos" }} />
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {quickLinks.map((link) => (
          <li key={link.id}>
            {link.href ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-2 rounded-xl border border-line bg-surface px-4 py-3 font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <T value={link.label} />
                <span aria-hidden className="text-muted">
                  ↗
                </span>
              </a>
            ) : (
              <span className="flex items-center justify-between gap-2 rounded-xl border border-dashed border-line bg-surface-2 px-4 py-3 font-medium text-muted">
                <T value={link.label} />
                <span className="text-xs italic">
                  <T en="add link" es="agregar enlace" />
                </span>
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
