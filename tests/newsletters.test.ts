import { describe, expect, it } from "vitest";
import {
  allNewsletters,
  latestNewsletter,
  newsletterBySlug,
  newsletters,
  pastNewsletters,
  validateNewsletters,
  type Newsletter,
} from "@/content/newsletters";
import { blank } from "@/content/types";

/** A minimal newsletter — only the fields these rules care about. */
function week(slug: string, date: string, number = 1): Newsletter {
  return {
    slug,
    week: number,
    date,
    dateRange: blank,
    updatesLead: blank,
    updates: [],
    updatesClose: blank,
    upcomingDates: [],
    reminders: [],
    birthdays: [],
    learning: [],
  };
}

describe("choosing which newsletter is current", () => {
  // Deliberately out of order, so a passing test means real sorting.
  const list = [
    week("week-2", "2026-09-18", 2),
    week("week-4", "2026-10-02", 4),
    week("week-1", "2026-09-11", 1),
    week("week-3", "2026-09-25", 3),
  ];

  it("sorts newest first regardless of the order they were typed", () => {
    expect(allNewsletters(list).map((n) => n.slug)).toEqual([
      "week-4",
      "week-3",
      "week-2",
      "week-1",
    ]);
  });

  it("puts the newest by date on the home page", () => {
    // The whole point of the design: paste a week in anywhere and it
    // becomes the front page on its own.
    expect(latestNewsletter(list).slug).toBe("week-4");
  });

  it("leaves the newest out of the archive", () => {
    const past = pastNewsletters(list).map((n) => n.slug);
    expect(past).toEqual(["week-3", "week-2", "week-1"]);
    expect(past).not.toContain("week-4");
  });

  it("handles a single newsletter — an empty archive, not a crash", () => {
    const one = [week("week-1", "2026-09-11")];
    expect(latestNewsletter(one).slug).toBe("week-1");
    expect(pastNewsletters(one)).toEqual([]);
  });

  it("finds a newsletter by slug, and returns nothing for an unknown one", () => {
    expect(newsletterBySlug("week-3", list)?.slug).toBe("week-3");
    expect(newsletterBySlug("week-99", list)).toBeUndefined();
  });
});

describe("catching content mistakes at build time", () => {
  it("explains an empty list instead of failing deep inside Next", () => {
    // This used to surface as:
    //   Page "/newsletters/[slug]" is missing "generateStaticParams()"
    expect(() => validateNewsletters([])).toThrowError(
      /the `newsletters` list is empty/,
    );
  });

  it("names the duplicated slug", () => {
    const dupes = [week("week-1", "2026-09-11"), week("week-1", "2026-09-18")];
    expect(() => validateNewsletters(dupes)).toThrowError(
      /two newsletters both use slug "week-1"/,
    );
  });

  it("points at the file to edit", () => {
    expect(() => validateNewsletters([])).toThrowError(
      /content\/newsletters\.ts/,
    );
  });

  it("accepts the real content", () => {
    expect(() => validateNewsletters(newsletters)).not.toThrow();
  });
});
