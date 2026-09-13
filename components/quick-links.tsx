import { quickLinks } from "@/content/quick-links";
import type { LinkItem } from "@/content/types";
import { asset } from "@/lib/asset";
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
                <Logo link={link} />
                <span className="flex-1">
                  <T value={link.label} />
                </span>
                <span aria-hidden className="text-muted">
                  ↗
                </span>
              </a>
            ) : (
              <span className="flex items-center justify-between gap-2 rounded-xl border border-dashed border-line bg-surface-2 px-4 py-3 font-medium text-muted">
                <Logo link={link} />
                <span className="flex-1">
                  <T value={link.label} />
                </span>
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

/**
 * The service's own logo, or its first letter when we don't have one.
 *
 * Logos are served from this site rather than fetched from the other one,
 * so opening the newsletter doesn't tell those companies that a family is
 * reading it.
 */
function Logo({ link }: { link: LinkItem }) {
  if (link.logo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={asset(link.logo)}
        alt=""
        aria-hidden
        width={22}
        height={22}
        className="h-[22px] w-[22px] shrink-0 object-contain"
      />
    );
  }

  return (
    <span
      aria-hidden
      className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md bg-accent-soft text-[11px] font-bold text-accent"
    >
      {link.label.en.charAt(0)}
    </span>
  );
}
