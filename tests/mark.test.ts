import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import {
  APPLE_PATH,
  PLANE_PATH,
  PLANE_ROTATION,
  STEM_PATH,
} from "@/components/mark";

/**
 * The browser-tab icon is a standalone file, so the drawing exists twice:
 * once in app/icon.svg and once in components/mark.tsx for the header.
 * These tests fail if someone changes one and forgets the other.
 */
const icon = readFileSync("app/icon.svg", "utf8");

describe("the tab icon matches the mark in the header", () => {
  it("uses the same apple", () => {
    expect(icon).toContain(APPLE_PATH);
  });

  it("uses the same stem", () => {
    expect(icon).toContain(STEM_PATH);
  });

  it("uses the same plane", () => {
    expect(icon).toContain(PLANE_PATH);
  });

  it("angles the plane by the same amount", () => {
    expect(icon).toContain(PLANE_ROTATION);
  });
});

describe("the plane stays centred while it is angled", () => {
  it("turns about the apple's optical centre, not the box centre", () => {
    // Rotating about (16, 18) is what keeps the plane centred inside the
    // apple. Rotating about the box centre (16, 16) would drift it upward.
    expect(PLANE_ROTATION).toMatch(/^rotate\(-?\d+(\.\d+)? 16 18\)$/);
  });

  it("is drawn symmetric about the vertical axis before rotating", () => {
    // Apex and tail notch sit on x=16; the wingtips are equal distances
    // either side of it. Only then does rotation preserve the centring.
    const points = PLANE_PATH.replace(/[MZ]/g, "")
      .trim()
      .split(/\s+/)
      .map(Number);
    const [apexX, , rightX, , notchX, , leftX] = points;

    expect(apexX).toBe(16);
    expect(notchX).toBe(16);
    expect(rightX - 16).toBeCloseTo(16 - leftX, 5);
  });
});

/**
 * Walks a path and returns the points the pen actually lands on.
 *
 * Only the on-curve anchors — the control points of a curve may sit outside
 * the shape by design, so including them would flag drawings that are
 * perfectly fine.
 */
function anchorPoints(d: string): [number, number][] {
  const tokens = d.match(/[MmLlCcSsZz]|-?\d*\.?\d+/g) ?? [];
  const points: [number, number][] = [];
  let x = 0;
  let y = 0;
  let command = "";
  let i = 0;

  const num = () => Number(tokens[i++]);

  while (i < tokens.length) {
    if (/[MmLlCcSsZz]/.test(tokens[i])) command = tokens[i++];
    if (command === "Z" || command === "z") continue;

    const relative = command === command.toLowerCase();
    // Skip the control points; only the final pair is an anchor.
    const controls = command === "C" || command === "c" ? 2 : 0;
    const smooth = command === "S" || command === "s" ? 1 : 0;
    for (let c = 0; c < controls + smooth; c++) {
      num();
      num();
    }

    const dx = num();
    const dy = num();
    x = relative ? x + dx : dx;
    y = relative ? y + dy : dy;
    points.push([x, y]);
  }

  return points;
}

/** Turn a point about (cx, cy) by `deg` clockwise, as SVG rotate() does. */
function rotate(
  [x, y]: [number, number],
  deg: number,
  cx: number,
  cy: number,
): [number, number] {
  const r = (deg * Math.PI) / 180;
  const dx = x - cx;
  const dy = y - cy;
  return [
    cx + dx * Math.cos(r) - dy * Math.sin(r),
    cy + dx * Math.sin(r) + dy * Math.cos(r),
  ];
}

describe("nothing is clipped when a phone masks the icon", () => {
  const SAFE_MIN = 3;
  const SAFE_MAX = 29;

  function expectInsideSafeArea(points: [number, number][], what: string) {
    for (const [x, y] of points) {
      expect(x, `${what} x=${x} outside the safe area`).toBeGreaterThanOrEqual(
        SAFE_MIN,
      );
      expect(x, `${what} x=${x} outside the safe area`).toBeLessThanOrEqual(
        SAFE_MAX,
      );
      expect(y, `${what} y=${y} outside the safe area`).toBeGreaterThanOrEqual(
        SAFE_MIN,
      );
      expect(y, `${what} y=${y} outside the safe area`).toBeLessThanOrEqual(
        SAFE_MAX,
      );
    }
  }

  it("keeps the apple inside", () => {
    expectInsideSafeArea(anchorPoints(APPLE_PATH), "apple");
  });

  it("keeps the stem inside", () => {
    expectInsideSafeArea(anchorPoints(STEM_PATH), "stem");
  });

  it("keeps the plane inside once it has been rotated", () => {
    // Turning a shape about its own centre can't move it further from that
    // centre, so the angle itself is always safe. What this catches is a
    // plane drawn larger, or a rotation moved off the optical centre.
    const degrees = Number(PLANE_ROTATION.match(/rotate\((-?[\d.]+)/)![1]);
    const turned = anchorPoints(PLANE_PATH).map((p) =>
      rotate(p, degrees, 16, 18),
    );
    expectInsideSafeArea(turned, "plane");
  });

  it("keeps the rotated plane within the apple, not just the canvas", () => {
    // The tighter bound: the plane has to clear the apple's own edge, which
    // is far narrower than the canvas near the top and bottom.
    const degrees = Number(PLANE_ROTATION.match(/rotate\((-?[\d.]+)/)![1]);
    const turned = anchorPoints(PLANE_PATH).map((p) =>
      rotate(p, degrees, 16, 18),
    );
    // The apple's own widest span, with a little breathing room either side.
    for (const [x, y] of turned) {
      expect(x).toBeGreaterThan(9);
      expect(x).toBeLessThan(23);
      expect(y).toBeGreaterThan(11);
      expect(y).toBeLessThan(23.5);
    }
  });
});
