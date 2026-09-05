import type { Metadata } from "next";
import { Inter, Oswald, Permanent_Marker } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CurtainProvider } from "@/components/CurtainTransition";
import "./globals.css";

// Oswald is a bold condensed display face — heavy enough for poster-style
// headings but a step lighter than Anton, used as-is without extra
// font-weight utilities layered on top.
const oswald = Oswald({
  weight: "600",
  variable: "--font-heading",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Thick, hand-drawn marker style — used for the playful "Rolls / Sandwiches /
// Wraps" hover labels on the Our Story image tiles.
const permanentMarker = Permanent_Marker({
  weight: "400",
  variable: "--font-marker",
  subsets: ["latin"],
});

const siteUrl = "https://salisburylunchbox.netlify.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Salisbury Lunch Box | Fresh Lunch, Made Daily",
    template: "%s | Salisbury Lunch Box",
  },
  description:
    "Salisbury Lunch Box is a local lunch takeaway serving freshly made burgers, sandwiches, salads, wraps and rice dishes using quality ingredients, ready fast.",
  keywords: [
    "lunch takeaway Salisbury",
    "sandwich shop Salisbury",
    "fresh lunch near me",
    "Salisbury Lunch Box",
    "Asquith",
    "Hornsby",
    "Hornsby food",
    "Hornsby lunch",
    "Asquith food",
    "Asquith lunch",
    "lunch takeaway Asquith",
    "lunch takeaway Hornsby",
    "sandwich shop Asquith",
    "sandwich shop Hornsby",
    "fresh lunch Asquith",
    "fresh lunch Hornsby",
    "burgers Asquith",
    "burgers Hornsby",
    "wraps Asquith",
    "wraps Hornsby",
    "cafe Asquith",
    "cafe Hornsby",
    "Asquith takeaway",
    "Hornsby takeaway",
  ],
  openGraph: {
    title: "Salisbury Lunch Box | Fresh Lunch, Made Daily",
    description:
      "Freshly prepared sandwiches, salads and bowls made with quality ingredients — ready when you are.",
    url: siteUrl,
    siteName: "Salisbury Lunch Box",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${inter.variable} ${permanentMarker.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-primary">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
        >
          Skip to content
        </a>
        <CurtainProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </CurtainProvider>
      </body>
    </html>
  );
}
