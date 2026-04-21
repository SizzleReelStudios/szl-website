import type { Metadata } from "next";
import { Archivo, Oswald } from "next/font/google";
import "./globals.css";

const bodyFont = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sizzle Reel Studios",
  description: "Perth nightlife videography for artists, venues, promoters, and festivals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
