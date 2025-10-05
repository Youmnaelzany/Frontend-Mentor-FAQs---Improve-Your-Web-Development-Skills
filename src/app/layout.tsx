import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";

import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap", // ✅ Better performance: shows fallback text until font loads
});

export const metadata: Metadata = {
  title: "Frontend Mentor FAQs | Improve Your Web Development Skills",
  description:
    "Explore answers to the most common questions about Frontend Mentor and discover how to level up your frontend development skills with practical, real-world coding projects.",
  keywords: [
    "frontend mentor",
    "frontend development",
    "web development",
    "coding challenges",
    "portfolio projects",
    "frontend FAQ",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Ensure responsive viewport for SEO & mobile performance */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ Preconnect for Google Fonts performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* ✅ Favicon (important for SEO and PWA) */}
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body
        className={`${workSans.className} mx-auto max-w-7xl bg-[#F8EEFF] text-[#301534] antialiased selection:bg-[#AD28EB]/20 selection:text-[#301534]`}
      >
        {/* ✅ Main landmark for accessibility */}
        <div id="__next" className="flex min-h-screen flex-col">
          <header aria-label="Site Header" />
          <main className="flex-1">{children}</main>
          <footer aria-label="Site Footer" />
        </div>
      </body>
    </html>
  );
}
