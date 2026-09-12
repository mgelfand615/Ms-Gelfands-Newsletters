import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        Page not found
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink">
        That page isn&rsquo;t here
      </h1>
      <p className="mt-4 text-lg text-muted">
        The link may be out of date. Every newsletter is listed on the home
        page.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-opacity hover:opacity-90"
      >
        Back to this week
      </Link>
    </div>
  );
}
