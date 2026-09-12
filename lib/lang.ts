/**
 * Language state, kept outside React.
 *
 * The chosen language lives on <html data-lang="…">, which CSS reads to show
 * or hide each translation (see globals.css). Because that's a browser thing
 * rather than React state, it's modelled as an external store and read with
 * useSyncExternalStore — which also keeps every toggle on the page in sync.
 */

export type Lang = "en" | "es";

const STORAGE_KEY = "lang";

const listeners = new Set<() => void>();

/** Cached so getSnapshot returns a stable value between renders. */
let current: Lang | null = null;

export function subscribe(onChange: () => void): () => void {
  listeners.add(onChange);

  // A family with the site open in two tabs should see both switch together.
  window.addEventListener("storage", onStorage);

  return () => {
    listeners.delete(onChange);
    if (listeners.size === 0) {
      window.removeEventListener("storage", onStorage);
    }
  };
}

/** Another tab changed the language. */
function onStorage(event: StorageEvent) {
  if (event.key !== STORAGE_KEY) return;
  apply(event.newValue === "es" ? "es" : "en");
}

export function getSnapshot(): Lang {
  if (current !== null) return current;
  try {
    current = localStorage.getItem(STORAGE_KEY) === "es" ? "es" : "en";
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
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Nothing to persist to; the choice still applies to this visit.
  }
  apply(next);
}

/** Put a language into effect without writing it back to storage. */
function apply(next: Lang): void {
  if (current === next) return;
  current = next;

  const root = document.documentElement;
  root.dataset.lang = next;
  root.lang = next;

  for (const listener of listeners) listener();
}
