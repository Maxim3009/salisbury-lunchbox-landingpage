import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://www.salisburylunchbox.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Salisbury Lunchbox | Fresh Lunch, Made Daily",
    template: "%s | Salisbury Lunchbox",
  },
  description:
    "Salisbury Lunchbox is a local lunch takeaway serving freshly made sandwiches, salads, wraps and rice bowls using quality ingredients, ready fast.",
  keywords: [
    "lunch takeaway Salisbury",
    "sandwich shop Salisbury",
    "fresh lunch near me",
    "Salisbury Lunchbox",
  ],
  openGraph: {
    title: "Salisbury Lunchbox | Fresh Lunch, Made Daily",
    description:
      "Freshly prepared sandwiches, salads and bowls made with quality ingredients — ready when you are.",
    url: siteUrl,
    siteName: "Salisbury Lunchbox",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
