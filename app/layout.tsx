import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://nuraina.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nur Aina Saipulismi — Product-focused Frontend Engineer",
    template: "%s · Nur Aina Saipulismi",
  },
  description:
    "I build enterprise digital experiences that simplify complex workflows — dashboards, reporting systems, and intelligent, data-driven interfaces.",
  keywords: [
    "Frontend Engineer",
    "Product Engineer",
    "UI Engineer",
    "Data Visualization",
    "Enterprise Software",
    "React",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "Nur Aina Saipulismi" }],
  openGraph: {
    title: "Nur Aina Saipulismi — Product-focused Frontend Engineer",
    description:
      "Enterprise digital experiences that simplify complex workflows. Dashboards, reporting systems, and intelligent interfaces.",
    url: siteUrl,
    siteName: "Nur Aina Saipulismi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nur Aina Saipulismi — Product-focused Frontend Engineer",
    description:
      "Enterprise digital experiences that simplify complex workflows.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-white font-sans">{children}</body>
    </html>
  );
}
