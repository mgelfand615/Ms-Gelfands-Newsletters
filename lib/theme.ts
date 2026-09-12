/**
 * Light / dark preference, kept outside React.
 *
 * Three states, not two. "System" is the default and has to stay reachable —
 * a reader whose phone switches to dark at sunset should be able to get that
 * behaviour back after trying the other two.
 *
 * The choice lives on <html data-theme="…">, which the CSS in globals.css
 * reads. Nothing is stored while the setting is "system", so the page keeps
 * following the device rather than freezing whatever it was on first visit.
 */

export type Theme = "system" | "light" | "dark";

const STORAGE_KEY = "theme";

const listeners = new Set<() => void>();

function readSavedTheme(): Theme {
  if (typeof document === "undefined") return "system";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "light" || saved === "dark" ? saved : "system";
  } catch {
    // Private browsing — follow the device for this visit.
    return "system";
  }
}

let current: Theme = readSavedTheme();

export function subscribe(onChange: () => void): () => void {
  listeners.add(onChange);

  // Someone reading in two tabs should see both change together.
  window.addEventListener("storage", onStorage);

  return () => {
    listeners.delete(onChange);
    if (listeners.size === 0) {
      window.removeEventListener("storage", onStorage);
    }
  };
}

export function getSnapshot(): Theme {
  return current;
}

/** Pages are built without a preference, so they ship following the device. */
export function getServerSnapshot(): Theme {
  return "system";
}

/** The order the button walks through on each press. */
export function nextTheme(theme: Theme): Theme {
  return theme === "system" ? "light" : theme === "light" ? "dark" : "system";
}

export function setTheme(next: Theme): void {
  apply(next);

  try {
    if (next === "system") localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // Nothing to persist to; the choice still applies to this visit.
  }
}

function onStorage(event: StorageEvent): void {
  if (event.key !== STORAGE_KEY) return;
  const value = event.newValue;
  apply(value === "light" || value === "dark" ? value : "system");
}

function apply(next: Theme): void {
  if (current === next) return;
  current = next;

  const root = document.documentElement;
  // No attribute at all means "follow the device", which is what the CSS
  // media query is waiting for.
  if (next === "system") delete root.dataset.theme;
  else root.dataset.theme = next;

  for (const listener of listeners) listener();
}
