import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sri Ponniamman Trans | Smart Logistics Solutions That Move The World",
  description: "Premier container shipping, port haulage, import/export customs clearance, and global supply chain logistics by Sri Ponniamman Trans.",
  keywords: ["Sri Ponniamman Trans", "container logistics", "port shipping", "sea freight", "custom clearance", "container haulage", "global logistics"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#edeef2] text-neutral-900 antialiased selection:bg-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
