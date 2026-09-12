"use client";

import { useSyncExternalStore } from "react";
import {
  getServerSnapshot,
  getSnapshot,
  setLang,
  subscribe,
  type Lang,
} from "@/lib/lang";

/**
 * Switches the whole site between English and Spanish.
 *
 * Both languages are already in the page, so this is instant and works
 * offline. The choice is remembered on that family's device.
 */
export function LangToggle() {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div
      className="no-print flex shrink-0 items-center rounded-full border border-line bg-surface p-0.5"
      role="group"
      aria-label="Language / Idioma"
    >
      {(["en", "es"] as const).map((option: Lang) => (
        <button
          key={option}
          type="button"
          onClick={() => setLang(option)}
          aria-pressed={lang === option}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors ${
            lang === option
              ? "bg-accent text-accent-ink"
              : "text-muted hover:text-ink"
          }`}
        >
          {option === "en" ? "EN" : "ES"}
          <span className="sr-only">
            {option === "en" ? " — English" : " — Español"}
          </span>
        </button>
      ))}
    </div>
  );
}
