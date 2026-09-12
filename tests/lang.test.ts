import { beforeEach, describe, expect, it, vi } from "vitest";

/**
 * lib/lang.ts caches the current language at module scope, so each test
 * re-imports it fresh to start from a known state.
 */
async function freshLang() {
  vi.resetModules();
  return import("@/lib/lang");
}

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute("data-lang");
  document.documentElement.lang = "en";
});

describe("choosing a language", () => {
  it("starts in English", async () => {
    const { getSnapshot } = await freshLang();
    expect(getSnapshot()).toBe("en");
  });

  it("remembers Spanish for the next visit", async () => {
    const { setLang } = await freshLang();
    setLang("es");
    expect(localStorage.getItem("lang")).toBe("es");
  });

  it("picks up a saved choice on the next visit", async () => {
    localStorage.setItem("lang", "es");
    const { getSnapshot } = await freshLang();
    expect(getSnapshot()).toBe("es");
  });

  it("sets data-lang, which is what CSS switches on", async () => {
    const { setLang } = await freshLang();
    setLang("es");
    expect(document.documentElement.dataset.lang).toBe("es");
  });

  it("sets the lang attribute too, so screen readers follow along", async () => {
    const { setLang } = await freshLang();
    setLang("es");
    expect(document.documentElement.lang).toBe("es");
  });

  it("switches back to English", async () => {
    const { setLang, getSnapshot } = await freshLang();
    setLang("es");
    setLang("en");
    expect(getSnapshot()).toBe("en");
    expect(document.documentElement.dataset.lang).toBe("en");
  });

  it("ignores a nonsense saved value rather than breaking the page", async () => {
    localStorage.setItem("lang", "klingon");
    const { getSnapshot } = await freshLang();
    expect(getSnapshot()).toBe("en");
  });
});

describe("keeping the page in step", () => {
  it("tells subscribers when the language changes", async () => {
    const { subscribe, setLang } = await freshLang();
    const seen = vi.fn();
    subscribe(seen);

    setLang("es");
    expect(seen).toHaveBeenCalledTimes(1);
  });

  it("stays quiet when the language is set to what it already is", async () => {
    const { subscribe, setLang } = await freshLang();
    const seen = vi.fn();
    subscribe(seen);

    setLang("en"); // already English
    expect(seen).not.toHaveBeenCalled();
  });

  it("stops notifying once unsubscribed", async () => {
    const { subscribe, setLang } = await freshLang();
    const seen = vi.fn();
    const unsubscribe = subscribe(seen);
    unsubscribe();

    setLang("es");
    expect(seen).not.toHaveBeenCalled();
  });

  it("follows a change made in another tab", async () => {
    // A family with the site open twice should see both switch together.
    const { subscribe, getSnapshot } = await freshLang();
    subscribe(() => {});

    window.dispatchEvent(
      new StorageEvent("storage", { key: "lang", newValue: "es" }),
    );

    expect(getSnapshot()).toBe("es");
    expect(document.documentElement.dataset.lang).toBe("es");
  });

  it("ignores unrelated storage changes", async () => {
    const { subscribe, getSnapshot } = await freshLang();
    subscribe(() => {});

    window.dispatchEvent(
      new StorageEvent("storage", { key: "theme", newValue: "dark" }),
    );

    expect(getSnapshot()).toBe("en");
  });
});
