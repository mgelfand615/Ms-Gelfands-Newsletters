import type { Metadata } from "next";
import { teachers } from "@/content/teachers";
import type { Teacher } from "@/content/teachers";
import { PageHeader } from "@/components/page-header";
import { Field, FieldLabel } from "@/components/section";
import { Prose, T } from "@/components/t";

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

      <div className="mx-auto max-w-5xl space-y-12 px-5 py-12 sm:px-8 sm:py-14">
        {teachers.map((teacher) => (
          <TeacherCard key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </>
  );
}

function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <section className="rounded-card border border-line bg-surface p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-line pb-5">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">
          {teacher.name}
        </h2>
        <span className="rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent">
          <T value={teacher.subject} />
        </span>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-[auto_1fr] sm:gap-8">
        {teacher.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={teacher.photo}
            alt={teacher.name}
            className="h-40 w-40 rounded-card object-cover"
          />
        ) : (
          <div className="flex h-40 w-40 items-center justify-center rounded-card border border-dashed border-line bg-surface-2 p-3 text-center text-xs italic text-muted">
            <T en="Add a photo" es="Agregue una foto" />
          </div>
        )}

        <div>
          <FieldLabel label={{ en: "About Me", es: "Sobre Mí" }} />
          <div className="mt-2">
            <Prose value={teacher.aboutMe} />
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        <Field
          tone="plain"
          label={{ en: "Contact", es: "Contacto" }}
          value={teacher.contact}
        />
        <Field
          tone="plain"
          label={{ en: "Education", es: "Educación" }}
          value={teacher.education}
        />
        <Field
          tone="plain"
          label={{ en: "Favorites", es: "Favoritos" }}
          value={teacher.favorites}
        />
      </div>
    </section>
  );
}
