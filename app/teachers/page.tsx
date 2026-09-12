import type { Metadata } from "next";
import { teachers } from "@/content/site";
import { isBlank, type Text } from "@/content/types";
import { Placeholder, T } from "@/components/t";

export const metadata: Metadata = {
  title: "About Your Teachers",
  description: "Meet the teaching team.",
};

export default function TeachersPage() {
  return (
    <>
      <header className="border-b border-line bg-gradient-to-b from-highlight-soft/60 to-transparent">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            <span className="lang-en">About Your Teachers</span>
            <span className="lang-es">Sobre Sus Maestras</span>
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-5xl space-y-12 px-5 py-12 sm:px-8 sm:py-14">
        {teachers.map((teacher) => (
          <section
            key={teacher.name}
            className="rounded-card border border-line bg-surface p-6 sm:p-8"
          >
            {/* Name + subject */}
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-line pb-5">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
                {teacher.name}
              </h2>
              <span className="rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent">
                <T value={teacher.subject} />
              </span>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-8">
              {/* Photo */}
              <div>
                {teacher.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    className="h-40 w-40 rounded-card object-cover"
                  />
                ) : (
                  <div className="flex h-40 w-40 flex-col items-center justify-center rounded-card border border-dashed border-line bg-surface-2 p-3 text-center text-xs italic text-muted">
                    <span className="lang-en">Add a photo</span>
                    <span className="lang-es">Agregue una foto</span>
                  </div>
                )}
              </div>

              {/* About Me */}
              <div>
                <FieldLabel en="About Me" es="Sobre Mí" />
                <div className="mt-2">
                  {isBlank(teacher.aboutMe) ? (
                    <Placeholder />
                  ) : (
                    <p className="leading-relaxed text-ink">
                      <T value={teacher.aboutMe} />
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Contact / Education / Favorites */}
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              <Field
                en="Contact"
                es="Contacto"
                value={teacher.contact}
                tone="ice"
              />
              <Field
                en="Education"
                es="Educación"
                value={teacher.education}
                tone="lilac"
              />
              <Field
                en="Favorites"
                es="Favoritos"
                value={teacher.favorites}
                tone="mint"
              />
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

function FieldLabel({ en, es }: { en: string; es: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-wide text-muted">
      <span className="lang-en">{en}</span>
      <span className="lang-es">{es}</span>
    </p>
  );
}

const tones = {
  ice: "bg-sky-soft/50 border-sky-ink/20",
  lilac: "bg-accent-soft/50 border-accent/25",
  mint: "bg-highlight-soft/60 border-highlight/25",
} as const;

function Field({
  en,
  es,
  value,
  tone,
}: {
  en: string;
  es: string;
  value: Text;
  tone: keyof typeof tones;
}) {
  return (
    <div className={`rounded-card border p-5 ${tones[tone]}`}>
      <FieldLabel en={en} es={es} />
      <div className="mt-2">
        {isBlank(value) ? (
          <p className="text-sm italic text-muted">
            <span className="lang-en">Add your content here.</span>
            <span className="lang-es">Agregue su contenido aquí.</span>
          </p>
        ) : (
          <p className="leading-relaxed text-ink">
            <T value={value} />
          </p>
        )}
      </div>
    </div>
  );
}
