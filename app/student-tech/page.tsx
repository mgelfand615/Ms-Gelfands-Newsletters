import type { Metadata } from "next";
import { techIntro, techSteps } from "@/content/site";
import { isBlank, type Text } from "@/content/types";
import { Placeholder, T } from "@/components/t";

export const metadata: Metadata = {
  title: "Student Tech at Home",
  description: "How to get into each of our class tools from home.",
};

export default function StudentTechPage() {
  return (
    <>
      <header className="border-b border-line bg-gradient-to-b from-sky-soft/60 to-transparent">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            <span className="lang-en">Student Tech at Home</span>
            <span className="lang-es">Tecnología del Estudiante en Casa</span>
          </h1>
          <div className="mt-5 max-w-2xl">
            {isBlank(techIntro) ? (
              <Placeholder />
            ) : (
              <p className="text-lg leading-relaxed text-muted">
                <T value={techIntro} />
              </p>
            )}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-14">
        <div className="grid gap-5 sm:grid-cols-2">
          {techSteps.map((step) => (
            <article
              key={step.title.en}
              className="rounded-card border border-line bg-surface p-5 sm:p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
                <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
                  <T value={step.title} />
                </h2>
                {step.href ? (
                  <a
                    href={step.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
                  >
                    <span className="lang-en">Open ↗</span>
                    <span className="lang-es">Abrir ↗</span>
                  </a>
                ) : (
                  <span className="text-xs italic text-muted">
                    <span className="lang-en">add link</span>
                    <span className="lang-es">agregar enlace</span>
                  </span>
                )}
              </div>

              <div className="mt-4">
                {isBlank(step.body) ? (
                  <Placeholder />
                ) : (
                  <p className="leading-relaxed text-ink">
                    <T value={step.body} />
                  </p>
                )}
              </div>

              <dl className="mt-5 space-y-3 rounded-xl bg-surface-2 p-4">
                <Row
                  en="Username"
                  es="Usuario"
                  value={step.username}
                  hintEn="Describe the pattern — for example, your child's student ID."
                  hintEs="Describa el formato — por ejemplo, la identificación de su hijo."
                />
                <Row
                  en="Password"
                  es="Contraseña"
                  value={step.password}
                  hintEn="Say how the password was sent home. Never type the password itself — this page is public."
                  hintEs="Explique cómo se envió la contraseña a casa. Nunca escriba la contraseña — esta página es pública."
                />
              </dl>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

function Row({
  en,
  es,
  value,
  hintEn,
  hintEs,
}: {
  en: string;
  es: string;
  value: Text;
  hintEn: string;
  hintEs: string;
}) {
  return (
    <div className="grid gap-1 sm:grid-cols-[6.5rem_1fr] sm:gap-3">
      <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
        <span className="lang-en">{en}</span>
        <span className="lang-es">{es}</span>
      </dt>
      <dd className="text-sm">
        {isBlank(value) ? (
          <span className="italic text-muted">
            <span className="lang-en">{hintEn}</span>
            <span className="lang-es">{hintEs}</span>
          </span>
        ) : (
          <span className="text-ink">
            <T value={value} />
          </span>
        )}
      </dd>
    </div>
  );
}
