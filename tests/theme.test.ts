import { readFileSync } from "node:fs";
import { beforeEach, describe, expect, it, vi } from "vitest";

async function freshTheme() {
  vi.resetModules();
  return import("@/lib/theme");
}

beforeEach(() => {
  localStorage.clear();
  delete document.documentElement.dataset.theme;
});

describe("choosing an appearance", () => {
  it("follows the device until someone says otherwise", async () => {
    const { getSnapshot } = await freshTheme();
    expect(getSnapshot()).toBe("system");
  });

  it("leaves no attribute on the page while following the device", async () => {
    // The CSS media query only gets a say when data-theme is absent, so
    // writing data-theme="system" would silently break following the device.
    const { setTheme } = await freshTheme();
    setTheme("dark");
    setTheme("system");
    expect(document.documentElement.dataset.theme).toBeUndefined();
  });

  it("stores nothing while following the device", async () => {
    // Otherwise a reader who picks dark in winter is stuck in it forever.
    const { setTheme } = await freshTheme();
    setTheme("light");
    setTheme("system");
    expect(localStorage.getItem("theme")).toBeNull();
  });

  it("remembers an explicit choice", async () => {
    const { setTheme } = await freshTheme();
    setTheme("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(document.documentElement.dataset.theme).toBe("dark");
  });

  it("picks a saved choice up on the next visit", async () => {
    localStorage.setItem("theme", "light");
    const { getSnapshot } = await freshTheme();
    expect(getSnapshot()).toBe("light");
  });

  it("ignores a nonsense saved value", async () => {
    localStorage.setItem("theme", "chartreuse");
    const { getSnapshot } = await freshTheme();
    expect(getSnapshot()).toBe("system");
  });

  it("cycles device → light → dark → device", async () => {
    const { nextTheme } = await freshTheme();
    expect(nextTheme("system")).toBe("light");
    expect(nextTheme("light")).toBe("dark");
    expect(nextTheme("dark")).toBe("system");
  });

  it("follows a change made in another tab", async () => {
    const { subscribe, getSnapshot } = await freshTheme();
    subscribe(() => {});
    window.dispatchEvent(
      new StorageEvent("storage", { key: "theme", newValue: "dark" }),
    );
    expect(getSnapshot()).toBe("dark");
  });

  it("treats a cleared value in another tab as following the device", async () => {
    localStorage.setItem("theme", "dark");
    const { subscribe, getSnapshot } = await freshTheme();
    subscribe(() => {});
    window.dispatchEvent(
      new StorageEvent("storage", { key: "theme", newValue: null }),
    );
    expect(getSnapshot()).toBe("system");
  });
});

describe("the two dark palettes stay identical", () => {
  /**
   * Dark colours are applied by two selectors — one for "follow my device"
   * and one for "I chose dark". If they ever list different variables, one
   * group of readers gets a half-themed page.
   */
  const css = readFileSync("app/globals.css", "utf8");

  function assignmentsIn(pattern: RegExp): string[] {
    const block = css.match(pattern);
    expect(block, `could not find the block for ${pattern}`).toBeTruthy();
    return (block![1].match(/--[\w-]+:\s*var\(--d-[\w-]+\);/g) ?? [])
      .map((line) => line.trim())
      .sort();
  }

  const followsDevice = assignmentsIn(
    /:root:not\(\[data-theme="light"\]\) \{([\s\S]*?)\n {2}\}/,
  );
  const chosenDark = assignmentsIn(
    /:root\[data-theme="dark"\] \{([\s\S]*?)\n\}/,
  );

  it("both actually set something", () => {
    expect(followsDevice.length).toBeGreaterThan(10);
  });

  it("assign exactly the same variables", () => {
    expect(chosenDark).toEqual(followsDevice);
  });

  it("every dark value they point at is defined", () => {
    for (const line of followsDevice) {
      const token = line.match(/var\((--d-[\w-]+)\)/)![1];
      expect(css, `${token} is used but never declared`).toContain(`${token}:`);
    }
  });
});
