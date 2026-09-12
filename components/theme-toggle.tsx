"use client";

import { useSyncExternalStore } from "react";
import {
  getServerSnapshot,
  getSnapshot,
  nextTheme,
  setTheme,
  subscribe,
  type Theme,
} from "@/lib/theme";
import { T } from "@/components/t";

/**
 * One button that walks through: follow my device → light → dark.
 *
 * A single button rather than three segments, because the header already
 * carries the language switch and five tabs. The icon shows the state and
 * the label below it names the state out loud for screen readers.
 */
export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const next = nextTheme(theme);

  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      className="no-print inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-chrome-line bg-surface text-ink transition-colors hover:border-accent hover:text-accent"
    >
      <Icon theme={theme} />
      <span className="sr-only">
        <T {...LABELS[theme]} />
        {" — "}
        <T {...SWITCH_TO[next]} />
      </span>
    </button>
  );
}

const LABELS: Record<Theme, { en: string; es: string }> = {
  system: { en: "Appearance follows your device", es: "La apariencia sigue su dispositivo" },
  light: { en: "Light appearance", es: "Apariencia clara" },
  dark: { en: "Dark appearance", es: "Apariencia oscura" },
};

const SWITCH_TO: Record<Theme, { en: string; es: string }> = {
  system: { en: "switch to follow your device", es: "cambiar para seguir su dispositivo" },
  light: { en: "switch to light", es: "cambiar a claro" },
  dark: { en: "switch to dark", es: "cambiar a oscuro" },
};

function Icon({ theme }: { theme: Theme }) {
  const common = {
    width: 17,
    height: 17,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (theme === "light") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    );
  }

  if (theme === "dark") {
    return (
      <svg {...common}>
        <path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z" />
      </svg>
    );
  }

  // System: half light, half dark.
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5a8.5 8.5 0 000 17z" fill="currentColor" stroke="none" />
    </svg>
  );
}
