import { generalReminders } from "@/content/general-reminders";
import { T } from "@/components/t";
import { Rich } from "@/components/rich-text";
import { SectionHeading } from "@/components/section";

/**
 * The things that are true all year — arrival, dismissal, birthday treats.
 * Laid out like the birthday row so the two read as a matching pair.
 */
export function GeneralReminders() {
  if (generalReminders.length === 0) return null;

  return (
    <section>
      <SectionHeading
        title={{ en: "General Reminders", es: "Recordatorios Generales" }}
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {generalReminders.map((reminder) => (
          <li
            key={reminder.id}
            className="rounded-card border border-line bg-surface p-5"
          >
            <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
              <T value={reminder.title} />
            </h3>
            <p className="mt-2 leading-relaxed text-ink">
              <Rich value={reminder.body} />
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
