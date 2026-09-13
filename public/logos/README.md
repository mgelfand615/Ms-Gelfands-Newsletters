# Quick Link logos

Each file is the linked service's own favicon, used only to identify that
link — the standard way of marking a link to a service you don't own.

They are stored here rather than loaded from the other site at page load, so
that opening the newsletter does not quietly tell ParentSquare, Google or
Infinite Campus that a family is reading it.

To add one for a new link: save the site's favicon here as a 64px PNG and
point the link's `logo` field at it in content/quick-links.ts. A link with no
logo falls back to its first letter, which is a perfectly good icon.
