import { describe, expect, it } from "vitest";
import { blank, isBlank, spanish } from "@/content/types";

describe("isBlank", () => {
  it("treats a missing field as blank", () => {
    expect(isBlank(undefined)).toBe(true);
  });

  it("treats empty and whitespace-only English as blank", () => {
    expect(isBlank({ en: "" })).toBe(true);
    expect(isBlank({ en: "   " })).toBe(true);
    expect(isBlank({ en: "\n\t" })).toBe(true);
  });

  it("treats written English as filled in", () => {
    expect(isBlank({ en: "Picture day is Monday." })).toBe(false);
  });

  it("looks only at English — Spanish alone still counts as blank", () => {
    // The placeholder is driven by English, because that's what gets
    // written first. Spanish-only would render an empty English view.
    expect(isBlank({ en: "", es: "Hola" })).toBe(true);
  });
});

describe("spanish", () => {
  it("uses the Spanish when it exists", () => {
    expect(spanish({ en: "Homework", es: "Tarea" })).toBe("Tarea");
  });

  it("falls back to English when Spanish is missing", () => {
    expect(spanish({ en: "Homework" })).toBe("Homework");
  });

  it("falls back when Spanish is blank or only whitespace", () => {
    expect(spanish({ en: "Homework", es: "" })).toBe("Homework");
    expect(spanish({ en: "Homework", es: "   " })).toBe("Homework");
  });
});

describe("blank", () => {
  it("cannot be modified", () => {
    // One object is shared by every empty field on the site, so a stray
    // write would otherwise fill in all of them at once.
    expect(Object.isFrozen(blank)).toBe(true);
    expect(() => {
      (blank as { en: string }).en = "oops";
    }).toThrow();
    expect(blank.en).toBe("");
  });
});
