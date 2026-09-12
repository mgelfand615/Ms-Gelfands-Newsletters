import Link from "next/link";
import { contact, klass, nav } from "@/content/site";
import { isBlank } from "@/content/types";
import { T } from "@/components/t";

export function SiteFooter() {
  return (
    <footer className="no-print mt-20 border-t border-line bg-surface-2">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            {klass.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {!isBlank(klass.school) && (
              <>
                <T value={klass.school} />
                <br />
              </>
            )}
            {klass.district} · {klass.year}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">
            <T en="Pages" es="Páginas" />
          </p>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  <T value={item.label} />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">
            <T en="Get in touch" es="Comuníquese" />
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-3 block break-words text-sm text-accent underline-offset-4 hover:underline"
          >
            {contact.email}
          </a>
          {!isBlank(contact.hours) && (
            <p className="mt-2 text-sm text-muted">
              <T value={contact.hours} />
            </p>
          )}
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted sm:px-8">
          © {new Date().getFullYear()} {klass.name}
        </p>
      </div>
    </footer>
  );
}
