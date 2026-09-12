"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { klass, nav } from "@/content/site";
import { LangToggle } from "@/components/lang-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { T } from "@/components/t";
import { Mark } from "@/components/mark";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // An individual past newsletter keeps "Past Newsletters" highlighted.
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="no-print sticky top-0 z-40 border-b border-chrome-line bg-chrome/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <Mark className="h-9 w-9 shrink-0" />
          <span className="hidden whitespace-nowrap text-sm font-semibold tracking-tight text-ink sm:inline">
            {klass.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-medium transition-colors ${
                isActive(item.href) ? "text-accent" : "text-muted hover:text-ink"
              }`}
            >
              <T value={item.label} />
              {isActive(item.href) && (
                <span className="absolute inset-x-2.5 -bottom-px h-0.5 rounded-full bg-accent" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-chrome-line bg-surface text-ink transition-colors hover:border-accent hover:text-accent xl:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-chrome-line bg-chrome xl:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? "bg-accent-soft text-accent"
                    : "text-ink hover:bg-surface-2"
                }`}
              >
                <T value={item.label} />
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
