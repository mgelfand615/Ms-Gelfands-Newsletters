/**
 * Builds a URL for a file in /public.
 *
 * On GitHub Pages the site lives at /<repo>/, and next/link adds that prefix
 * on its own — but a plain <a href> to a PDF does not. Without this, every
 * attachment 404s once the site is published, while working perfectly on
 * your own computer.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  // Leave full URLs (https://…) and empty values alone.
  return path.startsWith("/") ? `${basePath}${path}` : path;
}
