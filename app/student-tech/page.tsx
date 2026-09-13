import type { Metadata } from "next";
import { techIntro, techSteps } from "@/content/student-tech";
import type { TechStep } from "@/content/student-tech";
import { isBlank, type Text } from "@/content/types";
import { PageHeader } from "@/components/page-header";
import { asset } from "@/lib/asset";
import { T } from "@/components/t";
import { Rich } from "@/components/rich-text";

export const metadata: Metadata = {
  title: "Student Tech at Home",
  description: "How to get into each of our class tools from home.",
};

export default function StudentTechPage() {
  return (
    <>
      <PageHeader
        title={{
          en: "Student Tech at Home",
          es: "Tecnología del Estudiante en Casa",
        }}
        intro={techIntro}
      />

      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-14">
        {/* Two independent columns rather than a grid. In a grid every card
            in a row is as tall as the tallest, so a short card leaves a gap
            beneath it; here each column simply flows, and cards alternate
            between them so the reading order still runs across. */}
        <div className="grid items-start gap-5 sm:grid-cols-2">
          {[0, 1].map((column) => (
            <div key={column} className="flex flex-col gap-5">
              {techSteps
                .filter((_, i) => i % 2 === column)
                .map((step) => (
                  <StepCard key={step.id} step={step} />
                ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function StepCard({ step }: { step: TechStep }) {
  return (
    <article className="rounded-card border border-line bg-surface p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line pb-4">
        <h2 className="flex items-center gap-2.5 font-display text-xl font-semibold tracking-tight text-ink">
          {step.logo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={asset(step.logo)}
              alt=""
              aria-hidden
              className="h-6 w-6 shrink-0 object-contain"
            />
          )}
          <T value={step.title} />
        </h2>
        {step.href ? (
          <a
            href={step.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            <T en="Open ↗" es="Abrir ↗" />
          </a>
        ) : (
          <span className="text-xs italic text-muted">
            <T en="add link" es="agregar enlace" />
          </span>
        )}
      </div>

      {!isBlank(step.body) && (
        <p className="mt-4 leading-relaxed text-ink">
          <Rich value={step.body} />
        </p>
      )}

      {step.notes && step.notes.length > 0 && (
        <div className="mt-4 space-y-3">
          {step.notes.map((note) => (
            <div key={note.label.en} className="rounded-xl bg-surface-2 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                <T value={note.label} />
              </p>
              <p className="mt-1.5 leading-relaxed text-ink">
                <Rich value={note.text} />
              </p>
            </div>
          ))}
        </div>
      )}

      {(!isBlank(step.username) || !isBlank(step.password)) && (
        <dl className="mt-5 space-y-3 rounded-xl bg-surface-2 p-4">
          {!isBlank(step.username) && (
            <CredentialRow
              label={{ en: "Username", es: "Usuario" }}
              value={step.username}
            />
          )}
          {!isBlank(step.password) && (
            <CredentialRow
              label={{ en: "Password", es: "Contraseña" }}
              value={step.password}
            />
          )}
        </dl>
      )}

      <AppLinks step={step} />
    </article>
  );
}

function CredentialRow({ label, value }: { label: Text; value: Text }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[6.5rem_1fr] sm:gap-3">
      <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
        <T value={label} />
      </dt>
      {/* Plain text, not the content renderer: a username like
          "StudentID@student.cms.k12.nc.us" is a pattern to type, and
          linkifying it would invite a parent to email it. */}
      <dd className="text-sm text-ink">
        <T value={value} />
      </dd>
    </div>
  );
}

/**
 * Straight to the app listing, so a parent on a phone doesn't have to guess
 * which of several similarly-named apps is the right one.
 */
function AppLinks({ step }: { step: TechStep }) {
  if (!step.appleApp && !step.androidApp) return null;

  const pill =
    "rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-semibold text-accent transition-colors hover:border-accent";

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-wide text-muted">
        <T en="Get the app" es="Obtener la aplicación" />
      </span>
      {step.appleApp && (
        <a
          href={step.appleApp}
          target="_blank"
          rel="noopener noreferrer"
          className={pill}
        >
          <T en="iPhone & iPad" es="iPhone y iPad" />
        </a>
      )}
      {step.androidApp && (
        <a
          href={step.androidApp}
          target="_blank"
          rel="noopener noreferrer"
          className={pill}
        >
          Android
        </a>
      )}
    </div>
  );
}
