import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Unmount anything a test rendered, so one test can't leak into the next.
afterEach(cleanup);
