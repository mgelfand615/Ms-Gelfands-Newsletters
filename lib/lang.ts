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

/**
 * Resolved once when this module loads, so it is never null and every later
 * comparison is against a known value.
 *
 * Client components still render on the server during the static export, so
 * this has to cope with there being no browser at all.
 */
function readSavedLang(): Lang {
  if (typeof document === "undefined") return "en";
  try {
    return localStorage.getItem(STORAGE_KEY) === "es" ? "es" : "en";
  } catch {
    // Private browsing — default to English for this visit.
    return "en";
  }
}

let current: Lang = readSavedLang();

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

export function getSnapshot(): Lang {
  return current;
}

/** Pages are built in English, so that's what the HTML ships as. */
export function getServerSnapshot(): Lang {
  return "en";
}

/** Switch language and remember the choice on this device. */
export function setLang(next: Lang): void {
  apply(next);

  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Nothing to persist to; the choice still applies to this visit.
  }
}

/** Another tab changed the language. */
function onStorage(event: StorageEvent): void {
  if (event.key !== STORAGE_KEY) return;
  apply(event.newValue === "es" ? "es" : "en");
}

/**
 * Put a language into effect: update the cache, the page, and anything
 * listening. Does not touch storage, so it can serve both a click here and a
 * change made in another tab.
 */
function apply(next: Lang): void {
  if (current === next) return;
  current = next;

  const root = document.documentElement;
  root.dataset.lang = next;
  root.lang = next;

  for (const listener of listeners) listener();
}
