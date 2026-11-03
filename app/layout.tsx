import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextBites — Fresh & Flavorful Recipes",
  description:
    "Explore curated recipes with clear instructions and nutritional details on NextBites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50 selection:bg-amber-200 selection:text-neutral-900">
        <NavBar />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-neutral-200 bg-white py-6 text-center text-xs text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
          <p>
            © 2026 NextBites. Built with Next.js App Router & TypeScript.
          </p>
        </footer>
      </body>
    </html>
  );
}
