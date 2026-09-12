import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { klass } from "@/content/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(klass.url),
  title: {
    default: klass.name,
    template: `%s · ${klass.shortName}`,
  },
  description: klass.description,
  openGraph: {
    title: klass.name,
    description: klass.description,
    type: "website",
  },
};

/* Apply saved choices before first paint: a family who chose Spanish never
   sees a flash of English, and one who chose dark never sees a white flash.
   This has to be a blocking script in <head> — anything later runs after the
   browser has already painted. */
const preferencesScript = `
(function () {
  try {
    var lang = localStorage.getItem('lang');
    if (lang === 'es') {
      document.documentElement.dataset.lang = 'es';
      document.documentElement.lang = 'es';
    }
    var theme = localStorage.getItem('theme');
    if (theme === 'light' || theme === 'dark') {
      document.documentElement.dataset.theme = theme;
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: preferencesScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
