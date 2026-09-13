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
    id: "parentsquare",
    label: { en: "ParentSquare", es: "ParentSquare" },
    href: "https://www.parentsquare.com/signin",
  },
  {
    id: "alphaportal",
    label: { en: "AlphaPortal", es: "AlphaPortal" },
    href: "https://cmsnc.alphaportal.app/#/user/sign-in?returnUrl=%2Fpages%2Fstudents",
  },
  {
    id: "getting-to-know-your-student",
    label: {
      en: "Getting to Know Your Student Form",
      es: "Formulario Para Conocer a Su Estudiante",
    },
    href: "https://forms.gle/BDVnEFaAEinsoEPS7",
  },
  {
    id: "cms-volunteer",
    label: { en: "CMS Volunteer", es: "Voluntarios de CMS" },
    href: "https://cmsvolunteers.com",
  },
  {
    id: "infinite-campus",
    label: { en: "Infinite Campus", es: "Infinite Campus" },
    href: "https://www.infinitecampus.com/login",
  },
];
