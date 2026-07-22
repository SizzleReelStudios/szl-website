import type { Metadata } from "next";
import { Archivo, Oswald } from "next/font/google";
import { siteConfig } from "@/content/srs/site";
import "./globals.css";

const bodyFont = Archivo({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
});

// TODO: set metadataBase to the production URL once the domain is confirmed,
// so Open Graph images resolve to absolute URLs.
export const metadata: Metadata = {
  title: {
    default: `SZL — ${siteConfig.brand.name}`,
    template: "%s · SZL",
  },
  description: siteConfig.seo.description,
  openGraph: {
    siteName: "SZL",
    type: "website",
    locale: "en_AU",
    description: siteConfig.seo.description,
  },
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
