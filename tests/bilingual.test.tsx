import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Placeholder, Prose, T } from "@/components/t";

describe("<T>", () => {
  it("puts both languages in the page so the toggle is instant", () => {
    // Nothing is fetched or translated at runtime — the CSS just hides one.
    render(<T value={{ en: "Homework", es: "Tarea" }} />);
    expect(screen.getByText("Homework")).toBeDefined();
    expect(screen.getByText("Tarea")).toBeDefined();
  });

  it("shows English in both slots when no Spanish is written yet", () => {
    render(<T value={{ en: "Homework" }} />);
    expect(screen.getAllByText("Homework")).toHaveLength(2);
  });

  it("marks the Spanish with lang=\"es\" for screen readers", () => {
    // Regression guard: without this, a screen reader reads Spanish using
    // English pronunciation — for the families the toggle exists to serve.
    const { container } = render(<T value={{ en: "Homework", es: "Tarea" }} />);
    const es = container.querySelector(".lang-es");
    const en = container.querySelector(".lang-en");
    expect(es?.getAttribute("lang")).toBe("es");
    expect(en?.getAttribute("lang")).toBe("en");
  });

  it("accepts labels written inline, not just content fields", () => {
    // This form is what removed 26 hand-written span pairs.
    render(<T en="Add a photo" es="Agregue una foto" />);
    expect(screen.getByText("Add a photo")).toBeDefined();
    expect(screen.getByText("Agregue una foto")).toBeDefined();
  });
});

describe("<Prose>", () => {
  it("shows a placeholder while the field is empty", () => {
    render(<Prose value={{ en: "", es: "" }} />);
    expect(screen.getByText("Add your content here.")).toBeDefined();
  });

  it("shows a placeholder when the field is missing entirely", () => {
    render(<Prose />);
    expect(screen.getByText("Add your content here.")).toBeDefined();
  });

  it("shows the writing once it exists, and drops the placeholder", () => {
    render(<Prose value={{ en: "We rounded numbers.", es: "Redondeamos." }} />);
    expect(screen.getByText("We rounded numbers.")).toBeDefined();
    expect(screen.queryByText("Add your content here.")).toBeNull();
  });

  it("lets a spot word its own placeholder", () => {
    render(
      <Prose
        value={{ en: "" }}
        placeholder={{ en: "Add this week's homework here.", es: "Agregue la tarea." }}
      />,
    );
    expect(screen.getByText("Add this week's homework here.")).toBeDefined();
    expect(screen.queryByText("Add your content here.")).toBeNull();
  });
});

describe("<Placeholder>", () => {
  it("is translated too, so a Spanish reader sees a Spanish prompt", () => {
    render(<Placeholder />);
    expect(screen.getByText("Agregue su contenido aquí.")).toBeDefined();
  });
});
