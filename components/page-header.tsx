/** Shared masthead for the three non-newsletter pages. */
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string[];
}) {
  return (
    <header className="border-b border-line bg-surface-2">
      <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {intro?.map((p) => (
          <p key={p} className="mt-5 text-lg leading-relaxed text-muted">
            {p}
          </p>
        ))}
      </div>
    </header>
  );
}
