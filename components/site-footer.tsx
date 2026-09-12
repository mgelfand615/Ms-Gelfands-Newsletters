import { contact, klass } from "@/content/site";
import { isBlank } from "@/content/types";
import { T } from "@/components/t";

/**
 * One slim band: who this is, and how to reach them.
 *
 * The page list that used to sit here repeated the header nav exactly, and on
 * a five-page site with a sticky header that is just more to read.
 */
export function SiteFooter() {
  return (
    <footer className="no-print mt-20 border-t border-chrome-line bg-chrome">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-baseline sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-ink">
            {klass.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            {!isBlank(klass.school) && (
              <>
                <T value={klass.school} />
                {" · "}
              </>
            )}
            {klass.district} · {klass.year}
          </p>
        </div>

        <div className="sm:text-right">
          <a
            href={`mailto:${contact.email}`}
            className="break-words text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            {contact.email}
          </a>
          {!isBlank(contact.hours) && (
            <p className="mt-1 text-sm text-muted">
              <T value={contact.hours} />
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}
