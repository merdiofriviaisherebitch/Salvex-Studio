import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { SiteNavigation } from "@/components/site-navigation";
import { ConvexClientProvider } from "@/lib/convex-provider";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salvex - Modern Web Design Agency",
  description:
    "Minimal, performant digital experiences shaped by Japanese calm and Nordic precision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary-foreground light`}
      >
        <ConvexClientProvider>
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 pb-12 pt-16 md:px-10 relative">
          {/* Neumorphic Rails */}
          <div className="absolute -left-4 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -right-4 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>

          {/* Left Neumorphic Lines */}
          <div className="absolute -left-8 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-12 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-16 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-20 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-24 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-28 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-32 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-36 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-40 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-44 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-48 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-52 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-56 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-60 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-64 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-68 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-72 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-76 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-80 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-84 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-88 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-92 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>
          <div className="absolute -left-96 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-left hidden md:block"></div>

          {/* Right Neumorphic Lines */}
          <div className="absolute -right-8 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-12 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-16 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-20 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-24 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-28 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-32 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-36 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-40 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-44 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-48 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-52 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-56 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-60 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-64 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-68 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-72 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-76 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-80 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-84 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-88 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-92 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>
          <div className="absolute -right-96 top-0 bottom-0 w-[2px] pointer-events-none z-10 neumorphic-rail-right hidden md:block"></div>

          <SiteNavigation />
          <main className="flex-1">
            {children}
          </main>
        </div>
        <Analytics />
        </ConvexClientProvider>
      </body>
    </html>
  );
}

