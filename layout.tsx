import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minhajul Islam | Business & Campus Leadership",
  description:
    "The personal portfolio of Minhajul Islam — business undergraduate, campus leader, and student engagement professional focused on leadership, marketing, and corporate relations.",
  applicationName: "Minhajul Islam Portfolio",
  openGraph: {
    title: "Minhajul Islam | Business & Campus Leadership",
    description:
      "Building connections, creating opportunities, and turning campus initiatives into meaningful experiences.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f8fb",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
