import type { Metadata } from "next";
import { teachers } from "@/content/teachers";
import type { Teacher } from "@/content/teachers";
import { isBlank } from "@/content/types";
import { PageHeader } from "@/components/page-header";
import { Placeholder, T } from "@/components/t";
import { Rich } from "@/components/rich-text";
import { asset } from "@/lib/asset";

export const metadata: Metadata = {
  title: "About Your Teachers",
  description: "Meet the teaching team.",
};

export default function TeachersPage() {
  return (
    <>
      <PageHeader
        title={{ en: "About Your Teachers", es: "Sobre Sus Maestras" }}
      />

      <div className="mx-auto max-w-5xl space-y-8 px-5 py-12 sm:px-8 sm:py-14">
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </>
  );
}

/**
 * Photo and introduction across the top, then Education and Favorites side
 * by side underneath.
 *
 * Contact sits directly under the name because that is where someone looks
 * for it — and because an email given its own box was two lines of text
 * stretched to match a box holding three degrees.
 */
function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <section className="rounded-card border border-line bg-surface p-6 sm:p-8">
      {/* The photo stretches to whatever height the introduction needs, so
          there is never a gap under it — however long the bio runs. */}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-stretch sm:gap-10">
        {teacher.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={asset(teacher.photo)}
            alt={teacher.name}
            width={180}
            height={180}
            className="h-52 w-52 shrink-0 rounded-card object-cover object-top sm:h-auto sm:max-h-[22rem] sm:w-56"
          />
        ) : (
          <div className="flex h-52 w-52 shrink-0 items-center justify-center rounded-card border border-dashed border-line bg-surface-2 p-3 text-center text-xs italic text-muted sm:h-auto sm:min-h-52 sm:w-56">
            <T en="Add a photo" es="Agregue una foto" />
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
              {teacher.name}
            </h2>
            <span className="rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent">
              <T value={teacher.subject} />
            </span>
          </div>

          <Contact teacher={teacher} />

          <div className="mt-4 border-t border-line pt-4">
            {isBlank(teacher.aboutMe) ? (
              <Placeholder />
            ) : (
              <p className="leading-relaxed text-ink">
                <Rich value={teacher.aboutMe} />
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <Panel label={{ en: "Education", es: "Educación" }}>
          {teacher.education.length === 0 ? (
            <Placeholder />
          ) : (
            <ul className="space-y-4">
              {teacher.education.map((degree) => (
                <li key={degree.school.en} className="flex items-start gap-3">
                  {degree.logo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={asset(degree.logo)}
                      alt=""
                      aria-hidden
                      className="mt-0.5 h-9 w-9 shrink-0 object-contain"
                    />
                  )}
                  <div className="min-w-0">
                    <p className="font-semibold text-ink">
                      <T value={degree.school} />
                    </p>
                    <p className="text-sm leading-snug text-muted">
                      <T value={degree.credential} />
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Panel>

        <Panel label={{ en: "Favorites", es: "Favoritos" }}>
          {teacher.favorites.length === 0 ? (
            <Placeholder />
          ) : (
            <dl className="space-y-2">
              {teacher.favorites.map((favorite) => (
                <div key={favorite.label.en} className="flex gap-4">
                  <dt className="w-20 shrink-0 text-muted">
                    <T value={favorite.label} />
                  </dt>
                  <dd className="text-ink">
                    <T value={favorite.value} />
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </Panel>
      </div>
    </section>
  );
}

function Contact({ teacher }: { teacher: Teacher }) {
  if (!teacher.email && !teacher.phone) {
    return (
      <p className="mt-2 text-sm italic text-muted">
        <T
          en="Add an email address and phone number."
          es="Agregue un correo electrónico y un número de teléfono."
        />
      </p>
    );
  }

  return (
    <p className="mt-2 text-[15px]">
      {teacher.email && (
        <a
          href={`mailto:${teacher.email}`}
          className="font-medium text-accent underline underline-offset-2 [overflow-wrap:anywhere]"
        >
          {teacher.email}
        </a>
      )}
      {teacher.email && teacher.phone && (
        <span aria-hidden className="text-muted">
          {" · "}
        </span>
      )}
      {teacher.phone && <span className="text-ink">{teacher.phone}</span>}
    </p>
  );
}

function Panel({
  label,
  children,
}: {
  label: { en: string; es: string };
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-card border border-line bg-surface-2 p-5">
      <h3 className="mb-4 font-display text-xl font-semibold tracking-tight text-ink">
        <T {...label} />
      </h3>
      {children}
    </div>
  );
}
