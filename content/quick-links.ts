/**
 * ─────────────────────────────────────────────────────────────────────────
 *  QUICK LINKS — the row of family links at the bottom of a newsletter.
 *
 *  Paste each web address into `href`. A link with a blank href still shows,
 *  greyed out, so you can see what's left to fill in.
 * ─────────────────────────────────────────────────────────────────────────
 */

import type { LinkItem } from "./types";

export const quickLinks: LinkItem[] = [
  {
    id: "parent-sign-in",
    label: { en: "Parent Sign-In", es: "Registro de Padres" },
    href: "",
  },
  { id: "alphapoint", label: { en: "AlphaPoint", es: "AlphaPoint" }, href: "" },
  { id: "forms", label: { en: "Forms", es: "Formularios" }, href: "" },
  {
    id: "google-form",
    label: { en: "Google Form", es: "Formulario de Google" },
    href: "",
  },
  {
    id: "cms-volunteer",
    label: { en: "CMS Volunteer", es: "Voluntarios de CMS" },
    href: "",
  },
  {
    id: "infinite-campus",
    label: { en: "Infinite Campus", es: "Infinite Campus" },
    href: "",
  },
];
