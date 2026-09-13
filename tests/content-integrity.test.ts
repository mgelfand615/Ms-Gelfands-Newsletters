import { describe, expect, it } from "vitest";
import { newsletters } from "@/content/newsletters";
import { teachers } from "@/content/teachers";
import { techSteps } from "@/content/student-tech";
import { quickLinks } from "@/content/quick-links";
import {
  breakingBank,
  economySections,
  makingBank,
} from "@/content/classroom-economy";
import { nav } from "@/content/site";

/**
 * These guard the content files themselves. They're the tests most likely to
 * catch a real mistake, because the usual way to add something here is to
 * copy an existing entry — which copies its id too.
 */

function ids(list: { id: string }[]) {
  return list.map((item) => item.id);
}

function expectUnique(list: { id: string }[], where: string) {
  const seen = ids(list);
  expect(new Set(seen).size, `duplicate id in ${where}: ${seen.join(", ")}`).toBe(
    seen.length,
  );
}

describe("ids are unique within each list", () => {
  it("teachers", () => expectUnique(teachers, "teachers"));
  it("tech steps", () => expectUnique(techSteps, "techSteps"));
  it("quick links", () => expectUnique(quickLinks, "quickLinks"));
  it("making bank", () => expectUnique(makingBank, "makingBank"));
  it("breaking bank", () => expectUnique(breakingBank, "breakingBank"));
  it("economy sections", () => expectUnique(economySections, "economySections"));

  it("subjects within each newsletter", () => {
    for (const n of newsletters) {
      expectUnique(n.learning, `newsletter ${n.slug}`);
    }
  });
});

describe("no id is left empty", () => {
  it("every entry has one", () => {
    const every = [
      ...teachers,
      ...techSteps,
      ...quickLinks,
      ...makingBank,
      ...breakingBank,
      ...economySections,
      ...newsletters.flatMap((n) => n.learning),
    ];
    for (const item of every) {
      expect(item.id.trim().length).toBeGreaterThan(0);
    }
  });
});

describe("the immediate-ticket list is attached to its own block", () => {
  // Regression guard. The list used to be matched to its box by comparing
  // the heading to the literal string "Major Violations", so rewording the
  // heading silently deleted the list.
  const block = breakingBank.find((b) => b.id === "major-violations");
  const ticket = block?.lists?.find((l) => l.id === "immediate-ticket");

  it("exists", () => {
    expect(block).toBeDefined();
  });

  it("carries its own list rather than relying on the heading text", () => {
    expect(ticket?.items.length).toBe(3);
  });

  it("names all three behaviours", () => {
    const text = (ticket?.items ?? []).map((i) => i.en).join(" ");
    for (const behaviour of ["Dishonesty", "Disrespect", "Unsafe Body"]) {
      expect(text).toContain(behaviour);
    }
  });

  it("labels the list", () => {
    expect(ticket?.label?.en).toBe("Immediate ticket");
  });
});

describe("economy lists", () => {
  const everyList = [...makingBank, ...breakingBank, ...economySections]
    .flatMap((block) => block.lists ?? []);

  it("are all non-empty — an empty list renders as a stray heading", () => {
    for (const list of everyList) {
      expect(list.items.length, `list "${list.id}" is empty`).toBeGreaterThan(0);
    }
  });

  it("have ids unique within their block", () => {
    for (const block of [...makingBank, ...breakingBank, ...economySections]) {
      const ids = (block.lists ?? []).map((l) => l.id);
      expect(new Set(ids).size, `duplicate list id in "${block.id}"`).toBe(
        ids.length,
      );
    }
  });
});

describe("navigation", () => {
  it("starts at the newsletter itself — families land on this week", () => {
    expect(nav[0].href).toBe("/");
  });

  it("has no duplicate destinations", () => {
    const hrefs = nav.map((n) => n.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it("is fully translated — every tab has Spanish", () => {
    for (const item of nav) {
      expect(item.label.es?.trim(), `missing Spanish for "${item.label.en}"`)
        .toBeTruthy();
    }
  });
});
