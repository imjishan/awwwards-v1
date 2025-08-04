import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalNavigation from "@/components/global-navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HORIZON - Portfolio",
  description: "Where vision meets reality, we shape the future of tomorrow. A stunning portfolio showcasing cutting-edge design and development.",
  keywords: ["portfolio", "web development", "design", "creative", "horizon"],
  authors: [{ name: "Portfolio Developer" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GlobalNavigation />
      </body>
    </html>
  );
}
