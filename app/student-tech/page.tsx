import type { Metadata } from "next";
import { techIntro, techSteps } from "@/content/student-tech";
import type { TechStep } from "@/content/student-tech";
import type { Text } from "@/content/types";
import { PageHeader } from "@/components/page-header";
import { Prose, T } from "@/components/t";

export const metadata: Metadata = {
  title: "Student Tech at Home",
  description: "How to get into each of our class tools from home.",
};

export default function StudentTechPage() {
  return (
    <>
      <PageHeader
        tone="ice"
        title={{
          en: "Student Tech at Home",
          es: "Tecnología del Estudiante en Casa",
        }}
        intro={techIntro}
      />

      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-14">
        <div className="grid gap-5 sm:grid-cols-2">
          {techSteps.map((step) => (
            <StepCard key={step.id} step={step} />
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
            <T en="Open ↗" es="Abrir ↗" />
          </a>
        ) : (
          <span className="text-xs italic text-muted">
            <T en="add link" es="agregar enlace" />
          </span>
        )}
      </div>

      <div className="mt-4">
        <Prose value={step.body} />
      </div>

      <dl className="mt-5 space-y-3 rounded-xl bg-surface-2 p-4">
        <CredentialRow
          label={{ en: "Username", es: "Usuario" }}
          value={step.username}
          hint={{
            en: "Describe the pattern — for example, your child's student ID.",
            es: "Describa el formato — por ejemplo, la identificación de su hijo.",
          }}
        />
        <CredentialRow
          label={{ en: "Password", es: "Contraseña" }}
          value={step.password}
          hint={{
            en: "Say how the password was sent home. Never type the password itself — this page is public.",
            es: "Explique cómo se envió la contraseña a casa. Nunca escriba la contraseña — esta página es pública.",
          }}
        />
      </dl>
    </article>
  );
}

function CredentialRow({
  label,
  value,
  hint,
}: {
  label: Text;
  value: Text;
  hint: Text;
}) {
  return (
    <div className="grid gap-1 sm:grid-cols-[6.5rem_1fr] sm:gap-3">
      <dt className="text-xs font-semibold uppercase tracking-wide text-muted">
        <T value={label} />
      </dt>
      <dd className="text-sm">
        <Prose
          value={value}
          placeholder={hint}
          placeholderClassName="text-sm italic text-muted"
          className="text-ink"
        />
      </dd>
    </div>
  );
}
