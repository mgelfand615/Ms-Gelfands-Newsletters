import Link from "next/link";
import { contact, klass, nav } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="no-print mt-20 border-t border-line bg-surface-2">
      <div className="mx-auto grid max-w-5xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            {klass.name}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {klass.school}
            <br />
            {klass.district} · {klass.year}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Pages</p>
          <ul className="mt-3 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Get in touch</p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-3 block break-words text-sm text-accent underline-offset-4 hover:underline"
          >
            {contact.email}
          </a>
          <p className="mt-2 text-sm text-muted">{contact.hours}</p>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="mx-auto max-w-5xl px-5 py-5 text-xs text-muted sm:px-8">
          © {new Date().getFullYear()} {klass.name}. Student names and photos
          are shared only with family permission.
        </p>
      </div>
    </footer>
  );
}
