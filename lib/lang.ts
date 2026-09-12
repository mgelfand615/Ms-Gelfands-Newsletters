/**
 * Language state, kept outside React.
 *
 * The chosen language lives on <html data-lang="…">, which CSS reads to show
 * or hide each translation (see globals.css). Because that's a browser thing
 * rather than React state, it's modelled as an external store and read with
 * useSyncExternalStore — which also keeps every toggle on the page in sync.
 */

export type Lang = "en" | "es";

const listeners = new Set<() => void>();

/** Cached so getSnapshot returns a stable value between renders. */
let current: Lang | null = null;

export function subscribe(onChange: () => void): () => void {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

export function getSnapshot(): Lang {
  if (current !== null) return current;
  try {
    current = localStorage.getItem("lang") === "es" ? "es" : "en";
  } catch {
    // Private browsing — default to English for this visit.
    current = "en";
  }
  return current;
}

/** Pages are built in English, so that's what the HTML ships as. */
export function getServerSnapshot(): Lang {
  return "en";
}

export function setLang(next: Lang): void {
  current = next;

  const root = document.documentElement;
  root.dataset.lang = next;
  root.lang = next;

  try {
    localStorage.setItem("lang", next);
  } catch {
    // Nothing to persist to; the choice still applies to this visit.
  }

  for (const listener of listeners) listener();
}
